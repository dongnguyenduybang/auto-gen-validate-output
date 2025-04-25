## Requests
Mục đích: Gen body và expect error dựa vào decorator DTO. Với cấu trúc thư mục như sau

- 📂 root
  - 📂 test-requests
    - 📂 send-message
      - 📄 send-message.request.ts
      - 📄 send-message.dto.ts
      - 📄 send-message.payload.json
      - 📄 send-message.spec.ts

Bước 1: Định nghĩa 2 file send-message-dto và send-message-request

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
                prefix: "testDTO",
                badge: 0
            }
        },
        {
            action: "createChannel"
        }
    ],
    afterAll: [
       {
        action: "deleteMockedUsers",
        method: METHOD.DELETE,
        path: APIPath.Faker.DeleteMockedUsers,
        body: {
          prefix: "testDTO"
        }
      }
    ],
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
  @MaxLength(2000)
  content: string = '';
}
```

Bước 2: Tiến hành chạy gen script

```bash
  pnpm gen request send-message
```
  Sau khi chạy gen script sẽ gen ra được 2 file là 
  - 📄 send-message.payload.json
  - 📄 send-message.spec.ts

Bước 3: Tiến hành chạy test script

```bash
  pnpm test request send-message
```
  Sau khi chạy test script thì log sẽ được ghi vào file report 


- Note:
  + Những decorator có custom message nếu có lỗi sẽ dừng test filed đó và push lỗi custom đó ra 
  + Decorator IsChecked để bắt những trường hợp ngoại lệ đúng typeof nhưng sai giá trị. Sẽ dừng test field đó và push lỗi custom đó ra
    + Example: field workspaceId có payload là chuỗi "abcdef" nhưng khác "0" => Invalid channel, field channelId có payload là chuỗi "abcdef" nhưng khác template {{channelId}}(ULID) => Invalid channel


