
    import fs from 'fs';
    import path from 'path';
    import { summaryFields, resolveCallAPI, resolveVariables } from '../../../../utils/helper';
    import { TestResult } from '../../../../utils/declarations';
    import { executeSteps } from '../../../../utils/text-execute-test';
    import { TestContext } from '../../../../utils/text-context';
    import { SetRingBackToneRequest } from '././set-ring-back-tone.request';
    describe('Testcase for set-ring-back-tone', () => {
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
          const beforeAllSteps = SetRingBackToneRequest.options
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
          const beforeEachSteps = SetRingBackToneRequest.options
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

        
            it('Test case #1 should return errors ["ringbackToneId expected string,received number"] when body {"ringbackToneId":123}', async () => {
              testNumber = 1;
              totalTests++;
              const payloadObj = {"ringbackToneId":123};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "setRingBackTone",
                  {"x-session-token":"{{token}}"},
                  {"ringbackToneId":123},
                  contextData
                );
                const data = response.data;
                const expectJson = ["ringbackToneId expected string, received number"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2 should return errors [] when body {"ringbackToneId":"{{ringbackToneId}}"}', async () => {
              testNumber = 2;
              totalTests++;
              const payloadObj = {"ringbackToneId":"{{ringbackToneId}}"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "setRingBackTone",
                  {"x-session-token":"{{token}}"},
                  {"ringbackToneId":"{{ringbackToneId}}"},
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

            it('Test case #3 should return errors ["ringbackToneId required"] when body {}', async () => {
              testNumber = 3;
              totalTests++;
              const payloadObj = {};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "setRingBackTone",
                  {"x-session-token":"{{token}}"},
                  {},
                  contextData
                );
                const data = response.data;
                const expectJson = ["ringbackToneId required"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #4 should return errors ["ringbackToneId should not be empty","ringbackToneId invalid ulid"] when body {"ringbackToneId":""}', async () => {
              testNumber = 4;
              totalTests++;
              const payloadObj = {"ringbackToneId":""};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "setRingBackTone",
                  {"x-session-token":"{{token}}"},
                  {"ringbackToneId":""},
                  contextData
                );
                const data = response.data;
                const expectJson = ["ringbackToneId should not be empty","ringbackToneId invalid ulid"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #5 should return errors ["ringbackToneId expected string,received null"] when body {"ringbackToneId":null}', async () => {
              testNumber = 5;
              totalTests++;
              const payloadObj = {"ringbackToneId":null};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "setRingBackTone",
                  {"x-session-token":"{{token}}"},
                  {"ringbackToneId":null},
                  contextData
                );
                const data = response.data;
                const expectJson = ["ringbackToneId expected string, received null"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #6 should return errors ["ringbackToneId invalid ulid"] when body {"ringbackToneId":"invalid_ULID"}', async () => {
              testNumber = 6;
              totalTests++;
              const payloadObj = {"ringbackToneId":"invalid_ULID"};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  "setRingBackTone",
                  {"x-session-token":"{{token}}"},
                  {"ringbackToneId":"invalid_ULID"},
                  contextData
                );
                const data = response.data;
                const expectJson = ["ringbackToneId invalid ulid"].sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
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
          const afterEachSteps = SetRingBackToneRequest.options
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
          const afterAllSteps = SetRingBackToneRequest.options
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
            path: '/RingbackTone/SetRingbackTone',
            className: 'set-ring-back-tone',
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
  const fileName = 'set-ring-back-tone' + (chunkNumber ? `-chunk-undefined` : '') + '.result.json';
  const filePath = path.join(reportDir, fileName);
  fs.writeFileSync(filePath, JSON.stringify(testResult, null, 2), 'utf-8');

  console.log(`📝 Saved result for set-ring-back-tone chunk single to ${filePath}`);
    });
        })
  