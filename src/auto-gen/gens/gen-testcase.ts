import * as path from 'path';
import * as fs from 'fs';
import { formatExpectErrors, readJsonFile } from '../helps/utils';
import { HeaderRequest } from '../dtos/send-message/send-message.request';


const outputDir = path.join(__dirname, '../test-case');

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
    } else if (filePath.endsWith('.request.ts')) {
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
  const requestMethod = HeaderRequest.method.toLowerCase();
  const classNameCapitalized = className
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  const isDeleteMethod = requestMethod === 'delete';
  const specContent = `
    import { validateResponses } from '../validates/validate-response';
    import fs from 'fs';
    import path from 'path';
    import { TestContext } from '../test-execute-step/text-context';
    import { Before${classNameCapitalized}, ${classNameCapitalized}Saga, HeaderRequest } from '../dtos/${className}/${className}.request';
    import { summarizeErrors, summaryFields, getTime, handleSendMessageResponse } from '../helps/utils';
    import { executeAllSteps, resolveVariables } from '../test-execute-step/test-executor';
    import { plainToClass } from 'class-transformer';
    import { ${classNameCapitalized}Response } from '../response/${className}.response';
    import axios from 'axios';


    describe('Testcase for ${className}', () => {
        let totalTests = 0;
        let passedLogic = 0;
        let failedTests = [];
        let logicTests = [];
        let passedDTO = 0
        let passed200 = 0
        let headerRequest, resolvedHeader,pathRequest,payloadRequest,methodRequest
        let testNumber
        let resolvedPayload
        const testResults = [];
        let globalContext
        let failedStep = []
        let messageIdArray;

        beforeAll( async () => {
          globalContext = new TestContext();

          const results = await executeAllSteps(Before${classNameCapitalized}.steps, globalContext);
          results.map((step, index) => {
            failedStep.push({
              success: step.success,
              stepName: step.stepName,
              error: step.error
            });
          })
          headerRequest = ${JSON.stringify(HeaderRequest.headers, null, 2)}
          payloadRequest = ${JSON.stringify(HeaderRequest.payload, null, 2)}
          pathRequest = ${JSON.stringify(HeaderRequest.path, null, 2)}
          methodRequest = ${JSON.stringify(HeaderRequest.method, null, 2)}
        })

        ${payloadData
          .map(
            (testCase: any, index: number) => `
           
            it('Test case # ${index + 1} with expect errors ${formatExpectErrors(testCase.expects)}', async () => {
             testNumber = ${index + 1};
              const testResult = { 
                testNumber: testNumber,
                nextStep: false,
            };
              totalTests++;
              const payloadObj = ${JSON.stringify(testCase.body)};
              resolvedPayload = resolveVariables(payloadObj,globalContext );
              resolvedHeader = resolveVariables(headerRequest, globalContext);
              ${
                isDeleteMethod
                  ? `
              const baseParams = new URLSearchParams({
                workspaceId: resolvedPayload.workspaceId,
                channelId: resolvedPayload.channelId
              }).toString();
              
              if (typeof resolvedPayload.messageIds !== 'string') {
                messageIdArray = [resolvedPayload.messageIds.toString()];
              } else {
                messageIdArray = resolvedPayload.messageIds.split(',');
              }
              const requestUrl = \`\${globalThis.url}\${pathRequest}?\${baseParams}&\${messageIdArray.map(id => \`messageIds=\${encodeURIComponent(id)}\`).join('&')}\`;
            `
                  : `
              const requestUrl = \`\${globalThis.url}\${pathRequest}\`;
            `
              }
            try {
            const response = await axios.${requestMethod}(requestUrl, resolvedPayload,{ headers: { ...resolvedHeader} , validateStatus: () => true})
            const data = response.data
              if(response.status === 201){
              passedDTO++
                if(data.data){
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(${classNameCapitalized}Response, data);
                  const validateResponse = await validateResponses(resolvedPayload, dtoInstance);
                  if (validateResponse.length !== 0) {
                  testResult.nextStep = false;
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateResponse,
                    })
                  }else {
                   const response = dtoInstance
                    const handleSendMessage = await handleSendMessageResponse(response, globalContext);
                    if(handleSendMessage === true){
                      testResult.nextStep = true;
                    }
                  }
                }else {

                  testResult.nextStep = true;
                }

              }else if(response.status === 200){
                passedDTO++
                if(data.data){

                    expect(data.ok).toEqual(true)
                    expect(data.data).not.toBeNull()
                    const dtoInstance = plainToClass(${classNameCapitalized}Response, data);
                    const validateResponse = await validateResponses(resolvedPayload, dtoInstance);
                    if (validateResponse.length !== 0) {
                  testResult.nextStep = false;
                      logicTests.push({
                        testcase:testNumber,
                        errorLogic: validateResponse,
                      })
                    }else {

                  testResult.nextStep = true;
                    }
                  }else {

                  testResult.nextStep = true;
                  } 
              }else if (response.status === 400){
                 const expectJson =  ${JSON.stringify(testCase.expects)}.sort()
                  const expectDetails = Array.isArray(response?.data?.error?.details)
                  ? response.data.error.details
                  : [];
                  const softExpectDetails = [...expectDetails].sort();
                  try {
                    expect(data.ok).toEqual(false);
                    expect(data.data).toEqual(null);
                    expect(expectJson).toEqual(softExpectDetails);
                  testResult.nextStep = false;
                  } catch (error) {
                    const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  testResult.nextStep = false;
                    failedTests.push({
                      testcase: testNumber,
                      code: 400,
                      missing: missing || [],
                      extra: extra || []
                    })
                    throw new Error(error);
                  }
                }else if (response.status === 403){
                  const expectJson =  ${JSON.stringify(testCase.expects)}.sort()
                  const expectDetails = response.data

                  expect(expectDetails).toEqual(expectJson.join(" "))
                  testResult.nextStep = false;
                
                }
            }catch (error){
              console.log(error)
            } finally {
              testResults.push(testResult);
             }
            });`,
          )
          .join('\n')}

      afterAll(async () => {
      for (const result of testResults) {
                if (result.nextStep) {
                    const results = await executeAllSteps(${classNameCapitalized}Saga.steps, globalContext);
                    results.forEach((step) => {
                        failedStep.push({
                            success: step.success,
                            stepName: step.stepName,
                            error: step.error
                        });
                    });
                }
        }
      
        const folderPath = path.join(__dirname, '../reports/${className}');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
        const classNames = \`${className}\`
        const summary = summarizeErrors(failedTests, totalTests, passedLogic, passed200);
         const reportFolder = path.join(__dirname, '../reports/combined');
        const reportFileName = \`${className}.\${getTime()}.report.txt\`;
        const { combinedReportTemplate } = await import('../gens/report-file');
        const reportContent = combinedReportTemplate(
          classNames,
          globalThis.url,
          pathRequest,
          failedStep,
          passedDTO,
          failedTests,
          totalTests,
          logicTests,
          summary
        );
        
  const reportPath = path.join(folderPath, reportFileName);
  fs.writeFileSync(reportPath, reportContent, 'utf-8');
  console.log(\`📄 Combined report generated: \${reportPath}\`);
        })
        })
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
  //foreach các cặp file và gen testcase
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