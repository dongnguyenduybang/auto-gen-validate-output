import { writeFileSync } from 'fs';
import {
  getOrThrow,
  setupConfiguration,
} from '../src/auto-gen/utils/get-config';
import { ACTION } from '../src/auto-gen/enums';
import { TestContext } from '../src/auto-gen/utils/text-context';
import { executeSteps } from '../src/auto-gen/utils/text-execute-test';

setupConfiguration();

export default async function () {
  try {
    globalThis.urls = getOrThrow<string>('host');
    globalThis.globalVariables = new Map<string, any>();
    // globalThis.globalContext = new TestContext();
    // process.env.URLS = getOrThrow<string>('host'); // Sử dụng process.env

    // const steps = [
    //   {
    //     action: ACTION.MOCK_USER,
    //     body: {
    //       quantity: 2,
    //       prefix: 'testabcssd',
    //       badge: 0,
    //     },
    //   },
    //   {
    //     action: ACTION.CREATE_CHANNEL,
    //     body: {
    //       name: 'channel name',
    //       workspaceId: '0',
    //     },
    //   },
    // ];

    // const beforeResults = await executeSteps(steps, globalThis.globalContext);
    // console.log('Before results:', beforeResults);
    // console.log('Context data:', globalThis.globalContext.getData());

    // const dataToSave = {
    //   urls: process.env.URLS,
    //   prefix: steps[0].body.prefix,
    //   context: globalThis.globalContext.getData(), // Sử dụng getData()
    // };

    // writeFileSync('temp.json', JSON.stringify(dataToSave));
    // globalThis.beforeResults = beforeResults;

    console.log('Global var set successfully.');
    // console.log('URLs:', process.env.URLS);
  } catch (error) {
    console.error('Error setting up global variables:', error.message);
    throw error; // Ném lỗi để Jest báo cáo
  }
}