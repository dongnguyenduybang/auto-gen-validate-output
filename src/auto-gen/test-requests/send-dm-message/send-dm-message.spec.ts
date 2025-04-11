
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
  let resolvedData, pathRequest, methodRequest
  let globalContext, resolvedHeader
  beforeAll(async () => {
    testType = 'request'
    globalContext = new TestContext()
    const resultStep = await executeAllSteps([{ "action": "mockUser" }], globalContext)
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
    pathRequest = "/Message/SendDMMessage"
    methodRequest = "POST"
  })



  it('Test case #1 with expect errors  ["Could not resolve permission type"] ', async () => {
    testNumber = 1;
    totalTests++;
    const payloadObj = { "userId": "", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

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
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
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
    const payloadObj = { "userId": "", "content": 12345 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

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
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
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
    const payloadObj = { "userId": "", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

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
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
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
    const payloadObj = { "userId": "", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

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
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
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
    const payloadObj = { "userId": "", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

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
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
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
    const payloadObj = { "userId": 12345, "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

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
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
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
    const payloadObj = { "userId": 12345, "content": 12345 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

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
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
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
    const payloadObj = { "userId": 12345, "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

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
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
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
    const payloadObj = { "userId": 12345, "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

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
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
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
    const payloadObj = { "userId": 12345, "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

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
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
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


  it('Test case #11 with expect errors  ["content should not be empty","content\'s byte length must fall into (1,6000) range"] ', async () => {
    testNumber = 11;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

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
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
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


  it('Test case #12 with expect errors  ["content must be a string"] ', async () => {
    testNumber = 12;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "content": 12345 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

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
        const expectJson = ["content must be a string"].sort()
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
        const expectJson = ["content must be a string"].sort();
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
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
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


  it('Test case #13 with expect errors  [] ', async () => {
    testNumber = 13;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "content": "test123123" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

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
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
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


  it('Test case #14 with expect errors  ["content should not be empty","content\'s byte length must fall into (1,6000) range"] ', async () => {
    testNumber = 14;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "content": "" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

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
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
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


  it('Test case #15 with expect errors  ["content\'s byte length must fall into (1,6000) range"] ', async () => {
    testNumber = 15;
    totalTests++;
    const payloadObj = { "userId": "{{userId1}}", "content": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" };
    resolvedData = resolveVariables(payloadObj, globalContext);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

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
          failedTests.push({
            testcase: testNumber,
            code: 403,
            body: resolvedData,
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
    const resultStep = await executeAllSteps([{ "action": "deleteMockedUsers", "body": { "prefix": "testfaker" }, "header": { "token": "{{token}}" } }], globalContext)
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
    const summary = summarizeErrors(failedTests, codedTest, passed200, passed201);
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

