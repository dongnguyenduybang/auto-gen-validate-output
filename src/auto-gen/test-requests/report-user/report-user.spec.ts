
import fs from 'fs';
import path from 'path';
import { summaryFields, resolveCallAPI, resolveVariables } from '../../utils/helper';
import { TestResult } from '../../utils/declarations';
import { executeSteps } from '../../utils/text-execute-test';
import { TestContext } from '../../utils/text-context';
import { ReportUserRequest } from './report-user.request';
describe('Testcase for report-user', () => {
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
    } else {
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
    } else {
      contextData = globalContext
    }
  });


  it('Test case #1 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportCategory":"invalid_enum_value","reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 1;
    totalTests++;
    const payloadObj = { "userId": 123, "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #2 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportCategory":"invalid_enum_value","reportReason":123,"pretendingTo":0}', async () => {
    testNumber = 2;
    totalTests++;
    const payloadObj = { "userId": 123, "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #3 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportCategory":"invalid_enum_value","reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 3;
    totalTests++;
    const payloadObj = { "userId": 123, "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #4 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportCategory":"invalid_enum_value","reportReason":"report user","pretendingTo":0}', async () => {
    testNumber = 4;
    totalTests++;
    const payloadObj = { "userId": 123, "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #5 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportCategory":"invalid_enum_value","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 5;
    totalTests++;
    const payloadObj = { "userId": 123, "reportCategory": "invalid_enum_value", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportCategory": "invalid_enum_value", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #6 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportCategory":"invalid_enum_value","pretendingTo":0}', async () => {
    testNumber = 6;
    totalTests++;
    const payloadObj = { "userId": 123, "reportCategory": "invalid_enum_value", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportCategory": "invalid_enum_value", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #7 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportCategory":"invalid_enum_value","reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 7;
    totalTests++;
    const payloadObj = { "userId": 123, "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #8 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportCategory":"invalid_enum_value","reportReason":"","pretendingTo":0}', async () => {
    testNumber = 8;
    totalTests++;
    const payloadObj = { "userId": 123, "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #9 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportCategory":0,"reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 9;
    totalTests++;
    const payloadObj = { "userId": 123, "reportCategory": 0, "reportReason": 123, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportCategory": 0, "reportReason": 123, "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #10 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportCategory":0,"reportReason":123,"pretendingTo":0}', async () => {
    testNumber = 10;
    totalTests++;
    const payloadObj = { "userId": 123, "reportCategory": 0, "reportReason": 123, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportCategory": 0, "reportReason": 123, "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #11 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportCategory":0,"reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 11;
    totalTests++;
    const payloadObj = { "userId": 123, "reportCategory": 0, "reportReason": "report user", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportCategory": 0, "reportReason": "report user", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #12 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportCategory":0,"reportReason":"report user","pretendingTo":0}', async () => {
    testNumber = 12;
    totalTests++;
    const payloadObj = { "userId": 123, "reportCategory": 0, "reportReason": "report user", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportCategory": 0, "reportReason": "report user", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #13 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportCategory":0,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 13;
    totalTests++;
    const payloadObj = { "userId": 123, "reportCategory": 0, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportCategory": 0, "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #14 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportCategory":0,"pretendingTo":0}', async () => {
    testNumber = 14;
    totalTests++;
    const payloadObj = { "userId": 123, "reportCategory": 0, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportCategory": 0, "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #15 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportCategory":0,"reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 15;
    totalTests++;
    const payloadObj = { "userId": 123, "reportCategory": 0, "reportReason": "", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportCategory": 0, "reportReason": "", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #16 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportCategory":0,"reportReason":"","pretendingTo":0}', async () => {
    testNumber = 16;
    totalTests++;
    const payloadObj = { "userId": 123, "reportCategory": 0, "reportReason": "", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportCategory": 0, "reportReason": "", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #17 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 17;
    totalTests++;
    const payloadObj = { "userId": 123, "reportReason": 123, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportReason": 123, "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #18 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportReason":123,"pretendingTo":0}', async () => {
    testNumber = 18;
    totalTests++;
    const payloadObj = { "userId": 123, "reportReason": 123, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportReason": 123, "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #19 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 19;
    totalTests++;
    const payloadObj = { "userId": 123, "reportReason": "report user", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportReason": "report user", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #20 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportReason":"report user","pretendingTo":0}', async () => {
    testNumber = 20;
    totalTests++;
    const payloadObj = { "userId": 123, "reportReason": "report user", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportReason": "report user", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #21 should return errors ["Could not resolve permission type"] when body {"userId":123,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 21;
    totalTests++;
    const payloadObj = { "userId": 123, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #22 should return errors ["Could not resolve permission type"] when body {"userId":123,"pretendingTo":0}', async () => {
    testNumber = 22;
    totalTests++;
    const payloadObj = { "userId": 123, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #23 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 23;
    totalTests++;
    const payloadObj = { "userId": 123, "reportReason": "", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportReason": "", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #24 should return errors ["Could not resolve permission type"] when body {"userId":123,"reportReason":"","pretendingTo":0}', async () => {
    testNumber = 24;
    totalTests++;
    const payloadObj = { "userId": 123, "reportReason": "", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": 123, "reportReason": "", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #25 should return errors ["reportCategory invalid enum value,expected 0,1,2,3,4,5,6,7,8,9,20,received \'invalid_enum_value\'","reportReason expected string,received number","pretendingTo invalid enum value,expected 0,1,2,3,received \'invalid_enum_value\'"] when body {"userId":"{{userId1}}","reportCategory":"invalid_enum_value","reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 25;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": "invalid_enum_value" },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportCategory invalid enum value, expected 0,1,2,3,4,5,6,7,8,9,20, received 'invalid_enum_value'", "reportReason expected string, received number", "pretendingTo invalid enum value, expected 0,1,2,3, received 'invalid_enum_value'"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #26 should return errors ["reportCategory invalid enum value,expected 0,1,2,3,4,5,6,7,8,9,20,received \'invalid_enum_value\'","reportReason expected string,received number"] when body {"userId":"{{userId1}}","reportCategory":"invalid_enum_value","reportReason":123,"pretendingTo":0}', async () => {
    testNumber = 26;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": 0 },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportCategory invalid enum value, expected 0,1,2,3,4,5,6,7,8,9,20, received 'invalid_enum_value'", "reportReason expected string, received number"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #27 should return errors ["reportCategory invalid enum value,expected 0,1,2,3,4,5,6,7,8,9,20,received \'invalid_enum_value\'","pretendingTo invalid enum value,expected 0,1,2,3,received \'invalid_enum_value\'"] when body {"userId":"{{userId1}}","reportCategory":"invalid_enum_value","reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 27;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": "invalid_enum_value" },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportCategory invalid enum value, expected 0,1,2,3,4,5,6,7,8,9,20, received 'invalid_enum_value'", "pretendingTo invalid enum value, expected 0,1,2,3, received 'invalid_enum_value'"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #28 should return errors ["reportCategory invalid enum value,expected 0,1,2,3,4,5,6,7,8,9,20,received \'invalid_enum_value\'"] when body {"userId":"{{userId1}}","reportCategory":"invalid_enum_value","reportReason":"report user","pretendingTo":0}', async () => {
    testNumber = 28;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": 0 },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportCategory invalid enum value, expected 0,1,2,3,4,5,6,7,8,9,20, received 'invalid_enum_value'"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #29 should return errors ["reportCategory invalid enum value,expected 0,1,2,3,4,5,6,7,8,9,20,received \'invalid_enum_value\'","reportReason required","pretendingTo invalid enum value,expected 0,1,2,3,received \'invalid_enum_value\'"] when body {"userId":"{{userId1}}","reportCategory":"invalid_enum_value","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 29;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportCategory": "invalid_enum_value", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportCategory": "invalid_enum_value", "pretendingTo": "invalid_enum_value" },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportCategory invalid enum value, expected 0,1,2,3,4,5,6,7,8,9,20, received 'invalid_enum_value'", "reportReason required", "pretendingTo invalid enum value, expected 0,1,2,3, received 'invalid_enum_value'"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #30 should return errors ["reportCategory invalid enum value,expected 0,1,2,3,4,5,6,7,8,9,20,received \'invalid_enum_value\'","reportReason required"] when body {"userId":"{{userId1}}","reportCategory":"invalid_enum_value","pretendingTo":0}', async () => {
    testNumber = 30;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportCategory": "invalid_enum_value", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportCategory": "invalid_enum_value", "pretendingTo": 0 },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportCategory invalid enum value, expected 0,1,2,3,4,5,6,7,8,9,20, received 'invalid_enum_value'", "reportReason required"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #31 should return errors ["reportCategory invalid enum value,expected 0,1,2,3,4,5,6,7,8,9,20,received \'invalid_enum_value\'","reportReason should not be empty","pretendingTo invalid enum value,expected 0,1,2,3,received \'invalid_enum_value\'"] when body {"userId":"{{userId1}}","reportCategory":"invalid_enum_value","reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 31;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": "invalid_enum_value" },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportCategory invalid enum value, expected 0,1,2,3,4,5,6,7,8,9,20, received 'invalid_enum_value'", "reportReason should not be empty", "pretendingTo invalid enum value, expected 0,1,2,3, received 'invalid_enum_value'"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #32 should return errors ["reportCategory invalid enum value,expected 0,1,2,3,4,5,6,7,8,9,20,received \'invalid_enum_value\'","reportReason should not be empty"] when body {"userId":"{{userId1}}","reportCategory":"invalid_enum_value","reportReason":"","pretendingTo":0}', async () => {
    testNumber = 32;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": 0 },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportCategory invalid enum value, expected 0,1,2,3,4,5,6,7,8,9,20, received 'invalid_enum_value'", "reportReason should not be empty"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #33 should return errors ["reportReason expected string,received number","pretendingTo invalid enum value,expected 0,1,2,3,received \'invalid_enum_value\'"] when body {"userId":"{{userId1}}","reportCategory":0,"reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 33;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportCategory": 0, "reportReason": 123, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportCategory": 0, "reportReason": 123, "pretendingTo": "invalid_enum_value" },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportReason expected string, received number", "pretendingTo invalid enum value, expected 0,1,2,3, received 'invalid_enum_value'"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #34 should return errors ["reportReason expected string,received number"] when body {"userId":"{{userId1}}","reportCategory":0,"reportReason":123,"pretendingTo":0}', async () => {
    testNumber = 34;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportCategory": 0, "reportReason": 123, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportCategory": 0, "reportReason": 123, "pretendingTo": 0 },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportReason expected string, received number"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #35 should return errors ["pretendingTo invalid enum value,expected 0,1,2,3,received \'invalid_enum_value\'"] when body {"userId":"{{userId1}}","reportCategory":0,"reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 35;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportCategory": 0, "reportReason": "report user", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportCategory": 0, "reportReason": "report user", "pretendingTo": "invalid_enum_value" },
        contextData
      );
      const data = response.data;
      const expectJson = ["pretendingTo invalid enum value, expected 0,1,2,3, received 'invalid_enum_value'"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #36 should return errors [] when body {"userId":"{{userId1}}","reportCategory":0,"reportReason":"report user","pretendingTo":0}', async () => {
    testNumber = 36;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportCategory": 0, "reportReason": "report user", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportCategory": 0, "reportReason": "report user", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #37 should return errors ["reportReason required","pretendingTo invalid enum value,expected 0,1,2,3,received \'invalid_enum_value\'"] when body {"userId":"{{userId1}}","reportCategory":0,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 37;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportCategory": 0, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportCategory": 0, "pretendingTo": "invalid_enum_value" },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportReason required", "pretendingTo invalid enum value, expected 0,1,2,3, received 'invalid_enum_value'"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #38 should return errors ["reportReason required"] when body {"userId":"{{userId1}}","reportCategory":0,"pretendingTo":0}', async () => {
    testNumber = 38;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportCategory": 0, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportCategory": 0, "pretendingTo": 0 },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportReason required"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #39 should return errors ["reportReason should not be empty","pretendingTo invalid enum value,expected 0,1,2,3,received \'invalid_enum_value\'"] when body {"userId":"{{userId1}}","reportCategory":0,"reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 39;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportCategory": 0, "reportReason": "", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportCategory": 0, "reportReason": "", "pretendingTo": "invalid_enum_value" },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportReason should not be empty", "pretendingTo invalid enum value, expected 0,1,2,3, received 'invalid_enum_value'"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #40 should return errors ["reportReason should not be empty"] when body {"userId":"{{userId1}}","reportCategory":0,"reportReason":"","pretendingTo":0}', async () => {
    testNumber = 40;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportCategory": 0, "reportReason": "", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportCategory": 0, "reportReason": "", "pretendingTo": 0 },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportReason should not be empty"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #41 should return errors ["reportCategory invalid enum value,expected 0,1,2,3,4,5,6,7,8,9,20,received \'undefined\'","reportReason expected string,received number","pretendingTo invalid enum value,expected 0,1,2,3,received \'invalid_enum_value\'"] when body {"userId":"{{userId1}}","reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 41;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportReason": 123, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportReason": 123, "pretendingTo": "invalid_enum_value" },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportCategory invalid enum value, expected 0,1,2,3,4,5,6,7,8,9,20, received 'undefined'", "reportReason expected string, received number", "pretendingTo invalid enum value, expected 0,1,2,3, received 'invalid_enum_value'"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #42 should return errors ["reportCategory invalid enum value,expected 0,1,2,3,4,5,6,7,8,9,20,received \'undefined\'","reportReason expected string,received number"] when body {"userId":"{{userId1}}","reportReason":123,"pretendingTo":0}', async () => {
    testNumber = 42;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportReason": 123, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportReason": 123, "pretendingTo": 0 },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportCategory invalid enum value, expected 0,1,2,3,4,5,6,7,8,9,20, received 'undefined'", "reportReason expected string, received number"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #43 should return errors ["reportCategory invalid enum value,expected 0,1,2,3,4,5,6,7,8,9,20,received \'undefined\'","pretendingTo invalid enum value,expected 0,1,2,3,received \'invalid_enum_value\'"] when body {"userId":"{{userId1}}","reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 43;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportReason": "report user", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportReason": "report user", "pretendingTo": "invalid_enum_value" },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportCategory invalid enum value, expected 0,1,2,3,4,5,6,7,8,9,20, received 'undefined'", "pretendingTo invalid enum value, expected 0,1,2,3, received 'invalid_enum_value'"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #44 should return errors ["reportCategory invalid enum value,expected 0,1,2,3,4,5,6,7,8,9,20,received \'undefined\'"] when body {"userId":"{{userId1}}","reportReason":"report user","pretendingTo":0}', async () => {
    testNumber = 44;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportReason": "report user", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportReason": "report user", "pretendingTo": 0 },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportCategory invalid enum value, expected 0,1,2,3,4,5,6,7,8,9,20, received 'undefined'"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #45 should return errors ["reportCategory invalid enum value,expected 0,1,2,3,4,5,6,7,8,9,20,received \'undefined\'","reportReason required","pretendingTo invalid enum value,expected 0,1,2,3,received \'invalid_enum_value\'"] when body {"userId":"{{userId1}}","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 45;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "pretendingTo": "invalid_enum_value" },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportCategory invalid enum value, expected 0,1,2,3,4,5,6,7,8,9,20, received 'undefined'", "reportReason required", "pretendingTo invalid enum value, expected 0,1,2,3, received 'invalid_enum_value'"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #46 should return errors ["reportCategory invalid enum value,expected 0,1,2,3,4,5,6,7,8,9,20,received \'undefined\'","reportReason required"] when body {"userId":"{{userId1}}","pretendingTo":0}', async () => {
    testNumber = 46;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "pretendingTo": 0 },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportCategory invalid enum value, expected 0,1,2,3,4,5,6,7,8,9,20, received 'undefined'", "reportReason required"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #47 should return errors ["reportCategory invalid enum value,expected 0,1,2,3,4,5,6,7,8,9,20,received \'undefined\'","reportReason should not be empty","pretendingTo invalid enum value,expected 0,1,2,3,received \'invalid_enum_value\'"] when body {"userId":"{{userId1}}","reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 47;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportReason": "", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportReason": "", "pretendingTo": "invalid_enum_value" },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportCategory invalid enum value, expected 0,1,2,3,4,5,6,7,8,9,20, received 'undefined'", "reportReason should not be empty", "pretendingTo invalid enum value, expected 0,1,2,3, received 'invalid_enum_value'"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #48 should return errors ["reportCategory invalid enum value,expected 0,1,2,3,4,5,6,7,8,9,20,received \'undefined\'","reportReason should not be empty"] when body {"userId":"{{userId1}}","reportReason":"","pretendingTo":0}', async () => {
    testNumber = 48;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "reportReason": "", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "{{userId1}}", "reportReason": "", "pretendingTo": 0 },
        contextData
      );
      const data = response.data;
      const expectJson = ["reportCategory invalid enum value, expected 0,1,2,3,4,5,6,7,8,9,20, received 'undefined'", "reportReason should not be empty"].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #49 should return errors ["Could not resolve permission type"] when body {"reportCategory":"invalid_enum_value","reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 49;
    totalTests++;
    const payloadObj = { "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #50 should return errors ["Could not resolve permission type"] when body {"reportCategory":"invalid_enum_value","reportReason":123,"pretendingTo":0}', async () => {
    testNumber = 50;
    totalTests++;
    const payloadObj = { "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #51 should return errors ["Could not resolve permission type"] when body {"reportCategory":"invalid_enum_value","reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 51;
    totalTests++;
    const payloadObj = { "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #52 should return errors ["Could not resolve permission type"] when body {"reportCategory":"invalid_enum_value","reportReason":"report user","pretendingTo":0}', async () => {
    testNumber = 52;
    totalTests++;
    const payloadObj = { "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #53 should return errors ["Could not resolve permission type"] when body {"reportCategory":"invalid_enum_value","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 53;
    totalTests++;
    const payloadObj = { "reportCategory": "invalid_enum_value", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportCategory": "invalid_enum_value", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #54 should return errors ["Could not resolve permission type"] when body {"reportCategory":"invalid_enum_value","pretendingTo":0}', async () => {
    testNumber = 54;
    totalTests++;
    const payloadObj = { "reportCategory": "invalid_enum_value", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportCategory": "invalid_enum_value", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #55 should return errors ["Could not resolve permission type"] when body {"reportCategory":"invalid_enum_value","reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 55;
    totalTests++;
    const payloadObj = { "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #56 should return errors ["Could not resolve permission type"] when body {"reportCategory":"invalid_enum_value","reportReason":"","pretendingTo":0}', async () => {
    testNumber = 56;
    totalTests++;
    const payloadObj = { "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #57 should return errors ["Could not resolve permission type"] when body {"reportCategory":0,"reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 57;
    totalTests++;
    const payloadObj = { "reportCategory": 0, "reportReason": 123, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportCategory": 0, "reportReason": 123, "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #58 should return errors ["Could not resolve permission type"] when body {"reportCategory":0,"reportReason":123,"pretendingTo":0}', async () => {
    testNumber = 58;
    totalTests++;
    const payloadObj = { "reportCategory": 0, "reportReason": 123, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportCategory": 0, "reportReason": 123, "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #59 should return errors ["Could not resolve permission type"] when body {"reportCategory":0,"reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 59;
    totalTests++;
    const payloadObj = { "reportCategory": 0, "reportReason": "report user", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportCategory": 0, "reportReason": "report user", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #60 should return errors ["Could not resolve permission type"] when body {"reportCategory":0,"reportReason":"report user","pretendingTo":0}', async () => {
    testNumber = 60;
    totalTests++;
    const payloadObj = { "reportCategory": 0, "reportReason": "report user", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportCategory": 0, "reportReason": "report user", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #61 should return errors ["Could not resolve permission type"] when body {"reportCategory":0,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 61;
    totalTests++;
    const payloadObj = { "reportCategory": 0, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportCategory": 0, "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #62 should return errors ["Could not resolve permission type"] when body {"reportCategory":0,"pretendingTo":0}', async () => {
    testNumber = 62;
    totalTests++;
    const payloadObj = { "reportCategory": 0, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportCategory": 0, "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #63 should return errors ["Could not resolve permission type"] when body {"reportCategory":0,"reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 63;
    totalTests++;
    const payloadObj = { "reportCategory": 0, "reportReason": "", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportCategory": 0, "reportReason": "", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #64 should return errors ["Could not resolve permission type"] when body {"reportCategory":0,"reportReason":"","pretendingTo":0}', async () => {
    testNumber = 64;
    totalTests++;
    const payloadObj = { "reportCategory": 0, "reportReason": "", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportCategory": 0, "reportReason": "", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #65 should return errors ["Could not resolve permission type"] when body {"reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 65;
    totalTests++;
    const payloadObj = { "reportReason": 123, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportReason": 123, "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #66 should return errors ["Could not resolve permission type"] when body {"reportReason":123,"pretendingTo":0}', async () => {
    testNumber = 66;
    totalTests++;
    const payloadObj = { "reportReason": 123, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportReason": 123, "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #67 should return errors ["Could not resolve permission type"] when body {"reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 67;
    totalTests++;
    const payloadObj = { "reportReason": "report user", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportReason": "report user", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #68 should return errors ["Could not resolve permission type"] when body {"reportReason":"report user","pretendingTo":0}', async () => {
    testNumber = 68;
    totalTests++;
    const payloadObj = { "reportReason": "report user", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportReason": "report user", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #69 should return errors ["Could not resolve permission type"] when body {"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 69;
    totalTests++;
    const payloadObj = { "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #70 should return errors ["Could not resolve permission type"] when body {"pretendingTo":0}', async () => {
    testNumber = 70;
    totalTests++;
    const payloadObj = { "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #71 should return errors ["Could not resolve permission type"] when body {"reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 71;
    totalTests++;
    const payloadObj = { "reportReason": "", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportReason": "", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #72 should return errors ["Could not resolve permission type"] when body {"reportReason":"","pretendingTo":0}', async () => {
    testNumber = 72;
    totalTests++;
    const payloadObj = { "reportReason": "", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "reportReason": "", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #73 should return errors ["Could not resolve permission type"] when body {"userId":"","reportCategory":"invalid_enum_value","reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 73;
    totalTests++;
    const payloadObj = { "userId": "", "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #74 should return errors ["Could not resolve permission type"] when body {"userId":"","reportCategory":"invalid_enum_value","reportReason":123,"pretendingTo":0}', async () => {
    testNumber = 74;
    totalTests++;
    const payloadObj = { "userId": "", "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #75 should return errors ["Could not resolve permission type"] when body {"userId":"","reportCategory":"invalid_enum_value","reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 75;
    totalTests++;
    const payloadObj = { "userId": "", "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #76 should return errors ["Could not resolve permission type"] when body {"userId":"","reportCategory":"invalid_enum_value","reportReason":"report user","pretendingTo":0}', async () => {
    testNumber = 76;
    totalTests++;
    const payloadObj = { "userId": "", "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #77 should return errors ["Could not resolve permission type"] when body {"userId":"","reportCategory":"invalid_enum_value","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 77;
    totalTests++;
    const payloadObj = { "userId": "", "reportCategory": "invalid_enum_value", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportCategory": "invalid_enum_value", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #78 should return errors ["Could not resolve permission type"] when body {"userId":"","reportCategory":"invalid_enum_value","pretendingTo":0}', async () => {
    testNumber = 78;
    totalTests++;
    const payloadObj = { "userId": "", "reportCategory": "invalid_enum_value", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportCategory": "invalid_enum_value", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #79 should return errors ["Could not resolve permission type"] when body {"userId":"","reportCategory":"invalid_enum_value","reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 79;
    totalTests++;
    const payloadObj = { "userId": "", "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #80 should return errors ["Could not resolve permission type"] when body {"userId":"","reportCategory":"invalid_enum_value","reportReason":"","pretendingTo":0}', async () => {
    testNumber = 80;
    totalTests++;
    const payloadObj = { "userId": "", "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #81 should return errors ["Could not resolve permission type"] when body {"userId":"","reportCategory":0,"reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 81;
    totalTests++;
    const payloadObj = { "userId": "", "reportCategory": 0, "reportReason": 123, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportCategory": 0, "reportReason": 123, "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #82 should return errors ["Could not resolve permission type"] when body {"userId":"","reportCategory":0,"reportReason":123,"pretendingTo":0}', async () => {
    testNumber = 82;
    totalTests++;
    const payloadObj = { "userId": "", "reportCategory": 0, "reportReason": 123, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportCategory": 0, "reportReason": 123, "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #83 should return errors ["Could not resolve permission type"] when body {"userId":"","reportCategory":0,"reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 83;
    totalTests++;
    const payloadObj = { "userId": "", "reportCategory": 0, "reportReason": "report user", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportCategory": 0, "reportReason": "report user", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #84 should return errors ["Could not resolve permission type"] when body {"userId":"","reportCategory":0,"reportReason":"report user","pretendingTo":0}', async () => {
    testNumber = 84;
    totalTests++;
    const payloadObj = { "userId": "", "reportCategory": 0, "reportReason": "report user", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportCategory": 0, "reportReason": "report user", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #85 should return errors ["Could not resolve permission type"] when body {"userId":"","reportCategory":0,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 85;
    totalTests++;
    const payloadObj = { "userId": "", "reportCategory": 0, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportCategory": 0, "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #86 should return errors ["Could not resolve permission type"] when body {"userId":"","reportCategory":0,"pretendingTo":0}', async () => {
    testNumber = 86;
    totalTests++;
    const payloadObj = { "userId": "", "reportCategory": 0, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportCategory": 0, "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #87 should return errors ["Could not resolve permission type"] when body {"userId":"","reportCategory":0,"reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 87;
    totalTests++;
    const payloadObj = { "userId": "", "reportCategory": 0, "reportReason": "", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportCategory": 0, "reportReason": "", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #88 should return errors ["Could not resolve permission type"] when body {"userId":"","reportCategory":0,"reportReason":"","pretendingTo":0}', async () => {
    testNumber = 88;
    totalTests++;
    const payloadObj = { "userId": "", "reportCategory": 0, "reportReason": "", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportCategory": 0, "reportReason": "", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #89 should return errors ["Could not resolve permission type"] when body {"userId":"","reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 89;
    totalTests++;
    const payloadObj = { "userId": "", "reportReason": 123, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportReason": 123, "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #90 should return errors ["Could not resolve permission type"] when body {"userId":"","reportReason":123,"pretendingTo":0}', async () => {
    testNumber = 90;
    totalTests++;
    const payloadObj = { "userId": "", "reportReason": 123, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportReason": 123, "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #91 should return errors ["Could not resolve permission type"] when body {"userId":"","reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 91;
    totalTests++;
    const payloadObj = { "userId": "", "reportReason": "report user", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportReason": "report user", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #92 should return errors ["Could not resolve permission type"] when body {"userId":"","reportReason":"report user","pretendingTo":0}', async () => {
    testNumber = 92;
    totalTests++;
    const payloadObj = { "userId": "", "reportReason": "report user", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportReason": "report user", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #93 should return errors ["Could not resolve permission type"] when body {"userId":"","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 93;
    totalTests++;
    const payloadObj = { "userId": "", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #94 should return errors ["Could not resolve permission type"] when body {"userId":"","pretendingTo":0}', async () => {
    testNumber = 94;
    totalTests++;
    const payloadObj = { "userId": "", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #95 should return errors ["Could not resolve permission type"] when body {"userId":"","reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 95;
    totalTests++;
    const payloadObj = { "userId": "", "reportReason": "", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportReason": "", "pretendingTo": "invalid_enum_value" },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #96 should return errors ["Could not resolve permission type"] when body {"userId":"","reportReason":"","pretendingTo":0}', async () => {
    testNumber = 96;
    totalTests++;
    const payloadObj = { "userId": "", "reportReason": "", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "", "reportReason": "", "pretendingTo": 0 },
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
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #97 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"invalid_enum_value","reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 97;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": "invalid_enum_value" },
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

  it('Test case #98 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"invalid_enum_value","reportReason":123,"pretendingTo":0}', async () => {
    testNumber = 98;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportCategory": "invalid_enum_value", "reportReason": 123, "pretendingTo": 0 },
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

  it('Test case #99 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"invalid_enum_value","reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 99;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": "invalid_enum_value" },
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

  it('Test case #100 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"invalid_enum_value","reportReason":"report user","pretendingTo":0}', async () => {
    testNumber = 100;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportCategory": "invalid_enum_value", "reportReason": "report user", "pretendingTo": 0 },
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

  it('Test case #101 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"invalid_enum_value","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 101;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportCategory": "invalid_enum_value", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportCategory": "invalid_enum_value", "pretendingTo": "invalid_enum_value" },
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

  it('Test case #102 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"invalid_enum_value","pretendingTo":0}', async () => {
    testNumber = 102;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportCategory": "invalid_enum_value", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportCategory": "invalid_enum_value", "pretendingTo": 0 },
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

  it('Test case #103 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"invalid_enum_value","reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 103;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": "invalid_enum_value" },
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

  it('Test case #104 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":"invalid_enum_value","reportReason":"","pretendingTo":0}', async () => {
    testNumber = 104;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportCategory": "invalid_enum_value", "reportReason": "", "pretendingTo": 0 },
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

  it('Test case #105 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":0,"reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 105;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportCategory": 0, "reportReason": 123, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportCategory": 0, "reportReason": 123, "pretendingTo": "invalid_enum_value" },
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

  it('Test case #106 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":0,"reportReason":123,"pretendingTo":0}', async () => {
    testNumber = 106;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportCategory": 0, "reportReason": 123, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportCategory": 0, "reportReason": 123, "pretendingTo": 0 },
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

  it('Test case #107 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":0,"reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 107;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportCategory": 0, "reportReason": "report user", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportCategory": 0, "reportReason": "report user", "pretendingTo": "invalid_enum_value" },
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

  it('Test case #108 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":0,"reportReason":"report user","pretendingTo":0}', async () => {
    testNumber = 108;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportCategory": 0, "reportReason": "report user", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportCategory": 0, "reportReason": "report user", "pretendingTo": 0 },
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

  it('Test case #109 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":0,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 109;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportCategory": 0, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportCategory": 0, "pretendingTo": "invalid_enum_value" },
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

  it('Test case #110 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":0,"pretendingTo":0}', async () => {
    testNumber = 110;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportCategory": 0, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportCategory": 0, "pretendingTo": 0 },
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

  it('Test case #111 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":0,"reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 111;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportCategory": 0, "reportReason": "", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportCategory": 0, "reportReason": "", "pretendingTo": "invalid_enum_value" },
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

  it('Test case #112 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportCategory":0,"reportReason":"","pretendingTo":0}', async () => {
    testNumber = 112;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportCategory": 0, "reportReason": "", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportCategory": 0, "reportReason": "", "pretendingTo": 0 },
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

  it('Test case #113 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":123,"pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 113;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportReason": 123, "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportReason": 123, "pretendingTo": "invalid_enum_value" },
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

  it('Test case #114 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":123,"pretendingTo":0}', async () => {
    testNumber = 114;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportReason": 123, "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportReason": 123, "pretendingTo": 0 },
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

  it('Test case #115 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"report user","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 115;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportReason": "report user", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportReason": "report user", "pretendingTo": "invalid_enum_value" },
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

  it('Test case #116 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"report user","pretendingTo":0}', async () => {
    testNumber = 116;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportReason": "report user", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportReason": "report user", "pretendingTo": 0 },
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

  it('Test case #117 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 117;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "pretendingTo": "invalid_enum_value" },
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

  it('Test case #118 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","pretendingTo":0}', async () => {
    testNumber = 118;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "pretendingTo": 0 },
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

  it('Test case #119 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"","pretendingTo":"invalid_enum_value"}', async () => {
    testNumber = 119;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportReason": "", "pretendingTo": "invalid_enum_value" };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportReason": "", "pretendingTo": "invalid_enum_value" },
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

  it('Test case #120 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","reportReason":"","pretendingTo":0}', async () => {
    testNumber = 120;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "reportReason": "", "pretendingTo": 0 };
    resolvedData = resolveVariables(payloadObj, contextData);

    try {
      const response = await resolveCallAPI(
        "reportUser",
        { "x-session-token": "{{token}}" },
        { "userId": "invalid_value", "reportReason": "", "pretendingTo": 0 },
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
    } else {
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
    } else {
      contextData = globalContext
    }

    // Lưu kết quả vào biến toàn cục
    const testResult: TestResult = {
      path: '/UserReport/ReportUser',
      className: 'report-user',
      allSteps: allSteps,
      chunkNumber: undefined,
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
    const chunkNumber = undefined
    const fileName = 'report-user' + (chunkNumber ? `-chunk-undefined` : '') + '.result.json';
    const filePath = path.join(reportDir, fileName);
    fs.writeFileSync(filePath, JSON.stringify(testResult, null, 2), 'utf-8');

    console.log(`📝 Saved result for report-user chunk single to ${filePath}`);
  });
})
