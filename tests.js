/* @flow */

/*::
import type {
  Z3_context,
} from './index.js';
*/



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
  Z3_set_param_value,
  Z3_mk_int_sort,
  Z3_mk_add,
  Z3_mk_eq,
  Z3_mk_int,
  Z3_solver_get_model,
  Z3_model_to_string,
  Z3_model_get_const_interp,
  Z3_ast_to_string,

  Z3_INT_SYMBOL,
  Z3_STRING_SYMBOL,
  Z3_L_FALSE,
  Z3_L_TRUE,
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

class Context {
  /*::
  _c: Z3_context;
  */
  constructor() {
    const config = Z3_mk_config();
    Z3_set_param_value(config, 'model', 'true');
    this._c = Z3_mk_context(config);
  }

  intVar(name) {
    const sort = Z3_mk_int_sort(this._c);
    const symbol = Z3_mk_string_symbol(this._c, name);
    return Z3_mk_const(this._c, symbol, sort);
  }

  int(val) {
    const sort = Z3_mk_int_sort(this._c);
    return Z3_mk_int(this._c, val, sort);
  }

  add(...arr) {
    return Z3_mk_add(this._c, arr.length, arr);
  }

  eq(l, r) {
    return Z3_mk_eq(this._c, l, r)
  }

  bound() {
    return {
      intVar: name => this.intVar(name),
      add: (...p) => this.add(...p),
      eq: (...p) => this.eq(...p),
      int: (...p) => this.int(...p),
    };
  }

}

function model() {
  const ctx = new Context();
  const { int, add, eq, intVar } = ctx.bound();

  const s = Z3_mk_solver(ctx._c);
  const x = intVar('x');


  Z3_solver_assert(ctx._c, s,
    eq(add(x, int(100)), int(3))
  );
  const r = Z3_solver_check(ctx._c, s);

  assert(r === Z3_L_TRUE);
  const model = Z3_solver_get_model(ctx._c, s);

  // const interp = Z3_model_get_const_interp(ctx._c, model, x);
  // console.log(Z3_ast_to_string(ctx._c, interp));
}


deMorgan();
model();
