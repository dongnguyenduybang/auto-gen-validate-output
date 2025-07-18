import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const ListStickerRequest = () =>
    createAIEnhancedDTO()
        .startStep('list sticker')
        .addActionAI(
            'list sticker',
            'list-sticker',
            ACTION.LIST_STICKER,
            {
                body: ACTION.LIST_STICKER,
            }
        )
        .execute();
