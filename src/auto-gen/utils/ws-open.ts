import { initSocketEvents } from '../functions/connect-ws';
import { createApiValidator } from './api-validator';
import { extractDatas } from './extract-data';
import { formatErrors, resolveExpectConfig, resolveVariables } from './helper';
import { TestContext, WSSContext } from './text-context';
import { connectWSS } from './ws-connect';
import { setWebSocket } from './ws-store';

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

  for (const [index, step] of wssSteps.entries()) {
    console.log(`Processing step ${index}:`, step);
    const result = await executeStep(step, globalContext, globalWSSContext, index);
    results.push(result);
    if (!result.status) {
      console.log(`Stopping at step ${step.action} due to failure`);
      break;
    }
  }

  globalWSSContext.debug();
  return results;
}

async function executeStep(
  step: any,
  globalContext: TestContext,
  globalWSSContext: WSSContext,
  stepIndex: number
): Promise<StepResult> {
  try {
    const { action, path, expect: expectConfig } = step;
    const resolvePath = resolveVariables(path, globalContext);

    console.log(`Opening WebSocket for ${action} at ${resolvePath}`);
    const { ws, message } = await connectWSS(resolvePath, 1, 10000);
    const parsedMessage = message[0]; // Lấy sự kiện đầu tiên
    console.log('Parsed message:', parsedMessage);

    // Lưu WebSocket vào wsStore
    setWebSocket(`ws_${action}`, ws);
    console.log(`Stored WebSocket for ws_${action}, state: ${ws.readyState}`);

    // Lưu sự kiện GATEWAY_CONNECTED vào WSSContext
    const currentEvents = globalWSSContext.getValue(action) || [];
    globalWSSContext.setValue(action, [...currentEvents, parsedMessage]);
    console.log(`Updated ${action} events:`, globalWSSContext.getValue(action));

    // Trích xuất dữ liệu và lưu vào TestContext
    const groupBySection = action === 'wsActor' || action === 'wsRecipient';
    const extractedData = extractDatas(parsedMessage, action, groupBySection);
    console.log('Extracted data:', extractedData);
    globalContext.mergeData(extractedData);

    // Validate logic
    if (expectConfig) {
      const validator = createApiValidator(globalContext);
      const resolvedExpect = resolveExpectConfig(expectConfig, globalContext);
      console.log('Resolved expect config:', resolvedExpect);
      const errors = validator.validate(parsedMessage, resolvedExpect);
      if (errors.length > 0) {
        return {
          type: 'logic',
          status: false,
          stepName: `${step.action}`,
          error: formatErrors(errors),
        };
      }
    }

    return { type: parsedMessage.type || null, status: true, stepName: `${action}` };
  } catch (error) {
    console.error(`Error in executeOpenWSStep for ${step.action}:`, error);
    return {
      type: 'ws',
      status: false,
      stepName: `${step.action}`,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}