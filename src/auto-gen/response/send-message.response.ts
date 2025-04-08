// send-message.response.ts
import { ValidateNested } from 'class-validator';
import { Exclude, Type } from 'class-transformer';
import {
  BaseResponse,
  Channel as GeneralChannel,
  IncludesResponse as GeneralIncludesResponse,
  Message as GeneralMessage,
  User as GeneralUser,
  DataResponse,
  StatusData,
  Reaction,
  Message
} from './general-response';
import { DirectMessageStatusEnum } from '../enums/direct-message-status.enum';
import { EmbedTypeEnum } from '../enums/embed-type.enum';
import { ChannelTypeEnum } from '../enums/channel-type.enum';
import { AttachmentTypeEnum } from '../enums/attachment-type.enum';
import { MessageTypeEnum } from '../enums/message-type.enum';
import { IsDefined, IsOptional } from '../decorator/general-decorator';
import { IsString } from '../decorator/string-decorator';
import { IsEnum } from '../decorator/enum-decorator';
import { IsNumber } from '../decorator/number-decorator';
import { IsBoolean } from '../decorator/boolean-decorator';
import { StartWith } from '../decorator/condition-decorator';

// custom Channel
export class ChannelData extends GeneralChannel {
  @Exclude()
  @IsOptional()
  avatar?: string;

  @Exclude()
  @IsOptional()
  originalAvatar?: string;

  @Exclude()
  @IsOptional()
  rejectTime?: string;

  @Exclude()
  @IsOptional()
  acceptTime?: string;

  @Exclude()
  @IsOptional()
  dmStatus?: DirectMessageStatusEnum;

  @Exclude()
  @IsOptional()
  pinnedMessage?: Message;

  @Exclude()
  @IsOptional()
  type?: ChannelTypeEnum;
}

// custom message

export class MessageData extends GeneralMessage {
  @IsString()
  @IsDefined()
  workspaceId?: string = undefined;

  @IsString()
  @IsDefined()
  channelId?: string = undefined;

  @IsString()
  @IsDefined()
  messageId?: string = undefined;

  @IsString()
  @IsDefined()
  userId?: string = undefined;

  @IsString()
  @IsDefined()
  content?: string = undefined;

  @IsEnum(MessageTypeEnum)
  @IsDefined()
  messageType?: MessageTypeEnum;

  @IsNumber()
  @IsDefined()
  messageStatus?: number = undefined;

  @IsBoolean()
  @IsDefined()
  isThread?: boolean = undefined;

  @IsNumber()
  @IsDefined()
  reportCount?: number = undefined;

  @IsBoolean()
  @IsDefined()
  isReported?: boolean = undefined;

  @IsNumber()
  @IsDefined()
  attachmentCount?: number = undefined;

  @IsString()
  @IsDefined()
  @StartWith('contentLocale', 'UN')
  contentLocale?: string = undefined;

  @IsBoolean()
  @IsDefined()
  isPinned?: boolean = undefined;

  @IsString()
  @IsDefined()
  createTime?: string = undefined;

  @IsString()
  @IsDefined()
  updateTime?: string = undefined;

  @IsString()
  @IsDefined()
  @IsOptional()
  ref?: string = undefined;

}

// custom User
export class User extends GeneralUser {
  @Exclude()
  override statusData?: StatusData;

}

// custom includes
export class IncludesResponse extends GeneralIncludesResponse {
  @ValidateNested({ each: true })
  @Type(() => User)
  override users: User[];

  @ValidateNested({ each: true })
  @Type(() => ChannelData)
  override channels: ChannelData[];
}

// data wrapper
export class SendMessageDataWrapper extends DataResponse {
  @ValidateNested()
  @Type(() => MessageData)
  message?: MessageData;
}

// Main Response
export class SendMessageResponse extends BaseResponse<SendMessageDataWrapper> {
  @ValidateNested()
  @Type(() => SendMessageDataWrapper)
  data: SendMessageDataWrapper;

  @ValidateNested()
  @Type(() => IncludesResponse)
  includes: IncludesResponse;

  constructor() {
    super();
    this.data = this.data || new SendMessageDataWrapper
    this.includes = this.includes || new IncludesResponse();
    this.includes.users = this.includes.users || [];
    this.includes.channels = this.includes.channels || [];
    this.includes.members = this.includes.members || [];
    this.includes.channelMetadata = this.includes.channelMetadata || [];
  }

}
