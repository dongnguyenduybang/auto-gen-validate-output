import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { Counter } from 'k6/metrics';

const passedTests = new Counter('passed_tests');
const totalTests = new Counter('total_tests');
const failedTests = new Counter('failed_tests');
const warnings = new Counter('warnings');

let testResults = {
  path: '/Channel/CreateChannel',
  className: 'create-channel',
  allSteps: [],
  chunkNumber: undefined,
  failedTests: [],
  codedTest: [],
  warnings: [],
  passedTests: 0,
  totalTests: 0,
  failedStep: []
};

const globalContext = {
  token: 'UVKRFv1EttAV54rDX5dvCpdQCl3KCZa1oH6mSFPOAS0IiuT2rXbSW4fQ-6sCrVarhGjjB_qh9NlX3ZM0RzoXBA',
  userId1: '01JZPK3HP87DW15RJ5F6937Q16'
};

function resolveVariables(payload, context) {
  let resolved = JSON.parse(JSON.stringify(payload));
  Object.keys(resolved).forEach(key => {
    if (typeof resolved[key] === 'string') {
      resolved[key] = resolved[key]
        .replace('{{token}}', context.token)
        .replace('{{userId1}}', context.userId1);
    }
  });
  return resolved;
}

function executeSteps(steps, context) {
  let results = [];
  steps.forEach(step => {
    results.push({ step: step, status: 'executed' });
  });
  return results;
}

class TestContext {
  clone() {
    return JSON.parse(JSON.stringify(globalContext));
  }
}

export const options = {
  scenarios: {
    load_test: {
      executor: 'per-vu-iterations',
      vus: 1,
      iterations: 1,

    }
  },
  thresholds: {
    'http_req_duration': ['p(95)<500'],
    'passed_tests': ['count>=1'],
    'failed_tests': ['count<0']
  },
  discardResponseBodies: false
};

export function setup() {
  let context = new TestContext();
  let contextData = context.clone();
  const beforeAllSteps = [];
  if (beforeAllSteps.length > 0) {
    const results = executeSteps(beforeAllSteps, globalContext);
    results.forEach(result => {
      testResults.allSteps.push({
        ...result,
        caseTitle: `Setup`,
        phase: 'beforeAll'
      });
    });
  } else {
    contextData = globalContext;
  }
  return { contextData };
}

export default function (data) {
  let contextData = data.contextData;
  let testCaseNumber = 0;

  const beforeEachSteps = [];
  if (beforeEachSteps.length > 0) {
    const results = executeSteps(beforeEachSteps, globalContext);
    results.forEach(result => {
      testResults.allSteps.push({
        ...result,
        caseTitle: `Case ${++testCaseNumber}`,
        phase: 'beforeEach'
      });
    });
  }

  const testCases = [
    {
      number: 1,
      title: 'should return errors ["Could not resolve permission type"] when body {"workspaceId":123,"name":"channelname1","avatar":"","channelType":1}',
      payload: { workspaceId: 123, name: "channelname1", avatar: "", channelType: 1 },
      expectedErrors: ["Could not resolve permission types"]
    },
    {
      number: 10,
      title: 'should return errors [] when body {"workspaceId":"0","name":"channelname1","channelType":1}',
      payload: { workspaceId: "0", name: "channelname1", channelType: 1 },
      expectedErrors: []
    },

  ];

  testCases.forEach(test => {
    group(`Test case #${test.number}: ${test.title}`, () => {
      totalTests.add(1);
      const resolvedData = resolveVariables(test.payload, globalContext);
      const headers = {
        'x-session-token': globalContext.token,
        'Content-Type': 'application/json'
      };
      const response = http.post('https://api-dev.ziichat.dev/Channel/CreateChannel', JSON.stringify(resolvedData), { headers });

      let expectDetails = [];
      let softExpectDetails = [];
      if ([200, 201, 400, 403].includes(response.status)) {
        const contentType = response.headers['Content-Type']?.toLowerCase() || '';
        if (contentType.includes('application/json')) {
          try {
            const data = JSON.parse(response.body || '{}');
            expectDetails = Array.isArray(data?.error?.details)
              ? data.error.details
              : data?.error?.details
                ? [data.error.details]
                : data?.ok === true
                  ? []
                  : data !== undefined && data !== null
                    ? [JSON.stringify(data)]
                    : [];
          } catch (e) {
            console.error(`Failed to parse JSON for test ${test.number}: ${e.message}`);
            expectDetails = [response.body || ''];
          }
        } else {
          expectDetails = response.body ? [response.body.trim()] : [];
        }
        softExpectDetails = [...expectDetails].sort();
      }

      const allErrorsMatched = softExpectDetails.every(actualError => test.expectedErrors.includes(actualError));
      const exactMatch = allErrorsMatched && softExpectDetails.length === test.expectedErrors.length;

      check(response, {
        [`Errors match for testcase #${test.number} 
          Expected: ${test.expectedErrors.join(", ")}
          Actual: ${softExpectDetails.join(", ")}`]: () => exactMatch
      });

      if (exactMatch) {
        passedTests.add(1);
        testResults.passedTests++;
        testResults.codedTest.push({
          testcase: test.number,
          code: response.status,
          body: resolvedData
        });
      } else if (allErrorsMatched) {
        warnings.add(1);
        testResults.warnings.push({
          testcase: test.number,
          code: response.status,
          body: resolvedData,
          actualErrors: softExpectDetails,
          expectedErrors: test.expectedErrors,
          message: "Actual errors include expected errors"
        });
      } else {
        failedTests.add(1);
        testResults.failedTests.push({
          testcase: test.number,
          code: response.status,
          body: resolvedData,
          missing: softExpectDetails.filter(x => !test.expectedErrors.includes(x)),
          extra: test.expectedErrors.filter(x => !softExpectDetails.includes(x))
        });

      }
      testResults.totalTests++;
      sleep(1);
    });

    const afterEachSteps = [];
    if (afterEachSteps.length > 0) {
      const results = executeSteps(afterEachSteps, globalContext);
      results.forEach(result => {
        testResults.allSteps.push({
          ...result,
          caseTitle: `Case ${testCaseNumber}`,
          phase: 'afterEach'
        });
      });
    }
  });

}

export function teardown(data) {
  const afterAllSteps = [];
  let context = new TestContext();
  let contextData = context.clone();
  if (afterAllSteps.length > 0) {
    const results = executeSteps(afterAllSteps, globalContext);
    results.forEach(result => {
      testResults.allSteps.push({
        ...result,
        caseTitle: `Teardown`,
        phase: 'afterAll'
      });
    });
  }
}

export function handleSummary(data) {

  const metrics = data.metrics || {};
  const httpReqs = metrics.http_reqs?.values || { count: 0 };
  const httpReqDuration = metrics.http_req_duration.values || { avg: 0, 'p(95)': 0 };
  const passedTestsMetric = metrics.passed_tests.values || { count: 0 };
  const failedTestsMetric = metrics.failed_tests.values || { count: 0 };
  const warningsMetric = metrics.warnings.values || { count: 0 };

  return {
    stdout: JSON.stringify({
      metrics: {
        http_reqs: httpReqs,
        http_req_duration: httpReqDuration,
        passed_tests: passedTestsMetric,
        failed_tests: failedTestsMetric,
        warnings: warningsMetric
      },
      testResults
    }, null, 2),
    'create-channel.result.json': JSON.stringify(testResults, null, 2)
  };
}
