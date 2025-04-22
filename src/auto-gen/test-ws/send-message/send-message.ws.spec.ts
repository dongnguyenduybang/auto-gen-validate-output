import { getWebSocket } from '../../utils/ws-store';
import { TestContext, WSSContext } from '../../utils/text-context';
import { SendMessageSagaWS } from './send-message.ws';
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
    globalContext.debug();
    globalWSSContext.debug();

    console.log('wsOpen config:', SendMessageSagaWS.wsOpen);
    const resultOpenWS = await executeOpenWS(SendMessageSagaWS.wsOpen, globalContext, globalWSSContext);
    console.log('wsOpen result:', resultOpenWS);
    globalContext.debug();
    globalWSSContext.debug();
  }, 60000); // Tăng timeout lên 60s để đảm bảo đủ thời gian cho beforeAll

  it('should validate response structure', async () => {
    testNumber++;


    console.log('steps config:', SendMessageSagaWS.steps);
    const resultSteps = await executeWSSteps(SendMessageSagaWS.steps, globalContext, globalWSSContext);
    console.log('steps result:', resultSteps);
    globalContext.debug();
    globalWSSContext.debug();

    expect(resultSteps.every(step => step.status)).toBe(true);
  }, 240000); // Giữ timeout 240s vì có nhiều bước

  // Không cần afterAll vì WebSocket đã được đóng trong ws-execute-ws-step.ts và ws-open.ts
});