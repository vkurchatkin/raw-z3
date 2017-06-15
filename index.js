// THIS FILE IS GENERATED AUTOMATICALLY, DON'T EDIT

const binding = require('./build/Release/binding.node');
const Z3 = {};
exports.Z3 = Z3;

Z3.globalParamSet = binding.globalParamSet;

Z3.mkConfig = binding.mkConfig;

Z3.delConfig = binding.delConfig;

Z3.setParamValue = binding.setParamValue;

Z3.mkContext = binding.mkContext;

Z3.incRef = function incRef () {
  const r = binding.incRef.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.decRef = function decRef () {
  const r = binding.decRef.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.mkIntSymbol = function mkIntSymbol () {
  const r = binding.mkIntSymbol.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.mkStringSymbol = function mkStringSymbol () {
  const r = binding.mkStringSymbol.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.mkBoolSort = function mkBoolSort () {
  const r = binding.mkBoolSort.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.mkIntSort = function mkIntSort () {
  const r = binding.mkIntSort.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.mkRealSort = function mkRealSort () {
  const r = binding.mkRealSort.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.mkConst = function mkConst () {
  const r = binding.mkConst.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.mkEq = function mkEq () {
  const r = binding.mkEq.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.mkNot = function mkNot () {
  const r = binding.mkNot.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.mkIff = function mkIff () {
  const r = binding.mkIff.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.mkAnd = function mkAnd () {
  const r = binding.mkAnd.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.mkOr = function mkOr () {
  const r = binding.mkOr.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.mkAdd = function mkAdd () {
  const r = binding.mkAdd.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.mkInt = function mkInt () {
  const r = binding.mkInt.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.getSymbolKind = function getSymbolKind () {
  const r = binding.getSymbolKind.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.getSymbolInt = function getSymbolInt () {
  const r = binding.getSymbolInt.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.getSymbolString = function getSymbolString () {
  const r = binding.getSymbolString.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.getAstKind = function getAstKind () {
  const r = binding.getAstKind.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.getNumeralInt = function getNumeralInt () {
  const r = binding.getNumeralInt.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.modelEval = function modelEval () {
  const r = binding.modelEval.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.modelGetConstInterp = function modelGetConstInterp () {
  const r = binding.modelGetConstInterp.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.astToString = function astToString () {
  const r = binding.astToString.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.modelToString = function modelToString () {
  const r = binding.modelToString.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.getErrorCode = function getErrorCode () {
  const r = binding.getErrorCode.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.getErrorMsg = function getErrorMsg () {
  const r = binding.getErrorMsg.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.mkSolver = function mkSolver () {
  const r = binding.mkSolver.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.solverAssert = function solverAssert () {
  const r = binding.solverAssert.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.solverCheck = function solverCheck () {
  const r = binding.solverCheck.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.solverGetModel = function solverGetModel () {
  const r = binding.solverGetModel.apply(null, arguments);
  const code = binding.getErrorCode(arguments[0]);

  if (code !== Z3.OK) {
    const message = binding.getErrorMsg(arguments[0], code);
    throw new Z3Error(code, message);
  }

  return r;
};

Z3.L_FALSE = -1;
Z3.L_UNDEF = 0;
Z3.L_TRUE = 1;
Z3.INT_SYMBOL = 0;
Z3.STRING_SYMBOL = 1;
Z3.PARAMETER_INT = 0;
Z3.PARAMETER_DOUBLE = 1;
Z3.PARAMETER_RATIONAL = 2;
Z3.PARAMETER_SYMBOL = 3;
Z3.PARAMETER_SORT = 4;
Z3.PARAMETER_AST = 5;
Z3.PARAMETER_FUNC_DECL = 6;
Z3.UNINTERPRETED_SORT = 0;
Z3.BOOL_SORT = 1;
Z3.INT_SORT = 2;
Z3.REAL_SORT = 3;
Z3.BV_SORT = 4;
Z3.ARRAY_SORT = 5;
Z3.DATATYPE_SORT = 6;
Z3.RELATION_SORT = 7;
Z3.FINITE_DOMAIN_SORT = 8;
Z3.FLOATING_POINT_SORT = 9;
Z3.ROUNDING_MODE_SORT = 10;
Z3.SEQ_SORT = 11;
Z3.RE_SORT = 12;
Z3.UNKNOWN_SORT = 1000;
Z3.NUMERAL_AST = 0;
Z3.APP_AST = 1;
Z3.VAR_AST = 2;
Z3.QUANTIFIER_AST = 3;
Z3.SORT_AST = 4;
Z3.FUNC_DECL_AST = 5;
Z3.UNKNOWN_AST = 1000;
Z3.OP_TRUE = 256;
Z3.OP_FALSE = 257;
Z3.OP_EQ = 258;
Z3.OP_DISTINCT = 259;
Z3.OP_ITE = 260;
Z3.OP_AND = 261;
Z3.OP_OR = 262;
Z3.OP_IFF = 263;
Z3.OP_XOR = 264;
Z3.OP_NOT = 265;
Z3.OP_IMPLIES = 266;
Z3.OP_OEQ = 267;
Z3.OP_INTERP = 268;
Z3.OP_ANUM = 512;
Z3.OP_AGNUM = 513;
Z3.OP_LE = 514;
Z3.OP_GE = 515;
Z3.OP_LT = 516;
Z3.OP_GT = 517;
Z3.OP_ADD = 518;
Z3.OP_SUB = 519;
Z3.OP_UMINUS = 520;
Z3.OP_MUL = 521;
Z3.OP_DIV = 522;
Z3.OP_IDIV = 523;
Z3.OP_REM = 524;
Z3.OP_MOD = 525;
Z3.OP_TO_REAL = 526;
Z3.OP_TO_INT = 527;
Z3.OP_IS_INT = 528;
Z3.OP_POWER = 529;
Z3.OP_STORE = 768;
Z3.OP_SELECT = 769;
Z3.OP_CONST_ARRAY = 770;
Z3.OP_ARRAY_MAP = 771;
Z3.OP_ARRAY_DEFAULT = 772;
Z3.OP_SET_UNION = 773;
Z3.OP_SET_INTERSECT = 774;
Z3.OP_SET_DIFFERENCE = 775;
Z3.OP_SET_COMPLEMENT = 776;
Z3.OP_SET_SUBSET = 777;
Z3.OP_AS_ARRAY = 778;
Z3.OP_ARRAY_EXT = 779;
Z3.OP_BNUM = 1024;
Z3.OP_BIT1 = 1025;
Z3.OP_BIT0 = 1026;
Z3.OP_BNEG = 1027;
Z3.OP_BADD = 1028;
Z3.OP_BSUB = 1029;
Z3.OP_BMUL = 1030;
Z3.OP_BSDIV = 1031;
Z3.OP_BUDIV = 1032;
Z3.OP_BSREM = 1033;
Z3.OP_BUREM = 1034;
Z3.OP_BSMOD = 1035;
Z3.OP_BSDIV0 = 1036;
Z3.OP_BUDIV0 = 1037;
Z3.OP_BSREM0 = 1038;
Z3.OP_BUREM0 = 1039;
Z3.OP_BSMOD0 = 1040;
Z3.OP_ULEQ = 1041;
Z3.OP_SLEQ = 1042;
Z3.OP_UGEQ = 1043;
Z3.OP_SGEQ = 1044;
Z3.OP_ULT = 1045;
Z3.OP_SLT = 1046;
Z3.OP_UGT = 1047;
Z3.OP_SGT = 1048;
Z3.OP_BAND = 1049;
Z3.OP_BOR = 1050;
Z3.OP_BNOT = 1051;
Z3.OP_BXOR = 1052;
Z3.OP_BNAND = 1053;
Z3.OP_BNOR = 1054;
Z3.OP_BXNOR = 1055;
Z3.OP_CONCAT = 1056;
Z3.OP_SIGN_EXT = 1057;
Z3.OP_ZERO_EXT = 1058;
Z3.OP_EXTRACT = 1059;
Z3.OP_REPEAT = 1060;
Z3.OP_BREDOR = 1061;
Z3.OP_BREDAND = 1062;
Z3.OP_BCOMP = 1063;
Z3.OP_BSHL = 1064;
Z3.OP_BLSHR = 1065;
Z3.OP_BASHR = 1066;
Z3.OP_ROTATE_LEFT = 1067;
Z3.OP_ROTATE_RIGHT = 1068;
Z3.OP_EXT_ROTATE_LEFT = 1069;
Z3.OP_EXT_ROTATE_RIGHT = 1070;
Z3.OP_INT2BV = 1071;
Z3.OP_BV2INT = 1072;
Z3.OP_CARRY = 1073;
Z3.OP_XOR3 = 1074;
Z3.OP_BSMUL_NO_OVFL = 1075;
Z3.OP_BUMUL_NO_OVFL = 1076;
Z3.OP_BSMUL_NO_UDFL = 1077;
Z3.OP_BSDIV_I = 1078;
Z3.OP_BUDIV_I = 1079;
Z3.OP_BSREM_I = 1080;
Z3.OP_BUREM_I = 1081;
Z3.OP_BSMOD_I = 1082;
Z3.OP_PR_UNDEF = 1280;
Z3.OP_PR_TRUE = 1281;
Z3.OP_PR_ASSERTED = 1282;
Z3.OP_PR_GOAL = 1283;
Z3.OP_PR_MODUS_PONENS = 1284;
Z3.OP_PR_REFLEXIVITY = 1285;
Z3.OP_PR_SYMMETRY = 1286;
Z3.OP_PR_TRANSITIVITY = 1287;
Z3.OP_PR_TRANSITIVITY_STAR = 1288;
Z3.OP_PR_MONOTONICITY = 1289;
Z3.OP_PR_QUANT_INTRO = 1290;
Z3.OP_PR_DISTRIBUTIVITY = 1291;
Z3.OP_PR_AND_ELIM = 1292;
Z3.OP_PR_NOT_OR_ELIM = 1293;
Z3.OP_PR_REWRITE = 1294;
Z3.OP_PR_REWRITE_STAR = 1295;
Z3.OP_PR_PULL_QUANT = 1296;
Z3.OP_PR_PULL_QUANT_STAR = 1297;
Z3.OP_PR_PUSH_QUANT = 1298;
Z3.OP_PR_ELIM_UNUSED_VARS = 1299;
Z3.OP_PR_DER = 1300;
Z3.OP_PR_QUANT_INST = 1301;
Z3.OP_PR_HYPOTHESIS = 1302;
Z3.OP_PR_LEMMA = 1303;
Z3.OP_PR_UNIT_RESOLUTION = 1304;
Z3.OP_PR_IFF_TRUE = 1305;
Z3.OP_PR_IFF_FALSE = 1306;
Z3.OP_PR_COMMUTATIVITY = 1307;
Z3.OP_PR_DEF_AXIOM = 1308;
Z3.OP_PR_DEF_INTRO = 1309;
Z3.OP_PR_APPLY_DEF = 1310;
Z3.OP_PR_IFF_OEQ = 1311;
Z3.OP_PR_NNF_POS = 1312;
Z3.OP_PR_NNF_NEG = 1313;
Z3.OP_PR_NNF_STAR = 1314;
Z3.OP_PR_CNF_STAR = 1315;
Z3.OP_PR_SKOLEMIZE = 1316;
Z3.OP_PR_MODUS_PONENS_OEQ = 1317;
Z3.OP_PR_TH_LEMMA = 1318;
Z3.OP_PR_HYPER_RESOLVE = 1319;
Z3.OP_RA_STORE = 1536;
Z3.OP_RA_EMPTY = 1537;
Z3.OP_RA_IS_EMPTY = 1538;
Z3.OP_RA_JOIN = 1539;
Z3.OP_RA_UNION = 1540;
Z3.OP_RA_WIDEN = 1541;
Z3.OP_RA_PROJECT = 1542;
Z3.OP_RA_FILTER = 1543;
Z3.OP_RA_NEGATION_FILTER = 1544;
Z3.OP_RA_RENAME = 1545;
Z3.OP_RA_COMPLEMENT = 1546;
Z3.OP_RA_SELECT = 1547;
Z3.OP_RA_CLONE = 1548;
Z3.OP_FD_CONSTANT = 1549;
Z3.OP_FD_LT = 1550;
Z3.OP_SEQ_UNIT = 1551;
Z3.OP_SEQ_EMPTY = 1552;
Z3.OP_SEQ_CONCAT = 1553;
Z3.OP_SEQ_PREFIX = 1554;
Z3.OP_SEQ_SUFFIX = 1555;
Z3.OP_SEQ_CONTAINS = 1556;
Z3.OP_SEQ_EXTRACT = 1557;
Z3.OP_SEQ_REPLACE = 1558;
Z3.OP_SEQ_AT = 1559;
Z3.OP_SEQ_LENGTH = 1560;
Z3.OP_SEQ_INDEX = 1561;
Z3.OP_SEQ_TO_RE = 1562;
Z3.OP_SEQ_IN_RE = 1563;
Z3.OP_RE_PLUS = 1564;
Z3.OP_RE_STAR = 1565;
Z3.OP_RE_OPTION = 1566;
Z3.OP_RE_CONCAT = 1567;
Z3.OP_RE_UNION = 1568;
Z3.OP_LABEL = 1792;
Z3.OP_LABEL_LIT = 1793;
Z3.OP_DT_CONSTRUCTOR = 2048;
Z3.OP_DT_RECOGNISER = 2049;
Z3.OP_DT_ACCESSOR = 2050;
Z3.OP_DT_UPDATE_FIELD = 2051;
Z3.OP_PB_AT_MOST = 2304;
Z3.OP_PB_LE = 2305;
Z3.OP_PB_GE = 2306;
Z3.OP_PB_EQ = 2307;
Z3.OP_FPA_RM_NEAREST_TIES_TO_EVEN = 2308;
Z3.OP_FPA_RM_NEAREST_TIES_TO_AWAY = 2309;
Z3.OP_FPA_RM_TOWARD_POSITIVE = 2310;
Z3.OP_FPA_RM_TOWARD_NEGATIVE = 2311;
Z3.OP_FPA_RM_TOWARD_ZERO = 2312;
Z3.OP_FPA_NUM = 2313;
Z3.OP_FPA_PLUS_INF = 2314;
Z3.OP_FPA_MINUS_INF = 2315;
Z3.OP_FPA_NAN = 2316;
Z3.OP_FPA_PLUS_ZERO = 2317;
Z3.OP_FPA_MINUS_ZERO = 2318;
Z3.OP_FPA_ADD = 2319;
Z3.OP_FPA_SUB = 2320;
Z3.OP_FPA_NEG = 2321;
Z3.OP_FPA_MUL = 2322;
Z3.OP_FPA_DIV = 2323;
Z3.OP_FPA_REM = 2324;
Z3.OP_FPA_ABS = 2325;
Z3.OP_FPA_MIN = 2326;
Z3.OP_FPA_MAX = 2327;
Z3.OP_FPA_FMA = 2328;
Z3.OP_FPA_SQRT = 2329;
Z3.OP_FPA_ROUND_TO_INTEGRAL = 2330;
Z3.OP_FPA_EQ = 2331;
Z3.OP_FPA_LT = 2332;
Z3.OP_FPA_GT = 2333;
Z3.OP_FPA_LE = 2334;
Z3.OP_FPA_GE = 2335;
Z3.OP_FPA_IS_NAN = 2336;
Z3.OP_FPA_IS_INF = 2337;
Z3.OP_FPA_IS_ZERO = 2338;
Z3.OP_FPA_IS_NORMAL = 2339;
Z3.OP_FPA_IS_SUBNORMAL = 2340;
Z3.OP_FPA_IS_NEGATIVE = 2341;
Z3.OP_FPA_IS_POSITIVE = 2342;
Z3.OP_FPA_FP = 2343;
Z3.OP_FPA_TO_FP = 2344;
Z3.OP_FPA_TO_FP_UNSIGNED = 2345;
Z3.OP_FPA_TO_UBV = 2346;
Z3.OP_FPA_TO_SBV = 2347;
Z3.OP_FPA_TO_REAL = 2348;
Z3.OP_FPA_TO_IEEE_BV = 2349;
Z3.OP_FPA_MIN_I = 2350;
Z3.OP_FPA_MAX_I = 2351;
Z3.OP_INTERNAL = 2352;
Z3.OP_UNINTERPRETED = 2353;
Z3.PK_UINT = 0;
Z3.PK_BOOL = 1;
Z3.PK_DOUBLE = 2;
Z3.PK_SYMBOL = 3;
Z3.PK_STRING = 4;
Z3.PK_OTHER = 5;
Z3.PK_INVALID = 6;
Z3.PRINT_SMTLIB_FULL = 0;
Z3.PRINT_LOW_LEVEL = 1;
Z3.PRINT_SMTLIB_COMPLIANT = 2;
Z3.PRINT_SMTLIB2_COMPLIANT = 3;
Z3.OK = 0;
Z3.SORT_ERROR = 1;
Z3.IOB = 2;
Z3.INVALID_ARG = 3;
Z3.PARSER_ERROR = 4;
Z3.NO_PARSER = 5;
Z3.INVALID_PATTERN = 6;
Z3.MEMOUT_FAIL = 7;
Z3.FILE_ACCESS_ERROR = 8;
Z3.INTERNAL_FATAL = 9;
Z3.INVALID_USAGE = 10;
Z3.DEC_REF_ERROR = 11;
Z3.EXCEPTION = 12;
Z3.GOAL_PRECISE = 0;
Z3.GOAL_UNDER = 1;
Z3.GOAL_OVER = 2;
Z3.GOAL_UNDER_OVER = 3;

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
module.exports.OutZ3Symbol = Out;
module.exports.OutNumber = Out;
module.exports.OutNumber = Out;
module.exports.OutVoid = Out;
module.exports.OutString = Out;
module.exports.OutBool = Out;
module.exports.OutConfig = Out;
module.exports.OutContext = Out;
module.exports.OutAst = Out;
module.exports.OutApp = Out;
module.exports.OutSort = Out;
module.exports.OutFuncDecl = Out;
module.exports.OutPattern = Out;
module.exports.OutModel = Out;
module.exports.OutLiterals = Out;
module.exports.OutConstructor = Out;
module.exports.OutConstructorList = Out;
module.exports.OutSolver = Out;
module.exports.OutGoal = Out;
module.exports.OutTactic = Out;
module.exports.OutParams = Out;
module.exports.OutProbe = Out;
module.exports.OutStats = Out;
module.exports.OutAstVector = Out;
module.exports.OutAstMap = Out;
module.exports.OutApplyResult = Out;
module.exports.OutFuncInterp = Out;
module.exports.OutFuncEntry = Out;
module.exports.OutFixedpoint = Out;
module.exports.OutOptimize = Out;
module.exports.OutParamDescrs = Out;
module.exports.OutRcfNum = Out;

