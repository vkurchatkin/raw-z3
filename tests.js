/* @flow */



const {
  Z3_mk_context,
  Z3_mk_config,
  Z3_mk_int_symbol,
  Z3_get_symbol_kind,
  Z3_get_symbol_int,

  Z3_INT_SYMBOL,
} = require('./index.js');

const assert = require('assert');

const config = Z3_mk_config();
const ctx = Z3_mk_context(config);

const s1 = Z3_mk_int_symbol(ctx, 42);
assert(Z3_get_symbol_kind(ctx, s1) === Z3_INT_SYMBOL);
assert(Z3_get_symbol_int(ctx, s1) === 42);
