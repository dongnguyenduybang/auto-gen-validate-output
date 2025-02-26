import * as path from 'path';
import * as fs from 'fs';
import 'reflect-metadata';

import { getMetadataStorage } from 'class-validator';
import { ValidationRule } from './structures/responses';
import axios from 'axios';

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
  console.log('read', filePath)
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

export function summarizeErrors(failedTests: any[], totalTests: number, passedLogic: number) {
  const summary = {
    statusCodes: { 201: passedLogic, 400: 0, 500: 0, 403: 0,  404: 0 }, 
    uniqueErrors: new Map<string, number>(), //map lỗi 
  };

  failedTests.forEach((failCase) => {
    const statusCode = failCase.code || 500;
    summary.statusCodes[statusCode] = (summary.statusCodes[statusCode] || 0) + 1;

    //missing error
    if (failCase.missing && Array.isArray(failCase.missing)) {
      failCase.missing.forEach((error) => {
        summary.uniqueErrors.set(error, (summary.uniqueErrors.get(error) || 0) + 1);
      });
    }

    //missing eror
    if (failCase.extra && Array.isArray(failCase.extra)) {
      failCase.extra.forEach((error) => {
        summary.uniqueErrors.set(error, (summary.uniqueErrors.get(error) || 0) + 1);
      });
    }

    //detail error
    if (failCase.errorDetails) {
      const detailErrors = Array.isArray(failCase.errorDetails)
        ? failCase.errorDetails
        : [failCase.errorDetails];
      detailErrors.forEach((error) => {
        summary.uniqueErrors.set(error, (summary.uniqueErrors.get(error) || 0) + 1);
      });
    }
  });

  return summary;
}