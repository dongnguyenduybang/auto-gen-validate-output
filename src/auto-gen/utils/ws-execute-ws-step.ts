import { createApiValidator } from './api-validator';
import { formatErrors, resolveExpectConfig, resolveVariables } from './helper';
import { TestContext, WSSContext } from './text-context';
import { getWebSocket } from './ws-store';
import { executeAllSteps } from './test-executor';
import WebSocket from 'ws';
import { WebSocketEventCollector } from './ws-event-collector';
import { validateResponses } from '../validates/validate-response';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { getApiFunctions } from '../functions/apiRegistry';
import { AcceptInvitationResponse } from '../response/accept-invitation.response';
import { CreateChannelResponse } from '../response/create-channel.response';
import { BaseResponse } from '../response/general-response';
import { GetChannelResponse } from '../response/get-channel.response';
import { MockUserResponse } from '../response/mock-user';
import { SendDmMessageResponse } from '../response/send-dm-message.response';
import { SendMessageResponse } from '../response/send-message.response';
import { UpdateMessageResponse } from '../response/update-message.response';
import { extractDatas } from './extract-data';

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
  wssSteps: any[],
  globalContext: TestContext,
  globalWSSContext: WSSContext
): Promise<StepResult[]> {
  console.log('Executing WebSocket steps:', wssSteps);
  const results: StepResult[] = [];
  let collector: WebSocketEventCollector | null = null;
  const wsActor = getWebSocket('ws_wsActor');
  const wsRecipient = getWebSocket('ws_wsRecipient');
  console.log(wsActor.readyState, wsRecipient.readyState);
  // Kiểm tra trạng thái WebSocket
  if (!wsActor || wsActor.readyState !== WebSocket.OPEN) {
    console.error('wsActor is not open or not found');
    throw new Error('WebSocket wsActor is not open');
  }
  if (!wsRecipient || wsRecipient.readyState !== WebSocket.OPEN) {
    console.warn('wsRecipient is not open or not found, proceeding with wsActor only');
  }

  // Khởi tạo WebSocketEventCollector
  collector = new WebSocketEventCollector(wsActor, wsRecipient || wsActor);
  try {

    for (const [index, step] of wssSteps.entries()) {
      console.log(`Processing step ${index}:`, step);
      // Nếu bước là HTTP (acceptInvitation, sendMessage), gọi executeAllSteps
      const result = await executeStep(step, globalContext, globalWSSContext, collector);
      results.push(result);
    }
  } catch (error) {
    console.error('Error in executeWSSteps:', error);
    results.push({
      type: 'exception',
      status: false,
      stepName: 'setup',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  } finally {
    if (collector) {
      collector.stop();
    }
    const wsActor = getWebSocket('ws_wsActor');
    const wsRecipient = getWebSocket('ws_wsRecipient');
    if (wsActor && wsActor.readyState === WebSocket.OPEN) {
      wsActor.close();
      console.log('Closed wsActor WebSocket');
    }
    if (wsRecipient && wsRecipient.readyState === WebSocket.OPEN) {
      wsRecipient.close();
      console.log('Closed wsRecipient WebSocket');
    }
  }

  globalWSSContext.debug();
  return results;
}

async function executeStep(
  step: any,
  globalContext: TestContext,
  globalWSSContext: WSSContext,
  collector: WebSocketEventCollector
): Promise<StepResult> {
  try {
    const { action, method, path, body,headers, expect: expectConfig } = step;
    const wsActor = getWebSocket('ws_wsActor');
    if (!wsActor || wsActor.readyState !== WebSocket.OPEN) {
      throw new Error(`WebSocket for ${action} is not open`);
    }

    const resolvedBody = resolveVariables(body, globalContext);
    const resolvedHeader = resolveVariables(headers, globalContext);
    //goi API function
    const apiFunction = getApiFunctions(action, globalContext);

    // Execute API call
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
      }
    }
    // validate response
    const stepName = step.action.charAt(0).toUpperCase() + step.action.slice(1) + "Response";
    const ResponseClass = responseClassMap[stepName as keyof typeof responseClassMap];
    const validatedResponse = plainToClass(
      ResponseClass as ClassConstructor<BaseResponse>,
      response.data
    );
    const result = await validateResponses(resolvedBody, validatedResponse, globalContext);
    if (result.length > 0) {
      return {
        type: 'response',
        status: false,
        stepName: `${step.action}`,
        error: JSON.stringify(result)
      };
    }
    const extractedData = extractDatas(response.data, action, false)
    globalContext.mergeData(extractedData);

    //validate logic
    if (expectConfig) {
      const validator = createApiValidator(globalContext);
      const resolvedExpect = resolveExpectConfig(expectConfig, globalContext);
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

    // Thu thập sự kiện sau khi gửi message
    const { actorEvents, recipientEvents } = await collector.collectEventsAfterAction(20000, 5);
    console.log(`${action} - Actor events:`, actorEvents);
    console.log(`${action} - Recipient events:`, recipientEvents);

    const allEvents = [...actorEvents, ...recipientEvents];

    // Lưu và validate từng sự kiện
    for (const [i, event] of allEvents.entries()) {
      console.log(`Processing ${action} event ${i}:`, event);

      // Lưu vào WSSContext và TestContext
      const currentActorEvents = globalWSSContext.getValue('wsActor') || [];
      const currentRecipientEvents = globalWSSContext.getValue('wsRecipient') || [];
      const currentContextActorEvents = globalContext.getValue('wsActor') || [];
      const currentContextRecipientEvents = globalContext.getValue('wsRecipient') || [];

      if (actorEvents.includes(event)) {
        globalWSSContext.setValue('wsActor', [...currentActorEvents, event]);
        globalContext.setValue('wsActor', [...currentContextActorEvents, event]);
      } else {
        globalWSSContext.setValue('wsRecipient', [...currentRecipientEvents, event]);
        globalContext.setValue('wsRecipient', [...currentContextRecipientEvents, event]);
      }

      // Validate nếu có expect
      if (expectConfig) {
        const validator = createApiValidator(globalContext);
        const resolvedExpect = resolveExpectConfig(expectConfig, globalContext);
        const errors = validator.validate(event, resolvedExpect);
        if (errors.length > 0) {
          return {
            type: 'logic',
            status: false,
            stepName: `${action}`,
            error: formatErrors(errors),
          };
        }
      }
    }

    return {
      type: 'ws',
      status: true,
      stepName: `${action}`,
    };
  } catch (error) {
    console.error(`Error in ${step.action}:`, error);
    return {
      type: 'ws',
      status: false,
      stepName: `${step.action}`,
      error: error instanceof Error ? error.message : 'Unknown WS error',
    };
  }
}