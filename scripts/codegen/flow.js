/* @flow */

import type {
  Arg,
  Bindings,
  Func,
  Type,
  Writer,
} from './types.js';

import {
  functionNameToJS,
  enumOptionToJS,
  typeToJS,
} from './util.js';

function typeToFlow(
  type: Type,
  nativeType:string
): string {
  switch (type.t) {
    case 'Object': return typeToJS(type.name);
    case 'Int':
      if (nativeType.startsWith('Z3'))
        return typeToJS(nativeType);
      return 'number';
    case 'Uint':
      if (nativeType.startsWith('Z3'))
        return typeToJS(nativeType);
      return 'number';
    case 'Symbol': return 'Z3Symbol';
    case 'Void': return 'void';
    case 'String': return 'string';
    case 'Bool': return 'bool';
    default:
      /*::(type.t: null)*/;
      throw new Error(`Unexpected type ${type.t}`);
  }
}

function argToFlow(
  arg: Arg
): string {
  const mode = arg.mode;
  switch (mode.t) {
    case 'In': return typeToFlow(arg.type, arg.nativeType);
    case 'InArray': return `Array<${typeToFlow(arg.type, arg.nativeType)}>`;
    case 'Out': return `Out<${typeToFlow(arg.type, arg.nativeType)}>`;
    default:
      /*::(mode.t: null)*/;
      throw new Error(`Unexpected mode ${mode.t}`);
  }
}

function writeFuncFlowDecl(
  func:Func,
  writer: Writer,
) {
  const { name, resultType, args, nativeResultType } = func;

  let argsStr = '';

  if (args.length > 0) {
    for (const arg of args.slice(0, -1)) {
      argsStr += `${arg.name}: ${argToFlow(arg)}, `;
    }
    const arg = args[args.length - 1];
    argsStr += `${arg.name}: ${argToFlow(arg)}`;
  }

  writer.write(`${functionNameToJS(name)}(${argsStr}): ${typeToFlow(resultType, nativeResultType)};\n`);
}

export function writeBindingsFlowDecl(
  bindings: Bindings,
  writer: Writer
) {
  writer.write(`
    // THIS FILE IS GENERATED AUTOMATICALLY, DON'T EDIT
    /* @flow */

    export type Out<T> = { val: T };
  `);

  for (const { name } of bindings.enums) {
    const jsName = typeToJS(name);
    writer.write(`
      declare class ${jsName}{}
      export type { ${jsName} };

    `);
  }

  for (const type of bindings.types) {
    const jsName = typeToJS(type);
    writer.write(`
      declare class ${jsName}{}
      export type { ${jsName} };

    `);
  }

  writer.write(`
    export type Z3 = {
  `);
  writer.push();


  for (const func of bindings.funcs) {
    writeFuncFlowDecl(func, writer);
  }

  writer.write('\n\n');

  for (const { name: enumName, options } of bindings.enums) {
    for (const { name, val } of options) {
      writer.write(`+${enumOptionToJS(name)}: ${typeToJS(enumName)} & number;\n`);
    };
    writer.write('\n');
  }

  writer.pop();
  writer.write(`
    };

    declare var z3: Z3;
    module.exports = z3;
  `);
}
