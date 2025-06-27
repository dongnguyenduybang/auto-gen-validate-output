import * as path from 'path';
import * as fs from 'fs';
import {
  findAllFoldersWithDtoAndRequest,
  formatExpectErrors,
  getAllFiles,
  getMatchedFilePaths,
  pairFiles,
  readJsonFile,
  resolveActionPath,
} from './helper';

function getRelativeImportPath(fromPath: string, toPath: string): string {
  const relativePath = path.relative(path.dirname(fromPath), toPath);
  return relativePath.split(path.sep).join('/');
}

async function generateSpecContent(
  testCases: any[],
  requestConfig: any,
  className: string,
  outputPath: string,
  chunkNumber?: number,
  startIndex: number = 0,
  totalChunks?: number,
): Promise<string> {
  const requestFilePathWithoutExt = className.replace('.request.ts', '');
  const classNameCapitalized =
    requestFilePathWithoutExt
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('') + 'Request';


  const utilsPath = path.join(__dirname, '../utils');
  const requestImportPath = `./${requestFilePathWithoutExt}.request`;

  const utilsImportPath =
    getRelativeImportPath(outputPath, utilsPath) || '@utils';

  // Assume the first step's first action is the primary action to test
  const primaryStep = requestConfig.options[0]?.steps[0]?.step[0] || {};
  const primaryAction = primaryStep.action || '';
  const primaryHeaders = primaryStep.headers || {};

  return `
    import fs from 'fs';
    import path from 'path';
    import { summaryFields, resolveCallAPI, resolveVariables } from '${utilsImportPath}/helper';
    import { TestResult } from '${utilsImportPath}/declarations';
    import { executeSteps } from '${utilsImportPath}/text-execute-test';
    import { TestContext } from '${utilsImportPath}/text-context';
    import { ${classNameCapitalized} } from './${requestImportPath}';
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
          const beforeAllSteps = ${classNameCapitalized}.options[0]?.beforeAll || [];

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
          const beforeEachSteps = ${classNameCapitalized}.options[0]?.beforeEach || [];

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
            '${primaryAction}',
            ${JSON.stringify(primaryHeaders)},
            ${JSON.stringify(testCase.body)},
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
                    // passedTests++;
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
});`,
      )
      .join('\n')}
      afterEach(async () => {
          testCaseNumber++;
          const afterEachSteps = ${classNameCapitalized}.options[0]?.afterEach || [];

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
          const afterAllSteps = ${classNameCapitalized}.options[0]?.afterAll || [];

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
            path: '${resolveActionPath(primaryAction)}',
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
        })
  `;
}

async function genTestCase(
  payloadPath: string,
  requestPath: string,
  className: string,
  outputDir: string,
) {
  const payloadData = readJsonFile(payloadPath);

  const classNameCapitalized = className
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  const requestModule = await import(requestPath);

  // Flexible request export detection
  let requestConfig;
  if (requestModule[classNameCapitalized]) {
    requestConfig = requestModule[classNameCapitalized];
  } else if (requestModule[classNameCapitalized + 'Request']) {
    requestConfig = requestModule[classNameCapitalized + 'Request'];
  } else if (requestModule.default) {
    requestConfig = requestModule.default;
  } else {
    // Try to find any export with options
    for (const key of Object.keys(requestModule)) {
      if (requestModule[key]?.options) {
        requestConfig = requestModule[key];
        break;
      }
    }
  }

  if (!requestConfig?.options) {
    console.error(`❌ Invalid request config for ${className}`);
    console.log('Available exports:', Object.keys(requestModule));
    console.log('Request module content:', requestModule);
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
    );

    fs.writeFileSync(outputPath, specContent, 'utf-8');
    console.log(`✅ Successfully created: ${outputPath}`);
    console.log('-----------------------');
  }
}

export function genTestRequest(dtoName: string) {
  const baseRequestsPath = path.join(__dirname, '../test-requests');
  const searchPath = path.join(baseRequestsPath, dtoName);

  if (!fs.existsSync(searchPath)) {
    console.error(`❌ Target folder does not exist: ${searchPath}`);
    return;
  }

  const foundFolders = findAllFoldersWithDtoAndRequest(searchPath);
  const file = getMatchedFilePaths(foundFolders);
  const pairedFiles = pairFiles(file);

  // Tạo map để truy cập nhanh folder theo path
  const folderMap = new Map();
  foundFolders.forEach(folder => {
    folderMap.set(folder.path, folder);
  });

  pairedFiles.forEach(({ dtoPath, requestPath, className, folderPath }) => {
    if (!dtoPath || !requestPath) {
      console.warn(`Missing .dto or .request.ts for class: ${className}`);
      return;
    }

    // Chỉ kiểm tra trong folder chứa file hiện tại
    const outputDir = folderPath;
    const payloadPath = path.join(outputDir, `${className}.payload.json`);

    if (fs.existsSync(payloadPath)) {
      genTestCase(payloadPath, requestPath, className, outputDir).catch(
        err => console.error(`Error generating tests for ${className}:`, err)
      );
    } else {
      console.warn(`Missing payload file for class: ${className} in ${outputDir}`);
    }
  });
}