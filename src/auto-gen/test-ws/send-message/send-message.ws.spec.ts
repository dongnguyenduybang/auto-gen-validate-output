import { getWebSocket } from '../../utils/ws-store';
import { TestContext, WSSContext } from '../../utils/text-context';
import { SendMessageSagaWS } from './send-message.ws';
import WebSocket from 'ws';
import { executeAllSteps } from '../../utils/test-executor';
import { executeWSSteps } from '../../utils/ws-execute-ws-step';
import { executeOpenWS } from '../../utils/ws-open';

describe('Test sagas for send-message', () => {
  let pathRequest: string;
  let testType: string;
  let globalContext: TestContext;
  let globalWSSContext: WSSContext;
  let testNumber = 0;

  beforeAll(async () => {
    pathRequest = 'SendMessageWS';
    testType = 'saga';
    globalContext = new TestContext();
    globalWSSContext = new WSSContext();

    console.log('beforeAll config:', SendMessageSagaWS.beforeAll);
    const resultBeforeAll = await executeAllSteps(SendMessageSagaWS.beforeAll, globalContext, globalWSSContext);
    console.log('beforeAll result:', resultBeforeAll);

    console.log('wsOpen config:', SendMessageSagaWS.wsOpen);
    const resultOpenWS = await executeOpenWS(SendMessageSagaWS.wsOpen, globalContext, globalWSSContext);
    console.log('wsOpen result:', resultOpenWS);

    globalContext.debug();
    globalWSSContext.debug();
  }, 60000);

  it('should validate response structure', async () => {
    testNumber++;
    try {
      console.log('steps config:', SendMessageSagaWS.steps);
      const resultSteps = await executeWSSteps(SendMessageSagaWS.steps, globalContext, globalWSSContext);
      console.log('steps result:', resultSteps);
      globalContext.debug();
      globalWSSContext.debug();
      expect(resultSteps.every(step => step.status)).toBe(true);
    } catch (error) {
      console.error('Test error:', error);
      throw error;
    }
  }, 180000); // Tăng timeout lên 180s

  afterAll(async () => {
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
  });
});