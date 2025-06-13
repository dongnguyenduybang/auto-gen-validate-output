
    import fs from 'fs';
    import path from 'path';
    import { summaryFields, resolveCallAPI, resolveVariables } from '../../../../utils/helper';
    import { TestResult } from '../../../../utils/declarations';
    import { executeSteps } from '../../../../utils/text-execute-test';
    import { TestContext } from '../../../../utils/text-context';
    import { DeleteDmMessagesForEveryoneRequest } from '././delete-dm-messages-for-everyone.request';
    describe('Testcase for delete-dm-messages-for-everyone', () => {
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
          const beforeAllSteps = DeleteDmMessagesForEveryoneRequest.options
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
          const beforeEachSteps = DeleteDmMessagesForEveryoneRequest.options
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

        
            it('Test case #1 should return errors ["Could not resolve permission type"] when body {"userId":123,"messageIds":["{{messageId}}"]}', async () => {
              testNumber = 1;
              totalTests++;
              const payloadObj = {"userId":123,"messageIds":["{{messageId}}"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"messageIds":["{{messageId}}"]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #2 should return errors ["Could not resolve permission type"] when body {"userId":123,"messageIds":"not_an_array"}', async () => {
              testNumber = 2;
              totalTests++;
              const payloadObj = {"userId":123,"messageIds":"not_an_array"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"messageIds":"not_an_array"},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #3 should return errors ["Could not resolve permission type"] when body {"userId":123,"messageIds":[123]}', async () => {
              testNumber = 3;
              totalTests++;
              const payloadObj = {"userId":123,"messageIds":[123]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"messageIds":[123]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #4 should return errors ["Could not resolve permission type"] when body {"userId":123,"messageIds":["valid_string"]}', async () => {
              testNumber = 4;
              totalTests++;
              const payloadObj = {"userId":123,"messageIds":["valid_string"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"messageIds":["valid_string"]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #5 should return errors ["Could not resolve permission type"] when body {"userId":123,"messageIds":[null]}', async () => {
              testNumber = 5;
              totalTests++;
              const payloadObj = {"userId":123,"messageIds":[null]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"messageIds":[null]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #6 should return errors ["Could not resolve permission type"] when body {"userId":123,"messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]}', async () => {
              testNumber = 6;
              totalTests++;
              const payloadObj = {"userId":123,"messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #7 should return errors ["Could not resolve permission type"] when body {"userId":123}', async () => {
              testNumber = 7;
              totalTests++;
              const payloadObj = {"userId":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":123},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #8 should return errors ["Could not resolve permission type"] when body {"userId":123,"messageIds":""}', async () => {
              testNumber = 8;
              totalTests++;
              const payloadObj = {"userId":123,"messageIds":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"messageIds":""},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #9 should return errors ["Could not resolve permission type"] when body {"userId":123,"messageIds":null}', async () => {
              testNumber = 9;
              totalTests++;
              const payloadObj = {"userId":123,"messageIds":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"messageIds":null},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #10 should return errors [] when body {"userId":"{{userId1}}","messageIds":["{{messageId}}"]}', async () => {
              testNumber = 10;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","messageIds":["{{messageId}}"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","messageIds":["{{messageId}}"]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #11 should return errors ["messageIds expected array,received string"] when body {"userId":"{{userId1}}","messageIds":"not_an_array"}', async () => {
              testNumber = 11;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","messageIds":"not_an_array"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","messageIds":"not_an_array"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageIds expected array, received string"].sort();

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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #12 should return errors ["messageIds has element 0 expected string,received number","messageIds has element 0 invalid ulid"] when body {"userId":"{{userId1}}","messageIds":[123]}', async () => {
              testNumber = 12;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","messageIds":[123]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","messageIds":[123]},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageIds has element 0 expected string, received number","messageIds has element 0 invalid ulid"].sort();

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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #13 should return errors ["messageIds has element 0 invalid ulid"] when body {"userId":"{{userId1}}","messageIds":["valid_string"]}', async () => {
              testNumber = 13;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","messageIds":["valid_string"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","messageIds":["valid_string"]},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageIds has element 0 invalid ulid"].sort();

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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #14 should return errors ["messageIds has element 0 expected string,received object","messageIds has element 0 invalid ulid"] when body {"userId":"{{userId1}}","messageIds":[null]}', async () => {
              testNumber = 14;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","messageIds":[null]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","messageIds":[null]},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageIds has element 0 expected string, received object","messageIds has element 0 invalid ulid"].sort();

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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #15 should return errors ["Messages not exist"] when body {"userId":"{{userId1}}","messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]}', async () => {
              testNumber = 15;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Messages not exist"].sort();

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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #16 should return errors ["messageIds required","messageIds expected array,received undefined"] when body {"userId":"{{userId1}}"}', async () => {
              testNumber = 16;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageIds required","messageIds expected array, received undefined"].sort();

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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #17 should return errors ["messageIds should not be empty","messageIds expected array,received string"] when body {"userId":"{{userId1}}","messageIds":""}', async () => {
              testNumber = 17;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","messageIds":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","messageIds":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageIds should not be empty","messageIds expected array, received string"].sort();

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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #18 should return errors ["messageIds expected array,received null"] when body {"userId":"{{userId1}}","messageIds":null}', async () => {
              testNumber = 18;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","messageIds":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","messageIds":null},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageIds expected array, received null"].sort();

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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #19 should return errors ["Could not resolve permission type"] when body {"messageIds":["{{messageId}}"]}', async () => {
              testNumber = 19;
              totalTests++;
              const payloadObj = {"messageIds":["{{messageId}}"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"messageIds":["{{messageId}}"]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #20 should return errors ["Could not resolve permission type"] when body {"messageIds":"not_an_array"}', async () => {
              testNumber = 20;
              totalTests++;
              const payloadObj = {"messageIds":"not_an_array"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"messageIds":"not_an_array"},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #21 should return errors ["Could not resolve permission type"] when body {"messageIds":[123]}', async () => {
              testNumber = 21;
              totalTests++;
              const payloadObj = {"messageIds":[123]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"messageIds":[123]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #22 should return errors ["Could not resolve permission type"] when body {"messageIds":["valid_string"]}', async () => {
              testNumber = 22;
              totalTests++;
              const payloadObj = {"messageIds":["valid_string"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"messageIds":["valid_string"]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #23 should return errors ["Could not resolve permission type"] when body {"messageIds":[null]}', async () => {
              testNumber = 23;
              totalTests++;
              const payloadObj = {"messageIds":[null]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"messageIds":[null]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #24 should return errors ["Could not resolve permission type"] when body {"messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]}', async () => {
              testNumber = 24;
              totalTests++;
              const payloadObj = {"messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #25 should return errors ["Could not resolve permission type"] when body {}', async () => {
              testNumber = 25;
              totalTests++;
              const payloadObj = {};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #26 should return errors ["Could not resolve permission type"] when body {"messageIds":""}', async () => {
              testNumber = 26;
              totalTests++;
              const payloadObj = {"messageIds":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"messageIds":""},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #27 should return errors ["Could not resolve permission type"] when body {"messageIds":null}', async () => {
              testNumber = 27;
              totalTests++;
              const payloadObj = {"messageIds":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"messageIds":null},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #28 should return errors ["Could not resolve permission type"] when body {"userId":"","messageIds":["{{messageId}}"]}', async () => {
              testNumber = 28;
              totalTests++;
              const payloadObj = {"userId":"","messageIds":["{{messageId}}"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","messageIds":["{{messageId}}"]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #29 should return errors ["Could not resolve permission type"] when body {"userId":"","messageIds":"not_an_array"}', async () => {
              testNumber = 29;
              totalTests++;
              const payloadObj = {"userId":"","messageIds":"not_an_array"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","messageIds":"not_an_array"},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #30 should return errors ["Could not resolve permission type"] when body {"userId":"","messageIds":[123]}', async () => {
              testNumber = 30;
              totalTests++;
              const payloadObj = {"userId":"","messageIds":[123]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","messageIds":[123]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #31 should return errors ["Could not resolve permission type"] when body {"userId":"","messageIds":["valid_string"]}', async () => {
              testNumber = 31;
              totalTests++;
              const payloadObj = {"userId":"","messageIds":["valid_string"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","messageIds":["valid_string"]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #32 should return errors ["Could not resolve permission type"] when body {"userId":"","messageIds":[null]}', async () => {
              testNumber = 32;
              totalTests++;
              const payloadObj = {"userId":"","messageIds":[null]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","messageIds":[null]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #33 should return errors ["Could not resolve permission type"] when body {"userId":"","messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]}', async () => {
              testNumber = 33;
              totalTests++;
              const payloadObj = {"userId":"","messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #34 should return errors ["Could not resolve permission type"] when body {"userId":""}', async () => {
              testNumber = 34;
              totalTests++;
              const payloadObj = {"userId":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":""},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #35 should return errors ["Could not resolve permission type"] when body {"userId":"","messageIds":""}', async () => {
              testNumber = 35;
              totalTests++;
              const payloadObj = {"userId":"","messageIds":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","messageIds":""},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #36 should return errors ["Could not resolve permission type"] when body {"userId":"","messageIds":null}', async () => {
              testNumber = 36;
              totalTests++;
              const payloadObj = {"userId":"","messageIds":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","messageIds":null},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #37 should return errors ["Could not resolve permission type"] when body {"userId":null,"messageIds":["{{messageId}}"]}', async () => {
              testNumber = 37;
              totalTests++;
              const payloadObj = {"userId":null,"messageIds":["{{messageId}}"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"messageIds":["{{messageId}}"]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #38 should return errors ["Could not resolve permission type"] when body {"userId":null,"messageIds":"not_an_array"}', async () => {
              testNumber = 38;
              totalTests++;
              const payloadObj = {"userId":null,"messageIds":"not_an_array"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"messageIds":"not_an_array"},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #39 should return errors ["Could not resolve permission type"] when body {"userId":null,"messageIds":[123]}', async () => {
              testNumber = 39;
              totalTests++;
              const payloadObj = {"userId":null,"messageIds":[123]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"messageIds":[123]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #40 should return errors ["Could not resolve permission type"] when body {"userId":null,"messageIds":["valid_string"]}', async () => {
              testNumber = 40;
              totalTests++;
              const payloadObj = {"userId":null,"messageIds":["valid_string"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"messageIds":["valid_string"]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #41 should return errors ["Could not resolve permission type"] when body {"userId":null,"messageIds":[null]}', async () => {
              testNumber = 41;
              totalTests++;
              const payloadObj = {"userId":null,"messageIds":[null]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"messageIds":[null]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #42 should return errors ["Could not resolve permission type"] when body {"userId":null,"messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]}', async () => {
              testNumber = 42;
              totalTests++;
              const payloadObj = {"userId":null,"messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #43 should return errors ["Could not resolve permission type"] when body {"userId":null}', async () => {
              testNumber = 43;
              totalTests++;
              const payloadObj = {"userId":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":null},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #44 should return errors ["Could not resolve permission type"] when body {"userId":null,"messageIds":""}', async () => {
              testNumber = 44;
              totalTests++;
              const payloadObj = {"userId":null,"messageIds":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"messageIds":""},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #45 should return errors ["Could not resolve permission type"] when body {"userId":null,"messageIds":null}', async () => {
              testNumber = 45;
              totalTests++;
              const payloadObj = {"userId":null,"messageIds":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"messageIds":null},
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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #46 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","messageIds":["{{messageId}}"]}', async () => {
              testNumber = 46;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","messageIds":["{{messageId}}"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","messageIds":["{{messageId}}"]},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unauthorized request"].sort();

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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #47 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","messageIds":"not_an_array"}', async () => {
              testNumber = 47;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","messageIds":"not_an_array"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","messageIds":"not_an_array"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unauthorized request"].sort();

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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #48 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","messageIds":[123]}', async () => {
              testNumber = 48;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","messageIds":[123]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","messageIds":[123]},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unauthorized request"].sort();

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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #49 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","messageIds":["valid_string"]}', async () => {
              testNumber = 49;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","messageIds":["valid_string"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","messageIds":["valid_string"]},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unauthorized request"].sort();

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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #50 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","messageIds":[null]}', async () => {
              testNumber = 50;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","messageIds":[null]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","messageIds":[null]},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unauthorized request"].sort();

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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #51 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]}', async () => {
              testNumber = 51;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","messageIds":["01JXM64X0XAKNVV54R5P6QM7WD"]},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unauthorized request"].sort();

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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #52 should return errors ["Unauthorized request"] when body {"userId":"invalid_value"}', async () => {
              testNumber = 52;
              totalTests++;
              const payloadObj = {"userId":"invalid_value"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unauthorized request"].sort();

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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #53 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","messageIds":""}', async () => {
              testNumber = 53;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","messageIds":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","messageIds":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unauthorized request"].sort();

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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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

            it('Test case #54 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","messageIds":null}', async () => {
              testNumber = 54;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","messageIds":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "deleteDmMessagesForEveryone",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","messageIds":null},
                  contextData
                );
                const data = response.data;
                const expectJson = ["Unauthorized request"].sort();

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
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                      });
                    } catch (error) {
                      failedTests.push({
                        testcase: testNumber,
                        code: response.status,
                        body: resolvedData,
                        missing: softExpectDetails || [],
                        extra: expectJson || []
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
          const afterEachSteps = DeleteDmMessagesForEveryoneRequest.options
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
          const afterAllSteps = DeleteDmMessagesForEveryoneRequest.options
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
            path: '/Message/DeleteDMMessagesForEveryone',
            className: 'delete-dm-messages-for-everyone',
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
  const fileName = 'delete-dm-messages-for-everyone' + (chunkNumber ? `-chunk-undefined` : '') + '.result.json';
  const filePath = path.join(reportDir, fileName);
  fs.writeFileSync(filePath, JSON.stringify(testResult, null, 2), 'utf-8');

  console.log(`📝 Saved result for delete-dm-messages-for-everyone chunk single to ${filePath}`);
    });
        })
  