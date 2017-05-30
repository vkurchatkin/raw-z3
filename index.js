// THIS FILE IS GENERATED AUTOMATICALLY, DON'T EDIT
/* @flow */

const binding = (require/*:any*/)('./build/Release/binding.node');
(module/*:any*/).exports = binding;

// enums
/*::
type Z3_lbool =
  | -1
  | 0
  | 1
;
*/

module.exports.Z3_L_FALSE = -1;
/*:: declare export var Z3_L_FALSE: Z3_lbool;*/

module.exports.Z3_L_UNDEF = 0;
/*:: declare export var Z3_L_UNDEF: Z3_lbool;*/

module.exports.Z3_L_TRUE = 1;
/*:: declare export var Z3_L_TRUE: Z3_lbool;*/


/*::
type Z3_symbol_kind =
  | 0
  | 1
;
*/

module.exports.Z3_INT_SYMBOL = 0;
/*:: declare export var Z3_INT_SYMBOL: Z3_symbol_kind;*/

module.exports.Z3_STRING_SYMBOL = 1;
/*:: declare export var Z3_STRING_SYMBOL: Z3_symbol_kind;*/


/*::
type Z3_parameter_kind =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
;
*/

module.exports.Z3_PARAMETER_INT = 0;
/*:: declare export var Z3_PARAMETER_INT: Z3_parameter_kind;*/

module.exports.Z3_PARAMETER_DOUBLE = 1;
/*:: declare export var Z3_PARAMETER_DOUBLE: Z3_parameter_kind;*/

module.exports.Z3_PARAMETER_RATIONAL = 2;
/*:: declare export var Z3_PARAMETER_RATIONAL: Z3_parameter_kind;*/

module.exports.Z3_PARAMETER_SYMBOL = 3;
/*:: declare export var Z3_PARAMETER_SYMBOL: Z3_parameter_kind;*/

module.exports.Z3_PARAMETER_SORT = 4;
/*:: declare export var Z3_PARAMETER_SORT: Z3_parameter_kind;*/

module.exports.Z3_PARAMETER_AST = 5;
/*:: declare export var Z3_PARAMETER_AST: Z3_parameter_kind;*/

module.exports.Z3_PARAMETER_FUNC_DECL = 6;
/*:: declare export var Z3_PARAMETER_FUNC_DECL: Z3_parameter_kind;*/


/*::
type Z3_sort_kind =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 1000
;
*/

module.exports.Z3_UNINTERPRETED_SORT = 0;
/*:: declare export var Z3_UNINTERPRETED_SORT: Z3_sort_kind;*/

module.exports.Z3_BOOL_SORT = 1;
/*:: declare export var Z3_BOOL_SORT: Z3_sort_kind;*/

module.exports.Z3_INT_SORT = 2;
/*:: declare export var Z3_INT_SORT: Z3_sort_kind;*/

module.exports.Z3_REAL_SORT = 3;
/*:: declare export var Z3_REAL_SORT: Z3_sort_kind;*/

module.exports.Z3_BV_SORT = 4;
/*:: declare export var Z3_BV_SORT: Z3_sort_kind;*/

module.exports.Z3_ARRAY_SORT = 5;
/*:: declare export var Z3_ARRAY_SORT: Z3_sort_kind;*/

module.exports.Z3_DATATYPE_SORT = 6;
/*:: declare export var Z3_DATATYPE_SORT: Z3_sort_kind;*/

module.exports.Z3_RELATION_SORT = 7;
/*:: declare export var Z3_RELATION_SORT: Z3_sort_kind;*/

module.exports.Z3_FINITE_DOMAIN_SORT = 8;
/*:: declare export var Z3_FINITE_DOMAIN_SORT: Z3_sort_kind;*/

module.exports.Z3_FLOATING_POINT_SORT = 9;
/*:: declare export var Z3_FLOATING_POINT_SORT: Z3_sort_kind;*/

module.exports.Z3_ROUNDING_MODE_SORT = 10;
/*:: declare export var Z3_ROUNDING_MODE_SORT: Z3_sort_kind;*/

module.exports.Z3_SEQ_SORT = 11;
/*:: declare export var Z3_SEQ_SORT: Z3_sort_kind;*/

module.exports.Z3_RE_SORT = 12;
/*:: declare export var Z3_RE_SORT: Z3_sort_kind;*/

module.exports.Z3_UNKNOWN_SORT = 1000;
/*:: declare export var Z3_UNKNOWN_SORT: Z3_sort_kind;*/


/*::
type Z3_ast_kind =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 1000
;
*/

module.exports.Z3_NUMERAL_AST = 0;
/*:: declare export var Z3_NUMERAL_AST: Z3_ast_kind;*/

module.exports.Z3_APP_AST = 1;
/*:: declare export var Z3_APP_AST: Z3_ast_kind;*/

module.exports.Z3_VAR_AST = 2;
/*:: declare export var Z3_VAR_AST: Z3_ast_kind;*/

module.exports.Z3_QUANTIFIER_AST = 3;
/*:: declare export var Z3_QUANTIFIER_AST: Z3_ast_kind;*/

module.exports.Z3_SORT_AST = 4;
/*:: declare export var Z3_SORT_AST: Z3_ast_kind;*/

module.exports.Z3_FUNC_DECL_AST = 5;
/*:: declare export var Z3_FUNC_DECL_AST: Z3_ast_kind;*/

module.exports.Z3_UNKNOWN_AST = 1000;
/*:: declare export var Z3_UNKNOWN_AST: Z3_ast_kind;*/


/*::
type Z3_decl_kind =
  | 256
  | 257
  | 258
  | 259
  | 260
  | 261
  | 262
  | 263
  | 264
  | 265
  | 266
  | 267
  | 268
  | 512
  | 513
  | 514
  | 515
  | 516
  | 517
  | 518
  | 519
  | 520
  | 521
  | 522
  | 523
  | 524
  | 525
  | 526
  | 527
  | 528
  | 529
  | 768
  | 769
  | 770
  | 771
  | 772
  | 773
  | 774
  | 775
  | 776
  | 777
  | 778
  | 779
  | 1024
  | 1025
  | 1026
  | 1027
  | 1028
  | 1029
  | 1030
  | 1031
  | 1032
  | 1033
  | 1034
  | 1035
  | 1036
  | 1037
  | 1038
  | 1039
  | 1040
  | 1041
  | 1042
  | 1043
  | 1044
  | 1045
  | 1046
  | 1047
  | 1048
  | 1049
  | 1050
  | 1051
  | 1052
  | 1053
  | 1054
  | 1055
  | 1056
  | 1057
  | 1058
  | 1059
  | 1060
  | 1061
  | 1062
  | 1063
  | 1064
  | 1065
  | 1066
  | 1067
  | 1068
  | 1069
  | 1070
  | 1071
  | 1072
  | 1073
  | 1074
  | 1075
  | 1076
  | 1077
  | 1078
  | 1079
  | 1080
  | 1081
  | 1082
  | 1280
  | 1281
  | 1282
  | 1283
  | 1284
  | 1285
  | 1286
  | 1287
  | 1288
  | 1289
  | 1290
  | 1291
  | 1292
  | 1293
  | 1294
  | 1295
  | 1296
  | 1297
  | 1298
  | 1299
  | 1300
  | 1301
  | 1302
  | 1303
  | 1304
  | 1305
  | 1306
  | 1307
  | 1308
  | 1309
  | 1310
  | 1311
  | 1312
  | 1313
  | 1314
  | 1315
  | 1316
  | 1317
  | 1318
  | 1319
  | 1536
  | 1537
  | 1538
  | 1539
  | 1540
  | 1541
  | 1542
  | 1543
  | 1544
  | 1545
  | 1546
  | 1547
  | 1548
  | 1549
  | 1550
  | 1551
  | 1552
  | 1553
  | 1554
  | 1555
  | 1556
  | 1557
  | 1558
  | 1559
  | 1560
  | 1561
  | 1562
  | 1563
  | 1564
  | 1565
  | 1566
  | 1567
  | 1568
  | 1792
  | 1793
  | 2048
  | 2049
  | 2050
  | 2051
  | 2304
  | 2305
  | 2306
  | 2307
  | 2308
  | 2309
  | 2310
  | 2311
  | 2312
  | 2313
  | 2314
  | 2315
  | 2316
  | 2317
  | 2318
  | 2319
  | 2320
  | 2321
  | 2322
  | 2323
  | 2324
  | 2325
  | 2326
  | 2327
  | 2328
  | 2329
  | 2330
  | 2331
  | 2332
  | 2333
  | 2334
  | 2335
  | 2336
  | 2337
  | 2338
  | 2339
  | 2340
  | 2341
  | 2342
  | 2343
  | 2344
  | 2345
  | 2346
  | 2347
  | 2348
  | 2349
  | 2350
  | 2351
  | 2352
  | 2353
;
*/

module.exports.Z3_OP_TRUE = 256;
/*:: declare export var Z3_OP_TRUE: Z3_decl_kind;*/

module.exports.Z3_OP_FALSE = 257;
/*:: declare export var Z3_OP_FALSE: Z3_decl_kind;*/

module.exports.Z3_OP_EQ = 258;
/*:: declare export var Z3_OP_EQ: Z3_decl_kind;*/

module.exports.Z3_OP_DISTINCT = 259;
/*:: declare export var Z3_OP_DISTINCT: Z3_decl_kind;*/

module.exports.Z3_OP_ITE = 260;
/*:: declare export var Z3_OP_ITE: Z3_decl_kind;*/

module.exports.Z3_OP_AND = 261;
/*:: declare export var Z3_OP_AND: Z3_decl_kind;*/

module.exports.Z3_OP_OR = 262;
/*:: declare export var Z3_OP_OR: Z3_decl_kind;*/

module.exports.Z3_OP_IFF = 263;
/*:: declare export var Z3_OP_IFF: Z3_decl_kind;*/

module.exports.Z3_OP_XOR = 264;
/*:: declare export var Z3_OP_XOR: Z3_decl_kind;*/

module.exports.Z3_OP_NOT = 265;
/*:: declare export var Z3_OP_NOT: Z3_decl_kind;*/

module.exports.Z3_OP_IMPLIES = 266;
/*:: declare export var Z3_OP_IMPLIES: Z3_decl_kind;*/

module.exports.Z3_OP_OEQ = 267;
/*:: declare export var Z3_OP_OEQ: Z3_decl_kind;*/

module.exports.Z3_OP_INTERP = 268;
/*:: declare export var Z3_OP_INTERP: Z3_decl_kind;*/

module.exports.Z3_OP_ANUM = 512;
/*:: declare export var Z3_OP_ANUM: Z3_decl_kind;*/

module.exports.Z3_OP_AGNUM = 513;
/*:: declare export var Z3_OP_AGNUM: Z3_decl_kind;*/

module.exports.Z3_OP_LE = 514;
/*:: declare export var Z3_OP_LE: Z3_decl_kind;*/

module.exports.Z3_OP_GE = 515;
/*:: declare export var Z3_OP_GE: Z3_decl_kind;*/

module.exports.Z3_OP_LT = 516;
/*:: declare export var Z3_OP_LT: Z3_decl_kind;*/

module.exports.Z3_OP_GT = 517;
/*:: declare export var Z3_OP_GT: Z3_decl_kind;*/

module.exports.Z3_OP_ADD = 518;
/*:: declare export var Z3_OP_ADD: Z3_decl_kind;*/

module.exports.Z3_OP_SUB = 519;
/*:: declare export var Z3_OP_SUB: Z3_decl_kind;*/

module.exports.Z3_OP_UMINUS = 520;
/*:: declare export var Z3_OP_UMINUS: Z3_decl_kind;*/

module.exports.Z3_OP_MUL = 521;
/*:: declare export var Z3_OP_MUL: Z3_decl_kind;*/

module.exports.Z3_OP_DIV = 522;
/*:: declare export var Z3_OP_DIV: Z3_decl_kind;*/

module.exports.Z3_OP_IDIV = 523;
/*:: declare export var Z3_OP_IDIV: Z3_decl_kind;*/

module.exports.Z3_OP_REM = 524;
/*:: declare export var Z3_OP_REM: Z3_decl_kind;*/

module.exports.Z3_OP_MOD = 525;
/*:: declare export var Z3_OP_MOD: Z3_decl_kind;*/

module.exports.Z3_OP_TO_REAL = 526;
/*:: declare export var Z3_OP_TO_REAL: Z3_decl_kind;*/

module.exports.Z3_OP_TO_INT = 527;
/*:: declare export var Z3_OP_TO_INT: Z3_decl_kind;*/

module.exports.Z3_OP_IS_INT = 528;
/*:: declare export var Z3_OP_IS_INT: Z3_decl_kind;*/

module.exports.Z3_OP_POWER = 529;
/*:: declare export var Z3_OP_POWER: Z3_decl_kind;*/

module.exports.Z3_OP_STORE = 768;
/*:: declare export var Z3_OP_STORE: Z3_decl_kind;*/

module.exports.Z3_OP_SELECT = 769;
/*:: declare export var Z3_OP_SELECT: Z3_decl_kind;*/

module.exports.Z3_OP_CONST_ARRAY = 770;
/*:: declare export var Z3_OP_CONST_ARRAY: Z3_decl_kind;*/

module.exports.Z3_OP_ARRAY_MAP = 771;
/*:: declare export var Z3_OP_ARRAY_MAP: Z3_decl_kind;*/

module.exports.Z3_OP_ARRAY_DEFAULT = 772;
/*:: declare export var Z3_OP_ARRAY_DEFAULT: Z3_decl_kind;*/

module.exports.Z3_OP_SET_UNION = 773;
/*:: declare export var Z3_OP_SET_UNION: Z3_decl_kind;*/

module.exports.Z3_OP_SET_INTERSECT = 774;
/*:: declare export var Z3_OP_SET_INTERSECT: Z3_decl_kind;*/

module.exports.Z3_OP_SET_DIFFERENCE = 775;
/*:: declare export var Z3_OP_SET_DIFFERENCE: Z3_decl_kind;*/

module.exports.Z3_OP_SET_COMPLEMENT = 776;
/*:: declare export var Z3_OP_SET_COMPLEMENT: Z3_decl_kind;*/

module.exports.Z3_OP_SET_SUBSET = 777;
/*:: declare export var Z3_OP_SET_SUBSET: Z3_decl_kind;*/

module.exports.Z3_OP_AS_ARRAY = 778;
/*:: declare export var Z3_OP_AS_ARRAY: Z3_decl_kind;*/

module.exports.Z3_OP_ARRAY_EXT = 779;
/*:: declare export var Z3_OP_ARRAY_EXT: Z3_decl_kind;*/

module.exports.Z3_OP_BNUM = 1024;
/*:: declare export var Z3_OP_BNUM: Z3_decl_kind;*/

module.exports.Z3_OP_BIT1 = 1025;
/*:: declare export var Z3_OP_BIT1: Z3_decl_kind;*/

module.exports.Z3_OP_BIT0 = 1026;
/*:: declare export var Z3_OP_BIT0: Z3_decl_kind;*/

module.exports.Z3_OP_BNEG = 1027;
/*:: declare export var Z3_OP_BNEG: Z3_decl_kind;*/

module.exports.Z3_OP_BADD = 1028;
/*:: declare export var Z3_OP_BADD: Z3_decl_kind;*/

module.exports.Z3_OP_BSUB = 1029;
/*:: declare export var Z3_OP_BSUB: Z3_decl_kind;*/

module.exports.Z3_OP_BMUL = 1030;
/*:: declare export var Z3_OP_BMUL: Z3_decl_kind;*/

module.exports.Z3_OP_BSDIV = 1031;
/*:: declare export var Z3_OP_BSDIV: Z3_decl_kind;*/

module.exports.Z3_OP_BUDIV = 1032;
/*:: declare export var Z3_OP_BUDIV: Z3_decl_kind;*/

module.exports.Z3_OP_BSREM = 1033;
/*:: declare export var Z3_OP_BSREM: Z3_decl_kind;*/

module.exports.Z3_OP_BUREM = 1034;
/*:: declare export var Z3_OP_BUREM: Z3_decl_kind;*/

module.exports.Z3_OP_BSMOD = 1035;
/*:: declare export var Z3_OP_BSMOD: Z3_decl_kind;*/

module.exports.Z3_OP_BSDIV0 = 1036;
/*:: declare export var Z3_OP_BSDIV0: Z3_decl_kind;*/

module.exports.Z3_OP_BUDIV0 = 1037;
/*:: declare export var Z3_OP_BUDIV0: Z3_decl_kind;*/

module.exports.Z3_OP_BSREM0 = 1038;
/*:: declare export var Z3_OP_BSREM0: Z3_decl_kind;*/

module.exports.Z3_OP_BUREM0 = 1039;
/*:: declare export var Z3_OP_BUREM0: Z3_decl_kind;*/

module.exports.Z3_OP_BSMOD0 = 1040;
/*:: declare export var Z3_OP_BSMOD0: Z3_decl_kind;*/

module.exports.Z3_OP_ULEQ = 1041;
/*:: declare export var Z3_OP_ULEQ: Z3_decl_kind;*/

module.exports.Z3_OP_SLEQ = 1042;
/*:: declare export var Z3_OP_SLEQ: Z3_decl_kind;*/

module.exports.Z3_OP_UGEQ = 1043;
/*:: declare export var Z3_OP_UGEQ: Z3_decl_kind;*/

module.exports.Z3_OP_SGEQ = 1044;
/*:: declare export var Z3_OP_SGEQ: Z3_decl_kind;*/

module.exports.Z3_OP_ULT = 1045;
/*:: declare export var Z3_OP_ULT: Z3_decl_kind;*/

module.exports.Z3_OP_SLT = 1046;
/*:: declare export var Z3_OP_SLT: Z3_decl_kind;*/

module.exports.Z3_OP_UGT = 1047;
/*:: declare export var Z3_OP_UGT: Z3_decl_kind;*/

module.exports.Z3_OP_SGT = 1048;
/*:: declare export var Z3_OP_SGT: Z3_decl_kind;*/

module.exports.Z3_OP_BAND = 1049;
/*:: declare export var Z3_OP_BAND: Z3_decl_kind;*/

module.exports.Z3_OP_BOR = 1050;
/*:: declare export var Z3_OP_BOR: Z3_decl_kind;*/

module.exports.Z3_OP_BNOT = 1051;
/*:: declare export var Z3_OP_BNOT: Z3_decl_kind;*/

module.exports.Z3_OP_BXOR = 1052;
/*:: declare export var Z3_OP_BXOR: Z3_decl_kind;*/

module.exports.Z3_OP_BNAND = 1053;
/*:: declare export var Z3_OP_BNAND: Z3_decl_kind;*/

module.exports.Z3_OP_BNOR = 1054;
/*:: declare export var Z3_OP_BNOR: Z3_decl_kind;*/

module.exports.Z3_OP_BXNOR = 1055;
/*:: declare export var Z3_OP_BXNOR: Z3_decl_kind;*/

module.exports.Z3_OP_CONCAT = 1056;
/*:: declare export var Z3_OP_CONCAT: Z3_decl_kind;*/

module.exports.Z3_OP_SIGN_EXT = 1057;
/*:: declare export var Z3_OP_SIGN_EXT: Z3_decl_kind;*/

module.exports.Z3_OP_ZERO_EXT = 1058;
/*:: declare export var Z3_OP_ZERO_EXT: Z3_decl_kind;*/

module.exports.Z3_OP_EXTRACT = 1059;
/*:: declare export var Z3_OP_EXTRACT: Z3_decl_kind;*/

module.exports.Z3_OP_REPEAT = 1060;
/*:: declare export var Z3_OP_REPEAT: Z3_decl_kind;*/

module.exports.Z3_OP_BREDOR = 1061;
/*:: declare export var Z3_OP_BREDOR: Z3_decl_kind;*/

module.exports.Z3_OP_BREDAND = 1062;
/*:: declare export var Z3_OP_BREDAND: Z3_decl_kind;*/

module.exports.Z3_OP_BCOMP = 1063;
/*:: declare export var Z3_OP_BCOMP: Z3_decl_kind;*/

module.exports.Z3_OP_BSHL = 1064;
/*:: declare export var Z3_OP_BSHL: Z3_decl_kind;*/

module.exports.Z3_OP_BLSHR = 1065;
/*:: declare export var Z3_OP_BLSHR: Z3_decl_kind;*/

module.exports.Z3_OP_BASHR = 1066;
/*:: declare export var Z3_OP_BASHR: Z3_decl_kind;*/

module.exports.Z3_OP_ROTATE_LEFT = 1067;
/*:: declare export var Z3_OP_ROTATE_LEFT: Z3_decl_kind;*/

module.exports.Z3_OP_ROTATE_RIGHT = 1068;
/*:: declare export var Z3_OP_ROTATE_RIGHT: Z3_decl_kind;*/

module.exports.Z3_OP_EXT_ROTATE_LEFT = 1069;
/*:: declare export var Z3_OP_EXT_ROTATE_LEFT: Z3_decl_kind;*/

module.exports.Z3_OP_EXT_ROTATE_RIGHT = 1070;
/*:: declare export var Z3_OP_EXT_ROTATE_RIGHT: Z3_decl_kind;*/

module.exports.Z3_OP_INT2BV = 1071;
/*:: declare export var Z3_OP_INT2BV: Z3_decl_kind;*/

module.exports.Z3_OP_BV2INT = 1072;
/*:: declare export var Z3_OP_BV2INT: Z3_decl_kind;*/

module.exports.Z3_OP_CARRY = 1073;
/*:: declare export var Z3_OP_CARRY: Z3_decl_kind;*/

module.exports.Z3_OP_XOR3 = 1074;
/*:: declare export var Z3_OP_XOR3: Z3_decl_kind;*/

module.exports.Z3_OP_BSMUL_NO_OVFL = 1075;
/*:: declare export var Z3_OP_BSMUL_NO_OVFL: Z3_decl_kind;*/

module.exports.Z3_OP_BUMUL_NO_OVFL = 1076;
/*:: declare export var Z3_OP_BUMUL_NO_OVFL: Z3_decl_kind;*/

module.exports.Z3_OP_BSMUL_NO_UDFL = 1077;
/*:: declare export var Z3_OP_BSMUL_NO_UDFL: Z3_decl_kind;*/

module.exports.Z3_OP_BSDIV_I = 1078;
/*:: declare export var Z3_OP_BSDIV_I: Z3_decl_kind;*/

module.exports.Z3_OP_BUDIV_I = 1079;
/*:: declare export var Z3_OP_BUDIV_I: Z3_decl_kind;*/

module.exports.Z3_OP_BSREM_I = 1080;
/*:: declare export var Z3_OP_BSREM_I: Z3_decl_kind;*/

module.exports.Z3_OP_BUREM_I = 1081;
/*:: declare export var Z3_OP_BUREM_I: Z3_decl_kind;*/

module.exports.Z3_OP_BSMOD_I = 1082;
/*:: declare export var Z3_OP_BSMOD_I: Z3_decl_kind;*/

module.exports.Z3_OP_PR_UNDEF = 1280;
/*:: declare export var Z3_OP_PR_UNDEF: Z3_decl_kind;*/

module.exports.Z3_OP_PR_TRUE = 1281;
/*:: declare export var Z3_OP_PR_TRUE: Z3_decl_kind;*/

module.exports.Z3_OP_PR_ASSERTED = 1282;
/*:: declare export var Z3_OP_PR_ASSERTED: Z3_decl_kind;*/

module.exports.Z3_OP_PR_GOAL = 1283;
/*:: declare export var Z3_OP_PR_GOAL: Z3_decl_kind;*/

module.exports.Z3_OP_PR_MODUS_PONENS = 1284;
/*:: declare export var Z3_OP_PR_MODUS_PONENS: Z3_decl_kind;*/

module.exports.Z3_OP_PR_REFLEXIVITY = 1285;
/*:: declare export var Z3_OP_PR_REFLEXIVITY: Z3_decl_kind;*/

module.exports.Z3_OP_PR_SYMMETRY = 1286;
/*:: declare export var Z3_OP_PR_SYMMETRY: Z3_decl_kind;*/

module.exports.Z3_OP_PR_TRANSITIVITY = 1287;
/*:: declare export var Z3_OP_PR_TRANSITIVITY: Z3_decl_kind;*/

module.exports.Z3_OP_PR_TRANSITIVITY_STAR = 1288;
/*:: declare export var Z3_OP_PR_TRANSITIVITY_STAR: Z3_decl_kind;*/

module.exports.Z3_OP_PR_MONOTONICITY = 1289;
/*:: declare export var Z3_OP_PR_MONOTONICITY: Z3_decl_kind;*/

module.exports.Z3_OP_PR_QUANT_INTRO = 1290;
/*:: declare export var Z3_OP_PR_QUANT_INTRO: Z3_decl_kind;*/

module.exports.Z3_OP_PR_DISTRIBUTIVITY = 1291;
/*:: declare export var Z3_OP_PR_DISTRIBUTIVITY: Z3_decl_kind;*/

module.exports.Z3_OP_PR_AND_ELIM = 1292;
/*:: declare export var Z3_OP_PR_AND_ELIM: Z3_decl_kind;*/

module.exports.Z3_OP_PR_NOT_OR_ELIM = 1293;
/*:: declare export var Z3_OP_PR_NOT_OR_ELIM: Z3_decl_kind;*/

module.exports.Z3_OP_PR_REWRITE = 1294;
/*:: declare export var Z3_OP_PR_REWRITE: Z3_decl_kind;*/

module.exports.Z3_OP_PR_REWRITE_STAR = 1295;
/*:: declare export var Z3_OP_PR_REWRITE_STAR: Z3_decl_kind;*/

module.exports.Z3_OP_PR_PULL_QUANT = 1296;
/*:: declare export var Z3_OP_PR_PULL_QUANT: Z3_decl_kind;*/

module.exports.Z3_OP_PR_PULL_QUANT_STAR = 1297;
/*:: declare export var Z3_OP_PR_PULL_QUANT_STAR: Z3_decl_kind;*/

module.exports.Z3_OP_PR_PUSH_QUANT = 1298;
/*:: declare export var Z3_OP_PR_PUSH_QUANT: Z3_decl_kind;*/

module.exports.Z3_OP_PR_ELIM_UNUSED_VARS = 1299;
/*:: declare export var Z3_OP_PR_ELIM_UNUSED_VARS: Z3_decl_kind;*/

module.exports.Z3_OP_PR_DER = 1300;
/*:: declare export var Z3_OP_PR_DER: Z3_decl_kind;*/

module.exports.Z3_OP_PR_QUANT_INST = 1301;
/*:: declare export var Z3_OP_PR_QUANT_INST: Z3_decl_kind;*/

module.exports.Z3_OP_PR_HYPOTHESIS = 1302;
/*:: declare export var Z3_OP_PR_HYPOTHESIS: Z3_decl_kind;*/

module.exports.Z3_OP_PR_LEMMA = 1303;
/*:: declare export var Z3_OP_PR_LEMMA: Z3_decl_kind;*/

module.exports.Z3_OP_PR_UNIT_RESOLUTION = 1304;
/*:: declare export var Z3_OP_PR_UNIT_RESOLUTION: Z3_decl_kind;*/

module.exports.Z3_OP_PR_IFF_TRUE = 1305;
/*:: declare export var Z3_OP_PR_IFF_TRUE: Z3_decl_kind;*/

module.exports.Z3_OP_PR_IFF_FALSE = 1306;
/*:: declare export var Z3_OP_PR_IFF_FALSE: Z3_decl_kind;*/

module.exports.Z3_OP_PR_COMMUTATIVITY = 1307;
/*:: declare export var Z3_OP_PR_COMMUTATIVITY: Z3_decl_kind;*/

module.exports.Z3_OP_PR_DEF_AXIOM = 1308;
/*:: declare export var Z3_OP_PR_DEF_AXIOM: Z3_decl_kind;*/

module.exports.Z3_OP_PR_DEF_INTRO = 1309;
/*:: declare export var Z3_OP_PR_DEF_INTRO: Z3_decl_kind;*/

module.exports.Z3_OP_PR_APPLY_DEF = 1310;
/*:: declare export var Z3_OP_PR_APPLY_DEF: Z3_decl_kind;*/

module.exports.Z3_OP_PR_IFF_OEQ = 1311;
/*:: declare export var Z3_OP_PR_IFF_OEQ: Z3_decl_kind;*/

module.exports.Z3_OP_PR_NNF_POS = 1312;
/*:: declare export var Z3_OP_PR_NNF_POS: Z3_decl_kind;*/

module.exports.Z3_OP_PR_NNF_NEG = 1313;
/*:: declare export var Z3_OP_PR_NNF_NEG: Z3_decl_kind;*/

module.exports.Z3_OP_PR_NNF_STAR = 1314;
/*:: declare export var Z3_OP_PR_NNF_STAR: Z3_decl_kind;*/

module.exports.Z3_OP_PR_CNF_STAR = 1315;
/*:: declare export var Z3_OP_PR_CNF_STAR: Z3_decl_kind;*/

module.exports.Z3_OP_PR_SKOLEMIZE = 1316;
/*:: declare export var Z3_OP_PR_SKOLEMIZE: Z3_decl_kind;*/

module.exports.Z3_OP_PR_MODUS_PONENS_OEQ = 1317;
/*:: declare export var Z3_OP_PR_MODUS_PONENS_OEQ: Z3_decl_kind;*/

module.exports.Z3_OP_PR_TH_LEMMA = 1318;
/*:: declare export var Z3_OP_PR_TH_LEMMA: Z3_decl_kind;*/

module.exports.Z3_OP_PR_HYPER_RESOLVE = 1319;
/*:: declare export var Z3_OP_PR_HYPER_RESOLVE: Z3_decl_kind;*/

module.exports.Z3_OP_RA_STORE = 1536;
/*:: declare export var Z3_OP_RA_STORE: Z3_decl_kind;*/

module.exports.Z3_OP_RA_EMPTY = 1537;
/*:: declare export var Z3_OP_RA_EMPTY: Z3_decl_kind;*/

module.exports.Z3_OP_RA_IS_EMPTY = 1538;
/*:: declare export var Z3_OP_RA_IS_EMPTY: Z3_decl_kind;*/

module.exports.Z3_OP_RA_JOIN = 1539;
/*:: declare export var Z3_OP_RA_JOIN: Z3_decl_kind;*/

module.exports.Z3_OP_RA_UNION = 1540;
/*:: declare export var Z3_OP_RA_UNION: Z3_decl_kind;*/

module.exports.Z3_OP_RA_WIDEN = 1541;
/*:: declare export var Z3_OP_RA_WIDEN: Z3_decl_kind;*/

module.exports.Z3_OP_RA_PROJECT = 1542;
/*:: declare export var Z3_OP_RA_PROJECT: Z3_decl_kind;*/

module.exports.Z3_OP_RA_FILTER = 1543;
/*:: declare export var Z3_OP_RA_FILTER: Z3_decl_kind;*/

module.exports.Z3_OP_RA_NEGATION_FILTER = 1544;
/*:: declare export var Z3_OP_RA_NEGATION_FILTER: Z3_decl_kind;*/

module.exports.Z3_OP_RA_RENAME = 1545;
/*:: declare export var Z3_OP_RA_RENAME: Z3_decl_kind;*/

module.exports.Z3_OP_RA_COMPLEMENT = 1546;
/*:: declare export var Z3_OP_RA_COMPLEMENT: Z3_decl_kind;*/

module.exports.Z3_OP_RA_SELECT = 1547;
/*:: declare export var Z3_OP_RA_SELECT: Z3_decl_kind;*/

module.exports.Z3_OP_RA_CLONE = 1548;
/*:: declare export var Z3_OP_RA_CLONE: Z3_decl_kind;*/

module.exports.Z3_OP_FD_CONSTANT = 1549;
/*:: declare export var Z3_OP_FD_CONSTANT: Z3_decl_kind;*/

module.exports.Z3_OP_FD_LT = 1550;
/*:: declare export var Z3_OP_FD_LT: Z3_decl_kind;*/

module.exports.Z3_OP_SEQ_UNIT = 1551;
/*:: declare export var Z3_OP_SEQ_UNIT: Z3_decl_kind;*/

module.exports.Z3_OP_SEQ_EMPTY = 1552;
/*:: declare export var Z3_OP_SEQ_EMPTY: Z3_decl_kind;*/

module.exports.Z3_OP_SEQ_CONCAT = 1553;
/*:: declare export var Z3_OP_SEQ_CONCAT: Z3_decl_kind;*/

module.exports.Z3_OP_SEQ_PREFIX = 1554;
/*:: declare export var Z3_OP_SEQ_PREFIX: Z3_decl_kind;*/

module.exports.Z3_OP_SEQ_SUFFIX = 1555;
/*:: declare export var Z3_OP_SEQ_SUFFIX: Z3_decl_kind;*/

module.exports.Z3_OP_SEQ_CONTAINS = 1556;
/*:: declare export var Z3_OP_SEQ_CONTAINS: Z3_decl_kind;*/

module.exports.Z3_OP_SEQ_EXTRACT = 1557;
/*:: declare export var Z3_OP_SEQ_EXTRACT: Z3_decl_kind;*/

module.exports.Z3_OP_SEQ_REPLACE = 1558;
/*:: declare export var Z3_OP_SEQ_REPLACE: Z3_decl_kind;*/

module.exports.Z3_OP_SEQ_AT = 1559;
/*:: declare export var Z3_OP_SEQ_AT: Z3_decl_kind;*/

module.exports.Z3_OP_SEQ_LENGTH = 1560;
/*:: declare export var Z3_OP_SEQ_LENGTH: Z3_decl_kind;*/

module.exports.Z3_OP_SEQ_INDEX = 1561;
/*:: declare export var Z3_OP_SEQ_INDEX: Z3_decl_kind;*/

module.exports.Z3_OP_SEQ_TO_RE = 1562;
/*:: declare export var Z3_OP_SEQ_TO_RE: Z3_decl_kind;*/

module.exports.Z3_OP_SEQ_IN_RE = 1563;
/*:: declare export var Z3_OP_SEQ_IN_RE: Z3_decl_kind;*/

module.exports.Z3_OP_RE_PLUS = 1564;
/*:: declare export var Z3_OP_RE_PLUS: Z3_decl_kind;*/

module.exports.Z3_OP_RE_STAR = 1565;
/*:: declare export var Z3_OP_RE_STAR: Z3_decl_kind;*/

module.exports.Z3_OP_RE_OPTION = 1566;
/*:: declare export var Z3_OP_RE_OPTION: Z3_decl_kind;*/

module.exports.Z3_OP_RE_CONCAT = 1567;
/*:: declare export var Z3_OP_RE_CONCAT: Z3_decl_kind;*/

module.exports.Z3_OP_RE_UNION = 1568;
/*:: declare export var Z3_OP_RE_UNION: Z3_decl_kind;*/

module.exports.Z3_OP_LABEL = 1792;
/*:: declare export var Z3_OP_LABEL: Z3_decl_kind;*/

module.exports.Z3_OP_LABEL_LIT = 1793;
/*:: declare export var Z3_OP_LABEL_LIT: Z3_decl_kind;*/

module.exports.Z3_OP_DT_CONSTRUCTOR = 2048;
/*:: declare export var Z3_OP_DT_CONSTRUCTOR: Z3_decl_kind;*/

module.exports.Z3_OP_DT_RECOGNISER = 2049;
/*:: declare export var Z3_OP_DT_RECOGNISER: Z3_decl_kind;*/

module.exports.Z3_OP_DT_ACCESSOR = 2050;
/*:: declare export var Z3_OP_DT_ACCESSOR: Z3_decl_kind;*/

module.exports.Z3_OP_DT_UPDATE_FIELD = 2051;
/*:: declare export var Z3_OP_DT_UPDATE_FIELD: Z3_decl_kind;*/

module.exports.Z3_OP_PB_AT_MOST = 2304;
/*:: declare export var Z3_OP_PB_AT_MOST: Z3_decl_kind;*/

module.exports.Z3_OP_PB_LE = 2305;
/*:: declare export var Z3_OP_PB_LE: Z3_decl_kind;*/

module.exports.Z3_OP_PB_GE = 2306;
/*:: declare export var Z3_OP_PB_GE: Z3_decl_kind;*/

module.exports.Z3_OP_PB_EQ = 2307;
/*:: declare export var Z3_OP_PB_EQ: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_RM_NEAREST_TIES_TO_EVEN = 2308;
/*:: declare export var Z3_OP_FPA_RM_NEAREST_TIES_TO_EVEN: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_RM_NEAREST_TIES_TO_AWAY = 2309;
/*:: declare export var Z3_OP_FPA_RM_NEAREST_TIES_TO_AWAY: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_RM_TOWARD_POSITIVE = 2310;
/*:: declare export var Z3_OP_FPA_RM_TOWARD_POSITIVE: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_RM_TOWARD_NEGATIVE = 2311;
/*:: declare export var Z3_OP_FPA_RM_TOWARD_NEGATIVE: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_RM_TOWARD_ZERO = 2312;
/*:: declare export var Z3_OP_FPA_RM_TOWARD_ZERO: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_NUM = 2313;
/*:: declare export var Z3_OP_FPA_NUM: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_PLUS_INF = 2314;
/*:: declare export var Z3_OP_FPA_PLUS_INF: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_MINUS_INF = 2315;
/*:: declare export var Z3_OP_FPA_MINUS_INF: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_NAN = 2316;
/*:: declare export var Z3_OP_FPA_NAN: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_PLUS_ZERO = 2317;
/*:: declare export var Z3_OP_FPA_PLUS_ZERO: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_MINUS_ZERO = 2318;
/*:: declare export var Z3_OP_FPA_MINUS_ZERO: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_ADD = 2319;
/*:: declare export var Z3_OP_FPA_ADD: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_SUB = 2320;
/*:: declare export var Z3_OP_FPA_SUB: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_NEG = 2321;
/*:: declare export var Z3_OP_FPA_NEG: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_MUL = 2322;
/*:: declare export var Z3_OP_FPA_MUL: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_DIV = 2323;
/*:: declare export var Z3_OP_FPA_DIV: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_REM = 2324;
/*:: declare export var Z3_OP_FPA_REM: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_ABS = 2325;
/*:: declare export var Z3_OP_FPA_ABS: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_MIN = 2326;
/*:: declare export var Z3_OP_FPA_MIN: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_MAX = 2327;
/*:: declare export var Z3_OP_FPA_MAX: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_FMA = 2328;
/*:: declare export var Z3_OP_FPA_FMA: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_SQRT = 2329;
/*:: declare export var Z3_OP_FPA_SQRT: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_ROUND_TO_INTEGRAL = 2330;
/*:: declare export var Z3_OP_FPA_ROUND_TO_INTEGRAL: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_EQ = 2331;
/*:: declare export var Z3_OP_FPA_EQ: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_LT = 2332;
/*:: declare export var Z3_OP_FPA_LT: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_GT = 2333;
/*:: declare export var Z3_OP_FPA_GT: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_LE = 2334;
/*:: declare export var Z3_OP_FPA_LE: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_GE = 2335;
/*:: declare export var Z3_OP_FPA_GE: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_IS_NAN = 2336;
/*:: declare export var Z3_OP_FPA_IS_NAN: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_IS_INF = 2337;
/*:: declare export var Z3_OP_FPA_IS_INF: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_IS_ZERO = 2338;
/*:: declare export var Z3_OP_FPA_IS_ZERO: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_IS_NORMAL = 2339;
/*:: declare export var Z3_OP_FPA_IS_NORMAL: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_IS_SUBNORMAL = 2340;
/*:: declare export var Z3_OP_FPA_IS_SUBNORMAL: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_IS_NEGATIVE = 2341;
/*:: declare export var Z3_OP_FPA_IS_NEGATIVE: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_IS_POSITIVE = 2342;
/*:: declare export var Z3_OP_FPA_IS_POSITIVE: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_FP = 2343;
/*:: declare export var Z3_OP_FPA_FP: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_TO_FP = 2344;
/*:: declare export var Z3_OP_FPA_TO_FP: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_TO_FP_UNSIGNED = 2345;
/*:: declare export var Z3_OP_FPA_TO_FP_UNSIGNED: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_TO_UBV = 2346;
/*:: declare export var Z3_OP_FPA_TO_UBV: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_TO_SBV = 2347;
/*:: declare export var Z3_OP_FPA_TO_SBV: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_TO_REAL = 2348;
/*:: declare export var Z3_OP_FPA_TO_REAL: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_TO_IEEE_BV = 2349;
/*:: declare export var Z3_OP_FPA_TO_IEEE_BV: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_MIN_I = 2350;
/*:: declare export var Z3_OP_FPA_MIN_I: Z3_decl_kind;*/

module.exports.Z3_OP_FPA_MAX_I = 2351;
/*:: declare export var Z3_OP_FPA_MAX_I: Z3_decl_kind;*/

module.exports.Z3_OP_INTERNAL = 2352;
/*:: declare export var Z3_OP_INTERNAL: Z3_decl_kind;*/

module.exports.Z3_OP_UNINTERPRETED = 2353;
/*:: declare export var Z3_OP_UNINTERPRETED: Z3_decl_kind;*/


/*::
type Z3_param_kind =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
;
*/

module.exports.Z3_PK_UINT = 0;
/*:: declare export var Z3_PK_UINT: Z3_param_kind;*/

module.exports.Z3_PK_BOOL = 1;
/*:: declare export var Z3_PK_BOOL: Z3_param_kind;*/

module.exports.Z3_PK_DOUBLE = 2;
/*:: declare export var Z3_PK_DOUBLE: Z3_param_kind;*/

module.exports.Z3_PK_SYMBOL = 3;
/*:: declare export var Z3_PK_SYMBOL: Z3_param_kind;*/

module.exports.Z3_PK_STRING = 4;
/*:: declare export var Z3_PK_STRING: Z3_param_kind;*/

module.exports.Z3_PK_OTHER = 5;
/*:: declare export var Z3_PK_OTHER: Z3_param_kind;*/

module.exports.Z3_PK_INVALID = 6;
/*:: declare export var Z3_PK_INVALID: Z3_param_kind;*/


/*::
type Z3_ast_print_mode =
  | 0
  | 1
  | 2
  | 3
;
*/

module.exports.Z3_PRINT_SMTLIB_FULL = 0;
/*:: declare export var Z3_PRINT_SMTLIB_FULL: Z3_ast_print_mode;*/

module.exports.Z3_PRINT_LOW_LEVEL = 1;
/*:: declare export var Z3_PRINT_LOW_LEVEL: Z3_ast_print_mode;*/

module.exports.Z3_PRINT_SMTLIB_COMPLIANT = 2;
/*:: declare export var Z3_PRINT_SMTLIB_COMPLIANT: Z3_ast_print_mode;*/

module.exports.Z3_PRINT_SMTLIB2_COMPLIANT = 3;
/*:: declare export var Z3_PRINT_SMTLIB2_COMPLIANT: Z3_ast_print_mode;*/


/*::
type Z3_error_code =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
;
*/

module.exports.Z3_OK = 0;
/*:: declare export var Z3_OK: Z3_error_code;*/

module.exports.Z3_SORT_ERROR = 1;
/*:: declare export var Z3_SORT_ERROR: Z3_error_code;*/

module.exports.Z3_IOB = 2;
/*:: declare export var Z3_IOB: Z3_error_code;*/

module.exports.Z3_INVALID_ARG = 3;
/*:: declare export var Z3_INVALID_ARG: Z3_error_code;*/

module.exports.Z3_PARSER_ERROR = 4;
/*:: declare export var Z3_PARSER_ERROR: Z3_error_code;*/

module.exports.Z3_NO_PARSER = 5;
/*:: declare export var Z3_NO_PARSER: Z3_error_code;*/

module.exports.Z3_INVALID_PATTERN = 6;
/*:: declare export var Z3_INVALID_PATTERN: Z3_error_code;*/

module.exports.Z3_MEMOUT_FAIL = 7;
/*:: declare export var Z3_MEMOUT_FAIL: Z3_error_code;*/

module.exports.Z3_FILE_ACCESS_ERROR = 8;
/*:: declare export var Z3_FILE_ACCESS_ERROR: Z3_error_code;*/

module.exports.Z3_INTERNAL_FATAL = 9;
/*:: declare export var Z3_INTERNAL_FATAL: Z3_error_code;*/

module.exports.Z3_INVALID_USAGE = 10;
/*:: declare export var Z3_INVALID_USAGE: Z3_error_code;*/

module.exports.Z3_DEC_REF_ERROR = 11;
/*:: declare export var Z3_DEC_REF_ERROR: Z3_error_code;*/

module.exports.Z3_EXCEPTION = 12;
/*:: declare export var Z3_EXCEPTION: Z3_error_code;*/


/*::
type Z3_goal_prec =
  | 0
  | 1
  | 2
  | 3
;
*/

module.exports.Z3_GOAL_PRECISE = 0;
/*:: declare export var Z3_GOAL_PRECISE: Z3_goal_prec;*/

module.exports.Z3_GOAL_UNDER = 1;
/*:: declare export var Z3_GOAL_UNDER: Z3_goal_prec;*/

module.exports.Z3_GOAL_OVER = 2;
/*:: declare export var Z3_GOAL_OVER: Z3_goal_prec;*/

module.exports.Z3_GOAL_UNDER_OVER = 3;
/*:: declare export var Z3_GOAL_UNDER_OVER: Z3_goal_prec;*/


/*::
declare class Z3_symbol{}
declare class Z3_config{}
declare class Z3_context{}
declare class Z3_ast{}
declare class Z3_app{}
declare class Z3_sort{}
declare class Z3_func_decl{}
declare class Z3_pattern{}
declare class Z3_model{}
declare class Z3_literals{}
declare class Z3_constructor{}
declare class Z3_constructor_list{}
declare class Z3_solver{}
declare class Z3_goal{}
declare class Z3_tactic{}
declare class Z3_params{}
declare class Z3_probe{}
declare class Z3_stats{}
declare class Z3_ast_vector{}
declare class Z3_ast_map{}
declare class Z3_apply_result{}
declare class Z3_func_interp{}
declare class Z3_func_entry{}
declare class Z3_fixedpoint{}
declare class Z3_optimize{}
declare class Z3_param_descrs{}
declare class Z3_rcf_num{}
declare export function Z3_mk_config(): Z3_config;
declare export function Z3_mk_context(c: Z3_config,): Z3_context;
declare export function Z3_mk_int_symbol(c: Z3_context,i: number,): Z3_symbol;
declare export function Z3_mk_bool_sort(c: Z3_context,): Z3_sort;
declare export function Z3_mk_const(c: Z3_context,s: Z3_symbol,ty: Z3_sort,): Z3_ast;
declare export function Z3_mk_not(c: Z3_context,a: Z3_ast,): Z3_ast;
declare export function Z3_mk_iff(c: Z3_context,t1: Z3_ast,t2: Z3_ast,): Z3_ast;
declare export function Z3_mk_and(c: Z3_context,num_args: number,args: Array<Z3_ast>,): Z3_ast;
declare export function Z3_mk_or(c: Z3_context,num_args: number,args: Array<Z3_ast>,): Z3_ast;
declare export function Z3_get_symbol_kind(c: Z3_context,s: Z3_symbol,): Z3_symbol_kind;
declare export function Z3_get_symbol_int(c: Z3_context,s: Z3_symbol,): number;
declare export function Z3_mk_solver(c: Z3_context,): Z3_solver;
declare export function Z3_solver_assert(c: Z3_context,s: Z3_solver,a: Z3_ast,): void;
declare export function Z3_solver_check(c: Z3_context,s: Z3_solver,): Z3_lbool;
*/