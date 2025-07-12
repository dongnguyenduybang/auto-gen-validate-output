import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const AddFriendRequest = new DTOBuilder()
  .startStep('add friend')
  .addAction('add friend', 'add-friend', ACTION.ADD_FRIEND, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
    },
  })
  .execute();
