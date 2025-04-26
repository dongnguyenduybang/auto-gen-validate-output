import { APIPath, HeaderList, METHOD, Operator, Element, VAR, ACTION } from "../../enums";

export const SendMessageSaga = {
  steps: [
    {
      action: ACTION.MOCK_USER,
      body: {
        quantity: 2,
        prefix: 'testabcssd',
        badge: 0,
      },
    },
    {
      action: ACTION.CREATE_CHANNEL,
    },
    {
      action: ACTION.SEND_MESSAGE,
      method: METHOD.POST,
      path: APIPath.Message.SendMessage,
      body: {
        workspaceId: '0',
        channelId: VAR.channelId,
        content: 'user send message',
        ref: 'ref',
      },
      headers: HeaderList.Token(),
      expect: {
        ok: { operator: Operator.EQUAL, expect: true },
        data: {
          message: {
            workspaceId: { operator: Operator.EQUAL, expect: 0 },
            channelId: { operator: Operator.EQUAL, expect: VAR.channelId },
            userId: { operator: Operator.EQUAL, expect: VAR.userId },
            content: { operator: Operator.EQUAL, expect: 'user send message' },
            messageType: { operator: Operator.EQUAL, expect: 0 },
            messageStatus: { operator: Operator.EQUAL, expect: 1 },
            attachmentType: { operator: Operator.EQUAL, expect: 0 },
          },
        },
        includes: {
          users: [
            {
              field: 'userId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [VAR.userId],
            },
            {
              field: 'userType',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [0],
            },
            {
              field: 'profile.userBadgeType',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [0],
            },
          ],
          channels: [
            {
              field: 'workspaceId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [0],
            },
            {
              field: 'channelId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [VAR.channelId],
            },
            {
              field: 'userId',
              operator: Operator.INCLUDE,
              element: Element.FIRST,
              expect: [VAR.userId],
            },
            {
              field: 'totalMembers',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [VAR.totalMembers],
            },
            {
              field: 'name',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [VAR.name],
            },
          ],
          members: [
            {
              field: 'workspaceId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [0],
            },
            {
              field: 'channelId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [VAR.channelId],
            },
            {
              field: 'userId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [VAR.userId],
            },
            {
              field: 'role',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: ['owner'],
            },
            {
              field: 'roles.role',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: ['everyone', 'owner'],
            },
          ],
          channelMetadata: [
            {
              field: 'workspaceId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [0],
            },
            {
              field: 'channelId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [VAR.channelId],
            },
          ],
        },
      },
    },
    {
      action: ACTION.ACCEPT_INVITATION,
      method: METHOD.POST,
      path: APIPath.Invitation.AcceptInvitation,
      body: { invitationLink: VAR.invitationLink },
      headers: HeaderList.Token1(),
      expect: {
        ok: { operator: Operator.EQUAL, expect: true },
        includes: {
          users: [
            {
              field: 'userId',
              operator: Operator.INCLUDE,
              element: Element.FIRST,
              expect: [VAR.userId1],
            },
            {
              field: 'userType',
              operator: Operator.INCLUDE,
              expect: [0],
            },
            {
              field: 'profile.userBadgeType',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [0],
            },
          ],
          members: [
            {
              field: 'workspaceId',
              operator: Operator.EQUAL,
              element: Element.ALL,
              expect: [0],
            },
            {
              field: 'channelId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [VAR.channelId],
            },
            {
              field: 'userId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [VAR.userId],
            },
            {
              field: 'role',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: ['owner'],
            },
            {
              field: 'roles.role',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: ['everyone', 'owner'],
            },
          ],
        }
      },
    },
    {
      action: ACTION.GET_CHANNEL,
      method: METHOD.GET,
      path: APIPath.ViewChannel.GetChannel,
      body: { channelId: VAR.channelId, workspaceId: '0' },
      headers: HeaderList.Token(),
      expect: {
        ok: { operator: Operator.EQUAL, expect: true },
      },
    },
  ],
};
