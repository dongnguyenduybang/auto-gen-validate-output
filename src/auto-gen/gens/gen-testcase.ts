import * as path from 'path';
import * as fs from 'fs';

const outputDir = path.join(__dirname, '../test-case');

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
    import { ${classNameCapitalized}DTOResponse } from '../dto-response/${className}.response.dto';
    import { validate } from 'class-validator';
    import { validationRules${classNameCapitalized} } from '../validates/${className}/validate-${className}';
    import { validateLogicData } from '../validates/validate-logic';
    import fs from 'fs';
    import path from 'path';
    import { summaryFields } from '../helps/ultil';

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
           
            const response = await fetch(\`\${globalThis.url}${requestConfig.path}\`, 
            {
              method: '${requestConfig.method.toLowerCase()}',
              headers: ${JSON.stringify(requestConfig.headers)},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
              passedTests++
            
            }else if(response.status === 400){
              const expectJson = ${JSON.stringify(testCase.expects)}.sort()
              const expectDetails = data?.error?.details || [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++; 
              } catch (error) {
                const { missing, extra } = summaryFields(expectJson, softExpectDetails);
                failedTests.push({
                  testcase: ${index + 1},
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){

              expect(response.status).toEqual(500)
              throw new Error('Server returned a 500 error');
             
            } else {
              console.warn('Unexpected Response:', data);

              throw new Error(data);
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
              === Test Reports for DTO "${className}" ===
              Host: \${globalThis.url}\
              Endpoint: ${requestConfig.path}
              Total Tests: \${totalTests}
              Passed Tests: \${passedTests}
              Failed Tests: \${failedTests.length}

              Failed Test Details:
             \${failedTests
                .map(
                  (failCase) => \`
              - Testcase #\${failCase.testcase}
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
  const payloadsDir = path.join(__dirname, '../expect-json');
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
