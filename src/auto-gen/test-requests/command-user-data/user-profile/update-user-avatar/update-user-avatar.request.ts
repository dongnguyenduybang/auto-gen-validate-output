import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums/index';

export const UpdateUserAvatarRequest = () =>
  createAIEnhancedDTO()
    .startStep('update user avatar')
    .addActionAI(
      'update user avatar',
      'update-user-avatar',
      ACTION.UPDATE_USER_AVATAR,
      {
        body: ACTION.UPDATE_USER_AVATAR,
      },
    )
    .execute();
