import {
    ACTION,
    HEADER_LIST,
    VAR,
} from '../../../../../enums/index';
import { RequestTestSuite } from '../../../../../utils/declarations';

export const AddCoverPhoto: RequestTestSuite = {
    action: ACTION.ADD_COVER_PHOTO,
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
        coverPath: VAR.coverPath
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
