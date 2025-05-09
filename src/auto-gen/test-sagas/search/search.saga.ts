import { SagaTestSuite } from '../../utils/declarations';
import { Operator, VAR, ACTION, HEADER_LIST, Element } from '../../enums';

export const SearchSaga: SagaTestSuite = {
  steps: [
    {
      title: 'should return sort name',
      step: [
        {
          action: ACTION.SEARCH_USERS,
          body: {
            keyword: 'duyabc',
          },
          headers: HEADER_LIST.create({
            token: VAR.token,
          }),
          expect: {
            ok: { operator: Operator.EQUAL, expect: true },
          },
          delay: 2000,
        },
        {
          action: ACTION.SEND_DM_MESSAGE,
          body: {
            userId: VAR.userId3,
            content: 'aaaaaaa',
            ref: 'ref',
          },
          headers: HEADER_LIST.create({
            token: VAR.token,
          }),
          expect: {
            ok: { operator: Operator.EQUAL, expect: true },
          },
          delay: 2000,
        },
        {
          action: ACTION.SEARCH_USERS,
          body: {
            keyword: 'duyabc',
          },
          headers: HEADER_LIST.create({
            token: VAR.token,
          }),
          expect: {
            ok: { operator: Operator.EQUAL, expect: true },
            data: [
              {
                field: 'userId',
                operator: Operator.INCLUDE,
                element: Element.ALL,
                expect: [ VAR.userId, VAR.userId2, VAR.userId1],
              },
            ],
          },
          delay: 2000,
        },
      ],
    },
    // {
    //   title: 'find user',
    //   step: [
    //     {
    //       action: ACTION.SEARCH_USERS,
    //       body: {
    //         keyword: 'duyabc',
    //       },
    //       headers: HEADER_LIST.create({
    //         token: VAR.token,
    //       }),
    //       expect: {
    //         ok: { operator: Operator.EQUAL, expect: true },
    //       },
    //     },
    //   ],
    // },
  ],
};
