import { DTOBuilder } from '../../../../utils/chain-dto';
import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';

export const PinMessageRequest = new DTOBuilder()
  .startStep('pin a message')
  .addBeforeAll('send message', '', ACTION.SEND_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      channelId: VAR.channelId,
      workspaceId: VAR.workspaceId,
      content: 'test DTO send message',
      ref: 'ref',
    },
  })
  .addAction(
    'pin message',
    'pin-message',
    ACTION.PIN_UNPIN_MESSAGE,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        workspaceId: VAR.workspaceId,
        channelId: VAR.channelId,
        messageId: VAR.messageId,
        status: true,
      },
    }
  )
  .execute();
