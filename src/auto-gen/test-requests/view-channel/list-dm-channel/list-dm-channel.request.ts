import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const ListDmChannelRequest = () =>
    createAIEnhancedDTO()
        .startStep('List DM channels')
        .addBeforeAllActionAI(
            'send dm message',
            'send-dm-message',
            ACTION.SEND_DM_MESSAGE,
            {
                body: ACTION.SEND_DM_MESSAGE,
            }
        )
        .addActionAI(
            'list dm channel',
            'list-dm-channel',
            ACTION.LIST_DM_CHANNEL,
            {
                body: ACTION.LIST_DM_CHANNEL,
            }
        )
        .execute();
