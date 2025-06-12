import {
    ACTION,
    HEADER_LIST,
    VAR,
} from '../../../../../enums/index';
import { RequestTestSuite } from '../../../../../utils/declarations';

export const DeleteUserVisitProfileRequest: RequestTestSuite = {
    action: ACTION.DELETE_USER_VISIT_PROFILE,
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
        userId: VAR.userId1
    },
    options: [
        {
            beforeAll: [],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
