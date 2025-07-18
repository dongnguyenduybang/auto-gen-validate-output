import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const GetPinnedDmMessageRequest = () =>
    createAIEnhancedDTO()
        .startStep('get pinned dm message')
        .addBeforeAllActionAI(
            'send dm message',
            'send-dm',
            ACTION.SEND_DM_MESSAGE,
            {
                body: ACTION.SEND_DM_MESSAGE,
            }
        )
        .addBeforeAllActionAI(
            'pin dm message',
            'pin-dm',
            ACTION.PIN_UNPIN_DM_MESSAGE,
            {
                body: ACTION.PIN_UNPIN_DM_MESSAGE,
            }
        )
        .addActionAI(
            'get pinned dm message',
            'get-pinned-dm',
            ACTION.GET_PINNED_DM_MESSAGE,
            {
                body: ACTION.GET_PINNED_DM_MESSAGE,
            }
        )
        .execute();
