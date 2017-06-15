/* @flow */

import type {
  Arg,
  Bindings,
  Func,
  Type,
  Writer,
} from './types.js';

import {
  enumOptionToJS,
  functionNameToJS,
  getAllTypes,
} from './util.js';

import { typeToFlow } from './flow.js';

export function writeBindingsJs(
  bindings: Bindings,
  writer: Writer
) {
  writer.write(`
    // THIS FILE IS GENERATED AUTOMATICALLY, DON'T EDIT

    const binding = require('./build/Release/binding.node');
    const Z3 = {};
    exports.Z3 = Z3;

  `);

  for (const fn of bindings.funcs) {
    const name = functionNameToJS(fn.name);

    if (fn.args.length > 0) {
      const firstArg = fn.args[0].type;

      if (firstArg.t === 'Object' && firstArg.name === 'Z3_context') {
        writer.write(`
          Z3.${name} = function ${name} () {
            const r = binding.${name}.apply(null, arguments);
            const code = binding.getErrorCode(arguments[0]);

            if (code !== Z3.OK) {
              const message = binding.getErrorMsg(arguments[0], code);
              throw new Z3Error(code, message);
            }

            return r;
          };

        `);
      } else {
        writer.write(`Z3.${name} = binding.${name};\n\n`);
      }
    } else {
      writer.write(`Z3.${name} = binding.${name};\n\n`);
    }
  }

  for (const { name, options } of bindings.enums) {
    for (const { name, val } of options) {
      writer.write(`Z3.${enumOptionToJS(name)} = ${val};\n`);
    }
  }

  writer.write('\n\n');

  writer.write(`
    function Out() {
      if (!(this instanceof Out)) return new Out;
      this.val = null;
    }

    Out.prototype.unwrap = function() {
      return this.val;
    };

    Out.prototype.unwrapUnsafe = function() {
      if (this.val === null) {
        throw new Error('Failed to unwrap out arg');
      }
      return this.val;
    };

    function Z3Error(code, message) {
      this.code = code;
      this.message = message;
      Error.captureStackTrace(this, Z3Error);
    }

    Z3Error.prototype.__proto__ = Error.prototype;

    exports.Z3Error = Z3Error;
  `);


  const allTypes = getAllTypes(bindings);

  for (const type of allTypes) {
    const flowType = typeToFlow(type);
    const fnName = 'Out'+ flowType[0].toUpperCase() + flowType.slice(1);
    writer.write(`module.exports.${fnName} = Out;\n`);
  }

  writer.write('\n\n');
}
