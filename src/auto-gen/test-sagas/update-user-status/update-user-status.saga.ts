import { SagaTestSuite } from 'src/auto-gen/utils/declarations';
import { ACTION, HEADER_LIST, VAR } from '../../enums';
import { genUpdateUserStatusTestCases } from '../../helper/user-service';

export const UpdateUserStatusSaga: SagaTestSuite = {
  options: [
    {
      beforeEach: [
        {
          action: ACTION.MOCK_USER,
          body: {
            prefix: 'testabc',
            quantity: 2,
            badge: 0,
          },
        },
        {
          action: ACTION.ADD_FRIEND,
          body: {
            userId: VAR.userId1,
          },
          headers: HEADER_LIST.create({
            token: VAR.token,
          }),
        },
        {
          action: ACTION.ACCEPT_FRIEND_REQUEST,
          body: {
            userId: VAR.userId,
          },
          headers: HEADER_LIST.create({
            token: VAR.token1,
          }),
        },
      ],
    },
  ],
  steps: [
    {
      title: 'should return true when AddUserStatus with only content',
      step: [
        {
          action: ACTION.ADD_USER_STATUS,
          body: {
            content: 'hello',
            expireAfterTime: 1,
          },
          headers: HEADER_LIST.create({
            token: VAR.token,
          }),
          expect: {
            ok: true,
          },
        },
        ...genUpdateUserStatusTestCases(),
      ],
    },
    {
      title:
        'should return error when both content & status is the same current content & status',
      step: [
        {
          action: ACTION.ADD_USER_STATUS,
          body: {
            content: 'hello',
            status: '😝',
            expireAfterTime: 1,
          },
          headers: HEADER_LIST.create({
            token: VAR.token,
          }),
          expect: {
            ok: true,
          },
        },
        {
          action: ACTION.UPDATE_USER_STATUS,
          body: {
            content: 'hello',
            status: '😝',
            expireAfterTime: 1,
          },
          headers: HEADER_LIST.create({
            token: VAR.token,
          }),
          expect: {
            ok: true,
            error: {
              code: 7104,
              message: 'Failed to update user status.',
              details: ['Unable update with the same content and status'],
            },
          },
        },
      ],
    },
  ],
};
