import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const ListIncomingMessageRequestRequest = () =>
    createAIEnhancedDTO()
        .startStep('List incoming message requests')
        .addBeforeAllActionAI(
            'send dm message',
            'send-dm-message',
            ACTION.SEND_DM_MESSAGE,
            {
                body: ACTION.SEND_DM_MESSAGE,
            }
        )
        .addActionAI(
            'list incoming message request',
            'list-incoming-message-request',
            ACTION.LIST_INCOMING_MESSAGE_REQUEST,
            {
                body: ACTION.LIST_INCOMING_MESSAGE_REQUEST,
            }
        )
        .execute();
