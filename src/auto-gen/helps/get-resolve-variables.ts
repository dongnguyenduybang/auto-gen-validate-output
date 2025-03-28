/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeGlobalVariables } from '../global-var';
import { TestContext } from '../test-execute-step/text-context';

initializeGlobalVariables();

// thay biến {{}} thành value trong global.var cho chuỗi
export function resolveVariable(template: string, context: TestContext): any {
  // Kiểm tra nếu template không phải string
  if (typeof template !== 'string') return template;

  // Handle equal() functions
  const equalMatch = template.match(/^equal\(([^)]+)\)$/);
  if (equalMatch) {
    const resolvedContent = resolveVariable(equalMatch[1], context);
    return {
      __type: 'equal',
      value: resolvedContent,
    };
  }

  // Handle template variables
  const varMatch = template.match(/\{\{([^}]+)\}\}/g);
  if (varMatch) {
    let result = template;
    for (const match of varMatch) {
      const key = match.slice(2, -2).trim();
      const value = context.getValue(key);
      result = result.replace(match, value !== undefined ? value : '');
    }

    if (result !== template && result.match(/\{\{/)) {
      return resolveVariable(result, context);
    }
    return result;
  }
  return template;
}
export function resolveObject(obj: any, context: TestContext): any {
  try {
    if (typeof obj === 'string') {
      return resolveVariable(obj, context);
    } else if (Array.isArray(obj)) {
      return obj.map((item) => resolveObject(item, context));
    } else if (obj && typeof obj === 'object') {
      const result: any = {};
      for (const key in obj) {
        result[key] = resolveObject(obj[key], context);
      }
      return result;
    }

    return obj;
  } catch (error) {
    console.error('Error resolving object:', error);
    return obj;
  }
}
