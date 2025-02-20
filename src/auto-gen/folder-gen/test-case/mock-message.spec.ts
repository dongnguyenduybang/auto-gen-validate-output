
    import axios from 'axios';
    import { plainToInstance } from 'class-transformer';
    import { MockMessageDTOResponse } from '../../dto-response/mock-message.response.dto';
    import { validate } from 'class-validator';
    import { validationRulesMockMessage } from '../../validates/mock-message/validate-mock-message';
    import { validateLogicData } from '../../validates/validate-logic';
    import fs from 'fs';
    import path from 'path';

  function analyzeErrors(expected: string[], actual: string[]) {
    const missing = expected.filter((error) => !actual.includes(error)); 
    const extra = actual.filter((error) => !expected.includes(error));
    return { missing, extra };
  }

    describe('Testcase for mock-message', () => {
        let totalTests = 0;
        let passedTests = 0;
        let failedTests = [];
          it('Test case #110 with expect errors [] ', async () => {
            totalTests++;
            const payload = {"workspaceId":"0","channelId":"01JMGGW4E77DY2KP2CS5R1KZVV","quantity":1};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockMessages`, 
                headers: {},
                data: {"workspaceId":"0","channelId":"01JMGGW4E77DY2KP2CS5R1KZVV","quantity":1}
              });
              console.log(response.data)
              const dataResponse = plainToInstance(MockMessageDTOResponse , response.data);

              const errors = await validate(dataResponse);
             
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #110',
                  expected: [],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const data = {
                  "ok": true,
                  "data": [
                      "01JMGJ9VRKRF0C392JK1VJ67TT", "01JMGJ9VRKRF0C392JK1VJ67TT"
                  ]
              }

                const result = validateLogicData(data, validationRulesMockMessage, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = [];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #110',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

          it('Test case #112 with expect errors ["quantity must not be greater than 100"] ', async () => {
            totalTests++;
            const payload = {"workspaceId":"0","channelId":"01JMGGW4E77DY2KP2CS5R1KZVV","quantity":101};
            try {
              const response = await axios({
                method: 'post',
                url: `${globalThis.url}/InternalFaker/MockMessages`, 
                headers: {},
                data: {"workspaceId":"0","channelId":"01JMGGW4E77DY2KP2CS5R1KZVV","quantity":101}
              });
              const dataResponse = plainToInstance(MockMessageDTOResponse , response.data.data[0]);
              const errors = await validate(dataResponse);
              if (errors.length > 0) {
                console.error("validation failed:", errors);
                failedTests.push({
                  name: 'Test case #112',
                  expected: ["quantity must not be greater than 100"],
                  actual: errors.map(err => err.toString())
                });
                throw new Error('Validation failed');
              } else {
                const result = validateLogicData(dataResponse, validationRulesMockMessage, payload);
                console.log(result);
                passedTests++;
              }
            } catch (error) {
              const expectedError = ["quantity must not be greater than 100"];
              const actualError = error.response?.data?.error?.details || [];
              const sortedReceived = [...actualError].sort();
              const sortedExpected = [...expectedError].sort();

              if (JSON.stringify(sortedReceived) !== JSON.stringify(sortedExpected)) {
                const { missing, extra } = analyzeErrors(expectedError, actualError);
                failedTests.push({
                  name: 'Test case #112',
                  expected: expectedError,
                  actual: actualError,
                  missing,
                  extra
                });
                throw new Error('Test case failed');
              } else {
                passedTests++;
              }
            }
          });

        afterAll(() => {
          const folderPath = path.join(__dirname, '../reports');

          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
          }

          const resultContent = `
              === Test Reports for DTO "mock-message" ===
              Host: ${globalThis.url}              Endpoint: /InternalFaker/MockMessages
              Total Tests: ${totalTests}
              Passed Tests: ${passedTests}
              Failed Tests: ${failedTests.length}

              Failed Test Details:
              ${failedTests
                .map(
                  (failCase) => `
              - ${failCase.name}
                Expected: ${JSON.stringify(failCase.expected)}
                Actual:   ${JSON.stringify(failCase.actual)}
                Missing Errors: ${JSON.stringify(failCase.missing)}
                Extra Errors: ${JSON.stringify(failCase.extra)}
              `
                )
                .join('')}
              `;

               const resultFilePath = path.join(folderPath, 'mock-message.txt');

                        fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
                        console.log(`Success: ${resultFilePath}`);
                      });
                    });
                