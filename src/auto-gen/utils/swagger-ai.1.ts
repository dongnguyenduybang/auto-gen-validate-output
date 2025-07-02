import { VAR } from "../enums";
import { AIUserIdResolver } from "./swagger-ai.3";
import schemas from '../swagger/schemas.json';

interface Schema {
    type?: string;
    description?: string;
    properties?: Record<string, Schema>;
    required?: string[];
    anyOf?: Array<{ required?: string[] }> | string[]; // Updated to handle both formats
    enum?: any[];
    items?: Schema;
}

interface Context {
    actionName: string;
    schemaDescription?: string;
    endpoint?: string;
    method?: string;
}

let aiResolver: AIUserIdResolver | null = null;

export async function initializeAI(): Promise<AIUserIdResolver> {
    if (!aiResolver) {
        aiResolver = new AIUserIdResolver();
        await aiResolver.initializeAI();
    }
    return aiResolver;
}

export function toInterfaceName(requestName: string): string {
    const words = requestName.split(/[-_]/).length > 1
        ? requestName.split(/[-_]/)
        : requestName.split(/(?=[A-Z])/);

    const pascalCase = words
        .map(word => {
            if (word.length === 2 && word === word.toUpperCase()) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');

    return VAR.versionSwagger
        ? VAR.versionSwagger.replace('$', pascalCase)
        : pascalCase;
}

function findInterface(requestName: string): Schema {
    const schemaName = toInterfaceName(requestName);
    const schema = (schemas as Record<string, Schema>)[schemaName];
    if (!schema) {
        console.log('Available schemas:', Object.keys(schemas));
        throw new Error(`Schema ${schemaName} not found in schemas.json`);
    }
    return schema;
}

async function generateValueFromSchemaAI(
    value: Schema,
    key: string,
    context: Context
): Promise<any> {
    console.log('Generating value for:', value, key, 'in context:', context.actionName);

    if (!value.type) {
        return null;
    }

    if (value.type === 'string') {
        if (key === 'userId' && aiResolver) {
            try {
                const aiResult = await aiResolver.resolveUserIdContext(
                    context.actionName,
                    {
                        description: value.description || context.schemaDescription || '',
                        properties: { [key]: value }
                    },
                    context.endpoint || '',
                    context.method || 'POST'
                );

                console.log(`🤖 AI resolved userId context:`, aiResult);

                const varMapping: Record<string, string> = {
                    'sender': 'VAR.fromUserId',
                    'receiver': 'VAR.toUserId',
                    'target': 'VAR.targetUserId'
                };

                const suggestedVar = varMapping[aiResult.userIdMeaning] || 'VAR.userId';

                console.log(`💡 Suggestion: Use ${suggestedVar} for ${context.actionName}`);
                console.log(`   Confidence: ${(aiResult.confidence * 100).toFixed(1)}%`);
                console.log(`   Reasoning: ${aiResult.reasoning}`);

                return suggestedVar;
            } catch (error) {
                console.warn('AI resolution failed, falling back to default:', error);
            }
        }

        if (key in VAR) {
            return (VAR as Record<string, string>)[key];
        }
        return `VAR.${key}`;

    } else if (value.type === 'array' && value.items) {
        const itemValue = await generateValueFromSchemaAI(
            value.items,
            `${key}_item`,
            context
        );
        return [itemValue];

    } else if (value.type === 'object' && value.properties) {
        const obj: Record<string, any> = {};
        for (const [propKey, propValue] of Object.entries(value.properties)) {
            if (value.required?.includes(propKey) || value.anyOf?.includes(propKey)) {
                obj[propKey] = await generateValueFromSchemaAI(propValue, propKey, context);
            } else {
                obj[propKey] = undefined;
            }
        }
        return obj;

    } else if (value.enum) {
        return value.enum[0];
    }

    return null;
}

export async function createBodyFromSwaggerJsonAI(
    requestName: string,
    context: { endpoint?: string; method?: string } = {}
): Promise<Record<string, any>> {
    if (!aiResolver) {
        await initializeAI();
    }

    const schema = findInterface(requestName);
    const body: Record<string, any> = {};

    const enhancedContext: Context = {
        actionName: requestName,
        schemaDescription: schema.description || '',
        endpoint: context.endpoint || '',
        method: context.method || 'POST'
    };

    if (!schema.properties) {
        return body;
    }

    for (const [key, value] of Object.entries(schema.properties)) {
        if (schema.required?.includes(key) || schema.anyOf?.includes(key)) {
            body[key] = await generateValueFromSchemaAI(value, key, enhancedContext);
        } else {
            body[key] = undefined;
        }
    }

    return body;
}

export function createBodyFromSwaggerJson(requestName: string): Record<string, any> {
    const schema = findInterface(requestName);
    const body: Record<string, any> = {};

    if (!schema.properties) {
        return body;
    }

    for (const [key, value] of Object.entries(schema.properties)) {
        if (schema.required?.includes(key) || schema.anyOf?.includes(key)) {
            body[key] = generateValueFromSchema(value, key);
        } else {
            body[key] = undefined;
        }
    }

    return body;
}

function generateValueFromSchema(value: Schema, key: string): any {
    if (!value.type) {
        return null;
    }

    if (value.type === 'string') {
        if (key in VAR) {
            return (VAR as Record<string, string>)[key];
        }
        return `VAR.${key}`;
    } else if (value.type === 'array' && value.items) {
        return [generateValueFromSchema(value.items, `${key}_item`)];
    } else if (value.type === 'object' && value.properties) {
        const obj: Record<string, any> = {};
        for (const [propKey, propValue] of Object.entries(value.properties)) {
            if (value.required?.includes(propKey) || value.anyOf?.includes(propKey)) {
                obj[propKey] = generateValueFromSchema(propValue, propKey);
            } else {
                obj[propKey] = undefined;
            }
        }
        return obj;
    } else if (value.enum) {
        return value.enum[0];
    }

    return null;
}

export const BODY_AI = {
    create: async (endpoint: string, context: { endpoint?: string; method?: string } = {}) => {
        const bodySwagger = await createBodyFromSwaggerJsonAI(endpoint, context);
        console.log('🤖 AI-generated body:', bodySwagger);
        return bodySwagger;
    }
};

export const BODY = {
    create: (endpoint: string) => {
        const bodySwagger = createBodyFromSwaggerJson(endpoint);
        console.log(bodySwagger);
        return bodySwagger;
    }
};