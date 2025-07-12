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
  // Get the primary action from the new structure
  console.log(JSON.stringify(requestConfig, null, 2))
  const primaryStep = requestConfig.steps?.[0];
  const primaryAction = primaryStep?.actions?.main?.[0];
  const primaryHeaders = primaryAction?.headers || {};
  const actionPath = primaryAction?.config?.path || '';
  const primaryMethod = primaryAction?.config?.method;
  const methodLowCase = primaryMethod.toLowerCase();

  return `
import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { Counter } from 'k6/metrics';
import { resolveVariables } from '../common/utils.js'
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
  failedStep: []
};

export const options = optionData;

export function setup() {
  return setupData
}

export default function (data) {
  let setupContext = data.data;
  let testCaseNumber = 0;

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
      
      const response = http.${methodLowCase}(
        'https://api-dev.ziichat.dev${actionPath}', 
        JSON.stringify(resolvedData), 
        { headers }
      );

     
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
            console.error(\`Failed to parse JSON for test \${test.number}: \${e.message}\`);
            expectDetails = [response.body || ''];
          }
        } else {
          expectDetails = response.body ? [response.body.trim()] : [];
        }
        softExpectDetails = [...expectDetails].sort();
      }
      console.log(softExpectDetails, test.expectedErrors )
      const allErrorsMatched = softExpectDetails.every(actualError => 
        test.expectedErrors.includes(actualError)
      );
      const exactMatch = allErrorsMatched && 
                       softExpectDetails.length === test.expectedErrors.length;

      let passed = exactMatch;
      let warning = !exactMatch && allErrorsMatched;
      check(response, {
        [\`Errors match for testcase #\${test.number}\`]: () =>  passed || warning
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
  });
}

export function teardown(data) {
  
}

export function handleSummary(data) {
  const metrics = data.metrics || {};

  const jsonOutput = {
    stdout: JSON.stringify({
      metrics: {
        http_reqs: data.metrics.http_reqs?.values || { count: 0 },
        http_req_duration: data.metrics.http_req_duration?.values || { avg: 0 },
        passedTestsMetric: metrics.passed_tests.values || { count: 0 },
        failedTestsMetric: metrics.failed_tests.values || { count: 0 },
        warningsMetric: metrics.warnings.values || { count: 0 }
      },
      testResults
    }, null, 2)
  };

  // Add the default text summary
  return {
    ...jsonOutput,
    'stdout': textSummary(data, { indent: ' ', enableColors: true })
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
