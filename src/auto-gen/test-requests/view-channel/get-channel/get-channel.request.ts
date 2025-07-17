import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const GetChannelRequest = () =>
    createAIEnhancedDTO()
        .startStep('get channel')
        .addBeforeAllActionAI(
            'create channel',
            'create-channel',
            ACTION.CREATE_CHANNEL,
            {
                body: ACTION.CREATE_CHANNEL,
            }
        )
        .addActionAI(
            'get channel',
            'get-channel',
            ACTION.GET_CHANNEL,
            {
                body: ACTION.GET_CHANNEL,
            }
        )
        .execute();
