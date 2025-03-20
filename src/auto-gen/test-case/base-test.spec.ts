/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import fs from 'fs';
import path from 'path';
import { summarizeErrors, getTime } from '../helps/utils';
import { executeBeforeAllSteps } from '../functions';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

describe('Testcase for send-message', () => {
  let totalTests = 0;
  let passedLogic = 0;
  let failedTests = [];
  let logicTests = [];
  let passedTests = 0;
  let passed200 = 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let headerRequest;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let testNumber;
  let resolvedData;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let nextStep = false;
  let failedStep = [];

  beforeAll(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const beforeStep = await executeBeforeAllSteps([
        "mockUser(body: { prefix: 'duy12345',quantity: 1,badge: 0 }, expect: {})",
        "createChannel(body: {name: 'channel 1', workspaceId: '0'}, header: {token: '{{mockUser.token}}'}, expect: {isContent: '%s created this channel', isOwner: '{{mockUser.userId}}'})",
        "getChannel(body: {workspaceId: '0', channelId: '{{createChannel.channelId}}'}, header: {token: '{{mockUser.token}}'}, expect: {countMember: 1, countMessage: 1, isChannelId: '{{createChannel.channelId}}',isLastMessage: '{{createChannel.messageId}}', isContent: '{{createChannel.contentChannel}}', isOwner: '{{mockUser.userId}}'})",
      ]);
    failedStep.push({
      error: beforeStep
    });
    headerRequest = {
      'Content-Type': 'application/json',
      'x-session-token': '{{token}}',
      'x-country-code': 'VN',
    };
  });

  it('test asas', async () => {
    expect(10).toEqual(10);
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
Summary: \n
Total Tests: ${totalTests}
Passed Tests: ${passedTests}
Failed Tests: ${failedTests.length}

Step Log: ${failedStep
  .map(failStep => {
    const errorMessage = failStep.error ? `Error: ${JSON.stringify(failStep.error, null, 2)}` : 'No Error';
    return `${errorMessage}`;
  })
  .join('')}


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
    // await executeDelete(
    //   ["deleteMessageForEveryone('0', {{channelId}}, {{messageId}})"],
    //   headerRequest,
    // );
  });
});
