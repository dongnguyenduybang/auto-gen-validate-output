import { createAIEnhancedDTO } from '../utils/swagger-execute';
import { ACTION } from '../enums';

export const JestSetupRequest = () =>
  createAIEnhancedDTO()
    .startStep('jest setup request')
    .addActionAI('mock user', 'mock-user', ACTION.MOCK_USER, {
      body: ACTION.MOCK_USER,
    })
    // .addActionAI(
    //     'create channel',
    //     'create-channel',
    //     ACTION.CREATE_CHANNEL,
    //     {
    //         body: ACTION.CREATE_CHANNEL,
    //     },
    // )
    .execute();
