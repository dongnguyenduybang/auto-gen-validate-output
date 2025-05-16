## Requests
Mục đích: Gen body và expect error dựa vào decorator DTO. Với cấu trúc thư mục như sau

- 📂 root
  - 📂 test-requests
    - 📂 update-message
      - 📄 update-message.request.ts
      - 📄 update-message.dto.ts
      - 📄 update-message.payload.json
      - 📄 update-message.spec.ts

Bước 1: Định nghĩa 2 file update-message-dto và update-message-request

**📄 update-message.request.ts**
``` 
 import { VAR, ACTION, HEADER_LIST } from '../../enums';

export const UpdateMessageRequest = {
  action: ACTION.UPDATE_MESSAGE,
  body: {
    channelId: VAR.channelId,
    messageId: VAR.messageId1,
    workspaceId: '0',
    content: 'test response update message',
    ref: 'ref',
  },
  headers: HEADER_LIST.create({token: VAR.token}),
  beforeAll: [
    {
      action: ACTION.SEND_MESSAGE,
      body: {
        workspaceId: '0',
        channelId: VAR.channelId,
        content: 'duybang12345',
        ref: 'abc',
      },
      headers: HEADER_LIST.create({token: VAR.token}),
    },
  ],
 };

```
+ **Action**: Định nghĩa hành động thực hiện.
+ **Body**: Định nghĩa body đầu vào
+ **beforeAll**: Định nghĩa các step chuẩn bị data trước khi test

**📄 update-message.dto.ts**
``` 
import { IsDefined, IsNotEmpty, IsChecked } from '../../decorator/general-decorator';
import {
  IsString,
  MaxLength,
  MinLength,
} from '../../decorator/string-decorator';

import {
  IsString,
  MaxLength,
  MinLength,
  IsChecked,
  IsDefined,
  IsNotEmpty,
  IsNotNull,
} from '../../decorator';

export class SendDmMessageDTO {
  @IsString({
    message: `Could not resolve permission type`,
  })
  @IsDefined({
    message: `Could not resolve permission type`,
  })
  @IsNotEmpty({
    message: `Could not resolve permission type`,
  })
  @IsChecked({
    message: `Unauthorized request`,
  })
  @IsNotNull({ message: `Could not resolve permission type` })
  userId: string = '';

  @IsString()
  @IsDefined()
  @MinLength(1)
  @MaxLength(2000)
  content: string = '';

  @IsString()
  @IsDefined()
  @MinLength(1)
  ref: string = '';
}

```

Bước 2: Tiến hành chạy gen script

```bash
  pnpm gen request update-message
```
  Sau khi chạy gen script sẽ gen ra được 2 file là 
  - 📄 send-message.payload.json
  - 📄 send-message.spec.ts

   Đối với những endpoint nào có số lượng case quá lớn ( > 1000 case ) sẽ tách các case ra từng file với mỗi file là 500 case.

Bước 3: Tiến hành chạy test script

```bash
  pnpm test request update-message
```
Bước 4: Tiến hành chạy script gen reports

```bash
  pnpm gen reports update-message
```

  Sau khi chạy script thì log sẽ được ghi vào file report 

- Note:
  + Những decorator có custom message nếu có lỗi sẽ dừng test filed đó và push lỗi custom đó ra 
  + Decorator IsChecked để bắt những trường hợp ngoại lệ đúng typeof nhưng sai giá trị. Sẽ dừng test field đó và push lỗi custom đó ra
    + Example: field workspaceId có payload là chuỗi "abcdef" nhưng khác "0" => Invalid channel, field channelId có payload là chuỗi "abcdef" nhưng khác template {{channelId}}(ULID) => Invalid channel


