import { ACTION } from '../../../../../enums/index';
import { createAIEnhancedDTO } from '../../../../../utils/swagger-execute';

export const CreateAvatarFrameRequest = () => createAIEnhancedDTO()
  .startStep('create avatar frame')
  .addActionAI(
    'create avatar frame',
    'create-avatar-frame',
    ACTION.AVATAR_FRAME_PATH,
    {

      body: ACTION.AVATAR_FRAME_PATH,
    }
  )
  .execute();
