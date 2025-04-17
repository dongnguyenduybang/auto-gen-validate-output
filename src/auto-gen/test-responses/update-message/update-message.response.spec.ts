
    import fs from 'fs';
    import path from 'path';
    import axios from 'axios';
    import { getTime, summarizeErrors } from '../../utils/helper';
    import { UpdateMessageResponse } from '../../response/update-message.response';
    import { plainToInstance } from 'class-transformer';
    import { validateResponses } from '../../validates/validate-response';
    import { executeAllSteps, resolveVariables } from '../../utils/test-executor';
    import { TestContext } from '../../utils/text-context';

    describe('Test response for update-message', () => {
      let failedTests = [];
      let failedStep = []
      let passedTests = 0;
      let testNumber = 0;
      let totalTests = 0;
      let requestUrl, globalContext, resolvedHeader, pathRequest, methodRequest, headerRequest, payloadResponse, testType
      beforeAll(async () => {
        testType = 'response'
        globalContext = new TestContext();
        const resultStep = await executeAllSteps([{"action":"mockUser","body":{"quantity":2,"prefix":"testABACDD","badge":0}},{"action":"createChannel"},{"action":"sendMessage","method":"POST","path":"/Message/SendMessage","body":{"workspaceId":"0","channelId":"{{channelId}}","content":"test response send message","ref":"sssssssss"},"header":{"x-session-token":"{{token}}"}}],globalContext)
        resultStep.forEach((step, index) => {
          failedStep.push({
            type: step.type,
            status: step.status,
            stepName: step.stepName,
            error: step.error
          })
        })
        headerRequest = undefined
        resolvedHeader = resolveVariables(headerRequest, globalContext)
        pathRequest = "/Message/UpdateMessage"
        methodRequest = "PUT"
        payloadResponse = resolveVariables({
  "channelId": "{{channelId}}",
  "workspaceId": "0",
  "messageId": "{{messageId1}}",
  "content": "test response update message"
}, globalContext);
        requestUrl = `${globalThis.url}${pathRequest}`
        });

      it('should validate response structure', async () => {
        testNumber++;
        totalTests++;
        try {
          const response = await axios.put(
            requestUrl, 
            payloadResponse,
            {
              headers: {...resolvedHeader},
              validateStatus: () => true 
            }
          );
          const data = response.data
          const instance = plainToInstance(UpdateMessageResponse, data);
          const validateResponse =await validateResponses(payloadResponse, instance, globalContext );
          if (validateResponse.length > 0) {
            failedTests.push({
              testcase: testNumber,
              error: validateResponse
            })
          }else {
            passedTests++;
          }
        
        } catch (error) {
          console.error('Test failed:', error);
        }
      });

      afterAll(async () => {

        const resultStep = await executeAllSteps([],globalContext)
        resultStep.forEach((step, index) => {
          failedStep.push({
            type: step.type,
            status: step.status,
            stepName: step.stepName,
            error: step.error
          })
        })
        const folderPath = path.join(__dirname, '../reports/update-message');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }

        const summary = summarizeErrors(failedTests, null, null);
        const classNames = `update-message`;
        const reportFileName = `update-message-response-${getTime()}.report.txt`;  
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
    });
  