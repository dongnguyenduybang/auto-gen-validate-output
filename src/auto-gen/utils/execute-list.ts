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

    const { types: expectedEventTypes, minCount } = getExpectedEventTypes(action);

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
            message: `Thiếu các event types: ${missingEvents.join(', ')}`,
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
            message: `Nhận được event types không mong đợi: ${unexpectedEvents.join(', ')}`,
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
            message: `Phát hiện duplicate events: ${duplicateEvents.join(', ')}`,
            received: duplicateEvents,
        });
    }

    // check data

    checkData(responseStep.data, eventFilter, action, validationResult);

    // return {
    //     isValid: validationResult.isValid,
    //     errors: validationResult.errors,
    // };
}

export async function executeResume(
    step,
    context: TestContext,
    eventContext: EventContext,
    resumeContext: ResumeContext,
    collectors: Record<string, WebSocketEventCollector>,
    index: number,
) {
    let tokenResume: string;
    let resumePoint;
    const { title, type, data } = step;
    const lastWord = title.trim().split(' ').pop();

    if (data !== 'time' && data !== 'id') {
        tokenResume = data;
    } else {
        const resumeDates = resumeContext.getEventToken(
            lastWord,
            title,
            data,
            type,
        );
        resumePoint = resumeContext.findResumePoint(
            lastWord,
            resumeDates[data],
            data,
        );
        if (!resumePoint) {
            console.warn(`No break point found for ${lastWord} with token ${data}`);
            return;
        }
    }

    for (const eventData of resumePoint.events || []) {
        if (data === 'time' || data === 'id') {
            if (!eventData || !eventData.data || !eventData.data[data]) {
                console.warn(`No valid event data found for ${data}`);
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
            console.warn(`No WebSocketEventCollector found for key: ${collectorKey}`);
            return null;
        }

        collector.sendMessage(message);
        await new Promise((resolve) => setTimeout(resolve, 100));

        const events = await collector.collectEventsAfterAction();
        // console.log(events)
    }
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
} {
    return EVENTS_BY_ACTION[action] || { types: [], minCount: 0 };
}

function checkData(apiResponse: any, wsResponse: any[], action: string, validationResult) {
    const relevantWsEvents = wsResponse.filter(event => event.data && event.data.includes);
    const structuredWsEvents = restructureRelevantWsEvents(relevantWsEvents);
    console.log(JSON.stringify(apiResponse))

    console.log(JSON.stringify(structuredWsEvents))
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
