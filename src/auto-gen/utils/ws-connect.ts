import WebSocket from 'ws'
import { initSocketEvents } from '../functions/connect-ws';

export async function connectWSS(path: string, maxEvents,timeoutMs ): Promise<{ ws: WebSocket, message: any }> {
    const ws = new WebSocket(path);
    const message = await initSocketEvents(ws, maxEvents, timeoutMs );
    return { ws, message };
}
