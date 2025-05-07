import * as path from 'path';
import * as fs from 'fs';

export function genTestSaga(dtoName: string) {
  const baseFolder = path.join(__dirname, `../test-sagas/${dtoName}`);

  const files = fs.readdirSync(baseFolder);
  const sagaFiles = files.filter((file) => file.endsWith('.saga.ts'));

  if (sagaFiles.length === 0) {
    console.error(`No saga files found in folder: ${baseFolder}`);
    return;
  }
  sagaFiles.forEach((sagaFile) => {
    const sagaFilePathWithoutExt = sagaFile.replace('.saga.ts', '');
    const classNameCapitalized = sagaFilePathWithoutExt
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
    import { executeSteps } from '../../utils/text-execute-test';
    import { ${classNameCapitalized}Saga } from './${sagaFilePathWithoutExt}.saga';
    describe('Test sagas for ${sagaFilePathWithoutExt}', () => {
      let allSteps = [];
      let testNumber = 0;
      let testType;
      let globalContext, pathRequest
      beforeAll(async () => {
        pathRequest = '${classNameCapitalized}Saga'
        testType = 'saga'
        globalContext = new TestContext();
        const beforeResults = await executeSteps(
          ${classNameCapitalized}Saga.beforeAll.map(b => b.step),
          globalContext,
          { stepPrefix: '[BeforeAll] ' }
        );
        
        beforeResults.forEach(result => {
          allSteps.push({
            ...result,
            caseTitle: 'BeforeAll Setup',
            phase: 'beforeAll'
          });
        });
      });

      it('should validate saga structure', async () => {
        testNumber++;
        try {
    
          const caseResults = await Promise.all(
            ${classNameCapitalized}Saga.steps.map(async (testCase) => {
              const caseContext = globalContext.clone();
              const results = await executeSteps(testCase.step, caseContext);
             
              results.forEach(result => {
                allSteps.push({
                  ...result,
                  caseTitle: testCase.title,
                  phase: 'testCase'
                });
              });
            })
          );
          }catch (error){
            console.log(error)
          }         
      });

      afterAll(async () => {
        const afterResults = await executeSteps(
          ${classNameCapitalized}Saga.afterAll.map(a => a.step),
          globalContext,
          { stepPrefix: '[AfterAll] ' }
        );
        afterResults.forEach(result => {
          allSteps.push({
            ...result,
            caseTitle: 'AfterAll Cleanup',
            phase: 'afterAll'
          });
        });
        const folderPath = path.join(__dirname, '../reports/${dtoName}');
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
        const classNames = \`${sagaFilePathWithoutExt}\`;
        const reportFileName = \`${sagaFilePathWithoutExt}-sagas-\${getTime()}.report.txt\`;  
        const { combinedReportTemplate } = await import('../../utils/report-file');
        const reportContent = combinedReportTemplate(
            classNames,
            globalThis.url,
            pathRequest,
            allSteps,
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

    const outputPath = path.join(
      outputDir,
      `${sagaFilePathWithoutExt}.saga.spec.ts`,
    );
    fs.writeFileSync(outputPath, specContent, 'utf-8');
    console.log(`✅ Generated saga test: ${outputPath}`);
  });
}
