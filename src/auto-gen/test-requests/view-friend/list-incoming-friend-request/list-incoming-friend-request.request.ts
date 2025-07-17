import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const ListIncomingFriendRequestRequest = () =>
    createAIEnhancedDTO()
        .startStep('list incoming friend request')
        .addBeforeAllActionAI(
            'add friend',
            'add-friend',
            ACTION.ADD_FRIEND,
            {
                body: ACTION.ADD_FRIEND,
            }
        )
        .addActionAI(
            'list incoming friend request',
            'list-incoming-friend',
            ACTION.LIST_INCOMING_FRIEND_REQUEST,
            {
                body: ACTION.LIST_INCOMING_FRIEND_REQUEST,
            }
        )
        .execute();
