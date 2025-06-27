import { ACTION, HEADER_LIST, VAR } from "../../../../enums";
import { DTOBuilder } from "../../../../utils/chain-dto";

export const SendDmMessage = new DTOBuilder()
  .startStep('send dm message')
  .addAction('send dm message', 'send-dm-msg', ACTION.SEND_DM_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
      content: 'send dm message chain update',
      ref: 'ref'
    }
  })

  .execute()
