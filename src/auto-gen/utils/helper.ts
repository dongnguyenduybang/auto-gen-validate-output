/* eslint-disable @typescript-eslint/no-unused-vars */
import * as path from 'path';
import * as fs from 'fs';
import 'reflect-metadata';
import emojiRegex from 'emoji-regex';

import { resolveVariables } from '../utils/test-executor';

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

export function resolveValidIf(
  field,
  validIfMetadata: { condition: string; operators: string; condition2: string },
  valueResponse: any,
  obj: any,
  payload: any,
  context,
): { isValid: boolean; errorMessage?: string } {
  const { condition, operators, condition2 } = validIfMetadata;
  let isValid;
  let value2: any;
  let value1: any;
  if (obj.hasOwnProperty(condition)) {
    value1 = obj[condition]; // Lấy từ response nếu tồn tại
  } else {
    return {
      isValid: false,
      errorMessage: `${field}: Condition '${condition}' not found in response object.`,
    };
  }

  // Lấy giá trị của condition2

  if (condition2.startsWith('response.')) {
    const key = condition2.replace('response.', '');
    value2 = obj[key]; // Lấy từ response[key]
  } else if (condition2.startsWith('payload.')) {
    const key = condition2.replace('payload.', '');
    value2 = payload[key]; // Lấy từ payload[key]
  } else if (condition2.startsWith('{{')) {
    value2 = resolveVariables(condition2, context);
  } else {
    value2 = condition2; // Giá trị cố định
  }

  // Chuẩn hóa kiểu dữ liệu
  value1 = String(value1).trim();
  value2 = String(value2).trim();

  // So sánh hai giá trị dựa trên toán tử
  isValid = false;
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
      return {
        isValid: false,
        errorMessage: `${operators}: Unsupported operator.`,
      };
  }
  // Lấy giá trị của condition1


  if (!isValid) {
    return {
      isValid: false,
      errorMessage: `${field}: ${condition} must ${operators} ${value2} (actual value: ${value1}, expected value: ${value2})`,
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

export function checkULID(value: string): boolean {
  const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
  return typeof value === 'string' && ulidRegex.test(value);
}
export function isSingleEmoji(str: string): boolean {
  const cleaned = str.replace(/\s/g, ''); // Xoá tất cả khoảng trắng
  const emojiRegex = /^(\p{Extended_Pictographic}|\p{Emoji_Presentation})$/u;
  return emojiRegex.test(cleaned);
}
