import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums/index';

export const RingBackToneRenameRequest = () => createAIEnhancedDTO()
    .startStep('rename ringback tone')
    .addBeforeAllActionAI(
        'create ringback tone',
        'create-ringbacktone',
        ACTION.RING_BACK_TONE_CREATE,
        {
            body: ACTION.RING_BACK_TONE_CREATE,
        }
    )
    .addActionAI(
        'rename ringback tone',
        'rename-tone',
        ACTION.RING_BACK_TONE_RENAME,
        {

            body: ACTION.RING_BACK_TONE_RENAME,
        }
    )
    .execute();
