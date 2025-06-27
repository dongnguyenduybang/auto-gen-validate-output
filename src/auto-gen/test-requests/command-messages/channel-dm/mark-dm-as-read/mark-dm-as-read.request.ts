import { ACTION, HEADER_LIST, VAR } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const MarkDmAsReadRequest = new DTOBuilder()
  .startStep('mark dm as read')
  .addAction('mark dm as read', 'mark-dm-read', ACTION.MARK_DM_AS_READ, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
      messageId: VAR.messageId,
    },
  })
  .addBeforeAll('send dm message', 'send-dm-msg', ACTION.SEND_DM_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
      content: 'duybang12345',
      ref: 'abc',
    },
  })
  .execute();
