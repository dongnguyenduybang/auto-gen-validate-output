import { initializeGlobalVariables } from '../global-var';
import { TestContext } from '../text-context';

initializeGlobalVariables();

// thay biến {{}} thành value trong global.var cho chuỗi
export function resolveVariables(template: string): string {
  //check nếu là biểu thức thì get string trong dấu {{}} và thay thế bằng biến global tương ứng
  const regex = /{{(.*?)}}/g;
  let result = template.replace(regex, (match, content) => {
    const value = globalThis.globalVar.get(content.trim());
    if (!value) {
      // console.warn(`Variable {{${content}}} not found. Using default value ''`);
      return '';
    }
    return value;
  });

  result = result.replace(/[()]/g, '');
  result = result.replace(/^'|'$/g, '');
  return result;
}

// thay biến {{}} thành value trong global.var cho json
// export function resolveJsonVariables(json: any): any {
//   // đệ quy
//   function resolve(value: any): any {
//     if (typeof value === 'string') {
//       //check nếu là biểu thức thì get string trong dấu {{}} và thay thế bằng biến global tương ứng
//       const regex = /{{(.*?)}}/g;
//       return value.replace(regex, (match, content) => {
//         const resolvedValue = globalThis.globalVar.get(content.trim());
//         if (resolvedValue === undefined) {
//           throw new Error(
//             `Variable {{${content}}} not found in globalVariables`,
//           );
//         }
//         return resolvedValue;
//       });
//     } else if (Array.isArray(value)) {
//       return value.map(resolve);
//     } else if (typeof value === 'object' && value !== null) {
//       const resolvedObject: Record<string, any> = {};

//       for (const [key, val] of Object.entries(value)) {
//         resolvedObject[key] = resolve(val);
//       }
//       return resolvedObject;
//     }
//     return value;
//   }

//   return resolve(json);
// }
export function resolveVariable(
  template: string,
  context: TestContext,
): string {
  const resolved = template.replace(/{{([\w.]+)}}/g, (_, key) => {
    const [step, field] = key.split('.');
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
