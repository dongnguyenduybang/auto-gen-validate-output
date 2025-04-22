import { createApiValidator } from './api-validator';
import { formatErrors, resolveExpectConfig, resolveVariables } from './helper';
import { TestContext, WSSContext } from './text-context';
import { setWebSocket, getWebSocket } from './ws-store';
import WebSocket from 'ws';
import { WebSocketEventCollector } from './ws-event-collector';
import { get } from 'lodash';

interface StepResult {
  type?: string;
  status: boolean;
  stepName: string;
  error?: string;
}

export async function executeOpenWS(
  wssSteps: any[],
  globalContext: TestContext,
  globalWSSContext: WSSContext
): Promise<StepResult[]> {
  console.log('wsOpen steps:', wssSteps);
  const results: StepResult[] = [];
  const collectors: Record<string, WebSocketEventCollector> = {};

  try {
    for (const [index, step] of wssSteps.entries()) {
      console.log(`Processing step ${index}:`, step);
      const result = await executeStep(step, globalContext, globalWSSContext, index, collectors);
      results.push(result);
      if (!result.status) {
        console.warn(`Step ${step.action} failed, continuing with next steps`);
      }
    }
  } catch (error) {
    console.error(`Error in executeOpenWS:`, error);
    results.push({
      type: 'exception',
      status: false,
      stepName: 'setup',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  } finally {
    console.log('Keeping WebSocket connections open for further steps');
  }

  globalWSSContext.debug();
  return results;
}

async function executeStep(
  step: any,
  globalContext: TestContext,
  globalWSSContext: WSSContext,
  stepIndex: number,
  collectors: Record<string, WebSocketEventCollector>
): Promise<StepResult> {
  try {
    const { action, path, expect: expectConfig } = step;
    const resolvePath = resolveVariables(path, globalContext);

    console.log(`Opening WebSocket for ${action} at ${resolvePath}`);
    const ws = new WebSocket(resolvePath);

    await new Promise((resolve, reject) => {
      ws.once('open', resolve);
      ws.once('error', reject);
      ws.once('close', () => reject(new Error('WebSocket closed before connecting')));
    });
    // Lưu WebSocket instance
    setWebSocket(`ws_${action}`, ws);
    console.log(`Stored WebSocket for ${action}, readyState:`, ws.readyState);
    // Khởi tạo WebSocketEventCollector
    const wsActor = getWebSocket('ws_wsActor') || ws;
    const wsRecipient = getWebSocket('ws_wsRecipient') || ws;
    const collector = new WebSocketEventCollector(wsActor, wsRecipient);
    collectors[action] = collector;

    // Thu thập sự kiện ban đầu sau khi mở kết nối
    const { actorEvents, recipientEvents } = await collector.collectEventsAfterAction(20000, 5);
    console.log(`Step ${action} - Actor events:`, actorEvents);
    console.log(`Step ${action} - Recipient events:`, recipientEvents);

    // Lấy mảng sự kiện hiện có từ WSSContext và TestContext
    const existingActorEvents = globalWSSContext.getValue('wsActor') || [];
    const existingRecipientEvents = globalWSSContext.getValue('wsRecipient') || [];
    const currentActorEvents = globalContext.getValue('wsActor') || [];
    const currentRecipientEvents = globalContext.getValue('wsRecipient') || [];

    // Push sự kiện mới vào mảng
    const updatedActorEvents = [...existingActorEvents, ...actorEvents];
    const updatedRecipientEvents = [...existingRecipientEvents, ...recipientEvents];

    for (const [i, event] of actorEvents.concat(recipientEvents).entries()) {
      console.log(`Processing ${action} event ${i}:`, event);

      // Validate từng message nếu có expect
      if (expectConfig) {
        const validator = createApiValidator(globalContext);
        const resolvedExpect = resolveExpectConfig(expectConfig, globalContext);
        const errors = validator.validate(event, resolvedExpect);
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

    // Cập nhật mảng vào TestContext và WSSContext
    globalContext.setValue('wsActor', [...currentActorEvents, ...actorEvents]);
    globalContext.setValue('wsRecipient', [...currentRecipientEvents, ...recipientEvents]);
    globalWSSContext.setValue('wsActor', updatedActorEvents);
    globalWSSContext.setValue('wsRecipient', updatedRecipientEvents);

    return { 
      type: 'ws_connection', 
      status: true, 
      stepName: `${action}`,
    };
  } catch (error) {
    console.error(`WebSocket Error in ${step.action}:`, error);
    return {
      type: 'ws',
      status: false,
      stepName: `${step.action}`,
      error: error instanceof Error ? error.message : 'Unknown WS error',
    };
  }
}