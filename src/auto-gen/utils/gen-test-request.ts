import * as path from 'path';
import * as fs from 'fs';
import {
  findAllFoldersWithDtoAndRequest,
  formatExpectErrors,
  getMatchedFilePaths,
  pairFiles,
  readJsonFile,
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

  // Get the primary action from the new structure
  const primaryStep = requestConfig.steps?.[0];
  const primaryAction = primaryStep?.actions?.main?.[0];
  const actionName = primaryAction?.action || '';
  const primaryHeaders = primaryAction?.headers || {};
  const actionPath = primaryAction?.config?.path || '';

  return `
    import fs from 'fs';
    import path from 'path';
    import { resolveCallAPI, resolveVariables, findReportsDirectory } from '${utilsImportPath}/helper';
    import { TestResult } from '${utilsImportPath}/declarations';
    import { executeSteps } from '${utilsImportPath}/text-execute-test';
    import { ${classNameCapitalized} } from './${requestImportPath}';
    
    describe('Testcase for ${className}${chunkNumber ? ` (Chunk ${chunkNumber})` : ''}', () => {
        let totalTests = 0;
        let allSteps = [];
        let failedTests: any[] = [];
        let codedTest: any[] = [];
        let passedTests = 0;
        let testNumber: number;
        let failedStep: any[] = [];
        let testType: string;
        let resolvedData: any;
        let globalContext: any;
        let testCaseNumber = 0;
        let warnings: any[] = [];
        let requestConfig: any;

        beforeAll(async () => {
          testType = 'request';
          globalContext = globalThis.globalContext;
          
          requestConfig = typeof ${classNameCapitalized} === 'function'
                      ? await ${classNameCapitalized}()
                      : ${classNameCapitalized};


          const beforeAllSteps = requestConfig.steps?.[0]?.actions?.beforeAll || [];

          if (beforeAllSteps.length > 0) {
            const results = await executeSteps(beforeAllSteps, globalContext);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: \`Case \${testCaseNumber}\`,
                phase: 'beforeAll',
              });
            });
          }
        }, 20000);

        beforeEach(async () => {
          testCaseNumber++;
          
          const beforeEachSteps = requestConfig.steps?.[0]?.actions?.beforeEach || [];

          if (beforeEachSteps.length > 0) {

            const results = await executeSteps(beforeEachSteps, globalContext);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: \`Case \${testCaseNumber}\`,
                phase: 'beforeEach',
              });
            });
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
            '${actionName}',
            ${JSON.stringify(primaryHeaders)},
            ${JSON.stringify(testCase.body)},
            globalContext
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
        
          const afterEachSteps = requestConfig.steps?.[0]?.actions?.afterEach || [];

          if (afterEachSteps.length > 0) {
            const results = await executeSteps(afterEachSteps, globalContext);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: \`Case \${testCaseNumber}\`,
                phase: 'afterEach',
              });
            });
          }
        });

        afterAll(async () => {
      
          const afterAllSteps = requestConfig.steps?.[0]?.actions?.afterAll || [];

          if (afterAllSteps.length > 0) {
            const results = await executeSteps(afterAllSteps, globalContext);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: \`Case \${testCaseNumber}\`,
                phase: 'afterAll',
              });
            });
          }
          
          const testResult: TestResult = {
            path: '${actionPath}',
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
          
          const currentFileDir = __dirname;
          const reportDir = findReportsDirectory(currentFileDir);
          const chunkNumber = ${chunkNumber};
          const fileName = '${className}' + (chunkNumber ? \`-chunk-${chunkNumber}\` : '') + '.result.json';
          const filePath = path.join(reportDir, fileName);
          fs.writeFileSync(filePath, JSON.stringify(testResult, null, 2), 'utf-8');

          console.log(\`📝 Saved result for ${className} chunk ${chunkNumber || 'single'} to \${filePath}\`);
        });
    });
  `;
}

// Type guard functions
function isPromise(obj: any): obj is Promise<any> {
  return obj && typeof obj === 'object' && typeof obj.then === 'function';
}

function isFunction(obj: any): obj is Function {
  return typeof obj === 'function';
}

function hasValidSteps(obj: any): obj is { steps: any[] } {
  return obj && obj.steps && Array.isArray(obj.steps);
}

function hasValidOptions(obj: any): obj is { options: any[] } {
  return obj && obj.options && Array.isArray(obj.options);
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

  // Flexible request export detection with new structure support
  let requestConfig;

  // Try different export patterns
  const possibleExports = [
    classNameCapitalized,
    classNameCapitalized + 'Request',
    'default',
  ];

  for (const exportName of possibleExports) {
    let candidate = requestModule[exportName];

    if (candidate) {
      // If candidate is a function, try to execute it
      if (isFunction(candidate)) {
        try {
          candidate = candidate(); // Execute function

          // If result is a Promise, await it
          if (isPromise(candidate)) {
            candidate = await candidate;
          }
        } catch (error) {
          console.error(`Error executing function ${exportName}:`, error);
          continue;
        }
      }
      // If candidate is a Promise, resolve it
      else if (isPromise(candidate)) {
        candidate = await candidate;
      }

      // Check for new structure (steps array)
      if (hasValidSteps(candidate)) {
        requestConfig = candidate;
        break;
      }
      // Check for old structure (options array)
      else if (hasValidOptions(candidate)) {
        requestConfig = candidate;
        break;
      }
    }
  }

  // If no direct match, try to find any export with steps or options
  if (!requestConfig) {
    console.log('No direct match found, trying fallback...');
    for (const [key, value] of Object.entries(requestModule)) {
      let candidate = value;

      // Execute function if needed
      if (isFunction(candidate)) {
        console.log(`Fallback: ${key} is a function, executing...`);
        try {
          candidate = candidate(); // Execute function

          // If result is a Promise, await it
          if (isPromise(candidate)) {
            console.log(`Fallback: ${key} returned a Promise, awaiting...`);
            candidate = await candidate;
          }
        } catch (error) {
          console.error(`Fallback: Error executing function ${key}:`, error);
          continue;
        }
      }
      // Resolve Promise if needed
      else if (isPromise(candidate)) {
        console.log(`Fallback: ${key} is a Promise, resolving...`);
        candidate = await candidate;
      }

      // Check for valid structure
      if (hasValidSteps(candidate)) {
        console.log(`Fallback: Found valid steps structure for ${key}`);
        requestConfig = candidate;
        break;
      } else if (hasValidOptions(candidate)) {
        console.log(`Fallback: Found valid options structure for ${key}`);
        requestConfig = candidate;
        break;
      }
    }
  }

  // Validate the structure
  if (!requestConfig) {
    console.error(
      `❌ Invalid request config for ${className} - no steps or options found`,
    );
    console.log('Available exports:', Object.keys(requestModule));
    console.log(
      'Request module content:',
      JSON.stringify(requestModule, null, 2),
    );
    return;
  }

  // Check if it's the new structure or old structure
  const hasNewStructure =
    requestConfig.steps && Array.isArray(requestConfig.steps);
  const hasOldStructure =
    requestConfig.options && Array.isArray(requestConfig.options);

  if (!hasNewStructure && !hasOldStructure) {
    console.error(`❌ Invalid request config structure for ${className}`);
    console.log('Request config:', JSON.stringify(requestConfig, null, 2));
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

  let hasLoggedInitialization = false;

  const foundFolders = findAllFoldersWithDtoAndRequest(searchPath);
  const file = getMatchedFilePaths(foundFolders);
  const pairedFiles = pairFiles(file);

  // Tạo map để truy cập nhanh folder theo path
  const folderMap = new Map();
  foundFolders.forEach((folder) => {
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
      // Chỉ log 1 lần khi bắt đầu
      if (!hasLoggedInitialization) {
        console.log(`\n🔄 Processing: ${dtoName}`);
        console.log(`- ${outputDir}`);
        hasLoggedInitialization = true;
      }

      genTestCase(payloadPath, requestPath, className, outputDir).catch(
        (err) => {
          console.error(`❌ Error processing ${className}:`, err.message);
        },
      );
    }
  });
}
