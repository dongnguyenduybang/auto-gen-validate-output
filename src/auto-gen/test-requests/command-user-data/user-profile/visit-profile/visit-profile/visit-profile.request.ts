import { createAIEnhancedDTO } from '../../../../../utils/swagger-execute';
import {
    ACTION,
} from '../../../../../enums/index';

export const VisitProfileRequest = () => createAIEnhancedDTO()
    .startStep('visit profile')
    .addActionAI(
        'visit profile',
        'visit-profile',
        ACTION.VISIT_PROFILE,
        {
            body: ACTION.VISIT_PROFILE
        }
    )
    .execute()
