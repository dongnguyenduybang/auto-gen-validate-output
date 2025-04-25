
    import path from 'path';
    import fs from 'fs';
    import { getTime } from '../../utils/helper';
    import { executeAllSteps } from '../../utils/test-executor';
    import { TestContext, WSSContext, EventContext } from '../../utils/text-context';
    import { executeWSSCheck } from '../../utils/ws-execute-check';
    import { executeWSSteps } from '../../utils/ws-execute-ws-step';
    import { executeOpenWS } from '../../utils/ws-open';
    import { SendMessageSagaWS } from './send-message.ws';
    describe('Test sagas for send-message', () => {
      let pathRequest: string;
      let testType: string;
      let globalContext: TestContext;
      let globalWSSContext: WSSContext;
      let eventContext: EventContext;
      let testNumber = 0;
      let failedStep = [];
      let passedTests = 0;
      let failedTests: any[] = [];
      let totalTests = 0;
      beforeAll(async () => {
        pathRequest = 'SendMessageWS'
            testType = 'ws';
        globalContext = new TestContext();
        globalWSSContext = new WSSContext();
        eventContext = new EventContext();
          const resultBeforeAll = await executeAllSteps(SendMessageSagaWS.beforeAll, globalContext, globalWSSContext, eventContext);
          const resultOpenWS = await executeOpenWS(SendMessageSagaWS.wsOpen, globalContext, globalWSSContext);
         });

      it('should validate response structure', async () => {
        testNumber++;
         try {
              const resultSteps = await executeWSSteps(SendMessageSagaWS.steps, globalContext, globalWSSContext, eventContext)
        
              const resultCheck = await executeWSSCheck(SendMessageSagaWS.wssCheck, globalContext, globalWSSContext, eventContext);
              const checkStatus = resultCheck.success;
              failedStep.push({
                type: 'ws',
                status: checkStatus,
                stepName: 'wssCheck',
                result: resultCheck, // Lưu toàn bộ WSResult
              });
        
              const allStepsPassed = resultSteps.every(step => step.status ?? true) && checkStatus;
              if (allStepsPassed) {
                passedTests++;
              } else {
                failedTests.push({
                  testcase: testNumber,
                  result: resultCheck, 
                });
              }
        
              expect(allStepsPassed).toBe(true);
            } catch (error) {
              failedTests.push({
                testcase: testNumber,
                result: error instanceof Error ? error.message : JSON.stringify(error),
              });
              expect(error).toBeNull();
            }
          }, 15000);

      afterAll(async () => {
        const folderPath = path.join(__dirname, '../reports/send-message');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
        const classNames = `send-message-ws-saga`;
        const reportFileName = `send-message-sagas-${getTime()}.report.txt`;  
        const { combinedReportTemplate } = await import('../../utils/report-file');
        const reportContent = combinedReportTemplate(
            classNames,
            globalThis.url,
            pathRequest,
            failedStep,
            passedTests,
            null,
            null,
            null,
            null,
            testType
        );
        
        const reportPath = path.join(folderPath, reportFileName);
        fs.writeFileSync(reportPath, reportContent, 'utf-8');
        console.log(`📄 WS test report generated: ${reportPath}`);
      });
    });
  