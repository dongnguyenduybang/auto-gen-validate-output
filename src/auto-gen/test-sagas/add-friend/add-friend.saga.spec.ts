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
    globalContext = new TestContext();
    const beforeResults = await executeSteps(
      AddFriendSaga.beforeAll.map((b) => b.step),
      globalContext,
    );

    beforeResults.forEach((result) => {
      allSteps.push({
        ...result,
        caseTitle: 'BeforeAll Setup',
        phase: 'beforeAll',
      });
    });
  });

  it('should validate saga structure', async () => {
    try {
      await Promise.all(
        AddFriendSaga.steps.map(async (testCase) => {
          const caseContext = globalContext.clone();
          const results = await executeSteps(testCase.step, caseContext);

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
    const afterResults = await executeSteps(
      AddFriendSaga.afterAll.map((a) => a.step),
      globalContext,
    );
    afterResults.forEach((result) => {
      allSteps.push({
        ...result,
        caseTitle: 'AfterAll Cleanup',
        phase: 'afterAll',
      });
    });
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
