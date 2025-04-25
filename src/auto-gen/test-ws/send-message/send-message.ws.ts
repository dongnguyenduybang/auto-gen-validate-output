import { Operator } from '../../enums/operator.enum';
import { Element } from '../../enums/element.enum';
import { HeaderList } from '../../enums/header.enum';
import { APIPath } from '../../enums/path.enum';
import { METHOD } from '../../enums/method.enum';
import { VAR } from '../../enums/var-placeholder.enum';
import { API_EVENT } from '../../utils/ws-config';

export const SendMessageSagaWS = {
  beforeAll: [
    {
      action: 'mockUser',
      body: {
        quantity: 2,
        prefix: 'testabcssd',
        badge: 0
      }
    },
    {
      action: 'openConnection',
      method: METHOD.GET,
      path: APIPath.WebSocket.OpenConnection,
      headers: HeaderList.Token()
    },
    {
      action: 'openConnection',
      method: METHOD.GET,
      path: APIPath.WebSocket.OpenConnection,
      headers: HeaderList.Token1()
    },
  ],
  wsOpen: [
    {
      action: 'wsActor',
      path: VAR.url,
      expect: {
        type: { operator: Operator.EQUAL, expect: API_EVENT.halome.v3.realTime.GATEWAY_CONNECTED },
        data: {
          userId: { operator: Operator.EQUAL, expect: VAR.userId },
          message: { operator: Operator.EQUAL, expect: 'Hello' }
        }
      }
    },
    {
      action: 'wsRecipient',
      path: VAR.url1,
      expect: {
        type: { operator: Operator.EQUAL, expect: API_EVENT.halome.v3.realTime.GATEWAY_CONNECTED },
        data: {
          userId: { operator: Operator.EQUAL, expect: VAR.userId1 },
          message: { operator: Operator.EQUAL, expect: 'Hello' }
        }
      }
    },
  ],
  steps: [
    {
      action: 'createChannel',
      method: METHOD.POST,
      path: APIPath.Channel.CreateChannel,
      body: {
        workspaceId: '0',
        channelName: 'test channel',
      },
      headers: HeaderList.Token(),
    },
    {
      action: 'acceptInvitation',
      method: METHOD.POST,
      path: APIPath.Invitation.AcceptInvitation,
      body: {
        invitationLink: VAR.invitationLink
      },
      headers: HeaderList.Token1(),
    },
    {
      action: 'sendMessage',
      method: METHOD.POST,
      path: APIPath.Message.SendMessage,
      body: {
        workspaceId: '0',
        channelId: VAR.channelId,
        content: 'user send message',
        ref: 'ref',
      },
      headers: HeaderList.Token(),
    },
    // {
    //   action: 'resume',
    //   path: 'wsActor',
    //   body: "member_joined.id",

    // },
    // {
    //   action: 'sendMessage',
    //   method: METHOD.POST,
    //   path: APIPath.Message.SendMessage,
    //   body: {
    //     workspaceId: '0',
    //     channelId: VAR.channelId,
    //     content: 'user send message 2',
    //     ref: 'ref',
    //   },
    //   headers: HeaderList.Token(),
    // },
  ],
  wssCheck:
  {
    expectWSActor: [
      // {
      //   type: { operator: Operator.EQUAL, expect: API_EVENT.halome.v3.realTime.GATEWAY_CONNECTED },
      //   data: {
      //     message: { operator: Operator.EQUAL, expect: 'Hello' }
      //   }
      // },
      {
        type: { operator: Operator.EQUAL, expect: API_EVENT.halome.v3.chat.CHANNEL_CREATED },
        data: {
          channel: {
            workspaceId: { operator: Operator.EQUAL, expect: '0' },
            channelId: { operator: Operator.EQUAL, expect: VAR.channelId },
            userId: { operator: Operator.EQUAL, expect: VAR.userId },
          },
          includes: {
            users: [
              {
                field: 'userId',
                operator: Operator.INCLUDE,
                element: Element.FIRST,
                expect: [VAR.userId],
              },
              {
                field: 'userType',
                operator: Operator.INCLUDE,
                element: Element.FIRST,
                expect: 0,
              },
              {
                field: 'profile.userBadgeType',
                operator: Operator.EQUAL,
                expect: 0,
              },
            ],
          }
        },

      },
      {
        type: { operator: Operator.EQUAL, expect: API_EVENT.halome.v3.chat.MESSAGE_CREATED },
      },
      {
        type: { operator: Operator.EQUAL, expect: API_EVENT.halome.v3.chat.MEMBER_JOINED },
        data: {
          workspaceId: { operator: Operator.EQUAL, expect: '0' },
          channelId: { operator: Operator.EQUAL, expect: VAR.channelId },
          joinedUserId: { operator: Operator.EQUAL, expect: VAR.userId1 }
        }
      },
      {
        type: { operator: Operator.EQUAL, expect: API_EVENT.halome.v3.chat.MESSAGE_CREATED },
        data: {
          message: {
            channelId: { operator: Operator.EQUAL, expect: VAR.channelId },
            content: { operator: Operator.EQUAL, expect: '%s joined this channel' },
            messageType: { operator: Operator.EQUAL, expect: 1 }
          }
        }
      },
      {
        type: { operator: Operator.EQUAL, expect: API_EVENT.halome.v3.chat.MESSAGE_CREATED },
        data: {
          message: {
            workspaceId: { operator: Operator.EQUAL, expect: '0' },
            channelId: { operator: Operator.EQUAL, expect: VAR.channelId },
            content: { operator: Operator.EQUAL, expect: 'user send message' },
            userId: { operator: Operator.EQUAL, expect: VAR.userId },
            messageType: { operator: Operator.EQUAL, expect: 0 }
          }
        }
      },
      {
        type: { operator: Operator.EQUAL, expect: API_EVENT.halome.v3.chat.USER_UNREAD_MESSAGE_UPDATED },
        data: {
          lastSeenMessageId: { operator: Operator.EQUAL, expect: VAR.messageId1 },
          userId: { operator: Operator.EQUAL, expect: VAR.userId },
          channelId: { operator: Operator.EQUAL, expect: VAR.channelId },
        },
      }
    ],
    expectWSRecipient: [
      {
        type: { operator: Operator.EQUAL, expect: API_EVENT.halome.v3.realTime.GATEWAY_CONNECTED },
        data: {
          message: { operator: Operator.EQUAL, expect: 'Hello' }
        }
      },
      {
        type: { operator: Operator.EQUAL, expect: API_EVENT.halome.v3.chat.MEMBER_JOINED },
        data: {
          workspaceId: { operator: Operator.EQUAL, expect: '0' },
          channelId: { operator: Operator.EQUAL, expect: VAR.channelId },
          joinedUserId: { operator: Operator.EQUAL, expect: VAR.userId1 }
        }

      },
      {
        type: { operator: Operator.EQUAL, expect: API_EVENT.halome.v3.chat.MESSAGE_CREATED },
        data: {
          message: {
            channelId: { operator: Operator.EQUAL, expect: VAR.channelId },
            content: { operator: Operator.EQUAL, expect: '%s joined this channel' },
            messageType: { operator: Operator.EQUAL, expect: 1 }
          }
        }

      },
      {
        type: { operator: Operator.EQUAL, expect: API_EVENT.halome.v3.chat.MESSAGE_CREATED },
        data: {
          message: {
            workspaceId: { operator: Operator.EQUAL, expect: '0' },
            channelId: { operator: Operator.EQUAL, expect: VAR.channelId },
            content: { operator: Operator.EQUAL, expect: 'user send message' },
            userId: { operator: Operator.EQUAL, expect: VAR.userId },
            messageType: { operator: Operator.EQUAL, expect: 0 }
          }
        },

      },
    ]
  }
};
