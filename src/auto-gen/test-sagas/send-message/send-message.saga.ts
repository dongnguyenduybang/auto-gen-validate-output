import { Operator } from '../../enums/operator.enum';
import { Element } from '../../enums/element.enum';
import { HeaderList } from '../../enums/header.enum';
import { APIPath } from '../../enums/path.enum';
import { METHOD } from '../../enums/method.enum';
import { VAR } from '../../enums/var-placeholder.enum';

export const SendMessageSaga = {
  steps: [
    {
      action: 'mockUser',
      body: {
        quantity: 2,
        prefix: 'testabcssd',
        badge: 0
      }
    },
    {
      action: 'createChannel',
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
      action: 'acceptInvitation',
      method: METHOD.POST,
      path: APIPath.Invitation.AcceptInvitation,
      body: { invitationLink: VAR.invitationLink },
      headers: HeaderList.Token1(),
      expect: {
        ok: { operator: Operator.EQUAL, expect: true },
      },
    },
    {
      action: 'getChannel',
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
