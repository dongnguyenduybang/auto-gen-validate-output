
## Responses

- 📂 root
  - 📂 test-responses
    - 📂 send-message
      - 📄 send-message.response.json
      - 📄 send-message.response.spec.ts
  - 📂 responses
    - 📄 send-message.response.ts

**📄 send-message.response.json  **   
```
{
    "method": "POST",
    "path": "/Message/SendMessage",
    "headers": {
        "Content-Type": "application/json",
        "x-session-token": "{{token}}",
        "x-country-code": "VN"
    },
    "body": {
        "workspaceId": "0",
        "channelId": "{{channelId}}",
        "content": "test123123",
        "ref": "ref"
    },

    "beforeAll": [
        {
            "action": "mockUser"
        },
        {
            "action": "createChannel"
        }
    ]
}
```
+ **Method**: Định nghĩa phương thức (POST | PUT | DELETE | GET)
+ **Path**: Đường dẫn Endpoint
+ **Headers**: Định nghĩa các header
+ **Payload**: Định nghĩa body đầu vào
+ **beforeAll**: Định nghĩa các step chuẩn bị data trước khi test
  - **action**: Định nghĩa tên hành động
    - [List Action](#list-action)
