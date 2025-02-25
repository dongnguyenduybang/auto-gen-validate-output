import * as path from 'path';
import * as fs from 'fs';
import { generateErrorCases } from '../helps/dto-helper';
import { resolveJsonVariables } from '../helps/get-resolve-variables';



export function genBodyPayload(dtoName) {
  const dtoFolderPath = path.join(__dirname, '../dtos', dtoName);
  const outputDir = path.join(__dirname, '../expect-json');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const files = getAllFiles(dtoFolderPath);
  const fileMap = groupFilesByName(files);

  Object.entries(fileMap).forEach(([className, { dtoPath, requestPath }]) => {
    if (!dtoPath || !requestPath) {
      console.warn(`Missing .dto or .request.json for class: ${className}`);
      return;
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
        return;
      }

      const rawData = fs.readFileSync(requestPath, 'utf-8');
      const requestData = JSON.parse(rawData);
      const payload = requestData.payload;
      const resolvedPayload = resolveJsonVariables(payload);
      const result = generateErrorCases(dtoClass, resolvedPayload);
      const testCasePayload = result.map(({ testcaseGen, expectedDetail }) => ({
        body: testcaseGen,
        expects: expectedDetail,
      }));

      const outputFilePath = path.join(outputDir, `${className}.payload.json`);
      fs.writeFileSync(
        outputFilePath,
        JSON.stringify(testCasePayload, null, 4),
        'utf-8',
      );
      console.log(`Success: ${outputFilePath}`);
    } catch (error) {
      console.error(`Error processing class: ${className}`, error);
    }
  });
}

function getAllFiles(dirPath: string): string[] {
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

function groupFilesByName(
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
