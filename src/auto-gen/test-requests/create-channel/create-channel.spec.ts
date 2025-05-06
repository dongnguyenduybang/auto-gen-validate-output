
    import fs from 'fs';
    import path from 'path';
    import axios from 'axios';
    import { getTime, summarizeErrors, summaryFields } from '../../utils/helper';
    import { executeAllSteps, resolveVariables } from '../../utils/test-executor';
    import { TestContext } from '../../utils/text-context';
    describe('Testcase for create-channel', () => {
        let totalTests = 0;
        let passed201 = 0;
        let failedTests = [];
        let codedTest = [];
        let logicTests = [];
        let passedTests = 0
        let passed200 = 0
        let headerRequest
        let testNumber
        let failedStep = [];
        let testType
        let resolvedData, pathRequest, methodRequest, requestUrl
        let globalContext, resolvedHeader
        beforeAll( async () => {
          try {
            testType = 'request'
            globalContext = new TestContext()
            const resultStep = await executeAllSteps([{"action":"mockUser","body":{"quantity":2,"prefix":"testABACDD","badge":0}}],globalContext)
            resultStep.forEach((step) => {
              failedStep.push({
                type: step.type,
                status: step.status,
                stepName: step.stepName,
                error: step.error
              })
            })
            const hasFailure = resultStep.some(step => !step.status);
              if (hasFailure) {
                  throw new Error(`beforeAll failed: ${JSON.stringify(failedStep, null, 2)}`);
              }
            headerRequest = {"x-session-token":"{{token}}"}
            resolvedHeader = resolveVariables(headerRequest, globalContext)
            pathRequest = "/Channel/CreateChannel"
            methodRequest = "POST"
            requestUrl = `${globalThis.url}${pathRequest}`
          } catch(error){
            console.error('beforeAll failed:', error);
            throw error; // Ném lỗi để Jest dừng
          }
        })

        
           
            it('Test case #1 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":123,"channelType":"invalid_enum_value"} ', async () => {
              testNumber = 1;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":123,"channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #2 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":123,"channelType":1} ', async () => {
              testNumber = 2;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":123,"channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #3 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":123} ', async () => {
              testNumber = 3;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":123};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #4 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":123,"channelType":""} ', async () => {
              testNumber = 4;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":123,"channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #5 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 5;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"channel1","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #6 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","channelType":1} ', async () => {
              testNumber = 6;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"channel1","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #7 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1"} ', async () => {
              testNumber = 7;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"channel1"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #8 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","channelType":""} ', async () => {
              testNumber = 8;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"channel1","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #9 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"check_ulid","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 9;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"check_ulid","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #10 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"check_ulid","channelType":1} ', async () => {
              testNumber = 10;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"check_ulid","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #11 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"check_ulid"} ', async () => {
              testNumber = 11;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"check_ulid"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #12 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"check_ulid","channelType":""} ', async () => {
              testNumber = 12;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"check_ulid","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #13 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 13;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #14 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"","channelType":1} ', async () => {
              testNumber = 14;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #15 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":""} ', async () => {
              testNumber = 15;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #16 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"","channelType":""} ', async () => {
              testNumber = 16;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #17 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 17;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #18 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":1} ', async () => {
              testNumber = 18;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #19 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"} ', async () => {
              testNumber = 19;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #20 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":""} ', async () => {
              testNumber = 20;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #21 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelType":"invalid_enum_value"} ', async () => {
              testNumber = 21;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #22 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelType":1} ', async () => {
              testNumber = 22;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #23 should return errors ["Could not resolve permission type"] when body {"workspaceId":123} ', async () => {
              testNumber = 23;
              totalTests++;
              const payloadObj = {"workspaceId":123};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #24 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelType":""} ', async () => {
              testNumber = 24;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #25 should return errors ["name must be string","channelType must be equal to one of the allowed values"] when body {"workspaceId":"0","name":123,"channelType":"invalid_enum_value"} ', async () => {
              testNumber = 25;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":123,"channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["name must be string","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #26 should return errors ["name must be string"] when body {"workspaceId":"0","name":123,"channelType":1} ', async () => {
              testNumber = 26;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":123,"channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["name must be string"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #27 should return errors ["name must be string","channelType must be equal to one of the allowed values"] when body {"workspaceId":"0","name":123} ', async () => {
              testNumber = 27;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":123};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["name must be string","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #28 should return errors ["name must be string","channelType must be equal to one of the allowed values"] when body {"workspaceId":"0","name":123,"channelType":""} ', async () => {
              testNumber = 28;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":123,"channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["name must be string","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #29 should return errors ["channelType must be equal to one of the allowed values"] when body {"workspaceId":"0","name":"channel1","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 29;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"channel1","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #30 should return errors [] when body {"workspaceId":"0","name":"channel1","channelType":1} ', async () => {
              testNumber = 30;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"channel1","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  [].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #31 should return errors ["channelType must be equal to one of the allowed values"] when body {"workspaceId":"0","name":"channel1"} ', async () => {
              testNumber = 31;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"channel1"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #32 should return errors ["channelType must be equal to one of the allowed values"] when body {"workspaceId":"0","name":"channel1","channelType":""} ', async () => {
              testNumber = 32;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"channel1","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #33 should return errors ["channelType must be equal to one of the allowed values"] when body {"workspaceId":"0","name":"check_ulid","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 33;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"check_ulid","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #34 should return errors [] when body {"workspaceId":"0","name":"check_ulid","channelType":1} ', async () => {
              testNumber = 34;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"check_ulid","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  [].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #35 should return errors ["channelType must be equal to one of the allowed values"] when body {"workspaceId":"0","name":"check_ulid"} ', async () => {
              testNumber = 35;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"check_ulid"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #36 should return errors ["channelType must be equal to one of the allowed values"] when body {"workspaceId":"0","name":"check_ulid","channelType":""} ', async () => {
              testNumber = 36;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"check_ulid","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #37 should return errors ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"] when body {"workspaceId":"0","name":"","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 37;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #38 should return errors ["name must to range from 1 to 50 length"] when body {"workspaceId":"0","name":"","channelType":1} ', async () => {
              testNumber = 38;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["name must to range from 1 to 50 length"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #39 should return errors ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"] when body {"workspaceId":"0","name":""} ', async () => {
              testNumber = 39;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #40 should return errors ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"] when body {"workspaceId":"0","name":"","channelType":""} ', async () => {
              testNumber = 40;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #41 should return errors ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 41;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #42 should return errors ["name must to range from 1 to 50 length"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":1} ', async () => {
              testNumber = 42;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["name must to range from 1 to 50 length"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #43 should return errors ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"} ', async () => {
              testNumber = 43;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #44 should return errors ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":""} ', async () => {
              testNumber = 44;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #45 should return errors ["must have required property \'name\'","channelType must be equal to one of the allowed values"] when body {"workspaceId":"0","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 45;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["must have required property 'name'","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #46 should return errors ["must have required property \'name\'"] when body {"workspaceId":"0","channelType":1} ', async () => {
              testNumber = 46;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["must have required property 'name'"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #47 should return errors ["must have required property \'name\'","channelType must be equal to one of the allowed values"] when body {"workspaceId":"0"} ', async () => {
              testNumber = 47;
              totalTests++;
              const payloadObj = {"workspaceId":"0"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["must have required property 'name'","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #48 should return errors ["must have required property \'name\'","channelType must be equal to one of the allowed values"] when body {"workspaceId":"0","channelType":""} ', async () => {
              testNumber = 48;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["must have required property 'name'","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #49 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":123,"channelType":"invalid_enum_value"} ', async () => {
              testNumber = 49;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":123,"channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #50 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":123,"channelType":1} ', async () => {
              testNumber = 50;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":123,"channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #51 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":123} ', async () => {
              testNumber = 51;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":123};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #52 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":123,"channelType":""} ', async () => {
              testNumber = 52;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":123,"channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #53 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":"channel1","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 53;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"channel1","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #54 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":"channel1","channelType":1} ', async () => {
              testNumber = 54;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"channel1","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #55 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":"channel1"} ', async () => {
              testNumber = 55;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"channel1"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #56 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":"channel1","channelType":""} ', async () => {
              testNumber = 56;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"channel1","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #57 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":"check_ulid","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 57;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"check_ulid","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #58 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":"check_ulid","channelType":1} ', async () => {
              testNumber = 58;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"check_ulid","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #59 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":"check_ulid"} ', async () => {
              testNumber = 59;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"check_ulid"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #60 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":"check_ulid","channelType":""} ', async () => {
              testNumber = 60;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"check_ulid","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #61 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":"","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 61;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #62 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":"","channelType":1} ', async () => {
              testNumber = 62;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #63 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":""} ', async () => {
              testNumber = 63;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #64 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":"","channelType":""} ', async () => {
              testNumber = 64;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #65 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 65;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #66 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":1} ', async () => {
              testNumber = 66;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #67 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"} ', async () => {
              testNumber = 67;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #68 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":""} ', async () => {
              testNumber = 68;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #69 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 69;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #70 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","channelType":1} ', async () => {
              testNumber = 70;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #71 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid"} ', async () => {
              testNumber = 71;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #72 should return errors ["Invalid channel"] when body {"workspaceId":"check_ulid","channelType":""} ', async () => {
              testNumber = 72;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #73 should return errors ["Could not resolve permission type"] when body {"name":123,"channelType":"invalid_enum_value"} ', async () => {
              testNumber = 73;
              totalTests++;
              const payloadObj = {"name":123,"channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #74 should return errors ["Could not resolve permission type"] when body {"name":123,"channelType":1} ', async () => {
              testNumber = 74;
              totalTests++;
              const payloadObj = {"name":123,"channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #75 should return errors ["Could not resolve permission type"] when body {"name":123} ', async () => {
              testNumber = 75;
              totalTests++;
              const payloadObj = {"name":123};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #76 should return errors ["Could not resolve permission type"] when body {"name":123,"channelType":""} ', async () => {
              testNumber = 76;
              totalTests++;
              const payloadObj = {"name":123,"channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #77 should return errors ["Could not resolve permission type"] when body {"name":"channel1","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 77;
              totalTests++;
              const payloadObj = {"name":"channel1","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #78 should return errors ["Could not resolve permission type"] when body {"name":"channel1","channelType":1} ', async () => {
              testNumber = 78;
              totalTests++;
              const payloadObj = {"name":"channel1","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #79 should return errors ["Could not resolve permission type"] when body {"name":"channel1"} ', async () => {
              testNumber = 79;
              totalTests++;
              const payloadObj = {"name":"channel1"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #80 should return errors ["Could not resolve permission type"] when body {"name":"channel1","channelType":""} ', async () => {
              testNumber = 80;
              totalTests++;
              const payloadObj = {"name":"channel1","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #81 should return errors ["Could not resolve permission type"] when body {"name":"check_ulid","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 81;
              totalTests++;
              const payloadObj = {"name":"check_ulid","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #82 should return errors ["Could not resolve permission type"] when body {"name":"check_ulid","channelType":1} ', async () => {
              testNumber = 82;
              totalTests++;
              const payloadObj = {"name":"check_ulid","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #83 should return errors ["Could not resolve permission type"] when body {"name":"check_ulid"} ', async () => {
              testNumber = 83;
              totalTests++;
              const payloadObj = {"name":"check_ulid"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #84 should return errors ["Could not resolve permission type"] when body {"name":"check_ulid","channelType":""} ', async () => {
              testNumber = 84;
              totalTests++;
              const payloadObj = {"name":"check_ulid","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #85 should return errors ["Could not resolve permission type"] when body {"name":"","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 85;
              totalTests++;
              const payloadObj = {"name":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #86 should return errors ["Could not resolve permission type"] when body {"name":"","channelType":1} ', async () => {
              testNumber = 86;
              totalTests++;
              const payloadObj = {"name":"","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #87 should return errors ["Could not resolve permission type"] when body {"name":""} ', async () => {
              testNumber = 87;
              totalTests++;
              const payloadObj = {"name":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #88 should return errors ["Could not resolve permission type"] when body {"name":"","channelType":""} ', async () => {
              testNumber = 88;
              totalTests++;
              const payloadObj = {"name":"","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #89 should return errors ["Could not resolve permission type"] when body {"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 89;
              totalTests++;
              const payloadObj = {"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #90 should return errors ["Could not resolve permission type"] when body {"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":1} ', async () => {
              testNumber = 90;
              totalTests++;
              const payloadObj = {"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #91 should return errors ["Could not resolve permission type"] when body {"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"} ', async () => {
              testNumber = 91;
              totalTests++;
              const payloadObj = {"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #92 should return errors ["Could not resolve permission type"] when body {"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":""} ', async () => {
              testNumber = 92;
              totalTests++;
              const payloadObj = {"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #93 should return errors ["Could not resolve permission type"] when body {"channelType":"invalid_enum_value"} ', async () => {
              testNumber = 93;
              totalTests++;
              const payloadObj = {"channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #94 should return errors ["Could not resolve permission type"] when body {"channelType":1} ', async () => {
              testNumber = 94;
              totalTests++;
              const payloadObj = {"channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #95 should return errors ["Could not resolve permission type"] when body {} ', async () => {
              testNumber = 95;
              totalTests++;
              const payloadObj = {};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #96 should return errors ["Could not resolve permission type"] when body {"channelType":""} ', async () => {
              testNumber = 96;
              totalTests++;
              const payloadObj = {"channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #97 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":123,"channelType":"invalid_enum_value"} ', async () => {
              testNumber = 97;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":123,"channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #98 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":123,"channelType":1} ', async () => {
              testNumber = 98;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":123,"channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #99 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":123} ', async () => {
              testNumber = 99;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":123};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #100 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":123,"channelType":""} ', async () => {
              testNumber = 100;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":123,"channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #101 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 101;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"channel1","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #102 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","channelType":1} ', async () => {
              testNumber = 102;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"channel1","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #103 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1"} ', async () => {
              testNumber = 103;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"channel1"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #104 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","channelType":""} ', async () => {
              testNumber = 104;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"channel1","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #105 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"check_ulid","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 105;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"check_ulid","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #106 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"check_ulid","channelType":1} ', async () => {
              testNumber = 106;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"check_ulid","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #107 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"check_ulid"} ', async () => {
              testNumber = 107;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"check_ulid"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #108 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"check_ulid","channelType":""} ', async () => {
              testNumber = 108;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"check_ulid","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #109 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 109;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #110 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"","channelType":1} ', async () => {
              testNumber = 110;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #111 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":""} ', async () => {
              testNumber = 111;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #112 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"","channelType":""} ', async () => {
              testNumber = 112;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #113 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 113;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #114 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":1} ', async () => {
              testNumber = 114;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #115 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"} ', async () => {
              testNumber = 115;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #116 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":""} ', async () => {
              testNumber = 116;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #117 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelType":"invalid_enum_value"} ', async () => {
              testNumber = 117;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #118 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelType":1} ', async () => {
              testNumber = 118;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #119 should return errors ["Could not resolve permission type"] when body {"workspaceId":""} ', async () => {
              testNumber = 119;
              totalTests++;
              const payloadObj = {"workspaceId":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #120 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelType":""} ', async () => {
              testNumber = 120;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
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
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
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
            
                  }
            }catch (error){
              console.log(error)
            }
            });

      afterAll(async () => {
      const resultStep = await executeAllSteps([],globalContext)
        resultStep.forEach((step) => {
          failedStep.push({
            type: step.type,
            status: step.status,
            stepName: step.stepName,
            error: step.error
          })
        })
        const folderPath = path.join(__dirname, '../reports/create-channel');
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }
        const classNames = `create-channel`;
        const summary = summarizeErrors(failedTests,codedTest, passed200, passed201);
        const reportFileName = `create-channel-request-${getTime()}.report.txt`;  
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

  