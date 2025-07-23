// format expect errors
export const formatExpectErrors = (expects) => {
  return JSON.stringify(expects)
    .replace(/'/g, "\\'")
    .replace(/\\"/g, '"')
    .replace(/\s*,\s*/g, ',')
    .trim();
};

// format path
export function formatPaths(paths: string[]): string {
  if (paths.length === 0) return '';
  if (paths.length === 1) return paths[0];
  if (paths.length <= 3) return paths.join(', ');
  return `${paths[0]} +${paths.length - 1} more`;
}
