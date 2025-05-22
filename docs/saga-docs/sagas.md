## Saga
- Mục đích: Gen script test và validate lần lượt các bước được định nghĩa các step kèm với expect cần kiểm tra.

  - 📂 root
    - 📂 test-sagas
      - 📂 send-message
        - 📄 send-message.saga.ts
        - 📄 send-message.saga.spec.ts
      - 📂 send-dm-message
        - 📄 send-dm-message.saga.json
        - 📄 send-dm-message.saga.spec.ts

Bước 1: Định nghĩa file cấu trúc các step sẽ check

- 📄 send-message.saga.ts 
```
import { SagaTestSuite } from '../../utils/declarations';
import {
  VAR,
  ACTION,
  HEADER_LIST,
} from '../../enums';
import { executeFunction } from '../../utils/expect-config';

export const CreateChannelSaga: SagaTestSuite = {
  options: [
    {
      beforeEach: [
        {
          action: ACTION.MOCK_USER,
          body: {
            prefix: 'testabc',
            quantity: 2,
            badge: 0,
          }
        },
        {
          action: ACTION.CREATE_CHANNEL,
          body: {
            name: 'channel1',
            workspaceId: VAR.workspaceId
          },
          headers: HEADER_LIST.create({
            token: VAR.token
          })
        }
      ],
    },
    {
      afterEach: [
        {
          action: ACTION.DELETE_MOCKED_USER,
          body: {
            prefix: 'testabc'
          }
        }
      ]
    }
  ],
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
            token: VAR.token,
          }),
          expect: {
            ok: true,
            data: executeFunction(
              'includes.users',
              ACTION.GET_USER,
              [null,
                { userId: VAR.userId1 }
              ],
              ['userId'],
            ),
            includes: [
              executeFunction(
                'includes.users',
                ACTION.GET_USER,
                [null,
                  { userId: VAR.userId1 }
                ],
                ['userId'],
              ),
            ]
          },
        },
        {
          action: ACTION.UPDATE_CHANNEL_NAME,
          body: {
            workspaceId: VAR.workspaceId, channelId: VAR.channelId, name: 'new name gr'
          },
          headers: HEADER_LIST.create({ token: VAR.token1 }),
          expect: {
            ok: true
          }
        },

      ],
    },
    {
      title: 'should return true when owner update channel name',
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
            ok: true,
            includes: [
              executeFunction(
                'includes.users',
                ACTION.GET_USER,
                [null,
                  { userId: VAR.userId1 }
                ],
                ['userId'],
              ),
            ]
          },
        },
        {
          action: ACTION.UPDATE_CHANNEL_NAME,
          body: {
            workspaceId: VAR.workspaceId, channelId: VAR.channelId, name: 'new name gr'
          },
          headers: HEADER_LIST.create({ token: VAR.token }),
          expect: {
            ok: true
          }
        },
      ],
    },

  ],
};
```

Bước 2: Tiến hành chạy gen script

```bash
  pnpm gen saga create-channel
```
 Sau khi chạy gen script sẽ gen ra được file là 
  - 📄 create-channel.saga.spec.ts

Bước 3: Tiến hành chạy test script

```bash
  pnpm test saga create-channel
```
Bước 4: Tiến hành chạy script ghi report

```bash
  pnpm gen reports create-channel
```
Sau khi chạy script gen reports thì file reports sẽ được ghi vào folder reports tương ứng

* Note
    - Cần đặt tên action theo đúng với tên endpoint và theo kiểu CamelCase 
    
    - Phần expect của test chính sẽ có cấu trục giống như cấu trúc API trả về 

        + Cấu trúc của expect
        ```
          expect: {
            ok: true,
            data: executeFunction(
              'includes.users',
              ACTION.GET_USER,
              [null,
                { userId: VAR.userId1 }
              ],
              ['userId'],
            ),
            includes: [
              executeFunction(
                'includes.users',
                ACTION.GET_USER,
                [null,
                  { userId: VAR.userId1 }
                ],
                ['userId'],
              ),
            ]
          },
        ```
    - Cấu trúc expect: Expect theo cấu trúc call function để check
        + executeFunction: có 4 tham số tuỳ chỉnh là
            - Path: path đang thực hiện gọi function để check ( includes.members, ...)
            - Action: action gọi đến một API khác để lấy response và so sánh với response đang check dừa vào path
            - Payload: là một mảng, mỗi mảng là một body để call API và cũng là index để expect nếu response đang check nó là một mảng ( includes.user[user1, user2] thì user1 sẽ tương ứng với mảng đầu tiên tương tự như user2, user3, ...)  
            - Filter: filter các filed của response đang check (optional)
              
      
