import { ACTION, ACTION_CONFIG } from '../enums';
import { getApiFunctions } from '../functions/api-registry';
import {
  CustomMatcher,
  EventValidation,
  EventValidationResult,
  MatcherResult,
  StepValidationResult,
} from './declarations';
import { EVENTS_BY_ACTION } from './event-action';
import { extractDates } from './extract-data';
import { resolveVariables, transformApiData } from './helper';
import { EventContext, ResumeContext, TestContext } from './text-context';
import { API_EVENT } from './ws-config';
import { WebSocketEventCollector } from './ws-event-collector';
import { executeOpenWS } from './ws-opens';

export async function executeBeforeAll(
  step,
  context: TestContext,
  eventContext: EventContext,
  resumeContext: ResumeContext,
  collectors: Record<string, WebSocketEventCollector>,
): Promise<any> {
  const results = [];
  const validationResult: EventValidationResult = {
    isValid: true,
    errors: [],
  };
  const { title, author, action, body, headers, expect: expectConfig } = step;

  const key = `ws__${author}`;

  const actionInfo = ACTION_CONFIG[action as keyof typeof ACTION_CONFIG];
  const payload = body || actionInfo.body;
  const resolveBody = resolveVariables(payload, context);
  const resolveHeader = resolveVariables(headers, context);

  if (action === ACTION.CONNECT_WS) {
    const resultWSOpen = await executeOpenWS(
      author,
      resolveBody,
      context,
      collectors,
    );
    const collector = collectors[`ws__${author}`];
    if (!collector) {
      console.warn(`Collector not found for ${author}`);
      return;
    }
    const events = await collector.collectEventsAfterAction();

    eventContext.addEvent(author, events, 0);
    resumeContext.addResumeEvents(author, events, title);

    const extractedData = extractDates(events[0], action);

    context.mergeData(extractedData);
    // const { types: expectedEventTypes, minCount } = getExpectedEventTypes(action);

    // // check event quantity
    // if (events.length < minCount) {
    //     validationResult.isValid = false;
    //     validationResult.errors.push({
    //         type: 'count',
    //         message: `Số lượng event không đủ. Mong đợi tối thiểu: ${minCount}, Nhận được: ${events.length}`,
    //         expected: [`Minimum ${minCount} events`],
    //         received: [`Received ${events.length} events`]
    //     });
    // }

    // const receivedEventTypes = events.map(e => e.type);
    // // check missing events
    // const missingEvents = expectedEventTypes.filter(
    //     type => !receivedEventTypes.includes(type)
    // );
    // if (missingEvents.length > 0) {
    //     validationResult.isValid = false;
    //     validationResult.errors.push({
    //         type: 'missing',
    //         message: `Thiếu các event types: ${missingEvents.join(', ')}`,
    //         expected: expectedEventTypes,
    //         received: receivedEventTypes
    //     });
    // }
    // // check extend events
    // const unexpectedEvents = receivedEventTypes.filter(
    //     type => !expectedEventTypes.includes(type)
    // );
    // if (unexpectedEvents.length > 0) {
    //     validationResult.isValid = false;
    //     validationResult.errors.push({
    //         type: 'unexpected',
    //         message: `Nhận được event types không mong đợi: ${unexpectedEvents.join(', ')}`,
    //         expected: expectedEventTypes,
    //         received: receivedEventTypes
    //     });
    // }

    // // check duplicate events
    // const eventIds = events.map(e => e.id);
    // const duplicateEvents = eventIds.filter((id, index) => eventIds.indexOf(id) !== index);
    // if (duplicateEvents.length > 0) {
    //     validationResult.isValid = false;
    //     validationResult.errors.push({
    //         type: 'duplicate',
    //         message: `Phát hiện duplicate events: ${duplicateEvents.join(', ')}`,
    //         received: duplicateEvents
    //     });
    // }
    // results.push({
    //     isValid: validationResult.isValid,
    //     errors: validationResult.errors
    // })
  } else {
    const apiFunction = getApiFunctions(action, context, null);

    const responseBeforeAll = await apiFunction({
      method: actionInfo.method,
      path: actionInfo.path,
      headers: resolveHeader,
      body: resolveBody,
    });

    const extractedData = extractDates(responseBeforeAll.data, action);
    context.mergeData(extractedData);

    const collector = collectors[`ws__${author}`];
    if (!collector) {
      console.warn(`No WebSocketEventCollector found for key: ${key}`);
      return;
    }
    const events = await collector.collectEventsAfterAction();
    const eventFilter = events.map((e) => ({
      action: action,
      id: e.id,
      time: e.time,
      source: e.source,
      type: e.type,
    }));
    eventContext.addEvent(author, eventFilter, 0);
    resumeContext.addResumeEvents(author, events, title);
    const { types: expectedEventTypes, minCount } =
      getExpectedEventTypes(action);

    // check event quantity
    if (events.length < minCount) {
      validationResult.isValid = false;
      validationResult.errors.push({
        type: 'count',
        message: `Số lượng event không đủ. Mong đợi tối thiểu: ${minCount}, Nhận được: ${events.length}`,
        expected: [`Minimum ${minCount} events`],
        received: [`Received ${events.length} events`],
      });
    }

    const receivedEventTypes = events.map((e) => e.type);
    // check missing events
    const missingEvents = expectedEventTypes.filter(
      (type) => !receivedEventTypes.includes(type),
    );
    if (missingEvents.length > 0) {
      validationResult.isValid = false;
      validationResult.errors.push({
        type: 'missing',
        message: `Missing event types: ${missingEvents.join(', ')}`,
        expected: expectedEventTypes,
        received: receivedEventTypes,
      });
    }
    // check extend events
    const unexpectedEvents = receivedEventTypes.filter(
      (type) => !expectedEventTypes.includes(type),
    );
    if (unexpectedEvents.length > 0) {
      validationResult.isValid = false;
      validationResult.errors.push({
        type: 'unexpected',
        message: `Received unexpected event types: ${unexpectedEvents.join(', ')}`,
        expected: expectedEventTypes,
        received: receivedEventTypes,
      });
    }

    // check duplicate events
    const eventIds = events.map((e) => e.id);
    const duplicateEvents = eventIds.filter(
      (id, index) => eventIds.indexOf(id) !== index,
    );
    if (duplicateEvents.length > 0) {
      validationResult.isValid = false;
      validationResult.errors.push({
        type: 'duplicate',
        message: `Detect duplicate events: ${duplicateEvents.join(', ')}`,
        received: duplicateEvents,
      });
    }
    results.push({
      isValid: validationResult.isValid,
      errors: validationResult.errors,
    });
  }
  // console.log(results)
  return results;
}

export async function executeStepWS(
  step,
  context: TestContext,
  eventContext: EventContext,
  resumeContext: ResumeContext,
  collectors: Record<string, WebSocketEventCollector>,
  index: number,
) {
  const validationResult: EventValidationResult = {
    isValid: true,
    errors: [],
  };
  const { title, author, action, body, headers, expect: expectConfig } = step;

  const key = `ws__${author}`;
  const actionInfo = ACTION_CONFIG[action as keyof typeof ACTION_CONFIG];
  const payload = body ? body : actionInfo?.body;
  const resolveBody = resolveVariables(payload, context);
  const resolveHeader = resolveVariables(headers, context);

  const apiFunction = getApiFunctions(action, context, null);

  const responseStep = await apiFunction({
    method: actionInfo?.method,
    path: actionInfo?.path,
    headers: resolveHeader,
    body: resolveBody,
  });

  const extractedData = extractDates(responseStep.data, action);
  context.mergeData(extractedData);

  const collector = collectors[`ws__${author}`];
  if (!collector) {
    console.warn(`No WebSocketEventCollector found for key: ${key}`);
    return;
  }
  const events = await collector.collectEventsAfterAction();
  const existingEventIds = eventContext
    .getValue()
    .filter((e) => e.author === author)
    .flatMap((e) => e.events.map((ev) => ev.id));
  const newEvents = events.filter(
    (event) => !existingEventIds.includes(event.id),
  );

  const transFormData = transformApiData(responseStep.data)

  const bodyApi = {
    resolveHeader,
    resolveBody
  }

  const eventFilter = events.map((e) => ({
    body: bodyApi,
    apiData: transFormData,
    action: action,
    id: e.id,
    time: e.time,
    source: e.source,
    specversion: e.specversion,
    version: e.version,
    type: e.type,
    data: e.data,
  }));
  if (newEvents.length > 0) {
    eventContext.addEvent(author, eventFilter, index);
    resumeContext.addResumeEvents(author, newEvents, title);
  }

  const {
    types: expectedEventTypes,
    minCount,
    filedMappings,
  } = getExpectedEventTypes(action);

  // check event quantity
  if (events.length < minCount) {
    validationResult.isValid = false;
    validationResult.errors.push({
      type: 'count',
      message: `events quantity. expected: ${minCount}, actual: ${events.length}`,
      expected: [`Minimum ${minCount} events`],
      received: [`Received ${events.length} events`],
    });
  }

  const receivedEventTypes = events.map((e) => e.type);
  // check missing events
  const missingEvents = expectedEventTypes.filter(
    (type) => !receivedEventTypes.includes(type),
  );
  if (missingEvents.length > 0) {
    validationResult.isValid = false;
    validationResult.errors.push({
      type: 'missing',
      message: `missing event types: ${missingEvents.join(', ')}`,
      expected: expectedEventTypes,
      received: receivedEventTypes,
    });
  }
  // check extend events
  const unexpectedEvents = receivedEventTypes.filter(
    (type) => !expectedEventTypes.includes(type),
  );
  if (unexpectedEvents.length > 0) {
    validationResult.isValid = false;
    validationResult.errors.push({
      type: 'unexpected',
      message: `expected event types: ${unexpectedEvents.join(', ')}`,
      expected: expectedEventTypes,
      received: receivedEventTypes,
    });
  }

  // check duplicate events
  const eventIds = events.map((e) => e.id);
  const duplicateEvents = eventIds.filter(
    (id, index) => eventIds.indexOf(id) !== index,
  );
  if (duplicateEvents.length > 0) {
    validationResult.isValid = false;
    validationResult.errors.push({
      type: 'duplicate',
      message: `duplicate events: ${duplicateEvents.join(', ')}`,
      received: duplicateEvents,
    });
  }

  if (
    events.length >= minCount &&
    missingEvents.length === 0 &&
    unexpectedEvents.length === 0
  ) {
    const isOrderValid = receivedEventTypes.every(
      (type, index) => type === expectedEventTypes[index],
    );
    if (!isOrderValid) {
      validationResult.isValid = false;
      validationResult.errors.push({
        type: 'order',
        message: `order event không đúng`,
        expected: expectedEventTypes,
        received: receivedEventTypes,
      });
    }
  }

  // check data

  // const resultCheckData = checkData(responseStep.data, eventFilter, action, validationResult, getExpectedEventTypes(action));
  // console.log(JSON.stringify(resultCheckData))
  return {
    isValid: validationResult.isValid,
    errors: validationResult.errors,
  };
}

export async function executeEvents(
  steps: Array<any>,
  context: TestContext,
  eventContext: EventContext,
  resumeContext: ResumeContext,
  collectors: Record<string, WebSocketEventCollector>,
): Promise<StepValidationResult[]> {
  const stepResults: StepValidationResult[] = [];

  for (const step of steps) {
    const { author, action, eventList } = step;
    console.log(JSON.stringify(step, null, 2))
    const stepResult: StepValidationResult = {
      author: author,
      stepAction: action,
      totalEvents: eventList.length,
      eventList: getExpectedEventTypes(action).types,
      passedEvents: 0,
      failedEvents: 0,
      orderIsValid: true, 
      duplicateEvents: [],
      eventResults: []
    };

const allEvents = eventContext.getValue();
    console.log(`All events: ${JSON.stringify(allEvents, null, 2)}`);
    const actorEvents = allEvents
      .find((e) => e.author === "Actor")
      ?.events.filter((e) => e.action === action) || [];
    const recipientEvents = allEvents
      .find((e) => e.author === "Recipient")
      ?.events.filter((e) => e.action === action) || [];


    // Chọn mảng sự kiện dựa trên author của step
    const collectedEvents = author === "Actor" ? actorEvents : recipientEvents;

    // validate đúp event
    const eventTypeCounts = new Map<string, number>();
    const duplicates: string[] = [];
    for (const event of collectedEvents) {
      const eventType = event.type || 'unknown';
      eventTypeCounts.set(eventType, (eventTypeCounts.get(eventType) || 0) + 1);
      if (eventTypeCounts.get(eventType)! > 1) {
        duplicates.push(eventType);
      }
    }

    stepResult.duplicateEvents = duplicates;

    // validate thứ tự event
    const expectedEventTypes = getExpectedEventTypes(action).types;
    let orderIsValid = true;
    for (let i = 0; i < expectedEventTypes.length && i < collectedEvents.length; i++) {
      const expectedEventType = expectedEventTypes[i];
      const actualEvent = collectedEvents[i];
      if (actualEvent && actualEvent.type !== expectedEventType) {
        orderIsValid = false;
        break;
      }
    }
    stepResult.orderIsValid = orderIsValid;

    // Chỉ validate những event được định nghĩa trong eventList
    for (let i = 0; i < eventList.length; i++) {
      const expectedEvent = eventList[i];
      const expectedEventType = expectedEvent.type?.expectedValue;
      const actualEvent = collectedEvents.find((e) => e.type === expectedEventType);
      const eventType = expectedEvent.type?.expectedValue || `Unknown event at index ${i}`;
      const validationTasks = [
        { key: 'specversion', field: 'SPECVERSION' },
        { key: 'version', field: 'VERSION' },
        { key: 'source', field: 'SOURCE' },
        { key: 'type', field: 'TYPE' },
        { key: 'data', field: 'DATA' }
      ];

      const eventResult: EventValidation = {
        eventIndex: i,
        eventType,
        isPassed: true
      };

      for (const { key, field } of validationTasks) {
        if (expectedEvent[key]) {
          const result = await debugCompare(
            expectedEvent[key],
            key === 'source' ? parseSource(actualEvent[key]) : key === 'data' ? actualEvent : actualEvent[key],
            field as any,
            context,
            i,
            step.title
          )
          eventResult[`${key.toLowerCase()}Result`] = result;
          eventResult.isPassed = eventResult.isPassed && result.isEqual;
        }
      }
      eventResult.isPassed ? stepResult.passedEvents++ : stepResult.failedEvents++;
      stepResult.eventResults.push(eventResult);
    }

    stepResults.push(stepResult);
  }

  return stepResults;
}

function parseSource(source: string) {
  if (source === API_EVENT.halome.cloudevent.system) {
    return source;
  }
  const queryString = source.split('?')[1];
  const params = new URLSearchParams(queryString);
  return {
    userId: params.get('userId'),
    deviceId: params.get('deviceId'),
  };
}

async function debugCompare(
  matcher: CustomMatcher,
  actualValue: any,
  fieldName: 'SOURCE' | 'TYPE' | 'DATA' | 'SPECVERSION' | 'VERSION',
  context: TestContext,
  eventIndex?: number,
  eventLabel?: string
): Promise<MatcherResult> {

  try {
    const result = await matcher(actualValue, context);
    const response = {
      isEqual: result.isEqual,
      allDifferences: result.allDifferences
    };
    return response;
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : String(e);
    return {
      isEqual: false,
      allDifferences: [errorMessage]
    };
  }
}

// function mapStepIndexToEvents(stepIndex: number, eventContext: EventContext, action: string) {
//     // Lấy thông tin các event type cần tìm từ EVENTS_BY_ACTION
//     const eventConfig = EVENTS_BY_ACTION[action];
//     if (!eventConfig) {
//         return [];
//     }

//     // Tìm step tương ứng trong eventContext
//     const stepEvents = eventContext.events.find(e => e.stepIndex === stepIndex);
//     if (!stepEvents || !stepEvents.events) {
//         return [];
//     }

//     // Lọc các event theo types đã định nghĩa
//     const matchedEvents = stepEvents.events.filter(event =>
//         eventConfig.types.includes(event.type)
//     );

//     return matchedEvents;
// }

// export async function executeAllResumesFromPoint(
//     startStep: { title: string; data: string },
//     resumeDates,
//     context: TestContext,
//     eventContext: EventContext,
//     resumeContext: ResumeContext,
//     collectors: Record<string, WebSocketEventCollector>,
// ): Promise<Array<{ tokenResume: string | null; events: any[] }>> {
//     const { title, data } = startStep;

//     const results: Array<{ tokenResume: string | null; events: any[] }> = [];

//     // Lấy tất cả sự kiện từ ResumeContext cho action
//     const entry = resumeContext.getEntries().find((e) => e.action === lastWord);
//     if (!entry) {
//         console.warn(`Không tìm thấy action: ${lastWord} trong ResumeContext`);
//         return results;
//     }

//     // Sắp xếp các sự kiện theo time
//     const sortedEvents = entry.resume
//         .map((event) => ({
//             title: event.title,
//             data: event.data,
//         }))
//         .sort(
//             (a, b) =>
//                 new Date(a.data.time).getTime() - new Date(b.data.time).getTime(),
//         );

//     // Tìm index của resume point ban đầu
//     const startIndex = sortedEvents.findIndex(
//         (event) => event.title === title && event.data.time === resumeDates.time,
//     );

//     if (startIndex === -1) {
//         console.warn(
//             `Không tìm thấy resume point: ${title} tại ${resumeDates.time}`,
//         );
//         return results;
//     }

//     // Lặp qua các sự kiện từ startIndex trở đi
//     for (let i = startIndex; i < sortedEvents.length; i++) {
//         const event = sortedEvents[i];
//         const step = {
//             title: event.title,
//             data: 'id',
//         };

//         console.log(`Xử lý resume point ${i + 1}/${sortedEvents.length}:`, step);
//         const result = await executeResume(
//             step,
//             context,
//             eventContext,
//             resumeContext,
//             collectors,
//             i,
//         );
//         // results.push(result);
//     }

//     return results;
// }

export function executeAfterAll(step, context: TestContext) { }

export function executeBeforeEach(step, context: TestContext) {
  console.log(step);
}

export function executeAfterEach(step, context: TestContext) { }

function getExpectedEventTypes(action: string): {
  types: string[];
  minCount: number;
  filedMappings?: any;
} {
  return (
    EVENTS_BY_ACTION[action] || { types: [], minCount: 0, filedMappings: [] }
  );
}

function compareObjects(obj1: Object, obj2: Object, path: string): any {
  const differences: any[] = [];
  console.log(obj1);
  console.log(obj2);
  if (obj1 == null && obj2 == null) {
    return differences;
  }
  if (obj1 == null || obj2 == null) {
    differences.push({
      path: path,
      message: 'miss match',
      actual: `${JSON.stringify(obj1)}`,
      expected: `${JSON.stringify(obj2)}`,
    });
    return differences;
  }

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    return compareArrays(obj1, obj2, path);
  }

  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    for (const key in obj1) {
      if (!(key in obj2)) {
        differences.push({
          path: path,
          message: `${key} is missing`,
          actual: `${JSON.stringify(obj1)}`,
          expected: `${JSON.stringify(obj2)}`,
        });
      } else {
        const nestedDiff = compareObjects(
          obj1[key],
          obj2[key],
          `${path}.${key}`,
        );
        differences.push(...nestedDiff);
      }
    }

    for (const key in obj2) {
      if (!(key in obj1)) {
        differences.push({
          path: path,
          message: `${key} is extra`,
          actual: `${JSON.stringify(obj1)}`,
          expected: `${JSON.stringify(obj2)}`,
        });
      }
    }
  } else if (JSON.stringify(obj1) !== JSON.stringify(obj2)) {
    differences.push({
      path: path,
      message: 'miss match',
      actual: `${JSON.stringify(obj1)}`,
      expected: `${JSON.stringify(obj2)}`,
    });
  }

  return differences;
}

function compareArrays(arr1: string[], arr2: string[], path: string): string[] {
  const differences: any[] = [];

  if (arr1.length !== arr2.length) {
    differences.push({
      path: path,
      message: 'miss match',
      actual: `${JSON.stringify(arr1)}`,
      expected: `${JSON.stringify(arr2)}`,
    });
  }

  const maxLength = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    const itemDiff = compareObjects(arr1[i], arr2[i], `${path}[${i}]`);
    differences.push(...itemDiff);
  }

  return differences;
}

export async function executeResume(
  step,
  context: TestContext,
  eventContext: EventContext,
  resumeContext: ResumeContext,
  collectors: Record<string, WebSocketEventCollector>,
) {
  // Tạo object để lưu thông tin report
  const resumeReport = {
    startTime: new Date().toISOString(),
    stepInfo: {
      title: step.title,
      type: step.type,
      data: step.data,
      lastWord: step.author,
    },
    events: [],
    errors: [],
    duplicates: [],
    summary: {
      totalEventsProcessed: 0,
      resumePointsFound: 0,
      reconnectionEnded: false,
    },
  };

  let tokenResume: string;
  let resumePoint;
  const { title, author, type, index, data } = step;

  // Lấy các event tương ứng với index

  const findEventById = (eventContext: EventContext, eventId: string) => {
    if (!eventContext?.events) {
      resumeReport.errors.push({
        type: 'InvalidEventContext',
        message: 'eventContext.events is undefined or null',
        timestamp: new Date().toISOString(),
      });
      return undefined;
    }

    const allEvents = [
      ...(eventContext.events.find((e) => e.author === 'Actor')?.events || []),
      ...(eventContext.events.find((e) => e.author === 'Recipient')?.events ||
        []),
    ];
    return allEvents.find((event) => event.id === eventId);
  };

  const compareEventData = (event1: any, event2: any) => {
    const data1 = JSON.stringify(event1.data || {});
    const data2 = JSON.stringify(event2.data || {});
    return data1 === data2;
  };

  if (data !== 'time' && data !== 'id') {
    tokenResume = data;
  } else {
    const resumeDates = resumeContext.getEventToken(author, title, data, type);
    resumePoint = resumeContext.findResumePoint(
      author,
      resumeDates[data],
      data,
    );

    if (!resumePoint) {
      resumeReport.errors.push({
        type: 'ResumePointNotFound',
        message: `No break point found for ${author} with token ${data}`,
        timestamp: new Date().toISOString(),
      });
      return resumeReport; // Trả về report ngay nếu không tìm thấy resume point
    }

    resumeReport.summary.resumePointsFound++;
  }

  let lastTotal = Infinity;
  let isReconnectionEnded = false;

  if (resumePoint) {
    const resumePointData = resumePoint.events.filter((ev) => ev.type === type);
    resumeReport.events.push({
      type: 'ResumePoint',
      eventId: resumePointData[0].data['id'],
      data: resumePointData[0].data[data],
    });
  }

  while (!isReconnectionEnded) {
    for (const eventData of resumePoint.events || []) {
      resumeReport.summary.totalEventsProcessed++;

      if (data === 'time' || data === 'id') {
        if (!eventData || !eventData.data || !eventData.data[data]) {
          resumeReport.errors.push({
            type: 'InvalidEventData',
            message: `No valid event data found for ${data}`,
            event: eventData,
          });
          continue;
        }
        tokenResume = eventData.data[data];
      }

      const message = {
        id: '',
        time: '',
        type: API_EVENT.halome.v3.webSocket.RECONNECTION_STARTED,
        source: '',
        specversion: '1.0',
        data: {
          token: tokenResume,
        },
      };

      const collectorKey = `ws__${author}`;
      const collector = collectors[collectorKey];

      if (!collector) {
        resumeReport.errors.push({
          type: 'CollectorNotFound',
          message: `No WebSocketEventCollector found for key: ${collectorKey}`,
        });
        resumeReport.summary.reconnectionEnded = isReconnectionEnded;
        return resumeReport;
      }

      collector.sendMessage(message);
      await new Promise((resolve) => setTimeout(resolve, 100));
      const events = await collector.collectEventsAfterAction();

      const eventIds = new Set();
      for (const event of events) {
        if (eventIds.has(event.id)) {
          resumeReport.duplicates.push({
            eventId: event.id,
            type: event.type,
          });
        }
        eventIds.add(event.id);

        const matchedEvent = findEventById(eventContext, event.id);
        const eventEntry = {
          eventId: event.id,
          type: event.type,
          timestamp: event.time || new Date().toISOString(),
          data: event.data,
          matched: !!matchedEvent,
          dataConsistent: matchedEvent
            ? compareEventData(event, matchedEvent)
            : false,
        };
        resumeReport.events.push(eventEntry);

        if (event.type === 'com.halome.websocket.v3.reconnection_ended') {
          const currentTotal = event.data?.total || 0;

          if (currentTotal >= lastTotal) {
            resumeReport.errors.push({
              type: 'total_reconnected',
              message: `total not decreasing : ${currentTotal} >= ${lastTotal}`,
              eventId: event.id,
            });
          }
          lastTotal = currentTotal;

          if (currentTotal === 0) {
            isReconnectionEnded = true;
            resumeReport.summary.reconnectionEnded = true;
            break;
          }
        }
      }

      if (isReconnectionEnded) {
        break;
      }
    }
  }

  console.log(resumeReport);
  return resumeReport;
}
