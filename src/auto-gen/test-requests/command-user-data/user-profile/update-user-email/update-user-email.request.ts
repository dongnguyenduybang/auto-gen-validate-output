import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import {
  ACTION,
} from '../../../../enums/index';

export const UpdateUserEmailRequest = () => createAIEnhancedDTO()
  .startStep('update user email')
  .addActionAI(
    'update user email',
    'update-user-email',
    ACTION.UPDATE_USER_EMAIL,
    {
      body: ACTION.UPDATE_USER_EMAIL
    }
  )
  .execute()
