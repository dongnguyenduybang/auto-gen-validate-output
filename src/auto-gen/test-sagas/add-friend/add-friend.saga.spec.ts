import fs from 'fs';
import path from 'path';
import { getTime } from '../../utils/helper';
import { TestContext } from '../../utils/text-context';
import { executeSteps } from '../../utils/text-execute-test';
import { AddFriendSaga } from './add-friend.saga';
describe('Test sagas for add-friend', () => {
  const allSteps = [];
  let testType;
  let globalContext, pathRequest;
  beforeAll(async () => {
    pathRequest = 'AddFriendSaga';
    testType = 'saga';
    globalContext = globalThis.globalContext
  });

  it('should validate saga structure', async () => {
    try {
      await Promise.all(
        AddFriendSaga.steps.map(async (testCase) => {
          const results = await executeSteps(testCase.step, globalContext);

          results.forEach((result) => {
            allSteps.push({
              ...result,
              caseTitle: testCase.title,
              phase: 'testCase',
            });
          });
        }),
      );
    } catch (error) {
      console.log(error);
    }
  });

  afterAll(async () => {

    const folderPath = path.join(__dirname, '../reports/add-friend');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    const classNames = `add-friend`;
    const reportFileName = `add-friend-sagas-${getTime()}.report.txt`;
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
    console.log(`📄 Saga test report generated: ${reportPath}`);
  });
});
