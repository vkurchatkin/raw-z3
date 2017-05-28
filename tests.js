/* @flow */

const {
  Z3_mk_context,
  Z3_mk_config,
} = require('./index.js');

const config = Z3_mk_config();
Z3_mk_context(config);
