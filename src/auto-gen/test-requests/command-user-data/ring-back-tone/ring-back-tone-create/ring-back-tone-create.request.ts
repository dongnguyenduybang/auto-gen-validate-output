import {
  ACTION,
  HEADER_LIST,
  VAR,
} from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const RingBackToneCreateRequest = new DTOBuilder()
  .startStep('create ring back tone')
  .addAction(
    'create ring back tone',
    'create-ringbacktone',
    ACTION.RING_BACK_TONE_CREATE,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        name: 'nhac cho',
        ringbackTonePath: VAR.ringBackTone,
      },
    }
  )
  .execute();
