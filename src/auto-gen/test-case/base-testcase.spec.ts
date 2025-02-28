import { validateSendMessageResponse } from '../validates/send-message/validate-send-message';
import fs from 'fs';
import path from 'path';
import { readJsonFile, summarizeErrors, summaryFields } from '../helps/utils';
import { resolveJsonVariables } from '../helps/get-resolve-variables';
import { executeBeforeAllSteps, executeDelete } from '../functions';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { validateMockChannelResponse } from '../validates/mock-channel/validate-mock-channel';
import { MockMessageDTOResponse } from '../dto-response/mock-message.response.dto';
import { validateMockMessageResponse } from '../validates/mock-message/validate-mock-message';
import { MockUserDTOResponse } from '../dto-response/mock-user.response.dto';
import { validateMockUserResponse } from '../validates/mock-user/validate-mock-user';
import { MockChannelDTOResponse } from '../dto-response/mock-channel.response.dto';

describe('Template testcase', () => {
  let totalTests = 0;
  let passedLogic = 0;
  const failedTests = [];
  let passedTests = 0;
  let headersRequest;
  let payload

  beforeAll(async () => {
    const requestPath =
      'src/auto-gen/dtos/mock-channel/mock-channel.request.json';
    const requestConfig = readJsonFile(requestPath);

    await executeBeforeAllSteps(requestConfig.beforeAll);

    headersRequest = {
      "Content-Type": "application/json",
      "x-user-id": "{{userId}}",
      "x-session-token": "{{token}}",
      "x-country-code": "VN"
    };
  });

  it('Base Test Case', async () => {
    totalTests++;
    const payloadObj =  {
      "prefix": "duy12345",
      "quantity": 2,
      "totalMessages": 1,
      "typeChannel": 1
    };

    payload = resolveJsonVariables(payloadObj);

    try {
      const response = await fetch(`${globalThis.url}/InternalFaker/MockChannels`, {
        method: 'post',
        headers: resolveJsonVariables(headersRequest),
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.status === 201) {

        expect(data.ok).toEqual(true);
        expect(data.data).not.toBeNull();

        const dtoInstance = plainToClass(MockChannelDTOResponse, data);
        const validationErrors = await validate(dtoInstance);
        if (validationErrors.length > 0) {
          validationErrors.forEach((error) => {
            console.log(`Field "${error.property}" ${Object.values(error.constraints).join(', ')}`);
          });
        } else {

          const validateLogic = validateMockChannelResponse(dtoInstance, payload);

          if (validateLogic.isValid === true) {
            expect(validateLogic.isValid).toEqual(true);
            passedLogic++;
            passedTests++;
            console.log('validate successfully')
          } else {
            failedTests.push({
              testcase: 1,
              errorDetails: validateLogic.errors || [],
            });
            throw new Error('Validate logic failed');
          }
        }

      } else if (response.status === 400) {
        const expectJson = [].sort();
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
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          failedTests.push({
            testcase: 1,
            code: 400,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: 1,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: 1,
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
        throw new Error(error.message);
      } else {

        throw new Error(error);
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


      await executeDelete(
        ["deleteMockChannel({{prefix}}, '0', '1')"],
        headersRequest,
      )

  });
});
