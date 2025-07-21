import { getApiFunctions } from '../functions/api-registry';
import { extractDatas } from './extract-data';
import { Step, StepResult } from './declarations';
import { TestContext } from './text-context';
import { handleExpectConfig } from '../validates/check-expect';
import {
  checkResponse,
  transformPayload,
  resolveExpectConfig,
  resolveVariables,
} from './helper';

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
    // validate response
    // const resultCheckResponse = await checkResponse(
    //   step,
    //   response,
    //   resolveBody,
    //   context,
    // );

    // if (!resultCheckResponse.status) {
    //   return resultCheckResponse;
    // } else {
    // save context
    if (response?.data) {
      const extractedData = extractDatas(response, config.schema);
      context.mergeData(extractedData);
    }

    // validate saga
    if (expectConfig) {
      const resolveConfig = resolveExpectConfig(expectConfig, context);
      // get api function
      const result = await handleExpectConfig(
        response.data,
        resolveConfig,
        context,
      );
      if (result.length > 0) {
        const groupedErrors = result.reduce((acc, item) => {
          const key = item.type || 'unknown';
          if (!acc[key]) acc[key] = [];
          acc[key].push(item);
          return acc;
        }, {});
        return {
          type: 'expect',
          status: false,
          stepName: config.schema,
          error: groupedErrors,
        };
      }
    }
  }
  // }
  return {
    type: null,
    status: true,
    stepName: config.schema,
  };
}
