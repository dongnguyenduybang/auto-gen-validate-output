import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const GetDmChannelRequest = () =>
    createAIEnhancedDTO()
        .startStep('get dm channel')
        .addBeforeAllActionAI(
            'send dm message',
            'send-dm-message',
            ACTION.SEND_DM_MESSAGE,
            {
                body: ACTION.SEND_DM_MESSAGE,
            }
        )
        .addActionAI(
            'get dm channel',
            'get-dm-channel',
            ACTION.GET_DM_CHANNEL,
            {
                body: ACTION.GET_DM_CHANNEL,
            }
        )
        .execute();
