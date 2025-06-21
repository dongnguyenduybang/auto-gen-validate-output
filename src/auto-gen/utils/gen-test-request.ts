import * as path from 'path';
import * as fs from 'fs';
import {
  findAllFoldersWithDtoAndRequest,
  formatExpectErrors,
  getMatchedFilePaths,
  kebabToCamel,
  pairFiles,
  readJsonFile,
  resolveActionPath,
} from './helper';

import { RequestTestSuite, Step } from './declarations';
import { generateRequestTestSuite } from './swagger-help';
import { commandsMessageHttpClient, HttpClient } from '../swagger-hono/commands-message-client';

function getRelativeImportPath(fromPath: string, toPath: string): string {
  console.log(fromPath, toPath)
  const relativePath = path.relative(path.dirname(fromPath), toPath);
  return relativePath.split(path.sep).join('/');
}
export type HEADERS = Record<string, unknown>;
export type ClientMethod<TReq, TRes> = {
  (request: TReq, headers?: HEADERS): Promise<{
    status: number;
    data: TRes;
    error: object;
  }>;
};

export const getResponseSuccess = async <TReq, TRes>(
  request: TReq,
  method: ClientMethod<TReq, TRes>,
  headers?: HEADERS,
): Promise<TRes> => {
  // console.log(headers)
  // console.log(headers, request)
  const response = await method(request, headers);


  // console.log(response)
  const { data, status } = response;
  return data;
};


async function generateSpecContent(
  testCases: any[],
  requestConfig: RequestTestSuite,
  className: string,
  outputPath: string,
  chunkNumber?: number,
  startIndex: number = 0,
  totalChunks?: number,
  httpCall?: any,
  camelDTO?: string
): Promise<string> {

  const utilsPath = path.join(__dirname, '../utils');
  const utilsImportPath = getRelativeImportPath(outputPath, utilsPath) || '@utils';

  return `
    import fs from 'fs';
    import path from 'path';
    import { summaryFields, resolveCallAPI, resolveVariables } from '${utilsImportPath}/helper';
    import { TestResult } from '${utilsImportPath}/declarations';
    import { executeSteps } from '${utilsImportPath}/text-execute-test';
    import { TestContext } from '${utilsImportPath}/text-context';

    describe('Testcase for ${className}${chunkNumber ? ` (Chunk ${chunkNumber})` : ''}', () => {
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
          const beforeAllSteps = ${JSON.stringify(requestConfig.options[0].beforeAll || [])};

          if (beforeAllSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(beforeAllSteps, globalContext);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: \`Case \${testCaseNumber}\`,
                phase: 'beforeAll',
              });
            });
          } else {
            contextData = globalContext;
          }
        });

        beforeEach(async () => {
          testCaseNumber++;
          const beforeEachSteps = ${JSON.stringify(requestConfig.options[0].beforeEach || [])};

          if (beforeEachSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(beforeEachSteps, globalContext);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: \`Case \${testCaseNumber}\`,
                phase: 'beforeEach',
              });
            });
          } else {
            contextData = globalContext;
          }
        });

        ${testCases
      .map(
        (testCase, index) => `
            it('Test case #${startIndex + index + 1} should return errors ${formatExpectErrors(testCase.expects)} when body ${JSON.stringify(testCase.body)}', async () => {
              testNumber = ${startIndex + index + 1};
              totalTests++;
              const payloadObj = ${JSON.stringify(testCase.body)};
              resolvedData = resolveVariables(payloadObj, globalContext);
              
              try {
                const response = await resolveCallAPI(
                  '${requestConfig.action}',
                  ${JSON.stringify(requestConfig.headers)},
                  resolvedData,
                  contextData
                );
    
                const data = response.data;
                const expectJson = ${JSON.stringify(testCase.expects)}.sort();

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
            `,
      )
      .join('\n')}

        afterEach(async () => {
          testCaseNumber++;
          const afterEachSteps = ${JSON.stringify(requestConfig.options[0].afterEach || [])};

          if (afterEachSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(afterEachSteps, globalContext);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: \`Case \${testCaseNumber}\`,
                phase: 'afterEach',
              });
            });
          } else {
            contextData = globalContext;
          }
        });

        afterAll(async () => {
          const afterAllSteps = ${JSON.stringify(requestConfig.options[0].afterAll || [])};

          if (afterAllSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(afterAllSteps, globalContext);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: \`Case \${testCaseNumber}\`,
                phase: 'afterAll',
              });
            });
          } else {
            contextData = globalContext;
          }
          
          const testResult: TestResult = {
            path: '',
            className: '${className}',
            allSteps: allSteps,
            chunkNumber: ${chunkNumber || 'undefined'},
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
          const chunkNumber = ${chunkNumber};
          const fileName = '${className}' + (chunkNumber ? \`-chunk-${chunkNumber}\` : '') + '.result.json';
          const filePath = path.join(reportDir, fileName);
          fs.writeFileSync(filePath, JSON.stringify(testResult, null, 2), 'utf-8');

          console.log(\`📝 Saved result for ${className} chunk ${chunkNumber || 'single'} to \${filePath}\`);
        });
    });
  `;
}

async function genTestCase(
  payloadPath: string,
  className: string,
  outputDir: string,
  httpCall: any,
  camelDTO: string,
) {

  const payloadData = readJsonFile(payloadPath);
  console.log(`Total test cases in ${payloadPath}: ${payloadData.length}`);

  // Lấy RequestTestSuite từ generateRequestTestSuite
  const requestConfig = await generateRequestTestSuite(className);

  // Tạo thư mục output nếu chưa tồn tại
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
      const chunkFileName = `${className}-chunk-${i + 1}.spec.ts`;
      const outputPath = path.join(outputDir, chunkFileName);
      const chunkSpecContent = await generateSpecContent(
        chunkData,
        requestConfig,
        className,
        outputPath,
        i + 1,
        startIdx,
        totalChunks,
        httpCall,
        camelDTO
      );

      fs.writeFileSync(outputPath, chunkSpecContent, 'utf-8');
      console.log(`Generated test file: ${outputPath}`);
    }
  } else {
    const outputPath = path.join(outputDir, `${className}.spec.ts`);
    const specContent = await generateSpecContent(
      payloadData,
      requestConfig,
      className,
      outputPath,
      null,
      null,
      null,
      httpCall,
      camelDTO
    );

    fs.writeFileSync(outputPath, specContent, 'utf-8');
    console.log(`Success: ${outputPath}`);
  }
}

export async function genTestRequest(dtoName: string, cluster: string) {
  const baseRequestsPath = path.join(__dirname, '../test-requests');
  const foundFolders = findAllFoldersWithDtoAndRequest(baseRequestsPath, dtoName);
  const file = getMatchedFilePaths(foundFolders);
  const http = new HttpClient({ baseUrl: 'https://api-hono.rpc.ziichat.dev' });
  const client = new commandsMessageHttpClient(http)[cluster];
  const camelDTO = kebabToCamel(dtoName)
  for (const folder of foundFolders) {
    const outputDir = folder.path;
    const className = dtoName.toLowerCase();
    const payloadPath = path.join(outputDir, `${className}.payload.json`);
    if (fs.existsSync(payloadPath)) {
      try {
        await genTestCase(payloadPath, className, outputDir, client, camelDTO);
      } catch (err) {
        console.error(`Error generating tests for ${className}:`, err);
      }
    } else {
      console.warn(`Missing payload file for class: ${className}`);
    }
  }
}