import * as path from 'path';
import * as fs from 'fs';
import 'reflect-metadata';
import { IContext, responseClassMap, StepResult, ValidationError } from './declarations';
import { TestContext } from './text-context';
import emojiRegex from 'emoji-regex';
import { ACTION_CONFIG } from '../enums';
import { getApiFunctions } from '../functions/api-registry';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { validateResponses } from '../validates/validate-response';
import { BaseResponse } from '../response';

function getFileNameWithoutExtension(filePath: string): string {
  const fileName = path.basename(filePath);
  return fileName.split('.')[0];
}

// function getAllFiles(dirPath: string): string[] {
//   let files: string[] = [];
//   const items = fs.readdirSync(dirPath);
//   items.forEach((item) => {
//     const itemPath = path.join(dirPath, item);
//     if (fs.statSync(itemPath).isDirectory()) {
//       files = files.concat(getAllFiles(itemPath));
//     } else {
//       files.push(itemPath);
//     }
//   });
//   return files;
// }

export function pairFiles(
  files: string[],
): { dtoPath: string; requestPath: string; className: string }[] {
  const fileMap: Record<string, { dtoPath?: string; requestPath?: string }> = {};
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
  console.log(items);
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

export function getResponseFile(dirPath: string): string{
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

// export function pairFiles(
//   files: string[],
// ): { dtoPath: string; requestPath: string; className: string }[] {
//   const fileMap: Record<string, { dtoPath?: string; requestPath?: string }> = {};
//   files.forEach((filePath) => {
//     const fileName = path.basename(filePath, path.extname(filePath));
//     if (filePath.endsWith('.dto.ts') || filePath.endsWith('.dto.js')) {
//       const className = fileName.replace('.dto', '');
//       fileMap[className] = fileMap[className] || {};
//       fileMap[className].dtoPath = filePath;
//     } else if (filePath.endsWith('.request.ts')) {
//       const className = fileName.replace('.request', '');
//       fileMap[className] = fileMap[className] || {};
//       fileMap[className].requestPath = filePath;
//     }
//   });
//   return Object.entries(fileMap).map(
//     ([className, { dtoPath, requestPath }]) => ({
//       dtoPath,
//       requestPath,
//       className,
//     }),
//   );
// }

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
  validIfMetadata: { condition: string; operator: string; condition2: string },
  valueResponse: any,
  obj: any,
  payload: any,
  context,
): { isValid: boolean; errorMessage?: string } {
  const { condition, operator, condition2 } = validIfMetadata;

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

export function resolveExpectConfig(expectConfig: any, context: TestContext): any {
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
  // <-- Thay string bằng any
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

export async function resolveCallAPI(action: string, header: any, body: any, context) {
  const actionInfo = ACTION_CONFIG[action as keyof typeof ACTION_CONFIG];
  const resolveBody = resolveVariables(body, context);
  const resolveHeader = resolveVariables(header, context);

  const apiFunction = getApiFunctions(action, context);

  const response = await apiFunction({
    method: actionInfo.method,
    path: actionInfo.path,
    headers: resolveHeader,
    body: resolveBody
  })

  return response
}

export function resolveActionPath(action: string) {
  const actionInfo = ACTION_CONFIG[action as keyof typeof ACTION_CONFIG];

  return actionInfo.path
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
};

export function getNestedValue(obj: any, pathStr: string): any[] {
  const parts = pathStr.split('.');
  let current = Array.isArray(obj) ? obj.flat(Infinity) : [obj];

  for (const part of parts) {
    current = current.flatMap((item) => {
      if (item === undefined || item === null) return [];
      if (Array.isArray(item)) {
        return item.flatMap((i) => {
          const val = i?.[part];
          return val !== undefined ? (Array.isArray(val) ? val.flat(Infinity) : [val]) : [];
        });
      }
      const val = item[part];
      return val !== undefined ? (Array.isArray(val) ? val.flat(Infinity) : [val]) : [];
    });
  }

  return current.flat(Infinity).filter((val) => val !== undefined && val !== null);
};

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
      Object.entries(value).map(([key, val]) => [key, resolveValue(val, context)]),
    );
  }
  return value;
};

export function isOperatorObject(obj: object): boolean {
  return obj && typeof obj === 'object' && 'operator' in obj && 'expect' in obj;
};

export function delay(delayTime: number): Promise<number> {
  const ms = typeof delayTime === 'number' && delayTime >= 0 ? delayTime : 0;
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export async function checkResponse(step, response: object, resolveBody: object, context: TestContext): Promise<StepResult> {
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