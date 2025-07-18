import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const GetMessageRequest = () =>
    createAIEnhancedDTO()
        .startStep('get message')
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
            'send-msg',
            ACTION.SEND_MESSAGE,
            {
                body: ACTION.SEND_MESSAGE,
            }
        )
        .addActionAI(
            'get message',
            'get-msg',
            ACTION.GET_MESSAGE,
            {
                body: ACTION.GET_MESSAGE,
            }
        )
        .execute();
