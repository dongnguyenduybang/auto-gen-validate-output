/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getApiFunction } from './api-function';
import { createApiValidator, ValidationError } from './api-validator';
import { TestContext } from './text-context';
import { SendMessageResponse } from '../response/send-message.response';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { CreateChannelResponse } from '../response/create-channel';
import { GetChannelResponse } from '../response/get-channel.response';
import { validateResponses } from '../validates/validate-response';
import { MockUserResponse } from '../response/mock-user';
import { AcceptInvitationResponse } from '../response/accept-invitation';
import { BaseResponse } from '../response/general-response';
import { SendDmMessageResponse } from '../response/send-dm-message.response';
import { UpdateMessageResponse } from '../response/update-message.response';

interface Step {
    action: string;
    method?: string;
    path?: string;
    body?: any;
    header?: any;
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
): Promise<StepResult[]> {
    const results: StepResult[] = [];

    for (const [index, step] of steps.entries()) {
        const result = await executeStep(step, context, index);
        results.push(result);
        if (!result.status) break;
    }

    context.debug();
    return results;
}

async function executeStep(
    step: Step,
    context: TestContext,
    stepIndex: number,
): Promise<StepResult> {
    try {
        const { action, method, path, body, header, expect: expectConfig } = step;

        // resolve var từ  body và header
        const resolvedBody = resolveVariables(body, context);
        const resolvedHeader = resolveVariables(header, context);
        //goi API function
        const apiFunction = getApiFunction(action, context);
        const response = await apiFunction(method, path, resolvedHeader, resolvedBody);
        if (response.ok === false) {
            return {
                type: 'request',
                status: response.ok,
                stepName: `${step.action}`,
                error: JSON.stringify(response.response)
            }
        }

        // validate response
        const stepName = step.action.charAt(0).toUpperCase() + step.action.slice(1) + "Response";
        const ResponseClass = responseClassMap[stepName as keyof typeof responseClassMap];
        const validatedResponse = plainToClass(
            ResponseClass as ClassConstructor<BaseResponse>,
            response.response
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

        const extractedData = extractData(action, response, context);
        context.mergeData(extractedData);

        //validate logic
        if (expectConfig) {
            const validator = createApiValidator(context);
            const resolvedExpect = resolveExpectConfig(expectConfig, context);
            const errors = validator.validate(response.response, resolvedExpect);
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
        return obj.replace(/\{\{(.+?)\}\}/g, (_, path) => context.getValue(path.split('.')) ?? `{{${path}}}`);
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
        return expectConfig.map(item => resolveExpectConfig(item, context));
    }
    if (typeof expectConfig === 'object' && expectConfig !== null) {
        if (expectConfig.operator && expectConfig.expect) {
            return {
                ...expectConfig,
                expect: resolveExpectConfig(expectConfig.expect, context)
            };
        }
        return Object.fromEntries(
            Object.entries(expectConfig).map(([k, v]) =>
                [k, resolveExpectConfig(v, context)]
            )
        );
    }
    return expectConfig;
}
//get data api
function extractData(
    action: string,
    response: any,
    context: TestContext,
): Record<string, any> {
    try {
        switch (action) {
            case 'mockUser':
                return extractMockUserData(response.response);
            case 'createChannel':
                return extractCreateChannel(response.response, context);
            case 'getChannel':
                return extractGetChannel(response.response, context);
            case 'acceptInvitation':
                return extractAcceptInvitation(response.response, context);
            case 'sendMessage':
                return extractMessageData(response.response);
            case 'updateMessage':
                return extractUpdateMessageData(response.response);
            case 'sendDmMessage':
                return extractDmMessageData(response.response);
            default:
                return flattenObject(response.response);
        }
    } catch (error) {
        console.error(`Error extracting data for ${action}:`, error);
        return {};
    }
}
// thêm các trường cần thiết từ response vào context
function extractMockUserData(response: any): Record<string, any> {
    const data: Record<string, any> = {};
    if (!response?.data) return data;
    response.data.forEach((user: any, index: number) => {
        const suffix = index === 0 ? '' : index;
        data[`userId${suffix}`] = user.userId;
        data[`token${suffix}`] = user.token;
    });
    return data;
}
// thêm các trường cần thiết từ response vào context
function extractCreateChannel(response: any, context: TestContext): Record<string, any> {
    const data: Record<string, any> = {};
    if (!response?.data) return data;

    const { channel, channelMetadata } = response.data;
    if (channel) {
        data.channelId = channel.channelId;
        data.workspaceId = channel.workspaceId;
        data.name = channel.name;
        data.invitationLink = channel.invitationLink;
        data.totalMembers = channel.totalMembers;
    }

    if (channelMetadata) {
        data.lastMessageId = channelMetadata.lastMessageId;
    }

    if (response.includes) {
        if (response.includes.messages?.[0]) {
            data.messageId = response.includes.messages[0].messageId;
            data.content = response.includes.messages[0].content;
        }
    }

    return data;
}

// thêm các trường cần thiết từ response vào context
function extractGetChannel(response: any, context: TestContext): Record<string, any> {
    const data: Record<string, any> = {};
    if (!response?.data) return data;


    return data;
}

// thêm các trường cần thiết từ response vào context
function extractAcceptInvitation(response: any, context: TestContext): Record<string, any> {
    const data: Record<string, any> = {};
    if (!response?.data) return data;

    const { channel, channelMetadata } = response.data;
    if (channel) {
        data.totalMembers = channel.totalMembers;
    }

    if (channelMetadata) {
        data.lastMessageId = channelMetadata.lastMessageId;
    }

    if (response.includes?.messages?.[0]) {
        // data.messageId = response.includes.messages[0].messageId;
        data.content = response.includes.messages[0].content;
    }

    return data;
}
// thêm các trường cần thiết từ response vào context
export function extractMessageData(response: SendMessageResponse): Record<string, any> {
    const data: Record<string, any> = {};
    if (!response?.data) return data;

    const { message } = response.data;
    if (message) {
        data.messageId = message.messageId;
        data.content = message.content;
    }

    return data;
}
export function extractUpdateMessageData(response: UpdateMessageResponse): Record<string, any> {
    const data: Record<string, any> = {};
    if (!response?.data) return data;

    const { message } = response.data;
    if (message) {
        data.messageId = message.messageId;
        data.content = message.content;
    }

    return data;
}

export function extractDmMessageData(response: SendDmMessageResponse): Record<string, any> {
    const data: Record<string, any> = {};
    if (!response?.data) return data;

    const { message } = response.data;
    if (message) {
        data.messageId = message.messageId;
        data.content = message.content;
        data.channelId = message.channelId
    }

    return data;
}

function flattenObject(
    obj: Record<string, any>,
    prefix = '',
): Record<string, any> {
    if (typeof obj !== 'object' || obj === null) return { [prefix]: obj };

    return Object.entries(obj).reduce(
        (acc, [key, value]) => {
            const newKey = prefix ? `${prefix}.${key}` : key;
            if (typeof value === 'object' && value !== null) {
                Object.assign(acc, flattenObject(value, newKey));
            } else {
                acc[newKey] = value;
            }
            return acc;
        },
        {} as Record<string, any>,
    );
}

function formatErrors(errors: ValidationError[]): any { // <-- Thay string bằng any
    if (!Array.isArray(errors)) return { message: 'No error details available' };

    const formattedErrors = errors
        .filter(e => e !== undefined && e !== null)
        .map(e => ({
            path: e.path?.toString() || 'unknown_path',
            expected: e.expected?.toString() || 'no_expected_value',
            actual: e.actual !== undefined
                ? (typeof e.actual === 'object' ? JSON.stringify(e.actual) : e.actual.toString())
                : 'no_actual_value',
            message: e.message || 'No message'
        }));

    return formattedErrors.length === 1 ? formattedErrors[0] : formattedErrors;
}