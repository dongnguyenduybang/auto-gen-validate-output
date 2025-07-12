import { createAIEnhancedDTO } from '../../../../../utils/swagger-execute';
import {
    ACTION,
} from '../../../../../enums/index';

export const UpdateCoverPhotoRequest = () => createAIEnhancedDTO()
    .startStep('update cover photo')
    .addActionAI(
        'update cover photo',
        'update-cover-photo',
        ACTION.UPDATE_COVER_PHOTO,
        {
            body: ACTION.UPDATE_COVER_PHOTO
        }
    )
    .execute()
