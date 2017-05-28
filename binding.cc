// THIS FILE IS GENERATED AUTOMATICALLY, DON'T EDIT

#include <nan.h>
#include <z3.h>

using namespace v8;
using namespace Nan;

NAN_METHOD(Z3_mk_config_binding) {
  auto v1 = Z3_mk_config();
  auto v2 = New<ObjectTemplate>();
  v2->SetInternalFieldCount(1);
  Local<Object> v3 = v2->NewInstance();
  SetInternalFieldPointer(v3, 0, v1);
  info.GetReturnValue().Set(v3);
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

NAN_METHOD(Z3_mk_bool_sort_binding) {
  auto v1 = Z3_mk_bool_sort(static_cast<Z3_context>(GetInternalFieldPointer(info[0].As<Object>(), 0)));
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

NAN_MODULE_INIT(Init) {
  Nan::Set(target, New<String>("Z3_mk_config").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_config_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_context").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_context_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_int_symbol").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_int_symbol_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_bool_sort").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_bool_sort_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_const").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_const_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_not").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_not_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_iff").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_iff_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_and").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_and_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_or").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_or_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_mk_solver").ToLocalChecked(), New<FunctionTemplate>(Z3_mk_solver_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_solver_assert").ToLocalChecked(), New<FunctionTemplate>(Z3_solver_assert_binding)->GetFunction());
  Nan::Set(target, New<String>("Z3_solver_check").ToLocalChecked(), New<FunctionTemplate>(Z3_solver_check_binding)->GetFunction());
}

NODE_MODULE(bindings, Init)
