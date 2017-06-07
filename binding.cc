// THIS FILE IS GENERATED AUTOMATICALLY, DON'T EDIT

#include <nan.h>
#include <z3.h>

using namespace v8;
using namespace Nan;

NAN_METHOD(Z3_global_param_set_binding) {
  Z3_global_param_set(*Utf8String(info[0]), *Utf8String(info[1]));
}

NAN_METHOD(Z3_mk_config_binding) {
  auto v1 = Z3_mk_config();
  auto v2 = New<ObjectTemplate>();
  v2->SetInternalFieldCount(1);
  Local<Object> v3 = v2->NewInstance();
  SetInternalFieldPointer(v3, 0, v1);
  info.GetReturnValue().Set(v3);
}

NAN_METHOD(Z3_del_config_binding) {
  Z3_del_config(static_cast<Z3_config>(GetInternalFieldPointer(info[0].As<Object>(), 0)));
}

NAN_METHOD(Z3_set_param_value_binding) {
  Z3_set_param_value(static_cast<Z3_config>(GetInternalFieldPointer(info[0].As<Object>(), 0)), *Utf8String(info[1]), *Utf8String(info[2]));
}

NAN_METHOD(Z3_mk_context_binding) {
  auto v1 = Z3_mk_context(static_cast<Z3_config>(GetInternalFieldPointer(info[0].As<Object>(), 0)));
  auto v2 = New<ObjectTemplate>();
  v2->SetInternalFieldCount(1);
  Local<Object> v3 = v2->NewInstance();
  SetInternalFieldPointer(v3, 0, v1);
  info.GetReturnValue().Set(v3);
}

NAN_METHOD(Z3_mk_int_symbol_binding) {
  auto v1 = Z3_mk_int_symbol(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), info[1].As<Int32>()->Value());
  info.GetReturnValue().Set(New<External>(v1));
}

NAN_METHOD(Z3_mk_string_symbol_binding) {
  auto v1 = Z3_mk_string_symbol(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), *Utf8String(info[1]));
  info.GetReturnValue().Set(New<External>(v1));
}

NAN_METHOD(Z3_mk_bool_sort_binding) {
  auto v1 = Z3_mk_bool_sort(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)));
  auto v2 = New<ObjectTemplate>();
  v2->SetInternalFieldCount(1);
  Local<Object> v3 = v2->NewInstance();
  SetInternalFieldPointer(v3, 0, v1);
  info.GetReturnValue().Set(v3);
}

NAN_METHOD(Z3_mk_int_sort_binding) {
  auto v1 = Z3_mk_int_sort(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)));
  auto v2 = New<ObjectTemplate>();
  v2->SetInternalFieldCount(1);
  Local<Object> v3 = v2->NewInstance();
  SetInternalFieldPointer(v3, 0, v1);
  info.GetReturnValue().Set(v3);
}

NAN_METHOD(Z3_mk_const_binding) {
  auto v1 = Z3_mk_const(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), static_cast<Z3_symbol>(info[1].As<External>()->Value()), static_cast<Z3_sort>(GetInternalFieldPointer(info[2].As<Object>(), 0)));
  auto v2 = New<ObjectTemplate>();
  v2->SetInternalFieldCount(1);
  Local<Object> v3 = v2->NewInstance();
  SetInternalFieldPointer(v3, 0, v1);
  info.GetReturnValue().Set(v3);
}

NAN_METHOD(Z3_mk_eq_binding) {
  auto v1 = Z3_mk_eq(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), static_cast<Z3_ast>(GetInternalFieldPointer(info[1].As<Object>(), 0)), static_cast<Z3_ast>(GetInternalFieldPointer(info[2].As<Object>(), 0)));
  auto v2 = New<ObjectTemplate>();
  v2->SetInternalFieldCount(1);
  Local<Object> v3 = v2->NewInstance();
  SetInternalFieldPointer(v3, 0, v1);
  info.GetReturnValue().Set(v3);
}

NAN_METHOD(Z3_mk_not_binding) {
  auto v1 = Z3_mk_not(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), static_cast<Z3_ast>(GetInternalFieldPointer(info[1].As<Object>(), 0)));
  auto v2 = New<ObjectTemplate>();
  v2->SetInternalFieldCount(1);
  Local<Object> v3 = v2->NewInstance();
  SetInternalFieldPointer(v3, 0, v1);
  info.GetReturnValue().Set(v3);
}

NAN_METHOD(Z3_mk_iff_binding) {
  auto v1 = Z3_mk_iff(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), static_cast<Z3_ast>(GetInternalFieldPointer(info[1].As<Object>(), 0)), static_cast<Z3_ast>(GetInternalFieldPointer(info[2].As<Object>(), 0)));
  auto v2 = New<ObjectTemplate>();
  v2->SetInternalFieldCount(1);
  Local<Object> v3 = v2->NewInstance();
  SetInternalFieldPointer(v3, 0, v1);
  info.GetReturnValue().Set(v3);
}

NAN_METHOD(Z3_mk_and_binding) {
  auto v1 = info[2].As<Array>();
  auto v3 = info[1].As<Uint32>()->Value();
  auto v2 = new Z3_ast[v3];

  for (unsigned int i = 0; i < v3; i++) {
    v2[i] = static_cast<Z3_ast>(GetInternalFieldPointer(v1->Get(i).As<Object>(), 0));
  }

  auto v4 = Z3_mk_and(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), info[1].As<Uint32>()->Value(), v2);
  auto v5 = New<ObjectTemplate>();
  v5->SetInternalFieldCount(1);
  Local<Object> v6 = v5->NewInstance();
  SetInternalFieldPointer(v6, 0, v4);
  info.GetReturnValue().Set(v6);
  delete [] v2;
}

NAN_METHOD(Z3_mk_or_binding) {
  auto v1 = info[2].As<Array>();
  auto v3 = info[1].As<Uint32>()->Value();
  auto v2 = new Z3_ast[v3];

  for (unsigned int i = 0; i < v3; i++) {
    v2[i] = static_cast<Z3_ast>(GetInternalFieldPointer(v1->Get(i).As<Object>(), 0));
  }

  auto v4 = Z3_mk_or(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), info[1].As<Uint32>()->Value(), v2);
  auto v5 = New<ObjectTemplate>();
  v5->SetInternalFieldCount(1);
  Local<Object> v6 = v5->NewInstance();
  SetInternalFieldPointer(v6, 0, v4);
  info.GetReturnValue().Set(v6);
  delete [] v2;
}

NAN_METHOD(Z3_mk_add_binding) {
  auto v1 = info[2].As<Array>();
  auto v3 = info[1].As<Uint32>()->Value();
  auto v2 = new Z3_ast[v3];

  for (unsigned int i = 0; i < v3; i++) {
    v2[i] = static_cast<Z3_ast>(GetInternalFieldPointer(v1->Get(i).As<Object>(), 0));
  }

  auto v4 = Z3_mk_add(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), info[1].As<Uint32>()->Value(), v2);
  auto v5 = New<ObjectTemplate>();
  v5->SetInternalFieldCount(1);
  Local<Object> v6 = v5->NewInstance();
  SetInternalFieldPointer(v6, 0, v4);
  info.GetReturnValue().Set(v6);
  delete [] v2;
}

NAN_METHOD(Z3_mk_int_binding) {
  auto v1 = Z3_mk_int(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), info[1].As<Int32>()->Value(), static_cast<Z3_sort>(GetInternalFieldPointer(info[2].As<Object>(), 0)));
  auto v2 = New<ObjectTemplate>();
  v2->SetInternalFieldCount(1);
  Local<Object> v3 = v2->NewInstance();
  SetInternalFieldPointer(v3, 0, v1);
  info.GetReturnValue().Set(v3);
}

NAN_METHOD(Z3_get_symbol_kind_binding) {
  auto v1 = Z3_get_symbol_kind(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), static_cast<Z3_symbol>(info[1].As<External>()->Value()));
  info.GetReturnValue().Set(New<Uint32>(v1));
}

NAN_METHOD(Z3_get_symbol_int_binding) {
  auto v1 = Z3_get_symbol_int(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), static_cast<Z3_symbol>(info[1].As<External>()->Value()));
  info.GetReturnValue().Set(New<Int32>(v1));
}

NAN_METHOD(Z3_get_symbol_string_binding) {
  auto v1 = Z3_get_symbol_string(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), static_cast<Z3_symbol>(info[1].As<External>()->Value()));
  info.GetReturnValue().Set(New<String>(v1).ToLocalChecked());
}

NAN_METHOD(Z3_get_ast_kind_binding) {
  auto v1 = Z3_get_ast_kind(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), static_cast<Z3_ast>(GetInternalFieldPointer(info[1].As<Object>(), 0)));
  info.GetReturnValue().Set(New<Uint32>(v1));
}

NAN_METHOD(Z3_get_numeral_int_binding) {
  int v1;
  auto v2 = Z3_get_numeral_int(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), static_cast<Z3_ast>(GetInternalFieldPointer(info[1].As<Object>(), 0)), &v1);
  info.GetReturnValue().Set(New<Boolean>(v2));
  Nan::Set(info[2].As<Object>(), New<String>("val").ToLocalChecked(), New<Int32>(v1));
}

NAN_METHOD(Z3_model_eval_binding) {
  Z3_ast v1;
  auto v2 = Z3_model_eval(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), static_cast<Z3_model>(GetInternalFieldPointer(info[1].As<Object>(), 0)), static_cast<Z3_ast>(GetInternalFieldPointer(info[2].As<Object>(), 0)), info[3].As<Boolean>()->Value(), &v1);
  info.GetReturnValue().Set(New<Boolean>(v2));
  auto v3 = New<ObjectTemplate>();
  v3->SetInternalFieldCount(1);
  Local<Object> v4 = v3->NewInstance();
  SetInternalFieldPointer(v4, 0, v1);
  Nan::Set(info[4].As<Object>(), New<String>("val").ToLocalChecked(), v4);
}

NAN_METHOD(Z3_model_get_const_interp_binding) {
  auto v1 = Z3_model_get_const_interp(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), static_cast<Z3_model>(GetInternalFieldPointer(info[1].As<Object>(), 0)), static_cast<Z3_func_decl>(GetInternalFieldPointer(info[2].As<Object>(), 0)));
  auto v2 = New<ObjectTemplate>();
  v2->SetInternalFieldCount(1);
  Local<Object> v3 = v2->NewInstance();
  SetInternalFieldPointer(v3, 0, v1);
  info.GetReturnValue().Set(v3);
}

NAN_METHOD(Z3_ast_to_string_binding) {
  auto v1 = Z3_ast_to_string(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), static_cast<Z3_ast>(GetInternalFieldPointer(info[1].As<Object>(), 0)));
  info.GetReturnValue().Set(New<String>(v1).ToLocalChecked());
}

NAN_METHOD(Z3_model_to_string_binding) {
  auto v1 = Z3_model_to_string(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), static_cast<Z3_model>(GetInternalFieldPointer(info[1].As<Object>(), 0)));
  info.GetReturnValue().Set(New<String>(v1).ToLocalChecked());
}

NAN_METHOD(Z3_mk_solver_binding) {
  auto v1 = Z3_mk_solver(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)));
  auto v2 = New<ObjectTemplate>();
  v2->SetInternalFieldCount(1);
  Local<Object> v3 = v2->NewInstance();
  SetInternalFieldPointer(v3, 0, v1);
  info.GetReturnValue().Set(v3);
}

NAN_METHOD(Z3_solver_assert_binding) {
  Z3_solver_assert(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), static_cast<Z3_solver>(GetInternalFieldPointer(info[1].As<Object>(), 0)), static_cast<Z3_ast>(GetInternalFieldPointer(info[2].As<Object>(), 0)));
}

NAN_METHOD(Z3_solver_check_binding) {
  auto v1 = Z3_solver_check(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), static_cast<Z3_solver>(GetInternalFieldPointer(info[1].As<Object>(), 0)));
  info.GetReturnValue().Set(New<Int32>(v1));
}

NAN_METHOD(Z3_solver_get_model_binding) {
  auto v1 = Z3_solver_get_model(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)), static_cast<Z3_solver>(GetInternalFieldPointer(info[1].As<Object>(), 0)));
  auto v2 = New<ObjectTemplate>();
  v2->SetInternalFieldCount(1);
  Local<Object> v3 = v2->NewInstance();
  SetInternalFieldPointer(v3, 0, v1);
  info.GetReturnValue().Set(v3);
}

NAN_MODULE_INIT(Init) {
  Nan::Set(target, New<String>("Z3_global_param_set").ToLocalChecked(), New<FunctionTemplate>(Z3_global_param_set_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_config").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_config_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_del_config").ToLocalChecked(), New<FunctionTemplate>(Z3_del_config_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_set_param_value").ToLocalChecked(), New<FunctionTemplate>(Z3_set_param_value_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_context").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_context_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_int_symbol").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_int_symbol_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_string_symbol").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_string_symbol_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_bool_sort").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_bool_sort_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_int_sort").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_int_sort_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_const").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_const_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_eq").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_eq_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_not").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_not_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_iff").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_iff_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_and").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_and_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_or").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_or_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_add").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_add_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_int").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_int_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_get_symbol_kind").ToLocalChecked(), New<FunctionTemplate>(Z3_get_symbol_kind_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_get_symbol_int").ToLocalChecked(), New<FunctionTemplate>(Z3_get_symbol_int_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_get_symbol_string").ToLocalChecked(), New<FunctionTemplate>(Z3_get_symbol_string_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_get_ast_kind").ToLocalChecked(), New<FunctionTemplate>(Z3_get_ast_kind_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_get_numeral_int").ToLocalChecked(), New<FunctionTemplate>(Z3_get_numeral_int_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_model_eval").ToLocalChecked(), New<FunctionTemplate>(Z3_model_eval_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_model_get_const_interp").ToLocalChecked(), New<FunctionTemplate>(Z3_model_get_const_interp_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_ast_to_string").ToLocalChecked(), New<FunctionTemplate>(Z3_ast_to_string_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_model_to_string").ToLocalChecked(), New<FunctionTemplate>(Z3_model_to_string_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_solver").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_solver_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_solver_assert").ToLocalChecked(), New<FunctionTemplate>(Z3_solver_assert_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_solver_check").ToLocalChecked(), New<FunctionTemplate>(Z3_solver_check_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_solver_get_model").ToLocalChecked(), New<FunctionTemplate>(Z3_solver_get_model_binding)->GetFunction());
}

NODE_MODULE(bindings, Init)
