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

**📄 send-message.request.ts**

```ts
import { ACTION, HEADER_LIST, VAR } from "../../../../enums";
import { DTOBuilder } from "../../../../utils/chain-dto";

export const UpdateDmMessage = new DTOBuilder()
  .startStep('update dm message')
  .addAction('update dm message', ACTION.UPDATE_DM_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
      messageId: VAR.messageId,
      content: 'dm message chain'
    }
  })
  .addBeforeAll('send dm message', ACTION.SEND_DM_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
      content: 'dm message chain'
    }
  })
  .execute()

```

+ **Action**: Định nghĩa hành động thực hiện.
+ **Body**: Định nghĩa body đầu vào
+ **Options**: Định nghĩa các step chuẩn bị data trước và sau khi test (beforeAll, beforeEach, afterAll, afterEach)

**📄 send-message.dto.ts**

```
import {
  IsDefined,
  IsNotEmpty,
  IsInvalid,
  IsString,
  MaxLength,
  MinLength,
  IsULID,
} from '../../decorator';

export class SendMessageDTO {
  @IsDefined({ message: `Could not resolve permission type` })
  @IsInvalid({ message: `Invalid channel` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  workspaceId: string = '';

  @IsDefined({ message: `Unsupported permission type` })
  @IsInvalid({ message: `Invalid channel` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  channelId: string = '';

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

  Đối với những endpoint nào có số lượng case quá lớn ( > 500 case ) sẽ tách các case ra từng file với mỗi file là 500 case.

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
  + Decorator Isinvalid để bắt những trường hợp ngoại lệ đúng typeof nhưng sai giá trị. Sẽ dừng test field đó và push lỗi custom đó ra
    + Example: field workspaceId có payload là chuỗi "abcdef" nhưng khác "0" => Invalid channel, field channelId có payload là chuỗi "abcdef" nhưng khác template {{channelId}}(ULID) => Invalid channel

Report tổng:

```bash
pnpm gen reports
```

[File report](../../src/auto-gen/test-requests/.reports/SUMMARY.md)
