import { createAIEnhancedDTO } from '../../../../../utils/swagger-execute';
import {
    ACTION,
} from '../../../../../enums/index';

export const AddCoverPhotoRequest = () => createAIEnhancedDTO()
    .startStep('add cover photo')
    .addActionAI(
        'add cover photo',
        'add-cover-photo',
        ACTION.ADD_COVER_PHOTO,
        {
            body: ACTION.ADD_COVER_PHOTO
        }
    )
    .execute()
