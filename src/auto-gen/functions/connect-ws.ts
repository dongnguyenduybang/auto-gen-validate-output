import WebSocket from 'ws';

export async function initSocketEvents(ws: WebSocket, maxEvents: number = 1, timeoutMs: number = 120000): Promise<any[]> {
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
      resolve(events); // Trả về các sự kiện đã nhận, ngay cả khi timeout
    }, timeoutMs);

    ws.on('message', (msg) => {
      try {
        const message = JSON.parse(msg.toString());
        console.log(`Received WebSocket message ${events.length + 1}/${maxEvents} for ${ws.url}:`, message);
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
      try {
        console.log(`WebSocket closed for ${ws.url}, received ${events.length} events`);
        cleanup();
        resolve(events);
      } catch (error) {
        // Ngăn lỗi log không đồng bộ
        cleanup();
        resolve(events);
      }
    });

    // Log khi WebSocket mở
    if (ws.readyState === WebSocket.OPEN) {
      console.log(`WebSocket is open for ${ws.url}`);
    } else {
      ws.on('open', () => {
        console.log(`WebSocket opened for ${ws.url}`);
      });
    }
  });
}