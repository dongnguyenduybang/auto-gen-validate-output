import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const RevokeDmMessageReactionRequest = () =>
  createAIEnhancedDTO()
    .startStep('revoke dm message reaction')
    .addBeforeAllActionAI(
      'send dm message',
      'send-dm-msg',
      ACTION.SEND_DM_MESSAGE,
      {
        body: ACTION.SEND_DM_MESSAGE,
      },
    )
    .addBeforeAllActionAI(
      'add dm message reaction',
      'add-dm-msg-reaction',
      ACTION.ADD_DM_MESSAGE_REACTION,
      {
        body: ACTION.ADD_DM_MESSAGE_REACTION,
      },
    )
    .addActionAI(
      'revoke dm message reaction',
      'revoke-dm-msg-reaction',
      ACTION.REVOKE_DM_MESSAGE_REACTION,
      {
        body: ACTION.REVOKE_DM_MESSAGE_REACTION,
      },
    )
    .execute();
