import { createAIEnhancedDTO } from '../utils/swagger-execute';
import { ACTION } from '../enums';

export const JestTeardownRequest = () =>
  createAIEnhancedDTO()
    .startStep('jest teardown request')
    // .addActionAI(
    //   'delete user request',
    //   'delete-mocked-user',
    //   ACTION.DELETE_MOCKED_USER,
    //   {
    //     body: ACTION.DELETE_MOCKED_USER,
    //   },
    // )
    .execute();
