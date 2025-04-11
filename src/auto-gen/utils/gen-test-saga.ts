import * as path from 'path';
import * as fs from 'fs';

export function genTestSaga(dtoName: string) {
  const classNameCapitalized = dtoName
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  const outputDir = path.join(__dirname, `../test-sagas/${dtoName}`);
  const specContent = `
    import fs from 'fs';
    import path from 'path';
    import { getTime } from '../../utils/helper';
    import { executeAllSteps } from '../../utils/test-executor';
    import { TestContext } from '../../utils/text-context';
    import { ${classNameCapitalized}Saga } from './${dtoName}.saga';
    describe('Test sagas for ${dtoName}', () => {
      let failedStep = [];
      let testNumber = 0;
      let testType;
      let globalContext, pathRequest
      beforeAll(async () => {
        pathRequest = '${classNameCapitalized}Saga'
        testType = 'saga'
        globalContext = new TestContext();
        });

      it('should validate response structure', async () => {
        testNumber++;
        try {
              const resultStep = await executeAllSteps(${classNameCapitalized}Saga.steps, globalContext)
              resultStep.forEach((step, index)=> {
                failedStep.push({
                  type: step.type,
                  status: step.status,
                  stepName: step.stepName,
                  error: step.error
                })
              })
          }catch (error){
            console.log(error)
          }         
      });

      afterAll(async () => {
        const folderPath = path.join(__dirname, '../reports/${dtoName}');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
        const classNames = \`${dtoName}\`;
        const reportFileName = \`${dtoName}-sagas-\${getTime()}.report.txt\`;  
        const { combinedReportTemplate } = await import('../../utils/report-file');
        const reportContent = combinedReportTemplate(
            classNames,
            globalThis.url,
            pathRequest,
            failedStep,
            null,
            null,
            null,
            null,
            null,
            testType
        );
        
        const reportPath = path.join(folderPath, reportFileName);
        fs.writeFileSync(reportPath, reportContent, 'utf-8');
        console.log(\`📄 Saga test report generated: \${reportPath}\`);
      });
    });
  `;

  const outputPath = path.join(outputDir, `${dtoName}.saga.spec.ts`);
  fs.writeFileSync(outputPath, specContent, 'utf-8');
  console.log(`✅ Generated saga test: ${outputPath}`);
}
