/* @flow */

export type Type =
  | { t: 'Object', name: string }
  | { t: 'Enum', name: string, type: Type }
  | { t: 'Symbol' }
  | { t: 'Int' }
  | { t: 'Uint' }
  | { t: 'Void' }
  | { t: 'String' }
  | { t: 'Bool' }
;

export type ArgMode =
  | { t: 'In' }
  | { t: 'InArray', s: number }
  | { t: 'Out' }
;

export type Arg = {
  type: Type,
  nativeType: string,
  mode: ArgMode,
  name: string
};

export type Func = {
  name: string,
  args: Array<Arg>,
  resultType: Type,
};

export type Enum = {
  name: string,
  options: Array<{
    name: string,
    val: number,
  }>
};

export type Bindings = {
  funcs: Array<Func>,
  types: Array<string>,
  enums: Array<Enum>
};

export type NativeValue = {
  expr: string,
  cleanup: ?(string) => void,
  aliased: boolean,
};

export type NativeSignature = {
  resultType: string,
  args: Array<{
    name: string,
    type: string
  }>
};

export interface Writer {
  write(string): void;
  push(): void;
  pop(): void;
}
