import { SagaTestSuite } from '../../utils/declarations';
import {
  Operator,
  VAR,
  ACTION,
  HEADER_LIST,
} from '../../enums';

export const AddFriendSaga: SagaTestSuite = {
  steps: [
    {
      title: 'Add Friend Saga',
      step: [
        {
          action: ACTION.ADD_FRIEND,
          body: {
            userId: VAR.userId3,
          },
          headers: HEADER_LIST.create({
            token: VAR.token,
          }),
          expect: {
            ok: { operator: Operator.EQUAL, expect: true },
          },
        },
      ],
    },
    {
      title: 'Send Message After Add Friend',
      step: [
        {
          action: ACTION.SEND_DM_MESSAGE,
          body: {
            userId: VAR.userId1,
            content: '',
            ref: 'ref',
          },
          headers: HEADER_LIST.create({
            token: VAR.token,
          }),
          expect: {
            ok: { operator: Operator.EQUAL, expect: true },
          },
        },
        {
          action: ACTION.SEND_DM_MESSAGE,
          body: {
            userId: VAR.userId1,
            content: 'aaaaaa',
            ref: 'ref',
          },
          headers: HEADER_LIST.create({
            token: VAR.token,
          }),
          expect: {
            ok: { operator: Operator.EQUAL, expect: true },
          },
        },
      ],
    },
  ],
};
