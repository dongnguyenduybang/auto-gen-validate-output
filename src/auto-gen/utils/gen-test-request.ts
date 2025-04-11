import * as path from 'path';
import * as fs from 'fs';
import { formatExpectErrors, readJsonFile } from './helper';

//get tất cả các file từ dirpath và trả về đường dẫn
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

//foreach qua tất cả các file và lấy các cặp file có đuôi .dto.ts và .request.json có tên giống nhau thành 1 object
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
  const isDeleteMethod = requestConfig.method.toLowerCase() === 'delete';

  const specContent = `
    import fs from 'fs';
    import path from 'path';
    import axios from 'axios';
    import { getTime, summarizeErrors, summaryFields } from '../../utils/helper';
    import { executeAllSteps, resolveVariables } from '../../utils/test-executor';
    import { TestContext } from '../../utils/text-context';
    describe('Testcase for ${className}', () => {
        let totalTests = 0;
        let passed201 = 0;
        let failedTests = [];
        let codedTest = [];
        let logicTests = [];
        let passedTests = 0
        let passed200 = 0
        let passedDTO = 0;
        let headerRequest
        let testNumber
        let failedStep = [];
        let testType
        let resolvedData, pathRequest, methodRequest
        let globalContext, resolvedHeader
        beforeAll( async () => {
          testType = 'request'
          globalContext = new TestContext()
          const resultStep = await executeAllSteps(${JSON.stringify(requestConfig.beforeAll)},globalContext)
          resultStep.forEach((step, index) => {
            failedStep.push({
              type: step.type,
              status: step.status,
              stepName: step.stepName,
              error: step.error
            })
          })
          headerRequest = ${JSON.stringify(requestConfig.headers)}
          resolvedHeader = resolveVariables(headerRequest, globalContext)
          pathRequest = ${JSON.stringify(requestConfig.path, null, 2)}
          methodRequest = ${JSON.stringify(requestConfig.method, null, 2)}
        })

        ${payloadData
          .map(
            (testCase: any, index: number) => `
           
            it('Test case #${index + 1} with expect errors  ${formatExpectErrors(testCase.expects)} ', async () => {
              testNumber = ${index + 1};
              totalTests++;
              const payloadObj = ${JSON.stringify(testCase.body)};
              resolvedData = resolveVariables(payloadObj,globalContext );
              ${
                isDeleteMethod
                  ? `
              const urlParams = new URLSearchParams(resolvedData).toString();
              const requestUrl = \`\${globalThis.url}${requestConfig.path}?\${urlParams}\`;
            `
                  : `
              const requestUrl = \`\${globalThis.url}${requestConfig.path}\`;
            `
              }
            try {
              const response = await axios.${requestConfig.method.toLowerCase()}(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
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
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ${JSON.stringify(testCase.expects)}.sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });`,
          )
          .join('\n')}

      afterAll(async () => {
      const resultStep = await executeAllSteps(${JSON.stringify(requestConfig.afterAll)},globalContext)
        resultStep.forEach((step, index) => {
          failedStep.push({
            type: step.type,
            status: step.status,
            stepName: step.stepName,
            error: step.error
          })
        })
        const folderPath = path.join(__dirname, '../reports/${className}');
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }
        const classNames = \`${className}\`;
        const summary = summarizeErrors(failedTests,codedTest, passed200, passed201);
        const reportFileName = \`${className}-request-\${getTime()}.report.txt\`;  
        const { combinedReportTemplate } = await import('../../utils/report-file');
        const reportContent = combinedReportTemplate(
            classNames,
            globalThis.url,
            pathRequest,
            failedStep,
            passedTests,
            failedTests,
            totalTests,
            logicTests,
            summary,
            testType
        );
        const reportPath = path.join(folderPath, reportFileName);
        fs.writeFileSync(reportPath, reportContent, 'utf-8');
        console.log(\`📄 Combined report generated: \${reportPath}\`);
      });
                          
    });

  `;

  const outputPath = path.join(outputDir, `${className}.spec.ts`);
  fs.writeFileSync(outputPath, specContent, 'utf-8');
  console.log(`Success: ${outputPath}`);
}

export function genTestRequest(dtoName: string) {
  const dtosDir = path.join(__dirname, '../test-requests', dtoName);
  console.log(dtosDir);
  const payloadsDir = path.join(__dirname, '../test-requests', dtoName);
  const allFiles = getAllFiles(dtosDir);
  const pairedFiles = pairFiles(allFiles);
  //foreach các cặp file và gen testcase
  pairedFiles.forEach(({ dtoPath, requestPath, className }) => {
    if (dtoPath && requestPath) {
      const payloadPath = path.join(payloadsDir, `${className}.payload.json`);
      const outputDir = path.join(__dirname, `../test-requests/${className}`);
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
