import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const CreateChannelRequest = () =>
  createAIEnhancedDTO()
    .startStep('create channel request')
    .addActionAI(
      'create channel request',
      'create-channel',
      ACTION.CREATE_CHANNEL,
      {
        body: ACTION.CREATE_CHANNEL,
      },
    )
    .execute();
