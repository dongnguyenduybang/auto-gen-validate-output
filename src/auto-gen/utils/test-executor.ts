import { createApiValidator } from './api-validator';
import { TestContext } from './text-context';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { validateResponses } from '../validates/validate-response';
import { BaseResponse } from '../response/general-response';
import { getApiFunctions } from '../functions/api-registry';
import { extractDatas } from './extract-data';
import { formatErrors, resolveExpectConfig, resolveVariables } from './helper';
import { responseClassMap, Step, StepResult } from './types';

export async function executeAllSteps(
  steps: Step[],
  context: TestContext,
): Promise<StepResult[]> {
  const results: StepResult[] = [];

  for (const [index, step] of steps.entries()) {
    const result = await executeStep(step, context);
    results.push(result);
    if (!result.status) break;
  }

  context.debug();
  return results;
}

async function executeStep(
  step: Step,
  context: TestContext,
): Promise<StepResult> {
  try {
    const { action, method, path, body, headers, expect: expectConfig } = step;

    // resolve var từ  body và header
    const resolvedBody = resolveVariables(body, context);
    const resolvedHeader = resolveVariables(headers, context);
    //goi API function
    const apiFunction = getApiFunctions(action, context);

    // Execute API call
    const response = await apiFunction({
      method,
      path,
      headers: resolvedHeader,
      body: resolvedBody,
    });
    if (response.data.ok === false) {
      return {
        type: 'request',
        status: response.data.ok,
        stepName: `${step.action}`,
        error: JSON.stringify(response.data.error.details),
      };
    }
    // validate response
    const stepName =
      step.action.charAt(0).toUpperCase() + step.action.slice(1) + 'Response';
    const ResponseClass =
      responseClassMap[stepName as keyof typeof responseClassMap];
    const validatedResponse = plainToClass(
      ResponseClass as ClassConstructor<BaseResponse>,
      response.data,
    );
    const result = await validateResponses(
      resolvedBody,
      validatedResponse,
      context,
    );
    if (result.length > 0) {
      return {
        type: 'response',
        status: false,
        stepName: `${step.action}`,
        error: JSON.stringify(result),
      };
    }
    const extractedData = extractDatas(response.data, action);
    context.mergeData(extractedData);

    //validate logic
    if (expectConfig) {
      const validator = createApiValidator(context);
      const resolvedExpect = resolveExpectConfig(expectConfig, context);
      const errors = validator.validate(response.data, resolvedExpect);
      if (errors.length > 0) {
        return {
          type: 'logic',
          status: false,
          stepName: `${step.action}`,
          error: formatErrors(errors),
        };
      }
    }

    return { type: null, status: true, stepName: `${action}` };
  } catch (error) {
    return {
      type: 'exception',
      status: false,
      stepName: `${step.action}`,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
