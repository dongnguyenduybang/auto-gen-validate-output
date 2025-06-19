import { Step, StepResult, Resume, EventStep } from './declarations';
import {
  executeAfterAll,
  executeAfterEach,
  executeBeforeAll,
  executeBeforeEach,
  executeEvents,
  executeResume,
  executeStepWS,
} from './execute-list';
import { EventContext, ResumeContext, TestContext } from './text-context';
import { WebSocketEventCollector } from './ws-event-collector';

type ExtendedStep = Step | Resume | EventStep;

export async function executeWS(
  steps: ExtendedStep[],
  context: TestContext,
  eventContext: EventContext,
  resumeContext: ResumeContext,
  type: string,
  collectors: Record<string, WebSocketEventCollector> = {},
) {
  const results: any[] = []; // Changed from [] to any[] to store actual results

  for (const [index, step] of steps.entries()) {
    try {
      switch (type) {
        case 'beforeAll':
          const resultBeforeAll = await executeBeforeAll(
            step,
            context,
            eventContext,
            resumeContext,
            collectors,
          );
          results.push(resultBeforeAll); // Store result
          break;
        case 'beforeEach':
          const resultBeforeEach = await executeBeforeEach(step, context);
          results.push(resultBeforeEach);
          break;
        case 'afterAll':
          const resultAfterAll = await executeAfterAll(step, context);
          results.push(resultAfterAll);
          break;
        case 'afterEach':
          const resultAfterEach = await executeAfterEach(step, context);
          results.push(resultAfterEach);
          break;
        case 'resume':
          const resumeEvent = await executeResume(
            step,
            context,
            eventContext,
            resumeContext,
            collectors,
          );
          results.push(resumeEvent);
          // console.log(JSON.stringify(resumeEvent, null, 2));
          break;
        case 'events':
          const resultEvent = await executeEvents(
            [step],
            context,
            eventContext,
            resumeContext,
            collectors,
          );
          results.push(resultEvent);
          // console.log(JSON.stringify(resultEvent, null, 2));
          break;
        default:
          const resultStepWS = await executeStepWS(
            step,
            context,
            eventContext,
            resumeContext,
            collectors,
            index,
          );
          results.push(resultStepWS);
      }
    } catch (error) {
      // Log error and add error result
      console.error(`Error executing step ${index} (${type}):`, error);
      const errorResult = {
        stepIndex: index,
        stepType: type,
        step: step,
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        success: false,
        timestamp: new Date().toISOString(),
      };
      results.push(errorResult);

      // You can decide whether to continue or throw based on your needs
      // throw error; // Uncomment if you want to stop execution on error
    }
  }

  // eventContext.debug();
  // resumeContext.debug();
  return results;
}
