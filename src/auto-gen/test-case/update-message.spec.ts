
import { validateUpdateMessage } from '../validates/update-message/validate-update-message';
import fs from 'fs';
import path from 'path';
import { summarizeErrors, summaryFields, getTime } from '../helps/utils';
import { executeBeforeAllSteps, executeDelete } from '../functions';
import { resolveJsonVariables, resolveVariables } from '../helps/get-resolve-variables';
import { plainToClass } from 'class-transformer';
import { UpdateMessageResponse } from '../response/update-message.response';

describe('Testcase for update-message', () => {
  let totalTests = 0;
  let passedLogic = 0;
  let failedTests = [];
  let logicTests = [];
  let passedTests = 0
  let headerRequest

  beforeAll(async () => {

    await executeBeforeAllSteps(["mockUser('duybang12345',1, 0)", "createChannel({{token}}, 'channel 1')", "sendMessage({{token}}, 0, {{channelId}}, 'test123', 'ref')", "getMessage({{token}}, {{channelId}}, {{messageId}})"])

    headerRequest = { "Content-Type": "application/json", "x-session-token": "{{token}}", "x-country-code": "VN" }

  })

  it('Test case #324 with expect errors [] ', async () => {
    totalTests++;
    const payloadObj = { "workspaceId": "0", "channelId": "{{channelId}}", "messageId": "{{messageId}}", "content": "test123_update", "ref": "ref" };
    const payload = resolveJsonVariables(payloadObj)
    try {
      const response = await fetch(`${globalThis.url}/Message/UpdateMessage`,
        {
          method: 'put',
          headers: resolveJsonVariables(headerRequest),
          body: JSON.stringify(payload)
        })

      const data = await response.json();

      if (response.status === 200) {
        expect(data.ok).toEqual(true)
        expect(data.data).not.toBeNull()
        const dtoInstance = plainToClass(UpdateMessageResponse, data);
        const validateLogic = await validateUpdateMessage(dtoInstance, payload);
        if (validateLogic.length === 0) {
          passedLogic++
        } else {
          logicTests.push({
            testcase: 324,
            errorLogic: validateLogic,
          })
        }

      } else if (response.status === 201) {

        expect(data.ok).toEqual(true)
        expect(data.data).not.toBeNull()
        const dtoInstance = plainToClass(UpdateMessageResponse, data);
        const validateLogic = await validateUpdateMessage(dtoInstance, payload);
        if (validateLogic.length === 0) {
          passedLogic++
        } else {
          logicTests.push({
            testcase: 324,
            errorLogic: validateLogic,
          })
        }
      } else if (response.status === 400) {
        const expectJson = [].sort()
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
            testcase: 324,
            code: 400,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: 324,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: 324,
          code: 404,
          errorDetails: errorMessage,
        });
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {

      if (error.message.includes('fetch failed')) {
        console.error('Network or server error:', error.message);
        failedTests.push({
          testcase: 324,
          errorDetails: 'Server down',
        });
        throw new Error('Server down');
      } else if (error.message.includes('Unexpected token')) {
        console.error('Could not resolve permission type', error.message);
        failedTests.push({
          testcase: 324,
          code: 403,
          errorDetails: 'Could not resolve permission type',
        });
        throw new Error(error.message || 'unknown error');
      } else {
        throw new Error(error.message || 'unknown error');
      }
    }
  });

  afterAll(async () => {
    const folderPath = path.join(__dirname, '../reports');

    const folderPathLogic = path.join(__dirname, '../reports/update-message');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    if (!fs.existsSync(folderPathLogic)) {
      fs.mkdirSync(folderPathLogic, { recursive: true });
    }
    const summary = summarizeErrors(failedTests, totalTests, passedLogic);
    const resultContent = `
=== Test Reports for DTO "update-message" ===
Host: ${globalThis.url}
Endpoint: /Message/UpdateMessage
Summary: 
Total Tests: ${totalTests}
Passed Tests: ${passedTests}
Failed Tests: ${failedTests.length}
Status Code:
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
    === Test Reports Logic for DTO "update-message" ===
    Host: ${globalThis.url}
    Endpoint: /Message/UpdateMessage
    Error: 
    ${logicTests.map((logicCaseFail) => `
    - Testcase #${logicCaseFail.testcase}
      Logic Errors: ${logicCaseFail.errorLogic ? JSON.stringify(logicCaseFail.errorLogic) : "''"}`).join('')}}`


    const resultFilePath = path.join(folderPath, 'update-message.txt');
    const resultFilePathLogic = path.join(folderPathLogic, `update-message.${getTime()}.txt`);
    fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
    fs.writeFileSync(resultFilePathLogic, resultLogicError, 'utf-8');
    console.log(`Success: ${resultFilePath}`);
    await executeDelete(undefined, headerRequest)
  });

});

