import { writeFileSync } from 'fs';
import {
  getOrThrow,
  setupConfiguration,
} from '../src/auto-gen/utils/get-config';
import { ACTION, HEADER_LIST, VAR } from '../src/auto-gen/enums';
import { TestContext } from '../src/auto-gen/utils/text-context';
import { executeSteps } from '../src/auto-gen/utils/text-execute-test';

setupConfiguration();

beforeAll(async () => {
  try {
    // set urls from file yaml
    globalThis.urls = getOrThrow<string>('host');
    globalThis.globalVar = new Map<string, any>();
    globalThis.globalContext = new TestContext(); // set context

    const steps = [
      {
        action: ACTION.MOCK_USER,
        body: {
          quantity: 4,
          prefix: 'duyabc',
          badge: 0,
        },
      },
      {
        action: ACTION.ADD_FRIEND,
        body: {
          userId: VAR.userId1,
        },
        headers: HEADER_LIST.create({
          token: VAR.token,
        }),
      },
      {
        action: ACTION.ADD_FRIEND,
        body: {
          userId: VAR.userId2,
        },
        headers: HEADER_LIST.create({
          token: VAR.token,
        }),
      },
      {
        action: ACTION.ADD_FRIEND,
        body: {
          userId: VAR.userId3,
        },
        headers: HEADER_LIST.create({
          token: VAR.token,
        }),
      },
      {
        action: ACTION.ACCEPT_FRIEND_REQUEST,
        body: {
          userId: VAR.userId,
        },
        headers: HEADER_LIST.create({
          token: VAR.token1,
        }),
      },
      {
        action: ACTION.ACCEPT_FRIEND_REQUEST,
        body: {
          userId: VAR.userId,
        },
        headers: HEADER_LIST.create({
          token: VAR.token2,
        }),
      },
      {
        action: ACTION.ACCEPT_FRIEND_REQUEST,
        body: {
          userId: VAR.userId,
        },
        headers: HEADER_LIST.create({
          token: VAR.token3,
        }),
      },
      {
        action: ACTION.UPDATE_USER_DISPLAY_NAME,
        body: {
          displayName: 'duyabc bang',
        },
        headers: HEADER_LIST.create({
          token: VAR.token1,
        }),
      },
      {
        action: ACTION.UPDATE_USER_DISPLAY_NAME,
        body: {
          displayName: 'duyabc duy',
        },
        headers: HEADER_LIST.create({
          token: VAR.token2,
        }),
      },
      {
        action: ACTION.UPDATE_USER_DISPLAY_NAME,
        body: {
          displayName: 'duyabc as',
        },
        headers: HEADER_LIST.create({
          token: VAR.token3,
        }),
      },
      // {
      //   action: ACTION.CREATE_CHANNEL,
      //   body: {
      //     workspaceId: VAR.workspaceId,
      //     name: 'channel1'
      //   }
      // }
    ];

    await executeSteps(steps, globalThis.globalContext);
    const dataToSave = {
      urls: globalThis.urls,
      prefix: steps[0].body.prefix,
      context: globalThis.globalContext,
    };
    writeFileSync('temp.json', JSON.stringify(dataToSave));
    console.log('Setup completed with context:', globalThis.globalContext);
  } catch (error) {
    console.error('Setup failed:', error);
    throw error;
  }
});
