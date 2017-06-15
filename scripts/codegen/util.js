/* @flow */

export function functionNameToJS(
  name: string
): string {
  if (!name.startsWith('Z3_')) {
    throw new Error(`Invalid function name: ${name}`);
  }

  return name
    .slice(3)
    .replace(/_[a-z]/g, ([_, ch]) => ch.toUpperCase());
}

export function enumOptionToJS(
  name: string
): string {
  if (!name.startsWith('Z3_')) {
    throw new Error(`Invalid function name: ${name}`);
  }

  return name.slice(3);
}

export function typeToJS(
  name: string
): string {
  if (!name.startsWith('Z3_')) {
    throw new Error(`Invalid function name: ${name}`);
  }

  if (name === 'Z3_lbool') {
    return 'LBool';
  }

  if (name === 'Z3_symbol') {
    return 'Z3Symbol';
  }

  return name
    .replace(/_[a-z]/g, ([_, ch]) => ch.toUpperCase())
    .slice(2);
}
