import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const UpdateNicknameRequest = new DTOBuilder()
  .startStep('update user nickname in channel')
  .addAction(
    'update nickname',
    'update-nickname',
    ACTION.UPDATE_NICKNAME,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        channelId: VAR.channelId,
        workspaceId: VAR.workspaceId,
        userId: VAR.userId,
        nickname: 'test update nickname',
      },
    },
  )
  .execute();
