/* @flow */

import type {
  Arg,
  Bindings,
  Func,
  NativeValue,
  Type,
  Writer,
} from './types.js';

import { functionNameToJS } from './util.js';

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
    case 'Bool': throw new Error('TODO');
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

    case 'Out': {
      const p = scope.id();
      writer.write(`
        ${getNativeType(arg.type)} ${p};
      `);

      return {
        expr: `&${p}`,
        aliased: true,
        cleanup: (expr) => {
          // TODO init objects?
          writer.write(`
            Nan::Set(info[${index}].As<Object>(), New<String>("val").ToLocalChecked(), ${wrapType(p, arg.type, writer, scope)});
          `);
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
    case 'Bool': return `${wrappedExpression}.As<Boolean>()->Value()`;
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
    case 'Bool': return `New<Boolean>(${unwrappedId})`;
    default:
      /*::(type.t: null)*/;
      throw new Error(`Unexpected type ${type.t}`);
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
    writer.write(`Nan::Set(target, New<String>("${functionNameToJS(name)}").ToLocalChecked(), New<FunctionTemplate>(${name}_binding)->GetFunction());\n`);
  }

  writer.pop();
  writer.write('}\n\n');
}

export function writeBindingsSrc(
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
