
import fs from 'fs';
import path from 'path';
import { getTime } from '../../utils/helper';
import { executeSteps } from '../../utils/text-execute-test';
import { TestContext } from '../../utils/text-context';
import { CreateChannelSaga } from './create-channel.saga';

describe('Test sagas for create-channel', () => {
  let allSteps = [];
  let testType;
  let globalContext, pathRequest, context, contextData;
  let testCaseNumber = 0;
  let currentTestCaseTitle = ''
  beforeAll(async () => {
    pathRequest = 'CreateChannelSaga';
    testType = 'saga';
    globalContext = globalThis.globalContext;
    context = new TestContext();
  });

  beforeEach(async () => {
    testCaseNumber++;
    const beforeEachSteps = CreateChannelSaga.options
      ?.find((option) => option.beforeEach)
      ?.beforeEach || [];

    if (beforeEachSteps.length > 0) {
      contextData = context.clone();
      const results = await executeSteps(beforeEachSteps, contextData);
      results.forEach((result) => {
        allSteps.push({
          ...result,
          caseTitle: `Case ${testCaseNumber}`,
          phase: 'beforeEach',
        });
      });
    } else {
      contextData = globalContext
    }
  });

  // tạo dynamic tests từ steps

  it('should return false when member update channel name', async () => {
    currentTestCaseTitle = 'should return false when member update channel name';
    const results = await executeSteps(CreateChannelSaga.steps[0].step, contextData);
          console.log(results)
    results.forEach((result) => {
      allSteps.push({
        ...result,
        caseTitle: currentTestCaseTitle,
        phase: 'test',
      });
    });
  });

  afterEach(async () => {
    const afterEachSteps = CreateChannelSaga.options
      ?.find((option) => option.afterEach)
      ?.afterEach || [];

    if (afterEachSteps.length > 0) {
      contextData = context.clone();
      const results = await executeSteps(afterEachSteps, contextData);

      results.forEach((result) => {
        allSteps.push({
          ...result,
          caseTitle: currentTestCaseTitle || 'AfterEach Setup',
          phase: 'afterEach',
        });
      });
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
    fs.writeFileSync(path.join(folderPath, reportFileName), reportContent, 'utf-8');
  });
});
