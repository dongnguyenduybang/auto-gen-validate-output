
    import fs from 'fs';
    import path from 'path';
    import { getTime } from '../../utils/helper';
    import { executeAllSteps } from '../../utils/test-executor';
    import { TestContext } from '../../utils/text-context';
    import { CreateChannelSaga } from './create-channel.saga';
    describe('Test sagas for create-channel', () => {
      let failedStep = [];
      let testNumber = 0;
      let testType;
      let globalContext, pathRequest
      beforeAll(async () => {
        pathRequest = 'CreateChannelSaga'
        testType = 'saga'
        globalContext = new TestContext();
        });

      it('should validate response structure', async () => {
        testNumber++;
        try {
              const resultStep = await executeAllSteps(CreateChannelSaga.steps, globalContext)
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
        const folderPath = path.join(__dirname, '../reports/create-channel');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
        const classNames = `create-channel`;
        const reportFileName = `create-channel-sagas-${getTime()}.report.txt`;  
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
  