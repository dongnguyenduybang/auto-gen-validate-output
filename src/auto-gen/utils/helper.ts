import * as path from 'path';
import * as fs from 'fs';
import 'reflect-metadata';
import {
  ActionHandler,
  IContext,
  ValidationError,
} from './declarations';
import { TestContext } from './text-context';
import emojiRegex from 'emoji-regex';

export function pairFiles(files: string[]): {
  dtoPath: string;
  requestPath: string;
  className: string;
  folderPath: any;
}[] {
  const fileMap: Record<string, { dtoPath?: string; requestPath?: string }> =
    {};
  files.forEach((filePath) => {
    const fileName = path.basename(filePath, path.extname(filePath));
    if (filePath.endsWith('.dto.ts') || filePath.endsWith('.dto.js')) {
      const className = fileName.replace('.dto', '');
      fileMap[className] = fileMap[className] || {};
      fileMap[className].dtoPath = filePath;
    } else if (filePath.endsWith('.request.ts') || filePath.endsWith('.request.js')) {
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
      folderPath: dtoPath ? path.dirname(dtoPath) : path.dirname(requestPath),
    }),
  );
}

export function readJsonFile(filePath: string): any {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
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

export function groupFilesByName(
  files: string[],
): Record<string, { dtoPath?: string; requestPath?: string }> {
  const fileMap: Record<string, { dtoPath?: string; requestPath?: string }> =
    {};
  files.forEach((filePath) => {
    const fileName = path.basename(filePath, path.extname(filePath));
    if (filePath.endsWith('.dto.ts') || filePath.endsWith('.dto.js')) {
      const className = fileName.replace('.dto', '');
      fileMap[className] = fileMap[className] || {};
      fileMap[className].dtoPath = filePath;
    } else if (filePath.endsWith('.request.ts') || filePath.endsWith('.request.js')) {
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

export function checkURL(value: string): boolean {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlRegex.test(value);
}

export function countEmojis(str: unknown): number {
  if (typeof str !== 'string') return 0;

  const regex = emojiRegex();
  return Array.from(str.matchAll(regex)).length;
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
      .filter(
        (e) =>
          !e.isDirectory() &&
          (e.name.endsWith('.dto.ts') || e.name.endsWith('.dto.js'))
      )
      .map((e) => e.name);

    const currentRequestFiles = entries
      .filter(
        (e) =>
          !e.isDirectory() &&
          (e.name.endsWith('.request.ts') || e.name.endsWith('.request.js'))
      )
      .map((e) => e.name);


    if (currentDtoFiles.length > 0 && currentRequestFiles.length > 0) {
      results.push({
        path: dir,
        dtoFiles: currentDtoFiles,
        requestFiles: currentRequestFiles,
      });
    }

    // Then scan subdirectories
    entries
      .filter((e) => e.isDirectory())
      .forEach((e) => {
        scanDirectory(path.join(dir, e.name));
      });
  }

  scanDirectory(basePath);
  // results.forEach((r) => console.log(`- ${r.path}`));
  return results;
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
    writable: false,
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

function transformDtoName(dtoName) {
  const words = dtoName.split('-');
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  ); // Capitalize each word
  return `V3${capitalizedWords.join('')}Request`;
}

export function transformPropertyName(dataDTO: object): string[] {
  const schemaPath = path.join(__dirname, '../swagger/schemas.json');
  const fileContent = fs.readFileSync(schemaPath, 'utf-8');
  const schema = JSON.parse(fileContent);
  if (!dataDTO || typeof dataDTO !== 'object') return [];

  const dto = dataDTO as any;

  if (!dto.properties || typeof dto.properties !== 'object') return [];

  const requiredFields = Array.isArray(dto.required) ? dto.required : [];

  return Object.entries(dto.properties).map(([key, value]: [string, any]) => {
    let typeDesc = '';
    const isRequired = requiredFields.includes(key);

    if (value.type) {
      typeDesc = value.type;
    } else if (value.$ref) {
      const refName = value.$ref.replace('#/components/schemas/', '');
      const refSchema = schema?.[refName];

      if (refSchema?.enum && Array.isArray(refSchema['x-enum-varnames'])) {
        // Gộp enum value + tên biến
        const enums = refSchema.enum
          .map((val: number | string, idx: number) => {
            const name =
              refSchema['x-enum-varnames']?.[idx] ?? `UNKNOWN_${val}`;
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

export function normalizePath(inputPath: string) {
  return inputPath.replace(/\\/g, '/').replace(/\/+/g, '/');
}

export async function searchDtoInTestRequests(
  dtoName: string,
): Promise<string[]> {
  const basePath = path.join(__dirname, '../test-requests');

  const matches: string[] = [];

  async function walkDir(currentPath: string) {
    try {
      const entries = await fs.promises.readdir(currentPath, {
        withFileTypes: true,
      });

      for (const entry of entries) {
        const fullPath = path.join(currentPath, entry.name);

        if (entry.isDirectory()) {
          // Check if the folder name matches dtoName exactly
          if (path.basename(entry.name) === dtoName) {
            // Add the relative path from basePath
            const relativePath = path.relative(basePath, fullPath);
            matches.push(relativePath);
          }
          // Recursively search subdirectories
          await walkDir(fullPath);
        } else {
          // Check if the file name (without extension) matches dtoName
          const baseName = path.parse(entry.name).name;
          if (baseName === dtoName) {
            // Add the relative path from basePath
            const relativePath = path.relative(basePath, fullPath);
            matches.push(relativePath);
          }
        }
      }
    } catch (error) {
      console.error(
        `Error reading directory ${currentPath}: ${(error as Error).message}`,
      );
    }
  }

  await walkDir(basePath);
  return matches;
}

export function transformPayload(resolved: Record<string, any>) {
  const { headers, ...rest } = resolved;
  return {
    headers: headers ?? {},
    body: rest,
  };
}

const packageRoot = path.resolve(__dirname, '../test-requests');

export function getDtoFolderPath(dtoName: string): string | null {
  function searchDir(currentPath: string): string | null {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);

      // 👉 Bỏ qua folder .reports
      if (entry.isDirectory()) {
        if (entry.name === '.reports') continue;

        const found = searchDir(fullPath);
        if (found) return found;
      } else if (entry.isFile() && entry.name.startsWith(dtoName)) {
        return path.dirname(fullPath);
      }
    }

    return null;
  }

  return searchDir(packageRoot);
}


