// send-message.response.ts
import { ValidateNested } from 'class-validator';
import { Exclude, Type } from 'class-transformer';
import {
  BaseResponse,
  Channel as GeneralChannel,
  ChannelMetadata as GeneralChannelMetadata,
  Embed,
  Member as GeneralMember,
  Message as GeneralMessage,
  OriginalMessage,
  Reaction,
  User as GeneralUser,
} from './general-response';
import { DirectMessageStatusEnum } from '../enums/direct-message-status.enum';
import { IsDefined } from '../decorator/general-decorator';
import { IsString } from '../decorator/string-decorator';
import { IsBoolean } from '../decorator/boolean-decorator';
import { ValidIf } from '../decorator/condition-decorator';
import { IsObject } from '../decorator/object-decorator';
import { IsArray } from '../decorator/array-decorator';

export class Message extends GeneralMessage {
  @ValidIf('workspaceId', '===', '0')
  @IsString()
  @IsDefined()
  workspaceId?: string;

  @ValidIf('content', '===', '%s created this channel')
  @IsString()
  @IsDefined()
  content?: string;

  @Exclude()
  originalMessage?: OriginalMessage;

  @Exclude()
  reactions?: Reaction;

  @Exclude()
  mentions?: string[];

  @Exclude()
  embed?: Embed;

  @Exclude()
  attachmentCount?: number;

  @Exclude()
  mediaAttachments?: string[];
}

export class ChannelMetadata extends GeneralChannelMetadata {}

export class Channel extends GeneralChannel {
  // @StartWith('invitationLink', 'https://zii.chat/i/')
  @IsString()
  @IsDefined()
  invitationLink?: string;

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

export class User extends GeneralUser {}

export class Member extends GeneralMember {}

export class IncludesResponse {
  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => User)
  users?: User[];

  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => Member)
  members?: Member[];

  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => Message)
  messages?: Message[];

  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => ChannelMetadata)
  channelMetadata?: ChannelMetadata[];
}

export class DataResponse {
  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => Channel)
  channel?: Channel;
}

export class CreateChannelResponse extends BaseResponse {
  @IsBoolean()
  @IsDefined()
  ok?: boolean = undefined;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => DataResponse)
  data?: DataResponse;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => IncludesResponse)
  includes?: IncludesResponse;
}
