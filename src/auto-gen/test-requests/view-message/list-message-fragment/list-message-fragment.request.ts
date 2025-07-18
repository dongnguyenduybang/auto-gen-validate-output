import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const ListMessageFragmentRequest = () =>
    createAIEnhancedDTO()
        .startStep('list message fragment')
        .addBeforeAllActionAI(
            'create channel',
            'create-channel',
            ACTION.CREATE_CHANNEL,
            {
                body: ACTION.CREATE_CHANNEL,
            }
        )
        .addBeforeAllActionAI('accept invitation', 'accept-invitation', ACTION.ACCEPT_INVITATION, {
            body: ACTION.ACCEPT_INVITATION,
        })
        .addBeforeAllActionAI(
            'send message',
            'send-message',
            ACTION.SEND_MESSAGE,
            {
                body: ACTION.SEND_MESSAGE,
            }
        )
        .addActionAI(
            'list message fragment',
            'list-message-fragment',
            ACTION.LIST_MESSAGE_FRAGMENT,
            {
                body: ACTION.LIST_MESSAGE_FRAGMENT,
            }
        )
        .execute();
