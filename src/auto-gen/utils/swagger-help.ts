import * as path from 'path';
import * as fs from 'fs';
import { generateErrorCases } from './dto-helper-v2';
import {
    findAllFoldersWithDtoAndRequest,
    getMatchedFilePaths,
    groupFilesByName,
} from './helper';
import schemas from '../swagger-hono/schemas.json';
import { RequestTestSuite, Step } from './declarations';
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
    (dto: string, options?: any): Promise<RequestTestSuite>;
}

const requestGeneratorInterface: RequestGenerator[] = [
    (dto, options) => generateRequestTestSuite(dto, options ? parseOptions(options) : {})
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

// Hàm phụ để tạo giá trị từ schema (hỗ trợ đệ quy)
function generateValueFromSchema(value: any, key: string): any {
    console.log(value)
    if (value.type === 'string') {
        if (key in VAR) {
            return VAR[key];
        }
        return `VAR.${key}`;
    } else if (value.type === 'array') {
        if (value.items) {
            // Tạo ít nhất 1 phần tử cho mảng
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

function createBodyFromInterface(requestName: string): Record<string, any> {
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

export async function generateRequestTestSuite(requestName: string, options: TestOptions = {}): Promise<RequestTestSuite> {

    const body = createBodyFromInterface(requestName);

    const beforeAll = options.beforeAll || [];
    const updatedBeforeAll = [...beforeAll];

    return {
        action: `ACTION.${requestName.toUpperCase().replace(/-/g, '_')}`,
        headers: {'x-session-token': 'aaaaaaaaaaaaaa'},
        body,
        options: [{
            beforeAll: updatedBeforeAll || [],
            beforeEach: options.beforeEach || [],
            afterEach: options.afterEach || [],
            afterAll: options.afterAll || [],
        }],
    };
}

export async function genBodyRequests( dtoName: string, cluster: string,options?: any) {
    console.log(cluster, dtoName, options)
    const baseRequestsPath = path.join(__dirname, '../test-requests');
    const foundFolders = findAllFoldersWithDtoAndRequest(baseRequestsPath, dtoName);

    for (const folder of foundFolders) {
        const outputDir = folder.path;

        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const file = getMatchedFilePaths(foundFolders);
        const fileMap = groupFilesByName(file);

        for (const [className, { dtoPath }] of Object.entries(fileMap)) {
            if (!dtoPath) {
                console.warn(`Missing .dto file for class: ${className}`);
                continue;
            }

            try {
                const dtoModule = require(dtoPath);
                const classNameCapitalized =
                    className
                        .split('-')
                        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                        .join('') + 'DTO';

                const dtoClass = dtoModule[classNameCapitalized];

                if (
                    typeof dtoClass !== 'function' ||
                    !/^\s*class\s/.test(dtoClass.toString())
                ) {
                    console.error(`Invalid DTO class in file: ${dtoPath}`);
                    continue;
                }

                // Sử dụng interface để tạo RequestTestSuite
                const [generator] = requestGeneratorInterface;
                const requestData = await generator(className, options);

                const payload = requestData.body;
                const result = await generateErrorCases(dtoClass, payload);
                const testCasePayload = result.map(({ body, expects }) => ({
                    body,
                    expects,
                }));

                const outputFilePath = path.join(
                    outputDir,
                    `${className}.payload.json`,
                );
                fs.writeFileSync(
                    outputFilePath,
                    JSON.stringify(testCasePayload, null, 4),
                    'utf-8',
                );
                console.log(`✅ Success: ${outputFilePath}`);
            } catch (error) {
                console.error(`❌ Error processing class: ${className}`, error);
            }
        }
    }
}