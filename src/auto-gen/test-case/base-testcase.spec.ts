
import { validateSendMessage } from '../validates/send-message/validate-send-message';
import fs from 'fs';
import path from 'path';
import { summarizeErrors, summaryFields } from '../helps/utils';
import { executeBeforeAllSteps, executeDelete } from '../functions';
import { resolveJsonVariables } from '../helps/get-resolve-variables';
import { plainToClass } from 'class-transformer';
import { SendMessageResponse } from '../dto-response/send-message.response';
import { AddMessageReactionResponse } from '../dto-response/add-message-reaction.response';
import { validateAddMessageReaction } from '../validates/add-message-reaction/validate-add-message-reaction';
import { UpdateMessageResponse } from '../dto-response/update-message.response';
import { validateUpdateMessage } from '../validates/update-message/validate-update-message';
import { QuoteMessageResponse } from '../dto-response/quote-message.response';
import { validateQuoteMessage } from '../validates/quote-message/validate-quote-message';

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
    const payloadObj =  {
      workspaceId: '0',
      channelId: '01JNJGK35DXEDFR5M8FV7MMRN5',
      messageId: '01JNJGK5W1ZZBBEK4461NRYET8',
      content: 'sssss'
    }
    const payload = resolveJsonVariables(payloadObj)
    // try {
    //   const response = await fetch(`${globalThis.url}/Message/SendMessage`,
    //     {
    //       method: 'post',
    //       headers: resolveJsonVariables(headerRequest),
    //       body: JSON.stringify(payload)
    //     })

    // const data = await response.json();

    const fakedata = {
      "ok": true,
      "data": {
          "message": {
              "workspaceId": "0",
              "channelId": "01JNJGK35DXEDFR5M8FV7MMRN5",
              "messageId": "01JNJQTRATZBGDA38AW19HZECJ",
              "userId": "01JNJGGWHSVV473JN9CW9S7GA5",
              "content": "sssss",
              "messageType": 0,
              "messageStatus": 1,
              "originalMessage": {
                  "messageId": 1212121122121212,
                  "content": "ssssssssss",
                  "attachmentType": 0,
                  "messageType": 0,
                  "contentLocale": "UNS",
                  "userId": "01JNJGGWHSVV473JN9CW9S7GA5",
                  "editTime": "2025-03-05T07:45:15.285Z",
                  "createTime": "2025-03-05T06:41:22.305Z",
                  "updateTime": "2025-03-05T07:45:15.311Z"
              },
              "attachmentType": 0,
              "isThread": false,
              "reportCount": 0,
              "isReported": false,
              "attachmentCount": 0,
              "contentLocale": "UNS",
              "isPinned": false,
              "createTime": "2025-03-05T08:47:50.618Z",
              "updateTime": "2025-03-05T08:47:50.618Z",
              "ref": "ref"
          }
      },
      "includes": {
          "users": [
              {
                  "userId": "01JNJGGWHSVV473JN9CW9S7GA5",
                  "username": "duybang1234501JNJGGWHSVV473JN9CW9S7GA5",
                  "createTime": "2025-03-05T06:40:07.226Z",
                  "updateTime": "2025-03-05T06:40:07.226Z",
                  "profile": {
                      "avatar": "https://avatars.githubusercontent.com/u/47580576",
                      "displayName": "conforto",
                      "originalAvatar": "https://avatars.githubusercontent.com/u/47580576",
                      "avatarType": 1,
                      "userBadgeType": 0
                  },
                  "userType": 0,
                  "presenceData": {
                      "lastUpdateTime": "2025-03-05T06:40:07.226Z",
                      "lastUpdateInSeconds": 7664,
                      "presenceState": 4
                  }
              }
          ],
          "channels": [
              {
                  "workspaceId": "0",
                  "channelId": "01JNJGK35DXEDFR5M8FV7MMRN5",
                  "userId": "01JNJGGWHSVV473JN9CW9S7GA5",
                  "name": "channel 1",
                  "isPrivate": true,
                  "type": 1,
                  "invitationLink": "https://zii.chat/i/8sNcwIPESWlTLxS",
                  "totalMembers": 1,
                  "createTime": "2025-03-05T06:41:19.533Z",
                  "updateTime": "2025-03-05T06:41:19.727Z"
              }
          ],
          "members": [
              {
                  "workspaceId": "0",
                  "channelId": "01JNJGK35DXEDFR5M8FV7MMRN5",
                  "userId": "01JNJGGWHSVV473JN9CW9S7GA5",
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
                  "createTime": "2025-03-05T06:41:19.571Z",
                  "updateTime": "2025-03-05T06:41:19.571Z"
              }
          ],
          "channelMetadata": [
              {
                  "unreadCount": 0,
                  "lastMessageId": "01JNJQTRATZBGDA38AW19HZECJ",
                  "notificationStatus": true,
                  "mediaPermissionSetting": 0,
                  "workspaceId": "0",
                  "channelId": "01JNJGK35DXEDFR5M8FV7MMRN5"
              }
          ]
      }
  }

    const dtoInstance = plainToClass(QuoteMessageResponse, fakedata);
    const validateLogic = await validateQuoteMessage(dtoInstance, payload);
    console.log(validateLogic)
  });
})


