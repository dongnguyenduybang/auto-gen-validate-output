import { Step, StepResult, Resume } from './declarations';
import {
  executeAfterAll,
  executeAfterEach,
  executeBeforeAll,
  executeBeforeEach,
  executeResume,
  executeStepWS,
} from './execute-list';
import { EventContext, ResumeContext, TestContext } from './text-context';
import { WebSocketEventCollector } from './ws-event-collector';
type ExtendedStep = Step | Resume;
export async function executeWS(
  steps: ExtendedStep[],
  context: TestContext,
  eventContext: EventContext,
  resumeContext: ResumeContext,
  type: string,
  collectors: Record<string, WebSocketEventCollector> = {},
) {
  const results: StepResult[] = [];
  for (const [index, step] of steps.entries()) {
    switch (type) {
      case 'beforeAll':
        const resultBeforeAll = await executeBeforeAll(
          step,
          context,
          eventContext,
          resumeContext,
          collectors,
        );
        break;
      case 'beforeEach':
        await executeBeforeEach(step, context);
        break;
      case 'afterAll':
        await executeAfterAll(step, context);
        break;
      case 'afterEach':
        await executeAfterEach(step, context);
        break;
      case 'resume':
        await executeResume(
          step,
          context,
          eventContext,
          resumeContext,
          collectors,
          index,
        );
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
    }
  }
  // eventContext.debug();
  // resumeContext.debug();
  return results;
}
