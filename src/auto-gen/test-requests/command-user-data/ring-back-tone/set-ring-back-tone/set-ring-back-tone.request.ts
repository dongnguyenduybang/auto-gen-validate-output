import { ACTION, HEADER_LIST, VAR } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const SetRingBackToneRequest = new DTOBuilder()
  .startStep('set ringback tone')
  .addBeforeAll(
    'create ringback tone',
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
  .addAction(
    'set ringback tone',
    'set-tone',
    ACTION.SET_RING_BACK_TONE,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        ringbackToneId: VAR.ringBackToneId,
      },
    }
  )
  .execute();
