
    import fs from 'fs';
    import path from 'path';
    import { getTime } from '../../utils/helper';
    import { executeAllSteps } from '../../utils/test-executor';
    import { TestContext } from '../../utils/text-context';
    import { OwnerCreateChannelSaga } from './owner-create-channel.saga';
    describe('Test sagas for owner-create-channel', () => {
      let failedStep = [];
      let testNumber = 0;
      let testType;
      let globalContext, pathRequest
      beforeAll(async () => {
        pathRequest = 'OwnerCreateChannelSaga'
        testType = 'saga'
        globalContext = new TestContext();
        });

      it('should validate saga structure', async () => {
        testNumber++;
        try {
              const resultStep = await executeAllSteps(OwnerCreateChannelSaga.steps, globalContext)
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
        const folderPath = path.join(__dirname, '../reports/owner-create-channel');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
        const classNames = `owner-create-channel`;
        const reportFileName = `owner-create-channel-sagas-${getTime()}.report.txt`;  
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
  