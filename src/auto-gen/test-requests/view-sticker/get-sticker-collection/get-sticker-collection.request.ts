import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const GetStickerCollectionRequest: RequestTestSuite = {
    action: ACTION.GET_STICKER_COLLECTION,
    body: {
        collectionId: VAR.defaultCollectionId
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
