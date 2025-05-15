import * as path from 'path';
import * as fs from 'fs';
import { formatExpectErrors, readJsonFile, resolveActionPath } from './helper';

// Hàm đọc tất cả các file từ thư mục
function getAllFiles(dirPath: string): string[] {
  let files: string[] = [];
  const items = fs.readdirSync(dirPath);
  items.forEach((item) => {
    const itemPath = path.join(dirPath, item);
    if (fs.statSync(itemPath).isDirectory()) {
      files = files.concat(getAllFiles(itemPath));
    } else {
      files.push(itemPath);
    }
  });
  return files;
}

// Ghép cặp file .dto.ts và .request.json
function pairFiles(
  files: string[],
): { dtoPath: string; requestPath: string; className: string }[] {
  const fileMap: Record<string, { dtoPath?: string; requestPath?: string }> = {};
  files.forEach((filePath) => {
    const fileName = path.basename(filePath, path.extname(filePath));
    if (filePath.endsWith('.dto.ts') || filePath.endsWith('.dto.js')) {
      const className = fileName.replace('.dto', '');
      fileMap[className] = fileMap[className] || {};
      fileMap[className].dtoPath = filePath;
    } else if (filePath.endsWith('.request.ts')) {
      const className = fileName.replace('.request', '');
      fileMap[className] = fileMap[className] || {};
      fileMap[className].requestPath = filePath;
    }
  });
  return Object.entries(fileMap).map(
    ([className, { dtoPath, requestPath }]) => ({
      dtoPath,
      requestPath,
      className,
    }),
  );
}

// Hàm tạo nội dung test case
async function generateSpecContent(
  testCases: any[],
  requestConfig: any,
  className: string,
  chunkNumber?: number,
  startIndex: number = 0,
  totalChunks?: number
): Promise<string> {
  return `
    import fs from 'fs';
    import path from 'path';
    import { summaryFields, resolveCallAPI, resolveVariables } from '../../utils/helper';
    import { executeAllSteps } from '../../utils/test-executor';
    import { TestResult } from '../../utils/declarations';
    describe('Testcase for ${className}${chunkNumber ? ` (Chunk ${chunkNumber})` : ''}', () => {
        let totalTests = 0;
        let failedTests: any[] = [];
        let codedTest: any[] = [];
        let logicTests: any[] = [];
        let passedTests = 0;
        let testNumber: number;
        let failedStep: any[] = [];
        let testType: string;
        let resolvedData: any;
        let globalContext: any;
        
        beforeAll(async () => {
          testType = 'request';
          globalContext = globalThis.globalContext;
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
                  ${JSON.stringify(requestConfig.action)},
                  ${JSON.stringify(requestConfig.headers)},
                  ${JSON.stringify(testCase.body)},
                  globalContext
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

        afterAll(async () => {
          const resultStep = await executeAllSteps(${JSON.stringify(requestConfig.afterAll)}, globalContext);
          resultStep.forEach((step) => {
            failedStep.push({
              type: step.type,
              status: step.status,
              stepName: step.stepName,
              error: step.error
            });
          });
          
          // Lưu kết quả vào biến toàn cục
          const testResult: TestResult = {
            path: '${resolveActionPath(requestConfig.action)}',
            className: '${className}',
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

// Hàm chính tạo test case
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

  const MAX_TEST_CASES_PER_FILE = 1000;
  const CHUNK_SIZE = 500;
  const totalChunks = Math.ceil(payloadData.length / CHUNK_SIZE);

  if (payloadData.length > MAX_TEST_CASES_PER_FILE) {
    for (let i = 0; i < totalChunks; i++) {
      const startIdx = i * CHUNK_SIZE;
      const endIdx = startIdx + CHUNK_SIZE;
      const chunkData = payloadData.slice(startIdx, endIdx);

      // Tạo nội dung cho từng chunk
      const chunkSpecContent = await generateSpecContent(
        chunkData,
        requestConfig,
        className,
        i + 1,
        startIdx,
        totalChunks
      );

      // Tạo tên file cho từng chunk
      const chunkFileName = `${className}-chunk-${i + 1}.spec.ts`;
      const outputPath = path.join(outputDir, chunkFileName);

      // Ghi file
      fs.writeFileSync(outputPath, chunkSpecContent, 'utf-8');
      console.log(`Generated test file: ${outputPath}`);
    }
  } else {
    // Nếu số lượng test case nhỏ hơn ngưỡng, tạo file duy nhất
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

// Hàm chính để generate test request
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