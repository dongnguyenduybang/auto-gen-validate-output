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
  let contextData: any;
  let currentTestCaseTitle: string;
  let resumeContext: ResumeContext;
  const globalCollectors: Record<string, WebSocketEventCollector> = {};
  
  beforeAll(async () => {
    try {
      pathRequest = 'SendDmMessageWS';
      testType = 'ws';
      context = new TestContext();
      globalWSSContext = new WSSContext();
      eventContext = new EventContext();
      resumeContext = new ResumeContext();
      contextData = globalThis.globalContext;
      
      const beforeAllSteps = SendDmMessageWS.options
        ?.find((option) => option.beforeAll)
        ?.beforeAll || [];

      if (beforeAllSteps.length > 0) {
        const results = await executeWS(
          beforeAllSteps,
          contextData,
          eventContext,
          resumeContext,
          'beforeAll',
          globalCollectors,
        );
        
        console.log('BeforeAll results:', results);
        
        // Process results and add to allSteps
        results.forEach((result, index) => {
          allSteps.push({
            result,
            caseTitle: 'BeforeAll',
            phase: 'beforeAll',
            stepIndex: index,
            hasError: result?.error ? true : false
          });
        });
      } else {
        contextData = context;
      }
    } catch (error) {
      console.error('Error in beforeAll:', error);
      allSteps.push({
        result: {
          error: error instanceof Error ? error.message : String(error),
          stack: error instanceof Error ? error.stack : undefined,
          success: false,
          timestamp: new Date().toISOString()
        },
        caseTitle: 'BeforeAll',
        phase: 'beforeAll',
        hasError: true
      });
      throw error;
    }
  }, 20000);

  it('should return send dm success ws', async () => {
    try {
      currentTestCaseTitle = 'should return send dm success ws';
      
      const results = await executeWS(
        SendDmMessageWS.options[0].steps[0].step,
        contextData,
        eventContext,
        resumeContext,
        '',
        globalCollectors,
      );

      console.log('Test step results:', results);

      results.forEach((result, index) => {
        allSteps.push({
          result,
          caseTitle: currentTestCaseTitle,
          phase: 'test',
          stepIndex: index,
          hasError: result?.error ? true : false
        });
      });

      // Execute events step
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

      console.log('Events results:', JSON.stringify(resultsEvent,null,2));
      
      // Process event results
      resultsEvent.forEach((result, index) => {
        allSteps.push({
          result,
          caseTitle: currentTestCaseTitle,
          phase: 'events',
          stepIndex: index,
          hasError: result?.error ? true : false
        });
      });

      // Execute resume step
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

      console.log('Resume results:', JSON.stringify(resultsEventResume, null,2));
      
      // Process resume results
      resultsEventResume.forEach((result, index) => {
        allSteps.push({
          result,
          caseTitle: currentTestCaseTitle,
          phase: 'resume',
          stepIndex: index,
          hasError: result?.error ? true : false
        });
      });

      // Check if any step had errors
      const hasErrors = allSteps.some(step => step.hasError);
      if (hasErrors) {
        console.error('Test completed with errors. Check the report for details.');
        // You can decide whether to fail the test or just log the errors
        // throw new Error('Test had errors during execution');
      }

    } catch (error) {
      console.error('Error in test case:', error);
      
      // Add error to allSteps for reporting
      allSteps.push({
        result: {
          error: error instanceof Error ? error.message : String(error),
          stack: error instanceof Error ? error.stack : undefined,
          success: false,
          timestamp: new Date().toISOString()
        },
        caseTitle: currentTestCaseTitle,
        phase: 'test-error',
        hasError: true
      });
      
      throw error; // Re-throw to fail the test
    }
  }, 30000);

  afterAll(async () => {
    try {
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

    } catch (error) {
      console.error('Error in afterAll:', error);
    }
  }, 10000);
});