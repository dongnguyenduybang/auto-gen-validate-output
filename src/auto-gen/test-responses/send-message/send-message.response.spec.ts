
    import fs from 'fs';
    import path from 'path';
    import axios from 'axios';
    import { summarizeErrors, summaryFields, getTime } from '../../helps/utils';
    import { TestContext } from '../../test-execute-step/text-context';
    import { executeAllSteps, resolveVariables } from '../../test-execute-step/test-executor';
    import { SendMessageResponse } from '../../response/send-message.response';
    import { plainToInstance } from 'class-transformer';
    import { validateResponses } from '../../validates/validate-response';

    describe('Test response for send-message', () => {
      let failedTests = [];
      let passedTests = 0;
      let testNumber = 0;
      let totalTests = 0;
      let testType
      let resolvedData, pathRequest, methodRequest, headerRequest, payloadResponse
      let globalContext, resolvedHeader
      beforeAll(async () => {
        testType = 'response'
        globalContext = new TestContext();
        await executeAllSteps([{"action":"mockUser"},{"action":"createChannel"}],globalContext)
        headerRequest = {"Content-Type":"application/json","x-session-token":"{{token}}","x-country-code":"VN"}
        resolvedHeader = resolveVariables(headerRequest, globalContext)
        pathRequest = "/Message/SendMessage"
        methodRequest = "POST"
        payloadResponse = resolveVariables(undefined, globalContext)
      
        });

      it('should validate response structure', async () => {
        testNumber++;
                      
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
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
          const instance = plainToInstance(SendMessageResponse, data);
          const validateResponse = validateResponses(payloadResponse, instance);
          if (validateResponse.length > 0) {
            failedTests.push({
              testcase: testNumber,
              error: validateResponse
          })
        }
        passedTests++;
        } catch (error) {
          console.error('Test failed:', error);
        }
      });

      afterAll(async () => {
        const folderPath = path.join(__dirname, '../reports/send-message');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }

        const summary = summarizeErrors(failedTests, totalTests, null, null);
        const classNames = `send-message`;
        const reportFileName = `send-message-response-${getTime()}.report.txt`;  
        const { combinedReportTemplate } = await import('../../gens/report-file');
        const reportContent = combinedReportTemplate(
            classNames,
            globalThis.url,
            pathRequest,
            null,
            null,
            failedTests,
            totalTests,
            null,
            summary,
            testType
        );
        
        // const reportPath = path.join(folderPath, reportFileName);
        // fs.writeFileSync(reportPath, reportContent, 'utf-8');
        // console.log(`📄 Response test report generated: ${reportPath}`);
      });
    });
  