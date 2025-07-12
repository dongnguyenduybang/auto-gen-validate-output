import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import {
  ACTION,
} from '../../../../enums/index';

export const UnblockUserRequest = () => createAIEnhancedDTO()
  .startStep('unblock user')
  .addActionAI(
    'unblock user',
    'unblock-user',
    ACTION.BLOCK_USER,
    {
      body: ACTION.UNBLOCK_USER,
    }
  )
  .addBeforeAllActionAI(
    'block user',
    'block-user',
    ACTION.BLOCK_USER,
    {
      body: ACTION.BLOCK_USER,
    }
  )
  .execute()
