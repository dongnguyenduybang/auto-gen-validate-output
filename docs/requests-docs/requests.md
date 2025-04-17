## Requests

- 📂 root
  - 📂 test-requests
    - 📂 send-message
      - 📄 send-message.request.json
      - 📄 send-message.dto.ts
      - 📄 send-message.spec.ts

**📄 send-message.request.json**
``` 
 export const SendMessageRequest = {
    method: METHOD.POST,
    path: APIPath.Message.SendMessage,
    headers: HeaderList.Token(),
    body: {
        channelId: VAR.channelId,
        workspaceId: '0',
        content: 'test response send message',
        ref: 'ref'
    },
    beforeAll: [
        {
            action: "mockUser",
            body: {
                quantity: 2,
                prefix: "testABACDD",
                badge: 0
            }
        },
        {
            action: "createChannel"
        }
    ],
    afterAll: [],
};
```

+ **Method**: Định nghĩa phương thức (POST | PUT | DELETE | GET) type ENUM
+ **Path**: Đường dẫn Endpoint type ENUM
+ **Headers**: Định nghĩa các header
+ **Payload**: Định nghĩa body đầu vào
+ **beforeAll**: Định nghĩa các step chuẩn bị data trước khi test

**📄 send-message.dto.ts**
``` 
import { IsDefined, IsNotEmpty, IsChecked } from '../../decorator/general-decorator';
import {
  IsString,
  MaxLength,
  MinLength,
} from '../../decorator/string-decorator';

export class SendMessageDTO {

  @IsDefined({ message: `Unsupported permission type` })
  @IsChecked({ message: `Invalid channel` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  channelId: string = '';

  @IsDefined({ message: `Could not resolve permission type` })
  @IsChecked({ message: `Invalid channel` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  workspaceId: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MinLength(1)
  @MaxLength(6000)
  content: string = '';
}
```
- Note:
  + Những decorator có custom message nếu có lỗi sẽ dừng test filed đó và push lỗi custom đó ra 
  + Decorator IsChecked để bắt những trường hợp ngoại lệ đúng typeof nhưng sai giá trị. Dừng test field đó và push lỗi custom đó ra
    + Example: field workspaceId có payload là chuỗi "abcdef" nhưng khác "0" => Invalid channel, field channelId có payload là chuỗi "abcdef" nhưng khác template {{channelId}}(ULID) => Invalid channel


