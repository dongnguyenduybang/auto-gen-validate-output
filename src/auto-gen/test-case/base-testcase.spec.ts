
import { validateRevokeMessageReaction } from '../validates/revoke-message-reaction/validate-revoke-message-reaction';
import fs from 'fs';
import path from 'path';
import { summarizeErrors, summaryFields, getTime } from '../helps/utils';
import { executeBeforeAllSteps, executeDelete } from '../functions';
import { resolveJsonVariables } from '../helps/get-resolve-variables';
import { plainToClass } from 'class-transformer';
import { RevokeMessageReactionResponse } from '../dto-response/revoke-message-reaction.response';

describe('Testcase for revoke-message-reaction', () => {
  let totalTests = 0;
  let passedLogic = 0;
  let failedTests = [];
  let logicTests = [];
  let passedTests = 0
  let passed200 = 0
  let headerRequest

  beforeAll(async () => {

    // await executeBeforeAllSteps(["mockUser('duybang12345',1, 0)", "createChannel({{token}}, 'channel 1')", "sendMessage({{token}}, 0, {{channelId}}, 'test123', 'ref')", "addMessageReaction({{token}}, 0, {{channelId}}, {{messageId}}, '💀')"])

    // headerRequest = { "Content-Type": "application/json", "x-session-token": "{{token}}", "x-country-code": "VN" }

  })
  it('Test case #81 with expect errors [] ', async () => {
    totalTests++;
    const payloadObj = { "workspaceId": "0", "channelId": "01JNZAPK4V08A00FVX1VMT0AGP", "messageId": "01JNZAPQFNA3W4EWBJ3ECMWN7Z", "emoji": "👀" };
    const resolvedData = resolveJsonVariables(payloadObj);
    const requestUrl = `${globalThis.url}/Message/RevokeMessageReaction`;
    try {

      const datas = {
        "ok": true,
        "data": {
            "message": {
                "workspaceId": "0",
                "channelId": "01JNZAPK4V08A00FVX1VMT0AGP",
                "messageId": "01JNZAPQFNA3W4EWBJ3ECMWN7Z",
                "userId": "01JNZAP535S86E958RTJEKE02F",
                "content": "aaaaaaaa",
                "messageType": 0,
                "messageStatus": 1,
                "reactions": {
                    "🫣": {
                        "isReacted": true,
                        "total": 1
                    },
                    "👀": {
                      "isReacted": true,
                      "total": 1
                    }
                },
                "attachmentType": 0,
                "isThread": false,
                "reportCount": 0,
                "isReported": false,
                "attachmentCount": 0,
                "contentLocale": "UNS",
                "isPinned": false,
                "createTime": "2025-03-10T06:08:34.804Z",
                "updateTime": "2025-03-10T07:09:00.353Z"
            }
        },
        "includes": {
            "users": [
                {
                    "userId": "01JNZAP535S86E958RTJEKE02F",
                    "username": "testfake01JNZAP535S86E958RTJEKE02F",
                    "createTime": "2025-03-10T06:08:15.974Z",
                    "updateTime": "2025-03-10T06:08:15.974Z",
                    "profile": {
                        "avatar": "https://avatars.githubusercontent.com/u/76012173",
                        "displayName": "quae",
                        "originalAvatar": "https://avatars.githubusercontent.com/u/76012173",
                        "avatarType": 1,
                        "userBadgeType": 0
                    },
                    "userType": 0,
                    "presenceData": {
                        "lastUpdateTime": "2025-03-10T06:08:15.974Z",
                        "lastUpdateInSeconds": 3644,
                        "presenceState": 4
                    }
                }
            ],
            "channels": [
                {
                    "workspaceId": "0",
                    "channelId": "01JNZAPK4V08A00FVX1VMT0AGP",
                    "userId": "01JNZAP535S86E958RTJEKE02F",
                    "name": "DEV01-test",
                    "isPrivate": true,
                    "type": 1,
                    "invitationLink": "https://zii.chat/i/QX51692qfkwsd5g",
                    "totalMembers": 1,
                    "createTime": "2025-03-10T06:08:30.364Z",
                    "updateTime": "2025-03-10T06:08:30.647Z"
                }
            ],
            "members": [
                {
                    "workspaceId": "0",
                    "channelId": "01JNZAPK4V08A00FVX1VMT0AGP",
                    "userId": "01JNZAP535S86E958RTJEKE02F",
                    "nickname": "",
                    "role": "owner",
                    "roles": [
                        {
                            "role": "owner",
                            "weight": 0
                        },
                        {
                            "role": "everyone",
                            "weight": 2
                        }
                    ],
                    "createTime": "2025-03-10T06:08:30.462Z",
                    "updateTime": "2025-03-10T06:08:30.462Z"
                }
            ],
            "channelMetadata": [
                {
                    "unreadCount": 0,
                    "lastMessageId": "01JNZAPQFNA3W4EWBJ3ECMWN7Z",
                    "notificationStatus": true,
                    "mediaPermissionSetting": 0,
                    "workspaceId": "0",
                    "channelId": "01JNZAPK4V08A00FVX1VMT0AGP"
                }
            ]
        }
    }
    const dtoInstance = plainToClass(RevokeMessageReactionResponse, datas);
    const validateLogic = await validateRevokeMessageReaction(dtoInstance,resolvedData);

    } catch (error) {

      if (error.message.includes('fetch failed')) {
        console.error('Network or server error:', error.message);
        failedTests.push({
          testcase: 81,
          errorDetails: 'Server down',
        });
        throw new Error('Server down');
      } else if (error.message.includes('Unexpected token')) {
        console.error('Could not resolve permission type', error.message);
        failedTests.push({
          testcase: 81,
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

    const folderPathLogic = path.join(__dirname, '../reports/revoke-message-reaction');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    if (!fs.existsSync(folderPathLogic)) {
      fs.mkdirSync(folderPathLogic, { recursive: true });
    }
    const summary = summarizeErrors(failedTests, totalTests, passedLogic, passed200);
    const resultContent = `
=== Test Reports for DTO "revoke-message-reaction" ===
Host: ${globalThis.url}
Endpoint: /Message/RevokeMessageReaction
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
    === Test Reports Logic for DTO "revoke-message-reaction" ===
    Host: ${globalThis.url}
    Endpoint: /Message/RevokeMessageReaction
    Error: 
    ${logicTests.map((logicCaseFail) => `
    - Testcase #${logicCaseFail.testcase}
      Logic Errors: ${logicCaseFail.errorLogic ? JSON.stringify(logicCaseFail.errorLogic) : "''"}`).join('')}`


    const resultFilePath = path.join(folderPath, 'revoke-message-reaction.txt');
    const resultFilePathLogic = path.join(folderPathLogic, `revoke-message-reaction.${getTime()}.txt`);
    fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
    fs.writeFileSync(resultFilePathLogic, resultLogicError, 'utf-8');
    console.log(`Success: ${resultFilePath}`);
    await executeDelete(undefined, headerRequest)
  });

});

