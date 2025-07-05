import { writeFileSync } from 'fs';
import { getOrThrow, setupConfiguration } from '../utils/get-config';
import { ACTION, VAR } from '../enums';
import { TestContext } from '../utils/text-context';
import { executeSteps } from '../utils/text-execute-test';

setupConfiguration();

beforeAll(async () => {
  try {
    // set urls from file yaml
    globalThis.urls = getOrThrow<string>('host');
    globalThis.globalVar = new Map<string, any>();
    globalThis.globalContext = new TestContext(); // set context

    const steps = [
      {
        "name": "mock-user",
        "key": "mock-user",
        "action": "mockUser",
        "headers": {
          "x-session-token": "{{token}}"
        },
        "config": {
          "body": {
            "prefix": VAR.prefix,
            "quantity": 2,
            "badge": 0,
            "headers": {
              "x-session-token": "{{token}}"
            },
          },
          "method": "POST",
          "path": "/InternalFaker/MockUsers",
          "schema": "V3MockUsersRequest",
          "metadata": {}
        }
      },
      {
        "name": "create-channel",
        "key": "create-channel",
        "action": "createChannel",
        "headers": {
          "x-session-token": "{{token}}"
        },
        "config": {
          "body": {
            "name": VAR.defaultChannelName,
            "workspaceId": 0,
            "headers": {
              "x-session-token": "{{token}}"
            },
          },
          "method": "POST",
          "path": "/Channel/CreateChannel",
          "schema": "V3CreateChannelRequest",
          "metadata": {}
        }
      }
    ];

    await executeSteps(steps, globalThis.globalContext);
  } catch (error) {
    console.error('Setup failed:', error);
    throw error;
  }
});
