import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const UpdateDmMessageRequest = () =>
  createAIEnhancedDTO()
    .startStep('update dm message')
    .addBeforeAllActionAI(
      'send dm message',
      'send-dm-message',
      ACTION.SEND_DM_MESSAGE,
      {
        body: ACTION.SEND_DM_MESSAGE,
      },
    )
    .addActionAI(
      'update dm message',
      'update-dm-message',
      ACTION.UPDATE_DM_MESSAGE,
      {
        body: ACTION.UPDATE_DM_MESSAGE,
      },
    )
    .execute();
