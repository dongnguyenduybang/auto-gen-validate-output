import { ACTION, HEADER_LIST, VAR } from "../../../../enums";
import { DTOBuilder } from "../../../../utils/chain-dto";

export const UpdateDmMessage = new DTOBuilder()
  .startStep('update dm message')
  .addAction('update dm message', 'aa', ACTION.UPDATE_DM_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
      messageId: VAR.messageId,
      content: 'dm message chain update',
      ref: 'ref'
    }
  })
  .addBeforeAll('send dm message', 'aaa', ACTION.SEND_DM_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
      content: 'dm message chain',
      ref: 'ref'
    }
  })
  .execute()
