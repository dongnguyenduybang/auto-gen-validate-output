import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const ListOutgoingFriendRequestRequest = () =>
    createAIEnhancedDTO()
        .startStep('list outgoing friend request')
        .addBeforeAllActionAI(
            'add friend',
            'add-friend',
            ACTION.ADD_FRIEND,
            {
                body: ACTION.ADD_FRIEND,
            }
        )
        .addBeforeAllActionAI(
            'accept add friend',
            'accept-add-friend',
            ACTION.ACCEPT_FRIEND_REQUEST,
            {
                body: ACTION.ACCEPT_FRIEND_REQUEST,
            }
        )
        .addActionAI(
            'list outgoing friend request',
            'list-outgoing-friend',
            ACTION.LIST_OUTGOING_FRIEND_REQUEST,
            {
                body: ACTION.LIST_OUTGOING_FRIEND_REQUEST,
            }
        )
        .execute();
