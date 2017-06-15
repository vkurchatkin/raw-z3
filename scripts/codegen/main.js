/* @flow */
'use strict';

import type {
  Writer,
  Bindings,
  NativeSignature,
  Type,
  Arg,
  NativeValue,
  Func,
} from './types.js';
import FileWriter from './FileWriter.js';
import { discoverBindings } from './bindings.js';
import { writeBindingsFlowDecl } from './javascript.js';
import { writeBindingsSrc } from './nan.js';

const path = require('path')
const fs = require('fs');

const apiPath = '../../z3';
const apiFiles = [ // TODO all files
  'z3_api.h'
];

const bindings = discoverBindings(apiPath, apiFiles);

const bindingsCppFile = path.join(__dirname, '../../binding.cc');
const bindingsJsFile = path.join(__dirname, '../../index.js');

const cppWriter = new FileWriter(bindingsCppFile);
const jsWriter = new FileWriter(bindingsJsFile);

writeBindingsSrc(bindings, cppWriter);
writeBindingsFlowDecl(bindings, jsWriter);
