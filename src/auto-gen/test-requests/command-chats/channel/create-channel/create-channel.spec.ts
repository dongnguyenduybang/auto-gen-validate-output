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
import { CreateChannelRequest } from '././create-channel.request';
describe('Testcase for create-channel', () => {
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
      CreateChannelRequest.options?.find((option) => option.beforeAll)
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
      CreateChannelRequest.options?.find((option) => option.beforeEach)
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

  it('Test case #1 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 1;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #2 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 2;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #3 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 3;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #4 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 4;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #5 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 5;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #6 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 6;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #7 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 7;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #8 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","avatar":123,"channelType":1}', async () => {
    testNumber = 8;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'channel1',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: 123, name: 'channel1', avatar: 123, channelType: 1 },
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

  it('Test case #9 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 9;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #10 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","avatar":"","channelType":1}', async () => {
    testNumber = 10;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'channel1',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: 123, name: 'channel1', avatar: '', channelType: 1 },
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

  it('Test case #11 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 11;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
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

  it('Test case #12 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 12;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #13 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 13;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
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

  it('Test case #14 should return errors [] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 14;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #15 should return errors ["name expected string,received number"] when body {"workspaceId":"0","name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 15;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['name expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #16 should return errors [] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 16;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #17 should return errors ["name string must contain at least 3 character(s)"] when body {"workspaceId":"0","name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 17;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at least 3 character(s)',
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

  it('Test case #18 should return errors ["name string must contain at most 50 character(s)"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 18;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at most 50 character(s)',
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

  it('Test case #19 should return errors ["name required"] when body {"workspaceId":"0","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 19;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['name required'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #20 should return errors ["name should not be empty","name string must contain at least 3 character(s)"] when body {"workspaceId":"0","name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 20;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name should not be empty',
        'name string must contain at least 3 character(s)',
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

  it('Test case #21 should return errors ["avatar expected string,received number"] when body {"workspaceId":"0","name":"channel1","avatar":123,"channelType":1}', async () => {
    testNumber = 21;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: 123, channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatar expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #22 should return errors [] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 22;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #23 should return errors ["avatar should not be empty"] when body {"workspaceId":"0","name":"channel1","avatar":"","channelType":1}', async () => {
    testNumber = 23;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: '', channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatar should not be empty'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #24 should return errors ["channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 24;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #25 should return errors [] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 25;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #26 should return errors ["channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 26;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #27 should return errors ["Could not resolve permission type"] when body {"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 27;
    totalTests++;
    const payloadObj = {
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #28 should return errors ["Could not resolve permission type"] when body {"name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 28;
    totalTests++;
    const payloadObj = {
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #29 should return errors ["Could not resolve permission type"] when body {"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 29;
    totalTests++;
    const payloadObj = {
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #30 should return errors ["Could not resolve permission type"] when body {"name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 30;
    totalTests++;
    const payloadObj = {
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #31 should return errors ["Could not resolve permission type"] when body {"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 31;
    totalTests++;
    const payloadObj = {
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #32 should return errors ["Could not resolve permission type"] when body {"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 32;
    totalTests++;
    const payloadObj = {
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #33 should return errors ["Could not resolve permission type"] when body {"name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 33;
    totalTests++;
    const payloadObj = {
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #34 should return errors ["Could not resolve permission type"] when body {"name":"channel1","avatar":123,"channelType":1}', async () => {
    testNumber = 34;
    totalTests++;
    const payloadObj = { name: 'channel1', avatar: 123, channelType: 1 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { name: 'channel1', avatar: 123, channelType: 1 },
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

  it('Test case #35 should return errors ["Could not resolve permission type"] when body {"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 35;
    totalTests++;
    const payloadObj = {
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #36 should return errors ["Could not resolve permission type"] when body {"name":"channel1","avatar":"","channelType":1}', async () => {
    testNumber = 36;
    totalTests++;
    const payloadObj = { name: 'channel1', avatar: '', channelType: 1 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { name: 'channel1', avatar: '', channelType: 1 },
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

  it('Test case #37 should return errors ["Could not resolve permission type"] when body {"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 37;
    totalTests++;
    const payloadObj = {
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
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

  it('Test case #38 should return errors ["Could not resolve permission type"] when body {"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 38;
    totalTests++;
    const payloadObj = {
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #39 should return errors ["Could not resolve permission type"] when body {"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 39;
    totalTests++;
    const payloadObj = {
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
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

  it('Test case #40 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 40;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #41 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 41;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #42 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 42;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #43 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 43;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #44 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 44;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #45 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 45;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #46 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 46;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #47 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","avatar":123,"channelType":1}', async () => {
    testNumber = 47;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'channel1',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '', name: 'channel1', avatar: 123, channelType: 1 },
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

  it('Test case #48 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 48;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #49 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","avatar":"","channelType":1}', async () => {
    testNumber = 49;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'channel1',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '', name: 'channel1', avatar: '', channelType: 1 },
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

  it('Test case #50 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 50;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
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

  it('Test case #51 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 51;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #52 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 52;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
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

  it('Test case #53 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 53;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #54 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 54;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #55 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 55;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #56 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 56;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #57 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 57;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #58 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 58;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #59 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 59;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #60 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"channel1","avatar":123,"channelType":1}', async () => {
    testNumber = 60;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'channel1',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'channel1',
          avatar: 123,
          channelType: 1,
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

  it('Test case #61 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 61;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #62 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"channel1","avatar":"","channelType":1}', async () => {
    testNumber = 62;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'channel1',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'channel1',
          avatar: '',
          channelType: 1,
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

  it('Test case #63 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 63;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
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

  it('Test case #64 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 64;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #65 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 65;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
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

  it('Test case #66 should return errors ["name expected string,received number"] when body {"workspaceId":"0","name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 66;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['name expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #67 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 67;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #68 should return errors ["name expected string,received number"] when body {"workspaceId":"0","name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 68;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['name expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #69 should return errors ["Could not resolve permission type"] when body {"name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 69;
    totalTests++;
    const payloadObj = {
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #70 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 70;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #71 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 71;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #72 should return errors ["name expected string,received number","avatar expected string,received number"] when body {"workspaceId":"0","name":123,"avatar":123,"channelType":1}', async () => {
    testNumber = 72;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 123,
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 123, avatar: 123, channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name expected string, received number',
        'avatar expected string, received number',
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

  it('Test case #73 should return errors ["name expected string,received number"] when body {"workspaceId":"0","name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 73;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['name expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #74 should return errors ["name expected string,received number","avatar should not be empty"] when body {"workspaceId":"0","name":123,"avatar":"","channelType":1}', async () => {
    testNumber = 74;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 123,
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 123, avatar: '', channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name expected string, received number',
        'avatar should not be empty',
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

  it('Test case #75 should return errors ["name expected string,received number","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 75;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name expected string, received number',
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #76 should return errors ["name expected string,received number"] when body {"workspaceId":"0","name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 76;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['name expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #77 should return errors ["name expected string,received number","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 77;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name expected string, received number',
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #78 should return errors [] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 78;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #79 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 79;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #80 should return errors [] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 80;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #81 should return errors ["Could not resolve permission type"] when body {"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 81;
    totalTests++;
    const payloadObj = {
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #82 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 82;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #83 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 83;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #84 should return errors ["avatar expected string,received number"] when body {"workspaceId":"0","name":"channel1","avatar":123,"channelType":1}', async () => {
    testNumber = 84;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: 123, channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatar expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #85 should return errors [] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 85;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #86 should return errors ["avatar should not be empty"] when body {"workspaceId":"0","name":"channel1","avatar":"","channelType":1}', async () => {
    testNumber = 86;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: '', channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatar should not be empty'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #87 should return errors ["channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 87;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #88 should return errors [] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 88;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #89 should return errors ["channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 89;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #90 should return errors ["name string must contain at least 3 character(s)"] when body {"workspaceId":"0","name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 90;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at least 3 character(s)',
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

  it('Test case #91 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 91;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #92 should return errors ["name string must contain at least 3 character(s)"] when body {"workspaceId":"0","name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 92;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at least 3 character(s)',
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

  it('Test case #93 should return errors ["Could not resolve permission type"] when body {"name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 93;
    totalTests++;
    const payloadObj = {
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #94 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 94;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #95 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 95;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #96 should return errors ["name string must contain at least 3 character(s)","avatar expected string,received number"] when body {"workspaceId":"0","name":"aa","avatar":123,"channelType":1}', async () => {
    testNumber = 96;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aa',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'aa', avatar: 123, channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at least 3 character(s)',
        'avatar expected string, received number',
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

  it('Test case #97 should return errors ["name string must contain at least 3 character(s)"] when body {"workspaceId":"0","name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 97;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at least 3 character(s)',
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

  it('Test case #98 should return errors ["name string must contain at least 3 character(s)","avatar should not be empty"] when body {"workspaceId":"0","name":"aa","avatar":"","channelType":1}', async () => {
    testNumber = 98;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aa',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'aa', avatar: '', channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at least 3 character(s)',
        'avatar should not be empty',
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

  it('Test case #99 should return errors ["name string must contain at least 3 character(s)","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 99;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at least 3 character(s)',
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #100 should return errors ["name string must contain at least 3 character(s)"] when body {"workspaceId":"0","name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 100;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at least 3 character(s)',
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

  it('Test case #101 should return errors ["name string must contain at least 3 character(s)","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 101;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at least 3 character(s)',
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #102 should return errors ["name string must contain at most 50 character(s)"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 102;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at most 50 character(s)',
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

  it('Test case #103 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 103;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #104 should return errors ["name string must contain at most 50 character(s)"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 104;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at most 50 character(s)',
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

  it('Test case #105 should return errors ["Could not resolve permission type"] when body {"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 105;
    totalTests++;
    const payloadObj = {
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #106 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 106;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #107 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 107;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #108 should return errors ["name string must contain at most 50 character(s)","avatar expected string,received number"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":123,"channelType":1}', async () => {
    testNumber = 108;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar: 123,
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at most 50 character(s)',
        'avatar expected string, received number',
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

  it('Test case #109 should return errors ["name string must contain at most 50 character(s)"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 109;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at most 50 character(s)',
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

  it('Test case #110 should return errors ["name string must contain at most 50 character(s)","avatar should not be empty"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":1}', async () => {
    testNumber = 110;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar: '',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at most 50 character(s)',
        'avatar should not be empty',
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

  it('Test case #111 should return errors ["name string must contain at most 50 character(s)","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 111;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at most 50 character(s)',
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #112 should return errors ["name string must contain at most 50 character(s)"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 112;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at most 50 character(s)',
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

  it('Test case #113 should return errors ["name string must contain at most 50 character(s)","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 113;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at most 50 character(s)',
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #114 should return errors ["name required"] when body {"workspaceId":"0","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 114;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['name required'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #115 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 115;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #116 should return errors ["name required"] when body {"workspaceId":"0","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 116;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['name required'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #117 should return errors ["Could not resolve permission type"] when body {"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 117;
    totalTests++;
    const payloadObj = {
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #118 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 118;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #119 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 119;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #120 should return errors ["name required","avatar expected string,received number"] when body {"workspaceId":"0","avatar":123,"channelType":1}', async () => {
    testNumber = 120;
    totalTests++;
    const payloadObj = { workspaceId: '0', avatar: 123, channelType: 1 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', avatar: 123, channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name required',
        'avatar expected string, received number',
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

  it('Test case #121 should return errors ["name required"] when body {"workspaceId":"0","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 121;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['name required'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #122 should return errors ["name required","avatar should not be empty"] when body {"workspaceId":"0","avatar":"","channelType":1}', async () => {
    testNumber = 122;
    totalTests++;
    const payloadObj = { workspaceId: '0', avatar: '', channelType: 1 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', avatar: '', channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['name required', 'avatar should not be empty'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #123 should return errors ["name required","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 123;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name required',
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #124 should return errors ["name required"] when body {"workspaceId":"0","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 124;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['name required'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #125 should return errors ["name required","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 125;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name required',
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #126 should return errors ["name should not be empty","name string must contain at least 3 character(s)"] when body {"workspaceId":"0","name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 126;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name should not be empty',
        'name string must contain at least 3 character(s)',
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

  it('Test case #127 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 127;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #128 should return errors ["name should not be empty","name string must contain at least 3 character(s)"] when body {"workspaceId":"0","name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 128;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name should not be empty',
        'name string must contain at least 3 character(s)',
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

  it('Test case #129 should return errors ["Could not resolve permission type"] when body {"name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 129;
    totalTests++;
    const payloadObj = {
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #130 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 130;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #131 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 131;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #132 should return errors ["name should not be empty","name string must contain at least 3 character(s)","avatar expected string,received number"] when body {"workspaceId":"0","name":"","avatar":123,"channelType":1}', async () => {
    testNumber = 132;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: '',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: '', avatar: 123, channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name should not be empty',
        'name string must contain at least 3 character(s)',
        'avatar expected string, received number',
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

  it('Test case #133 should return errors ["name should not be empty","name string must contain at least 3 character(s)"] when body {"workspaceId":"0","name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 133;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name should not be empty',
        'name string must contain at least 3 character(s)',
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

  it('Test case #134 should return errors ["name should not be empty","name string must contain at least 3 character(s)","avatar should not be empty"] when body {"workspaceId":"0","name":"","avatar":"","channelType":1}', async () => {
    testNumber = 134;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: '',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: '', avatar: '', channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name should not be empty',
        'name string must contain at least 3 character(s)',
        'avatar should not be empty',
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

  it('Test case #135 should return errors ["name should not be empty","name string must contain at least 3 character(s)","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 135;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name should not be empty',
        'name string must contain at least 3 character(s)',
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #136 should return errors ["name should not be empty","name string must contain at least 3 character(s)"] when body {"workspaceId":"0","name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 136;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name should not be empty',
        'name string must contain at least 3 character(s)',
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

  it('Test case #137 should return errors ["name should not be empty","name string must contain at least 3 character(s)","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 137;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name should not be empty',
        'name string must contain at least 3 character(s)',
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #138 should return errors ["avatar expected string,received number"] when body {"workspaceId":"0","name":"channel1","avatar":123,"channelType":1}', async () => {
    testNumber = 138;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: 123, channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatar expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #139 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","avatar":123,"channelType":1}', async () => {
    testNumber = 139;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'channel1',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: 123, name: 'channel1', avatar: 123, channelType: 1 },
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

  it('Test case #140 should return errors ["avatar expected string,received number"] when body {"workspaceId":"0","name":"channel1","avatar":123,"channelType":1}', async () => {
    testNumber = 140;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: 123, channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatar expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #141 should return errors ["Could not resolve permission type"] when body {"name":"channel1","avatar":123,"channelType":1}', async () => {
    testNumber = 141;
    totalTests++;
    const payloadObj = { name: 'channel1', avatar: 123, channelType: 1 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { name: 'channel1', avatar: 123, channelType: 1 },
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

  it('Test case #142 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","avatar":123,"channelType":1}', async () => {
    testNumber = 142;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'channel1',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '', name: 'channel1', avatar: 123, channelType: 1 },
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

  it('Test case #143 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"channel1","avatar":123,"channelType":1}', async () => {
    testNumber = 143;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'channel1',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'channel1',
          avatar: 123,
          channelType: 1,
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

  it('Test case #144 should return errors ["name expected string,received number","avatar expected string,received number"] when body {"workspaceId":"0","name":123,"avatar":123,"channelType":1}', async () => {
    testNumber = 144;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 123,
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 123, avatar: 123, channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name expected string, received number',
        'avatar expected string, received number',
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

  it('Test case #145 should return errors ["avatar expected string,received number"] when body {"workspaceId":"0","name":"channel1","avatar":123,"channelType":1}', async () => {
    testNumber = 145;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: 123, channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatar expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #146 should return errors ["name string must contain at least 3 character(s)","avatar expected string,received number"] when body {"workspaceId":"0","name":"aa","avatar":123,"channelType":1}', async () => {
    testNumber = 146;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aa',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'aa', avatar: 123, channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at least 3 character(s)',
        'avatar expected string, received number',
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

  it('Test case #147 should return errors ["name string must contain at most 50 character(s)","avatar expected string,received number"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":123,"channelType":1}', async () => {
    testNumber = 147;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar: 123,
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at most 50 character(s)',
        'avatar expected string, received number',
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

  it('Test case #148 should return errors ["name required","avatar expected string,received number"] when body {"workspaceId":"0","avatar":123,"channelType":1}', async () => {
    testNumber = 148;
    totalTests++;
    const payloadObj = { workspaceId: '0', avatar: 123, channelType: 1 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', avatar: 123, channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name required',
        'avatar expected string, received number',
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

  it('Test case #149 should return errors ["name should not be empty","name string must contain at least 3 character(s)","avatar expected string,received number"] when body {"workspaceId":"0","name":"","avatar":123,"channelType":1}', async () => {
    testNumber = 149;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: '',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: '', avatar: 123, channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name should not be empty',
        'name string must contain at least 3 character(s)',
        'avatar expected string, received number',
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

  it('Test case #150 should return errors ["avatar expected string,received number","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"channel1","avatar":123,"channelType":"invalid_enum_value"}', async () => {
    testNumber = 150;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: 123,
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar: 123,
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatar expected string, received number',
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #151 should return errors ["avatar expected string,received number"] when body {"workspaceId":"0","name":"channel1","avatar":123,"channelType":1}', async () => {
    testNumber = 151;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: 123, channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatar expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #152 should return errors ["avatar expected string,received number","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"channel1","avatar":123,"channelType":""}', async () => {
    testNumber = 152;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: 123,
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: 123, channelType: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatar expected string, received number',
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #153 should return errors [] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 153;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #154 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 154;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #155 should return errors [] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 155;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #156 should return errors ["Could not resolve permission type"] when body {"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 156;
    totalTests++;
    const payloadObj = {
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #157 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 157;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #158 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 158;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #159 should return errors ["name expected string,received number"] when body {"workspaceId":"0","name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 159;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['name expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #160 should return errors [] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 160;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #161 should return errors ["name string must contain at least 3 character(s)"] when body {"workspaceId":"0","name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 161;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at least 3 character(s)',
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

  it('Test case #162 should return errors ["name string must contain at most 50 character(s)"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 162;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at most 50 character(s)',
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

  it('Test case #163 should return errors ["name required"] when body {"workspaceId":"0","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 163;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['name required'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #164 should return errors ["name should not be empty","name string must contain at least 3 character(s)"] when body {"workspaceId":"0","name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 164;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name should not be empty',
        'name string must contain at least 3 character(s)',
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

  it('Test case #165 should return errors ["channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 165;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #166 should return errors [] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 166;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #167 should return errors ["channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 167;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #168 should return errors ["avatar should not be empty"] when body {"workspaceId":"0","name":"channel1","avatar":"","channelType":1}', async () => {
    testNumber = 168;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: '', channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatar should not be empty'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #169 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","avatar":"","channelType":1}', async () => {
    testNumber = 169;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'channel1',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: 123, name: 'channel1', avatar: '', channelType: 1 },
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

  it('Test case #170 should return errors ["avatar should not be empty"] when body {"workspaceId":"0","name":"channel1","avatar":"","channelType":1}', async () => {
    testNumber = 170;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: '', channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatar should not be empty'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #171 should return errors ["Could not resolve permission type"] when body {"name":"channel1","avatar":"","channelType":1}', async () => {
    testNumber = 171;
    totalTests++;
    const payloadObj = { name: 'channel1', avatar: '', channelType: 1 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { name: 'channel1', avatar: '', channelType: 1 },
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

  it('Test case #172 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","avatar":"","channelType":1}', async () => {
    testNumber = 172;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'channel1',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '', name: 'channel1', avatar: '', channelType: 1 },
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

  it('Test case #173 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"channel1","avatar":"","channelType":1}', async () => {
    testNumber = 173;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'channel1',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'channel1',
          avatar: '',
          channelType: 1,
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

  it('Test case #174 should return errors ["name expected string,received number","avatar should not be empty"] when body {"workspaceId":"0","name":123,"avatar":"","channelType":1}', async () => {
    testNumber = 174;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 123,
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 123, avatar: '', channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name expected string, received number',
        'avatar should not be empty',
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

  it('Test case #175 should return errors ["avatar should not be empty"] when body {"workspaceId":"0","name":"channel1","avatar":"","channelType":1}', async () => {
    testNumber = 175;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: '', channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatar should not be empty'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #176 should return errors ["name string must contain at least 3 character(s)","avatar should not be empty"] when body {"workspaceId":"0","name":"aa","avatar":"","channelType":1}', async () => {
    testNumber = 176;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aa',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'aa', avatar: '', channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at least 3 character(s)',
        'avatar should not be empty',
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

  it('Test case #177 should return errors ["name string must contain at most 50 character(s)","avatar should not be empty"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"","channelType":1}', async () => {
    testNumber = 177;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar: '',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at most 50 character(s)',
        'avatar should not be empty',
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

  it('Test case #178 should return errors ["name required","avatar should not be empty"] when body {"workspaceId":"0","avatar":"","channelType":1}', async () => {
    testNumber = 178;
    totalTests++;
    const payloadObj = { workspaceId: '0', avatar: '', channelType: 1 };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', avatar: '', channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['name required', 'avatar should not be empty'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #179 should return errors ["name should not be empty","name string must contain at least 3 character(s)","avatar should not be empty"] when body {"workspaceId":"0","name":"","avatar":"","channelType":1}', async () => {
    testNumber = 179;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: '',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: '', avatar: '', channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name should not be empty',
        'name string must contain at least 3 character(s)',
        'avatar should not be empty',
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

  it('Test case #180 should return errors ["avatar should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"channel1","avatar":"","channelType":"invalid_enum_value"}', async () => {
    testNumber = 180;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: '',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar: '',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatar should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #181 should return errors ["avatar should not be empty"] when body {"workspaceId":"0","name":"channel1","avatar":"","channelType":1}', async () => {
    testNumber = 181;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: '', channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatar should not be empty'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #182 should return errors ["avatar should not be empty","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"channel1","avatar":"","channelType":""}', async () => {
    testNumber = 182;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: '',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: '', channelType: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatar should not be empty',
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #183 should return errors ["channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 183;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #184 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 184;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
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

  it('Test case #185 should return errors ["channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 185;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #186 should return errors ["Could not resolve permission type"] when body {"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 186;
    totalTests++;
    const payloadObj = {
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
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

  it('Test case #187 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 187;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
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

  it('Test case #188 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 188;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
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

  it('Test case #189 should return errors ["name expected string,received number","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 189;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name expected string, received number',
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #190 should return errors ["channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 190;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #191 should return errors ["name string must contain at least 3 character(s)","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 191;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at least 3 character(s)',
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #192 should return errors ["name string must contain at most 50 character(s)","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 192;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at most 50 character(s)',
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #193 should return errors ["name required","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 193;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name required',
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #194 should return errors ["name should not be empty","name string must contain at least 3 character(s)","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 194;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name should not be empty',
        'name string must contain at least 3 character(s)',
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #195 should return errors ["avatar expected string,received number","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"channel1","avatar":123,"channelType":"invalid_enum_value"}', async () => {
    testNumber = 195;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: 123,
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar: 123,
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatar expected string, received number',
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #196 should return errors ["channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":"invalid_enum_value"}', async () => {
    testNumber = 196;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #197 should return errors ["avatar should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'invalid_enum_value\'"] when body {"workspaceId":"0","name":"channel1","avatar":"","channelType":"invalid_enum_value"}', async () => {
    testNumber = 197;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: '',
      channelType: 'invalid_enum_value',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar: '',
          channelType: 'invalid_enum_value',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatar should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received 'invalid_enum_value'",
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

  it('Test case #198 should return errors [] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 198;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #199 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 199;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #200 should return errors [] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 200;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #201 should return errors ["Could not resolve permission type"] when body {"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 201;
    totalTests++;
    const payloadObj = {
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #202 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 202;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #203 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 203;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #204 should return errors ["name expected string,received number"] when body {"workspaceId":"0","name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 204;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['name expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #205 should return errors [] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 205;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #206 should return errors ["name string must contain at least 3 character(s)"] when body {"workspaceId":"0","name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 206;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at least 3 character(s)',
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

  it('Test case #207 should return errors ["name string must contain at most 50 character(s)"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 207;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at most 50 character(s)',
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

  it('Test case #208 should return errors ["name required"] when body {"workspaceId":"0","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 208;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = ['name required'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #209 should return errors ["name should not be empty","name string must contain at least 3 character(s)"] when body {"workspaceId":"0","name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 209;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name should not be empty',
        'name string must contain at least 3 character(s)',
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

  it('Test case #210 should return errors ["avatar expected string,received number"] when body {"workspaceId":"0","name":"channel1","avatar":123,"channelType":1}', async () => {
    testNumber = 210;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: 123,
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: 123, channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatar expected string, received number'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #211 should return errors [] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 211;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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

  it('Test case #212 should return errors ["avatar should not be empty"] when body {"workspaceId":"0","name":"channel1","avatar":"","channelType":1}', async () => {
    testNumber = 212;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: '',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: '', channelType: 1 },
        contextData,
      );
      const data = response.data;
      const expectJson = ['avatar should not be empty'].sort();

      let expectDetails;
      let softExpectDetails;
      switch (response.status) {
        case 200:
          expectDetails = Array.isArray(data?.error?.details)
            ? data.error.details
            : [];
          softExpectDetails = [...expectDetails].sort();
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

  it('Test case #213 should return errors ["channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 213;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #214 should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 214;
    totalTests++;
    const payloadObj = {
      workspaceId: 123,
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 123,
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
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

  it('Test case #215 should return errors ["channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 215;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #216 should return errors ["Could not resolve permission type"] when body {"name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 216;
    totalTests++;
    const payloadObj = {
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
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

  it('Test case #217 should return errors ["Could not resolve permission type"] when body {"workspaceId":"","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 217;
    totalTests++;
    const payloadObj = {
      workspaceId: '',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
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

  it('Test case #218 should return errors ["Invalid channel"] when body {"workspaceId":"invalid_value","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 218;
    totalTests++;
    const payloadObj = {
      workspaceId: 'invalid_value',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: 'invalid_value',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
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

  it('Test case #219 should return errors ["name expected string,received number","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":123,"avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 219;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 123,
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 123,
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name expected string, received number',
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #220 should return errors ["channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 220;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #221 should return errors ["name string must contain at least 3 character(s)","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"aa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 221;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at least 3 character(s)',
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #222 should return errors ["name string must contain at most 50 character(s)","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 222;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name string must contain at most 50 character(s)',
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #223 should return errors ["name required","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 223;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name required',
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #224 should return errors ["name should not be empty","name string must contain at least 3 character(s)","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 224;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: '',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: '',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'name should not be empty',
        'name string must contain at least 3 character(s)',
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #225 should return errors ["avatar expected string,received number","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"channel1","avatar":123,"channelType":""}', async () => {
    testNumber = 225;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: 123,
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: 123, channelType: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatar expected string, received number',
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #226 should return errors ["channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":""}', async () => {
    testNumber = 226;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: '',
        },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #227 should return errors ["avatar should not be empty","channelType should not be empty","channelType invalid enum value. Expected 0 | 1 | 2,received \'\'"] when body {"workspaceId":"0","name":"channel1","avatar":"","channelType":""}', async () => {
    testNumber = 227;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar: '',
      channelType: '',
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        { workspaceId: '0', name: 'channel1', avatar: '', channelType: '' },
        contextData,
      );
      const data = response.data;
      const expectJson = [
        'avatar should not be empty',
        'channelType should not be empty',
        "channelType invalid enum value. Expected 0 | 1 | 2, received ''",
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

  it('Test case #228 should return errors [] when body {"workspaceId":"0","name":"channel1","avatar":"https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024","channelType":1}', async () => {
    testNumber = 228;
    totalTests++;
    const payloadObj = {
      workspaceId: '0',
      name: 'channel1',
      avatar:
        'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
      channelType: 1,
    };
    resolvedData = resolveVariables(payloadObj, globalContext);

    try {
      const response = await resolveCallAPI(
        'createChannel',
        { 'x-session-token': '{{token}}' },
        {
          workspaceId: '0',
          name: 'channel1',
          avatar:
            'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
          channelType: 1,
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
      CreateChannelRequest.options?.find((option) => option.afterEach)
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
      CreateChannelRequest.options?.find((option) => option.afterAll)
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
      path: '/Channel/CreateChannel',
      className: 'create-channel',
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
      'create-channel' +
      (chunkNumber ? `-chunk-undefined` : '') +
      '.result.json';
    const filePath = path.join(reportDir, fileName);
    fs.writeFileSync(filePath, JSON.stringify(testResult, null, 2), 'utf-8');

    console.log(
      `📝 Saved result for create-channel chunk single to ${filePath}`,
    );
  });
});
