import { createAIEnhancedDTO } from '../../../../../utils/swagger-execute';
import {
    ACTION,
} from '../../../../../enums/index';

export const DeleteAvatarFrameRequest = () => createAIEnhancedDTO()
    .startStep('delete avatar frame')
    .addActionAI(
        'delete avatar frame',
        'delete-avatar-frame',
        ACTION.DELETE_AVATAR_FRAME,
        {
            body: ACTION.DELETE_AVATAR_FRAME
        }
    )
    .execute()
