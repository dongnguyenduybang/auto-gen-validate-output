import { ACTION, HEADER_LIST, VAR } from '../../../../../enums/index';
import { DTOBuilder } from '../../../../../utils/chain-dto';

export const CreateAvatarFrameRequest = new DTOBuilder()
  .startStep('create avatar frame')
  .addAction(
    'create avatar frame',
    'create-avatar-frame',
    ACTION.AVATAR_FRAME_PATH,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        avatarFramePath: VAR.coverPath,
      },
    }
  )
  .execute();
