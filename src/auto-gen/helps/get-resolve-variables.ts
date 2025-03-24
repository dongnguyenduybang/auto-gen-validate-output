/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeGlobalVariables } from '../global-var';
import { TestContext } from '../text-context';

initializeGlobalVariables();

// thay biến {{}} thành value trong global.var cho chuỗi
export function resolveVariable(
  template: string,
  context: TestContext,
): string {
  const resolved = template.replace(/{{([\w.\[\]]+)}}/g, (_, key) => {
    const parts = key.match(/(\w+)(_\d+)?\[(\d+)\]\.(\w+)|(\w+)(_\d+)?\.(\w+)/);

    if (!parts) return '';
    if (parts[1]) {
      const step = parts[1] + (parts[2] || '');
      const index = Number(parts[3]);
      const field = parts[4];
      const users = context.getStepContext(step)?.users || [];
      return users[index]?.[field] || '';
    }

    const step = parts[5] + (parts[6] || '');
    const field = parts[7];
    return context.getStepContext(step)?.[field] || '';
  });
  try {
    return JSON.stringify(JSON.parse(resolved), null, 2);
  } catch {
    return resolved
      .replace(/'/g, '"')
      .replace(/(\w+)(?=\s*:)/g, '"$1"')
      .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3');
  }
}
export function resolveObject(obj: any, context: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => resolveObject(item, context));
  }

  const resolvedObj: any = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (typeof value === 'string' && value.includes('{{')) {
        resolvedObj[key] = resolveVariable(value, context);
      } else {
        resolvedObj[key] = resolveObject(value, context);
      }
    }
  }

  return resolvedObj;
}
