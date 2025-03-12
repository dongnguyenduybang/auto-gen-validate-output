import {  ValidateNested} from 'class-validator';
import { Type } from 'class-transformer';
import { IsDefined, IsArray,ValidIf, IsBoolean, IsString, IsNumber, IsObject, IsEnum, IsOptional } from '../decorator/dto-decorator';
import { MessageTypeEnum } from '../enums/message-type.enum';
import { MessageStatusEnum } from '../enums/message-status.enum';
import { AttachmentTypeEnum } from '../enums/attachment-type.enum';
import { UserAvatarTypeEnum } from '../enums/user-avatar-type.enum';
import { BadgeEnum } from '../enums/badge.enum';
import { UserTypeEnum } from '../enums/user-type.enum';
import { PresenceStateEnum } from '../enums/presence-state.enum';
import { ChannelTypeEnum } from '../enums/channel-type.enum';
import { MediaPermissionSettingEnum } from '../enums/media-permission-setting.enum';

export class MediaAttachments {

    @IsString()
    @IsDefined()
    @ValidIf("collectionId")
    collectionId?: string = undefined

    @IsString()
    @IsDefined()
    @ValidIf("stickerId", "stickerId")
    stickerId?: string = undefined

    @IsDefined()
    @IsEnum(AttachmentTypeEnum)
    @ValidIf("attachmentType", "7")
    attachmentType?: AttachmentTypeEnum

    @IsString()
    @IsDefined()
    stickerUrl?: string = undefined

}

export class MediaAttachmentItem {

    @ValidateNested()
    @IsObject()
    @Type(() => MediaAttachments)
    sticker: MediaAttachments;
}

export class Message {
  @IsString()
  @IsDefined()
  @ValidIf("workspaceId", "workspaceId")
  workspaceId?: string = undefined;

  @IsString()
  @IsDefined()
  @ValidIf("channelId", "channelId")
  channelId?: string = undefined;

  @IsString()
  @IsDefined()
  messageId?: string = undefined;

  @IsString()
  @IsDefined()
  userId?: string = undefined;

  @IsString()
  @IsDefined()
  @ValidIf("content", "content")
  content?: string = undefined;

  @IsDefined()
  @IsEnum(MessageTypeEnum)
  messageType?: MessageTypeEnum = undefined;

  @IsDefined()
  @IsEnum(MessageStatusEnum)
  messageStatus?: MessageStatusEnum = undefined;

  @IsDefined()
  @IsEnum(AttachmentTypeEnum)
  attachmentType?: AttachmentTypeEnum = undefined;

  @IsBoolean()
  @IsDefined()
  isThread?: string = undefined;

  @IsNumber()
  @IsDefined()
  reportCount?: string = undefined;

  @IsBoolean()
  @IsDefined()
  isReported?: string = undefined;

  @IsNumber()
  @IsDefined()
  attachmentCount?: string = undefined;

  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => MediaAttachmentItem)
  mediaAttachments: MediaAttachmentItem[];

  @IsString()
  @IsDefined()
  contentLocale?: string = undefined;

  @IsBoolean()
  @IsDefined()
  isPinned?: string = undefined;

  @IsString()
  @IsDefined()
  @ValidIf("createTime", "updateTime")
  createTime?: string = undefined;

  @IsString()
  @IsDefined()
  @ValidIf("updateTime", new Date().toISOString())
  updateTime?: string = undefined;

  @IsString()
  @ValidIf("ref", "{{ref}}")
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

  @IsDefined()
  @IsEnum(UserAvatarTypeEnum)
  avatarType?: UserAvatarTypeEnum = undefined;

  @IsDefined()
  @IsEnum(BadgeEnum)
  userBadgeType?: BadgeEnum = undefined;
}

export class PresenceData {
  @IsString()
  @IsDefined()
  @ValidIf("updateTime", new Date().toISOString())
  lastUpdateTime?: string = undefined;

  @IsNumber()
  @IsDefined()
  lastUpdateInSeconds?: string = undefined;

  @IsDefined()
  @IsEnum(PresenceStateEnum)
  presenceState?: PresenceStateEnum = undefined;
}

export class Role {
  @IsString()
  @IsDefined()
  role?: string = undefined;

  @IsNumber()
  @IsDefined()
  weight?: string = undefined;
}

export class ChannelMetadata {
  @IsNumber()
  @IsDefined()
  unreadCount?: string = undefined;

  @IsString()
  @IsDefined()
  lastMessageId?: string = undefined;

  @IsBoolean()
  @IsDefined()
  notificationStatus?: string = undefined;

  @IsDefined()
  @IsEnum(MediaPermissionSettingEnum)
  mediaPermissionSetting?: MediaPermissionSettingEnum = undefined;

  @IsString()
  @IsDefined()
  @ValidIf("workspaceId", "workspaceId")
  workspaceId?: string = undefined;

  @IsString()
  @IsDefined()
  @ValidIf("channelId", "channelId")
  channelId?: string = undefined;
}

export class ChannelDTO {
  @IsString()
  @IsDefined()
  @ValidIf("workspaceId", "workspaceId")
  workspaceId?: string = undefined;

  @IsString()
  @IsDefined()
  @ValidIf("channelId", "channelId")
  channelId?: string = undefined;

  @IsString()
  @IsDefined()
  userId?: string = undefined;

  @IsString()
  @IsDefined()
  name?: string = undefined;

  @IsBoolean()
  @IsDefined()
  isPrivate?: string = undefined;

  @IsDefined()
  @IsEnum(ChannelTypeEnum)
  type?: ChannelTypeEnum = undefined;

  @IsString()
  @IsDefined()
  invitationLink?: string = undefined;

  @IsNumber()
  @IsDefined()
  totalMembers?: string = undefined;

  @IsString()
  @IsDefined()
  @ValidIf("createTime", "updateTime")
  createTime?: string = undefined;

  @IsString()
  @IsDefined()
  @ValidIf("updateTime", new Date().toISOString())
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
  @ValidIf("createTime", "updateTime")
  createTime?: string = undefined;

  @IsString()
  @IsDefined()
  @ValidIf("updateTime", new Date().toISOString())
  updateTime?: string = undefined;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => Profile)
  profile: Profile;

  @IsDefined()
  @IsEnum(UserTypeEnum)
  userType?: UserTypeEnum = undefined;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => PresenceData)
  presenceData: PresenceData;
}

export class Member {

  @IsString()
  @IsDefined()
  @ValidIf("workspaceId", "workspaceId")
  workspaceId?: string = undefined;

  @IsString()
  @IsDefined()
  @ValidIf("channelId", "channelId")
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
  @ValidIf("createTime", "updateTime")
  createTime?: string = undefined;

  @IsString()
  @IsDefined()
  @ValidIf("updateTime", new Date().toISOString())
  updateTime?: string = undefined;
}

export class IncludesMessage {

  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => User)
  users: User[];

  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => ChannelDTO)
  channels: ChannelDTO[];

  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => Member)
  members: Member[];

  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => ChannelMetadata)
  channelMetadata: ChannelMetadata[];
}

export class DataMessage {

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => Message)
  message: Message;
}

export class SendMessageStickerResponse {
  @IsBoolean()
  @IsDefined()
  ok?: boolean = undefined;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => DataMessage)
  data: DataMessage;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => IncludesMessage)
  includes: IncludesMessage;
}