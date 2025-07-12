import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const UpdateMessageRequest = new DTOBuilder()
  .startStep('update message')
  .addAction('update message', 'update-msg', ACTION.UPDATE_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      channelId: VAR.channelId,
      messageId: VAR.messageId1,
      workspaceId: '0',
      content: 'test response update message',
      ref: 'ref',
    },
  })
  .addBeforeEach('send message', 'send-msg', ACTION.SEND_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      workspaceId: '0',
      channelId: VAR.channelId,
      content: 'duybang12345',
      ref: 'abc',
    },
  })
  .execute();
