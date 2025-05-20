// import WebSocket from 'ws';
// import { resolveVariables } from './helper';
// import { TestContext, WSSContext } from './text-context';
// import { setWebSocket, getWebSocket } from './ws-store';
// import { WebSocketEventCollector } from './ws-event-collector';

// interface StepResult {
//   type?: string;
//   status: boolean;
//   stepName: string;
//   error?: string;
// }

// export async function executeOpenWS(
//   wssSteps: any[],
//   globalContext: TestContext,
//   globalWSSContext: WSSContext,
// ): Promise<StepResult[]> {
//   console.log('wsOpen steps:', wssSteps);
//   const results: StepResult[] = [];
//   const collectors: Record<string, WebSocketEventCollector> = {};

//   try {
//     for (const [index, step] of wssSteps.entries()) {
//       console.log(`Processing step ${index}:`, step);
//       const result = await executeStep(
//         step,
//         globalContext,
//         globalWSSContext,
//         index,
//         collectors,
//       );
//       results.push(result);
//       if (!result.status) {
//         console.warn(`Step ${step.action} failed, continuing with next steps`);
//       }
//     }
//   } catch (error) {
//     console.error(`Error in executeOpenWS:`, error);
//     results.push({
//       type: 'exception',
//       status: false,
//       stepName: 'setup',
//       error: error instanceof Error ? error.message : 'Unknown error',
//     });
//   } finally {
//     console.log('Keeping WebSocket connections open for further steps');
//   }

//   globalWSSContext.debug();
//   return results;
// }

// async function executeStep(
//   step: any,
//   globalContext: TestContext,
//   globalWSSContext: WSSContext,
//   stepIndex: number,
//   collectors: Record<string, WebSocketEventCollector>,
// ): Promise<StepResult> {
//   try {
//     const { action, path, expect: expectConfig } = step;
//     const resolvePath = resolveVariables(path, globalContext);

//     console.log(`Opening WebSocket for ${action} at ${resolvePath}`);
//     const ws = new WebSocket(resolvePath);

//     await new Promise((resolve, reject) => {
//       ws.once('open', resolve);
//       ws.once('error', reject);
//       ws.once('close', () =>
//         reject(new Error('WebSocket closed before connecting')),
//       );
//     });

//     // Lưu WebSocket instance với key
//     setWebSocket(`ws_${action}`, ws);

//     // Khởi tạo collector
//     const collector = new WebSocketEventCollector(ws, ws);
//     collectors[action] = collector;

//     // Thu thập sự kiện
//     const { actorEvents, recipientEvents } =
//       await collector.collectEventsAfterAction(5000, 5);
//     // Lấy mảng sự kiện hiện có từ WSSContext và TestContext
//     const existingEvents = globalWSSContext.getValue(action) || [];
//     const currentEvents = globalContext.getValue(action) || [];

//     // Chỉ lưu sự kiện vào context tương ứng với action
//     const updatedEvents = [
//       ...existingEvents,
//       ...(action === 'wsActor' ? actorEvents : recipientEvents),
//     ];

//     globalWSSContext.setValue(action, updatedEvents);

//     return {
//       type: 'ws_connection',
//       status: true,
//       stepName: `${action}`,
//     };
//   } catch (error) {
//     console.error(`WebSocket Error in ${step.action}:`, error);
//     return {
//       type: 'ws',
//       status: false,
//       stepName: `${step.action}`,
//       error: error instanceof Error ? error.message : 'Unknown WS error',
//     };
//   }
// }
