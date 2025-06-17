import { ACTION } from '../enums';
import { API_EVENT } from './ws-config';

export const EVENTS_BY_ACTION: Record<
  string,
  {
    scenarios: {
      NEW_CONTACT?: {
        actor: string[];
        recipient: string[];
        minCount?: number;
      };
      EXISTING_CONTACT?: {
        actor: string[];
        recipient: string[];
        minCount?: number;
      };
      DEFAULT?: {
        actor: string[];
        recipient: string[];
        minCount?: number;
      }
    };
  }
> = {
  [ACTION.OPEN_CONNECTION_WS]: {
    scenarios: {
      DEFAULT: {
        actor: [
          API_EVENT.halome.v3.realTime.GATEWAY_CONNECTED
        ],
        recipient: [
          API_EVENT.halome.v3.realTime.GATEWAY_CONNECTED
        ],
      }
    },
  },
  [ACTION.CREATE_CHANNEL]: {
    scenarios: {
      DEFAULT: {
        actor: [
          API_EVENT.halome.v3.chat.CHANNEL_CREATED,
          API_EVENT.halome.v3.chat.MESSAGE_CREATED
        ],
        recipient: [
          API_EVENT.halome.v3.chat.MEMBER_JOINED
        ],
      }
    },
  },
  [ACTION.ACCEPT_INVITATION]: {
    scenarios: {
      DEFAULT: {
        actor: [
          API_EVENT.halome.v3.chat.MEMBER_JOINED,
          API_EVENT.halome.v3.chat.MESSAGE_CREATED
        ],
        recipient: [
          API_EVENT.halome.v3.chat.MESSAGE_CREATED
        ],
      }
    },
  },

  [ACTION.SEND_DM_MESSAGE]: {
    scenarios: {
      NEW_CONTACT: {
        actor: [
          API_EVENT.halome.v3.chat.OUTGOING_MESSAGE_REQUEST_CREATED,
          API_EVENT.halome.v3.chat.MESSAGE_CREATED,
          API_EVENT.halome.v3.chat.USER_UNREAD_MESSAGE_UPDATED
        ],
        recipient: [
          API_EVENT.halome.v3.chat.INCOMING_MESSAGE_REQUEST_CREATED,
          API_EVENT.halome.v3.chat.MESSAGE_CREATED,

        ],
      },
      EXISTING_CONTACT: {
        actor: [
          API_EVENT.halome.v3.chat.DM_CHANNEL_CREATED,
          API_EVENT.halome.v3.chat.MESSAGE_CREATED,
          API_EVENT.halome.v3.chat.USER_UNREAD_MESSAGE_UPDATED
        ],
        recipient: [
          API_EVENT.halome.v3.chat.DM_CHANNEL_CREATED,
          API_EVENT.halome.v3.chat.MESSAGE_CREATED,

        ],
      },
    },
  },
  // [ACTION.SEND_MESSAGE]: {
  //   types: [
  //     'com.halome.chat.v3.message.created',
  //     'com.halome.chat.v3.unread_messages.updated',
  //   ],
  //   minCount: 2,
  // },
  // [ACTION.RESUME]: {
  //   types: ['com.halome.websocket.v3.reconnection_started'],
  //   minCount: 1,
  // },
  // [ACTION.UPDATE_CHANNEL_NAME]: {
  //   types: [
  //     'com.halome.chat.v3.channel.updated',
  //     'com.halome.chat.v3.message.created',
  //   ],
  //   minCount: 2,
  // },
};
