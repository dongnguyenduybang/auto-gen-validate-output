import { ACTION } from "../../../enums";
import { createAIEnhancedDTO } from "../../../utils/swagger-execute";

export const GetFriendRequest = () =>
    createAIEnhancedDTO()
        .startStep('get friend request')
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
            'get friend request',
            'get-friend',
            ACTION.GET_FRIEND,
            {
                body: ACTION.GET_FRIEND,
            }
        )
        .execute();
