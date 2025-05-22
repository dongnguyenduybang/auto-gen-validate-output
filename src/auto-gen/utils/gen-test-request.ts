import * as path from 'path';
import * as fs from 'fs';
import { formatExpectErrors, getAllFiles, pairFiles, readJsonFile, resolveActionPath } from './helper';

async function generateSpecContent(
  testCases: any[],
  requestConfig: any,
  className: string,
  chunkNumber?: number,
  startIndex: number = 0,
  totalChunks?: number
): Promise<string> {

      const requestFilePathWithoutExt = className.replace('.request.ts', '');
    const classNameCapitalized = requestFilePathWithoutExt
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');


  return `
    import fs from 'fs';
    import path from 'path';
    import { summaryFields, resolveCallAPI, resolveVariables } from '../../utils/helper';
    import { TestResult } from '../../utils/declarations';
    import { executeSteps } from '../../utils/text-execute-test';
    import { TestContext } from '../../utils/text-context';
    import { ${classNameCapitalized}Request } from './${requestFilePathWithoutExt}.request';
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
        let currentTestCaseTitle = ''
        let context, contextData;
        
        beforeAll(async () => {
          testType = 'request';
          globalContext = globalThis.globalContext;
          context = new TestContext();
          const beforeAllSteps = ${classNameCapitalized}Request.options
            ?.find((option) => option.beforeAll)
            ?.beforeAll || [];

          if (beforeAllSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(beforeAllSteps, contextData);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: \`Case \${testCaseNumber}\`,
                phase: 'beforeAll',
              });
            });
          }else {
            contextData = globalContext
          }
        });
        beforeEach(async () => {
          testCaseNumber++;
          const beforeEachSteps = ${classNameCapitalized}Request.options
            ?.find((option) => option.beforeEach)
            ?.beforeEach || [];

          if (beforeEachSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(beforeEachSteps, contextData);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: \`Case \${testCaseNumber}\`,
                phase: 'beforeEach',
              });
            });
          }else {
            contextData = globalContext
          }
        });

        ${testCases
      .map(
        (testCase, index) => `
            it('Test case #${startIndex + index + 1} should return errors ${formatExpectErrors(testCase.expects)} when body ${JSON.stringify(testCase.body)}', async () => {
              testNumber = ${startIndex + index + 1};
              totalTests++;
              const payloadObj = ${JSON.stringify(testCase.body)};
              resolvedData = resolveVariables(payloadObj, contextData);
              
              try {
                const response = await resolveCallAPI(
                  ${JSON.stringify(requestConfig.action)},
                  ${JSON.stringify(requestConfig.headers)},
                  ${JSON.stringify(testCase.body)},
                  contextData
                );
                const data = response.data;
                const expectJson = ${JSON.stringify(testCase.expects)}.sort();

                let expectDetails;
                let softExpectDetails;
                switch (response.status) {
                  case 200:
                    expectDetails = Array.isArray(data?.error?.details)
                      ? data.error.details
                      : [];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                      });
                    } catch (error) {
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 200,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
                    break;
                  case 403:
                    expectDetails = Array.isArray(data) ? data : [data];
                    softExpectDetails = [...expectDetails].sort();
                    try {
                      expect(expectJson).toEqual(softExpectDetails);
                      passedTests++;
                      codedTest.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                      });
                    } catch (error) {
                      const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                      failedTests.push({
                        testcase: testNumber,
                        code: 403,
                        body: resolvedData,
                        missing: missing || [],
                        extra: extra || []
                      });
                    }
                    break;
                  case 500:
                    failedTests.push({
                      testcase: testNumber,
                      code: 500,
                      errorDetails: expectJson,
                    });
                    break;
                  default:
                    failedTests.push({
                      testcase: testNumber,
                      code: response.status,
                      errorDetails: 'Unexpected status code'
                    });
                }
              } catch (error) {
                console.error('Error in test case #' + testNumber, error);
                failedTests.push({
                  testcase: testNumber,
                  error: error.message
                });
              }
            });`
      )
      .join('\n')}
      afterEach(async () => {
          testCaseNumber++;
          const afterEachSteps = ${classNameCapitalized}Request.options
            ?.find((option) => option.afterEach)
            ?.afterEach || [];

          if (afterEachSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(afterEachSteps, contextData);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: \`Case \${testCaseNumber}\`,
                phase: 'afterEach',
              });
            });
          }else {
            contextData = globalContext
          }
        });

         afterAll(async () => {
          const afterAllSteps = ${classNameCapitalized}Request.options
            ?.find((option) => option.afterAll)
            ?.afterAll || [];

          if (afterAllSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(afterAllSteps, contextData);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle: \`Case \${testCaseNumber}\`,
                phase: 'afterAll',
              });
            });
          }else {
            contextData = globalContext
          }
          
          // Lưu kết quả vào biến toàn cục
          const testResult: TestResult = {
            path: '${resolveActionPath(requestConfig.action)}',
            className: '${className}',
            allSteps: allSteps,
            chunkNumber: ${chunkNumber || 'undefined'},
            failedTests: [...failedTests],
            codedTest: [...codedTest],
            passedTests: passedTests,
            totalTests: totalTests,
            logicTests: [...logicTests],
            failedStep: [...failedStep]
          };
          const reportDir = path.join(__dirname, '../../tmp-reports');
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  const chunkNumber = ${chunkNumber}
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
  outputDir: string
) {
  const payloadData = readJsonFile(payloadPath);
  console.log(`Total test cases in ${payloadPath}: ${payloadData.length}`);

  const classNameCapitalized = className
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  const requestModule = await import(requestPath);
  const requestConfig = requestModule[`${classNameCapitalized}Request`];

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

      const chunkSpecContent = await generateSpecContent(
        chunkData,
        requestConfig,
        className,
        i + 1,
        startIdx,
        totalChunks
      );

      const chunkFileName = `${className}-chunk-${i + 1}.spec.ts`;
      const outputPath = path.join(outputDir, chunkFileName);

      fs.writeFileSync(outputPath, chunkSpecContent, 'utf-8');
      console.log(`Generated test file: ${outputPath}`);
    }
  } else {

    const specContent = await generateSpecContent(
      payloadData,
      requestConfig,
      className
    );

    const outputPath = path.join(outputDir, `${className}.spec.ts`);
    fs.writeFileSync(outputPath, specContent, 'utf-8');
    console.log(`Success: ${outputPath}`);
  }
}
export function genTestRequest(dtoName: string) {
  const dtosDir = path.join(__dirname, '../test-requests', dtoName);
  const payloadsDir = path.join(__dirname, '../test-requests', dtoName);
  const allFiles = getAllFiles(dtosDir);
  const pairedFiles = pairFiles(allFiles);

  pairedFiles.forEach(({ dtoPath, requestPath, className }) => {
    if (dtoPath && requestPath) {
      const payloadPath = path.join(payloadsDir, `${className}.payload.json`);
      const outputDir = path.join(__dirname, `../test-requests/${className}`);

      if (fs.existsSync(payloadPath)) {
        genTestCase(payloadPath, requestPath, className, outputDir)
          .catch(err => console.error(`Error generating tests for ${className}:`, err));
      } else {
        console.warn(`Missing payload file for class: ${className}`);
      }
    } else {
      console.warn(`Missing .dto or .request.ts for class: ${className}`);
    }
  });
}