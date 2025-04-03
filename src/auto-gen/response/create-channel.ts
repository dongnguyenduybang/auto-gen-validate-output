// create-channel.response.ts
import { ValidateNested  } from 'class-validator';
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
import { DirectMessageStatusEnum } from '../enums/direct-message-status.enum';
import { IsDefined, IsArray, IsOptional } from '../decorator/dto-decorator';
import { ChannelPermissionEnum } from '../enums/channel-permissions.enum';

// 1. Tùy chỉnh lớp Channel cho create-channel
export class CreateChannelChannel extends Channel {
  @IsOptional()
  declare avatar: string;

  @IsOptional()
  declare originalAvatar: string;

  @IsOptional()
  declare dmStatus: DirectMessageStatusEnum;

  @IsOptional()
  @ValidateNested()
  @Type(() => Message)
  declare pinnedMessage: Message;

  @IsOptional()
  @IsArray()
  declare participantIds: string[];

  @IsOptional()
  declare rejectTime: string;

  @IsOptional()
  declare acceptTime: string;
}

// 2. Tùy chỉnh ChannelMetadata cho create-channel
export class CreateChannelChannelMetadata extends ChannelMetadata {
  @IsArray()
  @IsDefined()
  permissions: ChannelPermissionEnum
}

// 3. Định nghĩa DataResponse cho create-channel
export class CreateChannelDataResponse {
  @ValidateNested()
  @Type(() => CreateChannelChannel)
  channel: CreateChannelChannel;

  @ValidateNested()
  @Type(() => CreateChannelChannelMetadata)
  channelMetadata: CreateChannelChannelMetadata;
}

// 4. Tùy chỉnh IncludesResponse
export class CreateChannelIncludesResponse extends IncludesResponse {
  @ValidateNested({ each: true })
  @Type(() => User)
  users: User[];

  @ValidateNested({ each: true })
  @Type(() => Message)
  messages: Message[];

  @ValidateNested({ each: true })
  @Type(() => Member)
  members: Member[];

  @ValidateNested({ each: true })
  @Type(() => CreateChannelChannelMetadata)
  channelMetadata: CreateChannelChannelMetadata[];
}

// 5. Tạo response chính
export class CreateChannelResponse extends BaseResponse<CreateChannelDataResponse> {
  @ValidateNested()
  @Type(() => CreateChannelIncludesResponse)
  includes: CreateChannelIncludesResponse;
}