
    import fs from 'fs';
    import path from 'path';
    import { summaryFields, resolveCallAPI, resolveVariables } from '../../../../utils/helper';
    import { TestResult } from '../../../../utils/declarations';
    import { executeSteps } from '../../../../utils/text-execute-test';
    import { TestContext } from '../../../../utils/text-context';
    import { UpdateDmMessageRequest } from '././update-dm-message.request';
    describe('Testcase for update-dm-message', () => {
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
          const beforeAllSteps = UpdateDmMessageRequest.options
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
          const beforeEachSteps = UpdateDmMessageRequest.options
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

        
            it('Test case #1 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 1;
              totalTests++;
              const payloadObj = {"userId":123,"content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #2 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":123,"messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 2;
              totalTests++;
              const payloadObj = {"userId":123,"content":123,"messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"content":123,"messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #3 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":"","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 3;
              totalTests++;
              const payloadObj = {"userId":123,"content":"","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"content":"","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #4 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 4;
              totalTests++;
              const payloadObj = {"userId":123,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #5 should return errors ["Could not resolve permission type"] when body {"userId":123,"messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 5;
              totalTests++;
              const payloadObj = {"userId":123,"messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #6 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":null,"messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 6;
              totalTests++;
              const payloadObj = {"userId":123,"content":null,"messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"content":null,"messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #7 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":"test update send dm message","messageId":123,"ref":"ref"}', async () => {
              testNumber = 7;
              totalTests++;
              const payloadObj = {"userId":123,"content":"test update send dm message","messageId":123,"ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"content":"test update send dm message","messageId":123,"ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #8 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":"test update send dm message","messageId":"","ref":"ref"}', async () => {
              testNumber = 8;
              totalTests++;
              const payloadObj = {"userId":123,"content":"test update send dm message","messageId":"","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"content":"test update send dm message","messageId":"","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #9 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":"test update send dm message","ref":"ref"}', async () => {
              testNumber = 9;
              totalTests++;
              const payloadObj = {"userId":123,"content":"test update send dm message","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"content":"test update send dm message","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #10 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"}', async () => {
              testNumber = 10;
              totalTests++;
              const payloadObj = {"userId":123,"content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #11 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":"test update send dm message","messageId":"{{messageId}}","ref":123}', async () => {
              testNumber = 11;
              totalTests++;
              const payloadObj = {"userId":123,"content":"test update send dm message","messageId":"{{messageId}}","ref":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"content":"test update send dm message","messageId":"{{messageId}}","ref":123},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #12 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":"test update send dm message","messageId":"{{messageId}}","ref":""}', async () => {
              testNumber = 12;
              totalTests++;
              const payloadObj = {"userId":123,"content":"test update send dm message","messageId":"{{messageId}}","ref":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"content":"test update send dm message","messageId":"{{messageId}}","ref":""},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #13 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":"test update send dm message","messageId":"{{messageId}}"}', async () => {
              testNumber = 13;
              totalTests++;
              const payloadObj = {"userId":123,"content":"test update send dm message","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":123,"content":"test update send dm message","messageId":"{{messageId}}"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #14 should return errors [] when body {"userId":"{{userId1}}","content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 14;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #15 should return errors ["content expected string,received number"] when body {"userId":"{{userId1}}","content":123,"messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 15;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":123,"messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":123,"messageId":"{{messageId}}","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content expected string, received number"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #16 should return errors ["content should not be empty","content string must contain at least 1 character(s)"] when body {"userId":"{{userId1}}","content":"","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 16;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"","messageId":"{{messageId}}","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content should not be empty","content string must contain at least 1 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #17 should return errors ["content string must contain at most 2000 character(s)"] when body {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 17;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content string must contain at most 2000 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #18 should return errors ["content required"] when body {"userId":"{{userId1}}","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 18;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","messageId":"{{messageId}}","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content required"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #19 should return errors ["content expected string,received null"] when body {"userId":"{{userId1}}","content":null,"messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 19;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":null,"messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":null,"messageId":"{{messageId}}","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content expected string, received null"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #20 should return errors ["messageId expected string,received number"] when body {"userId":"{{userId1}}","content":"test update send dm message","messageId":123,"ref":"ref"}', async () => {
              testNumber = 20;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","messageId":123,"ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","messageId":123,"ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #21 should return errors ["messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)"] when body {"userId":"{{userId1}}","content":"test update send dm message","messageId":"","ref":"ref"}', async () => {
              testNumber = 21;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","messageId":"","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","messageId":"","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #22 should return errors ["messageId required"] when body {"userId":"{{userId1}}","content":"test update send dm message","ref":"ref"}', async () => {
              testNumber = 22;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #23 should return errors ["messageId invalid ulid"] when body {"userId":"{{userId1}}","content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"}', async () => {
              testNumber = 23;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #24 should return errors ["ref expected string,received number"] when body {"userId":"{{userId1}}","content":"test update send dm message","messageId":"{{messageId}}","ref":123}', async () => {
              testNumber = 24;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","messageId":"{{messageId}}","ref":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","messageId":"{{messageId}}","ref":123},
                  contextData
                );
                const data = response.data;
                const expectJson = ["ref expected string, received number"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #25 should return errors ["ref string must contain at least 1 character(s)"] when body {"userId":"{{userId1}}","content":"test update send dm message","messageId":"{{messageId}}","ref":""}', async () => {
              testNumber = 25;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","messageId":"{{messageId}}","ref":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","messageId":"{{messageId}}","ref":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["ref string must contain at least 1 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #26 should return errors ["ref required"] when body {"userId":"{{userId1}}","content":"test update send dm message","messageId":"{{messageId}}"}', async () => {
              testNumber = 26;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","messageId":"{{messageId}}"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["ref required"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #27 should return errors ["Could not resolve permission type"] when body {"content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 27;
              totalTests++;
              const payloadObj = {"content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #28 should return errors ["Could not resolve permission type"] when body {"content":123,"messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 28;
              totalTests++;
              const payloadObj = {"content":123,"messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"content":123,"messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #29 should return errors ["Could not resolve permission type"] when body {"content":"","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 29;
              totalTests++;
              const payloadObj = {"content":"","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"content":"","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #30 should return errors ["Could not resolve permission type"] when body {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 30;
              totalTests++;
              const payloadObj = {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #31 should return errors ["Could not resolve permission type"] when body {"messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 31;
              totalTests++;
              const payloadObj = {"messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #32 should return errors ["Could not resolve permission type"] when body {"content":null,"messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 32;
              totalTests++;
              const payloadObj = {"content":null,"messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"content":null,"messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #33 should return errors ["Could not resolve permission type"] when body {"content":"test update send dm message","messageId":123,"ref":"ref"}', async () => {
              testNumber = 33;
              totalTests++;
              const payloadObj = {"content":"test update send dm message","messageId":123,"ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"content":"test update send dm message","messageId":123,"ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #34 should return errors ["Could not resolve permission type"] when body {"content":"test update send dm message","messageId":"","ref":"ref"}', async () => {
              testNumber = 34;
              totalTests++;
              const payloadObj = {"content":"test update send dm message","messageId":"","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"content":"test update send dm message","messageId":"","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #35 should return errors ["Could not resolve permission type"] when body {"content":"test update send dm message","ref":"ref"}', async () => {
              testNumber = 35;
              totalTests++;
              const payloadObj = {"content":"test update send dm message","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"content":"test update send dm message","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #36 should return errors ["Could not resolve permission type"] when body {"content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"}', async () => {
              testNumber = 36;
              totalTests++;
              const payloadObj = {"content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #37 should return errors ["Could not resolve permission type"] when body {"content":"test update send dm message","messageId":"{{messageId}}","ref":123}', async () => {
              testNumber = 37;
              totalTests++;
              const payloadObj = {"content":"test update send dm message","messageId":"{{messageId}}","ref":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"content":"test update send dm message","messageId":"{{messageId}}","ref":123},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #38 should return errors ["Could not resolve permission type"] when body {"content":"test update send dm message","messageId":"{{messageId}}","ref":""}', async () => {
              testNumber = 38;
              totalTests++;
              const payloadObj = {"content":"test update send dm message","messageId":"{{messageId}}","ref":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"content":"test update send dm message","messageId":"{{messageId}}","ref":""},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #39 should return errors ["Could not resolve permission type"] when body {"content":"test update send dm message","messageId":"{{messageId}}"}', async () => {
              testNumber = 39;
              totalTests++;
              const payloadObj = {"content":"test update send dm message","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"content":"test update send dm message","messageId":"{{messageId}}"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #40 should return errors ["Could not resolve permission type"] when body {"userId":"","content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 40;
              totalTests++;
              const payloadObj = {"userId":"","content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #41 should return errors ["Could not resolve permission type"] when body {"userId":"","content":123,"messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 41;
              totalTests++;
              const payloadObj = {"userId":"","content":123,"messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","content":123,"messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #42 should return errors ["Could not resolve permission type"] when body {"userId":"","content":"","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 42;
              totalTests++;
              const payloadObj = {"userId":"","content":"","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","content":"","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #43 should return errors ["Could not resolve permission type"] when body {"userId":"","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 43;
              totalTests++;
              const payloadObj = {"userId":"","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #44 should return errors ["Could not resolve permission type"] when body {"userId":"","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 44;
              totalTests++;
              const payloadObj = {"userId":"","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #45 should return errors ["Could not resolve permission type"] when body {"userId":"","content":null,"messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 45;
              totalTests++;
              const payloadObj = {"userId":"","content":null,"messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","content":null,"messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #46 should return errors ["Could not resolve permission type"] when body {"userId":"","content":"test update send dm message","messageId":123,"ref":"ref"}', async () => {
              testNumber = 46;
              totalTests++;
              const payloadObj = {"userId":"","content":"test update send dm message","messageId":123,"ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","content":"test update send dm message","messageId":123,"ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #47 should return errors ["Could not resolve permission type"] when body {"userId":"","content":"test update send dm message","messageId":"","ref":"ref"}', async () => {
              testNumber = 47;
              totalTests++;
              const payloadObj = {"userId":"","content":"test update send dm message","messageId":"","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","content":"test update send dm message","messageId":"","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #48 should return errors ["Could not resolve permission type"] when body {"userId":"","content":"test update send dm message","ref":"ref"}', async () => {
              testNumber = 48;
              totalTests++;
              const payloadObj = {"userId":"","content":"test update send dm message","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","content":"test update send dm message","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #49 should return errors ["Could not resolve permission type"] when body {"userId":"","content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"}', async () => {
              testNumber = 49;
              totalTests++;
              const payloadObj = {"userId":"","content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #50 should return errors ["Could not resolve permission type"] when body {"userId":"","content":"test update send dm message","messageId":"{{messageId}}","ref":123}', async () => {
              testNumber = 50;
              totalTests++;
              const payloadObj = {"userId":"","content":"test update send dm message","messageId":"{{messageId}}","ref":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","content":"test update send dm message","messageId":"{{messageId}}","ref":123},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #51 should return errors ["Could not resolve permission type"] when body {"userId":"","content":"test update send dm message","messageId":"{{messageId}}","ref":""}', async () => {
              testNumber = 51;
              totalTests++;
              const payloadObj = {"userId":"","content":"test update send dm message","messageId":"{{messageId}}","ref":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","content":"test update send dm message","messageId":"{{messageId}}","ref":""},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #52 should return errors ["Could not resolve permission type"] when body {"userId":"","content":"test update send dm message","messageId":"{{messageId}}"}', async () => {
              testNumber = 52;
              totalTests++;
              const payloadObj = {"userId":"","content":"test update send dm message","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"","content":"test update send dm message","messageId":"{{messageId}}"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #53 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 53;
              totalTests++;
              const payloadObj = {"userId":null,"content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #54 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":123,"messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 54;
              totalTests++;
              const payloadObj = {"userId":null,"content":123,"messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"content":123,"messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #55 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":"","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 55;
              totalTests++;
              const payloadObj = {"userId":null,"content":"","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"content":"","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #56 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 56;
              totalTests++;
              const payloadObj = {"userId":null,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #57 should return errors ["Could not resolve permission type"] when body {"userId":null,"messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 57;
              totalTests++;
              const payloadObj = {"userId":null,"messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #58 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":null,"messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 58;
              totalTests++;
              const payloadObj = {"userId":null,"content":null,"messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"content":null,"messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #59 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":"test update send dm message","messageId":123,"ref":"ref"}', async () => {
              testNumber = 59;
              totalTests++;
              const payloadObj = {"userId":null,"content":"test update send dm message","messageId":123,"ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"content":"test update send dm message","messageId":123,"ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #60 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":"test update send dm message","messageId":"","ref":"ref"}', async () => {
              testNumber = 60;
              totalTests++;
              const payloadObj = {"userId":null,"content":"test update send dm message","messageId":"","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"content":"test update send dm message","messageId":"","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #61 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":"test update send dm message","ref":"ref"}', async () => {
              testNumber = 61;
              totalTests++;
              const payloadObj = {"userId":null,"content":"test update send dm message","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"content":"test update send dm message","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #62 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"}', async () => {
              testNumber = 62;
              totalTests++;
              const payloadObj = {"userId":null,"content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #63 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":"test update send dm message","messageId":"{{messageId}}","ref":123}', async () => {
              testNumber = 63;
              totalTests++;
              const payloadObj = {"userId":null,"content":"test update send dm message","messageId":"{{messageId}}","ref":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"content":"test update send dm message","messageId":"{{messageId}}","ref":123},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #64 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":"test update send dm message","messageId":"{{messageId}}","ref":""}', async () => {
              testNumber = 64;
              totalTests++;
              const payloadObj = {"userId":null,"content":"test update send dm message","messageId":"{{messageId}}","ref":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"content":"test update send dm message","messageId":"{{messageId}}","ref":""},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #65 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":"test update send dm message","messageId":"{{messageId}}"}', async () => {
              testNumber = 65;
              totalTests++;
              const payloadObj = {"userId":null,"content":"test update send dm message","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":null,"content":"test update send dm message","messageId":"{{messageId}}"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #66 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 66;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","content":"test update send dm message","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #67 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":123,"messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 67;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","content":123,"messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","content":123,"messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #68 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":"","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 68;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","content":"","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","content":"","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #69 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 69;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #70 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 70;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #71 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":null,"messageId":"{{messageId}}","ref":"ref"}', async () => {
              testNumber = 71;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","content":null,"messageId":"{{messageId}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","content":null,"messageId":"{{messageId}}","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #72 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":"test update send dm message","messageId":123,"ref":"ref"}', async () => {
              testNumber = 72;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","content":"test update send dm message","messageId":123,"ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","content":"test update send dm message","messageId":123,"ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #73 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":"test update send dm message","messageId":"","ref":"ref"}', async () => {
              testNumber = 73;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","content":"test update send dm message","messageId":"","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","content":"test update send dm message","messageId":"","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #74 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":"test update send dm message","ref":"ref"}', async () => {
              testNumber = 74;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","content":"test update send dm message","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","content":"test update send dm message","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #75 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"}', async () => {
              testNumber = 75;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","content":"test update send dm message","messageId":"invalid_ULID","ref":"ref"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #76 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":"test update send dm message","messageId":"{{messageId}}","ref":123}', async () => {
              testNumber = 76;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","content":"test update send dm message","messageId":"{{messageId}}","ref":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","content":"test update send dm message","messageId":"{{messageId}}","ref":123},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #77 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":"test update send dm message","messageId":"{{messageId}}","ref":""}', async () => {
              testNumber = 77;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","content":"test update send dm message","messageId":"{{messageId}}","ref":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","content":"test update send dm message","messageId":"{{messageId}}","ref":""},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #78 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":"test update send dm message","messageId":"{{messageId}}"}', async () => {
              testNumber = 78;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","content":"test update send dm message","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","content":"test update send dm message","messageId":"{{messageId}}"},
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #79 should return errors ["content expected string,received number","messageId expected string,received number"] when body {"userId":"{{userId1}}","content":123,"messageId":123,"ref":"ref"}', async () => {
              testNumber = 79;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":123,"messageId":123,"ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":123,"messageId":123,"ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content expected string, received number","messageId expected string, received number"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #80 should return errors ["content expected string,received number","messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)"] when body {"userId":"{{userId1}}","content":123,"messageId":"","ref":"ref"}', async () => {
              testNumber = 80;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":123,"messageId":"","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":123,"messageId":"","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content expected string, received number","messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #81 should return errors ["content expected string,received number","messageId required"] when body {"userId":"{{userId1}}","content":123,"ref":"ref"}', async () => {
              testNumber = 81;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":123,"ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":123,"ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content expected string, received number","messageId required"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #82 should return errors ["content expected string,received number","messageId invalid ulid"] when body {"userId":"{{userId1}}","content":123,"messageId":"invalid_ULID","ref":"ref"}', async () => {
              testNumber = 82;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":123,"messageId":"invalid_ULID","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":123,"messageId":"invalid_ULID","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content expected string, received number","messageId invalid ulid"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #83 should return errors ["content expected string,received number","ref expected string,received number"] when body {"userId":"{{userId1}}","content":123,"messageId":"{{messageId}}","ref":123}', async () => {
              testNumber = 83;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":123,"messageId":"{{messageId}}","ref":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":123,"messageId":"{{messageId}}","ref":123},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content expected string, received number","ref expected string, received number"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #84 should return errors ["content expected string,received number","ref string must contain at least 1 character(s)"] when body {"userId":"{{userId1}}","content":123,"messageId":"{{messageId}}","ref":""}', async () => {
              testNumber = 84;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":123,"messageId":"{{messageId}}","ref":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":123,"messageId":"{{messageId}}","ref":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content expected string, received number","ref string must contain at least 1 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #85 should return errors ["content expected string,received number","ref required"] when body {"userId":"{{userId1}}","content":123,"messageId":"{{messageId}}"}', async () => {
              testNumber = 85;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":123,"messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":123,"messageId":"{{messageId}}"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content expected string, received number","ref required"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #86 should return errors ["content should not be empty","content string must contain at least 1 character(s)","messageId expected string,received number"] when body {"userId":"{{userId1}}","content":"","messageId":123,"ref":"ref"}', async () => {
              testNumber = 86;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","messageId":123,"ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"","messageId":123,"ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content should not be empty","content string must contain at least 1 character(s)","messageId expected string, received number"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #87 should return errors ["content should not be empty","content string must contain at least 1 character(s)","messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)"] when body {"userId":"{{userId1}}","content":"","messageId":"","ref":"ref"}', async () => {
              testNumber = 87;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","messageId":"","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"","messageId":"","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content should not be empty","content string must contain at least 1 character(s)","messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #88 should return errors ["content should not be empty","content string must contain at least 1 character(s)","messageId required"] when body {"userId":"{{userId1}}","content":"","ref":"ref"}', async () => {
              testNumber = 88;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content should not be empty","content string must contain at least 1 character(s)","messageId required"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #89 should return errors ["content should not be empty","content string must contain at least 1 character(s)","messageId invalid ulid"] when body {"userId":"{{userId1}}","content":"","messageId":"invalid_ULID","ref":"ref"}', async () => {
              testNumber = 89;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","messageId":"invalid_ULID","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"","messageId":"invalid_ULID","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content should not be empty","content string must contain at least 1 character(s)","messageId invalid ulid"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #90 should return errors ["content should not be empty","content string must contain at least 1 character(s)","ref expected string,received number"] when body {"userId":"{{userId1}}","content":"","messageId":"{{messageId}}","ref":123}', async () => {
              testNumber = 90;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","messageId":"{{messageId}}","ref":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"","messageId":"{{messageId}}","ref":123},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content should not be empty","content string must contain at least 1 character(s)","ref expected string, received number"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #91 should return errors ["content should not be empty","content string must contain at least 1 character(s)","ref string must contain at least 1 character(s)"] when body {"userId":"{{userId1}}","content":"","messageId":"{{messageId}}","ref":""}', async () => {
              testNumber = 91;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","messageId":"{{messageId}}","ref":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"","messageId":"{{messageId}}","ref":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content should not be empty","content string must contain at least 1 character(s)","ref string must contain at least 1 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #92 should return errors ["content should not be empty","content string must contain at least 1 character(s)","ref required"] when body {"userId":"{{userId1}}","content":"","messageId":"{{messageId}}"}', async () => {
              testNumber = 92;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"","messageId":"{{messageId}}"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content should not be empty","content string must contain at least 1 character(s)","ref required"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #93 should return errors ["content string must contain at most 2000 character(s)","messageId expected string,received number"] when body {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":123,"ref":"ref"}', async () => {
              testNumber = 93;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":123,"ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":123,"ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content string must contain at most 2000 character(s)","messageId expected string, received number"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #94 should return errors ["content string must contain at most 2000 character(s)","messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)"] when body {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"","ref":"ref"}', async () => {
              testNumber = 94;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content string must contain at most 2000 character(s)","messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #95 should return errors ["content string must contain at most 2000 character(s)","messageId required"] when body {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"ref"}', async () => {
              testNumber = 95;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content string must contain at most 2000 character(s)","messageId required"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #96 should return errors ["content string must contain at most 2000 character(s)","messageId invalid ulid"] when body {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"invalid_ULID","ref":"ref"}', async () => {
              testNumber = 96;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"invalid_ULID","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"invalid_ULID","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content string must contain at most 2000 character(s)","messageId invalid ulid"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #97 should return errors ["content string must contain at most 2000 character(s)","ref expected string,received number"] when body {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":123}', async () => {
              testNumber = 97;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":123},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content string must contain at most 2000 character(s)","ref expected string, received number"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #98 should return errors ["content string must contain at most 2000 character(s)","ref string must contain at least 1 character(s)"] when body {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":""}', async () => {
              testNumber = 98;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}","ref":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content string must contain at most 2000 character(s)","ref string must contain at least 1 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #99 should return errors ["content string must contain at most 2000 character(s)","ref required"] when body {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}"}', async () => {
              testNumber = 99;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","messageId":"{{messageId}}"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content string must contain at most 2000 character(s)","ref required"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #100 should return errors ["content required","messageId expected string,received number"] when body {"userId":"{{userId1}}","messageId":123,"ref":"ref"}', async () => {
              testNumber = 100;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","messageId":123,"ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","messageId":123,"ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content required","messageId expected string, received number"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #101 should return errors ["content required","messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)"] when body {"userId":"{{userId1}}","messageId":"","ref":"ref"}', async () => {
              testNumber = 101;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","messageId":"","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","messageId":"","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content required","messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #102 should return errors ["content required","messageId required"] when body {"userId":"{{userId1}}","ref":"ref"}', async () => {
              testNumber = 102;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content required","messageId required"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #103 should return errors ["content required","messageId invalid ulid"] when body {"userId":"{{userId1}}","messageId":"invalid_ULID","ref":"ref"}', async () => {
              testNumber = 103;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","messageId":"invalid_ULID","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","messageId":"invalid_ULID","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content required","messageId invalid ulid"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #104 should return errors ["content required","ref expected string,received number"] when body {"userId":"{{userId1}}","messageId":"{{messageId}}","ref":123}', async () => {
              testNumber = 104;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","messageId":"{{messageId}}","ref":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","messageId":"{{messageId}}","ref":123},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content required","ref expected string, received number"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #105 should return errors ["content required","ref string must contain at least 1 character(s)"] when body {"userId":"{{userId1}}","messageId":"{{messageId}}","ref":""}', async () => {
              testNumber = 105;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","messageId":"{{messageId}}","ref":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","messageId":"{{messageId}}","ref":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content required","ref string must contain at least 1 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #106 should return errors ["content required","ref required"] when body {"userId":"{{userId1}}","messageId":"{{messageId}}"}', async () => {
              testNumber = 106;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","messageId":"{{messageId}}"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content required","ref required"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #107 should return errors ["content expected string,received null","messageId expected string,received number"] when body {"userId":"{{userId1}}","content":null,"messageId":123,"ref":"ref"}', async () => {
              testNumber = 107;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":null,"messageId":123,"ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":null,"messageId":123,"ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content expected string, received null","messageId expected string, received number"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #108 should return errors ["content expected string,received null","messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)"] when body {"userId":"{{userId1}}","content":null,"messageId":"","ref":"ref"}', async () => {
              testNumber = 108;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":null,"messageId":"","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":null,"messageId":"","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content expected string, received null","messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #109 should return errors ["content expected string,received null","messageId required"] when body {"userId":"{{userId1}}","content":null,"ref":"ref"}', async () => {
              testNumber = 109;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":null,"ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":null,"ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content expected string, received null","messageId required"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #110 should return errors ["content expected string,received null","messageId invalid ulid"] when body {"userId":"{{userId1}}","content":null,"messageId":"invalid_ULID","ref":"ref"}', async () => {
              testNumber = 110;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":null,"messageId":"invalid_ULID","ref":"ref"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":null,"messageId":"invalid_ULID","ref":"ref"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content expected string, received null","messageId invalid ulid"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #111 should return errors ["content expected string,received null","ref expected string,received number"] when body {"userId":"{{userId1}}","content":null,"messageId":"{{messageId}}","ref":123}', async () => {
              testNumber = 111;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":null,"messageId":"{{messageId}}","ref":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":null,"messageId":"{{messageId}}","ref":123},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content expected string, received null","ref expected string, received number"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #112 should return errors ["content expected string,received null","ref string must contain at least 1 character(s)"] when body {"userId":"{{userId1}}","content":null,"messageId":"{{messageId}}","ref":""}', async () => {
              testNumber = 112;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":null,"messageId":"{{messageId}}","ref":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":null,"messageId":"{{messageId}}","ref":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content expected string, received null","ref string must contain at least 1 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #113 should return errors ["content expected string,received null","ref required"] when body {"userId":"{{userId1}}","content":null,"messageId":"{{messageId}}"}', async () => {
              testNumber = 113;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":null,"messageId":"{{messageId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":null,"messageId":"{{messageId}}"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["content expected string, received null","ref required"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #114 should return errors ["messageId expected string,received number","ref expected string,received number"] when body {"userId":"{{userId1}}","content":"test update send dm message","messageId":123,"ref":123}', async () => {
              testNumber = 114;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","messageId":123,"ref":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","messageId":123,"ref":123},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId expected string, received number","ref expected string, received number"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #115 should return errors ["messageId expected string,received number","ref string must contain at least 1 character(s)"] when body {"userId":"{{userId1}}","content":"test update send dm message","messageId":123,"ref":""}', async () => {
              testNumber = 115;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","messageId":123,"ref":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","messageId":123,"ref":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId expected string, received number","ref string must contain at least 1 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #116 should return errors ["messageId expected string,received number","ref required"] when body {"userId":"{{userId1}}","content":"test update send dm message","messageId":123}', async () => {
              testNumber = 116;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","messageId":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","messageId":123},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId expected string, received number","ref required"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #117 should return errors ["messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)","ref expected string,received number"] when body {"userId":"{{userId1}}","content":"test update send dm message","messageId":"","ref":123}', async () => {
              testNumber = 117;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","messageId":"","ref":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","messageId":"","ref":123},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)","ref expected string, received number"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #118 should return errors ["messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)","ref string must contain at least 1 character(s)"] when body {"userId":"{{userId1}}","content":"test update send dm message","messageId":"","ref":""}', async () => {
              testNumber = 118;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","messageId":"","ref":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","messageId":"","ref":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)","ref string must contain at least 1 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #119 should return errors ["messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)","ref required"] when body {"userId":"{{userId1}}","content":"test update send dm message","messageId":""}', async () => {
              testNumber = 119;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","messageId":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","messageId":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId should not be empty","messageId invalid ulid","messageId string must contain at least 1 character(s)","ref required"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #120 should return errors ["messageId required","ref expected string,received number"] when body {"userId":"{{userId1}}","content":"test update send dm message","ref":123}', async () => {
              testNumber = 120;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","ref":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","ref":123},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId required","ref expected string, received number"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #121 should return errors ["messageId required","ref string must contain at least 1 character(s)"] when body {"userId":"{{userId1}}","content":"test update send dm message","ref":""}', async () => {
              testNumber = 121;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","ref":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","ref":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId required","ref string must contain at least 1 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #122 should return errors ["messageId required","ref required"] when body {"userId":"{{userId1}}","content":"test update send dm message"}', async () => {
              testNumber = 122;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId required","ref required"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #123 should return errors ["messageId invalid ulid","ref expected string,received number"] when body {"userId":"{{userId1}}","content":"test update send dm message","messageId":"invalid_ULID","ref":123}', async () => {
              testNumber = 123;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","messageId":"invalid_ULID","ref":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","messageId":"invalid_ULID","ref":123},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId invalid ulid","ref expected string, received number"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #124 should return errors ["messageId invalid ulid","ref string must contain at least 1 character(s)"] when body {"userId":"{{userId1}}","content":"test update send dm message","messageId":"invalid_ULID","ref":""}', async () => {
              testNumber = 124;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","messageId":"invalid_ULID","ref":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","messageId":"invalid_ULID","ref":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId invalid ulid","ref string must contain at least 1 character(s)"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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

            it('Test case #125 should return errors ["messageId invalid ulid","ref required"] when body {"userId":"{{userId1}}","content":"test update send dm message","messageId":"invalid_ULID"}', async () => {
              testNumber = 125;
              totalTests++;
              const payloadObj = {"userId":"{{userId1}}","content":"test update send dm message","messageId":"invalid_ULID"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "updateDmMessage",
                  {"x-session-token":"{{token}}"},
                  {"userId":"{{userId1}}","content":"test update send dm message","messageId":"invalid_ULID"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["messageId invalid ulid","ref required"].sort();

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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 201,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 400,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
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
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
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
          const afterEachSteps = UpdateDmMessageRequest.options
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
          const afterAllSteps = UpdateDmMessageRequest.options
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
            path: '/Message/UpdateDMMessage',
            className: 'update-dm-message',
            allSteps: allSteps,
            chunkNumber: undefined,
            failedTests: [...failedTests],
            codedTest: [...codedTest],
            passedTests: passedTests,
            totalTests: totalTests,
            logicTests: [...logicTests],
            failedStep: [...failedStep]
          };
          const reportDir = path.join(__dirname, '../../../../tmp-reports');
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  const chunkNumber = undefined
  const fileName = 'update-dm-message' + (chunkNumber ? `-chunk-undefined` : '') + '.result.json';
  const filePath = path.join(reportDir, fileName);
  fs.writeFileSync(filePath, JSON.stringify(testResult, null, 2), 'utf-8');

  console.log(`📝 Saved result for update-dm-message chunk single to ${filePath}`);
    });
        })
  