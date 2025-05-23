
## Responses
- Mục đích: Validate response check typeof, required, so sánh và các điều kiện với response trả về từ API. Cấu trúc file thư mục như sau:

- 📂 root
  - 📂 test-responses
    - 📂 send-message
      - 📄 send-message.response.json
      - 📄 send-message.response.spec.ts
  - 📂 responses
    - 📄 send-message.response.ts

Bước 1: Định nghĩa file send-message.response và send-message.request.ts

**📄 send-message.response.ts  **   
```
export const SendMessageResponse = {
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
                prefix: "testResponse",
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
          prefix: "testResponse"
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

📄 send-message.response.ts

- Example
```

export class Profile {
  
  @StartWith('avatar', 'https://avatarss')
  @IsString()
  @IsDefined()
  avatar?: string;

  @StartWith('originalAvatar', 'https://avatars')
  @IsString()
  @IsDefined()
  originalAvatar?: string;
}

export class Message extends GeneralMessage {

  @ValidIf('workspaceId', '===', '0')
  @IsString()
  @IsDefined()
  workspaceId?: string;

  @ValidIf('content', '===', 'payload.content')
  @IsString()
  @IsDefined()
  content?: string;

  @ValidIf('channelId', '===', 'payload.channelId')
  @IsString()
  @IsDefined()
  channelId?: string;

  @ValidIf('createTime', '===', 'response.updateTime')
  @IsString()
  @IsDefined()
  createTime?: string;

  @Exclude()
  originalMessage?: string;

  @Exclude()
  reactions?: Reaction;

  @Exclude()
  mentions?: string[];

  @Exclude()
  embed?: EmbedTypeEnum

  @Exclude()
  attachmentCount?: number;

  @Exclude()
  mediaAttachments?: string[];

  @Exclude()
  contentArguments?: string[];
}

export class ChannelMetadata extends GeneralChannelMetaData {

}

export class Channel extends GeneralChannel {

  @StartWith('invitationLink', 'https://zii.chat/i/')
  @IsString()
  @IsDefined()
  invitationLink?: string;

  @ValidIf('channelId', '===', 'payload.channelId')
  @IsString()
  @IsDefined()
  channelId?: string;

  @Exclude()
  originalAvatar?: string;

  @Exclude()
  dmStatus?: DirectMessageStatusEnum;

  @Exclude()
  pinnedMessage?: Message;

  @Exclude()
  participantIds?: string[];

  @Exclude()
  rejectTime?: string;

  @Exclude()
  acceptTime?: string;
}
export class Member extends GeneralMember {

  @ValidIf('createTime', '===', 'response.updateTime')
  @IsString()
  @IsDefined()
  createTime?: string;

  @ValidIf('channelId', '===', 'payload.channelId')
  @IsString()
  @IsDefined()
  channelId?: string;

  @ValidIf('workspaceId', '===', '0')
  @IsString()
  @IsDefined()
  workspaceId?: string;

  @ValidIf('userId', '===', '{{userId1}}')
  @IsString()
  @IsDefined()
  userId?: string;
}

export class User extends GeneralUser {

  @ValidIf('createTime', '===', 'response.updateTime')
  @IsString()
  @IsDefined()
  createTime?: string;

  @EndWith('username', '{{userId}}')
  @IsString()
  @IsDefined()
  username?: string;

  @ValidIf('userId', '===', '{{userId}}')
  @IsString()
  @IsDefined()
  userId?: string;

  @ValidateNested({ each: true, always: true })
  @IsObject()
  @IsDefined()
  @Type(() => Profile)
  profile: Profile;

}


export class IncludesResponse {
  @ValidateNested({ each: true,  always: true })
  @IsArray()
  @IsDefined()
  @Type(() => User)
  users?: User[];

  
  @ValidateNested({ each: true,  always: true })
  @IsArray()
  @IsDefined()
  @Type(() => Channel)
  channels?: Channel[];

  @ValidateNested({ each: true,  always: true })
  @IsArray()
  @IsDefined()
  @Type(() => Member)
  members?: Member[];

  @ValidateNested({ each: true,  always: true })
  @IsArray()
  @IsDefined()
  @Type(() => ChannelMetadata)
  channelMetadata?: ChannelMetadata[];
}

export class DataResponse {
  @ValidateNested({ each: true,  always: true})
  @IsObject()
  @IsDefined()
  @Type(() => Message)
  message?: Message;
}

export class SendMessageResponse extends BaseResponse {
  @IsBoolean()
  @IsDefined()
  ok?: boolean = undefined;

  @ValidateNested({ each: true,  always: true })
  @IsObject()
  @IsDefined()
  @Type(() => DataResponse)
  data?: DataResponse;

  @ValidateNested({ each: true,  always: true })
  @IsObject()
  @IsDefined()
  @Type(() => IncludesResponse)
  includes?: IncludesResponse;
}

```

Bước 2: Tiến hành chạy gen script

```bash
  pnpm gen response send-message
```
 Sau khi chạy gen script sẽ gen ra được  file là 
  - 📄 send-message.response.spec.ts
Bước 3: Tiến hành chạy test script

```bash
  pnpm test request send-message
```
  Sau khi chạy test script thì log sẽ được ghi vào file report 

+ Note:  
  - Response được kế thừa từ class BaseResponse 
  - Override thêm các decorator đối với các property cần thay đổi các điều kiện muốn check
  - Exclude sẽ undefined các property không cần dùng đến 
  - Nếu không defined các property trong SendMessageResponse thì mặc định sẽ lấy property từ class BaseResponse