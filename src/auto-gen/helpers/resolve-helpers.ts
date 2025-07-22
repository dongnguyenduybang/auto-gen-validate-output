// 
function normalizeActionName(action: string): string {

    const words = action.match(/[A-Z]?[a-z]+|[0-9]+/g);
    if (!words) return action;

    const normalized = words
        .map((word) => {
            return word.toLowerCase() === 'dm'
                ? 'DM'
                : word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');

    return normalized;
}

// resolve schema swagger
export function resolveSchema(
    action: string,
    schemasList: any[],
    visited: Set<string> = new Set(),
): any {
    const normalizedAction = normalizeActionName(action);

    let foundPath: string | null = null;
    let foundMethod: string | null = null;
    let methodObj: any = null;
    let definitionsMap: Record<string, any> = {};

    for (const schemas of schemasList) {
        const allPaths = schemas.paths;
        const allSchemas =
            schemas.components?.schemas || schemas.definitions || {};

        for (const [pathKey, pathItem] of Object.entries(allPaths)) {
            for (const method of Object.keys(pathItem)) {
                const op = pathItem[method];
                if (op?.operationId === normalizedAction) {
                    foundPath = pathKey;
                    foundMethod = method;
                    methodObj = pathItem[method];
                    definitionsMap = allSchemas;
                    break;
                }
            }
            if (foundPath) break;
        }

        if (methodObj) break;
    }

    if (!methodObj || !foundPath || !foundMethod) {
        throw new Error(`❌ OperationId not found: ${action}`);
    }

    let rawSchema = methodObj?.requestBody?.content?.['application/json']?.schema;

    if (!rawSchema && methodObj?.parameters?.length > 0) {
        const bodyParam = methodObj.parameters.find((p: any) => p.in === 'body');
        if (bodyParam?.schema) {
            rawSchema = bodyParam.schema;
        } else {
            rawSchema = {
                type: 'object',
                properties: {},
                required: [],
            };

            for (const param of methodObj.parameters) {
                if (param.in !== 'body') {
                    rawSchema.properties[param.name] = param.schema || {};
                    if (param.required) {
                        rawSchema.required.push(param.name);
                    }
                }
            }
        }
    }

    if (!rawSchema) {
        throw new Error(`❌ No schema found in requestBody or parameters of ${normalizedAction}`);
    }

    // resolve recursive
    function doResolve(schema: any, visited: Set<string>): any {
        if (!schema || typeof schema !== 'object') return schema;

        if (schema['$ref']) {
            const refPath = schema['$ref']
                .replace('#/components/schemas/', '')
                .replace('#/definitions/', '');
            if (visited.has(refPath)) {
                console.warn(`⚠️ Detect recursive references for ${refPath}`);
                return { $ref: refPath, recursive: true };
            }

            const resolved = definitionsMap[refPath];
            if (!resolved) {
                throw new Error(`❌ No schema found for $ref: ${refPath}`);
            }

            const newVisited = new Set(visited);
            newVisited.add(refPath);
            return doResolve(resolved, newVisited);
        }

        if (schema.type === 'array' && schema.items) {
            return {
                ...schema,
                items: doResolve(schema.items, new Set(visited)),
            };
        }

        if (schema.type === 'object' && schema.properties) {
            const resolvedProps: Record<string, any> = {};
            for (const [key, prop] of Object.entries(schema.properties)) {
                resolvedProps[key] = doResolve(prop, new Set(visited));
            }
            return {
                ...schema,
                properties: resolvedProps,
            };
        }

        return { ...schema };
    }

    const resolved = doResolve(rawSchema, visited);
    if (
        resolved.type === 'object' &&
        resolved.properties &&
        Object.keys(resolved.properties).length === 1 &&
        resolved.properties.body?.type === 'object'
    ) {
        const bodySchema = resolved.properties.body;
        resolved.type = 'object';
        resolved.properties = bodySchema.properties || {};
        resolved.required = bodySchema.required || [];
    }

    resolved.__meta = {
        operationId: methodObj.operationId,
        method: foundMethod.toUpperCase(),
        path: foundPath,
        tags: methodObj.tags || [],
    };

    return resolved;
}

// resolve action name
export function extractActionName(path: string): string {
  const parts = path.split('/').filter(Boolean);
  const last = parts[parts.length - 1];

  // DM -> Dm
  const adjusted = last.replace(
    /([A-Z]{2,})(?=[A-Z][a-z]|$)/g,
    (match) => match.charAt(0) + match.slice(1).toLowerCase(),
  );

  return adjusted.charAt(0).toLowerCase() + adjusted.slice(1);
}
