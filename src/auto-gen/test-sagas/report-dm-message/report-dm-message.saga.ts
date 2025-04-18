import { Operator } from '../../enums/operator.enum';
import { Element } from '../../enums/element.enum';
import { METHOD } from '../../enums/method.enum';
import { APIPath } from '../../enums/path.enum';
import { VAR } from '../../enums/var-placeholder.enum';
import { HeaderList } from '../../enums/header.enum';
import { ReportCategory } from '../../enums/report-category.enum';

export const ReportDmMessageSaga = {
  steps: [
    {
      action: 'mockUser',
      body: {
        quantity: 2,
        prefix: 'testDMmessage',
        badge: 0
      }
    },
    {
      action: 'sendDmMessage',
      method: METHOD.POST,
      path: APIPath.Message.SendDMMessage,
      body: {
        userId: VAR.userId1,
        content: 'user send dm message',
        ref: 'aa'
      },
      headers: HeaderList.Token(),
      expect: {
        ok: { operator: Operator.EQUAL, expect: true },
        data: {
          message: {
            workspaceId: { operator: Operator.EQUAL, expect: 0 },
            userId: { operator: Operator.EQUAL, expect: VAR.userId },
            content: { operator: Operator.EQUAL, expect: 'user send dm message' },
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
              expect: [VAR.userId, VAR.userId1]
            }
          ],
          channelMetadata: [
          ],
        },
      },
    },
    {
      action: 'reportDmMessage',
      method: METHOD.POST,
      path: APIPath.Message.ReportDMMessage,
      body: {
        userId: VAR.userId,
        messageId: VAR.messageId,
        reportCategory: ReportCategory.REPORT_CATEGORY_HARASSMENT,
        reportReason: 'user send dm message',
      },
      headers: HeaderList.Token1(),
      expect: {
        ok: { operator: Operator.EQUAL, expect: true },
      }
    }
  ],
};
