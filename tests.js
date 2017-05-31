/* @flow */



const {
  Z3_mk_context,
  Z3_mk_config,
  Z3_mk_int_symbol,
  Z3_get_symbol_kind,
  Z3_get_symbol_int,
  Z3_mk_string_symbol,
  Z3_get_symbol_string,
  Z3_del_config,
  Z3_mk_bool_sort,
  Z3_mk_const,
  Z3_mk_not,
  Z3_mk_and,
  Z3_mk_or,
  Z3_mk_iff,
  Z3_mk_solver,
  Z3_solver_assert,
  Z3_solver_check,

  Z3_INT_SYMBOL,
  Z3_STRING_SYMBOL,
  Z3_L_FALSE,
} = require('./index.js');

const assert = require('assert');

const config = Z3_mk_config();
const ctx = Z3_mk_context(config);

const s1 = Z3_mk_int_symbol(ctx, 42);
assert(Z3_get_symbol_kind(ctx, s1) === Z3_INT_SYMBOL);
assert(Z3_get_symbol_int(ctx, s1) === 42);

const s2 = Z3_mk_string_symbol(ctx, 'foo');
assert(Z3_get_symbol_kind(ctx, s2) === Z3_STRING_SYMBOL);
assert(Z3_get_symbol_string(ctx, s2) === 'foo');

const s3 = Z3_mk_string_symbol(ctx, 'тест');
assert(Z3_get_symbol_string(ctx, s3) === 'тест');



function deMorgan() {
   const cfg = Z3_mk_config();
   const ctx = Z3_mk_context(cfg);
   Z3_del_config(cfg);

   const bool_sort = Z3_mk_bool_sort(ctx);
   const symbol_x = Z3_mk_int_symbol(ctx, 0);
   const symbol_y = Z3_mk_int_symbol(ctx, 1);
   const x = Z3_mk_const(ctx, symbol_x, bool_sort);
   const y = Z3_mk_const(ctx, symbol_y, bool_sort);

   /* De Morgan - with a negation around */
   /* !(!(x && y) <-> (!x || !y)) */
   const not_x = Z3_mk_not(ctx, x);
   const not_y = Z3_mk_not(ctx, y);
   const x_and_y = Z3_mk_and(ctx, 2, [x, y]);
   const ls = Z3_mk_not(ctx, x_and_y);
   const rs = Z3_mk_or(ctx, 2, [not_x, not_y]);
   const conjecture = Z3_mk_iff(ctx, ls, rs);
   const negated_conjecture = Z3_mk_not(ctx, conjecture);

   const s = Z3_mk_solver(ctx);
   Z3_solver_assert(ctx, s, negated_conjecture);
   const r = Z3_solver_check(ctx, s);

   assert(r === Z3_L_FALSE);
}


deMorgan();
