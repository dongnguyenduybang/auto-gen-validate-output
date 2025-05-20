import path from 'path';
import fs from 'fs';
import { getTime } from '../../utils/helper';
import {
  TestContext,
  WSSContext,
  EventContext,
  ResumeContext,
} from '../../utils/text-context';
import { executeWS } from '../../utils/execute-ws';
import { SendMessageWS } from './send-message.ws';
import { WebSocketEventCollector } from '../../utils/ws-event-collector';
describe('Test sagas for send-message', () => {
  let pathRequest: string;
  let testType: string;
  let contextData: TestContext;
  let globalWSSContext: WSSContext;
  let eventContext: EventContext;
  let resumeContext: ResumeContext;
  let allSteps: any[] = [];
  let currentTestCaseTitle;
  let globalCollectors: Record<string, WebSocketEventCollector> = {};
  beforeAll(async () => {
    pathRequest = 'SendMessageWS';
    testType = 'ws';
    contextData = globalThis.globalContext;
    globalWSSContext = new WSSContext();
    eventContext = new EventContext();
    resumeContext = new ResumeContext();
    const beforeAllSteps =
      SendMessageWS.options?.find((option) => option.beforeAll)?.beforeAll ||
      [];

    if (beforeAllSteps.length > 0) {
      const results = await executeWS(
        beforeAllSteps,
        contextData,
        eventContext,
        resumeContext,
        'beforeAll',
        globalCollectors,
      );
      results.forEach((result) => {
        allSteps.push({
          ...result,
          caseTitle: `Case`,
          phase: 'beforeEach',
        });
      });
    }
  }, 15000);

  it('should return ...', async () => {
    currentTestCaseTitle = 'should return ...';
    const results = await executeWS(
      SendMessageWS.steps[0].step,
      contextData,
      eventContext,
      resumeContext,
      '',
      globalCollectors,
    );
    results.forEach((result) => {
      allSteps.push({
        ...result,
        caseTitle: currentTestCaseTitle,
        phase: 'test',
      });
    });
  }, 30000);

  afterAll(async () => {
    const resumeSteps =
      SendMessageWS.options?.find((option) => option.resume)?.resume || [];

    if (resumeSteps.length > 0) {
      const results = await executeWS(
        resumeSteps,
        contextData,
        eventContext,
        resumeContext,
        'resume',
        globalCollectors,
      );
      results.forEach((result) => {
        allSteps.push({
          ...result,
          caseTitle: `Case`,
          phase: 'resume',
        });
      });
    }
    const folderPath = path.join(__dirname, '../reports/send-message');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    const classNames = `send-message`;
    const reportFileName = `send-message-sagas-${getTime()}.report.txt`;
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
      testType,
    );

    const reportPath = path.join(folderPath, reportFileName);
    fs.writeFileSync(reportPath, reportContent, 'utf-8');
    console.log(`📄 WS test report generated: ${reportPath}`);
  }, 30000);
});
