import { Operator } from '../../enums/operator.enum';
import { Element } from '../../enums/element.enum';
import { METHOD } from '../../enums/method.enum';
import { APIPath } from '../../enums/path.enum';
import { VAR } from '../../enums/var-placeholder.enum';
import { HeaderList } from '../../enums/header.enum';

export const SendDmMessageSaga = {
  steps: [
    {
      action: 'mockUser',
      body: {
        quantity: 2,
        prefix: 'testDMmessage',
        badge: 0,
      },
    },
    {
      action: 'sendDmMessage',
      method: METHOD.POST,
      path: APIPath.Message.SendDMMessage,
      body: {
        userId: VAR.userId1,
        content: 'user send dm message',
        ref: 'aa',
      },
      headers: HeaderList.Token(),
      expect: {
        ok: { operator: Operator.EQUAL, expect: true },
        data: {
          message: {
            workspaceId: { operator: Operator.EQUAL, expect: 0 },
            userId: { operator: Operator.EQUAL, expect: VAR.userId },
            content: {
              operator: Operator.EQUAL,
              expect: 'user send dm message',
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
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: 0,
            },
          ],
          channels: [
            {
              field: 'userId',
              operator: Operator.EQUAL,
              element: Element.FIRST,
              expect: [VAR.userId],
            },
            {
              field: 'participantIds',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [VAR.userId, VAR.userId1],
            },
          ],
          channelMetadata: [],
        },
      },
    },
  ],
};
