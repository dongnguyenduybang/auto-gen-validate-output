// replace path
export function normalizePath(inputPath: string) {
  return inputPath.replace(/\\/g, '/').replace(/\/+/g, '/');
}
