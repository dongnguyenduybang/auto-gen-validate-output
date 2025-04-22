/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createApiValidator } from './api-validator';
import { TestContext, WSSContext } from './text-context';
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
import { getWebSocket } from './ws-store';
import WebSocket from 'ws';
import { initSocketEvents } from '../functions/connect-ws';
import { API_EVENT } from './ws-config';

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
  UpdateMessageResponse
};

export async function executeWSSteps(
  steps: Step[],
  context: TestContext,
  wsContext: WSSContext
): Promise<StepResult[]> {
  const results: StepResult[] = [];

  for (const [index, step] of steps.entries()) {
    const result = await executeStep(step, context, wsContext, index);
    results.push(result);
    if (!result.status) break;
  }
  context.debug();
  wsContext.debug();

  return results;
}

async function executeStep(
  step: Step,
  context: TestContext,
  wsContext: WSSContext,
  stepIndex: number
): Promise<StepResult> {
  try {
    const { action, method, path, body, headers, expect: expectConfig } = step;

    // Lấy WebSocket từ wsStore
    const wsActor = getWebSocket('ws_wsActor');
    const wsRecipient = getWebSocket('ws_wsRecipient');
    console.log('wsActor state:', wsActor?.readyState, 'wsRecipient state:', wsRecipient?.readyState);

    if (!wsActor || wsActor.readyState !== WebSocket.OPEN) {
      return {
        type: 'ws',
        status: false,
        stepName: `${action}_wsActor`,
        error: 'WebSocket connection for wsActor is not open'
      };
    }
    if (!wsRecipient || wsRecipient.readyState !== WebSocket.OPEN) {
      return {
        type: 'ws',
        status: false,
        stepName: `${action}_wsRecipient`,
        error: 'WebSocket connection for wsRecipient is not open'
      };
    }

    // Resolve var từ body và header
    const resolvedBody = resolveVariables(body, context);
    const resolvedHeader = resolveVariables(headers, context);

    // Gọi API function
    const apiFunction = getApiFunctions(action, context);
    const response = await apiFunction({
      method,
      path,
      headers: resolvedHeader,
      body: resolvedBody
    });

    if (response.data.ok === false) {
      return {
        type: 'request',
        status: response.data.ok,
        stepName: `${step.action}`,
        error: JSON.stringify(response.data.error.details)
      };
    }

    // Validate response
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

    // Trích xuất dữ liệu API response và lưu vào TestContext
    const extractedData = extractDatas(response.data, action, false);
    console.log('API response extracted data:', extractedData);
    context.mergeData(extractedData);

    // Chờ sự kiện WebSocket với maxEvents lớn hơn
    const maxActorEvents = action === 'createChannel' ? 1 : action === 'acceptInvitation' ? 2 : 2; // Điều chỉnh theo bước
    const maxRecipientEvents = action === 'createChannel' ? 0 : action === 'acceptInvitation' ? 2 : 1;
    const [actorMessages, recipientMessages] = await Promise.all([
      initSocketEvents(wsActor, maxActorEvents, 60000).catch(error => {
        console.error(`wsActor initSocketEvents error for ${action}:`, error.message);
        return [];
      }),
      initSocketEvents(wsRecipient, maxRecipientEvents, 60000).catch(error => {
        console.error(`wsRecipient initSocketEvents error for ${action}:`, error.message);
        return [];
      })
    ]);

    console.log(`Step ${action} - Actor messages:`, actorMessages);
    console.log(`Step ${action} - Recipient messages:`, recipientMessages);

    // Lấy mảng sự kiện hiện có từ WSSContext
    const existingActorEvents = wsContext.getValue('wsActor') || [];
    const existingRecipientEvents = wsContext.getValue('wsRecipient') || [];

    // Push sự kiện mới vào mảng wsActor và wsRecipient
    actorMessages.forEach((event, i) => {
      console.log(`Processing wsActor event ${i} for ${action}:`, event);
      const extractedData = extractDatas(event, `wsActor_event_${existingActorEvents.length + i + 1}`, true);
      if (event.type === API_EVENT.halome.v3.chat.USER_UNREAD_MESSAGE_UPDATED) {
        extractedData['messageId3'] = event.data.message.lastSeenMessageId;
        context.mergeData({ messageId3: event.data.message.lastSeenMessageId });
      }
      console.log('wsActor extracted data:', extractedData);
      existingActorEvents.push(event);
      context.mergeData(extractedData);
    });

    recipientMessages.forEach((event, i) => {
      console.log(`Processing wsRecipient event ${i} for ${action}:`, event);
      const extractedData = extractDatas(event, `wsRecipient_event_${existingRecipientEvents.length + i + 1}`, true);
      console.log('wsRecipient extracted data:', extractedData);
      existingRecipientEvents.push(event);
      context.mergeData(extractedData);
    });

    // Cập nhật mảng vào WSSContext
    console.log(`Before update for ${action} - wsActor:`, wsContext.getValue('wsActor'));
    console.log(`Before update for ${action} - wsRecipient:`, wsContext.getValue('wsRecipient'));
    wsContext.setValue('wsActor', existingActorEvents);
    wsContext.setValue('wsRecipient', existingRecipientEvents);
    console.log(`After update for ${action} - wsActor:`, wsContext.getValue('wsActor'));
    console.log(`After update for ${action} - wsRecipient:`, wsContext.getValue('wsRecipient'));

    // Validate logic
    if (expectConfig) {
      const validator = createApiValidator(context);
      const resolvedExpect = resolveExpectConfig(expectConfig, context);
      const errors = validator.validate(response?.data, resolvedExpect);
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
    console.error(`Error in executeStep for ${step.action}:`, error);
    return {
      type: 'exception',
      status: false,
      stepName: `${step.action}`,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}