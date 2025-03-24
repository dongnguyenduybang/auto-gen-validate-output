/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
import { executeAllSteps } from '../functions';
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
  const beforeStep = await executeAllSteps(
    [
     "mockUser(body: { prefix: 'duy12345',quantity: 2,badge: 0 }, expect: {})",
    "createChannel(body: {name: 'channel 1', workspaceId: '0'}, header: {token: '{{mockUser[0].token}}'}, expect: {isOwner: '{{mockUser[0].userId}}' } )",
    "getChannel_1(body: {workspaceId: '0', channelId: '{{createChannel.isChannelId}}'}, header: {token: '{{mockUser[0].token}}'}, expect: {countMember: 1, countMessage: 1, isChannelId: '{{createChannel.isChannelId}}',isLastMessage: '{{createChannel.messageId}}', isContent: '{{createChannel.isContent}}', isOwner: '{{mockUser[0].userId}}'})"
    ],
    globalContext
  );
  failedStep.push({
    error: beforeStep,
  });
  if (beforeStep.some(step => !step.success)) {
    throw new Error(`Setup failed: ${JSON.stringify(beforeStep)}`);
  }
 
  headerRequest = {
    'Content-Type': 'application/json',
    'x-session-token': '{{mockUser[0].token}}',
    'x-country-code': 'VN',
  };
});

it('Test case # 43 with expect errors []', async () => {
  const payloadObj: any = {
    workspaceId: '0',
    channelId: '{{getChannel_1.isChannelId}}',
    content: 'test123123',
  };

  const resolvedPayload = resolveObject(payloadObj, globalContext);
  const resolvedHeader = resolveObject(headerRequest, globalContext);
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
      abc: 1,
      expect: {},
    };
    globalContext.setStepContext('sendMessage_1', sendMessageContext);
    nextStep = true;
  };
});
afterAll(async () => {
  if(nextStep === true){
    const afterAllStep = await executeAllSteps(
      [ 
        "acceptChannel_1(body: {\"linkInvitation\": \"{{getChannel_1.invitationLink}}\"}, header: {token: '{{mockUser[1].token}}'}, expect: {countMember: 2, countMessage: 1, isChannelId: '{{createChannel.isChannelId}}', isContent: '%s joined this channel' })",
        "getChannel_2(body: {workspaceId: '0', channelId: '{{createChannel.isChannelId}}'}, header: {token: '{{mockUser[0].token}}'}, expect: {countMember: 2, countMessage: 1, isChannelId: '{{createChannel.isChannelId}}',isLastMessage: '{{acceptChannel_1.isLastMessage}}', isContent: '{{acceptChannel_1.isContent}}', isOwner: '{{mockUser[0].userId}}'})",
        "sendMessage_2(body: {workspaceId: '0', channelId: '{{createChannel.isChannelId}}', content: 'user send message'}, header: {token: '{{mockUser[1].token}}'}, expect: {})",
        "getListMessage(body: { workspaceId: '0', channelId: '{{createChannel.isChannelId}}' }, header: {token: '{{mockUser[0].token}}' }, expect: {isLastMessage: '{{sendMessage_2.messageId}}', isLastContent: '{{sendMessage_2.content}}', isSender: '{{sendMessage_2.senderId}}' })",
        "deleteMessageOnlyMe_1(body: {channelId: '{{createChannel.isChannelId}}', messageId: '{{sendMessage_1.messageId}}'}, header: {token: '{{mockUser[0].token}}'})",
        "getMessage(body: {channelId: '{{createChannel.isChannelId}}', messageId: '{{sendMessage_1.messageId}}' }, header: {token: '{{mockUser[0].token}}' }, expect: {})",
        "getListMessage(body: { workspaceId: '0', channelId: '{{createChannel.isChannelId}}' }, header: {token: '{{mockUser[0].token}}' }, expect: {})",
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
=== Test Reports for Logic "send-message" ===
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

});
