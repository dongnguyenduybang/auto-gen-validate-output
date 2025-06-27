import * as path from 'path';
import * as fs from 'fs';
import 'reflect-metadata';
import {
  ActionHandler,
  IContext,
  responseClassMap,
  StepResult,
  ValidationError,
} from './declarations';
import { TestContext } from './text-context';
import emojiRegex from 'emoji-regex';
import { ACTION_CONFIG, VAR } from '../enums';
import { getApiFunctions } from '../functions/api-registry';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { validateResponses } from '../validates/validate-response';
import { BaseResponse } from '../response';

export function pairFiles(
  files: string[],
): { dtoPath: string; requestPath: string; className: string, folderPath: any }[] {
  const fileMap: Record<string, { dtoPath?: string; requestPath?: string }> =
    {};
  files.forEach((filePath) => {
    const fileName = path.basename(filePath, path.extname(filePath));
    if (filePath.endsWith('.dto.ts') || filePath.endsWith('.dto.js')) {
      const className = fileName.replace('.dto', '');
      fileMap[className] = fileMap[className] || {};
      fileMap[className].dtoPath = filePath;
    } else if (filePath.endsWith('.request.ts')) {
      const className = fileName.replace('.request', '');
      fileMap[className] = fileMap[className] || {};
      fileMap[className].requestPath = filePath;
    }
  });
  return Object.entries(fileMap).map(
    ([className, { dtoPath, requestPath }]) => ({
      dtoPath,
      requestPath,
      className,
      folderPath: dtoPath ? path.dirname(dtoPath) : path.dirname(requestPath)
    }),
  );
}

export function summaryFields(
  expectJson: string[],
  receivedResponse: string[],
): { missing: string[]; extra: string[] } {
  const missing = expectJson.filter(
    (field) => !receivedResponse.includes(field),
  ); // co trong expect gen nhung k co tren api
  const extra = receivedResponse.filter((field) => !expectJson.includes(field)); //co tren api nhung k co tren expect gen
  return { missing, extra };
}

export function readJsonFile(filePath: string): any {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export function summarizeErrors(
  failedTests?: any[],
  codedTest?: any[],
  passed200?: number,
  passed201?: number,
) {
  const summary = {
    statusCodes: {
      201: passed201,
      200: passed200,
      400: 0,
      500: 0,
      403: 0,
      404: 0,
    },
    uniqueErrors: new Map<string, number>(),
  };

  if (failedTests) {
    failedTests.forEach((failCase) => {
      const statusCode = failCase.code || 500;
      if (summary.statusCodes.hasOwnProperty(statusCode)) {
        summary.statusCodes[statusCode]++;
      }
      if (failCase.missing && Array.isArray(failCase.missing)) {
        failCase.missing.forEach((error) => {
          summary.uniqueErrors.set(
            error,
            (summary.uniqueErrors.get(error) || 0) + 1,
          );
        });
      }

      if (failCase.extra && Array.isArray(failCase.extra)) {
        failCase.extra.forEach((error) => {
          summary.uniqueErrors.set(
            error,
            (summary.uniqueErrors.get(error) || 0) + 1,
          );
        });
      }
      if (failCase.errorDetails) {
        const detailErrors = Array.isArray(failCase.errorDetails)
          ? failCase.errorDetails
          : [failCase.errorDetails];
        detailErrors.forEach((error) => {
          summary.uniqueErrors.set(
            error,
            (summary.uniqueErrors.get(error) || 0) + 1,
          );
        });
      }
    });
  } else {
    return;
  }

  if (codedTest) {
    codedTest.forEach((code) => {
      const statusCode = code.code || 500;
      summary.statusCodes[statusCode] =
        (summary.statusCodes[statusCode] || 0) + 1;
    });
  } else {
    return;
  }

  return summary;
}

export function getAllFiles(dirPath: string): string[] {
  let files: string[] = [];
  const items = fs.readdirSync(dirPath);
  items.forEach((item) => {
    const itemPath = path.join(dirPath, item);
    if (fs.statSync(itemPath).isDirectory()) {
      files = files.concat(getAllFiles(itemPath));
    } else {
      files.push(itemPath);
    }
  });

  return files;
}

export function getMatchedFilePaths(
  foundFolders: Array<{
    path: string;
    dtoFiles: string[];
    requestFiles: string[];
  }>,
): string[] {
  const result: string[] = [];

  for (const folder of foundFolders) {
    // Thêm đường dẫn đầy đủ cho các file .dto.ts
    folder.dtoFiles.forEach((file) => {
      result.push(path.join(folder.path, file));
    });

    // Thêm đường dẫn đầy đủ cho các file .request.ts
    folder.requestFiles.forEach((file) => {
      result.push(path.join(folder.path, file));
    });
  }

  return result;
}

export function getResponseFile(dirPath: string): string | string {
  try {
    const files = fs.readdirSync(dirPath);
    const responseFile = files.find((file) => file.endsWith('.response.ts'));
    return responseFile ? path.join(dirPath, responseFile) : null;
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
    return null;
  }
}

export function groupFilesByName(
  files: string[],
): Record<string, { dtoPath?: string; requestPath?: string }> {
  const fileMap: Record<string, { dtoPath?: string; requestPath?: string }> =
    {};
  files.forEach((filePath) => {
    const fileName = path.basename(filePath, path.extname(filePath));
    if (filePath.endsWith('.dto.ts')) {
      const className = fileName.replace('.dto', '');
      fileMap[className] = fileMap[className] || {};
      fileMap[className].dtoPath = filePath;
    } else if (filePath.endsWith('.request.ts')) {
      const className = fileName.replace('.request', '');
      fileMap[className] = fileMap[className] || {};
      fileMap[className].requestPath = filePath;
    }
  });
  return fileMap;
}

export function getTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const formattedDate = `${hours}-${minutes}-${day}-${month}-${year}`;
  return formattedDate;
}

export function resolveValidIf(
  field,
  validIfMetadata: {
    conditions: { field: string; operator: string; value: string };
  },
  valueResponse: any,
  obj: any,
  payload: any,
  context,
): { isValid: boolean; errorMessage?: string } {
  const {
    field: condition,
    operator,
    value: condition2,
  } = validIfMetadata.conditions;

  const value1 = obj[condition];
  if (value1 === undefined) {
    return {
      isValid: false,
      errorMessage: `${field}: Condition '${condition}' not found in response object.`,
    };
  }

  // Resolve value2 từ condition2
  let value2: any;
  if (condition2.startsWith('response.')) {
    value2 = obj[condition2.slice(9)];
  } else if (condition2.startsWith('payload.')) {
    value2 = payload[condition2.slice(8)];
  } else if (condition2.startsWith('{{')) {
    value2 = resolveVariables(condition2, context);
  } else {
    value2 = condition2;
  }

  // So sánh sau khi chuẩn hóa kiểu chuỗi
  const v1 = String(value1).trim();
  const v2 = String(value2).trim();

  const ops: Record<string, boolean> = {
    '>': v1 > v2,
    '<': v1 < v2,
    '===': v1 === v2,
    '!==': v1 !== v2,
    '>=': v1 >= v2,
    '<=': v1 <= v2,
  };

  const isValid = ops[operator];

  if (isValid === undefined) {
    return {
      isValid: false,
      errorMessage: `${operator}: Unsupported operator.`,
    };
  }

  if (!isValid) {
    return {
      isValid: false,
      errorMessage: `${field}: ${condition} must ${operator} ${v2} (actual: ${v1}, expected: ${v2})`,
    };
  }

  return { isValid: true };
}

export const formatExpectErrors = (expects) => {
  return JSON.stringify(expects)
    .replace(/'/g, "\\'")
    .replace(/\\"/g, '"')
    .replace(/\s*,\s*/g, ',')
    .trim();
};

export function checkRegexULID(value: string): boolean {
  const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
  return typeof value === 'string' && ulidRegex.test(value);
}

export function isEmoji(str: string): boolean {
  const cleaned = str.replace(/\s/g, ''); // Xoá tất cả khoảng trắng
  // lib check emoji https://github.com/mathiasbynens/emoji-regex
  const regex = emojiRegex();
  return regex.test(cleaned);
}
export function resolveVariables(obj: any, context: TestContext): any {
  if (typeof obj === 'string') {
    return obj.replace(
      /\{\{(.+?)\}\}/g,
      (_, path) => context.getValue(path.split('.')) ?? `{{${path}}}`,
    );
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => resolveVariables(item, context));
  }
  if (typeof obj === 'object' && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, resolveVariables(v, context)]),
    );
  }
  return obj;
}

export function resolveExpectConfig(
  expectConfig: any,
  context: TestContext,
): any {
  if (typeof expectConfig === 'string') {
    return resolveVariables(expectConfig, context);
  }
  if (Array.isArray(expectConfig)) {
    return expectConfig.map((item) => resolveExpectConfig(item, context));
  }
  if (typeof expectConfig === 'object' && expectConfig !== null) {
    if (expectConfig.operator && expectConfig.expect) {
      return {
        ...expectConfig,
        expect: resolveExpectConfig(expectConfig.expect, context),
      };
    }
    return Object.fromEntries(
      Object.entries(expectConfig).map(([k, v]) => [
        k,
        resolveExpectConfig(v, context),
      ]),
    );
  }
  return expectConfig;
}
export function formatErrors(errors: ValidationError[]): any {
  if (!Array.isArray(errors)) return { message: 'No error details available' };

  const formattedErrors = errors
    .filter((e) => e !== undefined && e !== null)
    .map((e) => ({
      path: e.path?.toString() || 'unknown_path',
      expected: e.expected?.toString() || 'no_expected_value',
      actual:
        e.actual !== undefined
          ? typeof e.actual === 'object'
            ? JSON.stringify(e.actual)
            : e.actual.toString()
          : 'no_actual_value',
      message: e.message || 'No message',
    }));

  return formattedErrors.length === 1 ? formattedErrors[0] : formattedErrors;
}

export async function resolveCallAPI(
  action: string,
  header: any,
  body: any,
  context,
) {
  const actionInfo = ACTION_CONFIG[action as keyof typeof ACTION_CONFIG];
  const resolveBody = resolveVariables(body, context);
  const resolveHeader = resolveVariables(header, context);
  const apiFunction = getApiFunctions(action, context);

  const response = await apiFunction({
    method: actionInfo.method,
    path: actionInfo.path,
    headers: resolveHeader,
    body: resolveBody,
  });

  return response;
}

export function resolveActionPath(action: string) {
  const actionInfo = ACTION_CONFIG[action as keyof typeof ACTION_CONFIG];

  return actionInfo.path;
}

export function comparedValue(a: any, b: any, context: IContext): boolean {
  if (typeof b === 'string' && b.startsWith('{{')) {
    const path = b.replace(/[{}]/g, '').split('.');
    b = context.getValue(path);
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return (
      a.length === b.length &&
      a.every((item, i) => String(item).trim() === String(b[i]).trim())
    );
  }
  return String(a).trim() === String(b).trim();
}

export function getNestedValue(obj: any, pathStr: string): any[] {
  const parts = pathStr.split('.');
  let current = Array.isArray(obj) ? obj.flat(Infinity) : [obj];

  for (const part of parts) {
    current = current.flatMap((item) => {
      if (item === undefined || item === null) return [];
      if (Array.isArray(item)) {
        return item.flatMap((i) => {
          const val = i?.[part];
          return val !== undefined
            ? Array.isArray(val)
              ? val.flat(Infinity)
              : [val]
            : [];
        });
      }
      const val = item[part];
      return val !== undefined
        ? Array.isArray(val)
          ? val.flat(Infinity)
          : [val]
        : [];
    });
  }

  return current
    .flat(Infinity)
    .filter((val) => val !== undefined && val !== null);
}

export function resolveValue(value: any, context): any {
  if (typeof value === 'string') {
    return value.replace(/\{\{(.+?)\}\}/g, (_, path) => {
      const pathArray = path.split('.');
      const resolved = context.getValue(pathArray);
      return resolved ?? `{{${path}}}`;
    });
  }
  if (Array.isArray(value)) {
    return value.map((item) => resolveValue(item, context));
  }
  if (typeof value === 'object' && value !== null) {
    return Object.fromEntries(
      Object.entries(value).map(([key, val]) => [
        key,
        resolveValue(val, context),
      ]),
    );
  }
  return value;
}

export function isOperatorObject(obj: object): boolean {
  return obj && typeof obj === 'object' && 'operator' in obj && 'expect' in obj;
}

export function delay(delayTime: number): Promise<number> {
  const ms = typeof delayTime === 'number' && delayTime >= 0 ? delayTime : 0;
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function checkResponse(
  step,
  response: object,
  resolveBody: object,
  context: TestContext,
): Promise<StepResult> {
  const stepName =
    step.action.charAt(0).toUpperCase() + step.action.slice(1) + 'Response';
  const responseClass =
    responseClassMap[stepName as keyof typeof responseClassMap];
  const validateResponse = plainToClass(
    responseClass as ClassConstructor<BaseResponse>,
    response,
  );
  const result = await validateResponses(
    resolveBody,
    validateResponse,
    context,
  );
  if (result.length > 0) {
    return {
      type: 'response',
      status: false,
      stepName: step.action,
      error: JSON.stringify(result, null, 2),
    };
  } else {
    return {
      type: 'response',
      status: true,
      stepName: step.action,
      error: null,
    };
  }
}

export function checkURL(value: string): boolean {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

  if (value === VAR.invitationLink || typeof value !== 'string') return true;
  return urlRegex.test(value);
}

export function countEmojis(str: unknown): number {
  if (typeof str !== 'string') return 0;

  const regex = emojiRegex();
  return Array.from(str.matchAll(regex)).length;
}

export function findTestPath(basePath: string, dtoName: string): string[] {
  const result: string[] = [];
  const targetDir = path.join(basePath, dtoName);

  if (!fs.existsSync(targetDir)) {
    return result;
  }

  function searchDir(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        searchDir(fullPath); // Recursively search subdirectories
      } else if (entry.isFile() && entry.name.endsWith('.spec.ts')) {
        result.push(fullPath);
      }
    }
  }

  searchDir(targetDir);
  return result;
}
export function findAllFoldersWithDtoAndRequest(basePath: string) {
  const results: {
    path: string;
    dtoFiles: string[];
    requestFiles: string[];
  }[] = [];

  function scanDirectory(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    // Check current directory first
    const currentDtoFiles = entries
      .filter(e => !e.isDirectory() && e.name.endsWith('.dto.ts'))
      .map(e => e.name);

    const currentRequestFiles = entries
      .filter(e => !e.isDirectory() && e.name.endsWith('.request.ts'))
      .map(e => e.name);

    if (currentDtoFiles.length > 0 && currentRequestFiles.length > 0) {
      results.push({
        path: dir,
        dtoFiles: currentDtoFiles,
        requestFiles: currentRequestFiles,
      });
    }

    // Then scan subdirectories
    entries
      .filter(e => e.isDirectory())
      .forEach(e => {
        scanDirectory(path.join(dir, e.name));
      });
  }

  scanDirectory(basePath);
  results.forEach(r => console.log(`- ${r.path}`));
  return results;
}
export const getFilesSwagger = (dirPath: string): string[] => {
  let jsonFiles: string[] = [];

  // Read directory contents
  const filesAndDirs = fs.readdirSync(dirPath);

  for (const item of filesAndDirs) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      jsonFiles = jsonFiles.concat(getAllFiles(fullPath));
    } else if (stat.isFile() && fullPath.endsWith('.json')) {
      jsonFiles.push(fullPath);
    }
  }

  return jsonFiles;
};

export function findAllDtoDirectories(parentDir: string): string[] {
  console.log(parentDir)
  const fullPath = path.join(__dirname, '..', 'test-requests', parentDir);
  const result: string[] = [];

  function scanDirectory(currentPath: string, relativePath: string = '') {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    const hasDtoFile = entries.some(
      entry => entry.isFile() &&
        (entry.name.endsWith('.dto.ts') || entry.name.endsWith('.request.ts'))
    );

    if (hasDtoFile) {
      const dtoName = entries.find(
        e => e.isFile() && (e.name.endsWith('.dto.ts') || e.name.endsWith('.request.ts'))
      )?.name.replace(/\.(dto|request)\.ts$/, '');

      if (dtoName) {
        result.push(dtoName);
      }
    }

    for (const entry of entries) {
      if (entry.isDirectory()) {
        scanDirectory(
          path.join(currentPath, entry.name),
          path.join(relativePath, entry.name)
        );
      }
    }
  }

  scanDirectory(fullPath);
  return result;
}


export async function handleBulkAction(basePath: string, handlers: ActionHandler[]) {
  const fullPath = path.join(__dirname, basePath);
  console.log(`Processing bulk action in directory: ${fullPath}`);

  if (handlers[0].name.includes('clearFiles')) {
    console.log(`Initiating recursive clear of all .spec.ts files in: ${fullPath}`);
    await clearAllFilesRecursively(fullPath);
    console.log(`Completed recursive clear in: ${fullPath}`);
    return;
  }

  const directories = getSubDirectories(fullPath).filter(
    (dir) => !dir.includes('reports'),
  );

  console.log(`Found ${directories.length} DTO directories:`, directories);

  for (const dir of directories) {
    console.log(`Processing DTO: ${dir}`);
    for (const handler of handlers) {
      try {
        console.log(`Executing handler for ${dir} with function: ${handler.name || 'anonymous'}`);
        await handler(dir);
        console.log(`Successfully processed ${dir} with handler: ${handler.name || 'anonymous'}`);
      } catch (error) {
        console.error(`Error processing ${dir} with handler: ${error.message}`, error.stack);
      }
    }
  }
}

export function getSubDirectories(dirPath: string): string[] {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter(
      (dirent) =>
        dirent.isDirectory() && !dirent.name.toLowerCase().includes('report'), // Loại bỏ thư mục report
    )
    .map((dirent) => dirent.name);
}

export function clearFiles(testType: string): ActionHandler {
  const handler = async (dtoName: string) => {
    const baseDir = path.join(__dirname, '../', testType);

    if (!dtoName) {
      console.log(`🧹 Clearing all files in ${baseDir}`);
      await clearAllFilesRecursively(baseDir);
      return;
    }

    const targetDir = path.join(baseDir, dtoName);
    if (!fs.existsSync(targetDir)) {
      console.error(`❌ Directory not found: ${targetDir}`);
      return;
    }

    console.log(`🧹 Cleaning files in ${targetDir}`);
    await clearAllFilesRecursively(targetDir);
  };

  Object.defineProperty(handler, 'name', {
    value: `clearFiles_${testType}`,
    writable: false
  });

  return handler;
}

export function clearAllFilesRecursively(dir: string) {
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    return;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      clearAllFilesRecursively(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.spec.ts')) {
      try {
        fs.unlinkSync(fullPath);
        console.log(`🗑️ Deleted: ${fullPath}`);
      } catch (error) {
        console.error(`Failed to delete ${fullPath}: ${error.message}`);
      }
    }
  });
}

export function clearReports(reportType: string): ActionHandler {
  return async (dtoName: string) => {
    const targetDir = path.join(__dirname, reportType, dtoName);
    if (!fs.existsSync(targetDir)) {
      console.error(`Report directory not found: ${targetDir}`);
      return;
    }

    fs.readdirSync(targetDir)
      .filter((file) => file.endsWith('.txt'))
      .forEach((file) => {
        const filePath = path.join(targetDir, file);
        fs.unlinkSync(filePath);
        console.log(`Deleted: ${filePath}`);
      });
  };
}

export function getSubDirectoriesRecursive(dirPath: string, prefix: string = ''): { name: string, value: string }[] {
  const result: { name: string, value: string }[] = [];
  if (!fs.existsSync(dirPath)) {
    return result;
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.toLowerCase().includes('report')) {
      const fullPath = path.join(dirPath, entry.name);
      const displayName = prefix ? `${prefix}/${entry.name}` : entry.name;
      result.push({ name: displayName, value: displayName });

      const subDirs = getSubDirectoriesRecursive(fullPath, displayName);
      result.push(...subDirs);
    }
  }

  return result;
}

export function getDtoNamesFromSwagger(swaggerFilePath: string): { original: string; transformed: string }[] {
  try {
    const swaggerContent = fs.readFileSync(swaggerFilePath, 'utf8');
    const swaggerJson = JSON.parse(swaggerContent);
    console.log(swaggerJson)
    // Extract DTO names from components.schemas
    const schemas = swaggerJson.components?.schemas || {};
    const dtoNames = Object.keys(schemas)
      // Filter out non-request schemas (e.g., enums)
      .filter(name => schemas[name].type === 'object' && name.toLowerCase().includes('request'))
      .map(name => ({
        original: name,
        // Transform to kebab-case (e.g., V3CreateChannelRequest -> v3-create-channel-request)
        transformed: name
          .replace(/^V3/, 'v3-') // Handle V3 prefix
          .replace(/([A-Z])/g, '-$1') // Add hyphens before capital letters
          .toLowerCase()
          .replace(/^-+/, '') // Remove leading hyphens
      }));

    return dtoNames;
  } catch (err) {
    console.error('Error reading or parsing Swagger JSON:', err.message);
    return [];
  }
}

function transformDtoName(dtoName) {
  const words = dtoName.split('-');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()); // Capitalize each word
  return `V3${capitalizedWords.join('')}Request`;
}

export function transformPropertyName(dataDTO: object): string[] {

  const schemaPath = path.join(__dirname, '../swagger/schemas.json')
  const fileContent = fs.readFileSync(schemaPath, 'utf-8');
  const schema = JSON.parse(fileContent);
  if (!dataDTO || typeof dataDTO !== 'object') return [];

  const dto = dataDTO as any;

  if (!dto.properties || typeof dto.properties !== 'object') return [];

  const requiredFields = Array.isArray(dto.required) ? dto.required : [];

  return Object.entries(dto.properties).map(([key, value]: [string, any]) => {
    let typeDesc = '';
    let isRequired = requiredFields.includes(key);

    if (value.type) {
      typeDesc = value.type;
    } else if (value.$ref) {
      const refName = value.$ref.replace('#/components/schemas/', '');
      const refSchema = schema?.[refName];

      if (refSchema?.enum && Array.isArray(refSchema['x-enum-varnames'])) {
        // Gộp enum value + tên biến
        const enums = refSchema.enum
          .map((val: number | string, idx: number) => {
            const name = refSchema['x-enum-varnames']?.[idx] ?? `UNKNOWN_${val}`;
            return `${val}: ${name}`;
          })
          .join(', ');

        typeDesc = `enum: ${refName} - [${enums}]`;
      } else {
        typeDesc = `ref: ${refName}`;
      }
    } else {
      typeDesc = 'unknown';
    }

    return `${key} (${typeDesc}${isRequired ? '' : ', optional'})`;
  });
}


export function validateDtoName(dtoName) {
  const schemaPath = path.join(__dirname, '../swagger/schemas.json')
  const fileContent = fs.readFileSync(schemaPath, 'utf-8');
  const schema = JSON.parse(fileContent);
  const transformedName = transformDtoName(dtoName);

  if (schema[transformedName]) {
    return {
      status: true, data: schema[transformedName]
    }
  } else {
    return { status: false, data: `DTO name '${transformedName}' not found in schema.` }
  }


}