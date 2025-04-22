import { WebSocket } from 'ws';
import { initSocketEvents } from '../functions/connect-ws';

export async function captureWSEvents(
  ws: WebSocket,
  timeoutMs: number = 120000, // Tăng timeout
  maxEvents: number = 10
): Promise<any[]> {
  try {
    return await initSocketEvents(ws, maxEvents, timeoutMs);
  } catch (error) {
    console.error('Error capturing WS events:', error);
    return [];
  }
}