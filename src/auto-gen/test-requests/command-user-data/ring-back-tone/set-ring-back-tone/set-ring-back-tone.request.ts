import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums/index';

export const SetRingBackToneRequest = () => createAIEnhancedDTO()
  .startStep('set ringback tone')
  .addBeforeAllActionAI(
    'create ringback tone',
    'create-ringbacktone',
    ACTION.RING_BACK_TONE_CREATE,
    {

      body: ACTION.RING_BACK_TONE_CREATE,
    }
  )
  .addActionAI(
    'set ringback tone',
    'set-tone',
    ACTION.SET_RING_BACK_TONE,
    {

      body: ACTION.SET_RING_BACK_TONE,
    }
  )
  .execute();
