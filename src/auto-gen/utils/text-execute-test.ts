import { getApiFunctions } from '../functions/api-registry';
import { extractDatas } from './extract-data';
import { Step, StepResult, ValidationError } from './declarations';
import { TestContext } from './text-context';
import { ACTION_CONFIG } from '../enums';
import { handleExpectConfig } from './check-expect';
import { checkResponse, delay } from './helper';

export async function executeSteps(
  steps: Step[],
  context?: TestContext,
): Promise<StepResult[]> {
  const results: StepResult[] = [];

  for (const [index, step] of steps.entries()) {
    try {
      const result = await executeSingleStep(step, context);
      results.push(result);
      // if(!result.status) break;
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

  const hasExpectConfig = !!expectConfig;
  if ((!response?.data?.ok) && !hasExpectConfig) {
    return {
      type: 'request DTO',
      status: false,
      stepName: action,
      error: response.error || {
        code: response.data.error.code,
        message: response.data.error.message,
        details: response.data.error.details,
      },
    };

  } else {
    // validate response
    const resultCheckResponse = await checkResponse(step, response.data, resolveBody, context)
    if (!resultCheckResponse.status) {
      return resultCheckResponse
    } else {
      // save context
      const extractedData = extractDatas(response.data, action);
      context.mergeData(extractedData);

      // validate saga
      if (expectConfig) {
        const resolveConfig = resolveExpectConfig(expectConfig, context)
        // get api function
        const result = await handleExpectConfig(response.data, resolveConfig, context);
        console.log(result)
      }

    }

  }
 
  return {
    type: null,
    status: true,
    stepName: action,
  };
}

export function resolveVariables(obj: any, context: TestContext): any {
  if (typeof obj === 'string') {
    return obj.replace(
      /\{\{(.+?)\}\}/g,
      (_, path) => context.getValue(path.split('.')) ?? `{{${path}}}`,
    );
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => resolveVariables(item, context));
  }
  if (typeof obj === 'object' && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, resolveVariables(v, context)]),
    );
  }
  return obj;
}

function resolveExpectConfig(expectConfig: any, context: TestContext): any {
  if (typeof expectConfig === 'string') {
    return resolveVariables(expectConfig, context);
  }
  if (Array.isArray(expectConfig)) {
    return expectConfig.map((item) => resolveExpectConfig(item, context));
  }
  if (typeof expectConfig === 'object' && expectConfig !== null) {
    if (expectConfig.operator && expectConfig.expect) {
      return {
        ...expectConfig,
        expect: resolveExpectConfig(expectConfig.expect, context),
      };
    }
    return Object.fromEntries(
      Object.entries(expectConfig).map(([k, v]) => [
        k,
        resolveExpectConfig(v, context),
      ]),
    );
  }
  return expectConfig;
}
function formatErrors(errors: ValidationError[]): any {
  // <-- Thay string bằng any
  if (!Array.isArray(errors)) return { message: 'No error details available' };

  const formattedErrors = errors
    .filter((e) => e !== undefined && e !== null)
    .map((e) => ({
      path: e.path?.toString() || 'unknown_path',
      expected: e.expected?.toString() || 'no_expected_value',
      actual:
        e.actual !== undefined
          ? typeof e.actual === 'object'
            ? JSON.stringify(e.actual)
            : e.actual.toString()
          : 'no_actual_value',
      message: e.message || 'No message',
    }));

  return formattedErrors.length === 1 ? formattedErrors[0] : formattedErrors;
}

