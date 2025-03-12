
    import { validateMockUser } from '../validates/mock-user/validate-mock-user';
    import fs from 'fs';
    import path from 'path';
    import { summarizeErrors, summaryFields, getTime } from '../helps/utils';
    import { executeBeforeAllSteps, executeDelete } from '../functions';
    import { resolveJsonVariables,resolveVariables } from '../helps/get-resolve-variables';
    import { plainToClass } from 'class-transformer';
    import { MockUserResponse } from '../response/mock-user.response';
    import { validateAfterLogic } from '../validates/mock-user/validate-mock-user-after';

    describe('Testcase for mock-user', () => {
        let totalTests = 0;
        let passedLogic = 0;
        let failedTests = [];
        let logicTests = [];
        let passedTests = 0
        let passed200 = 0
        let headerRequest
        let testNumber
        let resolvedData

        beforeAll( async () => {

          await executeBeforeAllSteps(["mockUser('duybang12345',1, 0)"])

          headerRequest = {"Content-Type":"application/json"}
         
        })
        afterEach(async () => {

          if (!resolveVariables("{{userId}}")) {
              return; 
           }
            const result = await executeBeforeAllSteps(["getUser({{token}}, {{userId}})"])
            const validateAfter = await validateAfterLogic(result, resolvedData)

            if (validateAfter.length === 0) {
              passedLogic++;
              passedTests++
            
            } else {
              logicTests.push({ 
                testcase: testNumber,
                errorLogic: validateAfter
              });
            }
         
        })

            it('Test case # 64 with expect errors [] ', async () => {
             testNumber = 64;
              totalTests++;
              const payloadObj = {"prefix":"duy123456","quantity":1,"badge":0};
              resolvedData = resolveJsonVariables(payloadObj);
              
              const requestUrl = `${globalThis.url}/InternalFaker/MockUsers`;
            
            try {
              const response = await fetch(requestUrl, {
                method: 'post',
                headers: resolveJsonVariables(headerRequest),
                body: JSON.stringify(resolvedData)
              });

              const data = await response.json();

              if(response.status === 201){
              
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(MockUserResponse, data);
                  const validateLogic = await validateMockUser(dtoInstance, resolvedData);
                  if (validateLogic.length !== 0) {
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateLogic,
                    })
                  }else {
                    globalThis.globalVar.set('userId', data.data[0].userId)
                  }
              
              }else if(response.status === 400){
                const expectJson =  [].sort()
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
                    testcase: testNumber,
                    code: 400,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  errorDetails: errorMessage,
                });
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){

              if (error.message.includes('fetch failed')) {
              console.error('Network or server error:', error.message);
                failedTests.push({
                  testcase:testNumber,
                  errorDetails: 'Server down',
                });
                throw new Error('Server down');
              } else if (error.message.includes('Unexpected token')) {
                console.error('Could not resolve permission type', error.message);
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
            });

           

      afterAll(async () => {
        const folderPath = path.join(__dirname, '../reports');

        const folderPathLogic = path.join(__dirname, '../reports/mock-user');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
        if (!fs.existsSync(folderPathLogic)) {
          fs.mkdirSync(folderPathLogic, { recursive: true });
        }
        const summary = summarizeErrors(failedTests, totalTests, passedLogic, passed200);
        const resultContent = `
=== Test Reports for DTO "mock-user" ===
Host: ${globalThis.url}
Endpoint: /InternalFaker/MockUsers
Summary: 
Total Tests: ${totalTests}
Passed Tests: ${passedTests}
Failed Tests: ${failedTests.length}
Status Code:
  200: ${summary.statusCodes[200] || 0}
  201: ${summary.statusCodes[201] || 0}
  400: ${summary.statusCodes[400] || 0}
  403: ${summary.statusCodes[403] || 0}
  404: ${summary.statusCodes[404] || 0}
  500: ${summary.statusCodes[500] || 0}
Uniques Error:
  ${Array.from(summary.uniqueErrors.entries())
          .map(([error, count]) => `${error}: ${count} 
 `)
      .join('')
  }
Failed Test Details:
${failedTests.map((failCase) => `
  - Testcase #${failCase.testcase}
    Missing Errors: ${failCase.missing ? JSON.stringify(failCase.missing) : "''"}
    Status Code: ${failCase.code ? JSON.stringify(failCase.code) : "''"}
    Extra Errors: ${failCase.extra ? JSON.stringify(failCase.extra) : "''"}
    Detail Errors: ${failCase.errorDetails ? JSON.stringify(failCase.errorDetails) : "''"}`).join('')}`;


    const resultLogicError = `
    === Test Reports Logic for DTO "mock-user" ===
    Host: ${globalThis.url}
    Endpoint: /InternalFaker/MockUsers
    Error: 
    ${logicTests.map((logicCaseFail) => `
    - Testcase #${logicCaseFail.testcase}
      Logic Errors: ${logicCaseFail.errorLogic ? JSON.stringify(logicCaseFail.errorLogic) : "''"}
  ` ).join('')}`


const resultFilePath = path.join(folderPath, 'mock-user.txt');
const resultFilePathLogic = path.join(folderPathLogic, `mock-user.${getTime()}.txt`);
fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
fs.writeFileSync(resultFilePathLogic, resultLogicError, 'utf-8');
console.log(`Success: ${resultFilePath}`);
await executeDelete(["deleteMockUser(duy123456)"], headerRequest)    
});
                          
                    });

                