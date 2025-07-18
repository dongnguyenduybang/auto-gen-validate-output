import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const GetDmMessageRequest = () =>
    createAIEnhancedDTO()
        .startStep('get dm message')
        .addBeforeAllActionAI(
            'send dm message',
            'send-dm',
            ACTION.SEND_DM_MESSAGE,
            {
                body: ACTION.SEND_DM_MESSAGE,
            }
        )
        .addActionAI(
            'get dm message',
            'get-dm',
            ACTION.GET_DM_MESSAGE,
            {
                body: ACTION.GET_DM_MESSAGE,
            }
        )
        .execute();
