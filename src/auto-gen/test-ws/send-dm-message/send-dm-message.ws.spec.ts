
import path from 'path';
import fs from 'fs';
import { getTime } from '../../utils/helper';
import { TestContext, WSSContext, EventContext, ResumeContext } from '../../utils/text-context';
import { executeWS } from '../../utils/execute-ws';
import { executeAllSteps } from '../../utils/test-executor';
import { SendDmMessageWS } from './send-dm-message.ws';
import { WebSocketEventCollector } from '../../utils/ws-event-collector';
import axios from 'axios';
import { cleanupApi } from '../../functions/api-factory';

describe('Test sagas for send-dm-message', () => {
  let pathRequest: string;
  let testType: string;
  let context: TestContext;
  let globalWSSContext: WSSContext;
  let eventContext: EventContext;
  let allSteps: any[] = [];
  let contextData;
  let currentTestCaseTitle;
  let resumeContext: ResumeContext;
  const globalCollectors: Record<string, WebSocketEventCollector> = {};
  beforeAll(async () => {
    pathRequest = 'SendDmMessageWS';
    testType = 'ws';
    context = new TestContext();
    globalWSSContext = new WSSContext();
    eventContext = new EventContext();
    resumeContext = new ResumeContext();
    contextData = globalThis.globalContext;
    const beforeEachSteps = SendDmMessageWS.options
      ?.find((option) => option.beforeAll)
      ?.beforeAll || [];

    if (beforeEachSteps.length > 0) {
      const results = await executeWS(
        beforeEachSteps,
        contextData,
        eventContext,
        resumeContext,
        'beforeAll',
        globalCollectors,
      );
      results.forEach((result) => {
        allSteps.push({
          result,
          caseTitle: 'Case',
          phase: 'beforeAll',
        });
      });
    } else {
      contextData = context;
    }
  }, 20000);


  it('should return send dm success ws', async () => {
    currentTestCaseTitle = 'should return send dm success ws';
    const results = await executeWS(
      SendDmMessageWS.options[0].steps[0].step,
      contextData,
      eventContext,
      resumeContext,
      '',
      globalCollectors,
    );

    results.forEach((result) => {
      allSteps.push({
        result,
        caseTitle: currentTestCaseTitle,
        phase: 'test',
      });
    });

    const eventsStep =
      SendDmMessageWS.options?.find((option) => option.events)?.events || [];

    const resultsEvent = await executeWS(
      eventsStep,
      contextData,
      eventContext,
      resumeContext,
      'events',
      globalCollectors,
    );

    const resumeStep =
      SendDmMessageWS.options?.find((option) => option.resume)?.resume || [];

    const resultsEventResume = await executeWS(
      resumeStep,
      contextData,
      eventContext,
      resumeContext,
      'resume',
      globalCollectors,
    );
  }, 30000);


  afterAll(async () => {
    const folderPath = path.join(__dirname, '../reports/send-dm-message');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    const classNames = `send-dm-message`;
    const reportFileName = `send-dm-message-sagas-${getTime()}.report.txt`;
    const { combinedReportTemplate } = await import('../../utils/report-file');
    const reportContent = combinedReportTemplate(
      classNames,
      globalThis.url,
      pathRequest,
      allSteps,
      null,
      null,
      null,
      null,
      null,
      testType
    );

    const reportPath = path.join(folderPath, reportFileName);
    fs.writeFileSync(reportPath, reportContent, 'utf-8');
    console.log(`📄 WS test report generated: ${reportPath}`);


  }, 10000);
});
