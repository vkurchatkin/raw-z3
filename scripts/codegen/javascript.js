/* @flow */

import type {
  Arg,
  Bindings,
  Func,
  Type,
  Writer,
} from './types.js';

function typeToFlow(
  type: Type,
  nativeType:string
): string {
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

  for (const arg of args) {
    argsStr += `${arg.name}: ${argToFlow(arg)},`
  }

  writer.write(`declare export function ${name}(${argsStr}): ${typeToFlow(resultType, nativeResultType)};\n`);
}

export function writeBindingsFlowDecl(
  bindings: Bindings,
  writer: Writer
) {
  writer.write(`
    // THIS FILE IS GENERATED AUTOMATICALLY, DON'T EDIT
    /* @flow */

    const binding = (require/*:any*/)('./build/Release/binding.node');
    (module/*:any*/).exports = binding;


    // static

    /*:: export type Out<T> = { val: T }; */

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
