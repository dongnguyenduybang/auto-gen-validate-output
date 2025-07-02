import * as path from 'path';
import * as fs from 'fs';
import { generateErrorCases } from './dto-helper-v2';
import {
    findAllFoldersWithDtoAndRequest,
    getMatchedFilePaths,
    groupFilesByName,
} from './helper';
import { GenRequestOptions, RequestHeaders, RequestTestSuite, Step } from './declarations';
import { VAR } from '../enums';
import schemas from '../swagger/schemas.json';

interface TestOptions {
    beforeAll?: Step[];
    beforeEach?: Step[];
    afterEach?: Step[];
    afterAll?: Step[];
}

function parseOptions(rawOptions: any): TestOptions {
    console.log(rawOptions, typeof rawOptions)
    if (typeof rawOptions !== 'object' || rawOptions === null) {
        return {};
    }

    const options: TestOptions = {};
    const validHooks = ['beforeAll', 'beforeEach', 'afterEach', 'afterAll'];

    for (const [key, value] of Object.entries(rawOptions)) {
        if (validHooks.includes(key) && Array.isArray(value)) {
            options[key] = [...value];
        }
    }

    return options;
}

interface RequestGenerator {
    (dto: string, dtoName: any, cluster: string, options?: any, headers?: any): Promise<RequestTestSuite>;
}

export const requestGeneratorInterface: RequestGenerator[] = [
    (dto, dtoName, cluster, options, headers) =>
        generateRequestTestSuite(
            dto,
            dtoName,
            cluster,
            parseOptions(options),
            headers
        )
];

export function toInterfaceName(requestName: string): string {
    const words = requestName.split(/[-_]/).length > 1
        ? requestName.split(/[-_]/)
        : requestName.split(/(?=[A-Z])/);

    const pascalCase = words
        .map(word => {
            const lowerWord = word.toLowerCase();
            if (lowerWord === 'dm') {
                return 'DM'; // giữ nguyên viết hoa
            }
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


function findInterface(requestName: string): any {
    const schemaName = toInterfaceName(requestName);
    const schema = schemas[schemaName];
    if (!schema) {
        console.log('Available schemas:', Object.keys(schemas));
        throw new Error(`Schema ${schemaName} not found in schemas.json`);
    }
    return schema;
}

function generateValueFromSchema(value: any, key: string): any {
    console.log(value, key)
    if (value.type === 'string') {
        if (key in VAR) {
            return VAR[key];
        }
        return `VAR.${key}`;
    } else if (value.type === 'array') {
        if (value.items) {

            return [generateValueFromSchema(value.items, `${key}_item`)];
        }
        return [];
    } else if (value.type === 'object' && value.properties) {
        const obj: Record<string, any> = {};
        for (const [propKey, propValue] of Object.entries(value.properties) as [string, any][]) {
            if (value.required?.includes(propKey) || value.anyOf?.includes(propKey)) {
                obj[propKey] = generateValueFromSchema(propValue, propKey);
            } else {
                obj[propKey] = undefined;
            }
        }
        return obj;
    } else if (value.enum) {
        return value.enum[0];
    } else {
        return null;
    }
}

export function createBodyFromSwaggerJson(requestName: string): Record<string, any> {
    const schema = findInterface(requestName);
    const body: Record<string, any> = {};

    for (const [key, value] of Object.entries(schema.properties) as [string, any][]) {
        if (schema.required?.includes(key) || schema.anyOf?.includes(key)) {
            body[key] = generateValueFromSchema(value, key);
        } else {
            body[key] = undefined;
        }
    }

    return body;
}

export async function generateRequestTestSuite(
    requestName: string,
    dtoName: any,
    cluster: string,
    options: TestOptions = {},
    headers: any = {}
): Promise<RequestTestSuite> {
    const body = createBodyFromSwaggerJson(requestName);

    const beforeAll = options.beforeAll || [];
    const updatedBeforeAll = [...beforeAll];
    return {
        action: `ACTION.${requestName.toUpperCase().replace(/-/g, '_')}`,
        dtoName,
        cluster,
        headers: {
            'x-session-token': headers.token
        },
        body,
        options: [{
            beforeAll: updatedBeforeAll || [],
            beforeEach: options.beforeEach || [],
            afterEach: options.afterEach || [],
            afterAll: options.afterAll || [],
        }],
    };
}

export function generateTrainingDataFromSwagger(swaggerJson: any): any[] {
    const trainingData: any[] = [];

    // Lấy danh sách các schema từ swagger
    const schemas = swaggerJson.components?.schemas || {};

    Object.entries(schemas).forEach(([schemaName, schema]: [string, any]) => {
        // Chỉ xử lý các schema có chứa userId
        if (schema.properties?.userId) {
            const action = schemaName
                .replace('V3', '')
                .replace('Request', '')
                .toUpperCase();

            // Tự động tạo context clues từ tên schema
            const contextClues = [
                ...schemaName.toLowerCase().split(/_|(?=[A-Z])/),
                ...(schema.properties.userId.description || '').toLowerCase().split(/\s+/)
            ].filter(Boolean);

            // Xác định userIdMeaning dựa trên mô tả
            let userIdMeaning = 'unknown';
            const desc = schema.properties.userId.description.toLowerCase();

            if (desc.includes('sender') || desc.includes('who sent')) {
                userIdMeaning = 'sender';
            } else if (desc.includes('receiver') || desc.includes('recipient')) {
                userIdMeaning = 'receiver';
            } else if (desc.includes('target')) {
                userIdMeaning = 'target';
            }

            trainingData.push({
                action,
                schemaId: schemaName,
                swaggerDesc: schema.description || '',
                contextClues: [...new Set(contextClues)], // Remove duplicates
                userIdMeaning,
                httpMethod: 'POST', // Có thể lấy từ paths nếu cần
                apiEndpoint: guessEndpointFromSchema(schemaName) // Hàm phụ trợ
            });
        }
    });

    return trainingData;
}

// Hàm phụ trợ đoán endpoint từ tên schema
function guessEndpointFromSchema(schemaName: string): string {
    return '/' + schemaName
        .replace('V3', '')
        .replace('Request', '')
        .replace(/([A-Z])/g, '/$1')
        .toLowerCase();
}