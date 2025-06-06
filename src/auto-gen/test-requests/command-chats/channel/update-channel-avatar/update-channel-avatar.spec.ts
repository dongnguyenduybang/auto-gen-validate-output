import fs from 'fs';
import path from 'path';
import {
  summaryFields,
  resolveCallAPI,
  resolveVariables,
} from '../../../../utils/helper';
import { TestResult } from '../../../../utils/declarations';
import { executeSteps } from '../../../../utils/text-execute-test';
import { TestContext } from '../../../../utils/text-context';
import { UpdateChannelAvatarRequest } from '././update-channel-avatar.request';
describe('Testcase for update-channel-avatar', () => {
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

  beforeAll(async () => {
    testType = 'request';
    globalContext = globalThis.globalContext;
    context = new TestContext();
    const beforeAllSteps =
      UpdateChannelAvatarRequest.options?.find((option) => option.beforeAll)
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
    } else {
      contextData = globalContext;
    }
  });
  beforeEach(async () => {
    testCaseNumber++;
    const beforeEachSteps =
      UpdateChannelAvatarRequest.options?.find((option) => option.beforeEach)
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
    } else {
      contextData = globalContext;
    }
  });

  it('Test case #1 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 1;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #2 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":123,"avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 2;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      channelId: 123,
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          channelId: 123,
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #3 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 3;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #4 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 4;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #5 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 5;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      channelId: '',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          channelId: '',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #6 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"invalid_value","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 6;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      channelId: 'invalid_value',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          channelId: 'invalid_value',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #7 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","avatarPath":123}', async () => {
    testNumber = 7;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      channelId: '{{channelId}}',
      avatarPath: 123,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: 123, channelId: '{{channelId}}', avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #8 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 8;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #9 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}"}', async () => {
    testNumber = 9;
    totalTests++;
    const payloadObj = { workspaceId: 123, channelId: '{{channelId}}' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: 123, channelId: '{{channelId}}' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #10 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","avatarPath":""}', async () => {
    testNumber = 10;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      channelId: '{{channelId}}',
      avatarPath: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: 123, channelId: '{{channelId}}', avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #11 should return errors [] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 11;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
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
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #12 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 12;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: 123,
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: 123,
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #13 should return errors [] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 13;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
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
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #14 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 14;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Unsupported permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #15 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 15;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: '',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #16 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 16;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: 'invalid_value',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: 'invalid_value',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #17 should return errors ["avatarPath expected string,received number"] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":123}', async () => {
    testNumber = 17;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath: 123,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '{{channelId}}', avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatarPath expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #18 should return errors [] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 18;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
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
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #19 should return errors ["avatarPath required","avatarPath invalid url"] when body {"workspaceId":"0","channelId":"{{channelId}}"}', async () => {
    testNumber = 19;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: '{{channelId}}' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '{{channelId}}' },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatarPath required',
        'avatarPath invalid url',
      ].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #20 should return errors ["avatarPath should not be empty","avatarPath invalid url"] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":""}', async () => {
    testNumber = 20;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '{{channelId}}', avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatarPath should not be empty',
        'avatarPath invalid url',
      ].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #21 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 21;
    totalTests++;
    const payloadObj = {
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #22 should return errors ["Could not resolve permission type"] when body {"channelId":123,"avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 22;
    totalTests++;
    const payloadObj = {
      channelId: 123,
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          channelId: 123,
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #23 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 23;
    totalTests++;
    const payloadObj = {
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #24 should return errors ["Could not resolve permission type"] when body {"avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 24;
    totalTests++;
    const payloadObj = {
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #25 should return errors ["Could not resolve permission type"] when body {"channelId":"","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 25;
    totalTests++;
    const payloadObj = {
      channelId: '',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          channelId: '',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #26 should return errors ["Could not resolve permission type"] when body {"channelId":"invalid_value","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 26;
    totalTests++;
    const payloadObj = {
      channelId: 'invalid_value',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          channelId: 'invalid_value',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #27 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","avatarPath":123}', async () => {
    testNumber = 27;
    totalTests++;
    const payloadObj = { channelId: '{{channelId}}', avatarPath: 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { channelId: '{{channelId}}', avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #28 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 28;
    totalTests++;
    const payloadObj = {
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #29 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}"}', async () => {
    testNumber = 29;
    totalTests++;
    const payloadObj = { channelId: '{{channelId}}' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { channelId: '{{channelId}}' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #30 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","avatarPath":""}', async () => {
    testNumber = 30;
    totalTests++;
    const payloadObj = { channelId: '{{channelId}}', avatarPath: '' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { channelId: '{{channelId}}', avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #31 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 31;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #32 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":123,"avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 32;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      channelId: 123,
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          channelId: 123,
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #33 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 33;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #34 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 34;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #35 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 35;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      channelId: '',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          channelId: '',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #36 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"invalid_value","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 36;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      channelId: 'invalid_value',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          channelId: 'invalid_value',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #37 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","avatarPath":123}', async () => {
    testNumber = 37;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      channelId: '{{channelId}}',
      avatarPath: 123,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '', channelId: '{{channelId}}', avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #38 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 38;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #39 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}"}', async () => {
    testNumber = 39;
    totalTests++;
    const payloadObj = { workspaceId: '', channelId: '{{channelId}}' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '', channelId: '{{channelId}}' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #40 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","avatarPath":""}', async () => {
    testNumber = 40;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      channelId: '{{channelId}}',
      avatarPath: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '', channelId: '{{channelId}}', avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #41 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 41;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #42 should return errors ["Could not resolve permission type"] when body {"workspaceId":"invalid_value","channelId":123,"avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 42;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      channelId: 123,
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          channelId: 123,
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #43 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 43;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #44 should return errors ["Unsupported permission type"] when body {"workspaceId":"invalid_value","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 44;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Unsupported permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #45 should return errors ["Could not resolve permission type"] when body {"workspaceId":"invalid_value","channelId":"","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 45;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      channelId: '',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          channelId: '',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #46 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"invalid_value","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 46;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      channelId: 'invalid_value',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          channelId: 'invalid_value',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #47 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","avatarPath":123}', async () => {
    testNumber = 47;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      channelId: '{{channelId}}',
      avatarPath: 123,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          channelId: '{{channelId}}',
          avatarPath: 123,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #48 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 48;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #49 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}"}', async () => {
    testNumber = 49;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      channelId: '{{channelId}}',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: 'invalid_value', channelId: '{{channelId}}' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #50 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","avatarPath":""}', async () => {
    testNumber = 50;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      channelId: '{{channelId}}',
      avatarPath: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          channelId: '{{channelId}}',
          avatarPath: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #51 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 51;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: 123,
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: 123,
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #52 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":123,"avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 52;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      channelId: 123,
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          channelId: 123,
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #53 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 53;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: 123,
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: 123,
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #54 should return errors ["Could not resolve permission type"] when body {"channelId":123,"avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 54;
    totalTests++;
    const payloadObj = {
      channelId: 123,
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          channelId: 123,
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #55 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":123,"avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 55;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      channelId: 123,
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          channelId: 123,
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #56 should return errors ["Could not resolve permission type"] when body {"workspaceId":"invalid_value","channelId":123,"avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 56;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      channelId: 123,
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          channelId: 123,
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #57 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"avatarPath":123}', async () => {
    testNumber = 57;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: 123, avatarPath: 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: 123, avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #58 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 58;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: 123,
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: 123,
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #59 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123}', async () => {
    testNumber = 59;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #60 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"avatarPath":""}', async () => {
    testNumber = 60;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: 123, avatarPath: '' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: 123, avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #61 should return errors [] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 61;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
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
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #62 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 62;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #63 should return errors [] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 63;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
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
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #64 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 64;
    totalTests++;
    const payloadObj = {
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #65 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 65;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #66 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 66;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #67 should return errors ["avatarPath expected string,received number"] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":123}', async () => {
    testNumber = 67;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath: 123,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '{{channelId}}', avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatarPath expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #68 should return errors [] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 68;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
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
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #69 should return errors ["avatarPath required","avatarPath invalid url"] when body {"workspaceId":"0","channelId":"{{channelId}}"}', async () => {
    testNumber = 69;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: '{{channelId}}' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '{{channelId}}' },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatarPath required',
        'avatarPath invalid url',
      ].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #70 should return errors ["avatarPath should not be empty","avatarPath invalid url"] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":""}', async () => {
    testNumber = 70;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '{{channelId}}', avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatarPath should not be empty',
        'avatarPath invalid url',
      ].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #71 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 71;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Unsupported permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #72 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 72;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #73 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 73;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Unsupported permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #74 should return errors ["Could not resolve permission type"] when body {"avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 74;
    totalTests++;
    const payloadObj = {
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #75 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 75;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #76 should return errors ["Unsupported permission type"] when body {"workspaceId":"invalid_value","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 76;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Unsupported permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #77 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","avatarPath":123}', async () => {
    testNumber = 77;
    totalTests++;
    const payloadObj = { workspaceId: '0', avatarPath: 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Unsupported permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #78 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 78;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Unsupported permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #79 should return errors ["Unsupported permission type"] when body {"workspaceId":"0"}', async () => {
    testNumber = 79;
    totalTests++;
    const payloadObj = { workspaceId: '0' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Unsupported permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #80 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","avatarPath":""}', async () => {
    testNumber = 80;
    totalTests++;
    const payloadObj = { workspaceId: '0', avatarPath: '' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Unsupported permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #81 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 81;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: '',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #82 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 82;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      channelId: '',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          channelId: '',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #83 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 83;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: '',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #84 should return errors ["Could not resolve permission type"] when body {"channelId":"","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 84;
    totalTests++;
    const payloadObj = {
      channelId: '',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          channelId: '',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #85 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 85;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      channelId: '',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          channelId: '',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #86 should return errors ["Could not resolve permission type"] when body {"workspaceId":"invalid_value","channelId":"","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 86;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      channelId: '',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          channelId: '',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #87 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","avatarPath":123}', async () => {
    testNumber = 87;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: '', avatarPath: 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '', avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #88 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 88;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: '',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #89 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":""}', async () => {
    testNumber = 89;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: '' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #90 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","avatarPath":""}', async () => {
    testNumber = 90;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: '', avatarPath: '' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '', avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #91 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 91;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: 'invalid_value',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: 'invalid_value',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #92 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"invalid_value","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 92;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      channelId: 'invalid_value',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          channelId: 'invalid_value',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #93 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 93;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: 'invalid_value',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: 'invalid_value',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #94 should return errors ["Could not resolve permission type"] when body {"channelId":"invalid_value","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 94;
    totalTests++;
    const payloadObj = {
      channelId: 'invalid_value',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          channelId: 'invalid_value',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #95 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"invalid_value","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 95;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      channelId: 'invalid_value',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          channelId: 'invalid_value',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #96 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"invalid_value","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 96;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      channelId: 'invalid_value',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          channelId: 'invalid_value',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #97 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","avatarPath":123}', async () => {
    testNumber = 97;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: 'invalid_value',
      avatarPath: 123,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: 'invalid_value', avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #98 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 98;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: 'invalid_value',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: 'invalid_value',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #99 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value"}', async () => {
    testNumber = 99;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: 'invalid_value' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: 'invalid_value' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #100 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","avatarPath":""}', async () => {
    testNumber = 100;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: 'invalid_value',
      avatarPath: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: 'invalid_value', avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #101 should return errors ["avatarPath expected string,received number"] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":123}', async () => {
    testNumber = 101;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath: 123,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '{{channelId}}', avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatarPath expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #102 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","avatarPath":123}', async () => {
    testNumber = 102;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      channelId: '{{channelId}}',
      avatarPath: 123,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: 123, channelId: '{{channelId}}', avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #103 should return errors ["avatarPath expected string,received number"] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":123}', async () => {
    testNumber = 103;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath: 123,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '{{channelId}}', avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatarPath expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #104 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","avatarPath":123}', async () => {
    testNumber = 104;
    totalTests++;
    const payloadObj = { channelId: '{{channelId}}', avatarPath: 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { channelId: '{{channelId}}', avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #105 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","avatarPath":123}', async () => {
    testNumber = 105;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      channelId: '{{channelId}}',
      avatarPath: 123,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '', channelId: '{{channelId}}', avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #106 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","avatarPath":123}', async () => {
    testNumber = 106;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      channelId: '{{channelId}}',
      avatarPath: 123,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          channelId: '{{channelId}}',
          avatarPath: 123,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #107 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"avatarPath":123}', async () => {
    testNumber = 107;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: 123, avatarPath: 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: 123, avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #108 should return errors ["avatarPath expected string,received number"] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":123}', async () => {
    testNumber = 108;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath: 123,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '{{channelId}}', avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatarPath expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #109 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","avatarPath":123}', async () => {
    testNumber = 109;
    totalTests++;
    const payloadObj = { workspaceId: '0', avatarPath: 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Unsupported permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #110 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","avatarPath":123}', async () => {
    testNumber = 110;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: '', avatarPath: 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '', avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #111 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","avatarPath":123}', async () => {
    testNumber = 111;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: 'invalid_value',
      avatarPath: 123,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: 'invalid_value', avatarPath: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #112 should return errors [] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 112;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
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
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #113 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 113;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #114 should return errors [] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 114;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
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
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #115 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 115;
    totalTests++;
    const payloadObj = {
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #116 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 116;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #117 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 117;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #118 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 118;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: 123,
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: 123,
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #119 should return errors [] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 119;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
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
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #120 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 120;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Unsupported permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #121 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 121;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: '',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #122 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 122;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: 'invalid_value',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: 'invalid_value',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #123 should return errors ["avatarPath required","avatarPath invalid url"] when body {"workspaceId":"0","channelId":"{{channelId}}"}', async () => {
    testNumber = 123;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: '{{channelId}}' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '{{channelId}}' },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatarPath required',
        'avatarPath invalid url',
      ].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #124 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}"}', async () => {
    testNumber = 124;
    totalTests++;
    const payloadObj = { workspaceId: 123, channelId: '{{channelId}}' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: 123, channelId: '{{channelId}}' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #125 should return errors ["avatarPath required","avatarPath invalid url"] when body {"workspaceId":"0","channelId":"{{channelId}}"}', async () => {
    testNumber = 125;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: '{{channelId}}' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '{{channelId}}' },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatarPath required',
        'avatarPath invalid url',
      ].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #126 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}"}', async () => {
    testNumber = 126;
    totalTests++;
    const payloadObj = { channelId: '{{channelId}}' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { channelId: '{{channelId}}' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #127 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}"}', async () => {
    testNumber = 127;
    totalTests++;
    const payloadObj = { workspaceId: '', channelId: '{{channelId}}' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '', channelId: '{{channelId}}' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #128 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}"}', async () => {
    testNumber = 128;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      channelId: '{{channelId}}',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: 'invalid_value', channelId: '{{channelId}}' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #129 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123}', async () => {
    testNumber = 129;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: 123 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: 123 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #130 should return errors ["avatarPath required","avatarPath invalid url"] when body {"workspaceId":"0","channelId":"{{channelId}}"}', async () => {
    testNumber = 130;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: '{{channelId}}' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '{{channelId}}' },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatarPath required',
        'avatarPath invalid url',
      ].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #131 should return errors ["Unsupported permission type"] when body {"workspaceId":"0"}', async () => {
    testNumber = 131;
    totalTests++;
    const payloadObj = { workspaceId: '0' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Unsupported permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #132 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":""}', async () => {
    testNumber = 132;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: '' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #133 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value"}', async () => {
    testNumber = 133;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: 'invalid_value' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: 'invalid_value' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #134 should return errors ["avatarPath should not be empty","avatarPath invalid url"] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":""}', async () => {
    testNumber = 134;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '{{channelId}}', avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatarPath should not be empty',
        'avatarPath invalid url',
      ].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #135 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"channelId":"{{channelId}}","avatarPath":""}', async () => {
    testNumber = 135;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      channelId: '{{channelId}}',
      avatarPath: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: 123, channelId: '{{channelId}}', avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #136 should return errors ["avatarPath should not be empty","avatarPath invalid url"] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":""}', async () => {
    testNumber = 136;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '{{channelId}}', avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatarPath should not be empty',
        'avatarPath invalid url',
      ].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #137 should return errors ["Could not resolve permission type"] when body {"channelId":"{{channelId}}","avatarPath":""}', async () => {
    testNumber = 137;
    totalTests++;
    const payloadObj = { channelId: '{{channelId}}', avatarPath: '' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { channelId: '{{channelId}}', avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #138 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","channelId":"{{channelId}}","avatarPath":""}', async () => {
    testNumber = 138;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      channelId: '{{channelId}}',
      avatarPath: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '', channelId: '{{channelId}}', avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #139 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","channelId":"{{channelId}}","avatarPath":""}', async () => {
    testNumber = 139;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      channelId: '{{channelId}}',
      avatarPath: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          channelId: '{{channelId}}',
          avatarPath: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #140 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":123,"avatarPath":""}', async () => {
    testNumber = 140;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: 123, avatarPath: '' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: 123, avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #141 should return errors ["avatarPath should not be empty","avatarPath invalid url"] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":""}', async () => {
    testNumber = 141;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '{{channelId}}', avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatarPath should not be empty',
        'avatarPath invalid url',
      ].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #142 should return errors ["Unsupported permission type"] when body {"workspaceId":"0","avatarPath":""}', async () => {
    testNumber = 142;
    totalTests++;
    const payloadObj = { workspaceId: '0', avatarPath: '' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Unsupported permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #143 should return errors ["Could not resolve permission type"] when body {"workspaceId":"0","channelId":"","avatarPath":""}', async () => {
    testNumber = 143;
    totalTests++;
    const payloadObj = { workspaceId: '0', channelId: '', avatarPath: '' };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: '', avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Could not resolve permission type'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #144 should return errors ["Invalid channel"] when body {"workspaceId":"0","channelId":"invalid_value","avatarPath":""}', async () => {
    testNumber = 144;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: 'invalid_value',
      avatarPath: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', channelId: 'invalid_value', avatarPath: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = ['Invalid channel'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });

  it('Test case #145 should return errors [] when body {"workspaceId":"0","channelId":"{{channelId}}","avatarPath":"https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg"}', async () => {
    testNumber = 145;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      channelId: '{{channelId}}',
      avatarPath:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'updateChannelAvatar',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          channelId: '{{channelId}}',
          avatarPath:
            'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg',
        },
        contextData,
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
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 200,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 403:
          expectDetails = Array.isArray(data) ? data : [data];
          softExpectDetails = [...expectDetails].sort();
          try {
            expect(expectJson).toEqual(softExpectDetails);
            passedTests++;
            codedTest.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
            });
          } catch (error) {
            const { missing, extra } = summaryFields(
              softExpectDetails,
              expectJson,
            );
            failedTests.push({
              testcase: testNumber,
              code: 403,
              body: resolvedData,
              missing: missing || [],
              extra: extra || [],
            });
          }
          break;
        case 500:
          failedTests.push({
            testcase: testNumber,
            code: 500,
            errorDetails: expectJson,
          });
          break;
        default:
          failedTests.push({
            testcase: testNumber,
            code: response.status,
            errorDetails: 'Unexpected status code',
          });
      }
    } catch (error) {
      console.error('Error in test case #' + testNumber, error);
      failedTests.push({
        testcase: testNumber,
        error: error.message,
      });
    }
  });
  afterEach(async () => {
    testCaseNumber++;
    const afterEachSteps =
      UpdateChannelAvatarRequest.options?.find((option) => option.afterEach)
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
    } else {
      contextData = globalContext;
    }
  });

  afterAll(async () => {
    const afterAllSteps =
      UpdateChannelAvatarRequest.options?.find((option) => option.afterAll)
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
    } else {
      contextData = globalContext;
    }

    // Lưu kết quả vào biến toàn cục
    const testResult: TestResult = {
      path: '/Channel/UpdateChannelAvatar',
      className: 'update-channel-avatar',
      allSteps: allSteps,
      chunkNumber: undefined,
      failedTests: [...failedTests],
      codedTest: [...codedTest],
      passedTests: passedTests,
      totalTests: totalTests,
      logicTests: [...logicTests],
      failedStep: [...failedStep],
    };
    const reportDir = path.join(__dirname, '../../../../tmp-reports');
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    const chunkNumber = undefined;
    const fileName =
      'update-channel-avatar' +
      (chunkNumber ? `-chunk-undefined` : '') +
      '.result.json';
    const filePath = path.join(reportDir, fileName);
    fs.writeFileSync(filePath, JSON.stringify(testResult, null, 2), 'utf-8');

    console.log(
      `📝 Saved result for update-channel-avatar chunk single to ${filePath}`,
    );
  });
});
