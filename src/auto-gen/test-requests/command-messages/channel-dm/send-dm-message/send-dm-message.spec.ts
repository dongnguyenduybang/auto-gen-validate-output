
import fs from 'fs';
import path from 'path';
import { summaryFields, resolveCallAPI, resolveVariables } from '../../../../utils/helper';
import { TestResult } from '../../../../utils/declarations';
import { executeSteps } from '../../../../utils/text-execute-test';
import { TestContext } from '../../../../utils/text-context';

describe('Testcase for send-dm-message', () => {
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


  it('Test case #1 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":"default content","ref":"default ref"}', async () => {
    testNumber = 1;
    totalTests++;
    const payloadObj = { "userId": 123, "content": "default content", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #2 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":123,"ref":"default ref"}', async () => {
    testNumber = 2;
    totalTests++;
    const payloadObj = { "userId": 123, "content": 123, "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #3 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":"","ref":"default ref"}', async () => {
    testNumber = 3;
    totalTests++;
    const payloadObj = { "userId": 123, "content": "", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #4 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"default ref"}', async () => {
    testNumber = 4;
    totalTests++;
    const payloadObj = { "userId": 123, "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #5 should return errors ["Could not resolve permission type"] when body {"userId":123,"ref":"default ref"}', async () => {
    testNumber = 5;
    totalTests++;
    const payloadObj = { "userId": 123, "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #6 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":null,"ref":"default ref"}', async () => {
    testNumber = 6;
    totalTests++;
    const payloadObj = { "userId": 123, "content": null, "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #7 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":"default content","ref":123}', async () => {
    testNumber = 7;
    totalTests++;
    const payloadObj = { "userId": 123, "content": "default content", "ref": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #8 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":"default content","ref":""}', async () => {
    testNumber = 8;
    totalTests++;
    const payloadObj = { "userId": 123, "content": "default content", "ref": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #9 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":"default content"}', async () => {
    testNumber = 9;
    totalTests++;
    const payloadObj = { "userId": 123, "content": "default content" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #10 should return errors ["Could not resolve permission type"] when body {"userId":123,"content":"default content","ref":null}', async () => {
    testNumber = 10;
    totalTests++;
    const payloadObj = { "userId": 123, "content": "default content", "ref": null };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #11 should return errors [] when body {"userId":"{{userId}}","content":"default content","ref":"default ref"}', async () => {
    testNumber = 11;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": "default content", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = [].sort();

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


  it('Test case #12 should return errors ["content expected string,received number"] when body {"userId":"{{userId}}","content":123,"ref":"default ref"}', async () => {
    testNumber = 12;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": 123, "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content expected string, received number"].sort();

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


  it('Test case #13 should return errors ["content should not be empty","content string must contain at least 1 character(s)"] when body {"userId":"{{userId}}","content":"","ref":"default ref"}', async () => {
    testNumber = 13;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": "", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content should not be empty", "content string must contain at least 1 character(s)"].sort();

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


  it('Test case #14 should return errors ["content string must contain at most 2000 character(s)"] when body {"userId":"{{userId}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"default ref"}', async () => {
    testNumber = 14;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content string must contain at most 2000 character(s)"].sort();

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


  it('Test case #15 should return errors ["content required"] when body {"userId":"{{userId}}","ref":"default ref"}', async () => {
    testNumber = 15;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content required"].sort();

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


  it('Test case #16 should return errors ["content expected string,received null"] when body {"userId":"{{userId}}","content":null,"ref":"default ref"}', async () => {
    testNumber = 16;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": null, "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content expected string, received null"].sort();

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


  it('Test case #17 should return errors ["ref expected string,received number"] when body {"userId":"{{userId}}","content":"default content","ref":123}', async () => {
    testNumber = 17;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": "default content", "ref": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["ref expected string, received number"].sort();

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


  it('Test case #18 should return errors ["ref should not be empty","ref string must contain at least 1 character(s)"] when body {"userId":"{{userId}}","content":"default content","ref":""}', async () => {
    testNumber = 18;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": "default content", "ref": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["ref should not be empty", "ref string must contain at least 1 character(s)"].sort();

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


  it('Test case #19 should return errors ["ref required"] when body {"userId":"{{userId}}","content":"default content"}', async () => {
    testNumber = 19;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": "default content" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["ref required"].sort();

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


  it('Test case #20 should return errors ["ref expected string,received null"] when body {"userId":"{{userId}}","content":"default content","ref":null}', async () => {
    testNumber = 20;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": "default content", "ref": null };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["ref expected string, received null"].sort();

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


  it('Test case #21 should return errors ["Could not resolve permission type"] when body {"content":"default content","ref":"default ref"}', async () => {
    testNumber = 21;
    totalTests++;
    const payloadObj = { "content": "default content", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #22 should return errors ["Could not resolve permission type"] when body {"content":123,"ref":"default ref"}', async () => {
    testNumber = 22;
    totalTests++;
    const payloadObj = { "content": 123, "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #23 should return errors ["Could not resolve permission type"] when body {"content":"","ref":"default ref"}', async () => {
    testNumber = 23;
    totalTests++;
    const payloadObj = { "content": "", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #24 should return errors ["Could not resolve permission type"] when body {"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"default ref"}', async () => {
    testNumber = 24;
    totalTests++;
    const payloadObj = { "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #25 should return errors ["Could not resolve permission type"] when body {"ref":"default ref"}', async () => {
    testNumber = 25;
    totalTests++;
    const payloadObj = { "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #26 should return errors ["Could not resolve permission type"] when body {"content":null,"ref":"default ref"}', async () => {
    testNumber = 26;
    totalTests++;
    const payloadObj = { "content": null, "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #27 should return errors ["Could not resolve permission type"] when body {"content":"default content","ref":123}', async () => {
    testNumber = 27;
    totalTests++;
    const payloadObj = { "content": "default content", "ref": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #28 should return errors ["Could not resolve permission type"] when body {"content":"default content","ref":""}', async () => {
    testNumber = 28;
    totalTests++;
    const payloadObj = { "content": "default content", "ref": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #29 should return errors ["Could not resolve permission type"] when body {"content":"default content"}', async () => {
    testNumber = 29;
    totalTests++;
    const payloadObj = { "content": "default content" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #30 should return errors ["Could not resolve permission type"] when body {"content":"default content","ref":null}', async () => {
    testNumber = 30;
    totalTests++;
    const payloadObj = { "content": "default content", "ref": null };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #31 should return errors ["Could not resolve permission type"] when body {"userId":"","content":"default content","ref":"default ref"}', async () => {
    testNumber = 31;
    totalTests++;
    const payloadObj = { "userId": "", "content": "default content", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #32 should return errors ["Could not resolve permission type"] when body {"userId":"","content":123,"ref":"default ref"}', async () => {
    testNumber = 32;
    totalTests++;
    const payloadObj = { "userId": "", "content": 123, "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #33 should return errors ["Could not resolve permission type"] when body {"userId":"","content":"","ref":"default ref"}', async () => {
    testNumber = 33;
    totalTests++;
    const payloadObj = { "userId": "", "content": "", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #34 should return errors ["Could not resolve permission type"] when body {"userId":"","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"default ref"}', async () => {
    testNumber = 34;
    totalTests++;
    const payloadObj = { "userId": "", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #35 should return errors ["Could not resolve permission type"] when body {"userId":"","ref":"default ref"}', async () => {
    testNumber = 35;
    totalTests++;
    const payloadObj = { "userId": "", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #36 should return errors ["Could not resolve permission type"] when body {"userId":"","content":null,"ref":"default ref"}', async () => {
    testNumber = 36;
    totalTests++;
    const payloadObj = { "userId": "", "content": null, "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #37 should return errors ["Could not resolve permission type"] when body {"userId":"","content":"default content","ref":123}', async () => {
    testNumber = 37;
    totalTests++;
    const payloadObj = { "userId": "", "content": "default content", "ref": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #38 should return errors ["Could not resolve permission type"] when body {"userId":"","content":"default content","ref":""}', async () => {
    testNumber = 38;
    totalTests++;
    const payloadObj = { "userId": "", "content": "default content", "ref": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #39 should return errors ["Could not resolve permission type"] when body {"userId":"","content":"default content"}', async () => {
    testNumber = 39;
    totalTests++;
    const payloadObj = { "userId": "", "content": "default content" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #40 should return errors ["Could not resolve permission type"] when body {"userId":"","content":"default content","ref":null}', async () => {
    testNumber = 40;
    totalTests++;
    const payloadObj = { "userId": "", "content": "default content", "ref": null };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #41 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":"default content","ref":"default ref"}', async () => {
    testNumber = 41;
    totalTests++;
    const payloadObj = { "userId": null, "content": "default content", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #42 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":123,"ref":"default ref"}', async () => {
    testNumber = 42;
    totalTests++;
    const payloadObj = { "userId": null, "content": 123, "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #43 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":"","ref":"default ref"}', async () => {
    testNumber = 43;
    totalTests++;
    const payloadObj = { "userId": null, "content": "", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #44 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"default ref"}', async () => {
    testNumber = 44;
    totalTests++;
    const payloadObj = { "userId": null, "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #45 should return errors ["Could not resolve permission type"] when body {"userId":null,"ref":"default ref"}', async () => {
    testNumber = 45;
    totalTests++;
    const payloadObj = { "userId": null, "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #46 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":null,"ref":"default ref"}', async () => {
    testNumber = 46;
    totalTests++;
    const payloadObj = { "userId": null, "content": null, "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #47 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":"default content","ref":123}', async () => {
    testNumber = 47;
    totalTests++;
    const payloadObj = { "userId": null, "content": "default content", "ref": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #48 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":"default content","ref":""}', async () => {
    testNumber = 48;
    totalTests++;
    const payloadObj = { "userId": null, "content": "default content", "ref": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #49 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":"default content"}', async () => {
    testNumber = 49;
    totalTests++;
    const payloadObj = { "userId": null, "content": "default content" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #50 should return errors ["Could not resolve permission type"] when body {"userId":null,"content":"default content","ref":null}', async () => {
    testNumber = 50;
    totalTests++;
    const payloadObj = { "userId": null, "content": "default content", "ref": null };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
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


  it('Test case #51 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":"default content","ref":"default ref"}', async () => {
    testNumber = 51;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "content": "default content", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["Unauthorized request"].sort();

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


  it('Test case #52 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":123,"ref":"default ref"}', async () => {
    testNumber = 52;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "content": 123, "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["Unauthorized request"].sort();

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


  it('Test case #53 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":"","ref":"default ref"}', async () => {
    testNumber = 53;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "content": "", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["Unauthorized request"].sort();

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


  it('Test case #54 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":"default ref"}', async () => {
    testNumber = 54;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["Unauthorized request"].sort();

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


  it('Test case #55 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","ref":"default ref"}', async () => {
    testNumber = 55;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["Unauthorized request"].sort();

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


  it('Test case #56 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":null,"ref":"default ref"}', async () => {
    testNumber = 56;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "content": null, "ref": "default ref" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["Unauthorized request"].sort();

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


  it('Test case #57 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":"default content","ref":123}', async () => {
    testNumber = 57;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "content": "default content", "ref": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["Unauthorized request"].sort();

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


  it('Test case #58 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":"default content","ref":""}', async () => {
    testNumber = 58;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "content": "default content", "ref": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["Unauthorized request"].sort();

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


  it('Test case #59 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":"default content"}', async () => {
    testNumber = 59;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "content": "default content" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["Unauthorized request"].sort();

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


  it('Test case #60 should return errors ["Unauthorized request"] when body {"userId":"invalid_value","content":"default content","ref":null}', async () => {
    testNumber = 60;
    totalTests++;
    const payloadObj = { "userId": "invalid_value", "content": "default content", "ref": null };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["Unauthorized request"].sort();

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


  it('Test case #61 should return errors ["content expected string,received number","ref expected string,received number"] when body {"userId":"{{userId}}","content":123,"ref":123}', async () => {
    testNumber = 61;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": 123, "ref": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content expected string, received number", "ref expected string, received number"].sort();

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


  it('Test case #62 should return errors ["content expected string,received number","ref should not be empty","ref string must contain at least 1 character(s)"] when body {"userId":"{{userId}}","content":123,"ref":""}', async () => {
    testNumber = 62;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": 123, "ref": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content expected string, received number", "ref should not be empty", "ref string must contain at least 1 character(s)"].sort();

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


  it('Test case #63 should return errors ["content expected string,received number","ref required"] when body {"userId":"{{userId}}","content":123}', async () => {
    testNumber = 63;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content expected string, received number", "ref required"].sort();

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


  it('Test case #64 should return errors ["content expected string,received number","ref expected string,received null"] when body {"userId":"{{userId}}","content":123,"ref":null}', async () => {
    testNumber = 64;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": 123, "ref": null };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content expected string, received number", "ref expected string, received null"].sort();

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


  it('Test case #65 should return errors ["content should not be empty","content string must contain at least 1 character(s)","ref expected string,received number"] when body {"userId":"{{userId}}","content":"","ref":123}', async () => {
    testNumber = 65;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": "", "ref": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content should not be empty", "content string must contain at least 1 character(s)", "ref expected string, received number"].sort();

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


  it('Test case #66 should return errors ["content should not be empty","content string must contain at least 1 character(s)","ref should not be empty","ref string must contain at least 1 character(s)"] when body {"userId":"{{userId}}","content":"","ref":""}', async () => {
    testNumber = 66;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": "", "ref": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content should not be empty", "content string must contain at least 1 character(s)", "ref should not be empty", "ref string must contain at least 1 character(s)"].sort();

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


  it('Test case #67 should return errors ["content should not be empty","content string must contain at least 1 character(s)","ref required"] when body {"userId":"{{userId}}","content":""}', async () => {
    testNumber = 67;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content should not be empty", "content string must contain at least 1 character(s)", "ref required"].sort();

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


  it('Test case #68 should return errors ["content should not be empty","content string must contain at least 1 character(s)","ref expected string,received null"] when body {"userId":"{{userId}}","content":"","ref":null}', async () => {
    testNumber = 68;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": "", "ref": null };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content should not be empty", "content string must contain at least 1 character(s)", "ref expected string, received null"].sort();

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


  it('Test case #69 should return errors ["content string must contain at most 2000 character(s)","ref expected string,received number"] when body {"userId":"{{userId}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":123}', async () => {
    testNumber = 69;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "ref": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content string must contain at most 2000 character(s)", "ref expected string, received number"].sort();

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


  it('Test case #70 should return errors ["content string must contain at most 2000 character(s)","ref should not be empty","ref string must contain at least 1 character(s)"] when body {"userId":"{{userId}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":""}', async () => {
    testNumber = 70;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "ref": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content string must contain at most 2000 character(s)", "ref should not be empty", "ref string must contain at least 1 character(s)"].sort();

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


  it('Test case #71 should return errors ["content string must contain at most 2000 character(s)","ref required"] when body {"userId":"{{userId}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}', async () => {
    testNumber = 71;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content string must contain at most 2000 character(s)", "ref required"].sort();

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


  it('Test case #72 should return errors ["content string must contain at most 2000 character(s)","ref expected string,received null"] when body {"userId":"{{userId}}","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","ref":null}', async () => {
    testNumber = 72;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "ref": null };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content string must contain at most 2000 character(s)", "ref expected string, received null"].sort();

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


  it('Test case #73 should return errors ["content required","ref expected string,received number"] when body {"userId":"{{userId}}","ref":123}', async () => {
    testNumber = 73;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "ref": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content required", "ref expected string, received number"].sort();

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


  it('Test case #74 should return errors ["content required","ref should not be empty","ref string must contain at least 1 character(s)"] when body {"userId":"{{userId}}","ref":""}', async () => {
    testNumber = 74;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "ref": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content required", "ref should not be empty", "ref string must contain at least 1 character(s)"].sort();

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


  it('Test case #75 should return errors ["content required","ref required"] when body {"userId":"{{userId}}"}', async () => {
    testNumber = 75;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content required", "ref required"].sort();

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


  it('Test case #76 should return errors ["content required","ref expected string,received null"] when body {"userId":"{{userId}}","ref":null}', async () => {
    testNumber = 76;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "ref": null };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content required", "ref expected string, received null"].sort();

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


  it('Test case #77 should return errors ["content expected string,received null","ref expected string,received number"] when body {"userId":"{{userId}}","content":null,"ref":123}', async () => {
    testNumber = 77;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": null, "ref": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content expected string, received null", "ref expected string, received number"].sort();

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


  it('Test case #78 should return errors ["content expected string,received null","ref should not be empty","ref string must contain at least 1 character(s)"] when body {"userId":"{{userId}}","content":null,"ref":""}', async () => {
    testNumber = 78;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": null, "ref": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content expected string, received null", "ref should not be empty", "ref string must contain at least 1 character(s)"].sort();

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


  it('Test case #79 should return errors ["content expected string,received null","ref required"] when body {"userId":"{{userId}}","content":null}', async () => {
    testNumber = 79;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": null };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content expected string, received null", "ref required"].sort();

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


  it('Test case #80 should return errors ["content expected string,received null","ref expected string,received null"] when body {"userId":"{{userId}}","content":null,"ref":null}', async () => {
    testNumber = 80;
    totalTests++;
    const payloadObj = { "userId": "{{userId}}", "content": null, "ref": null };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'ACTION.SEND_DM_MESSAGE',
        { "x-session-token": "aaaaaaaaaaaaaa" },
        resolvedData,
        contextData
      );

      const data = response.data;
      const expectJson = ["content expected string, received null", "ref expected string, received null"].sort();

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
      className: 'send-dm-message',
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
    const fileName = 'send-dm-message' + (chunkNumber ? `-chunk-null` : '') + '.result.json';
    const filePath = path.join(reportDir, fileName);
    fs.writeFileSync(filePath, JSON.stringify(testResult, null, 2), 'utf-8');

    console.log(`📝 Saved result for send-dm-message chunk single to ${filePath}`);
  });
});
