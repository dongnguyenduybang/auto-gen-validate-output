import WebSocket from 'ws';

export async function connectWSS(url: string, maxEvents: number = 1, timeoutMs: number = 10000): Promise<{ ws: WebSocket, message: any[] }> {
  const ws = new WebSocket(url);
  const events = await initSocketEvents(ws, maxEvents, timeoutMs);
  return { ws, message: events };
}

export async function initSocketEvents(ws: WebSocket, maxEvents: number = 1, timeoutMs: number = 5000): Promise<any[]> {
  return new Promise((resolve, reject) => {
    let timeoutId: NodeJS.Timeout;
    const events: any[] = [];

    const cleanup = () => {
      ws.removeAllListeners('message');
      ws.removeAllListeners('error');
      ws.removeAllListeners('close');
      clearTimeout(timeoutId);
    };

    timeoutId = setTimeout(() => {
      console.log(`WebSocket timeout for ${ws.url}, received ${events.length} of ${maxEvents} events`);
      cleanup();
      if (events.length > 0) {
        resolve(events); // Trả về các sự kiện đã nhận nếu có
      } else {
        reject(new Error('WebSocket timeout: No events received within the specified time'));
      }
    }, timeoutMs);

    ws.on('message', (msg) => {
      try {
        const message = JSON.parse(msg.toString());
        console.log(`Received WebSocket message for ${ws.url}:`, message);
        events.push(message);
        if (events.length >= maxEvents) {
          cleanup();
          resolve(events);
        }
      } catch (error) {
        console.error(`Failed to parse WebSocket message for ${ws.url}:`, error);
        cleanup();
        reject(new Error(`Failed to parse WebSocket message: ${error.message}`));
      }
    });

    ws.on('error', (error) => {
      console.error(`WebSocket error for ${ws.url}:`, error);
      cleanup();
      reject(error);
    });

    ws.on('close', () => {
      console.log(`WebSocket closed for ${ws.url}, received ${events.length} events`);
      cleanup();
      resolve(events); // Trả về các sự kiện đã nhận nếu WebSocket đóng
    });
  });
}