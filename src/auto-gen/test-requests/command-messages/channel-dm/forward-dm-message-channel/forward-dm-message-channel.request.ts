import { ACTION, HEADER_LIST, VAR } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const ForwardDmMessageChannelRequest = new DTOBuilder()
  .startStep('forward DM message to channel')
  .addAction('forward dm message channel', 'forward-dm-msg-channel', ACTION.FORWARD_DM_MESSAGE_CHANNEL, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
      originalMessageIds: [VAR.messageId],
    },
  })
  .addBeforeAll('send message', 'send-message', ACTION.SEND_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      workspaceId: VAR.workspaceId,
      channelId: VAR.channelId,
      content: 'duybang12345',
      ref: 'abc',
    },
  })
  .execute();
