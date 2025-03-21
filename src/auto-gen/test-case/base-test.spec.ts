/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
import { executeBeforeAllSteps } from '../functions';
import { TestContext } from '../text-context';
import path from 'path';
import fs from 'fs';
import { plainToClass } from 'class-transformer';
import { SendMessageResponse } from '../response/send-message.response';
import { validateResponses } from '../validates/validate-response';
import axios from 'axios';
import { resolveObject } from '../helps/get-resolve-variables';
let globalContext, headerRequest;
let failedStep = [];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let nextStep;

beforeAll(async () => {
  globalContext = new TestContext();
  const beforeStep = await executeBeforeAllSteps(
    [
      "mockUser(body: { prefix: 'duy12345',quantity: 1,badge: 0 }, expect: {})",
      "createChannel(body: {name: 'channel 1', workspaceId: '0'}, header: {token: '{{mockUser.token}}'}, expect: {isOwner: '{{mockUser.userId}}' } )",
      "getChannel(body: {workspaceId: '0', channelId: '{{createChannel.isChannelId}}'}, header: {token: '{{mockUser.token}}'}, expect: {countMember: 1, countMessage: 1, isChannelId: '{{createChannel.isChannelId}}',isLastMessage: '{{createChannel.messageId}}', isContent: '{{createChannel.isContent}}', isOwner: '{{mockUser.userId}}'})"
    ],
    globalContext
  );
  failedStep.push({
    error: beforeStep,
  });
  headerRequest = {
    'Content-Type': 'application/json',
    'x-session-token': '{{mockUser.token}}',
    'x-country-code': 'VN',
  };
});

it('Test case # 43 with expect errors []', async () => {
  const payloadObj: any = {
    workspaceId: '0',
    channelId: '{{getChannel.isChannelId}}',
    content: 'test123123',
  };

  const resolvedPayload = resolveObject(payloadObj, globalContext);
  const resolvedHeader = resolveObject(headerRequest, globalContext);
  console.log(resolvedHeader);
  const response = await axios.post(
    `${globalThis.url}/Message/SendMessage`,
    resolvedPayload,
    {
      headers: {
        ...resolvedHeader
      },
    },
  );
  const validatedResponse = plainToClass(SendMessageResponse, response.data);
  const result = validateResponses(validatedResponse, SendMessageResponse);
  if (result.length !== 0) {
    
  } else {
    const response = validatedResponse.data.message
    const sendMessageContext = {
      messageId: response.messageId,
      content: response.content,
      channelId: response.channelId,
      senderId: response.userId,
      expect: {},
    };
    globalContext.setStepContext('sendMessage', sendMessageContext);
    nextStep = true;
  };
});
afterAll(async () => {

  if(nextStep === true){
    const afterAllStep = await executeBeforeAllSteps(
      [
         "getListMessage(body: { workspaceId: '0', channelId: '{{sendMessage.channelId}}' }, header: {token: '{{mockUser.token}}' }, expect: {isLastMessage: '{{sendMessage.messageId}}', isLastContent: '{{sendMessage.content}}', isSender: '{{sendMessage.senderId}}' })"
      ],
      globalContext
    );
    failedStep.push({
      error: afterAllStep,
    });
  }

  const folderPath = path.join(__dirname, '../reports');

  const folderPathLogic = path.join(__dirname, '../reports/send-message');
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  if (!fs.existsSync(folderPathLogic)) {
    fs.mkdirSync(folderPathLogic, { recursive: true });
  }
  const resultContent = `
=== Test Reports for DTO "send-message" ===
Host: ${globalThis.url}
Endpoint: /Message/SendMessage
Step Log: ${failedStep
    .map((failStep) => {
      const errorMessage = failStep.error
        ? `Error: ${JSON.stringify(failStep.error, null, 2)}`
        : 'No Error';
      return `${errorMessage}`;
    })
    .join('')}
    `;

  const resultFilePath = path.join(folderPath, 'send-message.txt');
  fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
  console.log(`Success: ${resultFilePath}`);
  // await executeDelete(
  //   ["deleteMessageForEveryone('0', {{channelId}}, {{messageId}})"],
  //   headerRequest,
  // );
});
