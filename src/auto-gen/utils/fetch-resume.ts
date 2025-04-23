import { WSSContext } from "./text-context";
import { WebSocketEventCollector } from "./ws-event-collector";
import { getWebSocket } from "./ws-store";

export async function fetchResume(action, path, dataResume, contextWSS: WSSContext, collector: WebSocketEventCollector) {
    const wsKey = path === 'wsActor' ? 'ws_wsActor' : 'ws_wsRecipient';
    const ws = getWebSocket(wsKey);
    if (!ws || ws.readyState !== WebSocket.OPEN) {
        throw new Error(`WebSocket ${wsKey} không mở`);
    }
    ws.send(JSON.stringify(dataResume));
    console.log(`Đã gửi resumeResult qua ${wsKey}:`, dataResume);

    const { actorEvents, recipientEvents } = await collector.collectEventsAfterAction(10000, 5);

    const currentEvents = contextWSS.getValue(path) || [];
    const newEvents = (path === 'wsActor' ? actorEvents : recipientEvents).filter(
        (event: any) => !currentEvents.some((existing: any) => existing.id === event.id)
    );
    // Cập nhật contextWSS với các sự kiện mới
    contextWSS.setValue(path, currentEvents.concat(newEvents));

    // Lấy danh sách sự kiện sau khi cập nhật
    const events = contextWSS.getValue(path) || [];

    // // Tìm index của sự kiện khớp với dataResume.id
    const resumeEventIndex = events.findIndex((event: any) => event.id === dataResume.data.token);
    // if (resumeEventIndex === -1) {
    //     console.warn(`Không tìm thấy sự kiện với id "${dataResume.data.token}" trong ${path}`);
    //     return {
    //         type: 'ws',
    //         status: false,
    //         stepName: action,
    //         error: `Không tìm thấy sự kiện với id "${dataResume.data.token}" trong ${path}`
    //     };
    // }

    // // Lấy các sự kiện sau resumeEventIndex
    // const resumedEvents = events.slice(resumeEventIndex + 1);
    // console.log(`Sự kiện sau resume (sau index ${resumeEventIndex}):`, resumedEvents.map((e: any) => ({ id: e.id, type: e.type })));

    // // Cập nhật contextWSS với resumedEvents
    // contextWSS.setValue(path, resumedEvents);
    return {
        type: 'ws',
        status: true,
        stepName: action,
        resumeEventIndex,
        path
    };
}