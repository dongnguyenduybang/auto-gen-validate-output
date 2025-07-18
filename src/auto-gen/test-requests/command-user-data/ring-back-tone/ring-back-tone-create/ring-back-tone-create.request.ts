import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums/index';

export const RingBackToneCreateRequest = () =>
  createAIEnhancedDTO()
    .startStep('create ring back tone')
    .addActionAI(
      'create ring back tone',
      'create-ringbacktone',
      ACTION.RING_BACK_TONE_CREATE,
      {
        body: ACTION.RING_BACK_TONE_CREATE,
      },
    )
    .execute();
