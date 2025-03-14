import { validateSendDmMessage } from '../validates/send-dm-message/validate-send-dm-message';
import fs from 'fs';
import path from 'path';
import { summarizeErrors, summaryFields, getTime } from '../helps/utils';
import { executeBeforeAllSteps, executeDelete } from '../functions';
import {
  resolveJsonVariables,
  resolveVariables,
} from '../helps/get-resolve-variables';
import { plainToClass } from 'class-transformer';
import { SendDmMessageResponse } from '../response/send-dm-message.response';
import { validateAfterLogic } from '../validates/send-dm-message/validate-send-dm-message-after';

describe('Testcase for send-dm-message', () => {
  let totalTests = 0;
  const passedLogic = 0;
  const failedTests = [];
  const logicTests = [];
  let passedTests = 0;
  let passed200 = 0;
  let headerRequest;
  let testNumber;
  let resolvedData;
  let nextStep = false;
  let messageIdArray;

  beforeAll(async () => {
    await executeBeforeAllSteps(["mockUser('duybang12345',2, 0)"]);

    headerRequest = {
      'Content-Type': 'application/json',
      'x-session-token': '{{token}}',
      'x-country-code': 'VN',
    };
  });
  afterEach(async () => {
    if (nextStep === true) {
    }
  });
  it('Test case # 1 with expect errors ["Could not resolve permission type"]', async () => {
    testNumber = 1;
    totalTests++;
    const payloadObj = { userId: '', content: '' };
    resolvedData = resolveJsonVariables(payloadObj);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

    try {
      const response = await fetch(requestUrl, {
        method: 'post',
        headers: resolveJsonVariables(headerRequest),
        body: JSON.stringify(resolvedData),
      });

      const data = await response.json();

      if (response.status === 201) {
        if (data.data) {
          expect(data.ok).toEqual(true);
          expect(data.data).not.toBeNull();
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          nextStep = true;
        }
      } else if (response.status === 200) {
        expect(data.ok).toEqual(true);
        if (data.data) {
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          expect(data.ok).toEqual(true);
          passed200++;
          passedTests++;
        }
      } else if (response.status === 400) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 400,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          errorDetails: errorMessage,
        });
      } else if (response.status === 403) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 403,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  it('Test case # 2 with expect errors ["Could not resolve permission type"]', async () => {
    testNumber = 2;
    totalTests++;
    const payloadObj = { userId: '', content: 12345 };
    resolvedData = resolveJsonVariables(payloadObj);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

    try {
      const response = await fetch(requestUrl, {
        method: 'post',
        headers: resolveJsonVariables(headerRequest),
        body: JSON.stringify(resolvedData),
      });

      const data = await response.json();

      if (response.status === 201) {
        if (data.data) {
          expect(data.ok).toEqual(true);
          expect(data.data).not.toBeNull();
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          nextStep = true;
        }
      } else if (response.status === 200) {
        expect(data.ok).toEqual(true);
        if (data.data) {
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          expect(data.ok).toEqual(true);
          passed200++;
          passedTests++;
        }
      } else if (response.status === 400) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 400,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          errorDetails: errorMessage,
        });
      } else if (response.status === 403) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 403,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  it('Test case # 3 with expect errors ["Could not resolve permission type"]', async () => {
    testNumber = 3;
    totalTests++;
    const payloadObj = { userId: '', content: 'abc123' };
    resolvedData = resolveJsonVariables(payloadObj);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

    try {
      const response = await fetch(requestUrl, {
        method: 'post',
        headers: resolveJsonVariables(headerRequest),
        body: JSON.stringify(resolvedData),
      });

      const data = await response.json();

      if (response.status === 201) {
        if (data.data) {
          expect(data.ok).toEqual(true);
          expect(data.data).not.toBeNull();
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          nextStep = true;
        }
      } else if (response.status === 200) {
        expect(data.ok).toEqual(true);
        if (data.data) {
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          expect(data.ok).toEqual(true);
          passed200++;
          passedTests++;
        }
      } else if (response.status === 400) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 400,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          errorDetails: errorMessage,
        });
      } else if (response.status === 403) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 403,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  it('Test case # 4 with expect errors ["Could not resolve permission type"]', async () => {
    testNumber = 4;
    totalTests++;
    const payloadObj = { userId: '', content: '' };
    resolvedData = resolveJsonVariables(payloadObj);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

    try {
      const response = await fetch(requestUrl, {
        method: 'post',
        headers: resolveJsonVariables(headerRequest),
        body: JSON.stringify(resolvedData),
      });

      const data = await response.json();

      if (response.status === 201) {
        if (data.data) {
          expect(data.ok).toEqual(true);
          expect(data.data).not.toBeNull();
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          nextStep = true;
        }
      } else if (response.status === 200) {
        expect(data.ok).toEqual(true);
        if (data.data) {
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          expect(data.ok).toEqual(true);
          passed200++;
          passedTests++;
        }
      } else if (response.status === 400) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 400,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          errorDetails: errorMessage,
        });
      } else if (response.status === 403) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 403,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  it('Test case # 5 with expect errors ["Could not resolve permission type"]', async () => {
    testNumber = 5;
    totalTests++;
    const payloadObj = {
      userId: '',
      content:
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    };
    resolvedData = resolveJsonVariables(payloadObj);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

    try {
      const response = await fetch(requestUrl, {
        method: 'post',
        headers: resolveJsonVariables(headerRequest),
        body: JSON.stringify(resolvedData),
      });

      const data = await response.json();

      if (response.status === 201) {
        if (data.data) {
          expect(data.ok).toEqual(true);
          expect(data.data).not.toBeNull();
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          nextStep = true;
        }
      } else if (response.status === 200) {
        expect(data.ok).toEqual(true);
        if (data.data) {
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          expect(data.ok).toEqual(true);
          passed200++;
          passedTests++;
        }
      } else if (response.status === 400) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 400,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          errorDetails: errorMessage,
        });
      } else if (response.status === 403) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 403,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  it('Test case # 6 with expect errors ["Could not resolve permission type"]', async () => {
    testNumber = 6;
    totalTests++;
    const payloadObj = { userId: 12345, content: '' };
    resolvedData = resolveJsonVariables(payloadObj);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

    try {
      const response = await fetch(requestUrl, {
        method: 'post',
        headers: resolveJsonVariables(headerRequest),
        body: JSON.stringify(resolvedData),
      });

      const data = await response.json();

      if (response.status === 201) {
        if (data.data) {
          expect(data.ok).toEqual(true);
          expect(data.data).not.toBeNull();
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          nextStep = true;
        }
      } else if (response.status === 200) {
        expect(data.ok).toEqual(true);
        if (data.data) {
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          expect(data.ok).toEqual(true);
          passed200++;
          passedTests++;
        }
      } else if (response.status === 400) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 400,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          errorDetails: errorMessage,
        });
      } else if (response.status === 403) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 403,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  it('Test case # 7 with expect errors ["Could not resolve permission type"]', async () => {
    testNumber = 7;
    totalTests++;
    const payloadObj = { userId: 12345, content: 12345 };
    resolvedData = resolveJsonVariables(payloadObj);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

    try {
      const response = await fetch(requestUrl, {
        method: 'post',
        headers: resolveJsonVariables(headerRequest),
        body: JSON.stringify(resolvedData),
      });

      const data = await response.json();

      if (response.status === 201) {
        if (data.data) {
          expect(data.ok).toEqual(true);
          expect(data.data).not.toBeNull();
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          nextStep = true;
        }
      } else if (response.status === 200) {
        expect(data.ok).toEqual(true);
        if (data.data) {
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          expect(data.ok).toEqual(true);
          passed200++;
          passedTests++;
        }
      } else if (response.status === 400) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 400,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          errorDetails: errorMessage,
        });
      } else if (response.status === 403) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 403,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  it('Test case # 8 with expect errors ["Could not resolve permission type"]', async () => {
    testNumber = 8;
    totalTests++;
    const payloadObj = { userId: 12345, content: 'abc123' };
    resolvedData = resolveJsonVariables(payloadObj);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

    try {
      const response = await fetch(requestUrl, {
        method: 'post',
        headers: resolveJsonVariables(headerRequest),
        body: JSON.stringify(resolvedData),
      });

      const data = await response.json();

      if (response.status === 201) {
        if (data.data) {
          expect(data.ok).toEqual(true);
          expect(data.data).not.toBeNull();
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          nextStep = true;
        }
      } else if (response.status === 200) {
        expect(data.ok).toEqual(true);
        if (data.data) {
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          expect(data.ok).toEqual(true);
          passed200++;
          passedTests++;
        }
      } else if (response.status === 400) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 400,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          errorDetails: errorMessage,
        });
      } else if (response.status === 403) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 403,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  it('Test case # 9 with expect errors ["Could not resolve permission type"]', async () => {
    testNumber = 9;
    totalTests++;
    const payloadObj = { userId: 12345, content: '' };
    resolvedData = resolveJsonVariables(payloadObj);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

    try {
      const response = await fetch(requestUrl, {
        method: 'post',
        headers: resolveJsonVariables(headerRequest),
        body: JSON.stringify(resolvedData),
      });

      const data = await response.json();

      if (response.status === 201) {
        if (data.data) {
          expect(data.ok).toEqual(true);
          expect(data.data).not.toBeNull();
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          nextStep = true;
        }
      } else if (response.status === 200) {
        expect(data.ok).toEqual(true);
        if (data.data) {
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          expect(data.ok).toEqual(true);
          passed200++;
          passedTests++;
        }
      } else if (response.status === 400) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 400,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          errorDetails: errorMessage,
        });
      } else if (response.status === 403) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 403,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  it('Test case # 10 with expect errors ["Could not resolve permission type"]', async () => {
    testNumber = 10;
    totalTests++;
    const payloadObj = {
      userId: 12345,
      content:
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    };
    resolvedData = resolveJsonVariables(payloadObj);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

    try {
      const response = await fetch(requestUrl, {
        method: 'post',
        headers: resolveJsonVariables(headerRequest),
        body: JSON.stringify(resolvedData),
      });

      const data = await response.json();

      if (response.status === 201) {
        if (data.data) {
          expect(data.ok).toEqual(true);
          expect(data.data).not.toBeNull();
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          nextStep = true;
        }
      } else if (response.status === 200) {
        expect(data.ok).toEqual(true);
        if (data.data) {
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          expect(data.ok).toEqual(true);
          passed200++;
          passedTests++;
        }
      } else if (response.status === 400) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 400,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          errorDetails: errorMessage,
        });
      } else if (response.status === 403) {
        const expectJson = ['Could not resolve permission type'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 403,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  it('Test case # 11 with expect errors ["content should not be empty","content byte length must fall into (1, 6000) range"]', async () => {
    testNumber = 11;
    totalTests++;
    const payloadObj = { userId: '{{userId_1}}', content: '' };
    resolvedData = resolveJsonVariables(payloadObj);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

    try {
      const response = await fetch(requestUrl, {
        method: 'post',
        headers: resolveJsonVariables(headerRequest),
        body: JSON.stringify(resolvedData),
      });

      const data = await response.json();

      if (response.status === 201) {
        if (data.data) {
          expect(data.ok).toEqual(true);
          expect(data.data).not.toBeNull();
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          nextStep = true;
        }
      } else if (response.status === 200) {
        expect(data.ok).toEqual(true);
        if (data.data) {
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          expect(data.ok).toEqual(true);
          passed200++;
          passedTests++;
        }
      } else if (response.status === 400) {
        const expectJson = [
          'content should not be empty',
          'content byte length must fall into (1, 6000) range',
        ].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 400,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          errorDetails: errorMessage,
        });
      } else if (response.status === 403) {
        const expectJson = [
          'content should not be empty',
          'content byte length must fall into (1, 6000) range',
        ].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 403,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  it('Test case # 12 with expect errors ["content must be a string"]', async () => {
    testNumber = 12;
    totalTests++;
    const payloadObj = { userId: '{{userId_1}}', content: 12345 };
    resolvedData = resolveJsonVariables(payloadObj);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

    try {
      const response = await fetch(requestUrl, {
        method: 'post',
        headers: resolveJsonVariables(headerRequest),
        body: JSON.stringify(resolvedData),
      });

      const data = await response.json();

      if (response.status === 201) {
        if (data.data) {
          expect(data.ok).toEqual(true);
          expect(data.data).not.toBeNull();
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          nextStep = true;
        }
      } else if (response.status === 200) {
        expect(data.ok).toEqual(true);
        if (data.data) {
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          expect(data.ok).toEqual(true);
          passed200++;
          passedTests++;
        }
      } else if (response.status === 400) {
        const expectJson = ['content must be a string'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 400,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          errorDetails: errorMessage,
        });
      } else if (response.status === 403) {
        const expectJson = ['content must be a string'].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 403,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  it('Test case # 13 with expect errors []', async () => {
    testNumber = 13;
    totalTests++;
    const payloadObj = { userId: '{{userId_1}}', content: 'abc123' };
    resolvedData = resolveJsonVariables(payloadObj);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

    try {
      const response = await fetch(requestUrl, {
        method: 'post',
        headers: resolveJsonVariables(headerRequest),
        body: JSON.stringify(resolvedData),
      });

      const data = await response.json();

      if (response.status === 201) {
        if (data.data) {
          expect(data.ok).toEqual(true);
          expect(data.data).not.toBeNull();
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          nextStep = true;
        }
      } else if (response.status === 200) {
        expect(data.ok).toEqual(true);
        if (data.data) {
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          expect(data.ok).toEqual(true);
          passed200++;
          passedTests++;
        }
      } else if (response.status === 400) {
        const expectJson = [].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 400,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          errorDetails: errorMessage,
        });
      } else if (response.status === 403) {
        const expectJson = [].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 403,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  it('Test case # 14 with expect errors ["content should not be empty","content byte length must fall into (1, 6000) range"]', async () => {
    testNumber = 14;
    totalTests++;
    const payloadObj = { userId: '{{userId_1}}', content: '' };
    resolvedData = resolveJsonVariables(payloadObj);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

    try {
      const response = await fetch(requestUrl, {
        method: 'post',
        headers: resolveJsonVariables(headerRequest),
        body: JSON.stringify(resolvedData),
      });

      const data = await response.json();

      if (response.status === 201) {
        if (data.data) {
          expect(data.ok).toEqual(true);
          expect(data.data).not.toBeNull();
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          nextStep = true;
        }
      } else if (response.status === 200) {
        expect(data.ok).toEqual(true);
        if (data.data) {
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          expect(data.ok).toEqual(true);
          passed200++;
          passedTests++;
        }
      } else if (response.status === 400) {
        const expectJson = [
          'content should not be empty',
          'content byte length must fall into (1, 6000) range',
        ].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 400,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          errorDetails: errorMessage,
        });
      } else if (response.status === 403) {
        const expectJson = [
          'content should not be empty',
          'content byte length must fall into (1, 6000) range',
        ].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 403,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  it('Test case # 15 with expect errors ["content byte length must fall into (1, 6000) range"]', async () => {
    testNumber = 15;
    totalTests++;
    const payloadObj = {
      userId: '{{userId_1}}',
      content:
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    };
    resolvedData = resolveJsonVariables(payloadObj);

    const requestUrl = `${globalThis.url}/Message/SendDMMessage`;

    try {
      const response = await fetch(requestUrl, {
        method: 'post',
        headers: resolveJsonVariables(headerRequest),
        body: JSON.stringify(resolvedData),
      });

      const data = await response.json();

      if (response.status === 201) {
        if (data.data) {
          expect(data.ok).toEqual(true);
          expect(data.data).not.toBeNull();
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          nextStep = true;
        }
      } else if (response.status === 200) {
        expect(data.ok).toEqual(true);
        if (data.data) {
          const dtoInstance = plainToClass(SendDmMessageResponse, data);
          const validateLogic = await validateSendDmMessage(
            dtoInstance,
            resolvedData,
          );
          if (validateLogic.length !== 0) {
            nextStep = false;
            logicTests.push({
              testcase: testNumber,
              errorLogic: validateLogic,
            });
          } else {
            nextStep = true;
          }
        } else {
          expect(data.ok).toEqual(true);
          passed200++;
          passedTests++;
        }
      } else if (response.status === 400) {
        const expectJson = [
          'content byte length must fall into (1, 6000) range',
        ].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 400,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else if (response.status === 500) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 500,
          errorDetails: errorMessage,
        });
        throw new Error(errorMessage);
      } else if (response.status === 404) {
        const errorMessage = data.error?.details;
        nextStep = false;
        failedTests.push({
          testcase: testNumber,
          code: 404,
          errorDetails: errorMessage,
        });
      } else if (response.status === 403) {
        const expectJson = [
          'content byte length must fall into (1, 6000) range',
        ].sort();
        const expectDetails = Array.isArray(data?.error?.details)
          ? data.error.details
          : [];
        const softExpectDetails = [...expectDetails].sort();
        try {
          expect(data.ok).toEqual(false);
          expect(data.data).toEqual(null);
          expect(expectJson).toEqual(softExpectDetails);
          passedTests++;
          nextStep = false;
        } catch (error) {
          const { missing, extra } = summaryFields(
            error.matcherResult.actual,
            error.matcherResult.expected,
          );
          nextStep = false;
          failedTests.push({
            testcase: testNumber,
            code: 403,
            missing: missing || [],
            extra: extra || [],
          });
          throw new Error(error);
        }
      } else {
        console.log('unexpected:', data);
        throw new Error(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  afterAll(async () => {
    const folderPath = path.join(__dirname, '../reports');

    const folderPathLogic = path.join(__dirname, '../reports/send-dm-message');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    if (!fs.existsSync(folderPathLogic)) {
      fs.mkdirSync(folderPathLogic, { recursive: true });
    }
    const summary = summarizeErrors(
      failedTests,
      totalTests,
      passedLogic,
      passed200,
    );
    const resultContent = `
=== Test Reports for DTO "send-dm-message" ===
Host: ${globalThis.url}
Endpoint: /Message/SendDMMessage
Summary: 
Total Tests: ${totalTests}
Passed Tests: ${passedTests}
Failed Tests: ${failedTests.length}
Status Code:
  200: ${summary.statusCodes[200] || 0}
  201: ${summary.statusCodes[201] || 0}
  400: ${summary.statusCodes[400] || 0}
  403: ${summary.statusCodes[403] || 0}
  404: ${summary.statusCodes[404] || 0}
  500: ${summary.statusCodes[500] || 0}
Uniques Error:
  ${Array.from(summary.uniqueErrors.entries())
    .map(
      ([error, count]) => `${error}: ${count} 
 `,
    )
    .join('')}
Failed Test Details:
${failedTests
  .map(
    (failCase) => `
  - Testcase #${failCase.testcase}
    Missing Errors: ${failCase.missing ? JSON.stringify(failCase.missing) : "''"}
    Status Code: ${failCase.code ? JSON.stringify(failCase.code) : "''"}
    Extra Errors: ${failCase.extra ? JSON.stringify(failCase.extra) : "''"}
    Detail Errors: ${failCase.errorDetails ? JSON.stringify(failCase.errorDetails) : "''"}`,
  )
  .join('')}`;

    const resultLogicError = `
    === Test Reports Logic for DTO "send-dm-message" ===
    Host: ${globalThis.url}
    Endpoint: /Message/SendDMMessage
    Error: 
    ${logicTests
      .map(
        (logicCaseFail) => `
    - Testcase #${logicCaseFail.testcase}
      Logic Errors: ${logicCaseFail.errorLogic ? JSON.stringify(logicCaseFail.errorLogic) : "''"}
  `,
      )
      .join('')}`;

    const resultFilePath = path.join(folderPath, 'send-dm-message.txt');
    const resultFilePathLogic = path.join(
      folderPathLogic,
      `send-dm-message.${getTime()}.txt`,
    );
    fs.writeFileSync(resultFilePath, resultContent, 'utf-8');
    fs.writeFileSync(resultFilePathLogic, resultLogicError, 'utf-8');
    console.log(`Success: ${resultFilePath}`);
    await executeDelete(
      ["deleteMessageForEveryone('0', {{channelId}}, {{messageId}})"],
      headerRequest,
    );
  });
});
