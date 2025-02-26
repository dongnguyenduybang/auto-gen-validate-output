import { initializeGlobalVariables } from "../global-var";

initializeGlobalVariables()

// thay biến {{}} thành value trong global.var cho chuỗi
export function resolveVariables(template: string): string {
  
//check nếu là biểu thức thì get string trong dấu {{}} và thay thế bằng biến global tương ứng
  const regex = /{{(.*?)}}/g;
  let result = template.replace(regex, (match, content) => {

    const value = globalThis.globalVar.get(content.trim());
    if (!value) {
      throw new Error(`Variable {{${content}}} not found`);
    }
    return value;
  });

  result = result.replace(/[()]/g, '');
  result = result.replace(/^'|'$/g, '');
  return result;
}

// thay biến {{}} thành value trong global.var cho json
export function resolveJsonVariables(json: any): any {

  // đệ quy 
  function resolve(value: any): any {
    if (typeof value === 'string') {
      
      //check nếu là biểu thức thì get string trong dấu {{}} và thay thế bằng biến global tương ứng
      const regex = /{{(.*?)}}/g;
      return value.replace(regex, (match, content) => {

        const resolvedValue = globalThis.globalVar.get(content.trim());
        if (resolvedValue === undefined) {

          throw new Error(`Variable {{${content}}} not found in globalVariables`);
        }
        return resolvedValue;
      });
    } else if (Array.isArray(value)) {

      return value.map(resolve);

    } else if (typeof value === 'object' && value !== null) {

      const resolvedObject: Record<string, any> = {};

      for (const [key, val] of Object.entries(value)) {

        resolvedObject[key] = resolve(val);
      }
      return resolvedObject;
    }
    return value;
  }
  
  return resolve(json);
}