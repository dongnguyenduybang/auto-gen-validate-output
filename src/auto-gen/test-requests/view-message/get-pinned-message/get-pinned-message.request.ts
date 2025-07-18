import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const GetPinnedMessageRequest = () =>
    createAIEnhancedDTO()
        .startStep('get pinned message')
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
        .addBeforeAllActionAI(
            'pin message',
            'pin-msg',
            ACTION.PIN_UNPIN_MESSAGE,
            {
                body: ACTION.PIN_UNPIN_MESSAGE,
            }
        )
        .addActionAI(
            'get pinned message',
            'get-pinned-msg',
            ACTION.GET_PINNED_MESSAGE,
            {
                body: ACTION.GET_PINNED_MESSAGE,
            }
        )
        .execute();
