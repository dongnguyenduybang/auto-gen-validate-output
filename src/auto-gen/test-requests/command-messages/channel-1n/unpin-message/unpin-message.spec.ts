
    import fs from 'fs';
    import path from 'path';
    import { summaryFields, resolveCallAPI, resolveVariables } from '../../../../utils/helper';
    import { TestResult } from '../../../../utils/declarations';
    import { executeSteps } from '../../../../utils/text-execute-test';
    import { TestContext } from '../../../../utils/text-context';
    import { UnpinMessageRequest } from '././unpin-message.request';
    describe('Testcase for unpin-message', () => {
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
        let currentTestCaseTitle = ''
        let context, contextData;
        
        beforeAll(async () => {
          testType = 'request';
          globalContext = globalThis.globalContext;
          context = new TestContext();
          const beforeAllSteps = UnpinMessageRequest.options
            ?.find((option) => option.beforeAll)
            ?.beforeAll || [];

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
          }else {
            contextData = globalContext
          }
        });
        beforeEach(async () => {
          testCaseNumber++;
          const beforeEachSteps = UnpinMessageRequest.options
            ?.find((option) => option.beforeEach)
            ?.beforeEach || [];

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
          }else {
            contextData = globalContext
          }
        });

        
            it('Test case #1 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 1;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":123,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #2 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":123,"messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 2;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelId":123,"messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":123,"channelId":123,"messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #3 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 3;
              totalTests++;
              const payloadObj = {"workspaceId":123,"messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":123,"messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #4 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 4;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelId":"","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":123,"channelId":"","messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #5 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":null,"messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 5;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelId":null,"messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":123,"channelId":null,"messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #6 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"invalid_value","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 6;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelId":"invalid_value","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":123,"channelId":"invalid_value","messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #7 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","messageId":123,"status":false}', async () => {
              testNumber = 7;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelId":"{{channelId}}","messageId":123,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":123,"channelId":"{{channelId}}","messageId":123,"status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #8 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","status":false}', async () => {
              testNumber = 8;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelId":"{{channelId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":123,"channelId":"{{channelId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #9 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","messageId":"","status":false}', async () => {
              testNumber = 9;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelId":"{{channelId}}","messageId":"","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":123,"channelId":"{{channelId}}","messageId":"","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #10 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","messageId":null,"status":false}', async () => {
              testNumber = 10;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelId":"{{channelId}}","messageId":null,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":123,"channelId":"{{channelId}}","messageId":null,"status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #11 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","messageId":"invalid_ULID","status":false}', async () => {
              testNumber = 11;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelId":"{{channelId}}","messageId":"invalid_ULID","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":123,"channelId":"{{channelId}}","messageId":"invalid_ULID","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #12 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"}', async () => {
              testNumber = 12;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":123,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #13 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","messageId":"{{messageId}}"}', async () => {
              testNumber = 13;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelId":"{{channelId}}","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":123,"channelId":"{{channelId}}","messageId":"{{messageId}}"},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #14 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":""}', async () => {
              testNumber = 14;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":123,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":""},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #15 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":null}', async () => {
              testNumber = 15;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":123,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":null},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #16 should return errors [] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 16;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":"{{messageId}}","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = [].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #17 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 17;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":123,"messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":123,"messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #18 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 18;
              totalTests++;
              const payloadObj = {"workspaceId":"0","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","messageId":"{{messageId}}","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unsupported permission type"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #19 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 19;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"","messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #20 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":null,"messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 20;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":null,"messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":null,"messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #21 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 21;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"invalid_value","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"invalid_value","messageId":"{{messageId}}","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #22 should return errors ["messageId expected string,received number"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":123,"status":false}', async () => {
              testNumber = 22;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":123,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":123,"status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId expected string, received number"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #23 should return errors ["messageId required"] when body {"workspaceId":"0","channelId":"{{channelId}}","status":false}', async () => {
              testNumber = 23;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId required"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #24 should return errors ["messageId should not be empty","messageId invalid ulid"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":"","status":false}', async () => {
              testNumber = 24;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":"","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":"","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId should not be empty","messageId invalid ulid"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #25 should return errors ["messageId expected string,received null"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":null,"status":false}', async () => {
              testNumber = 25;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":null,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":null,"status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId expected string, received null"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #26 should return errors ["messageId invalid ulid"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":"invalid_ULID","status":false}', async () => {
              testNumber = 26;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":"invalid_ULID","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":"invalid_ULID","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId invalid ulid"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #27 should return errors ["status expected boolean,received string"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"}', async () => {
              testNumber = 27;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["status expected boolean, received string"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #28 should return errors ["status required","status expected boolean,received undefined"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":"{{messageId}}"}', async () => {
              testNumber = 28;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":"{{messageId}}"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["status required","status expected boolean, received undefined"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #29 should return errors ["status should not be empty","status expected boolean,received string"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":"{{messageId}}","status":""}', async () => {
              testNumber = 29;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":"{{messageId}}","status":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":"{{messageId}}","status":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["status should not be empty","status expected boolean, received string"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #30 should return errors ["status expected boolean,received null"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":"{{messageId}}","status":null}', async () => {
              testNumber = 30;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":"{{messageId}}","status":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":"{{messageId}}","status":null},
                  contextData
                );
                const data = response.data;
                const expectJson = ["status expected boolean, received null"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #31 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 31;
              totalTests++;
              const payloadObj = {"channelId":"{{channelId}}","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"channelId":"{{channelId}}","messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #32 should return errors ["Could not resolve permission type"] when body {"channelId":123,"messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 32;
              totalTests++;
              const payloadObj = {"channelId":123,"messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"channelId":123,"messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #33 should return errors ["Could not resolve permission type"] when body {"messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 33;
              totalTests++;
              const payloadObj = {"messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #34 should return errors ["Could not resolve permission type"] when body {"channelId":"","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 34;
              totalTests++;
              const payloadObj = {"channelId":"","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"channelId":"","messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #35 should return errors ["Could not resolve permission type"] when body {"channelId":null,"messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 35;
              totalTests++;
              const payloadObj = {"channelId":null,"messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"channelId":null,"messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #36 should return errors ["Could not resolve permission type"] when body {"channelId":"invalid_value","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 36;
              totalTests++;
              const payloadObj = {"channelId":"invalid_value","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"channelId":"invalid_value","messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #37 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","messageId":123,"status":false}', async () => {
              testNumber = 37;
              totalTests++;
              const payloadObj = {"channelId":"{{channelId}}","messageId":123,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"channelId":"{{channelId}}","messageId":123,"status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #38 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","status":false}', async () => {
              testNumber = 38;
              totalTests++;
              const payloadObj = {"channelId":"{{channelId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"channelId":"{{channelId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #39 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","messageId":"","status":false}', async () => {
              testNumber = 39;
              totalTests++;
              const payloadObj = {"channelId":"{{channelId}}","messageId":"","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"channelId":"{{channelId}}","messageId":"","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #40 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","messageId":null,"status":false}', async () => {
              testNumber = 40;
              totalTests++;
              const payloadObj = {"channelId":"{{channelId}}","messageId":null,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"channelId":"{{channelId}}","messageId":null,"status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #41 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","messageId":"invalid_ULID","status":false}', async () => {
              testNumber = 41;
              totalTests++;
              const payloadObj = {"channelId":"{{channelId}}","messageId":"invalid_ULID","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"channelId":"{{channelId}}","messageId":"invalid_ULID","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #42 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"}', async () => {
              testNumber = 42;
              totalTests++;
              const payloadObj = {"channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #43 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","messageId":"{{messageId}}"}', async () => {
              testNumber = 43;
              totalTests++;
              const payloadObj = {"channelId":"{{channelId}}","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"channelId":"{{channelId}}","messageId":"{{messageId}}"},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #44 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","messageId":"{{messageId}}","status":""}', async () => {
              testNumber = 44;
              totalTests++;
              const payloadObj = {"channelId":"{{channelId}}","messageId":"{{messageId}}","status":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"channelId":"{{channelId}}","messageId":"{{messageId}}","status":""},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #45 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","messageId":"{{messageId}}","status":null}', async () => {
              testNumber = 45;
              totalTests++;
              const payloadObj = {"channelId":"{{channelId}}","messageId":"{{messageId}}","status":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"channelId":"{{channelId}}","messageId":"{{messageId}}","status":null},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #46 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 46;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"","channelId":"{{channelId}}","messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #47 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":123,"messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 47;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":123,"messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"","channelId":123,"messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #48 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 48;
              totalTests++;
              const payloadObj = {"workspaceId":"","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"","messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #49 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 49;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"","channelId":"","messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #50 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":null,"messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 50;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":null,"messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"","channelId":null,"messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #51 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"invalid_value","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 51;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"invalid_value","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"","channelId":"invalid_value","messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #52 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","messageId":123,"status":false}', async () => {
              testNumber = 52;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","messageId":123,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"","channelId":"{{channelId}}","messageId":123,"status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #53 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","status":false}', async () => {
              testNumber = 53;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"","channelId":"{{channelId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #54 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","messageId":"","status":false}', async () => {
              testNumber = 54;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","messageId":"","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"","channelId":"{{channelId}}","messageId":"","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #55 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","messageId":null,"status":false}', async () => {
              testNumber = 55;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","messageId":null,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"","channelId":"{{channelId}}","messageId":null,"status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #56 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","messageId":"invalid_ULID","status":false}', async () => {
              testNumber = 56;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","messageId":"invalid_ULID","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"","channelId":"{{channelId}}","messageId":"invalid_ULID","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #57 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"}', async () => {
              testNumber = 57;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"","channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #58 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","messageId":"{{messageId}}"}', async () => {
              testNumber = 58;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"","channelId":"{{channelId}}","messageId":"{{messageId}}"},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #59 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","messageId":"{{messageId}}","status":""}', async () => {
              testNumber = 59;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","messageId":"{{messageId}}","status":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"","channelId":"{{channelId}}","messageId":"{{messageId}}","status":""},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #60 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","messageId":"{{messageId}}","status":null}', async () => {
              testNumber = 60;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelId":"{{channelId}}","messageId":"{{messageId}}","status":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"","channelId":"{{channelId}}","messageId":"{{messageId}}","status":null},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #61 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 61;
              totalTests++;
              const payloadObj = {"workspaceId":null,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":null,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #62 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"channelId":123,"messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 62;
              totalTests++;
              const payloadObj = {"workspaceId":null,"channelId":123,"messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":null,"channelId":123,"messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #63 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 63;
              totalTests++;
              const payloadObj = {"workspaceId":null,"messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":null,"messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #64 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"channelId":"","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 64;
              totalTests++;
              const payloadObj = {"workspaceId":null,"channelId":"","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":null,"channelId":"","messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #65 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"channelId":null,"messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 65;
              totalTests++;
              const payloadObj = {"workspaceId":null,"channelId":null,"messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":null,"channelId":null,"messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #66 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"channelId":"invalid_value","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 66;
              totalTests++;
              const payloadObj = {"workspaceId":null,"channelId":"invalid_value","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":null,"channelId":"invalid_value","messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #67 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"channelId":"{{channelId}}","messageId":123,"status":false}', async () => {
              testNumber = 67;
              totalTests++;
              const payloadObj = {"workspaceId":null,"channelId":"{{channelId}}","messageId":123,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":null,"channelId":"{{channelId}}","messageId":123,"status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #68 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"channelId":"{{channelId}}","status":false}', async () => {
              testNumber = 68;
              totalTests++;
              const payloadObj = {"workspaceId":null,"channelId":"{{channelId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":null,"channelId":"{{channelId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #69 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"channelId":"{{channelId}}","messageId":"","status":false}', async () => {
              testNumber = 69;
              totalTests++;
              const payloadObj = {"workspaceId":null,"channelId":"{{channelId}}","messageId":"","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":null,"channelId":"{{channelId}}","messageId":"","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #70 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"channelId":"{{channelId}}","messageId":null,"status":false}', async () => {
              testNumber = 70;
              totalTests++;
              const payloadObj = {"workspaceId":null,"channelId":"{{channelId}}","messageId":null,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":null,"channelId":"{{channelId}}","messageId":null,"status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #71 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"channelId":"{{channelId}}","messageId":"invalid_ULID","status":false}', async () => {
              testNumber = 71;
              totalTests++;
              const payloadObj = {"workspaceId":null,"channelId":"{{channelId}}","messageId":"invalid_ULID","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":null,"channelId":"{{channelId}}","messageId":"invalid_ULID","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #72 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"}', async () => {
              testNumber = 72;
              totalTests++;
              const payloadObj = {"workspaceId":null,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":null,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #73 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"channelId":"{{channelId}}","messageId":"{{messageId}}"}', async () => {
              testNumber = 73;
              totalTests++;
              const payloadObj = {"workspaceId":null,"channelId":"{{channelId}}","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":null,"channelId":"{{channelId}}","messageId":"{{messageId}}"},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #74 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":""}', async () => {
              testNumber = 74;
              totalTests++;
              const payloadObj = {"workspaceId":null,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":null,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":""},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #75 should return errors ["Could not resolve permission type"] when body {"workspaceId":null,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":null}', async () => {
              testNumber = 75;
              totalTests++;
              const payloadObj = {"workspaceId":null,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":null,"channelId":"{{channelId}}","messageId":"{{messageId}}","status":null},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #76 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 76;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"{{messageId}}","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #77 should return errors ["Could not resolve permission type"] when body {"workspaceId":"invalid_value","channelId":123,"messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 77;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","channelId":123,"messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"invalid_value","channelId":123,"messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #78 should return errors ["Unsupported permission type"] when body {"workspaceId":"invalid_value","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 78;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"invalid_value","messageId":"{{messageId}}","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unsupported permission type"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #79 should return errors ["Could not resolve permission type"] when body {"workspaceId":"invalid_value","channelId":"","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 79;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","channelId":"","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"invalid_value","channelId":"","messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #80 should return errors ["Could not resolve permission type"] when body {"workspaceId":"invalid_value","channelId":null,"messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 80;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","channelId":null,"messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"invalid_value","channelId":null,"messageId":"{{messageId}}","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #81 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"invalid_value","messageId":"{{messageId}}","status":false}', async () => {
              testNumber = 81;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","channelId":"invalid_value","messageId":"{{messageId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"invalid_value","channelId":"invalid_value","messageId":"{{messageId}}","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #82 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":123,"status":false}', async () => {
              testNumber = 82;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":123,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":123,"status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #83 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","status":false}', async () => {
              testNumber = 83;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","channelId":"{{channelId}}","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"invalid_value","channelId":"{{channelId}}","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #84 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"","status":false}', async () => {
              testNumber = 84;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #85 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":null,"status":false}', async () => {
              testNumber = 85;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":null,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":null,"status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #86 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"invalid_ULID","status":false}', async () => {
              testNumber = 86;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"invalid_ULID","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"invalid_ULID","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #87 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"}', async () => {
              testNumber = 87;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"{{messageId}}","status":"invalid_boolean"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #88 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"{{messageId}}"}', async () => {
              testNumber = 88;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"{{messageId}}"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #89 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"{{messageId}}","status":""}', async () => {
              testNumber = 89;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"{{messageId}}","status":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"{{messageId}}","status":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #90 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"{{messageId}}","status":null}', async () => {
              testNumber = 90;
              totalTests++;
              const payloadObj = {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"{{messageId}}","status":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"invalid_value","channelId":"{{channelId}}","messageId":"{{messageId}}","status":null},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #91 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"messageId":123,"status":false}', async () => {
              testNumber = 91;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":123,"messageId":123,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":123,"messageId":123,"status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #92 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"status":false}', async () => {
              testNumber = 92;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":123,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":123,"status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #93 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"messageId":"","status":false}', async () => {
              testNumber = 93;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":123,"messageId":"","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":123,"messageId":"","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #94 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"messageId":null,"status":false}', async () => {
              testNumber = 94;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":123,"messageId":null,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":123,"messageId":null,"status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #95 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"messageId":"invalid_ULID","status":false}', async () => {
              testNumber = 95;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":123,"messageId":"invalid_ULID","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":123,"messageId":"invalid_ULID","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #96 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"messageId":"{{messageId}}","status":"invalid_boolean"}', async () => {
              testNumber = 96;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":123,"messageId":"{{messageId}}","status":"invalid_boolean"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":123,"messageId":"{{messageId}}","status":"invalid_boolean"},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #97 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"messageId":"{{messageId}}"}', async () => {
              testNumber = 97;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":123,"messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":123,"messageId":"{{messageId}}"},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #98 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"messageId":"{{messageId}}","status":""}', async () => {
              testNumber = 98;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":123,"messageId":"{{messageId}}","status":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":123,"messageId":"{{messageId}}","status":""},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #99 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"messageId":"{{messageId}}","status":null}', async () => {
              testNumber = 99;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":123,"messageId":"{{messageId}}","status":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":123,"messageId":"{{messageId}}","status":null},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #100 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","messageId":123,"status":false}', async () => {
              testNumber = 100;
              totalTests++;
              const payloadObj = {"workspaceId":"0","messageId":123,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","messageId":123,"status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unsupported permission type"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #101 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","status":false}', async () => {
              testNumber = 101;
              totalTests++;
              const payloadObj = {"workspaceId":"0","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unsupported permission type"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #102 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","messageId":"","status":false}', async () => {
              testNumber = 102;
              totalTests++;
              const payloadObj = {"workspaceId":"0","messageId":"","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","messageId":"","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unsupported permission type"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #103 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","messageId":null,"status":false}', async () => {
              testNumber = 103;
              totalTests++;
              const payloadObj = {"workspaceId":"0","messageId":null,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","messageId":null,"status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unsupported permission type"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #104 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","messageId":"invalid_ULID","status":false}', async () => {
              testNumber = 104;
              totalTests++;
              const payloadObj = {"workspaceId":"0","messageId":"invalid_ULID","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","messageId":"invalid_ULID","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unsupported permission type"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #105 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","messageId":"{{messageId}}","status":"invalid_boolean"}', async () => {
              testNumber = 105;
              totalTests++;
              const payloadObj = {"workspaceId":"0","messageId":"{{messageId}}","status":"invalid_boolean"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","messageId":"{{messageId}}","status":"invalid_boolean"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unsupported permission type"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #106 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","messageId":"{{messageId}}"}', async () => {
              testNumber = 106;
              totalTests++;
              const payloadObj = {"workspaceId":"0","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","messageId":"{{messageId}}"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unsupported permission type"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #107 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","messageId":"{{messageId}}","status":""}', async () => {
              testNumber = 107;
              totalTests++;
              const payloadObj = {"workspaceId":"0","messageId":"{{messageId}}","status":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","messageId":"{{messageId}}","status":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unsupported permission type"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #108 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","messageId":"{{messageId}}","status":null}', async () => {
              testNumber = 108;
              totalTests++;
              const payloadObj = {"workspaceId":"0","messageId":"{{messageId}}","status":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","messageId":"{{messageId}}","status":null},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unsupported permission type"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #109 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","messageId":123,"status":false}', async () => {
              testNumber = 109;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","messageId":123,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"","messageId":123,"status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #110 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","status":false}', async () => {
              testNumber = 110;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #111 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","messageId":"","status":false}', async () => {
              testNumber = 111;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","messageId":"","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"","messageId":"","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #112 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","messageId":null,"status":false}', async () => {
              testNumber = 112;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","messageId":null,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"","messageId":null,"status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #113 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","messageId":"invalid_ULID","status":false}', async () => {
              testNumber = 113;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","messageId":"invalid_ULID","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"","messageId":"invalid_ULID","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #114 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","messageId":"{{messageId}}","status":"invalid_boolean"}', async () => {
              testNumber = 114;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","messageId":"{{messageId}}","status":"invalid_boolean"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"","messageId":"{{messageId}}","status":"invalid_boolean"},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #115 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","messageId":"{{messageId}}"}', async () => {
              testNumber = 115;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"","messageId":"{{messageId}}"},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #116 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","messageId":"{{messageId}}","status":""}', async () => {
              testNumber = 116;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","messageId":"{{messageId}}","status":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"","messageId":"{{messageId}}","status":""},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #117 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","messageId":"{{messageId}}","status":null}', async () => {
              testNumber = 117;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"","messageId":"{{messageId}}","status":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"","messageId":"{{messageId}}","status":null},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #118 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":null,"messageId":123,"status":false}', async () => {
              testNumber = 118;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":null,"messageId":123,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":null,"messageId":123,"status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #119 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":null,"status":false}', async () => {
              testNumber = 119;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":null,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":null,"status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #120 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":null,"messageId":"","status":false}', async () => {
              testNumber = 120;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":null,"messageId":"","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":null,"messageId":"","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #121 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":null,"messageId":null,"status":false}', async () => {
              testNumber = 121;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":null,"messageId":null,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":null,"messageId":null,"status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #122 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":null,"messageId":"invalid_ULID","status":false}', async () => {
              testNumber = 122;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":null,"messageId":"invalid_ULID","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":null,"messageId":"invalid_ULID","status":false},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #123 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":null,"messageId":"{{messageId}}","status":"invalid_boolean"}', async () => {
              testNumber = 123;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":null,"messageId":"{{messageId}}","status":"invalid_boolean"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":null,"messageId":"{{messageId}}","status":"invalid_boolean"},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #124 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":null,"messageId":"{{messageId}}"}', async () => {
              testNumber = 124;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":null,"messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":null,"messageId":"{{messageId}}"},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #125 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":null,"messageId":"{{messageId}}","status":""}', async () => {
              testNumber = 125;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":null,"messageId":"{{messageId}}","status":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":null,"messageId":"{{messageId}}","status":""},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #126 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":null,"messageId":"{{messageId}}","status":null}', async () => {
              testNumber = 126;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":null,"messageId":"{{messageId}}","status":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":null,"messageId":"{{messageId}}","status":null},
                  contextData
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #127 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","messageId":123,"status":false}', async () => {
              testNumber = 127;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"invalid_value","messageId":123,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"invalid_value","messageId":123,"status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #128 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","status":false}', async () => {
              testNumber = 128;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"invalid_value","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"invalid_value","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #129 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","messageId":"","status":false}', async () => {
              testNumber = 129;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"invalid_value","messageId":"","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"invalid_value","messageId":"","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #130 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","messageId":null,"status":false}', async () => {
              testNumber = 130;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"invalid_value","messageId":null,"status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"invalid_value","messageId":null,"status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #131 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","messageId":"invalid_ULID","status":false}', async () => {
              testNumber = 131;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"invalid_value","messageId":"invalid_ULID","status":false};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"invalid_value","messageId":"invalid_ULID","status":false},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #132 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","messageId":"{{messageId}}","status":"invalid_boolean"}', async () => {
              testNumber = 132;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"invalid_value","messageId":"{{messageId}}","status":"invalid_boolean"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"invalid_value","messageId":"{{messageId}}","status":"invalid_boolean"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #133 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","messageId":"{{messageId}}"}', async () => {
              testNumber = 133;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"invalid_value","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"invalid_value","messageId":"{{messageId}}"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #134 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","messageId":"{{messageId}}","status":""}', async () => {
              testNumber = 134;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"invalid_value","messageId":"{{messageId}}","status":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"invalid_value","messageId":"{{messageId}}","status":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #135 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","messageId":"{{messageId}}","status":null}', async () => {
              testNumber = 135;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"invalid_value","messageId":"{{messageId}}","status":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"invalid_value","messageId":"{{messageId}}","status":null},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Invalid channel"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #136 should return errors ["messageId expected string,received number","status expected boolean,received string"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":123,"status":"invalid_boolean"}', async () => {
              testNumber = 136;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":123,"status":"invalid_boolean"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":123,"status":"invalid_boolean"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId expected string, received number","status expected boolean, received string"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #137 should return errors ["messageId expected string,received number","status required","status expected boolean,received undefined"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":123}', async () => {
              testNumber = 137;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":123},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId expected string, received number","status required","status expected boolean, received undefined"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #138 should return errors ["messageId expected string,received number","status should not be empty","status expected boolean,received string"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":123,"status":""}', async () => {
              testNumber = 138;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":123,"status":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":123,"status":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId expected string, received number","status should not be empty","status expected boolean, received string"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #139 should return errors ["messageId expected string,received number","status expected boolean,received null"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":123,"status":null}', async () => {
              testNumber = 139;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":123,"status":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":123,"status":null},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId expected string, received number","status expected boolean, received null"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #140 should return errors ["messageId required","status expected boolean,received string"] when body {"workspaceId":"0","channelId":"{{channelId}}","status":"invalid_boolean"}', async () => {
              testNumber = 140;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","status":"invalid_boolean"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","status":"invalid_boolean"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId required","status expected boolean, received string"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #141 should return errors ["messageId required","status required","status expected boolean,received undefined"] when body {"workspaceId":"0","channelId":"{{channelId}}"}', async () => {
              testNumber = 141;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId required","status required","status expected boolean, received undefined"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #142 should return errors ["messageId required","status should not be empty","status expected boolean,received string"] when body {"workspaceId":"0","channelId":"{{channelId}}","status":""}', async () => {
              testNumber = 142;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","status":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","status":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId required","status should not be empty","status expected boolean, received string"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #143 should return errors ["messageId required","status expected boolean,received null"] when body {"workspaceId":"0","channelId":"{{channelId}}","status":null}', async () => {
              testNumber = 143;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","status":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","status":null},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId required","status expected boolean, received null"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #144 should return errors ["messageId should not be empty","messageId invalid ulid","status expected boolean,received string"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":"","status":"invalid_boolean"}', async () => {
              testNumber = 144;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":"","status":"invalid_boolean"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":"","status":"invalid_boolean"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId should not be empty","messageId invalid ulid","status expected boolean, received string"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #145 should return errors ["messageId should not be empty","messageId invalid ulid","status required","status expected boolean,received undefined"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":""}', async () => {
              testNumber = 145;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId should not be empty","messageId invalid ulid","status required","status expected boolean, received undefined"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #146 should return errors ["messageId should not be empty","messageId invalid ulid","status should not be empty","status expected boolean,received string"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":"","status":""}', async () => {
              testNumber = 146;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":"","status":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":"","status":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId should not be empty","messageId invalid ulid","status should not be empty","status expected boolean, received string"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #147 should return errors ["messageId should not be empty","messageId invalid ulid","status expected boolean,received null"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":"","status":null}', async () => {
              testNumber = 147;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":"","status":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":"","status":null},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId should not be empty","messageId invalid ulid","status expected boolean, received null"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #148 should return errors ["messageId expected string,received null","status expected boolean,received string"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":null,"status":"invalid_boolean"}', async () => {
              testNumber = 148;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":null,"status":"invalid_boolean"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":null,"status":"invalid_boolean"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId expected string, received null","status expected boolean, received string"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #149 should return errors ["messageId expected string,received null","status required","status expected boolean,received undefined"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":null}', async () => {
              testNumber = 149;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":null},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId expected string, received null","status required","status expected boolean, received undefined"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #150 should return errors ["messageId expected string,received null","status should not be empty","status expected boolean,received string"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":null,"status":""}', async () => {
              testNumber = 150;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":null,"status":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":null,"status":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId expected string, received null","status should not be empty","status expected boolean, received string"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #151 should return errors ["messageId expected string,received null","status expected boolean,received null"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":null,"status":null}', async () => {
              testNumber = 151;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":null,"status":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":null,"status":null},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId expected string, received null","status expected boolean, received null"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #152 should return errors ["messageId invalid ulid","status expected boolean,received string"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":"invalid_ULID","status":"invalid_boolean"}', async () => {
              testNumber = 152;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":"invalid_ULID","status":"invalid_boolean"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":"invalid_ULID","status":"invalid_boolean"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId invalid ulid","status expected boolean, received string"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #153 should return errors ["messageId invalid ulid","status required","status expected boolean,received undefined"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":"invalid_ULID"}', async () => {
              testNumber = 153;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":"invalid_ULID"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":"invalid_ULID"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId invalid ulid","status required","status expected boolean, received undefined"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #154 should return errors ["messageId invalid ulid","status should not be empty","status expected boolean,received string"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":"invalid_ULID","status":""}', async () => {
              testNumber = 154;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":"invalid_ULID","status":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":"invalid_ULID","status":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId invalid ulid","status should not be empty","status expected boolean, received string"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #155 should return errors ["messageId invalid ulid","status expected boolean,received null"] when body {"workspaceId":"0","channelId":"{{channelId}}","messageId":"invalid_ULID","status":null}', async () => {
              testNumber = 155;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelId":"{{channelId}}","messageId":"invalid_ULID","status":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "pinUnpinMessage",
                  {"x-session-token":"{{token}}"},
                  {"workspaceId":"0","channelId":"{{channelId}}","messageId":"invalid_ULID","status":null},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId invalid ulid","status expected boolean, received null"].sort();

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
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                    case 201:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
                      });
                    }
                    break;
                  case 400:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
      afterEach(async () => {
          testCaseNumber++;
          const afterEachSteps = UnpinMessageRequest.options
            ?.find((option) => option.afterEach)
            ?.afterEach || [];

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
          }else {
            contextData = globalContext
          }
        });

         afterAll(async () => {
          const afterAllSteps = UnpinMessageRequest.options
            ?.find((option) => option.afterAll)
            ?.afterAll || [];

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
          }else {
            contextData = globalContext
          }
          
          // Lưu kết quả vào biến toàn cục
          const testResult: TestResult = {
            path: '/Message/PinUnpinMessage',
            className: 'unpin-message',
            allSteps: allSteps,
            chunkNumber: undefined,
            failedTests: [...failedTests],
            codedTest: [...codedTest],
            passedTests: passedTests,
            totalTests: totalTests,
            failedStep: [...failedStep]
          };
          const reportDir = path.join(__dirname, '../../../../tmp-reports');
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  const chunkNumber = undefined
  const fileName = 'unpin-message' + (chunkNumber ? `-chunk-undefined` : '') + '.result.json';
  const filePath = path.join(reportDir, fileName);
  fs.writeFileSync(filePath, JSON.stringify(testResult, null, 2), 'utf-8');

  console.log(`📝 Saved result for unpin-message chunk single to ${filePath}`);
    });
        })
  