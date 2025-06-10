type PropertyNames<T> = T extends Record<string, any> ? keyof T : never;
import * as Interfaces from '../swagger-hono';
import { RequestTestSuite } from './declarations';
import schemas from '../swagger-hono/schemas.json';
import { join } from 'path';
function toInterfaceName(requestName: string): string {
  const words = requestName.split('-');
  const pascalCase = words
    .map(word => {
      if (word.length === 2) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
  if (requestName.endsWith('-request')) {
    return `V3${pascalCase}`;
  }

  return `V3${pascalCase}Request`;
}

function findInterface(requestName: string): any {

    const schemaName = toInterfaceName(requestName);
    const schema = schemas[schemaName];

    if (!schema) {
        console.log('Available schemas:', Object.keys(schemas)); // Debug
        throw new Error(`Schema ${schemaName} not found in schemas.json`);
    }

    return schema;
}

function createBodyFromInterface(requestName: string): Record<string, any> {
    const schema = findInterface(requestName);

    const body: Record<string, any> = {};
    for (const [key] of Object.entries(schema.properties) as [string, any][]) {
        if (schema.required?.includes(key)) {
            body[key] = `VAR.${key}`;
            // if (descriptor.$ref) {
            //     const refSchema = resolveRef(descriptor.$ref);
            //     body[key] = refSchema?.enum?.[0] ?? null; // Lấy giá trị đầu tiên của enum
            // } else {
            //     body[key] = descriptor.type === 'string' ? `VAR.${key}` : null;
            // }
        }
    }

    return body;
}

function resolveRef(ref: string): any {
    if (!ref.startsWith('#/components/schemas/')) return null;
    const schemaName = ref.replace('#/components/schemas/', '');
    return schemas[schemaName] || null;
}

// 4. Hàm generate request
export function generateRequest(requestName: string, options: Record<string, string[]>): RequestTestSuite {
    const body = createBodyFromInterface(requestName);

    const request: RequestTestSuite = {
        action: 'ss',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer VAR.token' },
        body: body,
        options: [{}],
    };

    for (const [hookType, actions] of Object.entries(options)) {
        request.options[0][hookType] = actions.map((action) => {
            try {
                return {
                    action: action.toUpperCase().replace(/-/g, '_'),
                    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer VAR.token' },
                    body: createBodyFromInterface(action),
                };
            } catch (error) {
                console.error(`Failed to process action ${action}: ${error.message}`);
                throw error;
            }
        });
    }
    console.log(JSON.stringify(request, null, 2))
    return request;
}
