import * as path from 'path';
import * as fs from 'fs';
import 'reflect-metadata';
import axios from 'axios';
import { AttachmentTypeEnum } from '../enums/attachment-type.enum';


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
    summary.statusCodes[statusCode] = (summary.statusCodes[statusCode] || 0) + 1;

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
  return formattedDate
}

export function classifyContent(content: string): AttachmentTypeEnum {
  // Biểu thức chính quy để kiểm tra URL hợp lệ
  const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/.*)?$/;

  const attachmentTypes = {
    [AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_PHOTO]: [".jpg", ".jpeg", ".png", ".bmp", ".webp"],
    [AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_VIDEO]: [".mp4", ".avi", ".mov", ".mkv"],
    [AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_AUDIO]: [".mp3", ".wav", ".flac", ".aac"],
    [AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_STICKER]: [".gif"], 
    [AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_FILE]: [".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".zip", ".rar"]
  };

  // Kiểm tra xem content có phải là URL hợp lệ không
  if (!urlRegex.test(content)) {
    // Nếu không phải URL, kiểm tra xem có phải là mention hay không
    if (content.startsWith("@")) {
      return AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_MENTION;
    }

    return AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_UNSPECIFIED;
  }

  // Lấy phần mở rộng của URL
  const urlParts = content.split(".");
  const lastPart = urlParts.pop()?.toLowerCase();
  const extension = lastPart ? `.${lastPart}` : "";

  // Kiểm tra từng loại nội dung dựa trên phần mở rộng
  for (const [typeKey, extensions] of Object.entries(attachmentTypes)) {
    if (extensions.includes(extension)) {
      return parseInt(typeKey, 10) as AttachmentTypeEnum;
    }
  }

  // Nếu URL không có phần mở rộng cụ thể, coi là liên kết thông thường
  return AttachmentTypeEnum.ATTACHMENT_TYPE_ENUM_LINKS;
}


function dmsToDecimal(degrees, minutes, seconds) {
  return degrees + (minutes / 60) + (seconds / 3600);
}

export function extractCoordinates(description) {
  const regex = /([0-9]+)°([0-9]+)′([0-9.]+)″[NS]\s([0-9]+)°([0-9]+)′([0-9.]+)″[EW]/;
  const match = description.match(regex);

  if (match) {
    const latitude = dmsToDecimal(parseInt(match[1]), parseInt(match[2]), parseFloat(match[3]));
    const longitude = dmsToDecimal(parseInt(match[4]), parseInt(match[5]), parseFloat(match[6]));
    return { latitude, longitude };
  }
  return null;
}