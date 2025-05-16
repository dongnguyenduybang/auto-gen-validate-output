import * as path from 'path';
import * as fs from 'fs';
import { getResponseFile } from './helper';
async function genTestCase(
  responsePath: string,
  className: string,
  outputDir: string,
) {
  const classNameCapitalized = className
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  const responseModule = await import(responsePath);
  const responseConfig = responseModule[`${classNameCapitalized}Response`];
  const specContent = `
    import fs from 'fs';
    import path from 'path';
    import axios from 'axios';
    import { getTime,resolveCallAPI, summarizeErrors } from '../../utils/helper';
    import { ${classNameCapitalized}Response } from '../../response/${className}.response';
    import { plainToInstance } from 'class-transformer';
    import { validateResponses } from '../../validates/validate-response';
    import { TestContext } from '../../utils/text-context';

    describe('Test response for ${className}', () => {
      let failedTests = [];
      let failedStep = []
      let passedTests = 0;
      let testNumber = 0;
      let totalTests = 0;
      let requestUrl, globalContext, pathRequest, payloadResponse, testType
      beforeAll(async () => {
        testType = 'response'
        globalContext = new TestContext();
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
          const data = response.data
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

      afterAll(async () => {
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
      
      })

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
