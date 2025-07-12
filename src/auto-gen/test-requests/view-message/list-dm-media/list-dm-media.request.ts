import { ACTION } from '../../../enums';
import { createAIEnhancedDTO } from '../../../utils/swagger-execute';

export const ListDmMediaRequest = () =>
  createAIEnhancedDTO()
    .startStep('List DM media')
    .addActionAI('list dm media', 'list-dm-media', ACTION.LIST_DM_MEDIA, {
      body: ACTION.LIST_DM_MEDIA,
    })
    .addBeforeAllActionAI(
      'send dm message media',
      'send-dm-message-media',
      ACTION.SEND_DM_MESSAGE_MEDIA,
      {
        body: ACTION.SEND_DM_MESSAGE_MEDIA,
      },
    )
    .execute();
