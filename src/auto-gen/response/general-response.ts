import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ChannelTypeEnum } from '../enums/channel-type.enum';
import { MessageTypeEnum } from '../enums/message-type.enum';
import { AttachmentTypeEnum } from '../enums/attachment-type.enum';
import { UserAvatarTypeEnum } from '../enums/user-avatar-type.enum';
import { BadgeEnum } from '../enums/badge.enum';
import { DirectMessageStatusEnum } from '../enums/direct-message-status.enum';
import { MediaPermissionSettingEnum } from '../enums/media-permission-setting.enum';
import { ChannelPermissionEnum } from '../enums/channel-permissions.enum';
import { UserStatusExpireAfterTimeEnum } from '../enums/user-status-expire-after-time.enum';
import { EmbedTypeEnum } from '../enums/embed-type.enum';
import { IsBoolean } from '../decorator/boolean-decorator';
import { IsDefined, IsOptional } from '../decorator/general-decorator';
import { IsNumber } from '../decorator/number-decorator';
import { IsString } from '../decorator/string-decorator';
import { IsEnum } from '../decorator/enum-decorator';
import { IsObject } from '../decorator/object-decorator';
import { IsArray } from '../decorator/array-decorator';
import { StartWith } from '../decorator/condition-decorator';

export class Reaction {
  @IsBoolean()
  @IsDefined()
  isReacted?: boolean = undefined;

  @IsNumber()
  @IsDefined()
  total?: number = undefined;
}

export class StatusData {
  @IsString()
  @IsOptional()
  content?: string = undefined;

  @IsBoolean()
  @IsOptional()
  status?: boolean = undefined;

  @IsEnum(UserStatusExpireAfterTimeEnum)
  @IsDefined()
  expireAfterTime?: UserStatusExpireAfterTimeEnum;

  @IsString()
  @IsDefined()
  createTime?: string = undefined;

  @IsString()
  @IsDefined()
  updateTime?: string = undefined;

  @IsString()
  @IsDefined()
  endTime?: string = undefined;
}

export class Message {
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

  @IsString()
  @IsOptional()
  originalMessage?: string = undefined;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => Reaction)
  reactions?: Reaction;

  @IsArray()
  @IsOptional()
  mentions?: string[] = [];

  @IsEnum(EmbedTypeEnum)
  @IsDefined()
  embed?: EmbedTypeEnum

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

  @IsArray()
  @IsOptional()
  mediaAttachments?: string[] = [];

  @IsString()
  @IsDefined()
  contentLocale?: string = undefined;

  @IsArray()
  @IsDefined()
  contentArguments?: string[] = [];

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

export class Profile {
  @IsString()
  @IsDefined()
  avatar?: string = undefined;

  @IsString()
  @IsDefined()
  displayName?: string = undefined;

  @IsString()
  @IsDefined()
  originalAvatar?: string = undefined;

  @IsEnum(UserAvatarTypeEnum)
  @IsDefined()
  avatarType?: UserAvatarTypeEnum;

  @IsEnum(BadgeEnum)
  @IsDefined()
  userBadgeType?: BadgeEnum;
}

export class PresenceData {
  @IsString()
  @IsDefined()
  lastUpdateTime?: string = undefined;

  @IsNumber()
  @IsDefined()
  lastUpdateInSeconds?: number = undefined;

  @IsNumber()
  @IsDefined()
  presenceState?: number = undefined;
}

export class Role {
  @IsString()
  @IsDefined()
  role?: string = undefined;

  @IsNumber()
  @IsDefined()
  weight?: number = undefined;
}

export class ChannelMetadata {
  @IsNumber()
  @IsDefined()
  unreadCount?: number = undefined;

  @IsString()
  @IsDefined()
  lastMessageId?: string = undefined;

  @IsBoolean()
  @IsDefined()
  notificationStatus?: boolean = undefined;

  @IsEnum(MediaPermissionSettingEnum)
  @IsDefined()
  mediaPermissionSetting?: MediaPermissionSettingEnum;

  @IsEnum(ChannelPermissionEnum)
  @IsDefined()
  permissions?: ChannelPermissionEnum;

  @IsString()
  @IsDefined()
  workspaceId?: string = undefined;

  @IsString()
  @IsDefined()
  channelId?: string = undefined;

  @IsString()
  @IsOptional()
  dmId?: string = undefined;
}

export class Channel {
  @IsString()
  @IsDefined()
  workspaceId?: string = undefined;

  @IsString()
  @IsDefined()
  channelId?: string = undefined;

  @IsString()
  @IsDefined()
  userId?: string = undefined;

  @IsString()
  @IsDefined()
  name?: string = undefined;

  @IsString()
  @IsOptional()
  avatar?: string = undefined;

  @IsBoolean()
  @IsDefined()
  isPrivate?: boolean = undefined;

  @IsEnum(ChannelTypeEnum)
  @IsDefined()
  type?: ChannelTypeEnum;

  @IsString()
  @IsDefined()
  invitationLink?: string = undefined;

  @IsString()
  @IsOptional()
  originalAvatar?: string = undefined;

  @IsNumber()
  @IsDefined()
  totalMembers?: number = undefined;

  @IsEnum(DirectMessageStatusEnum)
  dmStatus?: DirectMessageStatusEnum;

  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => Message)
  pinnedMessage?: Message;

  @IsArray()
  @IsOptional()
  participantIds?: string[] = [];

  @IsString()
  @IsOptional()
  rejectTime?: string = undefined;

  @IsString()
  @IsOptional()
  acceptTime?: string = undefined;

  @IsString()
  @IsDefined()
  createTime?: string = undefined;

  @IsString()
  @IsDefined()
  updateTime?: string = undefined;
}

export class User {
  @IsString()
  @IsDefined()
  userId?: string = undefined;

  @IsString()
  @IsDefined()
  username?: string = undefined;

  @IsString()
  @IsDefined()
  createTime?: string = undefined;

  @IsString()
  @IsDefined()
  updateTime?: string = undefined;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => Profile)
  profile: Profile;

  @IsNumber()
  @IsDefined()
  userType?: number = undefined;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => PresenceData)
  presenceData?: PresenceData;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => StatusData)
  statusData?: StatusData;
}

export class Member {
  @IsString()
  @IsDefined()
  workspaceId?: string = undefined;

  @IsString()
  @IsDefined()
  channelId?: string = undefined;

  @IsString()
  @IsDefined()
  userId?: string = undefined;

  @IsString()
  @IsDefined()
  nickname?: string = undefined;

  @IsString()
  @IsDefined()
  role?: string = undefined;

  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => Role)
  roles: Role[];

  @IsString()
  @IsDefined()
  createTime?: string = undefined;

  @IsString()
  @IsDefined()
  updateTime?: string = undefined;
}

export class IncludesResponse {
  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => User)
  users?: User[];

  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => Message)
  messages?: Message[];

  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => Member)
  members?: Member[];

  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => Channel)
  channels?: Channel[];

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
  @Type(() => Message)
  message?: Message;

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

export class BaseResponse{
  @IsBoolean()
  @IsDefined()
  ok?: boolean = undefined;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => DataResponse)
  data?: DataResponse ;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => IncludesResponse)
  includes?: IncludesResponse;
}
