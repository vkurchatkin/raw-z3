/* @flow */

/*::
import type {
  Context as Z3Context,
} from './index.js';
*/

const {
  Z3,
  OutAst,
  OutNumber
} = require('./index.js');

const assert = require('assert');

const config = Z3.mkConfig();
const ctx = Z3.mkContext(config);

const s1 = Z3.mkIntSymbol(ctx, 42);
assert.equal(Z3.getSymbolKind(ctx, s1), Z3.INT_SYMBOL);
assert.equal(Z3.getSymbolInt(ctx, s1), 42);

const s2 = Z3.mkStringSymbol(ctx, 'foo');
assert.equal(Z3.getSymbolKind(ctx, s2), Z3.STRING_SYMBOL);
assert.equal(Z3.getSymbolString(ctx, s2), 'foo');

const s3 = Z3.mkStringSymbol(ctx, 'тест');
assert.equal(Z3.getSymbolString(ctx, s3), 'тест');


function deMorgan() {
   const cfg = Z3.mkConfig();
   const ctx = Z3.mkContext(cfg);

   const bool = Z3.mkBoolSort(ctx);
   const x = Z3.mkConst(
     ctx,
     Z3.mkStringSymbol(ctx, 'x'), bool);

   const y = Z3.mkConst(
     ctx,
     Z3.mkStringSymbol(ctx, 'y'), bool);

   const conjecture = Z3.mkIff(
     ctx,
     Z3.mkNot(ctx, Z3.mkAnd(ctx, 2, [x, y])),
     Z3.mkOr(ctx, 2, [Z3.mkNot(ctx, x), Z3.mkNot(ctx, y)])
   );

   const solver = Z3.mkSolver(ctx);
   Z3.solverAssert(ctx, solver, Z3.mkNot(ctx, conjecture));
   const r = Z3.solverCheck(ctx, solver);

   assert(r === Z3.L_FALSE);
}

class Context {
  /*::
  c: Z3Context;
  */
  constructor() {
    const config = Z3.mkConfig();
    Z3.setParamValue(config, 'model', 'true');
    this.c = Z3.mkContext(config);
  }

  intVar(name) {
    const sort = Z3.mkIntSort(this.c);
    const symbol = Z3.mkStringSymbol(this.c, name);
    return Z3.mkConst(this.c, symbol, sort);
  }

  int(val) {
    const sort = Z3.mkIntSort(this.c);
    return Z3.mkInt(this.c, val, sort);
  }

  add(...arr) {
    return Z3.mkAdd(this.c, arr.length, arr);
  }

  eq(l, r) {
    return Z3.mkEq(this.c, l, r)
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

  const s = Z3.mkSolver(ctx.c);
  const x = intVar('x');


  Z3.solverAssert(ctx.c, s,
    eq(add(x, int(100)), int(3))
  );
  const r = Z3.solverCheck(ctx.c, s);

  assert(r === Z3.L_TRUE);
  const model = Z3.solverGetModel(ctx.c, s);

  const out = OutAst();

  assert(
    Z3.modelEval(ctx.c, model, x, true, out)
  );

  assert(
    Z3.getAstKind(ctx.c, out.unwrapUnsafe()) === Z3.NUMERAL_AST
  );

  const num = OutNumber();

  assert(
    Z3.getNumeralInt(ctx.c, out.unwrapUnsafe(), num)
  );

  assert(num.unwrapUnsafe() === -97);
}

deMorgan();
model();
