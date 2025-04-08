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
        },
        {
            action: 'createChannel',
        },
        {
            action: 'sendMessage',
            method: "POST",
            path: "/Message/SendMessage",
            body: {
                "workspaceId": '0',
                "channelId": '{{channelId}}',
                "content": 'user send message',
                "ref": "ref"
            },
            header: { "token": '{{token}}' },
            expect: {
                ok: { operator: Operator.EQUAL, expect: true },
                data: {
                    message: {
                        workspaceId: { operator: Operator.EQUAL, expect: 0 },
                        channelId: { operator: Operator.EQUAL, expect: '{{channelId}}' },
                        userId: { operator: Operator.EQUAL, expect: '{{userId}}' },
                        content: { operator: Operator.EQUAL, expect: 'user send message' },
                        messageType: { operator: Operator.EQUAL, expect: 0 },
                        messageStatus: { operator: Operator.EQUAL, expect: 1 },
                        attachmentType: { operator: Operator.EQUAL, expect: 0 },
                    }
                },
                includes: {
                    users: [
                        {
                            field: 'userId',
                            operator: Operator.INCLUDE,
                            element: Element.FIRST,
                            expect: ['{{userId}}']
                        },
                        {
                            field: 'userType',
                            operator: Operator.INCLUDE,
                            element: Element.FIRST,
                            expect: 0
                        },
                        {
                            field: 'profile.userBadgeType',
                            operator: Operator.EQUAL,
                            expect: 0
                        }
                    ],
                    channel: [
                        {
                            field: 'workspaceId',
                            operator: Operator.EQUAL,
                            element: Element.FIRST,
                            expect: 0
                        },
                        {
                            field: 'channelId',
                            operator: Operator.EQUAL,
                            element: Element.FIRST,
                            expect: ['{{channelId}}']
                        },
                        {
                            field: 'userId',
                            operator: Operator.EQUAL,
                            element: Element.FIRST,
                            expect: ['{{userId}}']
                        },
                        {
                            field: 'totalMembers',
                            operator: Operator.EQUAL,
                            element: Element.FIRST,
                            expect: ['{{totalMembers}}']
                        },
                        {
                            field: 'name',
                            operator: Operator.EQUAL,
                            element: Element.FIRST,
                            expect: ['{{name}}']
                        }
                    ],
                    members: [
                        {
                            field: 'workspaceId',
                            operator: Operator.INCLUDE,
                            element: Element.ALL,
                            expect: 0
                        },
                        {
                            field: 'channelId',
                            operator: Operator.INCLUDE,
                            element: Element.ALL,
                            expect: ['{{channelId}}']
                        },
                        {
                            field: 'userId',
                            operator: Operator.INCLUDE,
                            element: Element.FIRST,
                            expect: ['{{userId}}']
                        },
                        {
                            field: 'role',
                            operator: Operator.INCLUDE,
                            element: Element.FIRST,
                            expect: ['owner']
                        },
                        {
                            field: 'roles.role',
                            operator: Operator.INCLUDE,
                            element: Element.FIRST,
                            expect: ['owner']
                        }
                    ],
                    channelMetadata: [
                        {
                            field: 'lastMessageId',
                            operator: Operator.INCLUDE,
                            element: Element.FIRST,
                            expect: ['{{lastMessageId}}'] 
                        },
                        {
                            field: 'workspaceId',
                            operator: Operator.INCLUDE,
                            element: Element.ALL,
                            expect: 0 
                        },
                        {
                            field: 'channelId',
                            operator: Operator.INCLUDE,
                            element: Element.ALL,
                            expect: ['{{channelId}}'] 
                        }
                    ]
                }
            }
        },
        {
            action: 'acceptInvitation',
            body: { "linkInvitation": '{{invitationLink}}' },
            header: { "token": '{{token1}}' },
            expect: {
                ok: { operator: Operator.EQUAL, expect: true },
            }
        },
        {
            action: 'getChannel',
            body: { "channelId": '{{channelId}}' },
            header: { "token": '{{token}}' },
            expect: {
                ok: { operator: Operator.EQUAL, expect: true },
            }
        },

    ],
};

```

* Desc
  + Mỗi một object trong mảng steps là 1 step 
  ```
    {
        action: 'mockUser', 
    },
  ```
  * Note
    - Cần đặt tên action theo đúng với tên endpoint và theo kiểu CamelCase 
    

  + Với step test chính sẽ có đầy đủ thành phần cần defined 
  ```
    action: 'sendMessage',
            method: "POST",
            path: "/Message/SendMessage",
            body: {
                "workspaceId": '0',
                "channelId": '{{channelId}}',
                "content": 'user send message',
                "ref": "ref"
            },
            header: { "token": '{{token}}' },
  ```
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
          channelId: { operator: Operator.EQUAL, expect: '{{channelId}}' },
          userId: { operator: Operator.EQUAL, expect: '{{userId}}' },
          content: { operator: Operator.EQUAL, expect: 'user send message' },
          messageType: { operator: Operator.EQUAL, expect: 0 },
          messageStatus: { operator: Operator.EQUAL, expect: 1 },
          attachmentType: { operator: Operator.EQUAL, expect: 0 },
        }
      },
    ```
    Defined từng filed có trong object cần expect với cấu trúc expect như trên.

    * Note: 
      - operator: toán tử
      - expect: so sánh với giá trị ...
    
    + Cần đặt đúng tên như các property trong API trả về </br>
        workspaceIds => ❌, </br> 
        workspaceId => ✅
    + Đối với object chỉ sử dụng toán tử EQUAL
    + Expect với string phải để trong dấu => 'abc'
    + Expect với number phải để kiểu => number
    + Expect với biến cục bộ phải để trong dấu => '{{userId}}'

  - Đối với array
    ```
    users: [
      {
        field: 'userId',
        operator: Operator.INCLUDE,
        element: Element.FIRST,
        expect: ['{{userId}}']
      },
      {
        field: 'userType',
        operator: Operator.INCLUDE,
        element: Element.FIRST,
        expect: 0
      },
      {
        field: 'profile.userBadgeType',
        operator: Operator.EQUAL,
        expect: 0
      }
    ],
    ```
    Defined từng filed có trong array cần expect với cấu trúc expect như trên.
      * Note
        + Mỗi object được bao bên ngoài bởi một array được xác định là 1 filed của mảng con bên trong array đó
          ```
            {
              field: 'userId',
              operator: Operator.INCLUDE,
              element: Element.FIRST,
              expect: ['{{userId}}']
            },
          ``` 
          Đây được xác định là một property có trong array
          - field: Tên property có trong mảng
          - operator: Đối với array có 2 cách sử dụng operator
            + Operator.INCLUDE => Phải đi kèm với element để xác định sẽ lấy mảng con thứ mấy trong mảng được bao bên ngoài.
            + Operator.EQUAL => Chỉ đi kèm với element là ALL. 
          - element: Thứ tự mảng con được xác định 
            + ALL: Lấy tất cả các mảng con
            + FIRST: Lấy mảng con đầu tiên
            + LAST: Lấy mảng con cuối cùng
          - expect: 
            + String: được bao bên ngoài là dấu => ['abcde']
            + Number: phải là kiểu number => 0
            + Var: phải để trong dấu => ['{{userId}}']
          
          * Note 2
            - Có thể expect nhiều biến cục bộ => ['{{userId}}', '{{userId1}}']. Nhưng với điều kiện element bắt buộc là ALL
            - Operator và Element là Enum
            - Element cố thể undefined nếu không cần dùng





          