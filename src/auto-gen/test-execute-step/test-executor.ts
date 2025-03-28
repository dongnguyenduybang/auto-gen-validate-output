/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { response } from 'express';
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

interface Step {
    action: string;
    body?: any;
    header?: any;
    expect?: any;
}

interface StepResult {
    success: boolean;
    stepName: string;
    error?: string;
}
const responseClassMap = {
    CreateChannelResponse,
    GetChannelResponse,
    AcceptInvitationResponse,
    SendMessageResponse,
    MockUserResponse

};

export async function executeAllSteps(
    steps: Step[],
    context: TestContext,
): Promise<StepResult[]> {
    const results: StepResult[] = [];

    for (const [index, step] of steps.entries()) {
        const result = await executeStep(step, context, index);
        results.push(result);
        if (!result.success) break;
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
        const { action, body, header, expect: expectConfig } = step;

        // Resolve variables từ context
        const resolvedBody = resolveVariables(body, context);
        const resolvedHeader = resolveVariables(header, context);

        const apiFunction = getApiFunction(action, context);
        const response = await apiFunction(resolvedHeader, resolvedBody);
        const stepName = step.action.charAt(0).toUpperCase() + step.action.slice(1) + "Response";
        const ResponseClass = responseClassMap[stepName as keyof typeof responseClassMap];
        const validatedResponse = plainToClass(
            ResponseClass as ClassConstructor<BaseResponse>, 
            response.response
          );
        const result = validateResponses(validatedResponse, ResponseClass);
        console.log(result)

        const extractedData = extractData(action, response, context);
        context.mergeData(extractedData);

        // Validate response
        if (expectConfig) {
            const validator = createApiValidator(context);
            const resolvedExpect = resolveExpectConfig(expectConfig, context);
            const errors = validator.validate(response.response, resolvedExpect);

            if (errors.length > 0) {
                return {
                    success: false,
                    stepName: `${step.action}`,
                    error: formatErrors(errors),
                };
            }
        }

        return { success: true, stepName: `${action}` };
    } catch (error) {
        return {
            success: false,
            stepName: `${step.action}`,
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}

// Helper functions
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
            default:
                return flattenObject(response.response);
        }
    } catch (error) {
        console.error(`Error extracting data for ${action}:`, error);
        return {};
    }
}

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

function extractCreateChannel(response: any, context: TestContext): Record<string, any> {
    const data: Record<string, any> = {};
    if (!response?.data) return data;

    const { channel, channelMetadata } = response.data;
    if (channel) {
        data.channelId = channel.channelId;
        data.workspaceId = channel.workspaceId;
        data.channelName = channel.name;
        data.invitationLink = channel.invitationLink;
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

function extractGetChannel(response: any, context: TestContext): Record<string, any> {
    const data: Record<string, any> = {};
    if (!response?.data) return data;

    // Thêm các trường cần thiết từ response
    return data;
}

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
        data.messageId = response.includes.messages[0].messageId;
        data.content = response.includes.messages[0].content;
    }

    return data;
}

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

function formatErrors(errors: ValidationError[]): string {
    if (!Array.isArray(errors)) return 'No error details available';

    return errors
        .filter(e => e !== undefined && e !== null)
        .map(e => {
            const path = e.path?.toString() || 'unknown_path';
            const expected = e.expected?.toString() || 'no_expected_value';
            const actual = e.actual !== undefined
                ? (typeof e.actual === 'object' ? JSON.stringify(e.actual) : e.actual.toString())
                : 'no_actual_value';
            return `Path: [${path}] Expected: ${expected} | Actual: ${actual}` +
                (e.message ? `\nMessage: ${e.message}` : '');
        })
        .join('\n\n');
}