
    import fs from 'fs';
    import path from 'path';
    import { getTime } from '../../utils/helper';
    import { executeAllSteps } from '../../utils/test-executor';
    import { TestContext } from '../../utils/text-context';
    import { SendMessageSaga } from './send-message.saga';
    describe('Test sagas for send-message', () => {
      let failedStep = [];
      let testNumber = 0;
      let testType;
      let globalContext, pathRequest
      beforeAll(async () => {
        pathRequest = 'SendMessageSaga'
        testType = 'saga'
        globalContext = new TestContext();
        });

      it('should validate response structure', async () => {
        testNumber++;
        try {
              const resultStep = await executeAllSteps(SendMessageSaga.steps, globalContext)
              resultStep.forEach((step, index)=> {
                failedStep.push({
                  type: step.type,
                  status: step.status,
                  stepName: step.stepName,
                  error: step.error
                })
              })
          }catch (error){
            console.log(error)
          }         
      });

      afterAll(async () => {
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
        console.log(`📄 Saga test report generated: ${reportPath}`);
      });
    });
  