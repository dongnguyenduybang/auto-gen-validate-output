import * as path from 'path';
import * as fs from 'fs';
import { formatExpectErrors, readJsonFile } from '../helps/utils';

// Hàm đơn giản chỉ lấy file response.json
function getResponseFile(dirPath: string): string | null {
  try {
    const files = fs.readdirSync(dirPath);
    const responseFile = files.find(file => file.endsWith('.response.json'));
    return responseFile ? path.join(dirPath, responseFile) : null;
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
    return null;
  }
}

function genTestCase(
  responsePath: string,
  className: string,
  outputDir: string,
) {
  const responseConfig = readJsonFile(responsePath);
  const classNameCapitalized = className
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  const isDeleteMethod = responseConfig.method.toLowerCase() === 'delete';  

  const specContent = `
    import fs from 'fs';
    import path from 'path';
    import axios from 'axios';
    import { summarizeErrors, summaryFields, getTime } from '../../helps/utils';
    import { TestContext } from '../../test-execute-step/text-context';
    import { executeAllSteps, resolveVariables } from '../../test-execute-step/test-executor';
    import { SendMessageResponse } from '../../response/send-message.response';
    import { plainToInstance } from 'class-transformer';
    import { validateResponses } from '../../validates/validate-response';

    describe('Test response for ${className}', () => {
      let failedTests = [];
      let failedStep = []
      let passedTests = 0;
      let testNumber = 0;
      let totalTests = 0;
      let requestUrl, globalContext, resolvedHeader, pathRequest, methodRequest, headerRequest, payloadResponse, testType
      beforeAll(async () => {
        testType = 'response'
        globalContext = new TestContext();
        const resultStep = await executeAllSteps(${JSON.stringify(responseConfig.beforeAll)},globalContext)
        resultStep.forEach((step, index) => {
          failedStep.push({
            type: step.type,
            status: step.status,
            stepName: step.stepName,
            error: step.error
          })
        })
        headerRequest = ${JSON.stringify(responseConfig.headers)}
        resolvedHeader = resolveVariables(headerRequest, globalContext)
        pathRequest = ${JSON.stringify(responseConfig.path, null, 2)}
        methodRequest = ${JSON.stringify(responseConfig.method, null, 2)}
        payloadResponse = resolveVariables(${JSON.stringify(responseConfig.body, null, 2)}, globalContext);
        requestUrl = \`\${globalThis.url}\${pathRequest}\`
        });

      it('should validate response structure', async () => {
        testNumber++;
        totalTests++;
        try {
          const response = await axios.${responseConfig.method.toLowerCase()}(
            requestUrl, 
            payloadResponse,
            {
              headers: {...resolvedHeader},
              validateStatus: () => true 
            }
          );
          const data = response.data
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
        
        } catch (error) {
          console.error('Test failed:', error);
        }
      });

      afterAll(async () => {

        const resultStep = await executeAllSteps(${JSON.stringify(responseConfig.afterAll)},globalContext)
        resultStep.forEach((step, index) => {
          failedStep.push({
            type: step.type,
            status: step.status,
            stepName: step.stepName,
            error: step.error
          })
        })
        const folderPath = path.join(__dirname, '../reports/${className}');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }

        const summary = summarizeErrors(failedTests, null, null);
        const classNames = \`${className}\`;
        const reportFileName = \`${className}-response-\${getTime()}.report.txt\`;  
        const { combinedReportTemplate } = await import('../../gens/report-file');
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
    console.error(`No .response.json file found in ${responsesDir}`);
    return;
  }

  console.log(`Found response file: ${responseFile}`);

  const className = path.basename(responseFile, '.response.json');
  const outputDir = path.join(__dirname, `../test-responses/${dtoName}`);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  genTestCase(responseFile, className, outputDir);
}