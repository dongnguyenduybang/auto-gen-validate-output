import * as path from 'path';
import * as fs from 'fs';
import 'reflect-metadata';

import { getMetadataStorage } from 'class-validator';
import { ValidationRule } from './structures/responses';
import axios from 'axios';
import { resolveVariables } from './get-resolve-variables';

function getFileNameWithoutExtension(filePath: string): string {
  const fileName = path.basename(filePath);
  return fileName.split('.')[0];
}

export function pairFiles(
  requestsDir: string,
  payloadsDir: string,
): { requestConfig: string; payload: string; name: string }[] {
  const requestFiles = fs.readdirSync(requestsDir);
  const payloadFiles = fs.readdirSync(payloadsDir);

  const pairedFiles: {
    requestConfig: string;
    payload: string;
    name: string;
  }[] = [];

  for (const requestFile of requestFiles) {
    const requestFileName = getFileNameWithoutExtension(requestFile);

    for (const payloadFile of payloadFiles) {
      const payloadFileName = getFileNameWithoutExtension(payloadFile);

      if (requestFileName === payloadFileName) {
        pairedFiles.push({
          name: requestFileName,
          requestConfig: path.join(requestsDir, requestFile),
          payload: path.join(payloadsDir, payloadFile),
        });
      }
    }
  }

  return pairedFiles;
}

export function getValidationFromDTOResponse(dtoClass: any): ValidationRule[] {
  const rulesPush: Record<string, Partial<ValidationRule>> = {};
  const metadataStorage = getMetadataStorage();
  const validationMetadatas = metadataStorage.getTargetValidationMetadatas(
    dtoClass,
    '',
    false,
    false,
  );

  for (const metadata of validationMetadatas) {
    const field = metadata.propertyName;

    if (!rulesPush[field]) {
      rulesPush[field] = { field };
    }

    const rule = rulesPush[field];

    if (metadata.name === 'isString') {
      rule.type = 'string';
    } else if (metadata.name === 'isNumber') {
      rule.type = 'number';
    } else if (metadata.name === 'isBoolean') {
      rule.type = 'boolean';
    } else if (metadata.name === 'isArray') {
      rule.type = 'array';
    } else if (metadata.name === 'isObject') {
      rule.type = 'object';
    }

    if (metadata.type === 'isDefined' || metadata.type === 'isNotEmpty') {
      rule.required = true;
    }

    if (metadata.constraints && metadata.constraints.length > 0) {
      metadata.constraints.forEach((constraint: any) => {
        if (typeof constraint === 'number') {
          if (metadata.name === 'min') {
            rule.min = constraint;
          } else if (metadata.name === 'max') {
            rule.max = constraint;
          }
        } else if (typeof constraint === 'string') {
        }
      });
    }

    if (metadata.type === 'customValidation') {
      if (metadata.name === 'minLength') {
        rule.minLength = metadata.constraints[0];
      } else if (metadata.name === 'maxLength') {
        rule.maxLength = metadata.constraints[0];
      } else if (metadata.name === 'arrayMinSize') {
        rule.minArray = metadata.constraints[0];
      } else if (metadata.name === 'arrayMaxSize') {
        rule.maxArray = metadata.constraints[0];
      } else if (metadata.name === 'minDate') {
        rule.minDate =
          typeof metadata.constraints[0] === 'function'
            ? metadata.constraints[0]()
            : metadata.constraints[0];
      } else if (metadata.name === 'maxDate') {
        rule.maxDate =
          typeof metadata.constraints[0] === 'function'
            ? metadata.constraints[0]()
            : metadata.constraints[0];
      }
    }
  }
  Object.keys(rulesPush).forEach((field) => {
    const rule = rulesPush[field];
    if (rule.required === undefined) {
      rule.optional = true;
    }
  });

  return Object.values(rulesPush) as ValidationRule[];
}

export function getLength(value) {
  if (value === null || value === undefined || value === '') {
    return 0;
  }
  return value.length;
}

export function replaceClassName(input: string): any {
  const cleanedInput = input.replace(/DTO$/, '');

  const cleanedClassname = cleanedInput
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
  return { text: cleanedInput, text2: cleanedClassname };
}

export const getMockUser = async () => {
  if (!globalThis.url) {
    throw new Error('globalThis.url is not defined...');
  }
  try {
    const baseUrl = `${globalThis.url}/InternalFaker/MockUsers`;
    const payload = { prefix: 'fakedata', quantity: 1, badge: 0 };
    console.log(baseUrl);
    const response = await axios.post(baseUrl, payload);

    if (
      response.data &&
      Array.isArray(response.data.data) &&
      response.data.data.length > 0
    ) {
      const getUser = response.data.data[0];
      return {
        getUser,
      };
    } else {
      throw new Error('Invalid response from MockUsers API');
    }
  } catch (error) {
    console.error('Error in getMockUser:', error);

    throw new Error('Failed to get getMockUser');
  }
};

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

export function countTokens(): number {
  let count = 0;
  for (const [key] of globalThis.globalVar.entries()) {
    if (key.startsWith('token')) {
      count++;
    }
  }
  return count;
}

export function summarizeErrors(
  failedTests: any[],
  totalTests: number,
  passedLogic: number,
  passed200 : number
) {
  const summary = {
    statusCodes: { 201: passedLogic, 200: passed200, 400: 0, 500: 0, 403: 0, 404: 0 },
    uniqueErrors: new Map<string, number>(),
  };

  failedTests.forEach((failCase) => {
    const statusCode = failCase.code || 500;
    summary.statusCodes[statusCode] =
      (summary.statusCodes[statusCode] || 0) + 1;

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

  return summary;
}

export function getValueByRecursion(obj: any, path: string): any {
  if (!obj || typeof obj !== 'object') return undefined;
  const keys = path.split('.');
  let current = obj;
  for (const key of keys) {
    if (current && current[key] !== undefined) {
      current = current[key];
    } else {
      return undefined;
    }
  }
  return current;
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
    } else if (filePath.endsWith('.request.json')) {
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
  const formattedDate = `${hours}${minutes}-${day}${month}${year}`;
  return formattedDate
}

export function resolveDeep(input: any): any {
  // Nếu là array, resolve từng phần tử
  if (Array.isArray(input)) {
    return input.map((item) => resolveDeep(item));
  }

  // Nếu là object, resolve từng thuộc tính
  if (typeof input === 'object' && input !== null) {
    const resolvedObject: { [key: string]: any } = {};
    for (const key in input) {
      if (input.hasOwnProperty(key)) {
        resolvedObject[key] = resolveDeep(input[key]);
      }
    }
    return resolvedObject;
  }

  // Nếu là string, resolve placeholder
  if (typeof input === 'string') {
    return resolveVariables(input);
  }

  // Trường hợp còn lại (number, boolean, null, undefined), trả về nguyên trạng
  return input;
}