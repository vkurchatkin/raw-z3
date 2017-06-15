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
    exports.Z3 = binding;

    // enums
  `);

  for (const { name, options } of bindings.enums) {
    for (const { name, val } of options) {
      writer.write(`binding.${enumOptionToJS(name)} = ${val};\n`);
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

  `);


  const allTypes = getAllTypes(bindings);

  for (const type of allTypes) {
    const flowType = typeToFlow(type);
    const fnName = 'Out'+ flowType[0].toUpperCase() + flowType.slice(1);
    writer.write(`module.exports.${fnName} = Out;\n`);
  }

  writer.write('\n\n');
}
