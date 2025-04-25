import { ValidateNested } from 'class-validator';
import { Exclude, Type } from 'class-transformer';
import {
  BaseResponse,
  Message as GeneralMessage,
  User as GeneralUser,
  Member as GeneralMember,
  Channel as GeneralChannel,
  ChannelMetadata as GeneralChannelMetaData,
  Reaction,
  Embed,
  OriginalMessage,
} from './general-response';
import {
  ValidIf,
  IsArray,
  IsBoolean,
  IsDefined,
  IsObject,
  IsString,
} from '../decorator';
import { DirectMessageStatusEnum } from '../enums';

export class Profile {}

export class Message extends GeneralMessage {
  @ValidIf('workspaceId', '===', '0')
  @IsString()
  @IsDefined()
  workspaceId?: string;

  @ValidIf('content', '===', 'payload.content')
  @IsString()
  @IsDefined()
  content?: string;

  @ValidIf('userId', '===', '{{userId}}')
  @IsString()
  @IsDefined()
  userId?: string;

  @ValidIf('createTime', '===', 'response.updateTime')
  @IsString()
  @IsDefined()
  createTime?: string;

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

  @Exclude()
  contentArguments?: string[];
}

export class ChannelMetadata extends GeneralChannelMetaData {}

export class Channel extends GeneralChannel {
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

  @Exclude()
  invitationLink?: string;
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
}

export class User extends GeneralUser {
  @ValidIf('createTime', '===', 'response.updateTime')
  @IsString()
  @IsDefined()
  createTime?: string;

  @ValidateNested({ each: true, always: true })
  @IsObject()
  @IsDefined()
  @Type(() => Profile)
  profile: Profile;
}

export class IncludesResponse {
  @ValidateNested({ each: true, always: true })
  @IsArray()
  @IsDefined()
  @Type(() => User)
  users?: User[];

  @ValidateNested({ each: true, always: true })
  @IsArray()
  @IsDefined()
  @Type(() => Channel)
  channels?: Channel[];

  @ValidateNested({ each: true, always: true })
  @IsArray()
  @IsDefined()
  @Type(() => Member)
  members?: Member[];

  @ValidateNested({ each: true, always: true })
  @IsArray()
  @IsDefined()
  @Type(() => ChannelMetadata)
  channelMetadata?: ChannelMetadata[];
}

export class DataResponse {
  @ValidateNested({ each: true, always: true })
  @IsObject()
  @IsDefined()
  @Type(() => Message)
  message?: Message;
}

export class SendDmMessageResponse extends BaseResponse {
  @IsBoolean()
  @IsDefined()
  ok?: boolean;

  @ValidateNested({ each: true, always: true })
  @IsObject()
  @IsDefined()
  @Type(() => DataResponse)
  data?: DataResponse;

  @ValidateNested({ each: true, always: true })
  @IsObject()
  @IsDefined()
  @Type(() => IncludesResponse)
  includes?: IncludesResponse;
}
