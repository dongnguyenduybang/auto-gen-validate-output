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
import { UpdateChannelNameWS } from './update-channel-name.ws';
import { WebSocketEventCollector } from '../../utils/ws-event-collector';

describe('Test sagas for update-channel-name', () => {
  let pathRequest: string;
  let testType: string;
  let context: TestContext;
  let globalWSSContext: WSSContext;
  let eventContext: EventContext;
  const allSteps: any[] = [];
  let contextData;
  let currentTestCaseTitle;
  let resumeContext: ResumeContext;
  const globalCollectors: Record<string, WebSocketEventCollector> = {};
  beforeAll(async () => {
    pathRequest = 'UpdateChannelNameWS';
    testType = 'ws';
    context = new TestContext();
    globalWSSContext = new WSSContext();
    eventContext = new EventContext();
    resumeContext = new ResumeContext();
    contextData = globalThis.globalContext;
    const beforeEachSteps =
      UpdateChannelNameWS.options?.find((option) => option.beforeAll)
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
  }, 10000);

  it('should return owner update channel name ws', async () => {
    currentTestCaseTitle = 'should return owner update channel name ws';

    const results = await executeWS(
      UpdateChannelNameWS.options[0].steps[0].step,
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
      UpdateChannelNameWS.options?.find((option) => option.events)?.events ||
      [];

    const resultsEvent = await executeWS(
      eventsStep,
      contextData,
      eventContext,
      resumeContext,
      'events',
      globalCollectors,
    );
  }, 30000);

  afterAll(async () => {
    const folderPath = path.join(__dirname, '../reports/update-channel-name');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    const classNames = `update-channel-name`;
    const reportFileName = `update-channel-name-sagas-${getTime()}.report.txt`;
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
  });
});
