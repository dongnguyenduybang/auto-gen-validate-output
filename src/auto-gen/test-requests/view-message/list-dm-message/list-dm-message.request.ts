import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const ListDmMessageRequest = () =>
  createAIEnhancedDTO()
    .startStep('list dm message')
    .addBeforeAllActionAI(
      'send dm message',
      'send-dm-msg',
      ACTION.SEND_DM_MESSAGE,
      {
        body: ACTION.SEND_DM_MESSAGE,
      }
    )
    .addActionAI(
      'list dm message',
      'list-dm-msg',
      ACTION.LIST_DM_MESSAGE,
      {
        body: ACTION.LIST_DM_MESSAGE,
      }
    )
    .execute();
