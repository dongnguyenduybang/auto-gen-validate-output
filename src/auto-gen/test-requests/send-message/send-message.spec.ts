
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { getTime, summarizeErrors, summaryFields } from '../../utils/helper';
import { executeAllSteps, resolveVariables } from '../../utils/test-executor';
import { TestContext } from '../../utils/text-context';
describe('Testcase for send-message', () => {
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
  let resolvedData, pathRequest, methodRequest
  let globalContext, resolvedHeader
  beforeAll(async () => {
    testType = 'request'
    globalContext = new TestContext()
    const resultStep = await executeAllSteps([{ "action": "mockUser" }, { "action": "createChannel" }], globalContext)
    resultStep.forEach((step) => {
      failedStep.push({
        type: step.type,
        status: step.status,
        stepName: step.stepName,
        error: step.error
      })
    })
    headerRequest = { "Content-Type": "application/json", "x-session-token": "{{token}}", "x-country-code": "VN" }
    resolvedHeader = resolveVariables(headerRequest, globalContext)
    pathRequest = "/Message/SendMessage"
  })



  it('Test case #1 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 1;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": 123, "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #2 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 2;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": 123, "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #3 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 3;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": 123, "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #4 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 4;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": 123, "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #5 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 5;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": 123, "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #6 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 6;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #7 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 7;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": 123, "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #8 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 8;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "check_ulid", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #9 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 9;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "check_ulid", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #10 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 10;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "check_ulid", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #11 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 11;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "check_ulid", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #12 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 12;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "check_ulid", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #13 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 13;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #14 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 14;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "check_ulid", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #15 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 15;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "0", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #16 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 16;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "0", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #17 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 17;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "0", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #18 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 18;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "0", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #19 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 19;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "0", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #20 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 20;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "0" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #21 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 21;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "0", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #22 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 22;
    totalTests++;
    const payloadObj = { "channelId": 123, "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #23 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 23;
    totalTests++;
    const payloadObj = { "channelId": 123, "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #24 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 24;
    totalTests++;
    const payloadObj = { "channelId": 123, "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #25 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 25;
    totalTests++;
    const payloadObj = { "channelId": 123, "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #26 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 26;
    totalTests++;
    const payloadObj = { "channelId": 123, "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #27 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 27;
    totalTests++;
    const payloadObj = { "channelId": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #28 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 28;
    totalTests++;
    const payloadObj = { "channelId": 123, "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #29 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 29;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #30 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 30;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #31 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 31;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #32 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 32;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #33 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 33;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #34 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 34;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #35 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 35;
    totalTests++;
    const payloadObj = { "channelId": 123, "workspaceId": "", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #36 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 36;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": 123, "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #37 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 37;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": 123, "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #38 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 38;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": 123, "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #39 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 39;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": 123, "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #40 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 40;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": 123, "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #41 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 41;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #42 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 42;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": 123, "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #43 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 43;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "check_ulid", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #44 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 44;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "check_ulid", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #45 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 45;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "check_ulid", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #46 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 46;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "check_ulid", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #47 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 47;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "check_ulid", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #48 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 48;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #49 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 49;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "check_ulid", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #50 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 50;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "0", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #51 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 51;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "0", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #52 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 52;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "0", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #53 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 53;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "0", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #54 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 54;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "0", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #55 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 55;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "0" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #56 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 56;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "0", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #57 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 57;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #58 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 58;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #59 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 59;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #60 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 60;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #61 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 61;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #62 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 62;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #63 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 63;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #64 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 64;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #65 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 65;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #66 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 66;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #67 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 67;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #68 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 68;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #69 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 69;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #70 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 70;
    totalTests++;
    const payloadObj = { "channelId": "check_ulid", "workspaceId": "", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #71 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 71;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": 123, "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #72 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 72;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": 123, "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #73 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 73;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": 123, "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #74 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 74;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": 123, "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #75 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 75;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": 123, "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #76 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 76;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #77 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 77;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": 123, "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #78 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 78;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "check_ulid", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #79 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 79;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "check_ulid", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #80 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 80;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "check_ulid", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #81 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 81;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "check_ulid", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #82 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 82;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "check_ulid", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #83 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 83;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #84 with expect errors  ["Invalid channel"] ', async () => {
    testNumber = 84;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "check_ulid", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Invalid channel"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Invalid channel"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #85 with expect errors  ["content must be a string","content\'s byte length must fall into (1,6000) range"] ', async () => {
    testNumber = 85;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "0", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["content must be a string", "content's byte length must fall into (1, 6000) range"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["content must be a string", "content's byte length must fall into (1, 6000) range"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #86 with expect errors  [] ', async () => {
    testNumber = 86;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "0", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = [].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = [].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #87 with expect errors  ["content should not be empty","content\'s byte length must fall into (1,6000) range"] ', async () => {
    testNumber = 87;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "0", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["content should not be empty", "content's byte length must fall into (1, 6000) range"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["content should not be empty", "content's byte length must fall into (1, 6000) range"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #88 with expect errors  ["content\'s byte length must fall into (1,6000) range"] ', async () => {
    testNumber = 88;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "0", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["content's byte length must fall into (1, 6000) range"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["content's byte length must fall into (1, 6000) range"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #89 with expect errors  [] ', async () => {
    testNumber = 89;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "0", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = [].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = [].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #90 with expect errors  ["content should not be null or undefined","content should not be empty","content must be a string","content\'s byte length must fall into (1,6000) range"] ', async () => {
    testNumber = 90;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "0" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["content should not be null or undefined", "content should not be empty", "content must be a string", "content's byte length must fall into (1, 6000) range"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["content should not be null or undefined", "content should not be empty", "content must be a string", "content's byte length must fall into (1, 6000) range"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #91 with expect errors  ["content should not be empty","content\'s byte length must fall into (1,6000) range"] ', async () => {
    testNumber = 91;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "0", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["content should not be empty", "content's byte length must fall into (1, 6000) range"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["content should not be empty", "content's byte length must fall into (1, 6000) range"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #92 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 92;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #93 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 93;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #94 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 94;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #95 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 95;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #96 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 96;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #97 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 97;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #98 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 98;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #99 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 99;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #100 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 100;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #101 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 101;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #102 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 102;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #103 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 103;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #104 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 104;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #105 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 105;
    totalTests++;
    const payloadObj = { "channelId": "{{channelId}}", "workspaceId": "", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #106 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 106;
    totalTests++;
    const payloadObj = { "workspaceId": 123, "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #107 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 107;
    totalTests++;
    const payloadObj = { "workspaceId": 123, "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #108 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 108;
    totalTests++;
    const payloadObj = { "workspaceId": 123, "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #109 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 109;
    totalTests++;
    const payloadObj = { "workspaceId": 123, "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #110 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 110;
    totalTests++;
    const payloadObj = { "workspaceId": 123, "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #111 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 111;
    totalTests++;
    const payloadObj = { "workspaceId": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #112 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 112;
    totalTests++;
    const payloadObj = { "workspaceId": 123, "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #113 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 113;
    totalTests++;
    const payloadObj = { "workspaceId": "check_ulid", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #114 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 114;
    totalTests++;
    const payloadObj = { "workspaceId": "check_ulid", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #115 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 115;
    totalTests++;
    const payloadObj = { "workspaceId": "check_ulid", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #116 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 116;
    totalTests++;
    const payloadObj = { "workspaceId": "check_ulid", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #117 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 117;
    totalTests++;
    const payloadObj = { "workspaceId": "check_ulid", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #118 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 118;
    totalTests++;
    const payloadObj = { "workspaceId": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #119 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 119;
    totalTests++;
    const payloadObj = { "workspaceId": "check_ulid", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #120 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 120;
    totalTests++;
    const payloadObj = { "workspaceId": "0", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #121 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 121;
    totalTests++;
    const payloadObj = { "workspaceId": "0", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #122 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 122;
    totalTests++;
    const payloadObj = { "workspaceId": "0", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #123 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 123;
    totalTests++;
    const payloadObj = { "workspaceId": "0", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #124 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 124;
    totalTests++;
    const payloadObj = { "workspaceId": "0", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #125 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 125;
    totalTests++;
    const payloadObj = { "workspaceId": "0" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #126 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 126;
    totalTests++;
    const payloadObj = { "workspaceId": "0", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #127 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 127;
    totalTests++;
    const payloadObj = { "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #128 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 128;
    totalTests++;
    const payloadObj = { "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #129 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 129;
    totalTests++;
    const payloadObj = { "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #130 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 130;
    totalTests++;
    const payloadObj = { "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #131 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 131;
    totalTests++;
    const payloadObj = { "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #132 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 132;
    totalTests++;
    const payloadObj = {};
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #133 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 133;
    totalTests++;
    const payloadObj = { "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #134 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 134;
    totalTests++;
    const payloadObj = { "workspaceId": "", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #135 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 135;
    totalTests++;
    const payloadObj = { "workspaceId": "", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #136 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 136;
    totalTests++;
    const payloadObj = { "workspaceId": "", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #137 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 137;
    totalTests++;
    const payloadObj = { "workspaceId": "", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #138 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 138;
    totalTests++;
    const payloadObj = { "workspaceId": "", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #139 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 139;
    totalTests++;
    const payloadObj = { "workspaceId": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #140 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 140;
    totalTests++;
    const payloadObj = { "workspaceId": "", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #141 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 141;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": 123, "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #142 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 142;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": 123, "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #143 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 143;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": 123, "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #144 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 144;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": 123, "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #145 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 145;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": 123, "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #146 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 146;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #147 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 147;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": 123, "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #148 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 148;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "check_ulid", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #149 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 149;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "check_ulid", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #150 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 150;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "check_ulid", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #151 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 151;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "check_ulid", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #152 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 152;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "check_ulid", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #153 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 153;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #154 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 154;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "check_ulid", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #155 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 155;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "0", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #156 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 156;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "0", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #157 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 157;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "0", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #158 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 158;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "0", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #159 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 159;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "0", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #160 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 160;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "0" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #161 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 161;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "0", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #162 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 162;
    totalTests++;
    const payloadObj = { "channelId": "", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #163 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 163;
    totalTests++;
    const payloadObj = { "channelId": "", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #164 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 164;
    totalTests++;
    const payloadObj = { "channelId": "", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #165 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 165;
    totalTests++;
    const payloadObj = { "channelId": "", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #166 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 166;
    totalTests++;
    const payloadObj = { "channelId": "", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #167 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 167;
    totalTests++;
    const payloadObj = { "channelId": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #168 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 168;
    totalTests++;
    const payloadObj = { "channelId": "", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #169 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 169;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "", "content": 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #170 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 170;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "", "content": "check_ulid" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #171 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 171;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #172 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 172;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #173 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 173;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #174 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 174;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });


  it('Test case #175 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 175;
    totalTests++;
    const payloadObj = { "channelId": "", "workspaceId": "", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendMessage`;

    try {
      const response = await axios.post(
        requestUrl,
        resolvedData,
        {
          headers: { ...resolvedHeader },
          validateStatus: () => true
        }
      );

      const data = response.data;

      if (response.status === 201) {
        passedTests++;
        passed201++;
      } else if (response.status === 200) {
        passedTests++;
        passed200++;
      } else if (response.status === 400) {
        const expectJson = ["Could not resolve permission type"].sort()
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 400,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 403) {
        const expectJson = ["Could not resolve permission type"].sort();
        let expectDetails = Array.isArray(response.data) ? response.data : [response.data];
        expectDetails = expectDetails.sort();
        try {
          expect(expectJson).toEqual(expectDetails);
          passedTests++
          codedTest.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
          })
        } catch (error) {
          const { missing, extra } = summaryFields(error.matcherResult.actual, error.matcherResult.expected);
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
            missing: missing || [],
            extra: extra || []
          })
          throw new Error(error);
        }
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          body: resolvedData,
          errorDetails: errorMessage,
        });
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error)
    }
  });

  afterAll(async () => {
    const resultStep = await executeAllSteps([], globalContext)
    resultStep.forEach((step) => {
      failedStep.push({
        type: step.type,
        status: step.status,
        stepName: step.stepName,
        error: step.error
      })
    })
    const folderPath = path.join(__dirname, '../reports/send-message');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    const classNames = `send-message`;
    const summary = summarizeErrors(failedTests, codedTest, passed200, passed201);
    const reportFileName = `send-message-request-${getTime()}.report.txt`;
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

