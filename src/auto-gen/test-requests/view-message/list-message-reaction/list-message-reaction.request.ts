import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const ListMessageReactionRequest = () =>
    createAIEnhancedDTO()
        .startStep('list message reaction')
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
        .addBeforeAllActionAI(
            'add message reaction',
            'add-message-reaction',
            ACTION.ADD_MESSAGE_REACTION,
            {
                body: ACTION.ADD_MESSAGE_REACTION,
            }
        )
        .addActionAI(
            'list message reaction',
            'list-message-reaction',
            ACTION.LIST_MESSAGE_REACTION,
            {
                body: ACTION.LIST_MESSAGE_REACTION,
            }
        )
        .execute();
