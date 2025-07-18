import { createAIEnhancedDTO } from '../../../../../utils/swagger-execute';
import { ACTION } from '../../../../../enums/index';

export const DeleteUserVisitProfileRequest = () =>
  createAIEnhancedDTO()
    .startStep('delete user visit profile')
    .addActionAI(
      'delete user visit profile',
      'delete-user-visit-profile',
      ACTION.DELETE_USER_VISIT_PROFILE,
      {
        body: ACTION.DELETE_USER_VISIT_PROFILE,
      },
    )
    .addBeforeAllActionAI(
      'visit profile',
      'visit-profile',
      ACTION.VISIT_PROFILE,
      {
        body: ACTION.VISIT_PROFILE,
      },
    )
    .execute();
