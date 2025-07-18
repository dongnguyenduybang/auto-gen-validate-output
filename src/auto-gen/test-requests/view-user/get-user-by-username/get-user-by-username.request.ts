import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const GetUserByUsernameRequest = () =>
    createAIEnhancedDTO()
        .startStep('get user by username')
        .addActionAI(
            'get user by username',
            'get-user-by-username',
            ACTION.GET_USER_BY_USERNAME,
            {
                body: ACTION.GET_USER_BY_USERNAME,
            }
        )
        .execute();
