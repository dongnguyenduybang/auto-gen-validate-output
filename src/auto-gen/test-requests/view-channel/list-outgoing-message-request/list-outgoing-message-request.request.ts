import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const ListOutgoingMessageRequestRequest = () =>
    createAIEnhancedDTO()
        .startStep('List outgoing message requests')
        .addBeforeAllActionAI(
            'send dm message',
            'send-dm-message',
            ACTION.SEND_DM_MESSAGE,
            {
                body: ACTION.SEND_DM_MESSAGE,
            }
        )
        .addBeforeAllActionAI(
            'accept send dm message',
            'accept-send-dm-message',
            ACTION.ACCEPT_MESSAGE_REQUEST,
            {
                body: ACTION.ACCEPT_MESSAGE_REQUEST,
            }
        )
        .addActionAI(
            'list outgoing message request',
            'list-outgoing-message-request',
            ACTION.LIST_OUTGOING_MESSAGE_REQUEST,
            {
                body: ACTION.LIST_OUTGOING_MESSAGE_REQUEST,
            }
        )
        .execute();
