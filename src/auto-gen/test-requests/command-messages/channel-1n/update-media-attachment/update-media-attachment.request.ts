import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums/index';

export const UpdateMediaAttachmentRequest = () =>
  createAIEnhancedDTO()
    .startStep('update media attachment')
    .addActionAI(
      'update media attachment',
      'update-media',
      ACTION.UPDATE_MEDIA_ATTACHMENT,
      {
        body: ACTION.UPDATE_MEDIA_ATTACHMENT,
      },
    )
    .addBeforeAllActionAI(
      'send dm message media',
      'send-media',
      ACTION.SEND_DM_MESSAGE_MEDIA,
      {
        body: ACTION.SEND_DM_MESSAGE_MEDIA,
      },
    )
    .execute();
