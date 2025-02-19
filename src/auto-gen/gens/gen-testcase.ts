import * as path from 'path';
import * as fs from 'fs';

const outputDir = path.join(__dirname, '../folder-gen/test-case');

function readJsonFile(filePath: string): any {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
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
  const classNameCapitalized = className
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');



  const specContent = `
    import axios from 'axios';
    import { plainToInstance } from 'class-transformer';
    import { ${classNameCapitalized}DTOResponse } from '../../dto-response/${className}.response.dto';
    import { validate } from 'class-validator';
    import { validationRules${classNameCapitalized} } from '../../validates/${className}/validate-${className}';
    import { validateLogicData } from '../../validates/validate-logic';
    import fs from 'fs';
    import path from 'path';

      // Hàm phân tích lỗi
  function analyzeErrors(expected: string[], actual: string[]) {
    const missing = expected.filter((error) => !actual.includes(error)); // Lỗi thiếu
    const extra = actual.filter((error) => !expected.includes(error)); // Lỗi thừa
    return { missing, extra };
  }

    describe('Testcase for ${className}', () => {
        let totalTests = 0;
        let passedTests = 0;
        let failedTests = [];

        ${payloadData
          .map(
            (testCase: any, index: number) => `
          it('Test case #${index + 1} with expect errors ${JSON.stringify(testCase.expects)} ', async () => {
            totalTests++;
            const payload = ${JSON.stringify(testCase.body)};
            try {
              const response = await axios({
                method: '${requestConfig.method.toLowerCase()}',
                url: \`\${globalThis.url}${requestConfig.path}\`, 
                headers: ${JSON.stringify(requestConfig.headers)},
                data: ${JSON.stringify(testCase.body)}
              });
              const dataResponse = plainToInstance(${classNameCapitalized}DTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #${index + 1}',
                  expected: ${JSON.stringify(testCase.expects)},
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRules${classNameCapitalized}, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ${JSON.stringify(testCase.expects)};
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #${index + 1}',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });`,
          )
          .join('\n')}

        afterAll(() => {
          const folderPath = path.join(__dirname, '../reports');

          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
          }

          const resultContent = \`
              === Test Results for DTO "${className}" ===

              Total Tests: \${totalTests}
              Passed Tests: \${passedTests}
              Failed Tests: \${failedTests.length}

              Failed Test Details:
              \${failedTests
                .map(
                  (failCase) => \`
              - \${failCase.name}
                Expected: \${JSON.stringify(failCase.expected)}
                Actual:   \${JSON.stringify(failCase.actual)}
                Missing Errors: \${JSON.stringify(failCase.missing)}
                Extra Errors: \${JSON.stringify(failCase.extra)}
              \`
                )
                .join('')}
              \`;

               const resultFilePath = path.join(folderPath, '${className}.txt');

                        fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
                        console.log(\`Success: \${resultFilePath}\`);
                      });
                    });
                `;

  const outputPath = path.join(outputDir, `${className}.spec.ts`);
  fs.writeFileSync(outputPath, specContent, 'utf-8');
  console.log(`Success: ${outputPath}`);
}
export function genTestCaseForDTO(dtoName: string) {
  const dtosDir = path.join(__dirname, '../dtos', dtoName);
  const payloadsDir = path.join(__dirname, '../folder-gen/payloads');
  const allFiles = getAllFiles(dtosDir);
  const pairedFiles = pairFiles(allFiles);

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
}
