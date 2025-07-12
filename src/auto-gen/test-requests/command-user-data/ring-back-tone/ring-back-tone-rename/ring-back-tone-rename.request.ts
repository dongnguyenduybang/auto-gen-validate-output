import { ACTION, HEADER_LIST, VAR } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const RingBackToneRenameRequest = new DTOBuilder()
    .startStep('rename ringback tone')
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
        'rename ringback tone',
        'rename-tone',
        ACTION.RING_BACK_TONE_RENAME,
        {
            headers: HEADER_LIST.create({ token: VAR.token }),
            body: {
                name: 'rename nhac cho  ',
                ringbackToneId: VAR.ringBackToneId,
            },
        }
    )
    .execute();
