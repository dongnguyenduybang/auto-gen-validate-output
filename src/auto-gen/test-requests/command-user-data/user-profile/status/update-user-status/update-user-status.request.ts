import { createAIEnhancedDTO } from '../../../../../utils/swagger-execute';
import {
  ACTION,
} from '../../../../../enums/index';

export const UpdateUserStatusRequest = () => createAIEnhancedDTO()
  .startStep('update user status')
  .addActionAI(
    'update user status',
    'update-user-status',
    ACTION.UPDATE_USER_STATUS,
    {
      body: ACTION.UPDATE_USER_STATUS
    }
  )
  .addBeforeAllActionAI(
    'add user status',
    'add-user-status',
    ACTION.ADD_USER_STATUS,
    {
      body: ACTION.ADD_USER_STATUS
    }
  )
  .execute()
