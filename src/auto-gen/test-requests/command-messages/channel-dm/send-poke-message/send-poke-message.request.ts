import { RequestTestSuite } from '../../../../utils/declarations';
import { ACTION, HEADER_LIST, VAR } from '../../../../enums/index';

export const SendPokeMessageRequest: RequestTestSuite = {
    action: ACTION.SEND_POKE_MESSAGE,
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
        userId: VAR.userId1,
        ref: 'ref'
    },
    options: [
        {
            beforeAll: [

            ],
            beforeEach: [],
            afterEach: [],
            afterAll: [

            ]
        },

    ],
};
