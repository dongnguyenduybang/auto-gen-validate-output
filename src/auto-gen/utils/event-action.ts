import { ACTION } from '../enums';

export const EVENTS_BY_ACTION: Record<
  string,
  { types: string[]; minCount: number }
> = {
  [ACTION.OPEN_CONNECTION_WS]: {
    types: ['com.halome.realtime.v3.gateway.connected'],
    minCount: 1,
  },
  [ACTION.CREATE_CHANNEL]: {
    types: [
      'com.halome.chat.v3.channel.created',
      'com.halome.chat.v3.message.created',
    ],
    minCount: 2,
  },
  [ACTION.ACCEPT_INVITATION]: {
    types: [
      'com.halome.chat.v3.member.joined',
      'com.halome.chat.v3.message.created',
    ],
    minCount: 2,
  },
  [ACTION.SEND_MESSAGE]: {
    types: [
      'com.halome.chat.v3.message.created',
      'com.halome.chat.v3.unread_messages.updated',
    ],
    minCount: 2,
  },
  [ACTION.RESUME]: {
    types: ['com.halome.websocket.v3.reconnection_started'],
    minCount: 1,
  },
  [ACTION.UPDATE_CHANNEL_NAME]: {
    types: [
      'com.halome.chat.v3.channel.updated',
      'com.halome.chat.v3.message.created'
    ],
    minCount: 2
  }
};
