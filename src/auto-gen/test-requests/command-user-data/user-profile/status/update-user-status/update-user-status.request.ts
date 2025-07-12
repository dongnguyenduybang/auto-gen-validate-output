import { ACTION } from "../../../../../enums";
import { createAIEnhancedDTO } from "../../../../../utils/swagger-execute";

export const UpdateUserStatusRequest = () => createAIEnhancedDTO()
  .startStep('update user status request')
  .addActionAI('update user status request', 'update-user-status', ACTION.UPDATE_USER_STATUS, {
    body: ACTION.UPDATE_USER_STATUS
  })
  .addBeforeAllActionAI('add user status request', 'add-user-status', ACTION.ADD_USER_STATUS, {
    body: ACTION.ADD_USER_STATUS
  })
  .execute();
