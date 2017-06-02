/* @flow */
'use strict';

const path = require('path');
const fs = require('fs');

const apiPath = 'z3';
const apiFiles = [ // TODO all files
  'z3_api.h'
];

/*::
type Type =
  | { t: 'Object', name: string }
  | { t: 'Symbol' }
  | { t: 'Int' }
  | { t: 'Uint' }
  | { t: 'Void' }
  | { t: 'String' }
;

type ArgMode =
  | { t: 'In' }
  | { t: 'InArray', s: number }
;

type Arg = {
  type: Type,
  nativeType: string,
  mode: ArgMode,
  name: string
};

type Func = {
  name: string,
  args: Array<Arg>,
  resultType: Type,
  nativeResultType: string
};

type Enum = {
  name: string,
  options: Array<{
    name: string,
    val: number,
  }>
};

type Bindings = {
  funcs: Array<Func>,
  types: Array<string>,
  enums: Array<Enum>
};

type NativeValue = {
  expr: string,
  cleanup: ?(string) => void,
  aliased: boolean,
};

type NativeSignature = {
  resultType: string,
  args: Array<{
    name: string,
    type: string
  }>
};
*/

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

  if (types[typeStr]) {
    return {
      t: 'Object',
      name: types[typeStr]
    };
  }

  throw new Error(`Type ${typeStr} is not supported`);
}


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


function discoverBindings(
  apiFiles/*: Array<string> */
)/*:Bindings*/  {
  const bindings = {
    funcs: [],
    types: ['Z3_symbol'],
    enums: []
  };

  const types/*:{ [string]: ?string }*/ = {};
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

  const nativeSignatures/*: { [string]: ?NativeSignature }*/ = {};

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

      const func = {
        name,
        args: [],
        resultType: resolveType(m[2].trim(), types),
        nativeResultType: nativeSignature.resultType
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

function getNativeType(
  type/*:Type*/
)/*:string*/{
  switch (type.t) {
    case 'Object': return type.name;
    case 'Int': return 'int';
    case 'Uint': return 'unsigned';
    case 'Symbol': return 'Z3_symbol';
    case 'Void': throw new Error('Void should not be serialized');
    case 'String': return `Z3_string`;
    default:
      /*::(type.t: null)*/;
      throw new Error(`Unexpected type ${type.t}`);
  }
}

function unwrapArg(
  index/*:number*/,
  arg/*:Arg*/,
  writer/*:Writer*/,
  scope/*:Scope*/
)/*:NativeValue*/ {
  const mode = arg.mode;
  switch (mode.t) {
    case 'In': return {
      expr: unwrapType(`info[${index}]`, arg.type, writer, scope),
      aliased: false, // TODO
      cleanup: null
    };
    case 'InArray': {
      const wrappedArray = scope.id();
      const arr = scope.id();
      const size = scope.id();
      writer.write(`
        auto ${wrappedArray} = info[${index}].As<Array>();
        auto ${size} = ${unwrapType(`info[${mode.s}]`, { t: 'Uint' }, writer, scope)};
        auto ${arr} = new ${getNativeType(arg.type)}[${size}];

        for (unsigned int i = 0; i < ${size}; i++) {
          ${arr}[i] = ${unwrapType(`${wrappedArray}->Get(i)`, arg.type, writer, scope)};
        }

      `);

      return {
        expr: arr,
        aliased: true,
        cleanup: (arr) => {
          writer.write(`
            delete [] ${arr};
          `)
        }
      };
    }
    default:
      /*::(mode.t:null)*/
      throw new Error(`Mode ${mode.t} is not supported`);
  }

}

function unwrapType(
  wrappedExpression/*:string*/,
  type/*:Type*/,
  writer/*:Writer*/,
  scope/*:Scope*/
)/*: string */ {
  switch (type.t) {
    case 'Object': return `static_cast<${type.name}>(GetInternalFieldPointer(${wrappedExpression}.As<Object>(), 0))`;
    case 'Int': return `${wrappedExpression}.As<Int32>()->Value()`;
    case 'Uint': return `${wrappedExpression}.As<Uint32>()->Value()`;
    case 'Symbol': return `static_cast<Z3_symbol>(${wrappedExpression}.As<External>()->Value())`;
    case 'Void': throw new Error('Void should not be serialized');
    case 'String': return `*Utf8String(${wrappedExpression})`;
    default:
      /*::(type.t: null)*/;
      throw new Error(`Unexpected type ${type.t}`);
  }
}


function wrapType(
  unwrappedId/*:string*/,
  type/*:Type*/,
  writer/*:Writer*/,
  scope/*:Scope*/
)/*: string*/{

  switch (type.t) {
    case 'Object': {
      const tpl = scope.id();
      const result = scope.id();
      writer.write(`
        auto ${tpl} = New<ObjectTemplate>();
        ${tpl}->SetInternalFieldCount(1);
        Local<Object> ${result} = ${tpl}->NewInstance();
        SetInternalFieldPointer(${result}, 0, ${unwrappedId});
      `);
      // TODO destructors
      return result;
    }

    case 'Int': return `New<Int32>(${unwrappedId})`;
    case 'Uint': return `New<Uint32>(${unwrappedId})`;
    case 'Symbol': return `New<External>(${unwrappedId})`;
    case 'Void': throw new Error('Void should not be serialized');
    case 'String': return `New<String>(${unwrappedId}).ToLocalChecked()`;

    default:
      /*::(type.t: null)*/;
      throw new Error(`Unexpected type ${type.t}`);
  }
}

function typeToFlow(
  type/*:Type*/,
  nativeType/*:string*/
)/*: string*/{

  switch (type.t) {
    case 'Object': return type.name;
    case 'Int':
      if (nativeType.startsWith('Z3'))
        return nativeType;
      return 'number';
    case 'Uint':
      if (nativeType.startsWith('Z3'))
        return nativeType;
      return 'number';
    case 'Symbol': return 'Z3_symbol';
    case 'Void': return 'void';
    case 'String': return 'string';
    default:
      /*::(type.t: null)*/;
      throw new Error(`Unexpected type ${type.t}`);
  }
}

function argToFlow(
  arg/*:Arg*/
)/*:string*/ {
  const mode = arg.mode;
  switch (mode.t) {
    case 'In': return typeToFlow(arg.type, arg.nativeType);
    case 'InArray': return `Array<${typeToFlow(arg.type, arg.nativeType)}>`;
    default:
      /*::(mode.t: null)*/;
      throw new Error(`Unexpected mode ${mode.t}`);
  }
}


class Scope {
  /*::
  _c: number
  */

  constructor() {
    this._c = 0;
  }

  id() {
    return 'v' + (++this._c);
  }
}


class Writer {
  /*::
    _impl: (string) => void;
    _offset: string;
  */

  constructor(impl) {
    this._impl = impl;
    this._offset = '';
  }

  write(s) {
    if (s[0] === '\n') {
      s = s.slice(1);
    }


    const lines = s.split('\n');
    let minOffset = Infinity;

    for (const line of lines) {
      let offset = 0;

      for (let i = 0; i < line.length; i++) {
        if (line[i] !== ' ') break;
        offset++;
      }

      if (offset < line.length) {
        minOffset = Math.min(minOffset, offset);
      }

    }

    for (let i = 0; i < lines.length; i++) {
      let line = this._offset + lines[i].slice(minOffset);
      line = line.trimRight();
      if (i !== lines.length - 1) {
        line += '\n';
      }
      this._impl(line);
    }
  }

  push() {
    this._offset += '  ';
  }

  pop() {
    this._offset = this._offset.slice(2);
  }
}

class FileWriter extends Writer {
  /*::
    _fd: number;
  */
  constructor(file) {
    super(s => (this/*: any*/)._write(s));
    this._fd = fs.openSync(file, 'w');
  }

  _write(s/*:string*/) {
    (fs/*: any*/).writeSync(this._fd, s);
  }

  close() {
    fs.closeSync(this._fd);
  }
}



function writeFuncSrc(
  func/*:Func*/,
  writer/*:Writer*/
) {
  const { name, resultType, args } = func;
  const s = new Scope();

  writer.write(`NAN_METHOD(${name}_binding) {\n`);
  writer.push();

  const unwrappedArgNames = [];
  const unwrappedArgs = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const unwrapped = unwrapArg(i, arg, writer, s);
    unwrappedArgNames.push(unwrapped.expr);
    unwrappedArgs.push(unwrapped);
  }

  if (resultType.t !== 'Void') {
    const unwrappedResult = s.id();
    writer.write(`auto ${unwrappedResult} = ${name}(${unwrappedArgNames.join(', ')});\n`);
    const result = wrapType(unwrappedResult, resultType, writer, s);
    writer.write(`info.GetReturnValue().Set(${result});\n`);
  } else {
    writer.write(`${name}(${unwrappedArgNames.join(', ')});\n`);
  }

  for (const unwrappedArg of unwrappedArgs) {
    if (unwrappedArg.cleanup) {

      if (!unwrappedArg.aliased) {
        throw new Error('Cannot cleanup unaliased arg');
      }

      unwrappedArg.cleanup(unwrappedArg.expr);
    }
  }

  writer.pop();
  writer.write('}\n\n')
}


function writeExportsSrc(
  bindings/*:Bindings*/,
  writer/*:Writer*/
) {
  writer.write('NAN_MODULE_INIT(Init) {\n');
  writer.push();

  for (const { name } of bindings.funcs) {
    writer.write(`Nan::Set(target, New<String>("${name}").ToLocalChecked(), New<FunctionTemplate>(${name}_binding)->GetFunction());\n`);
  }

  writer.pop();
  writer.write('}\n\n');
}

function writeBindingsSrc(
  bindings/*:Bindings*/,
  writer/*:Writer*/
) {
  writer.write(`
    // THIS FILE IS GENERATED AUTOMATICALLY, DON'T EDIT

    #include <nan.h>
    #include <z3.h>

    using namespace v8;
    using namespace Nan;

  `);

  // TODO destructors

  for (const func of bindings.funcs) {
    writeFuncSrc(func, writer);
  }

  writeExportsSrc(bindings, writer);

  writer.write('NODE_MODULE(bindings, Init)\n');
}

function writeFuncFlowDecl(
  func/*:Func*/,
  writer/*:Writer*/
) {
  const { name, resultType, args, nativeResultType } = func;

  let argsStr = '';

  for (const arg of args) {
    argsStr += `${arg.name}: ${argToFlow(arg)},`
  }

  writer.write(`declare export function ${name}(${argsStr}): ${typeToFlow(resultType, nativeResultType)};\n`);
}

function writeBindingsFlowDecl(
  bindings/*:Bindings*/,
  writer/*:Writer*/
) {
  writer.write(`
    // THIS FILE IS GENERATED AUTOMATICALLY, DON'T EDIT
    /* @flow */

    const binding = (require/*:any*/)('./build/Release/binding.node');
    (module/*:any*/).exports = binding;

    // enums
  `);

  for (const { name, options } of bindings.enums) {
    writer.write(`
      /*::
      type ${name} =
    `);

    writer.push();
    for (const { val } of options) {
      writer.write(`| ${val}\n`);
    };
    writer.pop();
    writer.write(`
      ;
      */

    `);

    const type = name;

    for (const { name, val } of options) {
      writer.write(`module.exports.${name} = ${val};\n`);
      writer.write(`/*:: declare export var ${name}: ${type};*/\n\n`);
    }

    writer.write('\n\n');
  }

  writer.write('/*::\n');

  for (const type of bindings.types) {
    writer.write(`
      declare class ${type}{}
      export type { ${type} };
    `);
  }

  for (const func of bindings.funcs) {
    writeFuncFlowDecl(func, writer);
  }

  writer.write('*/')

}

const bindings = discoverBindings(apiFiles);

const bindingsCppFile = path.join(__dirname, 'binding.cc');
const bindingsJsFile = path.join(__dirname, 'index.js');

const cppWriter = new FileWriter(bindingsCppFile);
const jsWriter = new FileWriter(bindingsJsFile);

writeBindingsSrc(bindings, cppWriter);
writeBindingsFlowDecl(bindings, jsWriter);
