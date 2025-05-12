import { SagaTestSuite } from '../../utils/declarations';
import { Operator, VAR, ACTION, HEADER_LIST, Element } from '../../enums';
import { checkExpect } from '../../utils/check-expect';

export const SearchSaga: SagaTestSuite = {
  steps: [
    {
      title: 'should return true update channel name',
      step: [
        {
          action: ACTION.UPDATE_CHANNEl_NAME,
          body: {
            workspaceId: VAR.workspaceId,
            channelId: VAR.channelId,
            name: 'change channel name',
          },
          headers: HEADER_LIST.create({
            token: VAR.token,
          }),
          expect: {
            ok: true,
            data: checkExpect('data.channel', ACTION.GET_CHANNEL),
            includes: [
              checkExpect('includes.users', ACTION.GET_USER),
              checkExpect('includes.members',  ACTION.LIST_MEMBERS),
              checkExpect('includes.messages', ACTION.LIST_MESSAGE),
            ],
          },
          delay: 2000,
        },
      ],
    },
  ],
};
