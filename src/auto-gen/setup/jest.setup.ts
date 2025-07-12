import { getOrThrow, setupConfiguration } from '../utils/get-config';
import { TestContext } from '../utils/text-context';
import { executeSteps } from '../utils/text-execute-test';
import { findRequestFunction } from '../utils/k6-help';
import { loadAIModel } from '../utils/ai-service';

setupConfiguration();
export default async function setup() {
  try {
    // await loadAIModel();
    // set urls from file yaml
    globalThis.urls = getOrThrow<string>('host');
    globalThis.globalVar = new Map<string, any>();
    globalThis.globalContext = new TestContext(); // set context

    const module = require('./jest.setup.request.ts');
    const requestFunction = findRequestFunction(module, './jest.setup.request.ts');
    const request = await requestFunction();
    const requestSetup = request.steps?.[0]?.actions?.main || [];
    const results = await executeSteps(requestSetup, globalThis.globalContext);

    results.forEach((result) => {
      if (!result.status) {
        console.error(`Error: ${result.error}`);
      } else {
        console.log(`Step ${result.stepName} executed successfully`);
        console.log('Global setup completed successfully');
      }
    });

  } catch (error) {
    console.error('Setup failed:', error);
    throw error;
  }
}
