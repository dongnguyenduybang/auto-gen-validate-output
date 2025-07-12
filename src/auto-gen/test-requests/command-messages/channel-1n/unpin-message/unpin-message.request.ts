import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const UnpinMessageRequest = new DTOBuilder()
  .startStep('unpin message')
  .addAction('unpin message', 'unpin-message', ACTION.PIN_UNPIN_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      workspaceId: VAR.workspaceId,
      channelId: VAR.channelId,
      messageId: VAR.messageId,
      status: false,
    },
  })
  .addBeforeAll('send message', 'send-message', ACTION.SEND_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      channelId: VAR.channelId,
      workspaceId: VAR.workspaceId,
      content: 'test DTO send message',
      ref: 'ref',
    },
  })
  .addBeforeAll('pin message first', 'pin-message', ACTION.PIN_UNPIN_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      workspaceId: VAR.workspaceId,
      channelId: VAR.channelId,
      messageId: VAR.messageId,
      status: true,
    },
  })
  .execute();
