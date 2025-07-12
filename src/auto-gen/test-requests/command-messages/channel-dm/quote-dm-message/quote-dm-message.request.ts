import { ACTION, HEADER_LIST, VAR } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const QuoteDmMessageRequest = new DTOBuilder()
  .startStep('quote dm message')
  .addAction('quote dm message', 'quote-dm-msg', ACTION.QUOTE_DM_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
      messageId: VAR.messageId,
      content: 'test DTO quote message',
      ref: 'ref',
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
