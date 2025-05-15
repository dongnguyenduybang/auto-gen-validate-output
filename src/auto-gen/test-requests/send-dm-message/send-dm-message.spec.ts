
import fs from 'fs';
import path from 'path';
import { getTime, summarizeErrors, summaryFields, resolveCallAPI, resolveVariables } from '../../utils/helper';
import { executeAllSteps } from '../../utils/test-executor';
import { TestResult } from '../../utils/declarations';
describe('Testcase for send-dm-message', () => {
  let totalTests = 0;
  let passed201 = 0;
  let failedTests: any[] = [];
  let codedTest: any[] = [];
  let logicTests: any[] = [];
  let passedTests = 0;
  let passed200 = 0;
  let testNumber: number;
  let failedStep: any[] = [];
  let testType: string;
  let resolvedData: any;
  let pathRequest: string;
  let globalContext: any;

  beforeAll(async () => {
    testType = 'request';
    globalContext = globalThis.globalContext;
  });


  it('Test case #1 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":123,"ref":123}', async () => {
    testNumber = 1;
    totalTests++;
    const payloadObj = { "userId": 123, "content": 123, "ref": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        "sendDmMessage",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "content": 123, "ref": 123 },
        globalContext
      );
      const data = response.data;
      const expectJson = ["Could not resolve permission type"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(softExpectDetails, expectJson);
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || []
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(softExpectDetails, expectJson);
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || []
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code'
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message
      });
    }
  });



  afterAll(async () => {
    const resultStep = await executeAllSteps([], globalContext);
    resultStep.forEach((step) => {
      failedStep.push({
        type: step.type,
        status: step.status,
        stepName: step.stepName,
        error: step.error
      });
    });

    const testResult: TestResult = {
      path: '/Message/SendDMMessage',
      className: 'send-dm-message',
      chunkNumber: undefined,
      failedTests: [...failedTests],
      codedTest: [...codedTest],
      passedTests: passedTests,
      totalTests: totalTests,
      logicTests: [...logicTests],
      failedStep: [...failedStep]
    };
    const reportDir = path.join(__dirname, '../../tmp-reports');
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    const chunkNumber = undefined
    const fileName = 'send-dm-message' + (chunkNumber ? `-chunk-undefined` : '') + '.result.json';
    const filePath = path.join(reportDir, fileName);
    fs.writeFileSync(filePath, JSON.stringify(testResult, null, 2), 'utf-8');

    console.log(`📝 Saved result for send-dm-message chunk single to ${filePath}`);
  });
})
