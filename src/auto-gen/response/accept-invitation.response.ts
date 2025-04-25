import { ValidateNested } from 'class-validator';
import { Exclude, Type } from 'class-transformer';
import {
  BaseResponse,
  Channel as GeneralChannel,
  Message as GeneralMessage,
  ChannelMetadata as GeneralChannelMetaData,
  User as GeneralUser,
  Member as GeneralMember,
  Reaction,
  Embed,
  OriginalMessage,
} from './general-response';
import {
  IsDefined,
  StartWith,
  ValidIf,
  IsString,
  IsArray,
  IsBoolean,
  IsObject,
} from '../decorator';
import { DirectMessageStatusEnum } from '../enums';

export class Message extends GeneralMessage {
  @ValidIf('workspaceId', '===', '0')
  @IsString()
  @IsDefined()
  workspaceId?: string;

  @ValidIf('content', '===', '%s joined this channel')
  @IsString()
  @IsDefined()
  content?: string;

  @ValidIf('channelId', '===', '{{channelId}}')
  @IsString()
  @IsDefined()
  channelId?: string;

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

export class ChannelMetadata extends GeneralChannelMetaData {}

export class Channel extends GeneralChannel {
  @ValidIf('invitationLink', '===', 'payload.invitationLink')
  @StartWith('invitationLink', 'https://zii.chat/i/')
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

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => ChannelMetadata)
  channelMetadata?: ChannelMetadata;
}

export class AcceptInvitationResponse extends BaseResponse {
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
