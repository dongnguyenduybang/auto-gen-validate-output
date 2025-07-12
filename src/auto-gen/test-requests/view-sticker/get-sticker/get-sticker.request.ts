import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const GetStickerRequest: RequestTestSuite = {
    action: ACTION.GET_STICKER,
    body: {
        stickerId: VAR.stickerId
    },
    headers: HEADER_LIST.create({ token: VAR.token }),
    options: [
        {
            beforeAll: [
            ],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
