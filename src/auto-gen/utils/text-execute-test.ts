import { getApiFunctions } from '../functions/api-registry';
import { extractDatas } from './extract-data';
import { Step, StepResult, ValidationError } from './declarations';
import { TestContext } from './text-context';
import { ACTION_CONFIG } from '../enums';
import { handleExpectConfig } from './check-expect';
import { checkResponse, resolveExpectConfig, resolveVariables } from './helper';

export async function executeSteps(
  steps: Step[],
  context?: TestContext,
): Promise<StepResult[]> {
  const results: StepResult[] = [];

  for (const [index, step] of steps.entries()) {
    try {
      const result = await executeSingleStep(step, context);
      results.push(result);
      if(!result.status) break;
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

  const { action, body, headers, expect: expectConfig } = step;
  // defined method & path dựa vào action config
  const actionInfo = ACTION_CONFIG[action as keyof typeof ACTION_CONFIG];
  // resolve variables body and headers
  const resolveBody = resolveVariables(body, context);
  const resolveHeaders = resolveVariables(headers, context);

  // get api function
  const apiFunction = getApiFunctions(action, context);
  const response = await apiFunction({
    method: actionInfo.method,
    path: actionInfo.path,
    headers: resolveHeaders,
    body: resolveBody,
  });
  console.log(action, response.data)
  const hasExpectConfig = !!expectConfig;
  if ((!response?.data?.ok) && !hasExpectConfig) {
    return {
      type: 'request DTO',
      status: false,
      stepName: action,
      error: response?.error || {
        code: response?.data?.error?.code,
        message: response?.data?.error?.message,
        details: response?.data?.error?.details,
      } || response?.data

    };

  } else {
    // validate response
    const resultCheckResponse = await checkResponse(step, response.data, resolveBody, context)
    if (!resultCheckResponse.status) {
      return resultCheckResponse
    } else {

      // save context
      if (response?.data.data) {
        const extractedData = extractDatas(response.data, action);
        context.mergeData(extractedData);
      }

      // validate saga
      if (expectConfig) {
        const resolveConfig = resolveExpectConfig(expectConfig, context)
        // get api function
        const result = await handleExpectConfig(response.data, resolveConfig, context);
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
            stepName: action,
            error: groupedErrors
          };
        }
      }
    }
  }
  return {
    type: null,
    status: true,
    stepName: action,
  };
}
