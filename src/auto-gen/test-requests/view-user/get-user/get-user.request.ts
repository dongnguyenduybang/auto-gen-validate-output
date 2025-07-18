import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const GetUserRequest = () =>
    createAIEnhancedDTO()
        .startStep('get user')
        .addActionAI(
            'get user',
            'get-user',
            ACTION.GET_USER,
            {
                body: ACTION.GET_USER,
            }
        )
        .execute();
