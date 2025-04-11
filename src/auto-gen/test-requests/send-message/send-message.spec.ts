
    import fs from 'fs';
    import path from 'path';
    import axios from 'axios';
    import { summarizeErrors, summaryFields, getTime } from '../../helps/utils';
    import { TestContext } from '../../test-execute-step/text-context';
    import { executeAllSteps, resolveVariables } from '../../test-execute-step/test-executor';
    describe('Testcase for send-message', () => {
        let totalTests = 0;
        let passed201 = 0;
        let failedTests = [];
        let codedTest = [];
        let logicTests = [];
        let passedTests = 0
        let passed200 = 0
        let passedDTO = 0;
        let headerRequest
        let testNumber
        let failedStep = [];
        let testType
        let resolvedData, pathRequest, methodRequest
        let globalContext, resolvedHeader
        beforeAll( async () => {
          testType = 'request'
          globalContext = new TestContext()
          const resultStep = await executeAllSteps([{"action":"mockUser"},{"action":"createChannel"}],globalContext)
          resultStep.forEach((step, index) => {
            failedStep.push({
              type: step.type,
              status: step.status,
              stepName: step.stepName,
              error: step.error
            })
          })
          headerRequest = {"Content-Type":"application/json","x-session-token":"{{token}}","x-country-code":"VN"}
          resolvedHeader = resolveVariables(headerRequest, globalContext)
          pathRequest = "/Message/SendMessage"
          methodRequest = "POST"
        })

        
           
            it('Test case #1 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 1;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #2 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 2;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","content":12345};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #3 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 3;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","content":"test123123"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #4 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 4;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #5 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 5;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #6 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 6;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #7 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 7;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"content":12345};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #8 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 8;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"content":"test123123"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #9 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 9;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #10 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 10;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":12345,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #11 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 11;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #12 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 12;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":12345};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #13 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 13;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":"test123123"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #14 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 14;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #15 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 15;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #16 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 16;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #17 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 17;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","content":12345};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #18 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 18;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","content":"test123123"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #19 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 19;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #20 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 20;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #21 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 21;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #22 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 22;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"content":12345};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #23 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 23;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"content":"test123123"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #24 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 24;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #25 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 25;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":12345,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #26 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 26;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #27 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 27;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":12345};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #28 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 28;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":"test123123"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #29 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 29;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #30 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 30;
              totalTests++;
              const payloadObj = {"workspaceId":12345,"channelId":"{{channelId}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #31 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 31;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #32 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 32;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","content":12345};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #33 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 33;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","content":"test123123"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #34 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 34;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #35 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 35;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #36 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 36;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #37 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 37;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"content":12345};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #38 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 38;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"content":"test123123"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #39 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 39;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #40 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 40;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":12345,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["Could not resolve permission type"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["Could not resolve permission type"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #41 with expect errors  ["content should not be empty","content\'s byte length must fall into (1,6000) range"] ', async () => {
              testNumber = 41;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["content should not be empty","content's byte length must fall into (1, 6000) range"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["content should not be empty","content's byte length must fall into (1, 6000) range"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #42 with expect errors  ["content must be a string"] ', async () => {
              testNumber = 42;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":12345};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["content must be a string"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["content must be a string"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #43 with expect errors  [] ', async () => {
              testNumber = 43;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":"test123123"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  [].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = [].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #44 with expect errors  ["content should not be empty","content\'s byte length must fall into (1,6000) range"] ', async () => {
              testNumber = 44;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["content should not be empty","content's byte length must fall into (1, 6000) range"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["content should not be empty","content's byte length must fall into (1, 6000) range"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #45 with expect errors  ["content\'s byte length must fall into (1,6000) range"] ', async () => {
              testNumber = 45;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
              
              const requestUrl = `${globalThis.url}/Message/SendMessage`;
            
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

             const data = response.data;

              if(response.status === 201){
                passedTests++;
                passed201++;
              }else if(response.status === 200){
                passedTests++;
                passed200++;
              }else if(response.status === 400){
                const expectJson =  ["content's byte length must fall into (1, 6000) range"].sort()
                const expectDetails = Array.isArray(data?.error?.details)
                  ? data.error.details
                  : [];
                const softExpectDetails = [...expectDetails].sort();
                try {
                  expect(data.ok).toEqual(false);
                  expect(data.data).toEqual(null);
                  expect(expectJson).toEqual(softExpectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                  })
                } catch (error) {
                  const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
                  failedTests.push({
                    testcase: testNumber,
                    code: 400,
                    body: resolvedData,
                    missing: missing || [],
                    extra: extra || []
                  })
                  throw new Error(error);
                }
              }else if (response.status === 403) {
                  const expectJson = ["content's byte length must fall into (1, 6000) range"].sort();
                  let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
                  expectDetails = expectDetails.sort();
                  try {
                  expect(expectJson).toEqual(expectDetails);
                  passedTests++
                  codedTest.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                } catch (error) {
                  failedTests.push({
                    testcase: testNumber,
                    code: 403,
                    body: resolvedData,
                  })
                  throw new Error(error);
                }
                }else if (response.status === 404){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 404,
                  body: resolvedData,
                  errorDetails: errorMessage,
                });
              }else if (response.status === 500){
                const errorMessage = data.error?.details;
                failedTests.push({
                  testcase:testNumber,
                  code: 500,
                  errorDetails: errorMessage,
                });
                throw new Error(errorMessage);
              } else {
                console.log('unexpected:', data);
                throw new Error(data);
              }
            }catch (error){
              console.log(error)
            }
            });

      afterAll(async () => {
        const folderPath = path.join(__dirname, '../reports/send-message');
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }
        const classNames = `send-message`;
        const summary = summarizeErrors(failedTests,codedTest, passed200, passed201);
        const reportFileName = `send-message-request-${getTime()}.report.txt`;  
        const { combinedReportTemplate } = await import('../../utils/report-file');
        const reportContent = combinedReportTemplate(
            classNames,
            globalThis.url,
            pathRequest,
            failedStep,
            passedTests,
            failedTests,
            totalTests,
            logicTests,
            summary,
            testType
        );
        const reportPath = path.join(folderPath, reportFileName);
        fs.writeFileSync(reportPath, reportContent, 'utf-8');
        console.log(`📄 Combined report generated: ${reportPath}`);
      });
                          
    });

  