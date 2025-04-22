// ws-store.ts
export const wsStore: Record<string, WebSocket> = {};

export function setWebSocket(key: string, ws: WebSocket): void {
  wsStore[key] = ws;
}

export function getWebSocket(key: string): WebSocket | undefined {
  return wsStore[key];
}