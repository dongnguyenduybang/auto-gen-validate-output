import {
    ACTION,
    HEADER_LIST,
    VAR,
} from '../../../../../enums/index';
import { RequestTestSuite } from '../../../../../utils/declarations';

export const DeleteAvatarFrameRequest: RequestTestSuite = {
    action: ACTION.DELETE_AVATAR_FRAME,
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
        avatarFrameId: ''
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
