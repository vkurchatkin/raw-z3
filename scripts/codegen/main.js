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
import { writeBindingsJs } from './javascript.js';
import { writeBindingsFlowDecl } from './flow.js';
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
const bindingsFlowFile = path.join(__dirname, '../../index.js.flow');


const cppWriter = new FileWriter(bindingsCppFile);
const jsWriter = new FileWriter(bindingsJsFile);
const flowWriter = new FileWriter(bindingsFlowFile);

writeBindingsSrc(bindings, cppWriter);
writeBindingsJs(bindings, jsWriter);
writeBindingsFlowDecl(bindings, flowWriter);
