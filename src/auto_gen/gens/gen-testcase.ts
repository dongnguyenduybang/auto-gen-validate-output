import * as fs from 'fs';
import * as path from 'path';
import { setupConfiguration, getOrThrow } from '../helps/get_config';
import { replaceClassName } from '../helps/ultil';
setupConfiguration();
let baseUrlSB11: string;
try {
  baseUrlSB11 = getOrThrow<string>('host.sb11');
} catch (error) {
  console.error('Error:', error.message);
}
function readJsonFile(filePath: string): any {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

console.log(process.env.API_BASE_URL);
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

function pairFiles(
  files: string[],
): { dtoPath: string; requestPath: string; className: string }[] {
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

  return Object.entries(fileMap).map(
    ([className, { dtoPath, requestPath }]) => ({
      dtoPath,
      requestPath,
      className,
    }),
  );
}

function genTestCase(
  payloadPath: string,
  requestPath: string,
  className: string,
  outputDir: string,
) {
  const payloadData = readJsonFile(payloadPath);
  const requestConfig = readJsonFile(requestPath);
  const classNameReplace = replaceClassName(className)

  const specContent = `
    import axios from 'axios';
    import { plainToInstance } from 'class-transformer';
    import { ${className}Response } from '../../dto_response/${className}.response.dto';
    import { validate } from 'class-validator';
    import { validationRules${classNameReplace.text} } from '../../validates/${classNameReplace.text2}/validate-${classNameReplace.text2}';
    import { validateLogicData } from '../../validates/validate-logic';

    describe('Testcase for ${className}', () => {
        ${payloadData
          .map(
            (testCase: any, index: number) => `
          it('Test case #${index + 1} with expect errors ${JSON.stringify(testCase.expects)} ', async () => {
            const payload = ${JSON.stringify(testCase.body)};
            try {
              const response = await axios({
                method: '${requestConfig.method.toLowerCase()}',
                url: '${baseUrlSB11 + requestConfig.path}',
                headers: ${JSON.stringify(requestConfig.headers)},
                data: ${JSON.stringify(testCase.body)}
              });
              const dataResponse = plainToInstance(${className}Response, response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
              } else {
                const result = validateLogicData(dataResponse, validationRules${classNameReplace.text}, payload);
                console.log(result)
              }
            } catch (error) {
              const expectedError = ${JSON.stringify(testCase.expects)};

              expectedError.forEach((errorDetail) => {
                expect(error.response.data.error.details).toContainEqual(errorDetail);
              });
            }
          });`,
          )
          .join('\n')}
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
