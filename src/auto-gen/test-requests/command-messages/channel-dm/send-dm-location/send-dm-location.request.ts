import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const SendDmLocationRequest = new DTOBuilder()
  .startStep('send dm location')
  .addAction(
    'send dm location',
    'send-dm-location',
    ACTION.SEND_DM_LOCATION,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        userId: VAR.userId1,
        content: 'test DTO send message',
        ref: 'ref',
        description: 'description',
        latitude: VAR.latitude,
        longitude: VAR.longitude,
      },
    }
  )
  .execute();
