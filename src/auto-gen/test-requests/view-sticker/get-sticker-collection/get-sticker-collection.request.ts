import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const GetStickerCollectionRequest = () =>
    createAIEnhancedDTO()
        .startStep('get sticker collection')
        .addActionAI(
            'get sticker collection',
            'get-sticker-collection',
            ACTION.GET_STICKER_COLLECTION,
            {
                body: ACTION.GET_STICKER_COLLECTION,
            }
        )
        .execute();
