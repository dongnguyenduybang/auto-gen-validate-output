
import fs from 'fs';
import path from 'path';
import { getTime } from '../../utils/helper';
import { executeAllSteps } from '../../utils/test-executor';
import { TestContext } from '../../utils/text-context';
import { SendDmMessageSaga } from './send-dm-message.saga';
describe('Test sagas for send-dm-message', () => {
  let failedStep = [];
  let testNumber = 0;
  let testType;
  let globalContext, pathRequest
  beforeAll(async () => {
    pathRequest = 'SendDmMessageSaga'
    testType = 'saga'
    globalContext = new TestContext();
  });

  it('should validate response structure', async () => {
    testNumber++;
    // try {
    //   const resultStep = await executeAllSteps(SendDmMessageSaga.steps, globalContext)
    //   resultStep.forEach((step, index) => {
    //     failedStep.push({
    //       type: step.type,
    //       status: step.status,
    //       stepName: step.stepName,
    //       error: step.error
    //     })
    //   })
    // } catch (error) {
    //   console.log(error)
    // }
  });

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
