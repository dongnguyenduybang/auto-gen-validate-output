import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const CancelFriendRequestRequest = new DTOBuilder()
  .startStep('cancel friend request')
  .addAction('cancel friend request', 'cancel-friend', ACTION.CANCEL_FRIEND_REQUEST, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
    },
  })
  .addBeforeAll('add friend', 'add-friend', ACTION.ADD_FRIEND, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
    },
  })
  .execute();
