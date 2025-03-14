import { BaseResponse, DataMessage, IncludesMessage } from './general-response';
import { ValidateNested, IsString, IsNumber, IsBoolean, IsArray, IsOptional, IsObject, IsDefined } from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { IsEnum } from '../decorator/dto-decorator';
import { MessageTypeEnum } from '../enums/message-type.enum';
import { AttachmentTypeEnum } from '../enums/attachment-type.enum';

export class SendMessageResponse extends BaseResponse {
  
  @IsString()
  @IsDefined()
  workspaceId: string;

  @IsString()
  @IsDefined()
  channelId: string;

  @IsString()
  @IsDefined()
  messageId: string;

  @IsString()
  @IsDefined()
  userId: string;

  @IsString()
  @IsDefined()
  content: string;

  @IsEnum(MessageTypeEnum)
  @IsDefined()
  messageType: MessageTypeEnum;

  @IsNumber()
  @IsDefined()
  messageStatus: number;

  @IsEnum(AttachmentTypeEnum)
  @IsDefined()
  attachmentType: AttachmentTypeEnum;

  @IsBoolean()
  @IsDefined()
  isThread: boolean;

  @IsNumber()
  @IsDefined()
  reportCount: number;

  @IsBoolean()
  @IsDefined()
  isReported: boolean;

  @IsNumber()
  @IsDefined()
  attachmentCount: number;

  @IsString()
  @IsDefined()
  contentLocale: string;

  @IsBoolean()
  @IsDefined()
  isPinned: boolean;

  @IsString()
  @IsDefined()
  createTime: string;

  @IsString()
  @IsDefined()
  updateTime: string;

  @IsString()
  @IsDefined()
  ref: string;

}
