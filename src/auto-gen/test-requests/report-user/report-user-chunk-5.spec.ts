
    import fs from 'fs';
    import path from 'path';
    import { summaryFields, resolveCallAPI, resolveVariables } from '../../utils/helper';
    import { TestResult } from '../../utils/declarations';
    import { executeSteps } from '../../utils/text-execute-test';
    import { TestContext } from '../../utils/text-context';
    import { ReportUserRequest } from './report-user.request';
    describe('Testcase for report-user (Chunk 5)', () => {
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
          const beforeAllSteps = ReportUserRequest.options
            ?.find((option) => option.beforeAll)
            ?.beforeAll || [];

          if (beforeAllSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(beforeAllSteps, contextData);
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
          const beforeEachSteps = ReportUserRequest.options
            ?.find((option) => option.beforeEach)
            ?.beforeEach || [];

          if (beforeEachSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(beforeEachSteps, contextData);
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

        
            it('Test case #2001 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":9,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":1}', async () => {
              testNumber = 2001;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":9,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":1};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":9,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":1},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2002 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":9,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":2}', async () => {
              testNumber = 2002;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":9,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":2};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":9,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":2},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2003 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":9,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":3}', async () => {
              testNumber = 2003;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":9,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":3};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":9,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":3},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2004 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":9,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}', async () => {
              testNumber = 2004;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":9,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":9,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2005 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":9,"pretendingTo":"invalid_enum_value"}', async () => {
              testNumber = 2005;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":9,"pretendingTo":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":9,"pretendingTo":"invalid_enum_value"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2006 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":9,"pretendingTo":0}', async () => {
              testNumber = 2006;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":9,"pretendingTo":0};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":9,"pretendingTo":0},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2007 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":9,"pretendingTo":1}', async () => {
              testNumber = 2007;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":9,"pretendingTo":1};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":9,"pretendingTo":1},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2008 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":9,"pretendingTo":2}', async () => {
              testNumber = 2008;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":9,"pretendingTo":2};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":9,"pretendingTo":2},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2009 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":9,"pretendingTo":3}', async () => {
              testNumber = 2009;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":9,"pretendingTo":3};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":9,"pretendingTo":3},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2010 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":9}', async () => {
              testNumber = 2010;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":9};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":9},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2011 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
              testNumber = 2011;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":123,"pretendingTo":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":123,"pretendingTo":"invalid_enum_value"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2012 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":123,"pretendingTo":0}', async () => {
              testNumber = 2012;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":123,"pretendingTo":0};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":123,"pretendingTo":0},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2013 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":123,"pretendingTo":1}', async () => {
              testNumber = 2013;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":123,"pretendingTo":1};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":123,"pretendingTo":1},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2014 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":123,"pretendingTo":2}', async () => {
              testNumber = 2014;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":123,"pretendingTo":2};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":123,"pretendingTo":2},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2015 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":123,"pretendingTo":3}', async () => {
              testNumber = 2015;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":123,"pretendingTo":3};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":123,"pretendingTo":3},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2016 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":123}', async () => {
              testNumber = 2016;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":123};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":123},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2017 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
              testNumber = 2017;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":"report user","pretendingTo":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":"report user","pretendingTo":"invalid_enum_value"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2018 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":"report user","pretendingTo":0}', async () => {
              testNumber = 2018;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":"report user","pretendingTo":0};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":"report user","pretendingTo":0},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2019 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":"report user","pretendingTo":1}', async () => {
              testNumber = 2019;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":"report user","pretendingTo":1};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":"report user","pretendingTo":1},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2020 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":"report user","pretendingTo":2}', async () => {
              testNumber = 2020;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":"report user","pretendingTo":2};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":"report user","pretendingTo":2},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2021 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":"report user","pretendingTo":3}', async () => {
              testNumber = 2021;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":"report user","pretendingTo":3};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":"report user","pretendingTo":3},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2022 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":"report user"}', async () => {
              testNumber = 2022;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":"report user"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":"report user"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2023 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
              testNumber = 2023;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":"","pretendingTo":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":"","pretendingTo":"invalid_enum_value"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2024 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":"","pretendingTo":0}', async () => {
              testNumber = 2024;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":"","pretendingTo":0};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":"","pretendingTo":0},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2025 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":"","pretendingTo":1}', async () => {
              testNumber = 2025;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":"","pretendingTo":1};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":"","pretendingTo":1},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2026 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":"","pretendingTo":2}', async () => {
              testNumber = 2026;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":"","pretendingTo":2};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":"","pretendingTo":2},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2027 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":"","pretendingTo":3}', async () => {
              testNumber = 2027;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":"","pretendingTo":3};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":"","pretendingTo":3},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2028 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":""}', async () => {
              testNumber = 2028;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":""};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":""},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2029 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":"invalid_enum_value"}', async () => {
              testNumber = 2029;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":"invalid_enum_value"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2030 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":0}', async () => {
              testNumber = 2030;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":0};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":0},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2031 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":1}', async () => {
              testNumber = 2031;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":1};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":1},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2032 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":2}', async () => {
              testNumber = 2032;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":2};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":2},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2033 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":3}', async () => {
              testNumber = 2033;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":3};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":3},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2034 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}', async () => {
              testNumber = 2034;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2035 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"pretendingTo":"invalid_enum_value"}', async () => {
              testNumber = 2035;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"pretendingTo":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"pretendingTo":"invalid_enum_value"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2036 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"pretendingTo":0}', async () => {
              testNumber = 2036;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"pretendingTo":0};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"pretendingTo":0},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2037 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"pretendingTo":1}', async () => {
              testNumber = 2037;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"pretendingTo":1};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"pretendingTo":1},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2038 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"pretendingTo":2}', async () => {
              testNumber = 2038;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"pretendingTo":2};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"pretendingTo":2},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2039 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20,"pretendingTo":3}', async () => {
              testNumber = 2039;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20,"pretendingTo":3};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20,"pretendingTo":3},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2040 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":20}', async () => {
              testNumber = 2040;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":20};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":20},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2041 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
              testNumber = 2041;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":123,"pretendingTo":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":123,"pretendingTo":"invalid_enum_value"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2042 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":123,"pretendingTo":0}', async () => {
              testNumber = 2042;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":123,"pretendingTo":0};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":123,"pretendingTo":0},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2043 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":123,"pretendingTo":1}', async () => {
              testNumber = 2043;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":123,"pretendingTo":1};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":123,"pretendingTo":1},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2044 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":123,"pretendingTo":2}', async () => {
              testNumber = 2044;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":123,"pretendingTo":2};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":123,"pretendingTo":2},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2045 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":123,"pretendingTo":3}', async () => {
              testNumber = 2045;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":123,"pretendingTo":3};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":123,"pretendingTo":3},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2046 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":123}', async () => {
              testNumber = 2046;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":123};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":123},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2047 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
              testNumber = 2047;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":"report user","pretendingTo":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":"report user","pretendingTo":"invalid_enum_value"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2048 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"report user","pretendingTo":0}', async () => {
              testNumber = 2048;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":"report user","pretendingTo":0};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":"report user","pretendingTo":0},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2049 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"report user","pretendingTo":1}', async () => {
              testNumber = 2049;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":"report user","pretendingTo":1};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":"report user","pretendingTo":1},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2050 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"report user","pretendingTo":2}', async () => {
              testNumber = 2050;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":"report user","pretendingTo":2};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":"report user","pretendingTo":2},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2051 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"report user","pretendingTo":3}', async () => {
              testNumber = 2051;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":"report user","pretendingTo":3};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":"report user","pretendingTo":3},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2052 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"report user"}', async () => {
              testNumber = 2052;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":"report user"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":"report user"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2053 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
              testNumber = 2053;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":"","pretendingTo":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":"","pretendingTo":"invalid_enum_value"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2054 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"","pretendingTo":0}', async () => {
              testNumber = 2054;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":"","pretendingTo":0};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":"","pretendingTo":0},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2055 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"","pretendingTo":1}', async () => {
              testNumber = 2055;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":"","pretendingTo":1};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":"","pretendingTo":1},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2056 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"","pretendingTo":2}', async () => {
              testNumber = 2056;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":"","pretendingTo":2};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":"","pretendingTo":2},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2057 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"","pretendingTo":3}', async () => {
              testNumber = 2057;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":"","pretendingTo":3};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":"","pretendingTo":3},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2058 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":""}', async () => {
              testNumber = 2058;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":""};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":""},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2059 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":"invalid_enum_value"}', async () => {
              testNumber = 2059;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":"invalid_enum_value"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2060 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":0}', async () => {
              testNumber = 2060;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":0};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":0},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2061 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":1}', async () => {
              testNumber = 2061;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":1};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":1},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2062 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":2}', async () => {
              testNumber = 2062;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":2};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":2},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2063 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":3}', async () => {
              testNumber = 2063;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":3};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":3},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2064 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}', async () => {
              testNumber = 2064;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2065 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","pretendingTo":"invalid_enum_value"}', async () => {
              testNumber = 2065;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","pretendingTo":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","pretendingTo":"invalid_enum_value"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2066 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","pretendingTo":0}', async () => {
              testNumber = 2066;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","pretendingTo":0};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","pretendingTo":0},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2067 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","pretendingTo":1}', async () => {
              testNumber = 2067;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","pretendingTo":1};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","pretendingTo":1},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2068 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","pretendingTo":2}', async () => {
              testNumber = 2068;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","pretendingTo":2};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","pretendingTo":2},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2069 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","pretendingTo":3}', async () => {
              testNumber = 2069;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","pretendingTo":3};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","pretendingTo":3},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2070 should return errors ["Unauthorized request"] when body {"userId":"invalid_value"}', async () => {
              testNumber = 2070;
              totalTests++;
              const payloadObj = {"userId":"invalid_value"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2071 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
              testNumber = 2071;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":123,"pretendingTo":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":123,"pretendingTo":"invalid_enum_value"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2072 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":123,"pretendingTo":0}', async () => {
              testNumber = 2072;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":123,"pretendingTo":0};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":123,"pretendingTo":0},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2073 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":123,"pretendingTo":1}', async () => {
              testNumber = 2073;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":123,"pretendingTo":1};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":123,"pretendingTo":1},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2074 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":123,"pretendingTo":2}', async () => {
              testNumber = 2074;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":123,"pretendingTo":2};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":123,"pretendingTo":2},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2075 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":123,"pretendingTo":3}', async () => {
              testNumber = 2075;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":123,"pretendingTo":3};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":123,"pretendingTo":3},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2076 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":123}', async () => {
              testNumber = 2076;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":123};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":123},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2077 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
              testNumber = 2077;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":"report user","pretendingTo":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":"report user","pretendingTo":"invalid_enum_value"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2078 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":"report user","pretendingTo":0}', async () => {
              testNumber = 2078;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":"report user","pretendingTo":0};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":"report user","pretendingTo":0},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2079 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":"report user","pretendingTo":1}', async () => {
              testNumber = 2079;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":"report user","pretendingTo":1};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":"report user","pretendingTo":1},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2080 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":"report user","pretendingTo":2}', async () => {
              testNumber = 2080;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":"report user","pretendingTo":2};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":"report user","pretendingTo":2},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2081 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":"report user","pretendingTo":3}', async () => {
              testNumber = 2081;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":"report user","pretendingTo":3};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":"report user","pretendingTo":3},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2082 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":"report user"}', async () => {
              testNumber = 2082;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":"report user"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":"report user"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2083 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
              testNumber = 2083;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":"","pretendingTo":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":"","pretendingTo":"invalid_enum_value"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2084 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":"","pretendingTo":0}', async () => {
              testNumber = 2084;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":"","pretendingTo":0};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":"","pretendingTo":0},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2085 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":"","pretendingTo":1}', async () => {
              testNumber = 2085;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":"","pretendingTo":1};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":"","pretendingTo":1},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2086 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":"","pretendingTo":2}', async () => {
              testNumber = 2086;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":"","pretendingTo":2};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":"","pretendingTo":2},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2087 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":"","pretendingTo":3}', async () => {
              testNumber = 2087;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":"","pretendingTo":3};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":"","pretendingTo":3},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2088 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":""}', async () => {
              testNumber = 2088;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":""};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":""},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2089 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":"invalid_enum_value"}', async () => {
              testNumber = 2089;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":"invalid_enum_value"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2090 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":0}', async () => {
              testNumber = 2090;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":0};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":0},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2091 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":1}', async () => {
              testNumber = 2091;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":1};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":1},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2092 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":2}', async () => {
              testNumber = 2092;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":2};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":2},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2093 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":3}', async () => {
              testNumber = 2093;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":3};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","pretendingTo":3},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2094 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}', async () => {
              testNumber = 2094;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","reportReason":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2095 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","pretendingTo":"invalid_enum_value"}', async () => {
              testNumber = 2095;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","pretendingTo":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","pretendingTo":"invalid_enum_value"},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2096 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","pretendingTo":0}', async () => {
              testNumber = 2096;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","pretendingTo":0};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","pretendingTo":0},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2097 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","pretendingTo":1}', async () => {
              testNumber = 2097;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","pretendingTo":1};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","pretendingTo":1},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2098 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","pretendingTo":2}', async () => {
              testNumber = 2098;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","pretendingTo":2};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","pretendingTo":2},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2099 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"","pretendingTo":3}', async () => {
              testNumber = 2099;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":"","pretendingTo":3};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":"","pretendingTo":3},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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

            it('Test case #2100 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":""}', async () => {
              testNumber = 2100;
              totalTests++;
              const payloadObj = {"userId":"invalid_value","reportCategory":""};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  "reportUser",
                  {"x-session-token":"{{token}}"},
                  {"userId":"invalid_value","reportCategory":""},
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
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
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
          const afterEachSteps = ReportUserRequest.options
            ?.find((option) => option.afterEach)
            ?.afterEach || [];

          if (afterEachSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(afterEachSteps, contextData);
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
          const afterAllSteps = ReportUserRequest.options
            ?.find((option) => option.afterAll)
            ?.afterAll || [];

          if (afterAllSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(afterAllSteps, contextData);
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
            path: '/UserReport/ReportUser',
            className: 'report-user',
            allSteps: allSteps,
            chunkNumber: 5,
            failedTests: [...failedTests],
            codedTest: [...codedTest],
            passedTests: passedTests,
            totalTests: totalTests,
            logicTests: [...logicTests],
            failedStep: [...failedStep]
          };
          const reportDir = path.join(__dirname, '../../tmp-reports');
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  const chunkNumber = 5
  const fileName = 'report-user' + (chunkNumber ? `-chunk-5` : '') + '.result.json';
  const filePath = path.join(reportDir, fileName);
  fs.writeFileSync(filePath, JSON.stringify(testResult, null, 2), 'utf-8');

  console.log(`📝 Saved result for report-user chunk 5 to ${filePath}`);
    });
        })
  