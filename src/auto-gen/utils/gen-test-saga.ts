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
  sagaFiles.forEach(async (sagaFile) => {
    const sagaFilePathWithoutExt = sagaFile.replace('.saga.ts', '');
    const classNameCapitalized = sagaFilePathWithoutExt
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');

    // dynamic define it 
    const sagaModule = await import(path.join(baseFolder, sagaFile));
    const sagaConfig = sagaModule[`${classNameCapitalized}Saga`];
    const itBlocks = sagaConfig.steps
      .map(
        (step: { title: string; step: any[] }, index: number) => `
        it('${step.title}', async () => {
          currentTestCaseTitle = '${step.title}';
          const results = await executeSteps(${classNameCapitalized}Saga.steps[${index}].step, contextData);
          results.forEach((result) => {
            allSteps.push({
              ...result,
              caseTitle: currentTestCaseTitle ,
              phase: 'test',
            });
          });
        });
      `,
      )
      .join('\n');

    const outputDir = path.join(__dirname, `../test-sagas/${dtoName}`);
    const specContent = `
      import fs from 'fs';
      import path from 'path';
      import { getTime } from '../../utils/helper';
      import { executeSteps } from '../../utils/text-execute-test';
      import { TestContext } from '../../utils/text-context';
      import { ${classNameCapitalized}Saga } from './${sagaFilePathWithoutExt}.saga';

      describe('Test sagas for ${sagaFilePathWithoutExt}', () => {
        let allSteps = [];
        let testType;
        let globalContext, pathRequest, context, contextData;
        let testCaseNumber = 0;
        let currentTestCaseTitle = ''
        beforeAll(async () => {
          pathRequest = '${classNameCapitalized}Saga';
          testType = 'saga';
          globalContext = globalThis.globalContext;
          context = new TestContext();
        });

        beforeEach(async () => {
          testCaseNumber++;
          const beforeEachSteps = ${classNameCapitalized}Saga.options
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

        // tạo dynamic tests từ steps
        ${itBlocks}
        afterEach(async () => {
          const afterEachSteps = ${classNameCapitalized}Saga.options
            ?.find((option) => option.afterEach)
            ?.afterEach || [];

          if (afterEachSteps.length > 0) {
            contextData = context.clone();
            const results = await executeSteps(afterEachSteps, contextData);
            results.forEach((result) => {
              allSteps.push({
                ...result,
                caseTitle:  currentTestCaseTitle || 'AfterEach Setup',
                phase: 'afterEach',
              });
            });
          }
        });

        afterAll(async () => {
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
          fs.writeFileSync(path.join(folderPath, reportFileName), reportContent, 'utf-8');
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
