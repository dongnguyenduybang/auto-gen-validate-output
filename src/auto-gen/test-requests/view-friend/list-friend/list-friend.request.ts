import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const ListFriendRequest = () =>
    createAIEnhancedDTO()
        .startStep('list friend request')
        .addBeforeAllActionAI(
            'add friend',
            'add-friend',
            ACTION.ADD_FRIEND,
            {
                body: ACTION.ADD_FRIEND,
            }
        )
        .addBeforeAllActionAI(
            'accept friend request',
            'accept-friend',
            ACTION.ACCEPT_FRIEND_REQUEST,
            {
                body: ACTION.ACCEPT_FRIEND_REQUEST,
            }
        )
        .addActionAI(
            'list friend request',
            'list-friend',
            ACTION.LIST_FRIEND,
            {
                body: ACTION.LIST_FRIEND,
            }
        )
        .execute();
