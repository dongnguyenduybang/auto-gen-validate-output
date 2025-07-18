import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const ListMessageRequest = () =>
    createAIEnhancedDTO()
        .startStep('list message')
        .addBeforeAllActionAI(
            'create channel',
            'create-channel',
            ACTION.CREATE_CHANNEL,
            {
                body: ACTION.CREATE_CHANNEL,
            }
        )
        .addBeforeAllActionAI(
            'send message',
            'send-message',
            ACTION.SEND_MESSAGE,
            {
                body: ACTION.SEND_MESSAGE,
            }
        )
        .addActionAI(
            'list message',
            'list-message',
            ACTION.LIST_MESSAGE,
            {
                body: ACTION.LIST_MESSAGE,
            }
        )
        .execute();
