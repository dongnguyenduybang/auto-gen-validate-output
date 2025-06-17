import { ACTION, ACTION_CONFIG } from '../enums';
import { getApiFunctions } from '../functions/api-registry';
import { deepEqual } from './chain-function';
import {
  CustomMatcher,
  EventConfig,
  EventValidation,
  EventValidationResult,
  MatcherResult,
  StepValidationResult,
} from './declarations';
import { EVENTS_BY_ACTION } from './event-action';
import { extractDates } from './extract-data';
import { getDmStatus, getEventLengths, isScenarioConfig, resolveVariables, transformApiData } from './helper';
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
    // const { actorEvents, recipientEvents, minCount } =
    //   getExpectedEvents(action);

    // // check event quantity
    // if (events.length < minCount) {
    //   validationResult.isValid = false;
    //   validationResult.errors.push({
    //     type: 'count',
    //     message: `Số lượng event không đủ. Mong đợi tối thiểu: ${minCount}, Nhận được: ${events.length}`,
    //     expected: [`Minimum ${minCount} events`],
    //     received: [`Received ${events.length} events`],
    //   });
    // }

    // const receivedEventTypes = events.map((e) => e.type);
    // // check missing events
    // const missingEvents = actorEvents.filter(
    //   (type) => !receivedEventTypes.includes(type),
    // );
    // if (missingEvents.length > 0) {
    //   validationResult.isValid = false;
    //   validationResult.errors.push({
    //     type: 'missing',
    //     message: `Missing event types: ${missingEvents.join(', ')}`,
    //     expected: actorEvents,
    //     received: receivedEventTypes,
    //   });
    // }
    // // check extend events
    // const unexpectedEvents = receivedEventTypes.filter(
    //   (type) => !actorEvents.includes(type),
    // );
    // if (unexpectedEvents.length > 0) {
    //   validationResult.isValid = false;
    //   validationResult.errors.push({
    //     type: 'unexpected',
    //     message: `Received unexpected event types: ${unexpectedEvents.join(', ')}`,
    //     expected: actorEvents,
    //     received: receivedEventTypes,
    //   });
    // }

    // // check duplicate events
    // const eventIds = events.map((e) => e.id);
    // const duplicateEvents = eventIds.filter(
    //   (id, index) => eventIds.indexOf(id) !== index,
    // );
    // if (duplicateEvents.length > 0) {
    //   validationResult.isValid = false;
    //   validationResult.errors.push({
    //     type: 'duplicate',
    //     message: `Detect duplicate events: ${duplicateEvents.join(', ')}`,
    //     received: duplicateEvents,
    //   });
    // }
    // results.push({
    //   isValid: validationResult.isValid,
    //   errors: validationResult.errors,
    // });
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
  const { title, author: stepAuthor, action, body, headers, expect: expectConfig } = step;

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

  const transFormData = transformApiData(responseStep.data);
  const bodyApi = { resolveHeader, resolveBody };

  // Define authors to process
  const authors = ['Actor', 'Recipient'];

  // Collect and push events for each author
  for (const eventAuthor of authors) {
    const collectorKey = `ws__${eventAuthor}`;
    const collector = collectors[collectorKey];
    if (!collector) {
      console.warn(`No WebSocketEventCollector found for key: ${collectorKey}`);
      continue;
    }

    const events = await collector.collectEventsAfterAction();

    // Tag events with appropriate action
    const taggedEvents = events.map(event => ({
      ...event,
      action: event.type.includes('com.halome.chat.v3')
        ? (eventAuthor === 'Recipient' ? action : action)
        : event.action || action,
    }));

    // Filter out duplicate eventsư
    const existingEventIds = eventContext
      .getValue()
      .filter((e) => e.author === eventAuthor)
      .flatMap((e) => e.events.map((ev) => ev.id));
    const newEvents = taggedEvents.filter(
      (event) => !existingEventIds.includes(event.id),
    );

    // Transform events for eventContext
    const eventFilter = newEvents.map((e) => ({
      body: bodyApi,
      apiData: transFormData,
      action: e.action,
      id: e.id,
      time: e.time,
      source: e.source,
      specversion: e.specversion,
      version: e.version,
      type: e.type,
      data: e.data,
    }));

    // Push new events to eventContext and resumeContext
    if (newEvents.length > 0) {
      eventContext.addEvent(eventAuthor, eventFilter, index);
      resumeContext.addResumeEvents(eventAuthor, newEvents, title);
    }
  }

  // Uncomment and update validation logic if needed
  /*
  const { actorEvents, recipientEvents, minCount } = getExpectedEvents(action);
  console.log('Expected events:', getExpectedEvents(action));

  const allEvents = eventContext.getValue();
  const actorEventCount = allEvents.find(e => e.author === 'Actor')?.events.length || 0;
  const recipientEventCount = allEvents.find(e => e.author === 'Recipient')?.events.length || 0;

  if (actorEventCount + recipientEventCount < minCount) {
    validationResult.isValid = false;
    validationResult.errors.push({
      type: 'count',
      message: `Events quantity. Expected: ${minCount}, Actual: ${actorEventCount + recipientEventCount}`,
      expected: [`Minimum ${minCount} events`],
      received: [`Received ${actorEventCount + recipientEventCount} events`],
    });
  }
  */

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
    const { title, author, action, eventList } = step;

    // Calculate total events per author
    const actorTotalEvents = eventList.filter(e => e.author === 'Actor' || !e.author).length;
    const recipientTotalEvents = eventList.filter(e => e.author === 'Recipient').length;

    const allEvent = eventContext.getValue();

    const actorEvents =
      allEvent
        .find((e) => e.author === 'Actor')
        ?.events.filter((e) => e.action === action) || [];
    const recipientEvents =
      allEvent
        .find((e) => e.author === 'Recipient')
        ?.events || [];

    // Map getDmStatus result to string
    const isExiting = getDmStatus([...actorEvents, ...recipientEvents]);
    let dmStatus: 'NEW_CONTACT' | 'EXISTING_CONTACT' | 'DEFAULT';
    if (isExiting === 0) {
      dmStatus = 'NEW_CONTACT';
    } else if (isExiting === 1) {
      dmStatus = 'EXISTING_CONTACT';
    } else {
      dmStatus = 'DEFAULT';
    }

    const lengths = getEventLengths(action, isExiting);

    const stepResult: StepValidationResult = {
      author: author,
      stepAction: action,
      actorResults: {
        totalEvents: lengths.actorLength,
        eventExpected: actorTotalEvents,
        missingEventExpected: [],
        passedEvents: 0,
        failedEvents: 0,
        missingEvents: [],
        extraEvents: [],
        orderIsValid: true,
        duplicateEvents: [],
        events: [],
      },
      recipientResults: {
        totalEvents: lengths.recipientLength,
        eventExpected: recipientTotalEvents,
        missingEventExpected: [],
        passedEvents: 0,
        failedEvents: 0,
        missingEvents: [],
        extraEvents: [],
        orderIsValid: true,
        duplicateEvents: [],
        events: [],
      },
    };

    // Get expected events from EVENTS_BY_ACTION
    const { actorEvents: expectedActorEvents, recipientEvents: expectedRecipientEvents } = getExpectedEvents(action, dmStatus);


    // Check missing expected events in eventList compared to EVENTS_BY_ACTION
    const eventListActorTypes = eventList
      .filter(e => (e.author || 'Actor') === 'Actor')
      .map(e => e.type?.expectedValue);
    const eventListRecipientTypes = eventList
      .filter(e => e.author === 'Recipient')
      .map(e => e.type?.expectedValue);

    const missingExpectedActorEvents = expectedActorEvents.filter(
      (expected) => !eventListActorTypes.includes(expected)
    );
    if (missingExpectedActorEvents.length > 0) {

      stepResult.actorResults.missingEventExpected.push(...missingExpectedActorEvents.map((event) => `Actor:${event}`));
    }

    const missingExpectedRecipientEvents = expectedRecipientEvents.filter(
      (expected) => !eventListRecipientTypes.includes(expected)
    );
    if (missingExpectedRecipientEvents.length > 0) {

      stepResult.recipientResults.missingEventExpected.push(...missingExpectedRecipientEvents.map((event) => `Recipient:${event}`));
    }

    // Check extra events for Actor (WebSocket events)
    const actorExtraEvents = actorEvents.filter((actual) => {
      if (!actual.type) return false;
      return !expectedActorEvents.includes(actual.type);
    });
    if (actorExtraEvents.length > 0) {
      stepResult.actorResults.extraEvents.push(...actorExtraEvents.map((e) => e.type));

    }

    // Check extra events for Recipient (WebSocket events) - FIXED
    const recipientExtraEvents = recipientEvents.filter((actual) => {
      if (!actual.type) return false;
      return !expectedRecipientEvents.includes(actual.type);
    });

    if (recipientExtraEvents.length > 0) {
      stepResult.recipientResults.extraEvents.push(...recipientExtraEvents.map((e) => e.type));

    }

    // Check for duplicate events (WebSocket events)
    const actorEventIds = actorEvents.map(e => e.id);
    const actorDuplicates = actorEventIds.filter((id, idx) => actorEventIds.indexOf(id) !== idx);
    if (actorDuplicates.length > 0) {
      stepResult.actorResults.duplicateEvents.push(...actorDuplicates);

    }

    const recipientEventIds = recipientEvents.map(e => e.id);
    const recipientDuplicates = recipientEventIds.filter((id, idx) => recipientEventIds.indexOf(id) !== idx);
    if (recipientDuplicates.length > 0) {
      stepResult.recipientResults.duplicateEvents.push(...recipientDuplicates);

    }

    for (let i = 0; i < eventList.length; i++) {
      const expectedEvent = eventList[i];
      const expectedEventType = expectedEvent.type?.expectedValue;
      const eventAuthor = expectedEvent.author || 'Actor'; // Default to Actor if not specified

      const targetEvents = eventAuthor === 'Actor' ? actorEvents : recipientEvents;
      const expectedEvents = eventAuthor === 'Actor' ? expectedActorEvents : expectedRecipientEvents;
      const resultContainer = eventAuthor === 'Actor' ? stepResult.actorResults : stepResult.recipientResults;

      const actualEvent = targetEvents.find((e) => e.type === expectedEventType);
      const eventType = expectedEventType || `Unknown event at index ${i}`;
      const eventResult: EventValidation = {
        eventIndex: i,
        eventType,
        eventAuthor,
        isPassed: true,
      };

      if (!actualEvent) {

        resultContainer.missingEvents.push(`${eventAuthor}:${eventType}`);
        resultContainer.failedEvents++;
        resultContainer.events.push(eventResult);
        continue;
      }

      const validationTasks = [
        { key: 'specversion', field: 'SPECVERSION' },
        { key: 'version', field: 'VERSION' },
        { key: 'source', field: 'SOURCE' },
        { key: 'type', field: 'TYPE' },
        { key: 'data', field: 'DATA' },
      ];

      for (const { key, field } of validationTasks) {
        if (expectedEvent[key]) {
          const result = await debugCompare(
            expectedEvent[key],
            key === 'source'
              ? parseSource(actualEvent[key])
              : key === 'data'
                ? actualEvent
                : actualEvent[key],
            field as any,
            context,
            i,
            step.title,
          );
          eventResult[`${key.toLowerCase()}Result`] = result;
          eventResult.isPassed = eventResult.isPassed && result.isEqual;
        }
      }

      eventResult.isPassed
        ? resultContainer.passedEvents++
        : resultContainer.failedEvents++;
      resultContainer.events.push(eventResult);

      // Check order validity
      const receivedTypes = targetEvents.map(e => e.type);
      const expectedTypes = eventList
        .filter(e => (e.author || 'Actor') === eventAuthor)
        .map(e => e.type?.expectedValue);
      resultContainer.orderIsValid = receivedTypes.every((type, idx) => !expectedTypes[idx] || type === expectedTypes[idx]);
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
  eventLabel?: string,
): Promise<MatcherResult> {
  try {
    const result = await matcher(actualValue, context);
    const response = {
      isEqual: result.isEqual,
      allDifferences: result.allDifferences,
    };
    return response;
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : String(e);
    return {
      isEqual: false,
      allDifferences: [errorMessage],
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

export function getExpectedEvents(action: string, scenarioType?: 'NEW_CONTACT' | 'EXISTING_CONTACT' | 'DEFAULT') {
  const config = EVENTS_BY_ACTION[action];
  if (isScenarioConfig(config) && scenarioType !== 'DEFAULT') {
    return {
      actorEvents: config.scenarios[scenarioType].actor,
      recipientEvents: config.scenarios[scenarioType].recipient,
      minCount: config.scenarios[scenarioType].minCount || config.scenarios[scenarioType].actor.length
    };
  } else {
    return {
      actorEvents: config.scenarios[scenarioType].actor,
      recipientEvents: config.scenarios[scenarioType].recipient,
      minCount: config.scenarios[scenarioType].minCount || config.scenarios[scenarioType].actor.length
    };
  }


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
  // Create report object
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

  // Helper functions
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
      ...(eventContext.events.find((e) => e.author === 'Recipient')?.events || []),
    ];
    return allEvents.find((event) => event.id === eventId);
  };

  const compareEventData = (event1: any, event2: any) => {
    const data1 = JSON.stringify(event1.data || {});
    const data2 = JSON.stringify(event2.data || {});
    return data1 === data2;
  };

  // Get resume token
  let tokenResume: string;
  let resumePoint;
  const { title, author, type, index, data } = step;

  if (data !== 'time' && data !== 'id') {
    tokenResume = data;
  } else {
    const resumeDates = resumeContext.getEventToken(author, title, data, type);
    resumePoint = resumeContext.findResumePoint(author, resumeDates[data], data, type);

    if (!resumePoint) {
      resumeReport.errors.push({
        type: 'ResumePointNotFound',
        message: `No break point found for ${author} with token ${data}`,
        timestamp: new Date().toISOString(),
      });
      return resumeReport;
    }

    resumeReport.summary.resumePointsFound++;
  }

  // Prepare events for processing
  const eventsToProcess = [];
  const processedEventIds = new Set();
  let lastTotal = Infinity;
  let isReconnectionEnded = false;

  // Add resume point if exists
  if (resumePoint) {
    const resumePointData = resumePoint.events.filter((ev) => ev.type === type);
    if (resumePointData.length > 0) {
      resumeReport.events.push({
        type: 'ResumePoint',
        eventId: resumePointData[0].data['id'],
        data: resumePointData[0].data[data],
      });
    }

    // Sort and deduplicate events
    resumePoint.events
      .sort((a, b) => new Date(a.time || a.timestamp).getTime() - new Date(b.time || b.timestamp).getTime())
      .forEach(event => {
        if (!processedEventIds.has(event.id)) {
          processedEventIds.add(event.id);
          eventsToProcess.push(event);
        }
      });
  }

  // Process events
  for (const eventData of eventsToProcess) {
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

    // Prepare and send message
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
        continue;
      }

      eventIds.add(event.id);

      const matchedEvent = findEventById(eventContext, event.id);
      const eventEntry = {
        eventId: event.id,
        type: event.type,
        timestamp: event.time || new Date().toISOString(),
        data: event.data,
        matched: !!matchedEvent,
        dataConsistent: matchedEvent ? compareEventData(event, matchedEvent) : false,
      };
      resumeReport.events.push(eventEntry);

      // Check for reconnection ended
      if (event.type === API_EVENT.halome.v3.webSocket.RECONNECTION_STARTED) {
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
  // console.log(JSON.stringify(eventContext, null, 2))
  // console.log(JSON.stringify(resumeReport, null, 2))

  const comparisonResults = compareResumeWithNormalEventsDetailed(
    resumeReport.events.filter(e => e.type !== 'ResumePoint'),
    eventContext.events.find(e => e.author === author)?.events || [],
    author
  );
  console.log(JSON.stringify(comparisonResults,null, 2))
  return resumeReport;
}

function checkDuplicateEvent(collectedEvents): string[] {
  const eventIdCounts = new Map<string, number>();
  const duplicates: string[] = [];

  for (const event of collectedEvents) {
    const eventId = event.id || 'unknown';
    eventIdCounts.set(eventId, (eventIdCounts.get(eventId) || 0) + 1);
    if (eventIdCounts.get(eventId)! > 1) {
      duplicates.push(eventId);
    }
  }

  return duplicates;
}

function checkOrderEvent(collectedEvents, action: string, dmStatus): boolean {
  const { actorEvents, recipientEvents, minCount } = getExpectedEvents(action, dmStatus)
  let orderIsValid = true;
  for (
    let i = 0;
    i < actorEvents.length && i < collectedEvents.length;
    i++
  ) {
    const expectedEventType = actorEvents[i];
    const actualEvent = collectedEvents[i];
    if (actualEvent && actualEvent.type !== expectedEventType) {
      orderIsValid = false;
      break;
    }
  }
  return orderIsValid;
}

interface EventComparisonDetail {
  isEqual: boolean;
  allDifferences: string[];
}

interface EventResult {
  eventIndex: number;
  eventType: string;
  eventAuthor: string;
  isPassed: boolean;
  specversionResult: EventComparisonDetail;
  versionResult: EventComparisonDetail;
  sourceResult: EventComparisonDetail;
  typeResult: EventComparisonDetail;
  dataResult: EventComparisonDetail;
}

interface ParticipantResults {
  totalEvents: number;
  eventExpected: number;
  missingEventExpected: string[];
  passedEvents: number;
  failedEvents: number;
  missingEvents: string[];
  extraEvents: string[];
  orderIsValid: boolean;
  duplicateEvents: string[];
  events: EventResult[];
}

interface ResumeComparisonResult {
  stepAction: string;
  actorResults?: ParticipantResults;
  recipientResults?: ParticipantResults;
}

function compareResumeWithNormalEventsDetailed(
  resumeEvents: any[],
  normalEvents: any[],
  author: 'Actor' | 'Recipient'
): ResumeComparisonResult {
  // Filter events by author
  const filteredNormalEvents = normalEvents
    .filter(e => e.author === author)
    .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

  const filteredResumeEvents = resumeEvents
    .filter(e => e.type !== 'ResumePoint')
    .sort((a, b) => new Date(a.timestamp || a.time).getTime() - new Date(b.timestamp || b.time).getTime());

  // Initialize result structure
  const result: ResumeComparisonResult = {
    stepAction,
  };

  // Create the appropriate results property based on author
  const resultsKey = author === 'Actor' ? 'actorResults' : 'recipientResults';
  
  result[resultsKey] = {
    totalEvents: filteredResumeEvents.length,
    eventExpected: filteredNormalEvents.length,
    missingEventExpected: [],
    passedEvents: 0,
    failedEvents: 0,
    missingEvents: [],
    extraEvents: [],
    orderIsValid: true,
    duplicateEvents: [],
    events: []
  };

  // Check for missing expected events
  const normalEventIds = new Set(filteredNormalEvents.map(e => e.id));
  const resumeEventIds = new Set(filteredResumeEvents.map(e => e.eventId || e.id));

  result[resultsKey]!.missingEventExpected = filteredNormalEvents
    .filter(e => !resumeEventIds.has(e.id))
    .map(e => e.id);

  // Check for extra events in resume
  result[resultsKey]!.extraEvents = filteredResumeEvents
    .filter(e => !normalEventIds.has(e.eventId || e.id))
    .map(e => e.eventId || e.id);

  // Check event order
  if (filteredResumeEvents.length === filteredNormalEvents.length) {
    for (let i = 0; i < filteredResumeEvents.length; i++) {
      if (filteredResumeEvents[i].type !== filteredNormalEvents[i].type) {
        result[resultsKey]!.orderIsValid = false;
        break;
      }
    }
  }

  // Compare each event in detail
  for (let i = 0; i < filteredResumeEvents.length; i++) {
    const resumeEvent = filteredResumeEvents[i];
    const normalEvent = filteredNormalEvents.find(e => e.id === (resumeEvent.eventId || resumeEvent.id));

    const eventResult: EventResult = {
      eventIndex: i,
      eventType: resumeEvent.type,
      eventAuthor: author,
      isPassed: false,
      specversionResult: { isEqual: true, allDifferences: [] },
      versionResult: { isEqual: true, allDifferences: [] },
      sourceResult: { isEqual: true, allDifferences: [] },
      typeResult: { isEqual: true, allDifferences: [] },
      dataResult: { isEqual: true, allDifferences: [] }
    };

    if (!normalEvent) {
      eventResult.isPassed = false;
      result[resultsKey]!.events.push(eventResult);
      continue;
    }

    // Compare each field
    eventResult.specversionResult = compareField(
      resumeEvent.specversion,
      normalEvent.specversion,
      'specversion'
    );
    eventResult.versionResult = compareField(
      resumeEvent.version,
      normalEvent.version,
      'version'
    );
    eventResult.sourceResult = compareField(
      resumeEvent.source,
      normalEvent.source,
      'source'
    );
    eventResult.typeResult = compareField(
      resumeEvent.type,
      normalEvent.type,
      'type'
    );
    eventResult.dataResult = deepCompareData(
      resumeEvent.data,
      normalEvent.data
    );

    // Determine if event passed
    eventResult.isPassed = [
      eventResult.specversionResult.isEqual,
      eventResult.versionResult.isEqual,
      eventResult.sourceResult.isEqual,
      eventResult.typeResult.isEqual,
      eventResult.dataResult.isEqual
    ].every(Boolean);

    if (eventResult.isPassed) {
      result[resultsKey]!.passedEvents++;
    } else {
      result[resultsKey]!.failedEvents++;
    }

    result[resultsKey]!.events.push(eventResult);
  }

  return result;
}

// Helper functions remain the same
function compareField(actual: any, expected: any, fieldName: string): EventComparisonDetail {
  if (actual === expected) {
    return { isEqual: true, allDifferences: [] };
  }
  return {
    isEqual: false,
    allDifferences: [`${fieldName} => actual: ${JSON.stringify(actual)} !== expected: ${JSON.stringify(expected)}`]
  };
}

function deepCompareData(actualData: any, expectedData: any, path = ''): EventComparisonDetail {
  const result: EventComparisonDetail = {
    isEqual: true,
    allDifferences: []
  };

  if (actualData === expectedData) {
    return result;
  }

  if (typeof actualData !== 'object' || typeof expectedData !== 'object' || 
      actualData === null || expectedData === null) {
    result.isEqual = false;
    result.allDifferences.push(
      `${path} => actual: ${JSON.stringify(actualData)} !== expected: ${JSON.stringify(expectedData)}`
    );
    return result;
  }

  for (const key in expectedData) {
    const currentPath = path ? `${path}.${key}` : key;
    
    if (!(key in actualData)) {
      result.isEqual = false;
      result.allDifferences.push(
        `${currentPath}: missing in actual (expected has ${JSON.stringify(expectedData[key])})`
      );
      continue;
    }

    const fieldResult = deepCompareData(actualData[key], expectedData[key], currentPath);
    if (!fieldResult.isEqual) {
      result.isEqual = false;
      result.allDifferences.push(...fieldResult.allDifferences);
    }
  }

  return result;
}