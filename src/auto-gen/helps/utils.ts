/* eslint-disable @typescript-eslint/no-unused-vars */
import * as path from 'path';
import * as fs from 'fs';
import 'reflect-metadata';
import { AttachmentTypeEnum } from '../enums/attachment-type.enum';
import { TestContext } from '../test-execute-step/text-context';
import { resolveVariable } from './get-resolve-variables';
import { StepConfig } from '../decorator/request-decorator';
import { SendMessageResponse } from '../response/send-message.response';
import { extractMessageData } from '../test-execute-step/test-executor';

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

export function formatErrors(stepLog: { Error: any[] }): string {
  let formattedOutput = '';

  stepLog.Error.forEach((log) => {
    if (!log.success && log.error) {
      // Loại bỏ dấu \ trong chuỗi lỗi
      const errorString = log.error.replace(/\\/g, '');

      // Tách lỗi thành nhiều dòng
      const errors = errorString.split(/(?=[A-Z][a-z]+ mismatch)/); // Tách theo từ khóa "Mismatch"
      const formattedErrors = errors.join('\n'); // Thêm xuống dòng giữa các lỗi

      // Thêm vào kết quả cuối cùng
      formattedOutput += `Function: ${log.functionName}\nErrors:\n${formattedErrors}\n\n`;
    }
  });

  return formattedOutput;
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
  failedTests?: any[],
  totalTests?: number,
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

export function getAllFiles(dirPath: string): string[] {
  let files: string[] = [];
  const items = fs.readdirSync(dirPath);
  console.log(items)
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
  const formattedDate = `${hours}-${minutes}-${day}-${month}-${year}`;
  return formattedDate;
}

function dmsToDecimal(degrees, minutes, seconds) {
  return degrees + minutes / 60 + seconds / 3600;
}

export function extractCoordinates(description) {
  const regex =
    /([0-9]+)°([0-9]+)′([0-9.]+)″[NS]\s([0-9]+)°([0-9]+)′([0-9.]+)″[EW]/;
  const match = description.match(regex);

  if (match) {
    const latitude = dmsToDecimal(
      parseInt(match[1]),
      parseInt(match[2]),
      parseFloat(match[3]),
    );
    const longitude = dmsToDecimal(
      parseInt(match[4]),
      parseInt(match[5]),
      parseFloat(match[6]),
    );
    return { latitude, longitude };
  }
  return null;
}

export function resolveValidIf(
  field,
  validIfMetadata: { condition: string; operators: string; condition2: string },
  valueResponse: any,
  obj: any,
  payload: any,
): { isValid: boolean; errorMessage?: string } {
  const { condition, operators, condition2 } = validIfMetadata;
  // Lấy giá trị của condition1
  let value1: any;
  if (obj.hasOwnProperty(condition)) {
    value1 = obj[condition]; // Lấy từ response nếu tồn tại
  }

  // Lấy giá trị của condition2
  let value2: any;
  if (condition2.startsWith('response.')) {
    const key = condition2.replace('response.', '');
    value2 = obj[key]; // Lấy từ response[key]
  } else if (condition2.startsWith('payload.')) {
    const key = condition2.replace('payload.', '');
    value2 = payload[key]; // Lấy từ payload[key]
  } else {
    value2 = condition2; // Giá trị cố định
  }

  // So sánh hai giá trị dựa trên toán tử
  let isValid = false;
  switch (operators) {
    case '>':
      isValid = value1 > value2;
      break;
    case '<':
      isValid = value1 < value2;
      break;
    case '===':
      isValid = value1 === value2;
      break;
    case '!==':
      isValid = value1 !== value2;
      break;
    case '>=':
      isValid = value1 >= value2;
      break;
    case '<=':
      isValid = value1 <= value2;
      break;
    default:
      return { isValid: false, errorMessage: `${operators}: Unsupported` };
  }

  if (!isValid) {
    return {
      isValid: false,
      errorMessage: `${field}: ${condition} must ${operators} ${value2} (current value: ${value1}, expected value: ${value2})`,
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

export async function handleSendMessageResponse(
  response: SendMessageResponse,
  context: TestContext,
): Promise<boolean> {
  const messageData = extractMessageData(response);

  if (Object.keys(messageData).length === 0) {
    console.error('No message data extracted');
    return false;
  }
  context.mergeData(messageData);
  context.debug();

  return true;
}
export function toCamelCase(input: string): string {
  return input
      .split('-')
      .map((part, index) => 
          index === 0 
              ? part
              : part.charAt(0).toUpperCase() + part.slice(1) 
      )
      .join(''); 
}
export function getBodyByAction(actionName: string, actions: any): any {
  const foundAction = actions.find(item => item.action === actionName);

  if (!foundAction) {
    throw new Error(`Action '${actionName}' not found in the array.`);
  }

  return foundAction.body;
}

export function getStepByAction(action: string, steps: any[]) {
  return steps.find(step => step.action === action);
}
