// get-channel.response.ts
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import {
  BaseResponse,
  Channel,
  ChannelMetadata,
  Message,
  User,
  Member,
  IncludesResponse,
} from './general-response';
import { IsArray, IsOptional } from '../decorator/dto-decorator';

// 1. Tùy chỉnh lớp Channel cho get-channel
export class GetChannelChannel extends Channel {
  @IsOptional()
  declare avatar: string | null;

  @IsOptional()
  declare originalAvatar: string | null;

  @IsOptional()
  @ValidateNested()
  @Type(() => Message)
  declare pinnedMessage: Message | null;

  @IsArray()
  @IsOptional()
  declare participantIds: string[];
}

// 2. Tùy chỉnh ChannelMetadata cho get-channel
export class GetChannelChannelMetadata extends ChannelMetadata {
  @IsOptional()
  declare userId: string;

  @IsOptional()
  declare deleteTime: string | null;

  @IsOptional()
  declare deletedMessageId: string | null;

  @IsOptional()
  declare dmId: string | null;

  @IsOptional()
  declare isIncomingMessageRequest: boolean | null;

  @IsOptional()
  declare lastSeenMessageId: string;

  @IsOptional()
  declare recipientId: string | null;

  @ValidateNested()
  @Type(() => Message)
  declare lastMessage: Message;
}

// 3. Tùy chỉnh Message cho includes
export class GetChannelMessage extends Message {
  @IsArray()
  @IsOptional()
  declare reports: any[];

  @IsArray()
  @IsOptional()
  declare onlyDeletedBy: string[];

  @IsArray()
  @IsOptional()
  declare dataMentions: any[];
}

// 4. Định nghĩa DataResponse cho get-channel
export class GetChannelDataResponse {
  @ValidateNested()
  @Type(() => GetChannelChannel)
  channel: GetChannelChannel;

  @ValidateNested()
  @Type(() => GetChannelChannelMetadata)
  channelMetadata: GetChannelChannelMetadata;
}

// 5. Tùy chỉnh IncludesResponse
export class GetChannelIncludesResponse extends IncludesResponse {
  @ValidateNested({ each: true })
  @Type(() => User)
  users: User[];

  @ValidateNested({ each: true })
  @Type(() => GetChannelMessage)
  messages: GetChannelMessage[];

  @ValidateNested({ each: true })
  @Type(() => Member)
  members: Member[];

  @ValidateNested({ each: true })
  @Type(() => GetChannelChannelMetadata)
  channelMetadata: GetChannelChannelMetadata[];
}

// 6. Tạo response chính
export class GetChannelResponse extends BaseResponse<GetChannelDataResponse> {
  @ValidateNested()
  @Type(() => GetChannelIncludesResponse)
  includes: GetChannelIncludesResponse;
}