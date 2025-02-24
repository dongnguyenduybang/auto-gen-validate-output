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
           try {
            const response = await fetch(\`\${globalThis.url}/InternalFaker/MockUsers\`, 
            {
              method: '${requestConfig.method.toLowerCase()}',
              headers: ${JSON.stringify(requestConfig.headers)},
              body: JSON.stringify(payload)
            })

            const data = await response.json();

            if(response.status === 201){
            
                expect(data.ok).toEqual(true)
                expect(data.data).not.toBeNull()
                
                const validateLogic = validateLogicData(data, validationRules${classNameCapitalized},payload )
                
                if(validateLogic.isValid === true){
                  expect(validateLogic.isValid).toEqual(true)
                  passedTests++
                }else {
                  failedTests.push({
                    testcase:${index + 1},
                    errorDetails: validateLogic.errors
                  })
                  throw new Error('Validate logic failed')
              
                }
             
            }else if(response.status === 400){
              const expectJson =  ${JSON.stringify(testCase.expects)}.sort()
              const expectDetails = Array.isArray(data?.error?.details)
                ? data.error.details
                : [];
              const softExpectDetails = [...expectDetails].sort();
              try {
                expect(data.ok).toEqual(false);
                expect(data.data).toEqual(null);
                expect(expectJson).toEqual(softExpectDetails);
                passedTests++;
              } catch (error) {
                 const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                failedTests.push({
                  testcase: ${index + 1},
                  code: 400,
                  missing: missing,
                  extra: extra
                })
                throw new Error(error);
              }
            }else if (response.status === 500){
              const errorMessage = data.error?.details;
              failedTests.push({
                testcase: ${index + 1},
                code: 500,
                errorDetails: errorMessage,
              });
              throw new Error(errorMessage);
            }else {
              console.log('unexpected:', data);
              throw new Error(data);
            }
          }catch (error){

            if (error.message.includes('fetch failed')) {
             console.error('Network or server error:', error.message);
              failedTests.push({
                testcase: ${index + 1},
                errorDetails: 'Server down',
              });
              throw new Error('Server down');
            } else {
             
            throw new Error(error.message);
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
=== Test Reports for DTO "${className}" ===
Host: \${globalThis.url}
Endpoint: ${requestConfig.path}
Total Tests: \${totalTests}
Passed Tests: \${passedTests}
Failed Tests: \${failedTests.length}
Failed Test Details:
\${failedTests
  .map(
    (failCase) => \`
- Testcase #\${failCase.testcase}
  Missing Errors: \${failCase.missing ? JSON.stringify(failCase.missing) : "''"}
  Status Code: \${failCase.code ? JSON.stringify(failCase.code) : "''"}
  Extra Errors: \${failCase.extra ? JSON.stringify(failCase.extra) : "''"}
  Detail Errors: \${failCase.errorDetails ? JSON.stringify(failCase.errorDetails) : "''"}
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
