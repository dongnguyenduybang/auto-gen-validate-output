import { getWebSocket } from '../../utils/ws-store';
import { EventContext, TestContext, WSSContext } from '../../utils/text-context';
import { SendMessageSagaWS } from './send-message.ws';
import { executeAllSteps } from '../../utils/test-executor';
import { executeWSSteps } from '../../utils/ws-execute-ws-step';
import { executeOpenWS } from '../../utils/ws-open';
import { executeWSSCheck } from '../../utils/ws-execute-check';

describe('Test sagas for send-message', () => {
  let pathRequest: string;
  let testType: string;
  let globalContext: TestContext;
  let globalWSSContext: WSSContext;
  let eventContext
  let testNumber = 0;

  beforeAll(async () => {
    pathRequest = 'SendMessageWS';
    testType = 'saga';
    globalContext = new TestContext();
    globalWSSContext = new WSSContext();
    eventContext = new EventContext()

    const resultBeforeAll = await executeAllSteps(SendMessageSagaWS.beforeAll, globalContext, globalWSSContext, eventContext);

    const resultOpenWS = await executeOpenWS(SendMessageSagaWS.wsOpen, globalContext, globalWSSContext);

  }, 10000);

  it('should validate response structure', async () => {
    testNumber++;

    const resultSteps = await executeWSSteps(SendMessageSagaWS.steps, globalContext, globalWSSContext, eventContext);

    const resultCheck = await executeWSSCheck(SendMessageSagaWS.wssCheck, globalContext, globalWSSContext, eventContext)
    globalWSSContext.debug()
    console.log(JSON.stringify(resultCheck))
    expect(resultSteps.every(step => step.status)).toBe(true);
  }, 15000); 

});