
import fs from 'fs';
import path from 'path';
import { readJsonFile, summarizeErrors, summaryFields } from '../helps/utils';
import { resolveJsonVariables } from '../helps/get-resolve-variables';
import { executeBeforeAllSteps, executeDelete } from '../functions';
import { plainToClass } from 'class-transformer';
import { validate, validateOrReject } from 'class-validator';
import { MockMessageResponse } from '../dto-response/mock-message.response.dto';
import { validateMockMessage } from '../validates/mock-message/validate-mock-message';
import { UserResponse } from '../dto-response/mock-user.response.dto';
import { MockChannelResponse } from '../dto-response/mock-channel.response.dto';
import { validateDecorators } from '../validates/basetest-logic';
import { request } from 'http';


describe('Template testcase', () => {
  let totalTests = 0;
  let passedLogic = 0;
  const failedTests = [];
  let passedTests = 0;
  let headersRequest;
  let payload
  let requestConfig

  beforeAll(async () => {
    const requestPath =
      'src/auto-gen/dtos/mock-message/mock-message.request.json';
    requestConfig = readJsonFile(requestPath);
    console.log(requestConfig)
    await executeBeforeAllSteps([ "mockUser('duy123456',1, 0)", 
      "createChannel({{token}}, 'channel 1')"]);

    headersRequest = {
      "Content-Type": "application/json",
      // "x-user-id": "01JNDMHSP0TEDS3XZ07DG7DR6Q",
      // "x-session-token": "{{token}}",
      // "x-country-code": "VN"
    };
  });

  it('Test case #1 with expect errors', async () => {
    totalTests++;
    const payloadObj = { "workspaceId": "0", "channelId": "{{channelId}}", "quantity": 1 };
    const payload = resolveJsonVariables(payloadObj)
    console.log(payload)

    try {
      const response = await fetch(`${globalThis.url}${requestConfig.path}`,
        {
          method: `${requestConfig.method}`,
          headers: resolveJsonVariables(headersRequest),
          body: JSON.stringify(payload)
        })
        
        console.log(response)
      const data = await response.json();
      console.log(data)
      if (response.status === 201) {

        expect(data.ok).toEqual(true)
        expect(data.data).not.toBeNull()
        const dtoInstance = plainToClass(MockMessageResponse, data);
        const validateLogic = validateMockMessage(dtoInstance, payload)


      } 
    } catch (error) {

      if (error.message.includes('fetch failed')) {
        console.error('Network or server error:', error.message);
        failedTests.push({
          testcase: 1,
          errorDetails: 'Server down',
        });
        throw new Error('Server down');
      } else if (error.message.includes('Unexpected token')) {
        console.error('Could not resolve permission type', error.message);
        failedTests.push({
          testcase: 1,
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

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    const summary = summarizeErrors(failedTests, totalTests, passedLogic);
    const resultContent = `
                === Test Reports for DTO "send-message" ===
                Host: ${globalThis.url}
                Endpoint: /Message/SendMessage
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
        .map(([error, count]) => `${error}: ${count}`)
        .join('')}
                Failed Test Details:
                ${failedTests
        .map(
          (failCase) => `
                - Testcase #${failCase.testcase}
                Missing Errors: ${failCase.missing ? JSON.stringify(failCase.missing) : "''"}
                Status Code: ${failCase.code ? JSON.stringify(failCase.code) : "''"}
                Extra Errors: ${failCase.extra ? JSON.stringify(failCase.extra) : "''"}
                Detail Errors: ${failCase.errorDetails ? JSON.stringify(failCase.errorDetails) : "''"}
                                `,
        )
        .join('')}
                                `;

    const resultFilePath = path.join(folderPath, 'base-testcase.txt');

    fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
    console.log(`Success: ${resultFilePath}`);


    // await executeDelete(
    //   ["deleteMockChannel({{prefix}}, '0', '0')"],
    //   headersRequest,
    // )

  });
});
