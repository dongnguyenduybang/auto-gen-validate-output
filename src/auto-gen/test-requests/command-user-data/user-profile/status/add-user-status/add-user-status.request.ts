import { createAIEnhancedDTO } from '../../../../../utils/swagger-execute';
import { ACTION } from '../../../../../enums/index';

export const AddUserStatusRequest = () =>
  createAIEnhancedDTO()
    .startStep('add user status')
    .addActionAI('add user status', 'add-user-status', ACTION.ADD_USER_STATUS, {
      body: ACTION.ADD_USER_STATUS,
    })
    .execute();
