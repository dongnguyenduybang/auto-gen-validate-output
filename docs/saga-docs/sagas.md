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
            token: VAR.token1,
          }),
          expect: {
            ok: true,
            data: executeFunction(
              'data.channel',
              ACTION.GET_CHANNEL,
              {
                body: { channelId: VAR.channelId, workspaceId: VAR.workspaceId }
              },
              null,
              null
            ),
            includes: [
              executeFunction(
                'includes.members',
                ACTION.LIST_MEMBERS,
                {
                  body: { channelId: VAR.channelId, workspaceId: VAR.workspaceId }
                },
                null,
                null
              ),
            ]
          },
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
          {
            ok: true,
            data: executeFunction(
              'data.channel',
              ACTION.GET_CHANNEL,
              {
                body: { channelId: VAR.channelId, workspaceId: VAR.workspaceId }
              },
              null,
              null
            ),
            includes: [
              executeFunction(
                'includes.members',
                ACTION.LIST_MEMBERS,
                {
                  body: { channelId: VAR.channelId, workspaceId: VAR.workspaceId }
                },
                null,
                null
              )
            ]
          }
        ```
    - Cấu trúc expect: Expect theo cấu trúc call function để check
        + executeFunction: có 5 tham số tuỳ chỉnh và 1 tham số cố định
            + Tham số tuỳ chỉnh:
              - Path: path đang thực hiện gọi function để check ( includes.members, ...)
              - Action: action gọi đến một API khác để lấy response và so sánh với response đang check
              - Payload: body của action, và header là tham số cố định mặc định sẽ lấy token đầu tiên của context
              - Filter: filter các filed của response đang check (optional)
              - Expect: defined giá trị sẽ so sánh với response đang check dựa vào filter
      
