import { createApiValidator, ValidationError } from './api-validator';
import { TestContext } from './text-context';
import { SendMessageResponse } from '../response/send-message.response';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { CreateChannelResponse } from '../response/create-channel.response';
import { GetChannelResponse } from '../response/get-channel.response';
import { validateResponses } from '../validates/validate-response';
import { MockUserResponse } from '../response/mock-user';
import { AcceptInvitationResponse } from '../response/accept-invitation.response';
import { BaseResponse } from '../response/general-response';
import { SendDmMessageResponse } from '../response/send-dm-message.response';
import { UpdateMessageResponse } from '../response/update-message.response';
import { getApiFunctions } from '../functions/api-registry';
import { extractDatas } from './extract-data';

interface Step {
  action: string;
  method?: string;
  path?: string;
  body?: any;
  headers?: any;
  expect?: any;
}

interface StepResult {
  type?: string;
  status: boolean;
  stepName: string;
  error?: string;
}
const responseClassMap = {
  CreateChannelResponse,
  GetChannelResponse,
  AcceptInvitationResponse,
  SendMessageResponse,
  MockUserResponse,
  SendDmMessageResponse,
  UpdateMessageResponse,
};

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
    if (response?.data?.error?.code === 1000) {
      return {
        type: 'request',
        status: response.data.ok,
        stepName: `${step.action}`,
        error: JSON.stringify(response?.data?.error?.details),
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

// resolve var {{}}
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
