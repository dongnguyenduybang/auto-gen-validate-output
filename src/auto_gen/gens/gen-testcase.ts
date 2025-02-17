import * as fs from 'fs';
import * as path from 'path';


console.log('Environment variables:', process.env);
function readJsonFile(filePath: string): any {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

console.log(process.env.API_BASE_URL)
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

function pairFiles(files: string[]): { dtoPath: string; requestPath: string; className: string }[] {

  const fileMap: Record<string, { dtoPath?: string; requestPath?: string }> = {};

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

  return Object.entries(fileMap).map(([className, { dtoPath, requestPath }]) => ({
    dtoPath,
    requestPath,
    className,
  }));
}

function genTestCase(
  payloadPath: string,
  requestPath: string,
  className: string,
  outputDir: string
) {

  const payloadData = readJsonFile(payloadPath);
  const requestConfig = readJsonFile(requestPath);

  const specContent = `
    import axios from 'axios';
    import { plainToInstance } from 'class-transformer';
    import { ${className}Response } from '../../dto_response/${className}.response.dto';
    import { validate } from 'class-validator';
    import { validateLogicData } from '../../validates/validate-logic';
    import { getValidationFromDTOResponse } from '../../helps/ultil';
    import { failResponse } from '../../helps/structures/responses';

    describe('Testcase for ${className}', () => {
      describe('Testcase ${requestConfig.method.toUpperCase()} method', () => {
        ${payloadData
          .map(
            (testCase: any, index: number) => `
          it('Test case #${index + 1}', async () => {
            const payload = ${JSON.stringify(testCase.body)};
            try {
              const response = await axios({
                method: '${requestConfig.method.toLowerCase()}',
                url: ${JSON.stringify(requestConfig.path)},
                headers: ${JSON.stringify(requestConfig.headers)},
                data: ${JSON.stringify(testCase.body)}
              });
              const mockUserResponse = plainToInstance(${className}Response, response.data.data[0]);
              const errors = await validate(mockUserResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const mockUserValidationRules = getValidationFromDTOResponse(${className}Response);
                const result = validateLogicData(mockUserResponse, mockUserValidationRules, payload);
                expect(result.isValid).toBe(true);
                expect(result.errors).toBe(null);
              }
            } catch (error) {
              const expectedError = ${JSON.stringify(testCase.expects)};
              expect(error.response.data).toEqual(failResponse(expectedError));
            }
          });`,
          )
          .join('\n')}
      });
    });
  `;

  const outputPath = path.join(outputDir, `${className}.spec.ts`);
  fs.writeFileSync(outputPath, specContent, 'utf-8');
  console.log(`Success: ${outputPath}`);
}


const dtosDir = path.join(__dirname, '../dtos');
const payloadsDir = path.join(__dirname, '../folder_gen/payloads');

const allFiles = getAllFiles(dtosDir);
const pairedFiles = pairFiles(allFiles);

const outputDir = path.join(__dirname, '../folder_gen/test-case');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

pairedFiles.forEach(({ dtoPath, requestPath, className }) => {
  if (dtoPath && requestPath) {
    const payloadPath = path.join(payloadsDir, `${className}.payload.json`);
    if (fs.existsSync(payloadPath)) {
      genTestCase(payloadPath, requestPath, className, outputDir);
    } else {
      console.warn(`Missing payload file for class: ${className}`);
    }
  } else {
    console.warn(`Missing .dto or .request.json for class: ${className}`);
  }
});