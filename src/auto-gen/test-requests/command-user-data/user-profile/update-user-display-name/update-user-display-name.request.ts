import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums/index';

export const UpdateUserDisplayNameRequest = () =>
  createAIEnhancedDTO()
    .startStep('update user display name')
    .addActionAI(
      'update user display name',
      'update-user-display-name',
      ACTION.UPDATE_USER_DISPLAY_NAME,
      {
        body: ACTION.UPDATE_USER_DISPLAY_NAME,
      },
    )
    .execute();
