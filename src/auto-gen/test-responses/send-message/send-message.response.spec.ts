
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { getTime, resolveCallAPI, summarizeErrors } from '../../utils/helper';
import { SendMessageResponse } from '../../response/send-message.response';
import { plainToInstance } from 'class-transformer';
import { validateResponses } from '../../validates/validate-response';
import { TestContext } from '../../utils/text-context';

describe('Test response for send-message', () => {
  let failedTests = [];
  let failedStep = []
  let passedTests = 0;
  let testNumber = 0;
  let totalTests = 0;
  let requestUrl, globalContext, pathRequest, payloadResponse, testType
  beforeAll(async () => {
    testType = 'response'
    globalContext = new TestContext();
  });

  it('should validate response structure', async () => {
    testNumber++;
    totalTests++;
    try {
      const response = await resolveCallAPI(
        "sendMessage",
        { "x-session-token": "{{token}}" },
        { "channelId": "{{channelId}}", "workspaceId": "0", "content": "test response send message", "ref": "ref" },
        globalContext
      );
      const data = response.data
      if (data.ok === false) {
        failedTests.push({
          testcase: testNumber,
          error: data.error.details
        })
      } else {
        const instance = plainToInstance(SendMessageResponse, data);
        const validateResponse = await validateResponses(payloadResponse, instance, globalContext);
        if (validateResponse.length > 0) {
          failedTests.push({
            testcase: testNumber,
            error: validateResponse
          })
        } else {
          passedTests++;
        }

      }

    } catch (error) {
      console.error('Test failed:', error);
    }
  });

  afterAll(async () => {
    const folderPath = path.join(__dirname, '../reports/send-message');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const summary = summarizeErrors(failedTests, null, null);
    const classNames = `send-message`;
    const reportFileName = `send-message-response-${getTime()}.report.txt`;
    const { combinedReportTemplate } = await import('../../utils/report-file');
    const reportContent = combinedReportTemplate(
      classNames,
      globalThis.url,
      pathRequest,
      failedStep,
      passedTests,
      failedTests,
      totalTests,
      null,
      summary,
      testType
    );

    const reportPath = path.join(folderPath, reportFileName);
    fs.writeFileSync(reportPath, reportContent, 'utf-8');
    console.log(`📄 Response test report generated: ${reportPath}`);
  });

})

