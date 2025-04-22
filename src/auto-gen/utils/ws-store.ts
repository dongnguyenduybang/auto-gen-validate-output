import WebSocket from 'ws';

const sockets: Record<string, WebSocket> = {};
const wsListeners: Record<string, (event: any) => void> = {};

export function setWebSocket(key: string, ws: WebSocket): void {
  sockets[key] = ws;
}

export function getWebSocket(key: string): WebSocket | undefined {
  return sockets[key];
}

export function addWSListener(key: string, listener: (event: any) => void): void {
  wsListeners[key] = listener;
}

export function removeWSListener(key: string): void {
  delete wsListeners[key];
}

export function closeAllWebSockets(): void {
  Object.values(sockets).forEach(ws => ws.close());
}