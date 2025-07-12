import {
  ACTION,
  ExpireAfterTimeEnum,
  HEADER_LIST,
  VAR,
} from '../../../../../enums/index';
import { DTOBuilder } from '../../../../../utils/chain-dto';

export const AddUserStatusRequest = new DTOBuilder()
  .startStep('add user status')
  .addAction(
    'add user status',
    'add-user-status',
    ACTION.ADD_USER_STATUS,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        content: 'Hi hi',
        status: '🚀',
        expireAfterTime:
          ExpireAfterTimeEnum.USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_1_HOUR,
      },
    }
  )
  .execute();
