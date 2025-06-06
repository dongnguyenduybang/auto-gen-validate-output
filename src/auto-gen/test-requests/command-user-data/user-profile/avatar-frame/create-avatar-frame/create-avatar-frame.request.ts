import {
    ACTION,
    HEADER_LIST,
    VAR,
} from '../../../../../enums/index';
import { RequestTestSuite } from '../../../../../utils/declarations';

export const CreateAvatarFrame: RequestTestSuite = {
    action: ACTION.AVATAR_FRAME_PATH,
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
        avatarFramePath: VAR.coverPath
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
