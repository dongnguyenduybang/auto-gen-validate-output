import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const QuoteMessageRequest = new DTOBuilder()
  .startStep('quote message')
  .addAction('quote a message', 'quote-message', ACTION.QUOTE_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      channelId: VAR.channelId,
      workspaceId: VAR.workspaceId,
      messageId: VAR.messageId,
      content: 'test DTO quote message',
      ref: 'ref',
    },
  })
  .addBeforeAll('send base message', 'send-message', ACTION.SEND_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      workspaceId: VAR.workspaceId,
      channelId: VAR.channelId,
      content: 'duybang12345',
      ref: 'abc',
    },
  })
  .execute();
