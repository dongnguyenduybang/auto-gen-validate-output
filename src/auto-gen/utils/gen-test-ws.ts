import * as path from 'path';
import * as fs from 'fs';

export function genTestWS(dtoName: string) {
  const baseFolder = path.join(__dirname, `../test-ws/${dtoName}`);

  const files = fs.readdirSync(baseFolder);
  const wsFiles = files.filter((file) => file.endsWith('.ws.ts'));
  wsFiles.forEach(async (wsFile) => {
    const wsFilePathWithoutExt = wsFile.replace('.ws.ts', '');
    const classNameCapitalized = wsFilePathWithoutExt
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');

    const wsModule = await import(path.join(baseFolder, wsFile));
    const wsConfig = wsModule[`${classNameCapitalized}WS`];

    // Generate it blocks for steps
    const itBlocks = wsConfig.options[0].steps
      .map(
        (step: { title: string; step: any[] }, index: number) =>
          `
        it('${step.title}', async () => {
          currentTestCaseTitle = '${step.title}';
          const results = await executeWS(${classNameCapitalized}WS.options[0].steps[${index}].step, contextData, eventContext, resumeContext, '', globalCollectors);
          results.forEach((result) => {
            allSteps.push({
              result,
              caseTitle: currentTestCaseTitle,
              phase: 'test',
            });
          });

          const eventsStep = ${classNameCapitalized}WS.options
          ?.find((option) => option.events)?. events

              const resultsEvent = await executeWS(
                eventsStep,
                contextData,
                eventContext,
                resumeContext,
                'events',
                globalCollectors,
              );

        }, 3000);
      `,
      )
      .join('\n');

    const specContent = `
    import path from 'path';
    import fs from 'fs';
    import { getTime } from '../../utils/helper';
    import { TestContext, WSSContext, EventContext, ResumeContext } from '../../utils/text-context';
    import { executeWS } from '../../utils/execute-ws';
    import { executeAllSteps } from '../../utils/test-executor';
    import { ${classNameCapitalized}WS } from './${dtoName}.ws';
    import { WebSocketEventCollector } from '../../utils/ws-event-collector';

    describe('Test sagas for ${dtoName}', () => {
      let pathRequest: string;
      let testType: string;
      let context: TestContext;
      let globalWSSContext: WSSContext;
      let eventContext: EventContext;
      const allSteps: any[] = [];
      let contextData;
      let currentTestCaseTitle;
      let resumeContext: ResumeContext;
      const globalCollectors: Record<string, WebSocketEventCollector> = {};
      

      beforeAll(async () => {
        pathRequest = '${classNameCapitalized}WS';
        testType = 'ws';
        context = new TestContext();
        globalWSSContext = new WSSContext();
        eventContext = new EventContext();
        resumeContext = new ResumeContext();
        contextData = globalThis.globalContext;

        const beforeAllSteps = ${classNameCapitalized}WS.options
          ?.find((option) => option.beforeEach)
          ?.beforeEach || [];

        if (beforeAllSteps.length > 0) {
          contextData = context.clone();
          const results = await executeWS(
            beforeAllSteps,
            contextData,
            eventContext,
            resumeContext,
            'beforeAll',
            globalCollectors,
          );
          results.forEach((result) => {
            allSteps.push({
              result,
              caseTitle: 'Case',
              phase: 'beforeAll',
            });
          });
        } else {
          contextData = context;
        }
      });

      ${itBlocks}

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
        console.log(\`📄 WS test report generated: \${reportPath}\`);
      });
    });
    `;

    const outputDir = path.join(__dirname, `../test-ws/${dtoName}`);
    const outputPath = path.join(outputDir, `${dtoName}.ws.spec.ts`);
    fs.writeFileSync(outputPath, specContent, 'utf-8');
    console.log(`✅ Generated WS test: ${outputPath}`);
  });
}
