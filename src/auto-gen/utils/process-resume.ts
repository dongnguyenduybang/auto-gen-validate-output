import { getWebSocket } from './ws-store';

export function processAction(path, body, context) {
  const wsKey = path === 'wsActor' ? 'ws_wsActor' : 'ws_wsRecipient';

  const checkConnect = getWebSocket(wsKey);
  if (!checkConnect || checkConnect.readyState !== WebSocket.OPEN) {
    throw new Error(`WebSocket ${wsKey} không mở`);
  }
  // if (path !== 'wsActor' || !Array.isArray(context.wsActor)) {
  //   throw new Error('Mention không hợp lệ hoặc wsActor không có trong context');
  // }

  // Tách body thành type và field (ví dụ: "member_joined.id" -> ["member_joined", "id"])
  const [eventTypeRaw, field] = body.split('.');
  if (!eventTypeRaw || !field) {
    throw new Error('Body không đúng định dạng (type.field)');
  }

  const eventType = eventTypeRaw.replace(/_/g, '.');
  // Tìm sự kiện có type chứa eventType (ví dụ: com.halome.chat.v3.channel.member_joined)
  const matchedEvent = context.data[path]
    .slice()
    .reverse() // Lấy sự kiện mới nhất
    .find((event) => event.type && event.type.includes(eventType));

  if (!matchedEvent) {
    throw new Error(
      `Không tìm thấy sự kiện với type chứa "${eventType}" trong wsActor`,
    );
  }

  // Lấy giá trị của field (ví dụ: id)
  if (!(field in matchedEvent)) {
    throw new Error(`Trường "${field}" không tồn tại trong sự kiện`);
  }
  const value = matchedEvent[field];

  // Tạo đối tượng kết quả
  return {
    id: '',
    time: '',
    type: 'com.halome.websocket.v3.reconnection_started',
    source: '',
    specversion: '1.0',
    data: {
      token: value,
    },
  };
}
