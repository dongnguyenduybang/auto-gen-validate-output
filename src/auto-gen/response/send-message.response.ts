import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsBoolean,
  IsString,
  IsNumber,
  IsObject,
  IsEnum,
  IsOptional,
  ValidIf,
} from '../decorator/dto-decorator';
import { BaseResponse, IncludesResponse } from './general-response';
import { MessageTypeEnum } from '../enums/message-type.enum';
import { MessageStatusEnum } from '../enums/message-status.enum';
import { AttachmentTypeEnum } from '../enums/attachment-type.enum';

export class SendMessageData {
  @IsString()
  @IsDefined()
  @IsOptional()
  @ValidIf('workspaceId', '===', 'payload.workspaceId')
  workspaceId?: string = undefined;

  @IsString()
  @IsDefined()
  @ValidIf('channelId', '===', 'payload.channelId')
  channelId?: string = undefined;

  @IsString()
  @IsDefined()
  messageId?: string = undefined;

  @IsString()
  @IsDefined()
  userId?: string = undefined;

  @IsString()
  @IsDefined()
  @ValidIf('content', '===', 'payload.content')
  content?: string = undefined;

  @IsEnum(MessageTypeEnum)
  @IsDefined()
  messageType?: MessageTypeEnum;

  @IsEnum(MessageStatusEnum)
  @IsDefined()
  messageStatus?: MessageStatusEnum;

  @IsEnum(AttachmentTypeEnum)
  @IsDefined()
  attachmentType?: AttachmentTypeEnum;

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
  contentLocale?: string = undefined;

  @IsBoolean()
  @IsDefined()
  isPinned?: boolean = undefined;

  @IsString()
  @IsDefined()
  @ValidIf('createTime', '===', 'response.updateTime')
  createTime?: string = undefined;

  @IsString()
  @IsDefined()
  updateTime?: string = undefined;

  @IsString()
  @IsDefined()
  @IsOptional()
  ref?: string = undefined;
}

export class SendMessageDataWrapper {
  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => SendMessageData)
  message: SendMessageData;
}

export class SendMessageResponse extends BaseResponse<SendMessageDataWrapper> {
  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => SendMessageDataWrapper)
  data: SendMessageDataWrapper;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => IncludesResponse)
  includes: IncludesResponse;

  constructor() {
    super();

    if (this.includes) {
      const { users, members, channels, channelMetadata } = this.includes;

      this.includes = {
        users,
        members,
        channels,
        channelMetadata,
        messages: [],
      } as IncludesResponse;
    }

    if (this.data) {
      const { message } = this.data;
      this.data = { message } as SendMessageDataWrapper;
    }
  }
}
