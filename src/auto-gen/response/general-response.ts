import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ChannelTypeEnum } from '../enums/channel-type.enum';
import { MessageTypeEnum } from '../enums/message-type.enum';
import { AttachmentTypeEnum } from '../enums/attachment-type.enum';
import { UserAvatarTypeEnum } from '../enums/user-avatar-type.enum';
import { BadgeEnum } from '../enums/badge.enum';
import { DirectMessageStatusEnum } from '../enums/direct-message-status.enum';
import { MediaPermissionSettingEnum } from '../enums/media-permission-setting.enum';
import { UserStatusExpireAfterTimeEnum } from '../enums/user-status-expire-after-time.enum';
import { EmbedTypeEnum } from '../enums/embed-type.enum';
import { IsBoolean } from '../decorator/boolean-decorator';
import { IsDefined, IsOptional } from '../decorator/general-decorator';
import { IsNumber } from '../decorator/number-decorator';
import { IsString } from '../decorator/string-decorator';
import { IsEnum } from '../decorator/enum-decorator';
import { IsObject } from '../decorator/object-decorator';
import { IsArray } from '../decorator/array-decorator';

export class Dimensions {
  @IsNumber()
  height: number;

  @IsNumber()
  width: number;
}
export class FileMetadata {
  @IsString()
  filename: string;

  @IsNumber()
  filesize: number;

  @IsString()
  extension: string;

  @IsString()
  mimetype: string;

  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => FileMetadata)
  dimensions: FileMetadata;

  @IsNumber()
  duration: number;
}

export class LinkObject {
  @IsEnum(AttachmentTypeEnum)
  attachmentType: AttachmentTypeEnum;

  @IsString()
  url: string;

  @IsOptional()
  shortUrl: string;
}

export class StickerObject {
  @IsString()
  collectionId: string;

  @IsString()
  stickerId: string;

  @IsEnum(AttachmentTypeEnum)
  attachmentType: AttachmentTypeEnum;

  @IsString()
  stickerUrl: string;

  @IsString()
  attachmentId: string;

  @IsString()
  fileRef: string;
}

export class MediaObject {
  @IsString()
  fileId: string;

  @IsEnum(AttachmentTypeEnum)
  attachmentType: AttachmentTypeEnum;

  @IsString()
  fileUrl: string;

  @IsString()
  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => FileMetadata)
  fileMetadata: FileMetadata;

  @IsString()
  thumbnailUrl: string;

  @IsString()
  audioMetadata: string;

  @IsString()
  fileRef: string;

  @IsString()
  attachmentId: string;

  @IsString()
  channelId: string;

  @IsString()
  userId: string;

  @IsString()
  messageId: string;
}

export class MediaAttachment {
  @IsOptional()
  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => LinkObject)
  link: LinkObject;

  @IsOptional()
  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => StickerObject)
  sticker: StickerObject;

  @IsOptional()
  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => MediaObject)
  photo: MediaObject;

  @IsOptional()
  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => MediaObject)
  audio: MediaObject;

  @IsOptional()
  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => MediaObject)
  video: MediaObject;

  @IsOptional()
  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => MediaObject)
  voiceMessage: MediaObject;

  @IsOptional()
  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => MediaObject)
  videoMessage: MediaObject;

  @IsOptional()
  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => MediaObject)
  mediaMessage: MediaObject;

  @IsOptional()
  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => MediaObject)
  file: MediaObject;
}

export class OriginalMessage {
  @IsString()
  @IsDefined()
  messageId: string;

  @IsString()
  @IsDefined()
  content: string;

  @IsDefined()
  @IsEnum(AttachmentTypeEnum)
  attachmentType: AttachmentTypeEnum;

  @IsString()
  mediaAttachments: MediaAttachment;

  @IsEnum(MessageTypeEnum)
  messageType: MessageTypeEnum;

  @IsString()
  contentLocale: string;

  @IsString()
  contentArguments: string[];

  @IsString()
  userId: string;

  @IsString()
  editTime: string;

  @IsString()
  createTime: string;

  @IsString()
  updateTime: string;
}
export class Embed {
  @IsString()
  meta: string;

  @IsString()
  provider: string;

  @IsString()
  url: string;

  @IsEnum(EmbedTypeEnum)
  type: EmbedTypeEnum;

  @IsOptional()
  embed_data?: string;

  @IsOptional()
  invitation_data?: string;

  @IsOptional()
  location_data?: string;
}
export class Reaction {
  @IsBoolean()
  @IsDefined()
  isReacted?: boolean;

  @IsNumber()
  @IsDefined()
  total?: number;
}

export class StatusData {
  @IsString()
  @IsOptional()
  content?: string;

  @IsBoolean()
  @IsOptional()
  status?: boolean;

  @IsEnum(UserStatusExpireAfterTimeEnum)
  @IsDefined()
  expireAfterTime?: UserStatusExpireAfterTimeEnum;

  @IsString()
  @IsDefined()
  createTime?: string;

  @IsString()
  @IsDefined()
  updateTime?: string;

  @IsString()
  @IsDefined()
  endTime?: string;
}

export class Message {
  @IsString()
  @IsDefined()
  workspaceId?: string;

  @IsString()
  @IsDefined()
  channelId?: string;

  @IsString()
  @IsDefined()
  messageId?: string;

  @IsString()
  @IsDefined()
  userId?: string;

  @IsString()
  @IsDefined()
  content?: string;

  @IsEnum(MessageTypeEnum)
  @IsDefined()
  messageType?: MessageTypeEnum;

  @IsNumber()
  @IsDefined()
  messageStatus?: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => OriginalMessage)
  originalMessage?: OriginalMessage;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => Reaction)
  reactions?: Reaction;

  @IsArray()
  @IsOptional()
  mentions?: string[] = [];

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => Embed)
  embed?: Embed;

  @IsEnum(AttachmentTypeEnum)
  @IsDefined()
  attachmentType?: AttachmentTypeEnum;

  @IsBoolean()
  @IsDefined()
  isThread?: boolean;

  @IsNumber()
  @IsDefined()
  reportCount?: number;

  @IsBoolean()
  @IsDefined()
  isReported?: boolean;

  @IsNumber()
  @IsDefined()
  attachmentCount?: number;

  @IsArray()
  @IsOptional()
  mediaAttachments?: string[] = [];

  @IsString()
  @IsDefined()
  contentLocale?: string;

  @IsArray()
  @IsDefined()
  contentArguments?: string[] = [];

  @IsBoolean()
  @IsDefined()
  isPinned?: boolean;

  @IsString()
  @IsDefined()
  createTime?: string;

  @IsString()
  @IsDefined()
  updateTime?: string;

  @IsString()
  @IsDefined()
  @IsOptional()
  ref?: string;
}

export class Profile {
  @IsString()
  @IsDefined()
  avatar?: string;

  @IsString()
  @IsDefined()
  displayName?: string;

  @IsString()
  @IsDefined()
  originalAvatar?: string;

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
  lastUpdateTime?: string;

  @IsNumber()
  @IsDefined()
  lastUpdateInSeconds?: number;

  @IsNumber()
  @IsDefined()
  presenceState?: number;
}

export class Role {
  @IsString()
  @IsDefined()
  role?: string;

  @IsNumber()
  @IsDefined()
  weight?: number;
}

export class ChannelMetadata {
  @IsNumber()
  @IsDefined()
  unreadCount?: number;

  @IsString()
  @IsDefined()
  lastMessageId?: string;

  @IsBoolean()
  @IsDefined()
  notificationStatus?: boolean;

  @IsEnum(MediaPermissionSettingEnum)
  @IsDefined()
  mediaPermissionSetting?: MediaPermissionSettingEnum;

  // @IsEnum(ChannelPermissionEnum)
  // @IsDefined()
  // permissions?: ChannelPermissionEnum

  @IsString()
  @IsDefined()
  workspaceId?: string;

  @IsString()
  @IsDefined()
  channelId?: string;

  @IsOptional()
  @IsString()
  dmId?: string;
}

export class Channel {
  @IsString()
  @IsDefined()
  workspaceId?: string;

  @IsString()
  @IsDefined()
  channelId?: string;

  @IsString()
  @IsDefined()
  userId?: string;

  @IsString()
  @IsDefined()
  name?: string;

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsBoolean()
  @IsDefined()
  isPrivate?: boolean;

  @IsEnum(ChannelTypeEnum)
  @IsDefined()
  type?: ChannelTypeEnum;

  @IsString()
  @IsDefined()
  invitationLink?: string;

  @IsString()
  @IsOptional()
  originalAvatar?: string;

  @IsNumber()
  @IsDefined()
  totalMembers?: number;

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
  rejectTime?: string;

  @IsString()
  @IsOptional()
  acceptTime?: string;

  @IsString()
  @IsDefined()
  createTime?: string;

  @IsString()
  @IsDefined()
  updateTime?: string;
}

export class User {
  @IsString()
  @IsDefined()
  userId?: string;

  @IsString()
  @IsDefined()
  username?: string;

  @IsString()
  @IsDefined()
  createTime?: string;

  @IsString()
  @IsDefined()
  updateTime?: string;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => Profile)
  profile: Profile;

  @IsNumber()
  @IsDefined()
  userType?: number;

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
  workspaceId?: string;

  @IsString()
  @IsDefined()
  channelId?: string;

  @IsString()
  @IsDefined()
  userId?: string;

  @IsString()
  @IsDefined()
  nickname?: string;

  @IsString()
  @IsDefined()
  role?: string;

  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => Role)
  roles: Role[];

  @IsString()
  @IsDefined()
  createTime?: string;

  @IsString()
  @IsDefined()
  updateTime?: string;
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

export class BaseResponse {
  @IsBoolean()
  @IsDefined()
  ok?: boolean;

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
