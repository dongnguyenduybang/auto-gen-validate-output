import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const SendPokeMessageRequest = () => createAIEnhancedDTO()
  .startStep('send poke message')
  .addActionAI(
    'send poke message',
    'send-poke-message',
    ACTION.SEND_POKE_MESSAGE,
    {
      body: ACTION.SEND_POKE_MESSAGE,
    },
  )
  .execute();
