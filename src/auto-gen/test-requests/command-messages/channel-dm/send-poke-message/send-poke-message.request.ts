import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const SendPokeMessageRequest = new DTOBuilder()
  .startStep('send poke message')
  .addAction(
    'send poke message',
    'send-poke-message',
    ACTION.SEND_POKE_MESSAGE,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        userId: VAR.userId1,
        ref: 'ref',
      },
    }
  )
  .execute();
