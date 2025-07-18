import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const GetStickerRequest = () =>
  createAIEnhancedDTO()
    .startStep('get sticker')
    .addActionAI(
      'get sticker',
      'get-sticker',
      ACTION.GET_STICKER,
      {
        body: ACTION.GET_STICKER,
      }
    )
    .execute();
