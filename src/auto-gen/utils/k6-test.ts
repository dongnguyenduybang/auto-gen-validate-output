import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';
import {
  findAllFoldersWithDtoAndRequest,
  formatExpectErrors,
  getMatchedFilePaths,
  pairFiles,
  readJsonFile,
} from './helper';

async function generateK6Content(
  testCases: any[],
  requestConfig: any,
  className: string,
): Promise<string> {
  const primaryStep = requestConfig.steps?.[0];
  const primaryAction = primaryStep?.actions?.main?.[0];
  const primaryHeaders = primaryAction?.headers || {};
  const actionPath = primaryAction?.config?.path || '';
  const primaryMethod = primaryAction?.config?.method;
  const methodLowCase = primaryMethod.toLowerCase();

  const isGetRequest = methodLowCase === 'get';

  return `
import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { Counter } from 'k6/metrics';
import { resolveVariables, parseErrors, cleanErrors } from '../common/utils.js'
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

// Read the file during init stage
const setupDataRaw = open('./common/setup-data.k6.json');
let setupData = JSON.parse(setupDataRaw);
// read file option 
const optionDataRaw = open('./common/options.k6.json');
let optionData = JSON.parse(optionDataRaw)
const passedTests = new Counter('passed_tests');
const totalTests = new Counter('total_tests');
const failedTests = new Counter('failed_tests');
const warnings = new Counter('warnings');

let testResults = {
  path: '${actionPath}',
  className: '${className}',
  allSteps: [],
  failedTests: [],
  codedTest: [],
  warnings: [],
  passedTests: 0,
  totalTests: 0,
  failedStep: [],
  executionDate: new Date().toISOString(),
  environment: "dev",
  detailedResults: {
    summary: {},
    failedTests: [],
    warnings: [],
    passedTests: []
  }
};

export const options = optionData;

export function setup() {
  return setupData
}

export default function (data) {
  let setupContext = data.data;

  const testCases = [
    ${testCases
      .map(
        (testCase, index) => `
    {
      number: ${index + 1},
      title: 'should return errors ${formatExpectErrors(testCase.expects)} when body ${JSON.stringify(testCase.body)}',
      payload: ${JSON.stringify(testCase.body)},
      expectedErrors: ${JSON.stringify(testCase.expects)}
    }`,
      )
      .join(',\n')}
  ];

  testCases.forEach(test => {
    group(\`Test case #\${test.number}: \${test.title}\`, () => {
      totalTests.add(1);
      const resolvedData = resolveVariables(test.payload, setupContext);
      const headers = resolveVariables(${JSON.stringify(primaryHeaders)}, setupContext);
      
      ${isGetRequest ?
      `const params = Object.keys(resolvedData).map(key => \`\${key}=\${encodeURIComponent(resolvedData[key])}\`).join('&');
      const url = 'https://api-dev.ziichat.dev${actionPath}' + (params ? \`?\${params}\` : '');
      const response = http.get(url, { headers });` :
      methodLowCase === 'delete' ?
        `const response = http.del(
          'https://api-dev.ziichat.dev${actionPath}', 
          JSON.stringify(resolvedData), 
          { headers }
        );` :
        `const response = http.${methodLowCase}(
          'https://api-dev.ziichat.dev${actionPath}', 
          JSON.stringify(resolvedData), 
          { headers }
        );`}

      let expectDetails = [];
      let softExpectDetails = [];
      
      if ([200, 201, 400, 403, 404, 500].includes(response.status)) {
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
            console.error(\`Failed to parse JSON for test \${test.number}: \${e.message}\`);
            expectDetails = [response.body || ''];
          }
        } else {
          expectDetails = response.body ? [response.body.trim()] : [];
        }
        softExpectDetails = [...expectDetails].sort();
      }

      const allErrorsMatched = softExpectDetails.every(actualError => 
        test.expectedErrors.includes(actualError)
      );
      const exactMatch = allErrorsMatched && 
                       softExpectDetails.length === test.expectedErrors.length;

      let passed = exactMatch;
      let warning = !exactMatch && allErrorsMatched;
      console.log(test.expectedErrors, softExpectDetails )
      // Store complete test result details
      const testResult = {
        testcase: test.number,
        title: test.title,
        status: passed ? 'passed' : warning ? 'warning' : 'failed',
        code: response.status,
        request: {
          method: '${primaryMethod}',
          headers: headers,
          body: resolvedData
        },
        response: {
          status: response.status,
          headers: response.headers,
          body: response.body
        },
        actualErrors: softExpectDetails,
        expectedErrors: test.expectedErrors,
        timestamp: new Date().toISOString()
      };

      if (passed) {
        passedTests.add(1);
        testResults.passedTests++;
        testResults.codedTest.push(testResult);
        testResults.detailedResults.passedTests.push(testResult);
      } else if (warning) {
        warnings.add(1);
        testResult.message = "Actual errors include expected errors but don't match exactly";
        testResults.warnings.push(testResult);
        testResults.detailedResults.warnings.push(testResult);
      } else {
        failedTests.add(1);
        testResult.missing = softExpectDetails.filter(x => !test.expectedErrors.includes(x));
        testResult.extra = test.expectedErrors.filter(x => !softExpectDetails.includes(x));
        testResults.failedTests.push(testResult);
        testResults.detailedResults.failedTests.push(testResult);
      }
      
      testResults.allSteps.push(testResult);
      testResults.totalTests++;
      
      check(response, {
        [\`Errors match for testcase # [\${testResult.status}]: \${test.number}\ \${test.expectedErrors}\; \${softExpectDetails}\`]: () => passed
      });
      
      sleep(1);
    });
  });
}

export function handleSummary(data) {
  const metrics = data.metrics || {};
  const testResults = {
    detailedResults: {
      summary: {
        totalTests: 0,
        passed: 0,
        failed: 0,
        warnings: 0,
        successRate: "0%",
      },
      failedTests: [],
      warnings: [],
      passedTests: [],
    },
  };

  data.root_group.groups.forEach(group => {
    const check = group.checks[0];
    const log = check.name;
    const path = group.path;

    // extract status from name ([passed], [failed], [warning])
    const testCaseStatusMatch = log.match(/\\[(\\w+)\\]/);
    const testCaseStatus = testCaseStatusMatch ? testCaseStatusMatch[1].toLowerCase() : 'passed';

    // parse expected errors from the path field
    let expectedErrors = [];
    const expectedErrorsMatch = path.match(/should return errors \\[(.*?)\\]/);
    if (expectedErrorsMatch) {
      expectedErrors = parseErrors(expectedErrorsMatch[1]);
    }

    // Parse actual errors from the name field (after the semicolon)
    let actualErrors = [];
    const stripped = log.replace(/Errors match for testcase #\\s*\\[\\w+\\]:\\s*\\d+\\s*/, '');
    const semicolonIndex = stripped.indexOf(';');
    if (semicolonIndex !== -1) {
      const actualErrorsRaw = stripped.substring(semicolonIndex + 1).trim();
      actualErrors = parseErrors(actualErrorsRaw);
    } else {
      // If no semicolon, assume only actual errors are present
      actualErrors = parseErrors(stripped);
    }

    // Create result entry
    const resultEntry = {
      expectedErrors: cleanErrors(expectedErrors),
      actualErrors: cleanErrors(actualErrors),
      path: group.path,
      id: check.id || '',
      timestamp: new Date().toISOString(),
    };

    // Categorize based on status
    if (testCaseStatus === 'failed') {
      resultEntry.missing = actualErrors.filter(x => !expectedErrors.includes(x));
      resultEntry.extra = expectedErrors.filter(x => !actualErrors.includes(x));
      testResults.detailedResults.failedTests.push(resultEntry);
    } else if (testCaseStatus === 'warning') {
      resultEntry.warningMessage = \`Actual errors include expected errors but don\'t match exactly\`;
      testResults.detailedResults.warnings.push(resultEntry);
    } else {
      testResults.detailedResults.passedTests.push(resultEntry);
    }
  });

  // Update summary metrics
  testResults.detailedResults.summary.totalTests = data.root_group.groups.length;
  testResults.detailedResults.summary.passed = testResults.detailedResults.passedTests.length;
  testResults.detailedResults.summary.failed = testResults.detailedResults.failedTests.length;
  testResults.detailedResults.summary.warnings = testResults.detailedResults.warnings.length;
  testResults.detailedResults.summary.successRate =
    testResults.detailedResults.summary.totalTests > 0
      ? (
        (testResults.detailedResults.summary.passed /
          testResults.detailedResults.summary.totalTests) *
        100
      ).toFixed(2) + '%'
      : '0%';

  const summary = {
    testResults: testResults,
    metrics: {
      http_reqs: metrics.http_reqs?.values || { count: 0 },
      http_req_duration: metrics.http_req_duration?.values || { avg: 0 },
      http_req_connecting: metrics.http_req_connecting?.values || { avg: 0 },
      http_req_tls_handshaking: metrics.http_req_tls_handshaking?.values || { avg: 0 },
      http_req_duration: metrics.http_req_duration?.values || { avg: 0 },
      iteration_duration: metrics.iteration_duration?.values || { avg: 0 },
      http_req_waiting: metrics.http_req_waiting?.values || { avg: 0 },
      http_req_sending: metrics.http_req_sending?.values || { avg: 0 },
      http_req_receiving: metrics.http_req_receiving?.values || { avg: 0 },
      http_req_blocked: metrics.http_req_blocked?.values || { avg: 0 },
      vus: metrics.vus?.values || { count: 0 },
      vus_max: metrics.vus_max?.values || { count: 0 },
      totalTestsMetric: metrics.total_tests?.values || { count: 0 },
      passedTestsMetric: metrics.passed_tests?.values || { count: 0 },
      failedTestsMetric: metrics.failed_tests?.values || { count: 0 },
      warningsMetric: metrics.warnings?.values || { count: 0 },
    },
  };

  return {
    'summary.json': JSON.stringify(summary, null, 2),
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
  };
}

`;
}


async function genK6TestCase(
  payloadPath: string,
  requestPath: string,
  className: string,
  outputDir: string,
) {
  const payloadData = readJsonFile(payloadPath);
  const requestModule = await import(requestPath);

  let requestConfig;
  const possibleExports = [
    className
      .split('-')
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join('') + 'Request',
    'default',
  ];

  for (const exportName of possibleExports) {
    let candidate = requestModule[exportName];
    if (candidate) {
      if (typeof candidate === 'function') {
        candidate = await candidate();
      }
      if (candidate.steps || candidate.options) {
        requestConfig = candidate;
        break;
      }
    }
  }

  if (!requestConfig) {
    console.error(`❌ Invalid request config for ${className}`);
    return;
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const MAX_TEST_CASES_PER_FILE = 500;
  const CHUNK_SIZE = 500;
  const totalChunks = Math.ceil(payloadData.length / CHUNK_SIZE);

  if (payloadData.length > MAX_TEST_CASES_PER_FILE) {
    for (let i = 0; i < totalChunks; i++) {
      const startIdx = i * CHUNK_SIZE;
      const endIdx = startIdx + CHUNK_SIZE;
      const chunkData = payloadData.slice(startIdx, endIdx);
      const chunkFileName = `${className}-chunk-${i + 1}.k6.js`;
      const outputPath = path.join(outputDir, chunkFileName);
      const chunkContent = await generateK6Content(
        chunkData,
        requestConfig,
        className,
      );

      fs.writeFileSync(outputPath, chunkContent, 'utf-8');
      console.log(`Generated K6 test file: ${outputPath}`);
    }
  } else {
    const content = await generateK6Content(
      payloadData,
      requestConfig,
      className,
    );
    const scriptPath = path.join(
      os.homedir(),
      'Documents',
      'k6-studio',
      'Scripts',
      `${className}`,
    );
    const filePath = path.join(scriptPath, `${className}.k6.js`);
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Successfully created K6 test: ${filePath}`);
  }
}

export function genK6Request(dtoName: string) {
  if (!fs.existsSync(dtoName)) {
    console.error(`❌ Target folder does not exist: ${dtoName}`);
    return;
  }

  const foundFolders = findAllFoldersWithDtoAndRequest(dtoName);
  const files = getMatchedFilePaths(foundFolders);
  const pairedFiles = pairFiles(files);

  console.log(`\n🔄 Processing K6 tests for: ${dtoName}`);

  pairedFiles.forEach(({ dtoPath, requestPath, className, folderPath }) => {
    if (!dtoPath || !requestPath) {
      console.warn(`Missing .dto or .request.ts for class: ${className}`);
      return;
    }

    const outputDir = folderPath;
    const payloadPath = path.join(outputDir, `${className}.payload.json`);

    if (fs.existsSync(payloadPath)) {
      genK6TestCase(payloadPath, requestPath, className, outputDir).catch(
        (err) => {
          console.error(`❌ Error processing ${className}:`, err.message);
        },
      );
    }
  });
}
