import { validateSendMessage } from '../validates/send-message/validate-send-message';
import fs from 'fs';
import path from 'path';
import { summarizeErrors, summaryFields, getTime } from '../helps/utils';
import { executeBeforeAllSteps, executeDelete } from '../functions';
import {
  resolveJsonVariables,
  resolveVariables,
} from '../helps/get-resolve-variables';
import { plainToClass } from 'class-transformer';
import { SendMessageResponse } from '../response/send-message.response';

describe('Testcase for send-message', () => {
  let totalTests = 0;
  const passedLogic = 0;
  const failedTests = [];
  const logicTests = [];
  let passedTests = 0;
  let passed200 = 0;
  let headerRequest;
  let testNumber;
  let resolvedData;
  let nextStep = false;
  let messageIdArray;

  beforeAll(async () => {
    await executeBeforeAllSteps([
      "mockUser('duybang12345',1, 0)",
      "createChannel({{token}}, 'channel 1')",
    ]);

    headerRequest = {
      'Content-Type': 'application/json',
      'x-session-token': '{{token}}',
      'x-country-code': 'VN',
    };
  });
  afterEach(async () => {
    if (nextStep === true) {
    }
  });
  it('Test case # 20 with expect errors ["Could not resolve permission type"]', async () => {
    testNumber = 20;
    totalTests++;
    const payloadObj = {
      workspaceId: 12345,
      channelId: '',
      content:
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    };
    resolvedData = resolveJsonVariables(payloadObj);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await fetch(requestUrl, {
        method: 'post',
        headers: resolveJsonVariables(headerRequest),
        body: JSON.stringify(resolvedData),
      });

      const data = await response.json();
      if (response.status === 201) {
        if (data.data) {
          expect(data.ok).toEqual(true);
          expect(data.data).not.toBeNull();
          const dtoInstance = plainToClass(SendMessageResponse, data);
          const validateLogic = await validateSendMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          nextStep = true;
        }
      } else if (response.status === 200) {
        expect(data.ok).toEqual(true);
        if (data.data) {
          const dtoInstance = plainToClass(SendMessageResponse, data);
          const validateLogic = await validateSendMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          expect(data.ok).toEqual(true);
          passed200++;
          passedTests++;
        }
      } else if (response.status === 400) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 400,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          errorDetails: errorMessage,
        });
      } else if (response.status === 403) {
        const expectJson = ['Could not resolve permission type'].sort();
        console.log(data);
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 403,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error.message);

      // if (error.message.includes('fetch failed')) {
      // console.error('Network or server error:', error.message);
      // nextStep = false
      //   failedTests.push({
      //     testcase:testNumber,
      //     errorDetails: 'Server down',
      //   });
      //   throw new Error('Server down');
      // } else if (error.message.includes('Unexpected token')) {
      //   console.error('Could not resolve permission type', error.message);
      //   nextStep = false
      //     failedTests.push({
      //       testcase: testNumber,
      //       code: 403,
      //       errorDetails: 'Could not resolve permission type',
      //     });
      //   throw new Error(error.message || 'unknown error');
      // }else {
      //   throw new Error(error.message || 'unknown error');
      // }
    }
  });

  afterAll(async () => {
    const folderPath = path.join(__dirname, '../reports');

    const folderPathLogic = path.join(__dirname, '../reports/send-message');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    if (!fs.existsSync(folderPathLogic)) {
      fs.mkdirSync(folderPathLogic, { recursive: true });
    }
    const summary = summarizeErrors(
      failedTests,
      totalTests,
      passedLogic,
      passed200,
    );
    const resultContent = `
=== Test Reports for DTO "send-message" ===
Host: ${globalThis.url}
Endpoint: /Message/SendMessage
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
    .map(
      ([error, count]) => `${error}: ${count} 
 `,
    )
    .join('')}
Failed Test Details:
${failedTests
  .map(
    (failCase) => `
  - Testcase #${failCase.testcase}
    Missing Errors: ${failCase.missing ? JSON.stringify(failCase.missing) : "''"}
    Status Code: ${failCase.code ? JSON.stringify(failCase.code) : "''"}
    Extra Errors: ${failCase.extra ? JSON.stringify(failCase.extra) : "''"}
    Detail Errors: ${failCase.errorDetails ? JSON.stringify(failCase.errorDetails) : "''"}`,
  )
  .join('')}`;

    const resultLogicError = `
    === Test Reports Logic for DTO "send-message" ===
    Host: ${globalThis.url}
    Endpoint: /Message/SendMessage
    Error: 
    ${logicTests
      .map(
        (logicCaseFail) => `
    - Testcase #${logicCaseFail.testcase}
      Logic Errors: ${logicCaseFail.errorLogic ? JSON.stringify(logicCaseFail.errorLogic) : "''"}
  `,
      )
      .join('')}`;

    const resultFilePath = path.join(folderPath, 'send-message.txt');
    const resultFilePathLogic = path.join(
      folderPathLogic,
      `send-message.${getTime()}.txt`,
    );
    fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
    fs.writeFileSync(resultFilePathLogic, resultLogicError, 'utf-8');
    console.log(`Success: ${resultFilePath}`);
    // await executeDelete(["deleteMessageForEveryone('0', {{channelId}}, {{messageId}})"], headerRequest)
  });
});
