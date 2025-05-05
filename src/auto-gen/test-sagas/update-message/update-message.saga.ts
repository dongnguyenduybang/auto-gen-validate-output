import { APIPath, HeaderList, METHOD, Operator, Element, VAR, ACTION } from "../../enums";

export const UpdateMessageSaga = {
  steps: [
    {
      action: ACTION.MOCK_USER,
      body: {
        quantity: 2,
        prefix: 'testFakerMockUser',
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
      },
    },
    {
      action: ACTION.UPDATE_MESSAGE,
      method: METHOD.PUT,
      path: APIPath.Message.UpdateMessage,
      body: {
        workspaceId: '0',
        channelId: VAR.channelId,
        messageId: VAR.messageId1,
        content: 'user message update',
      },
      headers: HeaderList.Token(),
      expect: {
        ok: { operator: Operator.EQUAL, expect: true },
        data: {
          message: {
            workspaceId: { operator: Operator.EQUAL, expect: 0 },
            channelId: { operator: Operator.EQUAL, expect: VAR.channelId },
            userId: { operator: Operator.EQUAL, expect: VAR.userId },
            content: {
              operator: Operator.EQUAL,
              expect: 'user message update',
            },
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
          channels: [
            {
              field: 'workspaceId',
              operator: Operator.EQUAL,
              element: Element.FIRST,
              expect: 0,
            },
            {
              field: 'channelId',
              operator: Operator.EQUAL,
              element: Element.FIRST,
              expect: [VAR.channelId],
            },
            {
              field: 'userId',
              operator: Operator.EQUAL,
              element: Element.FIRST,
              expect: [VAR.userId],
            },
            {
              field: 'totalMembers',
              operator: Operator.EQUAL,
              element: Element.FIRST,
              expect: [VAR.totalMembers],
            },
            {
              field: 'name',
              operator: Operator.EQUAL,
              element: Element.FIRST,
              expect: [VAR.name],
            },
          ],
          members: [
            {
              field: 'workspaceId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: 0,
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
              field: 'role',
              operator: Operator.INCLUDE,
              element: Element.FIRST,
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
              expect: 0,
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
