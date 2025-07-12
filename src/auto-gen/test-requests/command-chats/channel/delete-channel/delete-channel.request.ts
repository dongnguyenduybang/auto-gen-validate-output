import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const DeleteChannelRequest = new DTOBuilder()
  .startStep('delete channel')
  .addAction('delete channel', 'delete-channel', ACTION.DELETE_CHANNEL, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      channelId: VAR.channelId,
      workspaceId: VAR.workspaceId,
    },
  })
  .execute();
