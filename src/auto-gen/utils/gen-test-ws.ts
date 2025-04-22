import * as path from 'path';
import * as fs from 'fs';

export function genTestWS(dtoName: string) {
  const classNameCapitalized = dtoName
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  const outputDir = path.join(__dirname, `../test-ws/${dtoName}`);
  const specContent = `
    import fs from 'fs';
    import path from 'path';
    import { getTime } from '../../utils/helper';
    import { executeAllSteps } from '../../utils/test-executor';
    import { TestContext } from '../../utils/text-context';
    import { ${classNameCapitalized}SagaWS } from './${dtoName}.ws';
    describe('Test sagas for ${dtoName}', () => {
      let failedStep = [];
      let testNumber = 0;
      let testType;
      let globalContext, pathRequest
      beforeAll(async () => {
        pathRequest = '${classNameCapitalized}Saga'
        testType = 'saga'
        globalContext = new TestContext();
         const resultStep = await executeAllSteps(${classNameCapitalized}SagaWS.steps,globalContext)
        });

      it('should validate response structure', async () => {
        testNumber++;
        try {
              const resultStep = await executeWSS(${classNameCapitalized}SagaWS.wss, globalContext)
              console.log(resultStep)
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
        console.log(\`📄 WS test report generated: \${reportPath}\`);
      });
    });
  `;

  const outputPath = path.join(outputDir, `${dtoName}.ws.spec.ts`);
  fs.writeFileSync(outputPath, specContent, 'utf-8');
  console.log(`✅ Generated WS test: ${outputPath}`);
}
