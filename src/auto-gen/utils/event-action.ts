import { ACTION } from '../enums';

export const EVENTS_BY_ACTION: Record<
  string,
  { types: string[]; minCount: number, filedMappings?: any }
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
    filedMappings: [
      {
        eventType: 'com.halome.chat.v3.unread_messages.updated',
        fields: [
          { wsField: 'workspaceId', apiField: 'message.workspaceId', required: true },
          { wsField: 'channelId', apiField: 'message.channelId', required: true },
          { wsField: 'userId', apiField: 'message.userId', required: true },
          { wsField: 'lastSeenMessageId', apiField: 'message.messageId', required: true },
          { wsField: 'destination.workspaceId', apiField: 'message.workspaceId', required: false },
          { wsField: 'destination.channelId', apiField: 'message.channelId', required: false },
        ],
      },
    ],
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
