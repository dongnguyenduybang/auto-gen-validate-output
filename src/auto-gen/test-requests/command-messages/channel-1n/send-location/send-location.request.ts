import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const SendLocationRequest = new DTOBuilder()
  .startStep('send location')
  .addAction('send location', 'send-location', ACTION.SEND_LOCATION, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      channelId: VAR.channelId,
      workspaceId: VAR.workspaceId,
      content: 'test DTO send message',
      ref: 'ref',
      description: 'description',
      latitude: VAR.latitude,
      longitude: VAR.longitude,
    },
  })
  .execute();
