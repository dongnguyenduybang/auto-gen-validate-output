import { ACTION, ACTION_CONFIG } from '../enums';
import { getApiFunctions } from '../functions/api-registry';
import { EventValidationResult, StepResult } from './declarations';
import { EVENTS_BY_ACTION } from './event-action';
import { extractDates } from './extract-data';
import { resolveVariables } from './helper';
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
    const { title, action, body, headers, expect: expectConfig } = step;
    const lastWord = title.trim().split(' ').pop();
    const key = `ws__${lastWord}`;

    const actionInfo = ACTION_CONFIG[action as keyof typeof ACTION_CONFIG];

    const resolveBody = resolveVariables(body, context);
    const resolveHeader = resolveVariables(headers, context);

    if (action === ACTION.CONNECT_WS) {
        const resultWSOpen = await executeOpenWS(
            title,
            resolveBody,
            context,
            collectors,
        );
        const collector = collectors[`ws__${lastWord}`];
        if (!collector) {
            console.warn(`Collector not found for ${lastWord}`);
            return;
        }
        const events = await collector.collectEventsAfterAction();
        eventContext.addEvent(lastWord, events, 0);
        resumeContext.addResumeEvents(lastWord, events, title);

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
            body: null,
        });

        const extractedData = extractDates(responseBeforeAll.data, action);
        context.mergeData(extractedData);

        const collector = collectors[`ws__${lastWord}`];
        if (!collector) {
            console.warn(`No WebSocketEventCollector found for key: ${key}`);
            return;
        }
        const events = await collector.collectEventsAfterAction();
        const eventFilter = events.map((e) => ({
            id: e.id,
            time: e.time,
            source: e.source,
            type: e.type,
        }));
        eventContext.addEvent(lastWord, eventFilter, 0);
        resumeContext.addResumeEvents(lastWord, events, title);
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
    const { title, action, body, headers, expect: expectConfig } = step;
    const lastWord = title.trim().split(' ').pop();
    const key = `ws__${lastWord}`;
    const actionInfo = ACTION_CONFIG[action as keyof typeof ACTION_CONFIG];

    const resolveBody = resolveVariables(body, context);
    const resolveHeader = resolveVariables(headers, context);

    const apiFunction = getApiFunctions(action, context, null);

    const responseStep = await apiFunction({
        method: actionInfo.method,
        path: actionInfo.path,
        headers: resolveHeader,
        body: resolveBody,
    });
    const collector = collectors[`ws__${lastWord}`];
    if (!collector) {
        console.warn(`No WebSocketEventCollector found for key: ${key}`);
        return;
    }
    const events = await collector.collectEventsAfterAction();
    const existingEventIds = eventContext
        .getValue()
        .filter((e) => e.action === lastWord)
        .flatMap((e) => e.events.map((ev) => ev.id));
    const newEvents = events.filter(
        (event) => !existingEventIds.includes(event.id),
    );
    const eventFilter = events.map((e) => ({
        id: e.id,
        time: e.time,
        source: e.source,
        type: e.type,
        data: e.data,
    }));
    if (newEvents.length > 0) {
        eventContext.addEvent(lastWord, eventFilter, index);
        resumeContext.addResumeEvents(lastWord, newEvents, title);
    }

    const { types: expectedEventTypes, minCount, filedMappings } = getExpectedEventTypes(action);

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

    if (events.length >= minCount && missingEvents.length === 0 && unexpectedEvents.length === 0) {
        const isOrderValid = receivedEventTypes.every((type, index) => type === expectedEventTypes[index]);
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

    const resultCheckData = checkData(responseStep.data, eventFilter, action, validationResult, getExpectedEventTypes(action));
    console.log(JSON.stringify(resultCheckData))
    return {
        isValid: validationResult.isValid,
        errors: validationResult.errors,
    };
}


export async function executeResume(
    step,
    context: TestContext,
    eventContext: EventContext,
    resumeContext: ResumeContext,
    collectors: Record<string, WebSocketEventCollector>,
    index: number,
) {
    // Tạo object để lưu thông tin report
    const resumeReport = {
        startTime: new Date().toISOString(),
        stepInfo: {
            title: step.title,
            type: step.type,
            data: step.data,
            lastWord: step.title.trim().split(' ').pop()
        },
        events: [],
        errors: [],
        duplicates: [],
        summary: {
            totalEventsProcessed: 0,
            resumePointsFound: 0,
            reconnectionEnded: false
        }
    };

    let tokenResume: string;
    let resumePoint;
    const { title, type, data } = step;
    const lastWord = title.trim().split(' ').pop();

    const findEventById = (eventContext: EventContext, eventId: string) => {
        if (!eventContext?.events) {
            resumeReport.errors.push({
                type: 'InvalidEventContext',
                message: 'eventContext.events is undefined or null',
                timestamp: new Date().toISOString()
            });
            return undefined;
        }

        const allEvents = [
            ...(eventContext.events.find(e => e.action === 'Actor')?.events || []),
            ...(eventContext.events.find(e => e.action === 'Recipient')?.events || []),
        ];
        return allEvents.find(event => event.id === eventId);
    };

    const compareEventData = (event1: any, event2: any) => {
        const data1 = JSON.stringify(event1.data || {});
        const data2 = JSON.stringify(event2.data || {});
        return data1 === data2;
    };

    if (data !== 'time' && data !== 'id') {
        tokenResume = data;
    } else {
        const resumeDates = resumeContext.getEventToken(lastWord, title, data, type);
        resumePoint = resumeContext.findResumePoint(lastWord, resumeDates[data], data);

        if (!resumePoint) {
            resumeReport.errors.push({
                type: 'ResumePointNotFound',
                message: `No break point found for ${lastWord} with token ${data}`,
                timestamp: new Date().toISOString()
            });
            return resumeReport; // Trả về report ngay nếu không tìm thấy resume point
        }

        resumeReport.summary.resumePointsFound++;
    }

    let lastTotal = Infinity;
    let isReconnectionEnded = false;

    if (resumePoint) {
        const resumePointData = resumePoint.events.filter(ev => ev.type === type );
        resumeReport.events.push({
            type: 'ResumePoint',
            eventId: resumePointData[0].data['id'],
            data: resumePointData[0].data[data]
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

            const collectorKey = `ws__${lastWord}`;
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
                    dataConsistent: matchedEvent ? compareEventData(event, matchedEvent) : false
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

    console.log(resumeReport)
    return resumeReport;
}

export async function executeAllResumesFromPoint(
    startStep: { title: string; data: string },
    resumeDates,
    context: TestContext,
    eventContext: EventContext,
    resumeContext: ResumeContext,
    collectors: Record<string, WebSocketEventCollector>,
): Promise<Array<{ tokenResume: string | null; events: any[] }>> {
    const { title, data } = startStep;
    const lastWord = title.trim().split(' ').pop() || '';
    const results: Array<{ tokenResume: string | null; events: any[] }> = [];

    // Lấy tất cả sự kiện từ ResumeContext cho action
    const entry = resumeContext.getEntries().find((e) => e.action === lastWord);
    if (!entry) {
        console.warn(`Không tìm thấy action: ${lastWord} trong ResumeContext`);
        return results;
    }

    // Sắp xếp các sự kiện theo time
    const sortedEvents = entry.resume
        .map((event) => ({
            title: event.title,
            data: event.data,
        }))
        .sort(
            (a, b) =>
                new Date(a.data.time).getTime() - new Date(b.data.time).getTime(),
        );

    // Tìm index của resume point ban đầu
    const startIndex = sortedEvents.findIndex(
        (event) => event.title === title && event.data.time === resumeDates.time,
    );

    if (startIndex === -1) {
        console.warn(
            `Không tìm thấy resume point: ${title} tại ${resumeDates.time}`,
        );
        return results;
    }

    // Lặp qua các sự kiện từ startIndex trở đi
    for (let i = startIndex; i < sortedEvents.length; i++) {
        const event = sortedEvents[i];
        const step = {
            title: event.title,
            data: 'id',
        };

        console.log(`Xử lý resume point ${i + 1}/${sortedEvents.length}:`, step);
        const result = await executeResume(
            step,
            context,
            eventContext,
            resumeContext,
            collectors,
            i,
        );
        // results.push(result);
    }

    return results;
}

export function executeAfterAll(step, context: TestContext) { }

export function executeBeforeEach(step, context: TestContext) { }

export function executeAfterEach(step, context: TestContext) { }

function getExpectedEventTypes(action: string): {
    types: string[];
    minCount: number;
    filedMappings?: any;
} {
    return EVENTS_BY_ACTION[action] || { types: [], minCount: 0, filedMappings: [] };
}

function checkData(apiResponse: any, wsResponse: any[], action: string, validationResult: any, eventType) {

    const { types: expectedEventTypes, minCount, filedMappings } = eventType;

    const relevantWsEvents = wsResponse.filter(event => event.data && event.data.includes);
    const otherWsEvents = wsResponse.filter(event => event.data && !event.data.includes);
    const structuredWsEvents = restructureRelevantWsEvents(relevantWsEvents);

    const wsData = structuredWsEvents[0].data;
    const wsIncludes = structuredWsEvents[0].includes;
    const wsOtherEvent = otherWsEvents[0];

    const mapping = filedMappings.find(m => m.eventType === wsOtherEvent.type);
    const fake = {
        workspaceId: '0'
    }
    const mismatches = checkMatchingValues(apiResponse.data, fake, mapping.fields);
    if (mismatches.length > 0) {
        validationResult.isValid = false;
        mismatches.forEach((mismatch) => {
            validationResult.errors.push({
                type: 'data_mismatch',
                eventType: mapping.eventType,
                message: mismatch.message,
                expected: mismatch.expected,
                actual: mismatch.actual,
            });
        });
    }

    const dataDiffs = compareObjects(apiResponse.data, wsData, "data");
    if (dataDiffs.length > 0) {
        validationResult.isValid = false;
        dataDiffs.forEach((dataDiff) => {
            validationResult.errors.push({
                type: 'data_diff',
                eventType: expectedEventTypes,
                message: dataDiff.message,
                expected: dataDiff.expected,
                actual: dataDiff.actual,
            });
        });
    }
    const includesDiffs = compareObjects(apiResponse.includes, wsIncludes, "includes");
    if (includesDiffs.length > 0) {
        validationResult.isValid = false;
        includesDiffs.forEach((includesDiff) => {
            validationResult.errors.push({
                type: 'include_diff',
                eventType: expectedEventTypes,
                message: includesDiff.message,
                expected: includesDiff.expected,
                actual: includesDiff.actual,
            });
        });
    }
    return {
        isValid: validationResult.isValid,
        errors: validationResult.errors,
    };

}

function compareObjects(obj1: Object, obj2: Object, path: string): any {
    const differences: any[] = []

    if (obj1 == null && obj2 == null) {
        return differences;
    }
    if (obj1 == null || obj2 == null) {
        differences.push({
            path: path,
            message: 'miss match',
            actual: `${JSON.stringify(obj1)}`,
            expected: `${JSON.stringify(obj2)}`
        })
        return differences;
    }

    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        return compareArrays(obj1, obj2, path);
    }

    if (typeof obj1 === "object" && typeof obj2 === "object") {

        for (const key in obj1) {
            if (!(key in obj2)) {
                differences.push({
                    path: path,
                    message: `${key} is missing`,
                    actual: `${JSON.stringify(obj1)}`,
                    expected: `${JSON.stringify(obj2)}`
                })

            } else {

                const nestedDiff = compareObjects(obj1[key], obj2[key], `${path}.${key}`);
                differences.push(...nestedDiff);
            }
        }

        for (const key in obj2) {
            if (!(key in obj1)) {
                differences.push({
                    path: path,
                    message: `${key} is extra`,
                    actual: `${JSON.stringify(obj1)}`,
                    expected: `${JSON.stringify(obj2)}`
                })
            }
        }
    } else if (JSON.stringify(obj1) !== JSON.stringify(obj2)) {

        differences.push({
            path: path,
            message: 'miss match',
            actual: `${JSON.stringify(obj1)}`,
            expected: `${JSON.stringify(obj2)}`
        })
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
            expected: `${JSON.stringify(arr2)}`
        })
    }

    const maxLength = Math.min(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
        const itemDiff = compareObjects(arr1[i], arr2[i], `${path}[${i}]`);
        differences.push(...itemDiff);
    }

    return differences;
}
function restructureRelevantWsEvents(events: any[]) {
    return events.map(event => {
        const { includes, ...dataWithoutIncludes } = event.data || {};

        return {
            ...event,
            data: dataWithoutIncludes,
            ...(includes ? { includes } : {})
        };
    });
}

function getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

function checkMatchingValues(apiData: any, wsData: any, fieldMappings: { wsField: string; apiField: string; required: boolean }[]): any[] {
    const mismatches: any[] = [];

    for (const { wsField, apiField, required } of fieldMappings) {
        const wsValue = getNestedValue(wsData, wsField);
        const apiValue = getNestedValue(apiData, apiField);
        if (required && wsValue === undefined) {
            mismatches.push({
                field: wsField,
                expected: apiValue,
                received: wsValue,
                message: `${wsField} undefined`,
            });
        }
        else if (wsValue !== undefined && wsValue !== apiValue) {
            mismatches.push({
                field: wsField,
                expected: apiValue,
                received: wsValue,
                message: `${wsField} miss match`,
            });
        }
    }

    return mismatches;
}
