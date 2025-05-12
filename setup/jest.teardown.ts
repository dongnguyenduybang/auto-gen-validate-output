import { readFileSync, unlinkSync } from 'fs';
import { ACTION } from '../src/auto-gen/enums';
import { executeSteps } from '../src/auto-gen/utils/text-execute-test';
import {
  getOrThrow,
  setupConfiguration,
} from '../src/auto-gen/utils/get-config';

setupConfiguration();

export default async function () {
  try {
    console.log('🎯 Global teardown: Cleaning up after tests');
    globalThis.urls = getOrThrow<string>('host');
    globalThis.globalVar = new Map<string, any>();
    const data = JSON.parse(readFileSync('temp.json', 'utf-8'));
    const steps = [
      {
        action: ACTION.DELETE_MOCKED_USER,
        body: {
          prefix: data.prefix,
        },
      },
    ];

    const results = await executeSteps(steps, globalThis.globalContext);

    results.forEach((result) => {

      if (!result.status) {

        console.error(`⛔ Error: ${result.error}`);
      } else {
        console.log(`🚀 Step ${result.stepName} executed successfully`);

        unlinkSync('temp.json');
      }
    });

    delete globalThis.globalContext;
    delete globalThis.globalVar;
    delete globalThis.urls;

    console.log('🎯 Global teardown completed successfully');
  } catch (error) {
    console.error('Global teardown failed:', error);
    throw error;
  }
}
