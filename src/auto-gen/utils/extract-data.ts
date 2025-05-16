import { configMap } from './extract-config';
<<<<<<< HEAD

export function extractDatas(response: any, action: string, groupBySection: boolean = true): Record<string, any> {
  const result: Record<string, any> = {};
=======
export function extractDatas(
  response: object,
  action: string,
): Record<string, any> {
  const data: Record<string, any> = {};
>>>>>>> main

  const config = configMap[action];
  if (!config) {
    console.warn(`No config found for action: ${action}`);
    return result;
  }

  if (!response) return result;

  Object.entries(config).forEach(([section, { path, fields }]) => {
    let source = response;
    for (const key of path) {
      source = source?.[key];
      if (!source) return;
    }

<<<<<<< HEAD
    if (groupBySection) {
      const sectionData: Record<string, any> = {};
      fields.forEach((field) => {
        if (source[field] !== undefined) {
          sectionData[field] = source[field];
=======
    if (Array.isArray(source)) {
      source.forEach((item: string, index: number) => {
        const suffix = index === 0 ? '' : index; // Hậu tố: '', '2', '3', ...
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
>>>>>>> main
        }
      });
      result[section] = sectionData;
    } else {
      if (Array.isArray(source)) {
        source.forEach((item: any, index: number) => {
          const suffix = index === 0 ? '' : index;
          fields.forEach((field) => {
            if (item[field] !== undefined) {
              result[`${field}${suffix}`] = item[field];
            }
          });
        });
      } else if (typeof source === 'object' && source !== null) {
        fields.forEach((field) => {
          if (source[field] !== undefined) {
            result[field] = source[field];
          }
        });
      }
    }
  });

  return result;
}