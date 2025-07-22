import { getApiFunctions } from './api-registry';
import { TestContext } from './text-context';
import { Step, StepResult } from '../types/test-suites.types';
import { extractionData } from './extract-data';
import { resolveVariables, transformPayload } from '../helpers/utils';

export async function executeSteps(
  steps: Step[],
  context?: TestContext,
): Promise<StepResult[]> {
  const results: StepResult[] = [];

  for (const [index, step] of steps.entries()) {
    try {
      const result = await executeSingleStep(step, context);
      results.push(result);
      // context.debug();
      if (!result.status) break;
    } catch (error) {
      console.error(`Error executing step ${index}:`, error);
    }
  }
  return results;
}

async function executeSingleStep(
  step: Step,
  context?: TestContext,
): Promise<StepResult> {
  const { config, expect: expectConfig } = step;
  // defined method & path dựa vào action config
  const extractBody = transformPayload(config.body);
  // resolve variables body and headers
  const resolveBody = resolveVariables(extractBody.body, context);
  const resolveHeaders = resolveVariables(extractBody.headers, context);

  // get api function
  const apiFunction = getApiFunctions(config.schema, context);
  const response = await apiFunction({
    path: config.path,
    headers: resolveHeaders,
    body: resolveBody,
  });

  console.log(JSON.stringify(response, null, 2))
  const hasExpectConfig = !!expectConfig;
  if (!response?.ok && !hasExpectConfig) {
    return {
      type: 'request DTO',
      status: false,
      stepName: config.schema,
      error:
        response?.error || {
          code: response?.data?.error?.code,
          message: response?.data?.error?.message,
          details: response?.data?.error?.details,
        } ||
        response?.data,
    };
  } else {
    // save context
    if (response?.data) {
      const extractedData = extractionData(response, config.schema);
      context.mergeData(extractedData);
    }
  }
  // }
  return {
    type: null,
    status: true,
    stepName: config.schema,
  };
}
