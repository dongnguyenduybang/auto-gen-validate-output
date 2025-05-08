import { SagaTestSuite } from '../../utils/declarations';
import {
  Operator,
  VAR,
  ACTION,
  HEADER_LIST,
} from '../../enums';

export const CreateChannelSaga: SagaTestSuite = {
  steps: [
    {
      title: 'should return false when member update channel name',
      step: [
        {
          action: ACTION.ACCEPT_INVITATION,
          body: {
            invitationLink: VAR.invitationLink,
          },
          headers: HEADER_LIST.create({
            token: VAR.token1,
          }),
          expect: {
            ok: { operator: Operator.EQUAL, expect: true },
          },
        },
        {
            action: ACTION.UPDATE_CHANNEl_NAME,
            body: {
                workspaceId: VAR.workspaceId,
                channelId: VAR.channelId,
                name: 'test update fail'
            },
            headers: HEADER_LIST.create({
                token: VAR.token1
            }),
            expect: {
                ok: {operator: Operator.EQUAL, expect: true}
            }
        }
      ],
    },
  ],
};
