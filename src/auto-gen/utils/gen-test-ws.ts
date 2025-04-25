import * as path from 'path';
import * as fs from 'fs';

export function genTestWS(dtoName: string) {
  const classNameCapitalized = dtoName
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  const outputDir = path.join(__dirname, `../test-ws/${dtoName}`);
  const specContent = `
    import path from 'path';
    import fs from 'fs';
    import { getTime } from '../../utils/helper';
    import { executeAllSteps } from '../../utils/test-executor';
    import { TestContext, WSSContext, EventContext } from '../../utils/text-context';
    import { executeWSSCheck } from '../../utils/ws-execute-check';
    import { executeWSSteps } from '../../utils/ws-execute-ws-step';
    import { executeOpenWS } from '../../utils/ws-open';
    import { ${classNameCapitalized}SagaWS } from './${dtoName}.ws';
    describe('Test sagas for ${dtoName}', () => {
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
        pathRequest = '${classNameCapitalized}WS'
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
                result: resultCheck,
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
        const folderPath = path.join(__dirname, '../reports/${dtoName}');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
        const classNames = \`${dtoName}\`;
        const reportFileName = \`${dtoName}-sagas-\${getTime()}.report.txt\`;  
        const { combinedReportTemplate } = await import('../../utils/report-file');
        const reportContent = combinedReportTemplate(
            classNames,
            globalThis.url,
            pathRequest,
            failedStep,
            null,
            null,
            null,
            null,
            null,
            testType
        );
        
        const reportPath = path.join(folderPath, reportFileName);
        fs.writeFileSync(reportPath, reportContent, 'utf-8');
        console.log(\`📄 WS test report generated: \${reportPath}\`);
      });
    });
  `;

  const outputPath = path.join(outputDir, `${dtoName}.ws.spec.ts`);
  fs.writeFileSync(outputPath, specContent, 'utf-8');
  console.log(`✅ Generated WS test: ${outputPath}`);
}
