import * as path from 'path';
import * as fs from 'fs';
import { generateErrorCases } from './dto-helper-v2';
import {
    findAllFoldersWithDtoAndRequest,
    getMatchedFilePaths,
    groupFilesByName,
} from './helper';
import schemas from '../swagger-hono/schemas.json';
import { GenRequestOptions, RequestHeaders, RequestTestSuite, Step } from './declarations';
import { VAR } from '../enums';

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

    const replaced = VAR.versionSwagger.replace('$', pascalCase);
    return replaced;
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

function createBodyFromSwaggerJson(requestName: string): Record<string, any> {
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


