
    import fs from 'fs';
    import path from 'path';
    import { summaryFields, resolveCallAPI, resolveVariables } from '../../../../utils/helper';
    import { TestResult } from '../../../../utils/declarations';
    import { executeSteps } from '../../../../utils/text-execute-test';
    import { TestContext } from '../../../../utils/text-context';

    describe('Testcase for create-channel', () => {
        let totalTests = 0;
        let allSteps = [];
        let failedTests: any[] = [];
        let codedTest: any[] = [];
        let logicTests: any[] = [];
        let passedTests = 0;
        let testNumber: number;
        let failedStep: any[] = [];
        let testType: string;
        let resolvedData: any;
        let globalContext: any;
        let testCaseNumber = 0;
        let currentTestCaseTitle = '';
        let context, contextData;
        let warnings: any[] = [];
        
        beforeAll(async () => {
          testType = 'request';
          globalContext = globalThis.globalContext;
          context = new TestContext();
          const beforeAllSteps = [];

          if (beforeAllSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(beforeAllSteps, globalContext);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: `Case ${testCaseNumber}`,
                phase: 'beforeAll',
              });
            });
          } else {
            contextData = globalContext;
          }
        });

        beforeEach(async () => {
          testCaseNumber++;
          const beforeEachSteps = [];

          if (beforeEachSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(beforeEachSteps, globalContext);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: `Case ${testCaseNumber}`,
                phase: 'beforeEach',
              });
            });
          } else {
            contextData = globalContext;
          }
        });

        
            it('Test case #1 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"{{name}}","avatar":"","channelType":0}', async () => {
              testNumber = 1;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"{{name}}","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #2 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":123,"avatar":"","channelType":0}', async () => {
              testNumber = 2;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":123,"avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #3 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"aa","avatar":"","channelType":0}', async () => {
              testNumber = 3;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"aa","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #4 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":0}', async () => {
              testNumber = 4;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #5 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"avatar":"","channelType":0}', async () => {
              testNumber = 5;
              totalTests++;
              const payloadObj = {"workspaceId":123,"avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #6 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"","avatar":"","channelType":0}', async () => {
              testNumber = 6;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #7 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"{{name}}","avatar":123,"channelType":0}', async () => {
              testNumber = 7;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"{{name}}","avatar":123,"channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #8 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"{{name}}","avatar":"","channelType":"invalid_enum_value"}', async () => {
              testNumber = 8;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"{{name}}","avatar":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #9 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"{{name}}","avatar":"","channelType":""}', async () => {
              testNumber = 9;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"{{name}}","avatar":"","channelType":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #10 should return errors ["avatar should not be empty","channelType is not accept DM Channel"] when body {"workspaceId":"0","name":"{{name}}","avatar":"","channelType":0}', async () => {
              testNumber = 10;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"{{name}}","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["avatar should not be empty","channelType is not accept DM Channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #11 should return errors ["name expected string,received number","avatar should not be empty","channelType is not accept DM Channel"] when body {"workspaceId":"0","name":123,"avatar":"","channelType":0}', async () => {
              testNumber = 11;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":123,"avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name expected string, received number","avatar should not be empty","channelType is not accept DM Channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #12 should return errors ["name string must contain at least 3 character(s)","avatar should not be empty","channelType is not accept DM Channel"] when body {"workspaceId":"0","name":"aa","avatar":"","channelType":0}', async () => {
              testNumber = 12;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"aa","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name string must contain at least 3 character(s)","avatar should not be empty","channelType is not accept DM Channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #13 should return errors ["name string must contain at most 50 character(s)","avatar should not be empty","channelType is not accept DM Channel"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":0}', async () => {
              testNumber = 13;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name string must contain at most 50 character(s)","avatar should not be empty","channelType is not accept DM Channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #14 should return errors ["name required","avatar should not be empty","channelType is not accept DM Channel"] when body {"workspaceId":"0","avatar":"","channelType":0}', async () => {
              testNumber = 14;
              totalTests++;
              const payloadObj = {"workspaceId":"0","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name required","avatar should not be empty","channelType is not accept DM Channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #15 should return errors ["name should not be empty","name string must contain at least 3 character(s)","avatar should not be empty","channelType is not accept DM Channel"] when body {"workspaceId":"0","name":"","avatar":"","channelType":0}', async () => {
              testNumber = 15;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name should not be empty","name string must contain at least 3 character(s)","avatar should not be empty","channelType is not accept DM Channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #16 should return errors ["avatar expected string,received number","channelType is not accept DM Channel"] when body {"workspaceId":"0","name":"{{name}}","avatar":123,"channelType":0}', async () => {
              testNumber = 16;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"{{name}}","avatar":123,"channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["avatar expected string, received number","channelType is not accept DM Channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #17 should return errors ["avatar should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"{{name}}","avatar":"","channelType":"invalid_enum_value"}', async () => {
              testNumber = 17;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"{{name}}","avatar":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["avatar should not be empty","channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #18 should return errors ["avatar should not be empty","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"{{name}}","avatar":"","channelType":""}', async () => {
              testNumber = 18;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"{{name}}","avatar":"","channelType":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["avatar should not be empty","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2, received ''"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #19 should return errors ["Could not resolve permission type"] when body {"name":"{{name}}","avatar":"","channelType":0}', async () => {
              testNumber = 19;
              totalTests++;
              const payloadObj = {"name":"{{name}}","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #20 should return errors ["Could not resolve permission type"] when body {"name":123,"avatar":"","channelType":0}', async () => {
              testNumber = 20;
              totalTests++;
              const payloadObj = {"name":123,"avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #21 should return errors ["Could not resolve permission type"] when body {"name":"aa","avatar":"","channelType":0}', async () => {
              testNumber = 21;
              totalTests++;
              const payloadObj = {"name":"aa","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #22 should return errors ["Could not resolve permission type"] when body {"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":0}', async () => {
              testNumber = 22;
              totalTests++;
              const payloadObj = {"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #23 should return errors ["Could not resolve permission type"] when body {"avatar":"","channelType":0}', async () => {
              testNumber = 23;
              totalTests++;
              const payloadObj = {"avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #24 should return errors ["Could not resolve permission type"] when body {"name":"","avatar":"","channelType":0}', async () => {
              testNumber = 24;
              totalTests++;
              const payloadObj = {"name":"","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #25 should return errors ["Could not resolve permission type"] when body {"name":"{{name}}","avatar":123,"channelType":0}', async () => {
              testNumber = 25;
              totalTests++;
              const payloadObj = {"name":"{{name}}","avatar":123,"channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #26 should return errors ["Could not resolve permission type"] when body {"name":"{{name}}","avatar":"","channelType":"invalid_enum_value"}', async () => {
              testNumber = 26;
              totalTests++;
              const payloadObj = {"name":"{{name}}","avatar":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #27 should return errors ["Could not resolve permission type"] when body {"name":"{{name}}","avatar":"","channelType":""}', async () => {
              testNumber = 27;
              totalTests++;
              const payloadObj = {"name":"{{name}}","avatar":"","channelType":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #28 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"{{name}}","avatar":"","channelType":0}', async () => {
              testNumber = 28;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"{{name}}","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #29 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":123,"avatar":"","channelType":0}', async () => {
              testNumber = 29;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":123,"avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #30 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"aa","avatar":"","channelType":0}', async () => {
              testNumber = 30;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"aa","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #31 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":0}', async () => {
              testNumber = 31;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #32 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","avatar":"","channelType":0}', async () => {
              testNumber = 32;
              totalTests++;
              const payloadObj = {"workspaceId":"","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #33 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"","avatar":"","channelType":0}', async () => {
              testNumber = 33;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #34 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"{{name}}","avatar":123,"channelType":0}', async () => {
              testNumber = 34;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"{{name}}","avatar":123,"channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #35 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"{{name}}","avatar":"","channelType":"invalid_enum_value"}', async () => {
              testNumber = 35;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"{{name}}","avatar":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #36 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"{{name}}","avatar":"","channelType":""}', async () => {
              testNumber = 36;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"{{name}}","avatar":"","channelType":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #37 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"name":"{{name}}","avatar":"","channelType":0}', async () => {
              testNumber = 37;
              totalTests++;
              const payloadObj = {"workspaceId":null,"name":"{{name}}","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #38 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"name":123,"avatar":"","channelType":0}', async () => {
              testNumber = 38;
              totalTests++;
              const payloadObj = {"workspaceId":null,"name":123,"avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #39 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"name":"aa","avatar":"","channelType":0}', async () => {
              testNumber = 39;
              totalTests++;
              const payloadObj = {"workspaceId":null,"name":"aa","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #40 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":0}', async () => {
              testNumber = 40;
              totalTests++;
              const payloadObj = {"workspaceId":null,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #41 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"avatar":"","channelType":0}', async () => {
              testNumber = 41;
              totalTests++;
              const payloadObj = {"workspaceId":null,"avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #42 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"name":"","avatar":"","channelType":0}', async () => {
              testNumber = 42;
              totalTests++;
              const payloadObj = {"workspaceId":null,"name":"","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #43 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"name":"{{name}}","avatar":123,"channelType":0}', async () => {
              testNumber = 43;
              totalTests++;
              const payloadObj = {"workspaceId":null,"name":"{{name}}","avatar":123,"channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #44 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"name":"{{name}}","avatar":"","channelType":"invalid_enum_value"}', async () => {
              testNumber = 44;
              totalTests++;
              const payloadObj = {"workspaceId":null,"name":"{{name}}","avatar":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #45 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"name":"{{name}}","avatar":"","channelType":""}', async () => {
              testNumber = 45;
              totalTests++;
              const payloadObj = {"workspaceId":null,"name":"{{name}}","avatar":"","channelType":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Could not resolve permission type"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #46 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"{{name}}","avatar":"","channelType":0}', async () => {
              testNumber = 46;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","name":"{{name}}","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #47 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":123,"avatar":"","channelType":0}', async () => {
              testNumber = 47;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","name":123,"avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #48 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"aa","avatar":"","channelType":0}', async () => {
              testNumber = 48;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","name":"aa","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #49 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":0}', async () => {
              testNumber = 49;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #50 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","avatar":"","channelType":0}', async () => {
              testNumber = 50;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #51 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"","avatar":"","channelType":0}', async () => {
              testNumber = 51;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","name":"","avatar":"","channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #52 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"{{name}}","avatar":123,"channelType":0}', async () => {
              testNumber = 52;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","name":"{{name}}","avatar":123,"channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #53 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"{{name}}","avatar":"","channelType":"invalid_enum_value"}', async () => {
              testNumber = 53;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","name":"{{name}}","avatar":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #54 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"{{name}}","avatar":"","channelType":""}', async () => {
              testNumber = 54;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","name":"{{name}}","avatar":"","channelType":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #55 should return errors ["name expected string,received number","avatar expected string,received number","channelType is not accept DM Channel"] when body {"workspaceId":"0","name":123,"avatar":123,"channelType":0}', async () => {
              testNumber = 55;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":123,"avatar":123,"channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name expected string, received number","avatar expected string, received number","channelType is not accept DM Channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #56 should return errors ["name expected string,received number","avatar should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":123,"avatar":"","channelType":"invalid_enum_value"}', async () => {
              testNumber = 56;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":123,"avatar":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name expected string, received number","avatar should not be empty","channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #57 should return errors ["name expected string,received number","avatar should not be empty","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":123,"avatar":"","channelType":""}', async () => {
              testNumber = 57;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":123,"avatar":"","channelType":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name expected string, received number","avatar should not be empty","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2, received ''"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #58 should return errors ["name string must contain at least 3 character(s)","avatar expected string,received number","channelType is not accept DM Channel"] when body {"workspaceId":"0","name":"aa","avatar":123,"channelType":0}', async () => {
              testNumber = 58;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"aa","avatar":123,"channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name string must contain at least 3 character(s)","avatar expected string, received number","channelType is not accept DM Channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #59 should return errors ["name string must contain at least 3 character(s)","avatar should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"aa","avatar":"","channelType":"invalid_enum_value"}', async () => {
              testNumber = 59;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"aa","avatar":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name string must contain at least 3 character(s)","avatar should not be empty","channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #60 should return errors ["name string must contain at least 3 character(s)","avatar should not be empty","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"aa","avatar":"","channelType":""}', async () => {
              testNumber = 60;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"aa","avatar":"","channelType":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name string must contain at least 3 character(s)","avatar should not be empty","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2, received ''"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #61 should return errors ["name string must contain at most 50 character(s)","avatar expected string,received number","channelType is not accept DM Channel"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":123,"channelType":0}', async () => {
              testNumber = 61;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":123,"channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name string must contain at most 50 character(s)","avatar expected string, received number","channelType is not accept DM Channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #62 should return errors ["name string must contain at most 50 character(s)","avatar should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":"invalid_enum_value"}', async () => {
              testNumber = 62;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name string must contain at most 50 character(s)","avatar should not be empty","channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #63 should return errors ["name string must contain at most 50 character(s)","avatar should not be empty","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":""}', async () => {
              testNumber = 63;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name string must contain at most 50 character(s)","avatar should not be empty","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2, received ''"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #64 should return errors ["name required","avatar expected string,received number","channelType is not accept DM Channel"] when body {"workspaceId":"0","avatar":123,"channelType":0}', async () => {
              testNumber = 64;
              totalTests++;
              const payloadObj = {"workspaceId":"0","avatar":123,"channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name required","avatar expected string, received number","channelType is not accept DM Channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #65 should return errors ["name required","avatar should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","avatar":"","channelType":"invalid_enum_value"}', async () => {
              testNumber = 65;
              totalTests++;
              const payloadObj = {"workspaceId":"0","avatar":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name required","avatar should not be empty","channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #66 should return errors ["name required","avatar should not be empty","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","avatar":"","channelType":""}', async () => {
              testNumber = 66;
              totalTests++;
              const payloadObj = {"workspaceId":"0","avatar":"","channelType":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name required","avatar should not be empty","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2, received ''"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #67 should return errors ["name should not be empty","name string must contain at least 3 character(s)","avatar expected string,received number","channelType is not accept DM Channel"] when body {"workspaceId":"0","name":"","avatar":123,"channelType":0}', async () => {
              testNumber = 67;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"","avatar":123,"channelType":0};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name should not be empty","name string must contain at least 3 character(s)","avatar expected string, received number","channelType is not accept DM Channel"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #68 should return errors ["name should not be empty","name string must contain at least 3 character(s)","avatar should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"","avatar":"","channelType":"invalid_enum_value"}', async () => {
              testNumber = 68;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"","avatar":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name should not be empty","name string must contain at least 3 character(s)","avatar should not be empty","channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #69 should return errors ["name should not be empty","name string must contain at least 3 character(s)","avatar should not be empty","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"","avatar":"","channelType":""}', async () => {
              testNumber = 69;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"","avatar":"","channelType":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["name should not be empty","name string must contain at least 3 character(s)","avatar should not be empty","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2, received ''"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #70 should return errors ["avatar expected string,received number","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"{{name}}","avatar":123,"channelType":"invalid_enum_value"}', async () => {
              testNumber = 70;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"{{name}}","avatar":123,"channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["avatar expected string, received number","channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

            it('Test case #71 should return errors ["avatar expected string,received number","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"{{name}}","avatar":123,"channelType":""}', async () => {
              testNumber = 71;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"{{name}}","avatar":123,"channelType":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  'ACTION.CREATE_CHANNEL',
                  {"x-session-token":"aaaaaaaaaaaaaa"},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ["avatar expected string, received number","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2, received ''"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                  case 201:
                  case 400:
                  case 403:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : data?.error?.details
                        ? [data.error.details]
                        : (data?.ok === true)
                          ? []
                          : data !== undefined && data !== null
                            ? [data]
                            : [];
                    softExpectDetails = [...expectDetails].sort();
                    
                    const allErrorsMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    
                    const exactMatch = allErrorsMatched && 
                                     softExpectDetails.length === expectJson.length;
                    
                    if (exactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (allErrorsMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors includes of expected errors"
                      });
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails,
                        extra: expectJson,
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    const defaultAllMatched = softExpectDetails.every(actualError => 
                      expectJson.includes(actualError)
                    );
                    const defaultExactMatch = defaultAllMatched && 
                                            softExpectDetails.length === expectJson.length;
                    
                    if (defaultExactMatch) {
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } else if (defaultAllMatched) {
                      warnings.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        actualErrors: softExpectDetails,
                        expectedErrors: expectJson,
                        message: "Actual errors are subset of expected errors"
                      });
                      passedTests++;
                    } else {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails.filter(x => !expectJson.includes(x)),
                        extra: expectJson.filter(x => !softExpectDetails.includes(x))
                      });
                    }
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });
            

        afterEach(async () => {
          testCaseNumber++;
          const afterEachSteps = [];

          if (afterEachSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(afterEachSteps, globalContext);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: `Case ${testCaseNumber}`,
                phase: 'afterEach',
              });
            });
          } else {
            contextData = globalContext;
          }
        });

        afterAll(async () => {
          const afterAllSteps = [];

          if (afterAllSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(afterAllSteps, globalContext);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: `Case ${testCaseNumber}`,
                phase: 'afterAll',
              });
            });
          } else {
            contextData = globalContext;
          }
          
          const testResult: TestResult = {
            path: '',
            className: 'create-channel',
            allSteps: allSteps,
            chunkNumber: undefined,
            failedTests: [...failedTests],
            codedTest: [...codedTest],
            warnings: [...warnings],
            passedTests: passedTests,
            totalTests: totalTests,
            failedStep: [...failedStep]
          };
          const reportDir = path.join(__dirname, '../../../../tmp-reports');
          if (!fs.existsSync(reportDir)) {
            fs.mkdirSync(reportDir, { recursive: true });
          }
          const chunkNumber = null;
          const fileName = 'create-channel' + (chunkNumber ? `-chunk-null` : '') + '.result.json';
          const filePath = path.join(reportDir, fileName);
          fs.writeFileSync(filePath, JSON.stringify(testResult, null, 2), 'utf-8');

          console.log(`📝 Saved result for create-channel chunk single to ${filePath}`);
        });
    });
  