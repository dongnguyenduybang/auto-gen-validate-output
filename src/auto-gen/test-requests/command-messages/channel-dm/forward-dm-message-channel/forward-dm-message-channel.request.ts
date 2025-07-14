import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const ForwardDmMessageChannelRequest = () => createAIEnhancedDTO()
  .startStep('forward DM message to channel')
  .addBeforeAllActionAI(
    'send message',
    'send-message',
    ACTION.SEND_MESSAGE,
    {
      body: ACTION.SEND_MESSAGE,
    },
  )
  .addActionAI(
    'forward dm message channel',
    'forward-dm-msg-channel',
    ACTION.FORWARD_DM_MESSAGE_CHANNEL,
    {
      body: ACTION.FORWARD_DM_MESSAGE_CHANNEL,
    },
  )
  .execute();
