import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';
import { SuggestionTypeEnum } from 'src/auto-gen/enums/suggestion-type';

export const ListSuggestionByTypeRequest: RequestTestSuite = {
    action: ACTION.LIST_SUGGEST_FRIEND_BY_TYPE,
    body: {
        suggestionType: SuggestionTypeEnum.SUGGESTION_TYPE_ENUM_CHANNEL,
        limit: 10
    },
    headers: HEADER_LIST.create({ token: VAR.token }),
    options: [
        {
            beforeAll: [],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
