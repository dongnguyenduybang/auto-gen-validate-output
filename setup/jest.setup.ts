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
