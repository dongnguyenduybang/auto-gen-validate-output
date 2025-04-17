## Saga
- Cấu trúc
  - 📂 root
    - 📂 test-sagas
      - 📂 send-message
        - 📄 send-message.saga.ts
        - 📄 send-message.saga.spec.ts
      - 📂 send-dm-message
        - 📄 send-dm-message.saga.json
        - 📄 send-dm-message.saga.spec.ts
       
    - 📂 responses
      - 📄 send-message.response.ts
      - 📄 send-dm-message.response.ts
     
- 📄 send-message.saga.ts 

```
import { Operator } from "../../enums/operator.enum";
import { Element } from "../../enums/element.enum";

export const SendMessageSaga = {
  steps: [
    {
      action: 'mockUser',
      body: {
        quantity: 2,
        prefix: 'testabcssd',
        badge: 0
      }
    },
    {
      action: 'createChannel',
    },
    {
      action: 'sendMessage',
      method: METHOD.POST,
      path: APIPath.Message.SendMessage,
      body: {
        workspaceId: '0',
        channelId: VAR.channelId,
        content: 'user send message',
        ref: 'ref',
      },
      header: HeaderList.Token(),
      expect: {
        ok: { operator: Operator.EQUAL, expect: true },
        data: {
          message: {
            workspaceId: { operator: Operator.EQUAL, expect: 0 },
            channelId: { operator: Operator.EQUAL, expect: VAR.channelId },
            userId: { operator: Operator.EQUAL, expect: VAR.userId },
            content: { operator: Operator.EQUAL, expect: 'user send message' },
            messageType: { operator: Operator.EQUAL, expect: 0 },
            messageStatus: { operator: Operator.EQUAL, expect: 1 },
            attachmentType: { operator: Operator.EQUAL, expect: 0 },
          },
        },
        includes: {
          users: [
            {
              field: 'userId',
              operator: Operator.INCLUDE,
              element: Element.FIRST,
              expect: [VAR.userId],
            },
            {
              field: 'userType',
              operator: Operator.INCLUDE,
              element: Element.FIRST,
              expect: 0,
            },
            {
              field: 'profile.userBadgeType',
              operator: Operator.EQUAL,
              expect: 0,
            },
          ],
          channels: [
            {
              field: 'workspaceId',
              operator: Operator.EQUAL,
              element: Element.FIRST,
              expect: 0,
            },
            {
              field: 'channelId',
              operator: Operator.EQUAL,
              element: Element.FIRST,
              expect: [VAR.channelId],
            },
            {
              field: 'userId',
              operator: Operator.EQUAL,
              element: Element.FIRST,
              expect: [VAR.userId],
            },
            {
              field: 'totalMembers',
              operator: Operator.EQUAL,
              element: Element.FIRST,
              expect: [VAR.totalMembers],
            },
            {
              field: 'name',
              operator: Operator.EQUAL,
              element: Element.FIRST,
              expect: [VAR.name],
            },
          ],
          members: [
            {
              field: 'workspaceId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: 0,
            },
            {
              field: 'channelId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [VAR.channelId],
            },
            {
              field: 'userId',
              operator: Operator.INCLUDE,
              element: Element.FIRST,
              expect: [VAR.userId],
            },
            {
              field: 'role',
              operator: Operator.INCLUDE,
              element: Element.FIRST,
              expect: ['owner'],
            },
            {
              field: 'roles.role',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: ['everyone', 'owner'],
            },
          ],
          channelMetadata: [
            {
              field: 'workspaceId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: 0,
            },
            {
              field: 'channelId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [VAR.channelId],
            },
          ],
        },
      },
    },
    {
      action: 'acceptInvitation',
      method: METHOD.POST,
      path: APIPath.Invitation.AcceptInvitation,
      body: { invitationLink: VAR.invitationLink },
      header: HeaderList.Token1(),
      expect: {
        ok: { operator: Operator.EQUAL, expect: true },
      },
    },
    {
      action: 'getChannel',
      method: METHOD.GET,
      path: APIPath.ViewChannel.GetChannel,
      body: { channelId: VAR.channelId, workspaceId: '0' },
      header: HeaderList.Token(),
      expect: {
        ok: { operator: Operator.EQUAL, expect: true },
      },
    },
  ],
};

```

* Desc
  * Note
    - Cần đặt tên action theo đúng với tên endpoint và theo kiểu CamelCase 
    
+ Phần expect của test chính sẽ có cấu trục giống như cấu trúc API trả về 

  + Cấu trúc của API
  ```
    {
      "ok": true,
      "data": {
          "message": {
              
          }
      },
      "includes": {
          "users": [
            
          ],
          "channels": [
            
          ],
          "members": [
              
          ],
          "channelMetadata": [
            
          ]
      }
    }
  ```

  - Cấu trúc của expect
  ```
    expect: {
      ok: {

      },
      data: {
          message: {
            
          },
      },
      includes: {
          users: [
            
          ],
          channelMetadata: [

          ],
          members: [

          ],
          channels: [
            
          ]
      }
    }
  ```

+ Cấu trúc expect 
  - Đối với object
    ```
    data: {
          message: {
            workspaceId: { operator: Operator.EQUAL, expect: 0 },
            channelId: { operator: Operator.EQUAL, expect: VAR.channelId },
            userId: { operator: Operator.EQUAL, expect: VAR.userId },
            content: { operator: Operator.EQUAL, expect: 'user send message' },
            messageType: { operator: Operator.EQUAL, expect: 0 },
            messageStatus: { operator: Operator.EQUAL, expect: 1 },
            attachmentType: { operator: Operator.EQUAL, expect: 0 },
          },
        },
    ```
    Defined từng filed có trong object cần expect với cấu trúc expect như trên.

    * Note: 
      - operator: toán tử
      - expect: so sánh với giá trị ...
    
    + Cần đặt đúng tên như các property trong API trả về
    + Đối với object chỉ sử dụng toán tử EQUAL
    + Expect với string phải để trong dấu => 'abc'
    + Expect với number phải để kiểu => number
    + Expect với biến cục bộ có enum VAR

  - Đối với array
    ```
    users: [
            {
              field: 'userId',
              operator: Operator.INCLUDE,
              element: Element.FIRST,
              expect: [VAR.userId],
            },
            {
              field: 'userType',
              operator: Operator.INCLUDE,
              element: Element.FIRST,
              expect: 0,
            },
            {
              field: 'profile.userBadgeType',
              operator: Operator.EQUAL,
              expect: 0,
            },
          ],
    ```
      * Note
        + Mỗi object được bao bên ngoài bởi một array được xác định là 1 filed của mảng con bên trong obj đó
          ```
            {
              field: 'userId',
              operator: Operator.INCLUDE,
              element: Element.FIRST,
              expect: [VAR.userId],
            },
          ``` 
          Đây được xác định là một filed có trong obj
          - field: Tên filed có trong obj
          - operator: Đối với array chỉ sử dụng operator là INCLUDE
          ```
          # Expect 
           {
              field: 'roles.role',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: ['everyone', 'owner']
            }
          # Response return API
            "roles": [
                    {
                        "role": "owner",
                        "weight": 0
                    },
                    {
                        "role": "everyone",
                        "weight": 2
                    }
              ],
          ```
            + Operator.INCLUDE => Phải đi kèm với element để xác định sẽ lấy mảng con thứ mấy trong mảng được bao bên ngoài.
          - element: Thứ tự mảng con được xác định 
            + ALL: Lấy tất cả các mảng con
            + FIRST: Lấy mảng con đầu tiên
            + LAST: Lấy mảng con cuối cùng
          - expect: 
            + String: được bao bên ngoài là dấu => ['abcde']
            + Number: phải là kiểu number => 0
          
          * Note 2
            - Có thể expect nhiều biến cục bộ => [VAR.userId, VAR.userId1]. Nhưng với điều kiện element bắt buộc là ALL và operator là INCLUDE
            - Operator và Element là Enum
            - Element cố thể undefined nếu không cần dùng chỉ áp dụng với đối với check kiểu obj





          