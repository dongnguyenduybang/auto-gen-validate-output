
    import fs from 'fs';
    import path from 'path';
    import axios from 'axios';
    import { getTime, summarizeErrors, summaryFields } from '../../utils/helper';
    import { executeAllSteps, resolveVariables } from '../../utils/test-executor';
    import { TestContext } from '../../utils/text-context';
    describe('Testcase for send-dm-message', () => {
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
          headerRequest = {"x-session-token":"{{token}}"}
          resolvedHeader = resolveVariables(headerRequest, globalContext)
          pathRequest = "/Message/SendDMMessage"
          methodRequest = "POST"
          requestUrl = `${globalThis.url}${pathRequest}`
        })

        
           
            it('Test case #1 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 1;
              totalTests++;
              const payloadObj = {"userId":123,"content":123,"ref":123};
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

           
            it('Test case #2 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 2;
              totalTests++;
              const payloadObj = {"userId":123,"content":123,"ref":"check_ulid"};
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

           
            it('Test case #3 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 3;
              totalTests++;
              const payloadObj = {"userId":123,"content":123,"ref":""};
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

           
            it('Test case #4 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 4;
              totalTests++;
              const payloadObj = {"userId":123,"content":123,"ref":"ref"};
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

           
            it('Test case #5 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 5;
              totalTests++;
              const payloadObj = {"userId":123,"content":123};
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

           
            it('Test case #6 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 6;
              totalTests++;
              const payloadObj = {"userId":123,"content":123,"ref":""};
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

           
            it('Test case #7 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 7;
              totalTests++;
              const payloadObj = {"userId":123,"content":"check_ulid","ref":123};
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

           
            it('Test case #8 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 8;
              totalTests++;
              const payloadObj = {"userId":123,"content":"check_ulid","ref":"check_ulid"};
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

           
            it('Test case #9 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 9;
              totalTests++;
              const payloadObj = {"userId":123,"content":"check_ulid","ref":""};
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

           
            it('Test case #10 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 10;
              totalTests++;
              const payloadObj = {"userId":123,"content":"check_ulid","ref":"ref"};
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

           
            it('Test case #11 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 11;
              totalTests++;
              const payloadObj = {"userId":123,"content":"check_ulid"};
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

           
            it('Test case #12 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 12;
              totalTests++;
              const payloadObj = {"userId":123,"content":"check_ulid","ref":""};
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

           
            it('Test case #13 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 13;
              totalTests++;
              const payloadObj = {"userId":123,"content":"","ref":123};
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

           
            it('Test case #14 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 14;
              totalTests++;
              const payloadObj = {"userId":123,"content":"","ref":"check_ulid"};
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

           
            it('Test case #15 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 15;
              totalTests++;
              const payloadObj = {"userId":123,"content":"","ref":""};
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

           
            it('Test case #16 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 16;
              totalTests++;
              const payloadObj = {"userId":123,"content":"","ref":"ref"};
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

           
            it('Test case #17 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 17;
              totalTests++;
              const payloadObj = {"userId":123,"content":""};
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

           
            it('Test case #18 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 18;
              totalTests++;
              const payloadObj = {"userId":123,"content":"","ref":""};
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

           
            it('Test case #19 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 19;
              totalTests++;
              const payloadObj = {"userId":123,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":123};
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

           
            it('Test case #20 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 20;
              totalTests++;
              const payloadObj = {"userId":123,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"check_ulid"};
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

           
            it('Test case #21 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 21;
              totalTests++;
              const payloadObj = {"userId":123,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":""};
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

           
            it('Test case #22 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 22;
              totalTests++;
              const payloadObj = {"userId":123,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"ref"};
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

           
            it('Test case #23 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 23;
              totalTests++;
              const payloadObj = {"userId":123,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
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

           
            it('Test case #24 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 24;
              totalTests++;
              const payloadObj = {"userId":123,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":""};
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

           
            it('Test case #25 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 25;
              totalTests++;
              const payloadObj = {"userId":123,"content":"test response send dm message","ref":123};
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

           
            it('Test case #26 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 26;
              totalTests++;
              const payloadObj = {"userId":123,"content":"test response send dm message","ref":"check_ulid"};
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

           
            it('Test case #27 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 27;
              totalTests++;
              const payloadObj = {"userId":123,"content":"test response send dm message","ref":""};
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

           
            it('Test case #28 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 28;
              totalTests++;
              const payloadObj = {"userId":123,"content":"test response send dm message","ref":"ref"};
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

           
            it('Test case #29 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 29;
              totalTests++;
              const payloadObj = {"userId":123,"content":"test response send dm message"};
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

           
            it('Test case #30 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 30;
              totalTests++;
              const payloadObj = {"userId":123,"content":"test response send dm message","ref":""};
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

           
            it('Test case #31 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 31;
              totalTests++;
              const payloadObj = {"userId":123,"ref":123};
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

           
            it('Test case #32 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 32;
              totalTests++;
              const payloadObj = {"userId":123,"ref":"check_ulid"};
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

           
            it('Test case #33 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 33;
              totalTests++;
              const payloadObj = {"userId":123,"ref":""};
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

           
            it('Test case #34 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 34;
              totalTests++;
              const payloadObj = {"userId":123,"ref":"ref"};
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

           
            it('Test case #35 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 35;
              totalTests++;
              const payloadObj = {"userId":123};
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

           
            it('Test case #36 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 36;
              totalTests++;
              const payloadObj = {"userId":123,"ref":""};
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

           
            it('Test case #37 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 37;
              totalTests++;
              const payloadObj = {"userId":123,"content":"","ref":123};
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

           
            it('Test case #38 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 38;
              totalTests++;
              const payloadObj = {"userId":123,"content":"","ref":"check_ulid"};
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

           
            it('Test case #39 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 39;
              totalTests++;
              const payloadObj = {"userId":123,"content":"","ref":""};
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

           
            it('Test case #40 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 40;
              totalTests++;
              const payloadObj = {"userId":123,"content":"","ref":"ref"};
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

           
            it('Test case #41 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 41;
              totalTests++;
              const payloadObj = {"userId":123,"content":""};
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

           
            it('Test case #42 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 42;
              totalTests++;
              const payloadObj = {"userId":123,"content":"","ref":""};
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

           
            it('Test case #43 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 43;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":123,"ref":123};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #44 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 44;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":123,"ref":"check_ulid"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #45 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 45;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":123,"ref":""};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #46 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 46;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":123,"ref":"ref"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #47 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 47;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":123};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #48 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 48;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":123,"ref":""};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #49 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 49;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"check_ulid","ref":123};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #50 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 50;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"check_ulid","ref":"check_ulid"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #51 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 51;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"check_ulid","ref":""};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #52 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 52;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"check_ulid","ref":"ref"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #53 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 53;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"check_ulid"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #54 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 54;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"check_ulid","ref":""};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #55 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 55;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"","ref":123};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #56 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 56;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"","ref":"check_ulid"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #57 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 57;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"","ref":""};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #58 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 58;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"","ref":"ref"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #59 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 59;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":""};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #60 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 60;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"","ref":""};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #61 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 61;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":123};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #62 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 62;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"check_ulid"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #63 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 63;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":""};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #64 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 64;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"ref"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #65 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 65;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #66 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 66;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":""};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #67 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 67;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"test response send dm message","ref":123};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #68 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 68;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"test response send dm message","ref":"check_ulid"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #69 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 69;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"test response send dm message","ref":""};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #70 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 70;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"test response send dm message","ref":"ref"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #71 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 71;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"test response send dm message"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #72 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 72;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"test response send dm message","ref":""};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #73 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 73;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","ref":123};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #74 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 74;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","ref":"check_ulid"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #75 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 75;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","ref":""};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #76 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 76;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","ref":"ref"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #77 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 77;
              totalTests++;
              const payloadObj = {"userId":"check_ulid"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #78 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 78;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","ref":""};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #79 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 79;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"","ref":123};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #80 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 80;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"","ref":"check_ulid"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #81 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 81;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"","ref":""};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #82 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 82;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"","ref":"ref"};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #83 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 83;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":""};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #84 with expect errors  ["Unauthorized request"] ', async () => {
              testNumber = 84;
              totalTests++;
              const payloadObj = {"userId":"check_ulid","content":"","ref":""};
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
            const expectJson =  ["Unauthorized request"].sort()

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

           
            it('Test case #85 with expect errors  ["content must be string","ref must be string"] ', async () => {
              testNumber = 85;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":123,"ref":123};
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
            const expectJson =  ["content must be string","ref must be string"].sort()

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

           
            it('Test case #86 with expect errors  ["content must be string"] ', async () => {
              testNumber = 86;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":123,"ref":"check_ulid"};
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
            const expectJson =  ["content must be string"].sort()

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

           
            it('Test case #87 with expect errors  ["content must be string","ref must have more than 1 length"] ', async () => {
              testNumber = 87;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":123,"ref":""};
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
            const expectJson =  ["content must be string","ref must have more than 1 length"].sort()

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

           
            it('Test case #88 with expect errors  ["content must be string"] ', async () => {
              testNumber = 88;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":123,"ref":"ref"};
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
            const expectJson =  ["content must be string"].sort()

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

           
            it('Test case #89 with expect errors  ["content must be string","must have required property \'ref\'"] ', async () => {
              testNumber = 89;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":123};
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
            const expectJson =  ["content must be string","must have required property 'ref'"].sort()

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

           
            it('Test case #90 with expect errors  ["content must be string","ref must have more than 1 length"] ', async () => {
              testNumber = 90;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":123,"ref":""};
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
            const expectJson =  ["content must be string","ref must have more than 1 length"].sort()

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

           
            it('Test case #91 with expect errors  ["ref must be string"] ', async () => {
              testNumber = 91;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"check_ulid","ref":123};
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
            const expectJson =  ["ref must be string"].sort()

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

           
            it('Test case #92 with expect errors  [] ', async () => {
              testNumber = 92;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"check_ulid","ref":"check_ulid"};
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

           
            it('Test case #93 with expect errors  ["ref must have more than 1 length"] ', async () => {
              testNumber = 93;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"check_ulid","ref":""};
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
            const expectJson =  ["ref must have more than 1 length"].sort()

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

           
            it('Test case #94 with expect errors  [] ', async () => {
              testNumber = 94;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"check_ulid","ref":"ref"};
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

           
            it('Test case #95 with expect errors  ["must have required property \'ref\'"] ', async () => {
              testNumber = 95;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"check_ulid"};
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
            const expectJson =  ["must have required property 'ref'"].sort()

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

           
            it('Test case #96 with expect errors  ["ref must have more than 1 length"] ', async () => {
              testNumber = 96;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"check_ulid","ref":""};
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
            const expectJson =  ["ref must have more than 1 length"].sort()

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

           
            it('Test case #97 with expect errors  ["content must to range from 1 to 2000 length","ref must be string"] ', async () => {
              testNumber = 97;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","ref":123};
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
            const expectJson =  ["content must to range from 1 to 2000 length","ref must be string"].sort()

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

           
            it('Test case #98 with expect errors  ["content must to range from 1 to 2000 length"] ', async () => {
              testNumber = 98;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","ref":"check_ulid"};
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
            const expectJson =  ["content must to range from 1 to 2000 length"].sort()

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

           
            it('Test case #99 with expect errors  ["content must to range from 1 to 2000 length","ref must have more than 1 length"] ', async () => {
              testNumber = 99;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","ref":""};
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
            const expectJson =  ["content must to range from 1 to 2000 length","ref must have more than 1 length"].sort()

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

           
            it('Test case #100 with expect errors  ["content must to range from 1 to 2000 length"] ', async () => {
              testNumber = 100;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","ref":"ref"};
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
            const expectJson =  ["content must to range from 1 to 2000 length"].sort()

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

           
            it('Test case #101 with expect errors  ["content must to range from 1 to 2000 length","must have required property \'ref\'"] ', async () => {
              testNumber = 101;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":""};
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
            const expectJson =  ["content must to range from 1 to 2000 length","must have required property 'ref'"].sort()

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

           
            it('Test case #102 with expect errors  ["content must to range from 1 to 2000 length","ref must have more than 1 length"] ', async () => {
              testNumber = 102;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","ref":""};
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
            const expectJson =  ["content must to range from 1 to 2000 length","ref must have more than 1 length"].sort()

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

           
            it('Test case #103 with expect errors  ["content must to range from 1 to 2000 length","ref must be string"] ', async () => {
              testNumber = 103;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":123};
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
            const expectJson =  ["content must to range from 1 to 2000 length","ref must be string"].sort()

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

           
            it('Test case #104 with expect errors  ["content must to range from 1 to 2000 length"] ', async () => {
              testNumber = 104;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"check_ulid"};
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
            const expectJson =  ["content must to range from 1 to 2000 length"].sort()

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

           
            it('Test case #105 with expect errors  ["content must to range from 1 to 2000 length","ref must have more than 1 length"] ', async () => {
              testNumber = 105;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":""};
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
            const expectJson =  ["content must to range from 1 to 2000 length","ref must have more than 1 length"].sort()

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

           
            it('Test case #106 with expect errors  ["content must to range from 1 to 2000 length"] ', async () => {
              testNumber = 106;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"ref"};
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
            const expectJson =  ["content must to range from 1 to 2000 length"].sort()

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

           
            it('Test case #107 with expect errors  ["content must to range from 1 to 2000 length","must have required property \'ref\'"] ', async () => {
              testNumber = 107;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
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
            const expectJson =  ["content must to range from 1 to 2000 length","must have required property 'ref'"].sort()

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

           
            it('Test case #108 with expect errors  ["content must to range from 1 to 2000 length","ref must have more than 1 length"] ', async () => {
              testNumber = 108;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":""};
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
            const expectJson =  ["content must to range from 1 to 2000 length","ref must have more than 1 length"].sort()

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

           
            it('Test case #109 with expect errors  ["ref must be string"] ', async () => {
              testNumber = 109;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test response send dm message","ref":123};
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
            const expectJson =  ["ref must be string"].sort()

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

           
            it('Test case #110 with expect errors  [] ', async () => {
              testNumber = 110;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test response send dm message","ref":"check_ulid"};
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

           
            it('Test case #111 with expect errors  ["ref must have more than 1 length"] ', async () => {
              testNumber = 111;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test response send dm message","ref":""};
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
            const expectJson =  ["ref must have more than 1 length"].sort()

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

           
            it('Test case #112 with expect errors  [] ', async () => {
              testNumber = 112;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test response send dm message","ref":"ref"};
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

           
            it('Test case #113 with expect errors  ["must have required property \'ref\'"] ', async () => {
              testNumber = 113;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test response send dm message"};
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
            const expectJson =  ["must have required property 'ref'"].sort()

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

           
            it('Test case #114 with expect errors  ["ref must have more than 1 length"] ', async () => {
              testNumber = 114;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test response send dm message","ref":""};
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
            const expectJson =  ["ref must have more than 1 length"].sort()

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

           
            it('Test case #115 with expect errors  ["must have required property \'content\'","ref must be string"] ', async () => {
              testNumber = 115;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","ref":123};
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
            const expectJson =  ["must have required property 'content'","ref must be string"].sort()

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

           
            it('Test case #116 with expect errors  ["must have required property \'content\'"] ', async () => {
              testNumber = 116;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","ref":"check_ulid"};
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
            const expectJson =  ["must have required property 'content'"].sort()

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

           
            it('Test case #117 with expect errors  ["must have required property \'content\'","ref must have more than 1 length"] ', async () => {
              testNumber = 117;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","ref":""};
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
            const expectJson =  ["must have required property 'content'","ref must have more than 1 length"].sort()

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

           
            it('Test case #118 with expect errors  ["must have required property \'content\'"] ', async () => {
              testNumber = 118;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","ref":"ref"};
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
            const expectJson =  ["must have required property 'content'"].sort()

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

           
            it('Test case #119 with expect errors  ["must have required property \'content\'","must have required property \'ref\'"] ', async () => {
              testNumber = 119;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}"};
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
            const expectJson =  ["must have required property 'content'","must have required property 'ref'"].sort()

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

           
            it('Test case #120 with expect errors  ["must have required property \'content\'","ref must have more than 1 length"] ', async () => {
              testNumber = 120;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","ref":""};
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
            const expectJson =  ["must have required property 'content'","ref must have more than 1 length"].sort()

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

           
            it('Test case #121 with expect errors  ["content must to range from 1 to 2000 length","ref must be string"] ', async () => {
              testNumber = 121;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","ref":123};
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
            const expectJson =  ["content must to range from 1 to 2000 length","ref must be string"].sort()

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

           
            it('Test case #122 with expect errors  ["content must to range from 1 to 2000 length"] ', async () => {
              testNumber = 122;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","ref":"check_ulid"};
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
            const expectJson =  ["content must to range from 1 to 2000 length"].sort()

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

           
            it('Test case #123 with expect errors  ["content must to range from 1 to 2000 length","ref must have more than 1 length"] ', async () => {
              testNumber = 123;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","ref":""};
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
            const expectJson =  ["content must to range from 1 to 2000 length","ref must have more than 1 length"].sort()

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

           
            it('Test case #124 with expect errors  ["content must to range from 1 to 2000 length"] ', async () => {
              testNumber = 124;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","ref":"ref"};
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
            const expectJson =  ["content must to range from 1 to 2000 length"].sort()

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

           
            it('Test case #125 with expect errors  ["content must to range from 1 to 2000 length","must have required property \'ref\'"] ', async () => {
              testNumber = 125;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":""};
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
            const expectJson =  ["content must to range from 1 to 2000 length","must have required property 'ref'"].sort()

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

           
            it('Test case #126 with expect errors  ["content must to range from 1 to 2000 length","ref must have more than 1 length"] ', async () => {
              testNumber = 126;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","ref":""};
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
            const expectJson =  ["content must to range from 1 to 2000 length","ref must have more than 1 length"].sort()

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

           
            it('Test case #127 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 127;
              totalTests++;
              const payloadObj = {"content":123,"ref":123};
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

           
            it('Test case #128 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 128;
              totalTests++;
              const payloadObj = {"content":123,"ref":"check_ulid"};
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

           
            it('Test case #129 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 129;
              totalTests++;
              const payloadObj = {"content":123,"ref":""};
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

           
            it('Test case #130 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 130;
              totalTests++;
              const payloadObj = {"content":123,"ref":"ref"};
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

           
            it('Test case #131 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 131;
              totalTests++;
              const payloadObj = {"content":123};
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

           
            it('Test case #132 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 132;
              totalTests++;
              const payloadObj = {"content":123,"ref":""};
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

           
            it('Test case #133 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 133;
              totalTests++;
              const payloadObj = {"content":"check_ulid","ref":123};
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

           
            it('Test case #134 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 134;
              totalTests++;
              const payloadObj = {"content":"check_ulid","ref":"check_ulid"};
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

           
            it('Test case #135 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 135;
              totalTests++;
              const payloadObj = {"content":"check_ulid","ref":""};
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

           
            it('Test case #136 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 136;
              totalTests++;
              const payloadObj = {"content":"check_ulid","ref":"ref"};
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

           
            it('Test case #137 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 137;
              totalTests++;
              const payloadObj = {"content":"check_ulid"};
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

           
            it('Test case #138 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 138;
              totalTests++;
              const payloadObj = {"content":"check_ulid","ref":""};
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

           
            it('Test case #139 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 139;
              totalTests++;
              const payloadObj = {"content":"","ref":123};
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

           
            it('Test case #140 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 140;
              totalTests++;
              const payloadObj = {"content":"","ref":"check_ulid"};
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

           
            it('Test case #141 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 141;
              totalTests++;
              const payloadObj = {"content":"","ref":""};
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

           
            it('Test case #142 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 142;
              totalTests++;
              const payloadObj = {"content":"","ref":"ref"};
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

           
            it('Test case #143 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 143;
              totalTests++;
              const payloadObj = {"content":""};
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

           
            it('Test case #144 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 144;
              totalTests++;
              const payloadObj = {"content":"","ref":""};
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

           
            it('Test case #145 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 145;
              totalTests++;
              const payloadObj = {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":123};
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

           
            it('Test case #146 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 146;
              totalTests++;
              const payloadObj = {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"check_ulid"};
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

           
            it('Test case #147 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 147;
              totalTests++;
              const payloadObj = {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":""};
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

           
            it('Test case #148 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 148;
              totalTests++;
              const payloadObj = {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"ref"};
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

           
            it('Test case #149 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 149;
              totalTests++;
              const payloadObj = {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
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

           
            it('Test case #150 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 150;
              totalTests++;
              const payloadObj = {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":""};
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

           
            it('Test case #151 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 151;
              totalTests++;
              const payloadObj = {"content":"test response send dm message","ref":123};
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

           
            it('Test case #152 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 152;
              totalTests++;
              const payloadObj = {"content":"test response send dm message","ref":"check_ulid"};
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

           
            it('Test case #153 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 153;
              totalTests++;
              const payloadObj = {"content":"test response send dm message","ref":""};
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

           
            it('Test case #154 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 154;
              totalTests++;
              const payloadObj = {"content":"test response send dm message","ref":"ref"};
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

           
            it('Test case #155 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 155;
              totalTests++;
              const payloadObj = {"content":"test response send dm message"};
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

           
            it('Test case #156 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 156;
              totalTests++;
              const payloadObj = {"content":"test response send dm message","ref":""};
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

           
            it('Test case #157 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 157;
              totalTests++;
              const payloadObj = {"ref":123};
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

           
            it('Test case #158 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 158;
              totalTests++;
              const payloadObj = {"ref":"check_ulid"};
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

           
            it('Test case #159 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 159;
              totalTests++;
              const payloadObj = {"ref":""};
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

           
            it('Test case #160 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 160;
              totalTests++;
              const payloadObj = {"ref":"ref"};
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

           
            it('Test case #161 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 161;
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

           
            it('Test case #162 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 162;
              totalTests++;
              const payloadObj = {"ref":""};
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

           
            it('Test case #163 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 163;
              totalTests++;
              const payloadObj = {"content":"","ref":123};
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

           
            it('Test case #164 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 164;
              totalTests++;
              const payloadObj = {"content":"","ref":"check_ulid"};
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

           
            it('Test case #165 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 165;
              totalTests++;
              const payloadObj = {"content":"","ref":""};
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

           
            it('Test case #166 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 166;
              totalTests++;
              const payloadObj = {"content":"","ref":"ref"};
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

           
            it('Test case #167 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 167;
              totalTests++;
              const payloadObj = {"content":""};
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

           
            it('Test case #168 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 168;
              totalTests++;
              const payloadObj = {"content":"","ref":""};
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

           
            it('Test case #169 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 169;
              totalTests++;
              const payloadObj = {"userId":"","content":123,"ref":123};
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

           
            it('Test case #170 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 170;
              totalTests++;
              const payloadObj = {"userId":"","content":123,"ref":"check_ulid"};
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

           
            it('Test case #171 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 171;
              totalTests++;
              const payloadObj = {"userId":"","content":123,"ref":""};
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

           
            it('Test case #172 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 172;
              totalTests++;
              const payloadObj = {"userId":"","content":123,"ref":"ref"};
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

           
            it('Test case #173 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 173;
              totalTests++;
              const payloadObj = {"userId":"","content":123};
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

           
            it('Test case #174 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 174;
              totalTests++;
              const payloadObj = {"userId":"","content":123,"ref":""};
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

           
            it('Test case #175 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 175;
              totalTests++;
              const payloadObj = {"userId":"","content":"check_ulid","ref":123};
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

           
            it('Test case #176 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 176;
              totalTests++;
              const payloadObj = {"userId":"","content":"check_ulid","ref":"check_ulid"};
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

           
            it('Test case #177 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 177;
              totalTests++;
              const payloadObj = {"userId":"","content":"check_ulid","ref":""};
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

           
            it('Test case #178 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 178;
              totalTests++;
              const payloadObj = {"userId":"","content":"check_ulid","ref":"ref"};
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

           
            it('Test case #179 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 179;
              totalTests++;
              const payloadObj = {"userId":"","content":"check_ulid"};
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

           
            it('Test case #180 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 180;
              totalTests++;
              const payloadObj = {"userId":"","content":"check_ulid","ref":""};
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

           
            it('Test case #181 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 181;
              totalTests++;
              const payloadObj = {"userId":"","content":"","ref":123};
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

           
            it('Test case #182 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 182;
              totalTests++;
              const payloadObj = {"userId":"","content":"","ref":"check_ulid"};
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

           
            it('Test case #183 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 183;
              totalTests++;
              const payloadObj = {"userId":"","content":"","ref":""};
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

           
            it('Test case #184 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 184;
              totalTests++;
              const payloadObj = {"userId":"","content":"","ref":"ref"};
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

           
            it('Test case #185 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 185;
              totalTests++;
              const payloadObj = {"userId":"","content":""};
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

           
            it('Test case #186 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 186;
              totalTests++;
              const payloadObj = {"userId":"","content":"","ref":""};
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

           
            it('Test case #187 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 187;
              totalTests++;
              const payloadObj = {"userId":"","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":123};
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

           
            it('Test case #188 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 188;
              totalTests++;
              const payloadObj = {"userId":"","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"check_ulid"};
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

           
            it('Test case #189 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 189;
              totalTests++;
              const payloadObj = {"userId":"","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":""};
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

           
            it('Test case #190 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 190;
              totalTests++;
              const payloadObj = {"userId":"","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"ref"};
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

           
            it('Test case #191 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 191;
              totalTests++;
              const payloadObj = {"userId":"","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
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

           
            it('Test case #192 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 192;
              totalTests++;
              const payloadObj = {"userId":"","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":""};
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

           
            it('Test case #193 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 193;
              totalTests++;
              const payloadObj = {"userId":"","content":"test response send dm message","ref":123};
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

           
            it('Test case #194 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 194;
              totalTests++;
              const payloadObj = {"userId":"","content":"test response send dm message","ref":"check_ulid"};
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

           
            it('Test case #195 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 195;
              totalTests++;
              const payloadObj = {"userId":"","content":"test response send dm message","ref":""};
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

           
            it('Test case #196 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 196;
              totalTests++;
              const payloadObj = {"userId":"","content":"test response send dm message","ref":"ref"};
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

           
            it('Test case #197 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 197;
              totalTests++;
              const payloadObj = {"userId":"","content":"test response send dm message"};
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

           
            it('Test case #198 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 198;
              totalTests++;
              const payloadObj = {"userId":"","content":"test response send dm message","ref":""};
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

           
            it('Test case #199 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 199;
              totalTests++;
              const payloadObj = {"userId":"","ref":123};
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

           
            it('Test case #200 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 200;
              totalTests++;
              const payloadObj = {"userId":"","ref":"check_ulid"};
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

           
            it('Test case #201 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 201;
              totalTests++;
              const payloadObj = {"userId":"","ref":""};
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

           
            it('Test case #202 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 202;
              totalTests++;
              const payloadObj = {"userId":"","ref":"ref"};
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

           
            it('Test case #203 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 203;
              totalTests++;
              const payloadObj = {"userId":""};
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

           
            it('Test case #204 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 204;
              totalTests++;
              const payloadObj = {"userId":"","ref":""};
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

           
            it('Test case #205 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 205;
              totalTests++;
              const payloadObj = {"userId":"","content":"","ref":123};
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

           
            it('Test case #206 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 206;
              totalTests++;
              const payloadObj = {"userId":"","content":"","ref":"check_ulid"};
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

           
            it('Test case #207 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 207;
              totalTests++;
              const payloadObj = {"userId":"","content":"","ref":""};
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

           
            it('Test case #208 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 208;
              totalTests++;
              const payloadObj = {"userId":"","content":"","ref":"ref"};
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

           
            it('Test case #209 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 209;
              totalTests++;
              const payloadObj = {"userId":"","content":""};
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

           
            it('Test case #210 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 210;
              totalTests++;
              const payloadObj = {"userId":"","content":"","ref":""};
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
        const folderPath = path.join(__dirname, '../reports/send-dm-message');
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }
        const classNames = `send-dm-message`;
        const summary = summarizeErrors(failedTests,codedTest, passed200, passed201);
        const reportFileName = `send-dm-message-request-${getTime()}.report.txt`;  
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

  