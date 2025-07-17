import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const ListAllChannelRequest = () =>
    createAIEnhancedDTO()
        .startStep('list all channels')
        .addBeforeAllActionAI(
            'create channel',
            'create-channel',
            ACTION.CREATE_CHANNEL,
            {
                body: ACTION.CREATE_CHANNEL,
            }
        )
        .addActionAI(
            'list all channel',
            'list-all-channel',
            ACTION.LIST_ALL_CHANNEL,
            {
                body: ACTION.LIST_ALL_CHANNEL,
            }
        )
        .execute();
