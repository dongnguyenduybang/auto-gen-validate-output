import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const ListChannelRequest = () =>
    createAIEnhancedDTO()
        .startStep('list channels')
        .addBeforeAllActionAI(
            'create channel',
            'create-channel',
            ACTION.CREATE_CHANNEL,
            {
                body: ACTION.CREATE_CHANNEL,
            }
        )
        .addActionAI(
            'list channel',
            'list-channel',
            ACTION.LIST_CHANNEL,
            {
                body: ACTION.LIST_CHANNEL,
            }
        )
        .execute();
