import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const DeleteFriendRequestRequest = new DTOBuilder()
  .startStep('delete friend request')
  .addAction('delete friend request', 'delete-friend', ACTION.DELETE_FRIEND_REQUEST, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
    },
  })
  .addBeforeAll('add friend', 'add-friend', ACTION.ADD_FRIEND, {
    headers: HEADER_LIST.create({ token: VAR.token1 }),
    body: {
      userId: VAR.userId,
    },
  })
  .execute();
