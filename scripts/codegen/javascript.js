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
} from './util.js';

export function writeBindingsJs(
  bindings: Bindings,
  writer: Writer
) {
  writer.write(`
    // THIS FILE IS GENERATED AUTOMATICALLY, DON'T EDIT

    const binding = require('./build/Release/binding.node');
    module.exports = binding;

    // enums
  `);

  for (const { name, options } of bindings.enums) {
    for (const { name, val } of options) {
      writer.write(`module.exports.${enumOptionToJS(name)} = ${val};\n`);
    }
  }
}
