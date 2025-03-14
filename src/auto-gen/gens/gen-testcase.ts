import * as path from 'path';
import * as fs from 'fs';
import { readJsonFile } from '../helps/utils';

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


  const isDeleteMethod = requestConfig.method.toLowerCase() === 'delete';
  const isPostOrPut = ['post', 'put'].includes(requestConfig.method.toLowerCase());
  const specContent = `
    import { validate${classNameCapitalized} } from '../validates/${className}/validate-${className}';
    import fs from 'fs';
    import path from 'path';
    import { summarizeErrors, summaryFields, getTime } from '../helps/utils';
    import { executeBeforeAllSteps, executeDelete } from '../functions';
    import { resolveJsonVariables,resolveVariables } from '../helps/get-resolve-variables';
    import { plainToClass } from 'class-transformer';
    import { ${classNameCapitalized}Response } from '../response/${className}.response';
    import { validateAfterLogic } from '../validates/${className}/validate-${className}-after';

    describe('Testcase for ${className}', () => {
        let totalTests = 0;
        let passedLogic = 0;
        let failedTests = [];
        let logicTests = [];
        let passedTests = 0
        let passed200 = 0
        let headerRequest
        let testNumber
        let resolvedData
        let nextStep = false
        let messageIdArray;

        beforeAll( async () => {

          await executeBeforeAllSteps(${JSON.stringify(requestConfig.beforeAll)})

          headerRequest = ${JSON.stringify(requestConfig.headers)}
         
        })
        afterEach(async () => {

        if(nextStep === true){
          // if (!resolveVariables("{{messageId}}")) {
          //     return; 
          //  }
            const result = await executeBeforeAllSteps(${JSON.stringify(requestConfig.afterEach)})
            const validateAfter = await validateAfterLogic(result, resolvedData)
            if (validateAfter.length === 0) {
              passedLogic++;
              passedTests++;
            
              logicTests.push({ 
                testcase: testNumber,
              });
            
            } else {
              logicTests.push({ 
                testcase: testNumber,
                errorLogic: validateAfter
              });
            }
          }
         
        })

        ${payloadData
      .map(
        (testCase: any, index: number) => `
           
            it('Test case # ${index + 1} with expect errors ${JSON.stringify(testCase.expects)}', async () => {
             testNumber = ${index + 1};
              totalTests++;
              const payloadObj = ${JSON.stringify(testCase.body)};
              resolvedData = resolveJsonVariables(payloadObj);
              ${isDeleteMethod ? `
              const baseParams = new URLSearchParams({
                workspaceId: resolvedData.workspaceId,
                channelId: resolvedData.channelId
              }).toString();
              
              if (typeof resolvedData.messageIds !== 'string') {
                messageIdArray = [resolvedData.messageIds.toString()];
              } else {
                messageIdArray = resolvedData.messageIds.split(',');
              }
              const requestUrl = \`\${globalThis.url}${requestConfig.path}?\${baseParams}&\${messageIdArray.map(id => \`messageIds=\${encodeURIComponent(id)}\`).join('&')}\`;
            ` : `
              const requestUrl = \`\${globalThis.url}${requestConfig.path}\`;
            `}
            try {
              const response = await fetch(requestUrl, {
                method: '${requestConfig.method.toLowerCase()}',
                headers: resolveJsonVariables(headerRequest),
                body: ${isPostOrPut ? 'JSON.stringify(resolvedData)' : 'undefined'}
              });

              const data = await response.json();

              if(response.status === 201){
              
                if(data.data){

                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(${classNameCapitalized}Response, data);
                  const validateLogic = await validate${classNameCapitalized}(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {

                    nextStep = true
                  }
                }else {

                  nextStep = true
                }

              }else if(response.status === 200){
                expect(data.ok).toEqual(true)
                if(data.data){
                  const dtoInstance = plainToClass(${classNameCapitalized}Response, data);
                  const validateLogic = await validate${classNameCapitalized}(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                  nextStep = false
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  
                  }else{
                    nextStep = true
                  }

                }else {
                 expect(data.ok).toEqual(true)
                  passed200++
                  passedTests++
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
                  passedTests++
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else if (response.status === 403){
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
                   nextStep = false
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              
              
              }else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
              nextStep = false
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
                nextStep = false
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    errorDetails: 'Could not resolve permission type',
                  });
                throw new Error(error.message || 'unknown error');
              }else {
                throw new Error(error.message || 'unknown error');
              }
            }
            });`,
      )
      .join('\n')}

      afterAll(async () => {
        const folderPath = path.join(__dirname, '../reports');

        const folderPathLogic = path.join(__dirname, '../reports/${className}');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
        if (!fs.existsSync(folderPathLogic)) {
          fs.mkdirSync(folderPathLogic, { recursive: true });
        }
        const summary = summarizeErrors(failedTests, totalTests, passedLogic, passed200);
        const resultContent = \`
=== Test Reports for DTO "${className}" ===
Host: \${globalThis.url}
Endpoint: ${requestConfig.path}
Summary: 
Total Tests: \${totalTests}
Passed Tests: \${passedTests}
Failed Tests: \${failedTests.length}
Status Code:
  200: \${summary.statusCodes[200] || 0}
  201: \${summary.statusCodes[201] || 0}
  400: \${summary.statusCodes[400] || 0}
  403: \${summary.statusCodes[403] || 0}
  404: \${summary.statusCodes[404] || 0}
  500: \${summary.statusCodes[500] || 0}
Uniques Error:
  \${Array.from(summary.uniqueErrors.entries())
          .map(([error, count]) => \`\${error}: \${count} \n \`)
      .join('')
  }
Failed Test Details:
\${failedTests.map((failCase) => \`
  - Testcase #\${failCase.testcase}
    Missing Errors: \${failCase.missing ? JSON.stringify(failCase.missing) : "''"}
    Status Code: \${failCase.code ? JSON.stringify(failCase.code) : "''"}
    Extra Errors: \${failCase.extra ? JSON.stringify(failCase.extra) : "''"}
    Detail Errors: \${failCase.errorDetails ? JSON.stringify(failCase.errorDetails) : "''"}\`).join('')}\`;


    const resultLogicError = \`
    === Test Reports Logic for DTO "${className}" ===
    Host: \${globalThis.url}
    Endpoint: ${requestConfig.path}
    Error: 
    \${logicTests.map((logicCaseFail) => \`
    - Testcase #\${logicCaseFail.testcase}
      Logic Errors: \${logicCaseFail.errorLogic ? JSON.stringify(logicCaseFail.errorLogic) : "''"}\n  \` ).join('')}\`


const resultFilePath = path.join(folderPath, '${className}.txt');
const resultFilePathLogic = path.join(folderPathLogic, \`${className}.\${getTime()}.txt\`);
fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
fs.writeFileSync(resultFilePathLogic, resultLogicError, 'utf-8');
console.log(\`Success: \${resultFilePath}\`);
await executeDelete(${JSON.stringify(requestConfig.afterAll)}, headerRequest)    
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
