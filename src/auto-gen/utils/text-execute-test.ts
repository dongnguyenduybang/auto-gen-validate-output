import { createApiValidator } from './api-validator';
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
import { Step, ValidationError } from './declarations';
import { TestContext } from './text-context';
import { ACTION_CONFIG } from '../enums';


export interface StepResult {
  type?: string;
  status: boolean;
  stepName: string;
  caseTitle?: string;
  error?: string | any;
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

export async function   executeSteps(
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
  try {
    const { action, body, headers, expect: expectConfig } = step;

    // defined method & path dựa vào action config 
    const actionInfo = ACTION_CONFIG[action as keyof typeof ACTION_CONFIG];
    // resolve variables body and headers
    const resolveBody = resolveVariables(body, context);
    const resolveHeaders = resolveVariables(headers, context);

    // get api function
    const apiFunction = getApiFunctions(action, context);
    if (!apiFunction) {
      throw new Error(`API function not found for action: ${action}`);
    }
    const response = await apiFunction({
      method: actionInfo.method,
      path: actionInfo.path,
      headers: resolveHeaders,
      body: resolveBody,
    });
    const hasExpectConfig = !!expectConfig;
    if ((response?.data?.ok === false || response.error !== undefined) && !hasExpectConfig) {
      return {
        type: 'request DTO',
        status: false,
        stepName: action,
        error: response.error  ||  {
          code: response.data.error.code,
          message: response.data.error.message,
          details: response.data.error.details,
        },
      };
    }

    // validate response

    const stepName =
      step.action.charAt(0).toUpperCase() + step.action.slice(1) + 'Response';
    const responseClass =
      responseClassMap[stepName as keyof typeof responseClassMap];
    const validateResponse = plainToClass(
      responseClass as ClassConstructor<BaseResponse>,
      response.data,
    );
    const result = await validateResponses(
      resolveBody,
      validateResponse,
      context,
    );
    if (result.length > 0) {
      return {
        type: 'response',
        status: false,
        stepName: action,
        error: JSON.stringify(result, null, 2),
      };
    }

    // save context
    if(response.data?.data !== undefined) {
      const extractedData = extractDatas(response.data, action);
      context.mergeData(extractedData);
    }


    // validate saga

    if (expectConfig) {
      const validator = createApiValidator(context);
      const resolveExpect = resolveExpectConfig(expectConfig, context);
      const errors = validator.validate(response.data, resolveExpect);
      if (errors.length > 0) {
        return {
          type: 'saga',
          status: false,
          stepName: action,
          error: formatErrors(errors),
        };
      }
    }

    return {
      type: null,
      status: true,
      stepName: action,
    };
  } catch (error) {
    return {
      type: 'error',
      status: false,
      stepName: step.action,
      error: error.message || error,
    };
  }
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
