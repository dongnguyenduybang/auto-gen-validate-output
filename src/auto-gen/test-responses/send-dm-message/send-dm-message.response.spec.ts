
    import fs from 'fs';
    import path from 'path';
    import axios from 'axios';
    import { getTime, summarizeErrors } from '../../utils/helper';
    import { SendDmMessageResponse } from '../../response/send-dm-message.response';
    import { plainToInstance } from 'class-transformer';
    import { validateResponses } from '../../validates/validate-response';
    import { executeAllSteps, resolveVariables } from '../../utils/test-executor';
    import { TestContext } from '../../utils/text-context';

    describe('Test response for send-dm-message', () => {
      let failedTests = [];
      let failedStep = []
      let passedTests = 0;
      let testNumber = 0;
      let totalTests = 0;
      let requestUrl, globalContext, resolvedHeader, pathRequest, methodRequest, headerRequest, payloadResponse, testType
      beforeAll(async () => {
        testType = 'response'
        globalContext = new TestContext();
        const resultStep = await executeAllSteps([{"action":"mockUser","body":{"quantity":2,"prefix":"testABACDD","badge":0}}],globalContext)
        resultStep.forEach((step, index) => {
          failedStep.push({
            type: step.type,
            status: step.status,
            stepName: step.stepName,
            error: step.error
          })
        })
        
        headerRequest = {"x-session-token":"{{token}}"}
        resolvedHeader = resolveVariables(headerRequest, globalContext)
        pathRequest = "/Message/SendDMMessage"
        methodRequest = "POST"
        payloadResponse = resolveVariables({
  "userId": "{{userId1}}",
  "content": "test response send dm message",
  "ref": "ref"
}, globalContext);
        requestUrl = `${globalThis.url}${pathRequest}`
        });

      it('should validate response structure', async () => {
        testNumber++;
        totalTests++;
        try {
          const response = await axios.post(
            requestUrl, 
            payloadResponse,
            {
              headers: {...resolvedHeader},
              validateStatus: () => true 
            }
          );
          const data = response.data
          if(data.ok === false){
            failedTests.push({
              testcase: testNumber,
              error: data.error.details
            })
          }else {
            const instance = plainToInstance(SendDmMessageResponse, data);
            const validateResponse =await validateResponses(payloadResponse, instance, globalContext );
            if (validateResponse.length > 0) {
              failedTests.push({
                testcase: testNumber,
                error: validateResponse
              })
            }else {
              passedTests++;
            }
          
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
        const folderPath = path.join(__dirname, '../reports/send-dm-message');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }

        const summary = summarizeErrors(failedTests, null, null);
        const classNames = `send-dm-message`;
        const reportFileName = `send-dm-message-response-${getTime()}.report.txt`;  
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
  