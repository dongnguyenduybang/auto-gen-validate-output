import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const UpdateDmMediaAttachmentRequest = () => createAIEnhancedDTO()
  .startStep('update dm media attachment')
  .addBeforeAllActionAI(
    'send dm media message',
    'send-dm-media',
    ACTION.SEND_DM_MESSAGE_MEDIA,
    {
      body: ACTION.SEND_DM_MESSAGE_MEDIA,
    }
  )
  .addActionAI(
    'update dm media attachment',
    'update-dm-media',
    ACTION.UPDATE_DM_MEDIA_ATTACHMENT,
    {
      body: ACTION.UPDATE_DM_MEDIA_ATTACHMENT,
    }
  )
  .execute();
