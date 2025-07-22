import { setupConfiguration } from '../utils/get-config';
import { executeSteps } from '../utils/execute-test';
import { findRequestFunction } from '../helpers/file-matching';

setupConfiguration();

export default async function () {
  try {
    console.log('Global teardown: Cleaning up after tests');

    const module = await import('./jest.teardown.request');
    const requestFunction = findRequestFunction(
      module,
      './jest.teardown.request.ts',
    );
    const request = await requestFunction();
    const requestBeforeAll = request.steps?.[0]?.actions?.main || [];
    const results = await executeSteps(
      requestBeforeAll,
      globalThis.globalContext,
    );

    results.forEach((result) => {
      if (!result.status) {
        console.error(`Error: ${result.error}`);
      } else {
        console.log(`Step ${result.stepName} executed successfully`);
        console.log('Global teardown completed successfully');
        delete globalThis.globalContext;
        delete globalThis.globalVar;
        delete globalThis.urls;
      }
    });
  } catch (error) {
    console.error('Global teardown failed:', error);
    throw error;
  }
}
