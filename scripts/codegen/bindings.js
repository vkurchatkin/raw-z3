/* @flow */

import type {
  Bindings,
  NativeSignature,
} from './types.js';
import fs from 'fs';
import path from 'path';

function resolveType(typeStr, types) {
  if (typeStr === 'SYMBOL') {
    return { t: 'Symbol' };
  }

  if (typeStr === 'INT') {
    return { t: 'Int' };
  }

  if (typeStr === 'UINT') {
    return { t: 'Uint' };
  }

  if (typeStr === 'VOID') {
    return { t: 'Void' };
  }

  if (typeStr === 'STRING') {
    return { t: 'String' };
  }

  if (typeStr === 'BOOL') {
    return { t: 'Bool' };
  }

  if (typeStr === 'ERROR_CODE') {
    return {
      t: 'Enum',
      name: 'Z3_error_code',
      type: { t: 'Uint' }
    };
  }

  if (types[typeStr]) {
    return {
      t: 'Object',
      name: types[typeStr]
    };
  }

  throw new Error(`Type ${typeStr} is not supported`);
}


export function discoverBindings(
  apiPath: string,
  apiFiles: Array<string>
):Bindings {

  function scanApiFiles(fn) {
    for (const apiFile of apiFiles) {
      const absolutePath = path.join(__dirname, apiPath, apiFile);
      const fileContent = fs.readFileSync(absolutePath, 'utf8');
      const lines = fileContent.split('\n');

      for (const line of lines) {
        fn(line);
      }
    }
  }

  const bindings = {
    funcs: [],
    types: ['Z3_symbol'],
    enums: []
  };

  const types: { [string]: ?string } = {};
  const whitelist = [
    'Z3_mk_config',
    'Z3_mk_context',
    'Z3_mk_bool_sort',
    'Z3_mk_int_symbol',
    'Z3_mk_const',
    'Z3_mk_not',
    'Z3_mk_and',
    'Z3_mk_or',
    'Z3_mk_iff',
    'Z3_mk_solver',
    'Z3_solver_assert',
    'Z3_solver_check',
    'Z3_get_symbol_kind',
    'Z3_get_symbol_int',
    'Z3_del_config',
    'Z3_global_param_set',
    'Z3_mk_string_symbol',
    'Z3_get_symbol_string',
    'Z3_set_param_value',
    'Z3_mk_int_sort',
    'Z3_mk_add',
    'Z3_mk_eq',
    'Z3_mk_int',
    'Z3_solver_get_model',
    'Z3_model_to_string',
    'Z3_model_get_const_interp',
    'Z3_ast_to_string',
    'Z3_model_eval',
    'Z3_get_ast_kind',
    'Z3_get_numeral_int',
    'Z3_get_error_code',
    'Z3_get_error_msg',
    'Z3_inc_ref',
    'Z3_dec_ref',
    'Z3_mk_real_sort',
  ];

  // find enums

  const Searching = 0;
  const WaitingForParen = 1;
  const InsideEnum = 2;
  let state = Searching;
  let foundOptions = [];
  let val = 0;

  scanApiFiles(line => {
    if (line.match(/^ *\r?$/) || line.match(/^ *\/\/.*$/))
      return;

    if (state === Searching) {
      if (line.match(/typedef enum { */)) {
        state = InsideEnum;
      } else if (line.match(/typedef enum */)) {
        state = WaitingForParen;
      }
    } else if (state === WaitingForParen) {
      if (line.match(/{ */)) {
        state = InsideEnum;
      } else {
        throw new Error(`Failed to parse enum: ${line}`);
      }
    } else {
      const words = line.split(/[^\-a-zA-Z0-9_]+/);
      if (line.match(/}.*;/)) {
        const name = words[1];
        bindings.enums.push({
          name,
          options: foundOptions
        });
        state = Searching;
        foundOptions = [];
        val = 0;
      } else {
        if (words.length < 2) {
          throw new Error(`Failed to parse enum: ${line}`);
        }

        if (words[2]) {
          const newVal = Number(words[2]);
          if (isNaN(newVal)) {
            throw new Error(`Failed to parse enum: ${line}`);
          }
          val = newVal;
        }

        foundOptions.push({
          name: words[1],
          val
        });

        val++;
      }
    }
  });

  // object types

  scanApiFiles(line => {
    const m = line.match(/ *def_Type\(\'(.*)\',[^\']*\'(.*)\',[^\']*\'(.*)\'\)[ \t]*/);
    if (m) {
      if (!types[m[1]]) {
        types[m[1]] = m[2];
        bindings.types.push(m[2]);
      }
    }
  });

  const nativeSignatures: { [string]: ?NativeSignature } = {};

  // collect C signatures
  scanApiFiles(line => {
    const m = line.match(/^\s*(\w+)\s+Z3_API\s+(\w+)\(([^\)]*)\)/);
    if (m) {
      const resultType = m[1]
      const name = m[2];

      const argsStr = m[3].trim();
      const args = [];

      if (argsStr !== 'void') {
        const parts = argsStr.split(',');

        for (let part of parts) {
          const m = part.match(/^\s*(\w+(?:\s+\w+)?)(\s+const)?\s*\*?\s+(\w+)(\[\])?$/);
          if (m) {
            const type = m[1]; // TODO handle other relevant parts?
            args.push({
              name: m[3],
              type
            });
          } else {
            throw new Error(`Failed to parse C signature: ${line}`);
          }
        }
      }

      nativeSignatures[name] = {
        resultType,
        args
      };
    }
  });

  scanApiFiles(line => {
    const m = line.match(/^\s*def_API\('([^']*)'\s*,\s*([^,]*)\s*,\s*\((.*)\)\s*\)\s*$/);
    if (m) {
      const name = m[1];

      if (!whitelist.includes(name)) {
        return;
      }

      const nativeSignature = nativeSignatures[name];

      if (!nativeSignature) {
        throw new Error(`Native signature for ${name} not found`);
      }

      let resultType = resolveType(m[2].trim(), types);

      if ((resultType.t === 'Uint' || resultType.t === 'Int') && nativeSignature.resultType.startsWith('Z3_')) {
        resultType = {
          t: 'Enum',
          name: nativeSignature.resultType,
          type: resultType
        };
      }

      const func = {
        name,
        args: [],
        resultType
      };

      let args = m[3].trim();

      while (args) {
        const m = args.match(/\s*([^\(]*)\(([^\)]*)\)\s*/);

        if (!m) {
          throw new Error(`Failed to parse args: ${args}`);
        }

        const mode = m[1];
        const rest = m[2];

        const nativeArg = nativeSignature.args[func.args.length];

        if (!nativeArg) {
          throw new Error(`Arg count mismatch for ${name}`);
        }

        if (mode === '_in') {
          func.args.push({
            mode: { t: 'In' },
            type: resolveType(rest, types),
            name: nativeArg.name,
            nativeType: nativeArg.type
          });
        } else if (mode === '_in_array') {
          let [s, typeName] = rest.split(',');
          s = Number(s);
          typeName = typeName.trim();

          func.args.push({
            mode: { t: 'InArray', s },
            type: resolveType(typeName, types),
            name: nativeArg.name,
            nativeType: nativeArg.type
          });
        } else if (mode === '_out') {
          func.args.push({
            mode: { t: 'Out' },
            type: resolveType(rest, types),
            name: nativeArg.name,
            nativeType: nativeArg.type
          });
        } else {
          throw new Error(`${mode} args are not supported`);
        }

        args = args.slice(m[0].length);

        if (args[0] !== ',') break;
        args = args.slice(1);
      }

      if (args.length !== 0) {
        throw new Error(`Failed to parse args: ${args}`);
      }

      bindings.funcs.push(func);
    }
  });


  return bindings;
}
