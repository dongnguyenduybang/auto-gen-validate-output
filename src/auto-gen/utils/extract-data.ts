
import { configMap } from './extract-config';

export function extractDatas(response: any, action: string): Record<string, any> {
  const data: Record<string, any> = {};

  // Lấy cấu hình từ configMap dựa trên action
  const config = configMap[action];
  if (!config) {
    console.warn(`No config found for action: ${action}`);
    return data;
  }

  // Kiểm tra response
  if (!response) return data;

  Object.entries(config).forEach(([section, { path, fields }]) => {
    let source = response;
    for (const key of path) {
      source = source?.[key];
      if (!source) return;
    }

    if (Array.isArray(source)) {
      source.forEach((item: any, index: number) => {
        const suffix = index === 0 ? '' : index; // Hậu tố: '', '2', '3', ...
        fields.forEach((field) => {
          if (item[field] !== undefined) {
            data[`${field}${suffix}`] = item[field];
          }
        });
      });
    } else if (typeof source === 'object' && source !== null) {
      fields.forEach((field) => {
        if (source[field] !== undefined) {
          data[field] = source[field]; // Tạo key trực tiếp như channelId, name
        }
      });
    }
  });

  return data;
}
