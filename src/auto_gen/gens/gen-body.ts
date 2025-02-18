import * as path from 'path';
import * as fs from 'fs';
import { generateErrorCases } from '../helps/dto-helper';

const dtoFolderPath = path.join(__dirname, '../dtos');
const outputDir = path.join(__dirname, '../folder_gen/payloads');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function processFiles() {
  const files = getAllFiles(dtoFolderPath);
  console.log(files)
  const fileMap = groupFilesByName(files);


  Object.entries(fileMap).forEach(([className, { dtoPath, requestPath }]) => {
    if (!dtoPath || !requestPath) {
      console.warn(`Missing .dto or .request.json for class: ${className}`);
      return;
    }

    try {
      const dtoModule = require(dtoPath);
      const dtoClass = dtoModule[className];

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

      const result = generateErrorCases(dtoClass, payload);

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
    if (filePath.endsWith('.dto.ts') || filePath.endsWith('.dto.js')) {
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

processFiles();
