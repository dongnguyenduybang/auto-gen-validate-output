import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import {
  ACTION,
} from '../../../../enums/index';

export const BlockUserRequest = () => createAIEnhancedDTO()
  .startStep('block user')
  .addActionAI(
    'block user',
    'block-user',
    ACTION.BLOCK_USER,
    {
      body: ACTION.BLOCK_USER,
    }
  )
  .execute()
