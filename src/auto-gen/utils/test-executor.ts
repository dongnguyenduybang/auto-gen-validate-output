/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createApiValidator } from './api-validator';
import { EventContext, TestContext, WSSContext } from './text-context';
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
import { getApiFunctions } from '../functions/apiRegistry';
import { extractDatas } from './extract-data';
import { formatErrors, resolveExpectConfig, resolveVariables } from './helper';

interface Step {
    action: string;
    method?: string;
    path?: string;
    body?: any;
    headers?: any;
    expect?: any;
}

interface StepResult {
    type?: string,
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
    UpdateMessageResponse

};



export async function executeAllSteps(
    steps: Step[],
    context: TestContext,
    wsContext: WSSContext,
    eventContext: EventContext
): Promise<StepResult[]> {
    const results: StepResult[] = [];

    for (const [index, step] of steps.entries()) {
        const result = await executeStep(step, context, wsContext, eventContext, index);
        results.push(result);
        if (!result.status) break;
    }

    context.debug();
    return results;
}


async function executeStep(
    step: Step,
    context: TestContext,
    wsContext: WSSContext,
    eventContext: EventContext,
    stepIndex: number,
): Promise<StepResult> {
    try {
        const { action, method, path, body, headers, expect: expectConfig } = step;

        // resolve var từ  body và header
        const resolvedBody = resolveVariables(body, context);
        const resolvedHeader = resolveVariables(headers, context);
        //goi API function
        const apiFunction = getApiFunctions(action, context, eventContext);

        // Execute API call
        const response = await apiFunction({
            method,
            path,
            headers: resolvedHeader,
            body: resolvedBody,
            action: action,
            stepIndex: stepIndex
        });
        console.log(response)
        if (response.data.ok === false) {
            return {
                type: 'request',
                status: response.data.ok,
                stepName: `${step.action}`,
                error: JSON.stringify(response.data.error.details)
            }
        }
        // validate response
        const stepName = step.action.charAt(0).toUpperCase() + step.action.slice(1) + "Response";
        const ResponseClass = responseClassMap[stepName as keyof typeof responseClassMap];
        const validatedResponse = plainToClass(
            ResponseClass as ClassConstructor<BaseResponse>,
            response.data
        );
        const result = await validateResponses(resolvedBody, validatedResponse, context);
        if (result.length > 0) {
            return {
                type: 'response',
                status: false,
                stepName: `${step.action}`,
                error: JSON.stringify(result)
            };
        }
        const extractedData = extractDatas(response.data, action, false)
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

