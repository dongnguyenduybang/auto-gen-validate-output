import * as path from 'path';
import * as fs from 'fs';
import { RecentSelection } from '../types/prediction.types';
import { CONST, MAX_RECENT_ITEMS } from '../utils/get-config';
// group file same name
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
    } else if (
      filePath.endsWith('.request.ts') ||
      filePath.endsWith('.request.js')
    ) {
      const className = fileName.replace('.request', '');
      fileMap[className] = fileMap[className] || {};
      fileMap[className].requestPath = filePath;
    }
  });

  return fileMap;
}

// get pair file dto & request
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
    } else if (
      filePath.endsWith('.request.ts') ||
      filePath.endsWith('.request.js')
    ) {
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

// transform dto name
function transformDtoName(dtoName: string): string {
  const specialAcronyms = new Set(['dm']);

  const words = dtoName.split('-');
  const capitalizedWords = words.map((word) => {
    if (specialAcronyms.has(word.toLowerCase())) {
      return word.toUpperCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return `V3${capitalizedWords.join('')}Request`;
}

// validate file DTO name
export function validateDtoName(dtoName: string): {
  status: boolean;
  data: any;
} {
  const schemaPath = path.join(__dirname, '../swagger/schemas.json');
  try {
    const fileContent = fs.readFileSync(schemaPath, 'utf-8');
    const schema = JSON.parse(fileContent);
    const transformedName = transformDtoName(dtoName);

    if (schema[transformedName]) {
      return { status: true, data: schema[transformedName] };
    }
    return {
      status: false,
      data: `DTO name '${transformedName}' not found in schema.`,
    };
  } catch (error) {
    return {
      status: false,
      data: `Error reading schema: ${(error as Error).message}`,
    };
  }
}

// recent inquirer
export function addToRecentSelections(
  item: RecentSelection,
  recentSelections: RecentSelection[],
): void {
  recentSelections.unshift(item);
  if (recentSelections.length > MAX_RECENT_ITEMS) {
    recentSelections.pop();
  }
}

// get interface name
export function toInterfaceName(requestName: string): string {
  if (!requestName || typeof requestName !== 'string') {
    console.warn(`⚠️ Invalid requestName: ${requestName}`);
    return CONST.versionSwagger;
  }
  const words = requestName.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');

  const pascalCase = words
    .map((word) => {
      if (word.toUpperCase() === 'DM') return 'DM';
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');

  if (!CONST.versionSwagger.includes('$')) {
    console.warn(
      `⚠️ CONST.versionSwagger does not contain the $ character: ${CONST.versionSwagger}`,
    );
    return `${CONST.versionSwagger}${pascalCase}`;
  }
  return CONST.versionSwagger.replace('$', pascalCase);
}

// find request function
export function findRequestFunction(module, fileName) {
  const fnPattern1 =
    fileName
      .replace('.request.ts', '')
      .split('-')
      .map((s, i) => (i === 0 ? s : s[0].toUpperCase() + s.slice(1)))
      .join('') + 'Request';

  const fnPattern2 = Object.keys(module).find(
    (k) => typeof module[k] === 'function' && /Request$/i.test(k),
  );

  return module[fnPattern1] || module[fnPattern2] || module.default;
}
