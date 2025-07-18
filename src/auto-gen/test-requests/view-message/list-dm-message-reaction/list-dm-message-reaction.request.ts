import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const ListDmMessageReactionRequest = () =>
    createAIEnhancedDTO()
        .startStep('list dm message reaction')
        .addBeforeAllActionAI(
            'send dm message',
            'send-dm-msg',
            ACTION.SEND_DM_MESSAGE,
            {
                body: ACTION.SEND_DM_MESSAGE,
            }
        )
        .addBeforeAllActionAI(
            'add dm message reaction',
            'add-dm-reaction',
            ACTION.ADD_DM_MESSAGE_REACTION,
            {
                body: ACTION.ADD_DM_MESSAGE_REACTION,
            }
        )
        .addActionAI(
            'list dm message reaction',
            'list-dm-reaction',
            ACTION.LIST_DM_MESSAGE_REACTION,
            {
                body: ACTION.LIST_DM_MESSAGE_REACTION,
            }
        )
        .execute();
