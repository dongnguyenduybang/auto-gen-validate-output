import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const ListMediaRequest = () =>
    createAIEnhancedDTO()
        .startStep('List media')
        .addBeforeAllActionAI(
            'create channel',
            'create-channel',
            ACTION.CREATE_CHANNEL,
            {
                body: ACTION.CREATE_CHANNEL,
            }
        )
        .addBeforeAllActionAI(
            'send message media',
            'send-message-media',
            ACTION.SEND_MESSAGE_MEDIA,
            {
                body: ACTION.SEND_MESSAGE_MEDIA,
            }
        )
        .addActionAI(
            'list media',
            'list-media',
            ACTION.LIST_MEDIA,
            {
                body: ACTION.LIST_MEDIA,
            }
        )
        .execute();
