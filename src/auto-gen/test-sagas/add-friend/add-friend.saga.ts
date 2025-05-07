import { SagaTestSuite } from '../../utils/declarations';
import {
  APIPath,
  HeaderList,
  METHOD,
  Operator,
  VAR,
  ACTION,
} from '../../enums';

export const AddFriendSaga: SagaTestSuite = {
  beforeAll: [
    {
      title: 'Mock User',
      step: {
        action: ACTION.MOCK_USER,
        body: {
          quantity: 2,
          prefix: 'testabcssd',
          badge: 0,
        },
      },
    },
    {
      title: 'Create Channel',
      step: {
        action: ACTION.CREATE_CHANNEL,
        body: {
          name: 'channel name',
          workspaceId: VAR.workspaceId,
        },
      },
    },
  ],
  steps: [
    {
      title: 'Add Friend Saga',
      step: [
        {
          action: ACTION.ADD_FRIEND,
          method: METHOD.POST,
          path: APIPath.Friend.AddFriend,
          body: {
            userId: VAR.userId1,
          },
          headers: HeaderList.Token(),
          expect: {
            ok: { operator: Operator.EQUAL, expect: true },
          },
        },
      ],
    },
    {
      title: 'Add Friend Saga 1',
      step: [
        {
          action: ACTION.SEND_DM_MESSAGE,
          method: METHOD.POST,
          path: APIPath.Message.SendDMMessage,
          body: {
            userId: VAR.userId1,
            content: 'Hello',
            ref: 'ref',
          },
          headers: HeaderList.Token(),
          expect: {
            ok: { operator: Operator.EQUAL, expect: false },
          },
        },
        {
          action: ACTION.SEND_DM_MESSAGE,
          method: METHOD.POST,
          path: APIPath.Message.SendDMMessage,
          body: {
            userId: VAR.userId1,
            content: 'Hello1',
            ref: 'ref',
          },
          headers: HeaderList.Token(),
          expect: {
            ok: { operator: Operator.EQUAL, expect: false },
          },
        },
      ],
    },
  ],
  afterAll: [
    {
      title: 'Delete User',
      step: {
        action: ACTION.DELETE_MOCKED_USER,
        method: METHOD.DELETE,
        path: APIPath.Faker.DeleteMockedUsers,
        body: {
          prefix: 'testabcssd',
        },
        expect: {
          ok: { operator: Operator.EQUAL, expect: false },
        },
      },
    },
  ],
};
