
    import { validateResponses } from '../validates/validate-response';
    import fs from 'fs';
    import path from 'path';
    import { TestContext } from '../test-execute-step/text-context';
    import { BeforeSendMessage, SendMessageSaga, HeaderRequest } from '../dtos/send-message/send-message.request';
    import { summarizeErrors, summaryFields, getTime, handleSendMessageResponse } from '../helps/utils';
    import { executeAllSteps, resolveVariables } from '../test-execute-step/test-executor';
    import { plainToClass } from 'class-transformer';
    import { SendMessageResponse } from '../response/send-message.response';
    import axios from 'axios';


    describe('Testcase for send-message', () => {
        let totalTests = 0;
        let passedLogic = 0;
        let failedTests = [];
        let logicTests = [];
        let passedDTO = 0
        let passed200 = 0
        let headerRequest, resolvedHeader,pathRequest,payloadRequest,methodRequest
        let testNumber
        let resolvedPayload
        const testResults = [];
        let globalContext
        let failedStep = []
        let messageIdArray;

        beforeAll( async () => {
          globalContext = new TestContext();

          const results = await executeAllSteps(BeforeSendMessage.steps, globalContext);
          results.map((step, index) => {
            failedStep.push({
              success: step.success,
              stepName: step.stepName,
              error: step.error
            });
          })
          headerRequest = {
  "Content-Type": "application/json",
  "x-session-token": "{{token}}",
  "x-country-code": "VN"
}
          payloadRequest = {
  "workspaceId": "0",
  "channelId": "{{channelId}}",
  "content": "test123123",
  "ref": "ref"
}
          pathRequest = "/Message/SendMessage"
          methodRequest = "POST"
        })

        
   
           
            it('Test case # 43 with expect errors []', async () => {
             testNumber = 43;
              const testResult = { 
                testNumber: testNumber,
                nextStep: false,
            };
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":"test123123"};
              resolvedPayload = resolveVariables(payloadObj,globalContext );
              resolvedHeader = resolveVariables(headerRequest, globalContext);
              
              const requestUrl = `${globalThis.url}${pathRequest}`;
            
            try {
            const response = await axios.post(requestUrl, resolvedPayload,{ headers: { ...resolvedHeader} , validateStatus: () => true})
            const data = response.data
              if(response.status === 201){
              passedDTO++
                if(data.data){
                  expect(data.ok).toEqual(true)
                  expect(data.data).not.toBeNull()
                  const dtoInstance = plainToClass(SendMessageResponse, data);
                  const validateResponse = await validateResponses(resolvedPayload, dtoInstance);
                  if (validateResponse.length !== 0) {
                  testResult.nextStep = false;
                     logicTests.push({
                      testcase:testNumber,
                      errorLogic: validateResponse,
                    })
                  }else {
                   const response = dtoInstance
                    const handleSendMessage = await handleSendMessageResponse(response, globalContext);
                    if(handleSendMessage === true){
                      testResult.nextStep = true;
                    }
                  }
                }else {

                  testResult.nextStep = true;
                }

              }else if(response.status === 200){
                passedDTO++
                if(data.data){

                    expect(data.ok).toEqual(true)
                    expect(data.data).not.toBeNull()
                    const dtoInstance = plainToClass(SendMessageResponse, data);
                    console.log(dtoInstance)
                    const validateResponse = await validateResponses(resolvedPayload, dtoInstance);
                    if (validateResponse.length !== 0) {
                  testResult.nextStep = false;
                      logicTests.push({
                        testcase:testNumber,
                        errorLogic: validateResponse,
                      })
                    }else {

                  testResult.nextStep = true;
                    }
                  }else {

                  testResult.nextStep = true;
                  } 
              }else if (response.status === 400){
                 const expectJson =  [].sort()
                  const expectDetails = Array.isArray(response?.data?.error?.details)
                  ? response.data.error.details
                  : [];
                  const softExpectDetails = [...expectDetails].sort();
                  try {
                    expect(data.ok).toEqual(false);
                    expect(data.data).toEqual(null);
                    expect(expectJson).toEqual(softExpectDetails);
                  testResult.nextStep = false;
                  } catch (error) {
                    const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  testResult.nextStep = false;
                    failedTests.push({
                      testcase: testNumber,
                      code: 400,
                      missing: missing || [],
                      extra: extra || []
                    })
                    throw new Error(error);
                  }
                }else if (response.status === 403){
                  const expectJson =  [].sort()
                  const expectDetails = response.data

                  expect(expectDetails).toEqual(expectJson.join(" "))
                  testResult.nextStep = false;
                
                }
            }catch (error){
              console.log(error)
            } finally {
              testResults.push(testResult);
             }
            });

           
    

      afterAll(async () => {
      for (const result of testResults) {
                if (result.nextStep) {
                    const results = await executeAllSteps(SendMessageSaga.steps, globalContext);
                    results.forEach((step) => {
                        failedStep.push({
                            success: step.success,
                            stepName: step.stepName,
                            error: step.error
                        });
                    });
                }
        }
      
        const folderPath = path.join(__dirname, '../reports/send-message');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
        const classNames = `send-message`
        const summary = summarizeErrors(failedTests, totalTests, passedLogic, passed200);
        const reportFileName = `send-message.${getTime()}.report.txt`;
        const { combinedReportTemplate } = await import('../gens/report-file');
        const reportContent = combinedReportTemplate(
          classNames,
          globalThis.url,
          pathRequest,
          failedStep,
          passedDTO,
          failedTests,
          totalTests,
          logicTests,
          summary
        );
        
  const reportPath = path.join(folderPath, reportFileName);
  fs.writeFileSync(reportPath, reportContent, 'utf-8');
  console.log(`📄 Combined report generated: ${reportPath}`);
        })
        })
                