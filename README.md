<div align="center">
<h1>Auto Gen Testcase</h1>
</div>

# Contents

- [NPM](#npm)
- [Requests](#requests)
- [Responses](#responses)
- [Sagas](#sagas)
- [Decorators](#decorators)
- [Reports](#reports)
- [Defined Name](#defined-name)

## NPM
```
$ pnpm <action> <type> <apisName>
$ pnpm <action> <type> <folder>
Note: <action>: gen, test
        <type>: request, response, saga
        <apisName>: send-message
        <folder>: send-message
```
``` 
    pnpm gen request send-message
```
``` 
    $ pnpm test response send-message >test 1 response cho send-message
```
``` 
    $ pnpm gen request test-requests >gen toàn bộ requests
```
``` 
    $ pnpm test request test-responses >test toàn bộ responses
```
``` 
    $ pnpm gen saga send-message >gen 1 saga cho send-message
```
``` 
    $ pnpm test saga send-message >test 1 saga cho send-message
```
``` 
    $ pnpm gen saga test-sagas >gen toàn bộ sagas
```
``` 
    $ pnpm test saga test-sagas >test toàn bộ sagas
```
## Requests

- 📂 root
  - 📂 test-requests
    - 📂 send-message
      - 📄 send-message.request.json
      - 📄 send-message.dto.ts
      - 📄 send-message.spec.ts


**📄 send-message.request.json**
``` 
 {
    "method": "POST",
    "path": "/Message/SendMessage",
    "headers": {
        "Content-Type": "application/json",
        "x-session-token": "{{token}}",
        "x-country-code": "VN"
    },
    "payload": {
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

**📄 send-message.dto.ts**
``` 
import {
  IsNotEmpty,
  IsString,
  IsDefined,
  MinLength,
  MaxLength,
} from '../../decorator/dto-decorator';

export class SendMessageDTO {
  @IsString({
    message: `Could not resolve permission type`,
  })
  @IsNotEmpty({
    message: `Could not resolve permission type`,
  })
  @IsDefined({
    message: `Could not resolve permission type`,
  })
  workspaceId: string = '';

  @IsString({
    message: `Invalid channelId`,
    value: '{{channelId}}',
  })
  @IsNotEmpty({
    message: `Could not resolve permission type`,
  })
  @IsDefined({
    message: `Unsupported permission type`,
  })
  channelId: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MinLength(1)
  @MaxLength(6000)
  content: string = '';
}
```

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

**📄 send-message.response.ts**













## Sagas









## Decorators

- [General](#general)
- [String](#string)
- [Number](#number)
- [Array](#array)
- [Object](#object)
- [Boolean](#boolean)
- [Date](#date)
- [Enum](#enum)
- [Condition](#condition)


### General

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsOptional | @IsOptional() | Cho phép undefined |   @IsOptional()<br> type: string; |
| IsNotNull | @IsNotNull() | Không cho phép null |   @IsNotNull()<br> type: string; |
| IsNotEmpty | @IsNotEmpty(option?) | Cho phép để rỗng. option: message? custom message error trả về |   @IsNotEmpty(<br>{message: `Could not resolve permission type`,}) |
| IsAny | @IsAny() | Cho phép bao hàm tất cả các kiểu |   @IsAny()<br> type: string; hoặc @IsAny()<br> type: number;  |
| IsDefined | @IsDefined() | Bắt buộc phải xác định |   @IsDefined()<br> type: string|

### String

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsString | @IsString(option?) | Xác định là kiểu chuỗi. option?: message?, value?|   @IsString(<br>{message: `Invalid channelId`,<br>value: '{{channelId}}'})|
| MinLength | @MinLength(value) | Xác định độ dài chuỗi ít nhất | @MinLength(1)|
| MaxLength |  @MaxLength(value) | Xác định độ dài chuỗi nhiều nhất | @MinLength(100)|

### Number
  
| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsNumber | @IsNumber() | Xác định là kiểu số|   @IsNumber()<br> age: number; |
| Min | @Min(value) | Xác định số thấp nhất | @Min(1)<br> age: number;|
| Max |  @Max(value) | Xác định số cao nhất | @Max(100)<br> age:number;|

### Array

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsArray | @IsArray() | Xác định là kiểu mảng|   @IsArray()<br> address: string[]; |
| MinArray | @MinArray(value) | Xác định số lượng phần tử mảng con nhỏ nhất | @MinArray(1)<br> address: string[];|
| Max |  @MaxArray(value) | Xác định số lượng phần tử mảng con nhỏ nhất | @MaxArray(100)<br> address: string[];|

### Object

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsObject | @IsObject() | Xác định là kiểu object|   @IsObject()<br> includes: IncludesResponse; |

### Boolean

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsBoolean | @IsBoolean() | Xác định là kiểu boolean|   @IsBoolean()<br> isPinned: boolean; |

### Date

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsDate | @IsDate() | Xác định là kiểu ngày|   @IsDate()<br> createTime: Date; |

### Enum

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| IsEnum | @IsEnum(enumType) | Xác định là kiểu enum |   @IsEnum(MessageTypeEnum)<br> messageType: MessageTypeEnum|

### Condition

| Name  | Usage | Describe  | Example|
|--------|--------|--------|--------|
| ValidIf | @ValidIf(condition, operators, condition2) | Xác định là đúng nếu thỏa mãn điều kiện  |   @ValidIf('workspaceId', '===', '0')<br> workspaceId: string|
| StartWith | @StartWith(field, value) | Xác định kí tự bắt đầu của chuỗi  |   @StartWith('username', 'test123' )<br> username: string|
| EndWith | @StartWith(field, value) | Xác định kí tự cuối cùng của chuỗi  |   @EndWith('username', 'test123' )<br> username: string|

## Reports

### Requests ( DTO )
```
=== Test Report for send-message ===
• Host: https://api-sb11.rpc.ziichat.dev
• Endpoint: /Message/SendMessage
• Date: 01/04/2025, 10:36:39

=== Validation Metrics ===
■ DTO Validation:
  ✔ Passed: 1
  ✖ Failed: 1
  ◼ Total: 45

=== Error Details ===
[DTO Validation Issues]

  1. Case #42
     ├─ Status: 500
     ├─ Missing: None
     ├─ Extra: None
     └─ Details: TypeError: value.trim is not a function

=== System Metrics ===
▧ Status Code Distribution:
  200: 0
  201: 1
  400: 0
  403: 0
  404: 0
  500: 1

▧ Unique Error Patterns:

=== End of Report ===
```
- Status: Status response error trả về ( 400, 403, 404, 500, 503 )
- Missing: Có trong expect nhưng không có trên repsonse API return
- Extra: Có trên response API return nhưng không có trong expect
- Unique Error: Gôm lỗi
- Detail: Chi tiết lỗi (nếu có)

## Defined Name

**- Request ( DTO )**
  + Folder chung: test-requests
  + File: send-message.dto.ts
  + Folder apis: send-message
    
  Example:
  - 📂 root
    - 📂 test-requests
      - 📂 send-message
        - 📄 send-message.request.json
        - 📄 send-message.dto.ts
        - 📄 send-message.spec.ts
    - 📂 send-dm-message
      - 📄 send-dm-message.request.json
      - 📄 send-dm-message.dto.ts
      - 📄 send-dm-message.spec.ts

**- Response**
  + Folder chung: test-responses
  + File: send-message.response.ts, send-message.response.json, send-message.response.spec.ts
  + Folder apis: send-message
    
  Example:
  - 📂 root
    - 📂 test-responses
      - 📂 send-message
        - 📄 send-message.response.json
        - 📄 send-message.response.spec.ts
      - 📂 send-dm-message
        - 📄 send-dm-message.response.json
        - 📄 send-dm-message.response.spec.ts
       
    - 📂 responses
      - 📄 send-message.response.ts
      - 📄 send-dm-message.response.ts

**- Saga**
  + Folder chung: test-sagas
  + File: send-message.sagas.ts, send-message.sagas.spec.ts
  + Folder apis: send-message
   
Example:
  - 📂 root
    - 📂 test-sagas
      - 📂 send-message
        - 📄 send-message.response.json
        - 📄 send-message.response.spec.ts
      - 📂 send-dm-message
        - 📄 send-dm-message.response.json
        - 📄 send-dm-message.response.spec.ts
       
    - 📂 responses
      - 📄 send-message.response.ts
      - 📄 send-dm-message.response.ts
     
## List Action

- [acceptInvitation](#acceptInvitation)
- [addMessageReaction](#addMessageReaction)
- [createChannel](#createChannel)
- [getChannel](#getChannel)
- [getMessage](#getMessage)
- [getStickerCollection](#getStickerCollection)
- [getSticker](#getSticker)
- [getListMessages](#getListMessages)
- [mockChannel](#mockChannel)
- [mockUser](#mockUser)
- [sendInvitation](#sendInvitation)
- [sendMessage](#sendMessage)
- ...



### Action Detail

#### acceptInvitation
``` 
  {
        action: 'getChannel',
        body: { channelId: '{{channelId}}'},
        header: { token: '{{token}}' },
  }
```

#### addMessageReaction
``` 
  {
        action: 'addMessageReaction',
        body: { channelId: '{{channelId}}'},
        header: { token: '{{token}}' },
  }
```

#### createChannel
``` 
  {
        action: 'createChannel',
  }
```

#### getChannel
``` 
  {
        action: 'getChannel',
        body: { channelId: '{{channelId}}'},
        header: { token: '{{token}}' },
  }
```

#### getMessage
``` 
  {
        action: 'getMessage',
        body: { messageId: '{{messageId}}'},
        header: { token: '{{token}}' },
  }
```

#### getStickerCollection
``` 
  {
        action: 'getStickerCollection',
        body: { collectionId: '{{collectionId}}'},
        header: { token: '{{token}}' },
  }
```

#### getSticker
``` 
  {
        action: 'stickerId',
        body: { stickerId: '{{stickerId}}'},
        header: { token: '{{token}}' },
  }
```

#### getListMessages
``` 
  {
        action: 'getListMessages',
        body: { channelId: '{{channelId}}'},
        header: { token: '{{token}}' },
  }
```

#### mockChannel
``` 
  {
        action: 'mockChannel',
  }
```

#### mockUser
``` 
  {
        action: 'mockUser',
        body: { quantity: 2 },
  }
```

#### sendInvitation
``` 
  {
        action: 'sendInvitation',
        body: { invitationLink: '{{inviteLink}}', userIds: "['{{userId1}}','{{userId2}}']" }
  }
```

#### sendMessage
``` 
  {
        action: 'sendMessage',
        body: { channelId: '{{channelId}}', content: 'aaaaa' },
        header: { token: '{{token}}' },
  }
```







