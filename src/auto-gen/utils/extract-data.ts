import { configMap } from './extract-config';
export function extractDatas(
  response: object,
  action: string,
): Record<string, string> {
  const data: Record<string, string> = {};

  const config = configMap[action];
  if (!config) {
    console.warn(`No config found for action: ${action}`);
    return data;
  }

  // Kiểm tra response
  if (!response) return data;

  Object.entries(config).forEach(([_, { path, fields }]) => {
    let source = response;
    for (const key of path) {
      source = source?.[key];
      if (!source) return;
    }

    if (Array.isArray(source)) {
      source.forEach((item: string, index: number) => {
        const suffix = index === 0 ? '' : index;
        fields.forEach((field) => {
          if (item[field] !== undefined) {
            data[`${field}${suffix}`] = item[field];
          }
        });
      });
    } else {
      fields.forEach((field) => {
        if (source[field] !== undefined) {
          data[field] = source[field];
        }
      });
    }
  });

  return data;
}
