import { createApiValidator } from './api-validator';
import { formatErrors, resolveExpectConfig, resolveVariables } from './helper';
import { TestContext, WSSContext } from './text-context';
import { getWebSocket } from './ws-store';
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
import { processAction } from './process-resume';
import { fetchResume } from './fetch-resume';

interface StepResult {
  type?: string;
  status: boolean;
  stepName: string;
  error?: string;
  resumeIndex?: any;
  path?: any
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
  let lastResumeStep: { path: string; index: number } | null = null; // Lưu thông tin resume c
  const wsActor = getWebSocket('ws_wsActor');
  const wsRecipient = getWebSocket('ws_wsRecipient');
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
      const result = await executeStep(step, globalContext, globalWSSContext, collector);
      results.push(result);
      // Nếu step là 'resume', ghi nhớ thông tin (nhưng chưa slice)
      if (step.action === 'resume' && result.resumeIndex !== undefined) {
        lastResumeStep = {
          path: result.path, // 'wsActor' hoặc 'wsRecipient'
          index: result.resumeIndex
        };
      }
    }

    // BƯỚC 2: Sau khi tất cả step chạy xong, mới slice context (nếu có resume)
    if (lastResumeStep) {
      const { path, index } = lastResumeStep;
      const currentEvents = globalWSSContext.getValue(path) || [];
      const eventsAfterResume = currentEvents.slice(index + 1); // Bỏ qua event đã resume
      globalWSSContext.setValue(path, eventsAfterResume); // Cập nhật lại context
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
  }

  globalWSSContext.debug();
  return results;
}

async function executeStep(
  step: any,
  globalContext: TestContext,
  globalWSSContext: WSSContext,
  collector: WebSocketEventCollector,
): Promise<StepResult> {
  let resultResume: any = null;
  let resumeIndex: any[] = []
  try {
    const { action, method, path, body, headers, expect: expectConfig } = step;
    const wsActor = getWebSocket('ws_wsActor');
    if (!wsActor || wsActor.readyState !== WebSocket.OPEN) {
      throw new Error(`WebSocket for ${action} is not open`);
    }

    if (action === 'resume') {
      const dataResume = processAction(path, body, globalWSSContext)

      resultResume = await fetchResume(action, path, dataResume, globalWSSContext, collector)
      return {
        type: 'ws',
        status: true,
        stepName: action,
        resumeIndex: resultResume.resumeEventIndex, // Giả sử `resultResume` có `index`
        path: resultResume.path // 'wsActor' hoặc 'wsRecipient'
      };

    } else {

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
    }




    // Thu thập sự kiện mới
    const { actorEvents, recipientEvents } = await collector.collectEventsAfterAction(5000, 5);

    const currentActorEvents = globalWSSContext.getValue('wsActor') || [];
    const currentRecipientEvents = globalWSSContext.getValue('wsRecipient') || [];
    // Lọc các sự kiện mới chưa có trong context bị trùng lặp
    const newActorEvents = actorEvents.filter(
      event => !currentActorEvents.some(existing => existing.id === event.id)
    );
    const newRecipientEvents = recipientEvents.filter(
      event => !currentRecipientEvents.some(existing => existing.id === event.id)
    );

    const mappedActorEvents = newActorEvents.map((e: any) => ({
      id: e.id,
      type: e.type,
      source: e.source
    }));
    const mappedRecipientEvents = newRecipientEvents.map((e: any) => ({
      id: e.id,
      type: e.type,
      source: e.source
    }));
    globalWSSContext.setValue('wsActor', currentActorEvents.concat(mappedActorEvents));
    globalWSSContext.setValue('wsRecipient', currentRecipientEvents.concat(mappedRecipientEvents));

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