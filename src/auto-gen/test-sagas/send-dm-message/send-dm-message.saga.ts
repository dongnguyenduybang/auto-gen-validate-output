import { Operator } from '../../enums/operator.enum';
import { Element } from '../../enums/element.enum';

export const SendDmMessageSaga = {
  steps: [
    {
      action: 'mockUser',
    },
    {
      action: 'sendDmMessage',
      method: 'POST',
      path: '/Message/SendDMMessage',
      body: {
        userId: '{{userId1}}',
        content: 'user send message',
        ref: 'aa'
      },
      header: { token: '{{token}}' },
      expect: {
        ok: { operator: Operator.EQUAL, expect: true },
        data: {
          message: {
            workspaceId: { operator: Operator.EQUAL, expect: 0 },
            userId: { operator: Operator.EQUAL, expect: '{{userId}}' },
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
              expect: ['{{userId}}'],
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
              expect: ['{{userId}}'],
            },
            {
              field: 'participantIds',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: ['{{userId1}}', '{{userIdaa}}']
            }
          ],
          channelMetadata: [
          ],
        },
      },
    },
  ],
};
