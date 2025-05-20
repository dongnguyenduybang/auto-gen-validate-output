import WebSocket from 'ws';
import { getWebSocket, setWebSocket } from './ws-store';
import { TestContext } from './text-context';
import { resolveVariables } from './helper';
import { WebSocketEventCollector } from './ws-event-collector';

export async function executeOpenWS(
  title: string,
  urlConnect: string,
  context: TestContext,
  collectors: Record<string, WebSocketEventCollector>,
) {
  const resolveUrlConnect = resolveVariables(urlConnect, context);
  const ws = new WebSocket(resolveUrlConnect.url);
  await new Promise((resolve, reject) => {
    ws.once('open', resolve);
    ws.once('error', reject);
    ws.once('close', () =>
      reject(new Error('WebSocket closed before connecting')),
    );
  });
  // save ws
  const lastWord = title.trim().split(' ').pop();
  const key = `ws__${lastWord}`;
  let isTrue;
  if (lastWord === 'Actor') {
    isTrue = true;
  } else {
    isTrue = false;
  }
  console.log(key);
  setWebSocket(key, ws);

  collectors[key] = new WebSocketEventCollector(ws, isTrue);
  const wsSave = getWebSocket(`ws__${lastWord}`);

  return ws;
}
