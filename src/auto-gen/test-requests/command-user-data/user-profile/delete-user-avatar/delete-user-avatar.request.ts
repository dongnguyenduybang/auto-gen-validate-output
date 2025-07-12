import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import {
  ACTION,
} from '../../../../enums/index';

export const DeleteUserAvatarRequest = () => createAIEnhancedDTO()
  .startStep('delete cover photo')
  .addActionAI(
    'delete cover photo',
    'delete-cover-photo',
    ACTION.DELETE_USER_AVATAR,
    {
      body: ACTION.DELETE_USER_AVATAR
    }
  )
  .execute()
