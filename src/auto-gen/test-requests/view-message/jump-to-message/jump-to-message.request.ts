import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const JumpToMessageRequest = () =>
    createAIEnhancedDTO()
        .startStep('jump to message')
        .addBeforeAllActionAI(
            'create channel',
            'create-channel',
            ACTION.CREATE_CHANNEL,
            {
                body: ACTION.CREATE_CHANNEL,
            }
        )
        .addBeforeAllActionAI(
            'send message',
            'send-msg',
            ACTION.SEND_MESSAGE,
            {
                body: ACTION.SEND_MESSAGE,
            }
        )
        .addActionAI(
            'jump to message',
            'jump-msg',
            ACTION.JUMP_TO_MESSAGE,
            {
                body: ACTION.JUMP_TO_MESSAGE,
            }
        )
        .execute();
