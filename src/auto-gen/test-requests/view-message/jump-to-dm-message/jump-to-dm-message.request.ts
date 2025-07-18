import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const JumpToDmMessageRequest = () =>
    createAIEnhancedDTO()
        .startStep('jump to dm message')
        .addBeforeAllActionAI(
            'send dm message',
            'send-dm',
            ACTION.SEND_DM_MESSAGE,
            {
                body: ACTION.SEND_DM_MESSAGE,
            }
        )
        .addActionAI(
            'jump to dm message',
            'jump-dm',
            ACTION.JUMP_TO_DM_MESSAGE,
            {
                body: ACTION.JUMP_TO_DM_MESSAGE,
            }
        )
        .execute();
