// accept-invitation.response.ts
import { ValidateNested} from 'class-validator';
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
import { IsArray, IsOptional } from '../decorator/dto-decorator';

// 1. Tùy chỉnh lớp Channel
export class AcceptInvitationChannel extends Channel {
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
}

// 2. Tùy chỉnh Message cho join notification
export class AcceptInvitationMessage extends Message {
  @IsArray()
  @IsOptional()
  declare contentArguments: string[];
}

// 3. Định nghĩa DataResponse
export class AcceptInvitationDataResponse {
  @ValidateNested()
  @Type(() => AcceptInvitationChannel)
  channel: AcceptInvitationChannel;

  @ValidateNested()
  @Type(() => ChannelMetadata)
  channelMetadata: ChannelMetadata;
}

// 4. Tùy chỉnh IncludesResponse
export class AcceptInvitationIncludesResponse extends IncludesResponse {
  @ValidateNested({ each: true })
  @Type(() => User)
  users: User[];

  @ValidateNested({ each: true })
  @Type(() => AcceptInvitationMessage)
  messages: AcceptInvitationMessage[];

  @ValidateNested({ each: true })
  @Type(() => Member)
  members: Member[];
}

// 5. Tạo response chính
export class AcceptInvitationResponse extends BaseResponse<AcceptInvitationDataResponse> {
  @ValidateNested()
  @Type(() => AcceptInvitationIncludesResponse)
  includes: AcceptInvitationIncludesResponse;
}