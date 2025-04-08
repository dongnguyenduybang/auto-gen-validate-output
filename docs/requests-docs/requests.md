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


