import { createAIEnhancedDTO } from '../../../utils/swagger-execute';
import { ACTION } from '../../../enums';

export const ListBlockUserRequest = () =>
    createAIEnhancedDTO()
        .startStep('list block user')
        .addBeforeAllActionAI(
            'block user',
            'block-user',
            ACTION.BLOCK_USER,
            {
                body: ACTION.BLOCK_USER,
            }
        )
        .addActionAI(
            'list block user',
            'list-block-user',
            ACTION.LIST_BLOCK_USER,
            {
                body: ACTION.LIST_BLOCK_USER,
            }
        )
        .execute();
