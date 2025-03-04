
import { validateSendMessage } from '../validates/send-message/validate-send-message';
import fs from 'fs';
import path from 'path';
import { summarizeErrors, summaryFields } from '../helps/utils';
import { executeBeforeAllSteps, executeDelete } from '../functions';
import { resolveJsonVariables } from '../helps/get-resolve-variables';
import { plainToClass } from 'class-transformer';
import { SendMessageResponse } from '../dto-response/send-message.response';

describe('Testcase for send-message', () => {
  let totalTests = 0;
  let passedLogic = 0;
  let failedTests = [];
  let passedTests = 0
  let headerRequest

  beforeAll(async () => {

    await executeBeforeAllSteps(["mockUser('duy123456',1, 0)", "createChannel({{token}}, 'channel 1')"])

    headerRequest = { "Content-Type": "application/json", "x-session-token": "{{token}}", "x-country-code": "VN" }

  })

  it('Test case #1 with expect ', async () => {
    totalTests++;
    const payloadObj = {
      "workspaceId": "0",
      "channelId": "01JNFXFERG0874MNQS7MTYV7FH",
      "content": "test123",
      "ref": "ref"
    }
    const payload = resolveJsonVariables(payloadObj)
    //  try {
    // const response = await fetch(`${globalThis.url}/Message/SendMessage`,
    //   {
    //     method: 'post',
    //     headers: resolveJsonVariables(headerRequest),
    //     body: JSON.stringify(payload)
    //   })

    // const data = await response.json();
    const fakedata = {
      "ok": true,
      "data": {
          "message": {
              "workspaceId": "0",
              "channelId": "01JNFXFERG0874MNQS7MTYV7FH",
              // "messageId": "01JNG8WWVYZRYQNT9QAA27DV0A",
              // "userId": "01JNFKSPA48YFGEX7X1A7KT9F0",
              "content": "test123",
              "messageType": 0,
              "messageStatus": 1,
              "attachmentType": 0,
              "isThread": false,
              "reportCount": 0,
              "isReported": false,
              "attachmentCount": 0,
              "contentLocale": "UNS",
              "isPinned": false,
              "createTime": "2025-03-04T09:48:23.294Z",
              "updateTime": "2025-03-04T09:48:23.294Z",
              "ref": "ref"
          }
      },
      "includes": {
          "users": [
              {
                  "userId": "01JNFKSPA48YFGEX7X1A7KT9F0",
                  "username": "duybang1234501JNFKSPA48YFGEX7X1A7KT9F0",
                  "createTime": "2025-03-04T03:39:38.181Z",
                  "updateTime": "2025-03-04T03:39:38.181Z",
                  "profile": {
                      "avatar": "https://avatars.githubusercontent.com/u/44337421",
                      "displayName": "vinitor thermae mollitia",
                      "originalAvatar": "https://avatars.githubusercontent.com/u/44337421",
                      "avatarType": 1,
                      "userBadgeType": 0
                  },
                  "userType": 0,
                  "presenceData": {
                      "lastUpdateTime": "2025-03-04T03:39:38.181Z",
                      // "lastUpdateInSeconds": 22125,  
                      "presenceState": 4
                  }
              }
          ],
          "channels": [
              {
                  "workspaceId": "0",
                  "channelId": "01JNFXFERG0874MNQS7MTYV7FH",
                  "userId": "01JNFKSPA48YFGEX7X1A7KT9F0",
                  "name": "channel 1",
                  "isPrivate": true,
                  "type": 1,
                  "invitationLink": "https://zii.chat/i/dLf8vD3dq0QAITP",
                  "totalMembers": 1,
                  "createTime": "2025-03-04T06:28:48.528Z",
                  "updateTime": "2025-03-04T06:28:48.717Z"
              }
          ],
          "members": [
              {
                  "workspaceId": "0",
                  "channelId": "01JNFXFERG0874MNQS7MTYV7FH",
                  "userId": "01JNFKSPA48YFGEX7X1A7KT9F0",
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
                  "createTime": "2025-03-04T06:28:48.570Z",
                  "updateTime": "2025-03-04T06:28:48.570Z"
              }
          ],
          "channelMetadata": [
              {
                  "unreadCount": 0,
                  "lastMessageId": "01JNG8WWVYZRYQNT9QAA27DV0A",
                  "notificationStatus": true,
                  "mediaPermissionSetting": 0,
                  "workspaceId": "0",
                  "channelId": "01JNFXFERG0874MNQS7MTYV7FH"
              }
          ]
      }
  }
  
  // Chuyển đổi plain object thành class instance
  const sendMessageResponse = plainToClass(SendMessageResponse, fakedata);
  
  // Validate dữ liệu
  const errors = validateSendMessage(sendMessageResponse,payload);
  console.log(errors);

    //   if(response.status === 201){

    //       expect(data.ok).toEqual(true)
    //       expect(data.data).not.toBeNull()
    //       const dtoInstance = plainToClass(SendMessageResponse, fakedata);
    //       const validateLogic = await validateSendMessage(dtoInstance, payload);
    //       expect(validateLogic).toHaveLength(0); 
    //   }else if(response.status === 400){
    //     const expectJson =  ["workspaceId should not be empty","channelId should not be empty","content should not be empty"].sort()
    //     const expectDetails = Array.isArray(data?.error?.details)
    //       ? data.error.details
    //       : [];
    //     const softExpectDetails = [...expectDetails].sort();
    //     try {
    //       expect(data.ok).toEqual(false);
    //       expect(data.data).toEqual(null);
    //       expect(expectJson).toEqual(softExpectDetails);
    //       passedTests++;
    //     } catch (error) {
    //        const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
    //       failedTests.push({
    //         testcase: 1,
    //         code: 400,
    //         missing: missing || [],
    //         extra: extra || []
    //       })
    //       throw new Error(error);
    //     }
    //   }else if (response.status === 500){
    //     const errorMessage = data.error?.details;
    //     failedTests.push({
    //       testcase: 1,
    //       code: 500,
    //       errorDetails: errorMessage,
    //     });
    //     throw new Error(errorMessage);
    //   }else if (response.status === 404){
    //     const errorMessage = data.error?.details;
    //     failedTests.push({
    //       testcase: 1,
    //       code: 404,
    //       errorDetails: errorMessage,
    //     });
    //   } else {
    //     console.log('unexpected:', data);
    //     throw new Error(data);
    //   }
    // }catch (error){

    //   if (error.message.includes('fetch failed')) {
    //    console.error('Network or server error:', error.message);
    //     failedTests.push({
    //       testcase: 1,
    //       errorDetails: 'Server down',
    //     });
    //     throw new Error('Server down');
    //   } else if (error.message.includes('Unexpected token')) {
    //     console.error('Could not resolve permission type', error.message);
    //       failedTests.push({
    //         testcase: 1,
    //         code: 403,
    //         errorDetails: 'Could not resolve permission type',
    //       });
    //     throw new Error(error.message || 'unknown error');
    //   }else {
    //     throw new Error(error.message || 'unknown error');
    //   }
    // }
    // });
  })
})

