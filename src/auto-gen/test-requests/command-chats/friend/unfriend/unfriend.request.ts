import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const UnfriendRequest = new DTOBuilder()
  .startStep('unfriend')
  .addAction('unfriend', 'unfriend-action', ACTION.UNFRIEND, {
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
  .addBeforeAll('accept friend request', 'accept-friend', ACTION.ACCEPT_FRIEND_REQUEST, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
    },
  })
  .execute();
