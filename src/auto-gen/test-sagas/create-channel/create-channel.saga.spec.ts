
    import fs from 'fs';
    import path from 'path';
    import { getTime } from '../../utils/helper';
    import { executeSteps } from '../../utils/text-execute-test';
    import { CreateChannelSaga } from './create-channel.saga';
    describe('Test sagas for create-channel', () => {
      let allSteps = [];
      let testNumber = 0;
      let testType;
      let globalContext, pathRequest
      beforeAll(async () => {
        pathRequest = 'CreateChannelSaga'
        testType = 'saga'
        globalContext = globalThis.globalContext
      });

      it('should validate saga structure', async () => {
        testNumber++;
        try {
    
          await Promise.all(
            CreateChannelSaga.steps.map(async (testCase) => {
              const results = await executeSteps(testCase.step, globalContext);
             
              results.forEach(result => {
                allSteps.push({
                  ...result,
                  caseTitle: testCase.title,
                  phase: 'testCase'
                });
              });
            })
          );
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
        console.log(`📄 Saga test report generated: ${reportPath}`);
      });
    });
  