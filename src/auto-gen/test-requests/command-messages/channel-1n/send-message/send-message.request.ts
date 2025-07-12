import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const SendMessageRequest = new DTOBuilder()
  .startStep('send message')
  .addAction('send message', 'send-message', ACTION.SEND_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      channelId: VAR.channelId,
      workspaceId: VAR.workspaceId,
      content: 'test DTO send message',
      ref: 'ref',
    },
  })
  .execute();
