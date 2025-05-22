import * as path from 'path';
import * as fs from 'fs';
import { getResponseFile } from './helper';
async function genTestCase(
  responsePath: string,
  className: string,
  outputDir: string,
) {
  const responseFilePathWithoutExt = className.replace('.request.ts', '');
  const classNameCapitalized = responseFilePathWithoutExt
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  const responseModule = await import(responsePath);
  const responseConfig = responseModule[`${classNameCapitalized}ResponseConfig`];
  const specContent = `
    import fs from 'fs';
    import path from 'path';
    let allSteps = [];
    import { getTime, summarizeErrors, resolveCallAPI, resolveVariables } from '../../utils/helper';
    import { ${classNameCapitalized}Response } from '../../response/${className}.response';
    import { plainToInstance } from 'class-transformer';
    import { validateResponses } from '../../validates/validate-response';
    import { TestContext } from '../../utils/text-context';
    import { ${classNameCapitalized}ResponseConfig } from './${responseFilePathWithoutExt}.response';
    import { executeSteps } from '../../utils/text-execute-test';
    describe('Test response for ${className}', () => {
      let failedTests = [];
      let failedStep = []
      let passedTests = 0;
      let testNumber = 0;
      let totalTests = 0;
      let testCaseNumber = 0;
      let currentTestCaseTitle = ''
      let context,contextData, globalContext, pathRequest, payloadResponse, testType
      beforeAll(async () => {
        testType = 'response'
        globalContext = globalThis.globalContext;
        context = new TestContext();
        const beforeAllSteps = ${classNameCapitalized}ResponseConfig.options
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
          const beforeEachSteps = ${classNameCapitalized}ResponseConfig.options
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

      it('should validate response structure', async () => {
        testNumber++;
        totalTests++;
        try {
                const response = await resolveCallAPI(
                  ${JSON.stringify(responseConfig.action)},
                  ${JSON.stringify(responseConfig.headers)},
                  ${JSON.stringify(responseConfig.body)},
                  globalContext
                );
                const data = response.data;
          if(data.ok === false){
            failedTests.push({
              testcase: testNumber,
              error: data.error.details
            })
          }else {
            const instance = plainToInstance(${classNameCapitalized}Response, data);
            const validateResponse =await validateResponses(payloadResponse, instance, globalContext );
            if (validateResponse.length > 0) {
              failedTests.push({
                testcase: testNumber,
                error: validateResponse
              })
            }else {
              passedTests++;
            }
          
          }
        
        } catch (error) {
          console.error('Test failed:', error);
        }
      });

      afterEach(async () => {
          testCaseNumber++;
          const afterEachSteps = ${classNameCapitalized}ResponseConfig.options
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

        const afterAllSteps = ${classNameCapitalized}ResponseConfig.options
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
        const folderPath = path.join(__dirname, '../reports/${className}');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }

        const summary = summarizeErrors(failedTests, null, null);
        const classNames = \`${className}\`;
        const reportFileName = \`${className}-response-\${getTime()}.report.txt\`;  
        const { combinedReportTemplate } = await import('../../utils/report-file');
        const reportContent = combinedReportTemplate(
            classNames,
            globalThis.url,
            pathRequest,
            failedStep,
            passedTests,
            failedTests,
            totalTests,
            null,
            summary,
            testType
        );
        
        const reportPath = path.join(folderPath, reportFileName);
        fs.writeFileSync(reportPath, reportContent, 'utf-8');
        console.log(\`📄 Response test report generated: \${reportPath}\`);
      });
    });
  `;

  const outputPath = path.join(outputDir, `${className}.response.spec.ts`);
  fs.writeFileSync(outputPath, specContent, 'utf-8');
  console.log(`✅ Generated response test: ${outputPath}`);
}
export function genTestResponse(dtoName: string) {
  const responsesDir = path.join(__dirname, '../test-responses', dtoName);
  // Chỉ lấy file response.json
  const responseFile = getResponseFile(responsesDir);

  if (!responseFile) {
    console.error(`No .response.ts file found in ${responsesDir}`);
    return;
  }

  console.log(`Found response file: ${responseFile}`);

  const className = path.basename(responseFile, '.response.ts');
  const outputDir = path.join(__dirname, `../test-responses/${dtoName}`);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  genTestCase(responseFile, className, outputDir);
}
