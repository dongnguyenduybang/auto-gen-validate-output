import {  ValidateNested } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { IsEnum,IsDefined, IsArray, ValidIf, IsBoolean, IsString, IsNumber, IsObject, IsOptional } from '../decorator/dto-decorator';
import { EmbedTypeEnum } from '../enums/embed-type.enum';
import { AttachmentTypeEnum } from '../enums/attachment-type.enum';

export class LocationData {
  @IsString()
  @IsDefined()
  latitude?: string = undefined;

  @IsString()
  @IsDefined()
  longitude?: string = undefined;
}

export class EmbedItem {

  @IsEnum(EmbedTypeEnum)
  @IsDefined()
  @ValidIf("type", "6")
  type?: EmbedTypeEnum;

  @ValidateNested()
  @IsObject()
  @Type(() => LocationData)
  locationData?: LocationData;

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
  @IsOptional()
  @ValidIf("content", "content")
  content?: string = undefined;

  @IsNumber()
  @IsDefined()
  messageType?: number = undefined;

  @IsNumber()
  @IsDefined()
  messageStatus?: number = undefined;

  @ValidateNested()
  @IsArray()
  @IsDefined()
  @Type(() => EmbedItem)
  embed?: EmbedItem[]

  @IsEnum(AttachmentTypeEnum)
  @IsDefined()
  @ValidIf("attachmentType", "10")
  attachmentType?: AttachmentTypeEnum

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

  @IsString()
  @IsDefined()
  contentLocale?: string = undefined;

  @IsBoolean()
  @IsDefined()
  isPinned?: boolean = undefined;

  @IsString()
  @IsDefined()
  @ValidIf("createTime", "updateTime")
  createTime?: string = undefined;

  @IsString()
  @IsDefined()
  @ValidIf("updateTime", "editTime")
  updateTime?: string = undefined;

  @IsString()
  @IsOptional()
  @ValidIf("ref", "ref")
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

  @IsNumber()
  @IsDefined()
  avatarType?: string = undefined;

  @IsNumber()
  @IsDefined()
  userBadgeType?: string = undefined;
}

export class PresenceData {
  @IsString()
  @IsDefined()
  // @ValidIf("updateTime", new Date().toISOString())
  lastUpdateTime?: string = undefined;

  @IsNumber()
  @IsDefined()
  lastUpdateInSeconds?: string = undefined;

  @IsNumber()
  @IsDefined()
  presenceState?: string = undefined;
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

  @IsNumber()
  @IsDefined()
  mediaPermissionSetting?: string = undefined;

  @IsString()
  @IsDefined()
  // @ValidIf("workspaceId", "workspaceId")
  workspaceId?: string = undefined;

  @IsString()
  @IsDefined()
  // @ValidIf("channelId", "channelId")
  channelId?: string = undefined;
}

export class ChannelDTO {
  @IsString()
  @IsDefined()
  // @ValidIf("workspaceId", "workspaceId")
  workspaceId?: string = undefined;

  @IsString()
  @IsDefined()
  // @ValidIf("channelId", "channelId")
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

  @IsNumber()
  @IsDefined()
  type?: string = undefined;

  @IsString()
  @IsDefined()
  invitationLink?: string = undefined;

  @IsNumber()
  @IsDefined()
  totalMembers?: string = undefined;

  @IsString()
  @IsDefined()
  // @ValidIf("createTime", "updateTime")
  createTime?: string = undefined;

  @IsString()
  @IsDefined()
  // @ValidIf("updateTime", new Date().toISOString())
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
  // @ValidIf("createTime", "updateTime")
  createTime?: string = undefined;

  @IsString()
  @IsDefined()
  // @ValidIf("updateTime", new Date().toISOString())
  updateTime?: string = undefined;

  @ValidateNested()
  @IsObject()
  @IsDefined()
  @Type(() => Profile)
  profile: Profile;

  @IsNumber()
  @IsDefined()
  userType?: string = undefined;

  @ValidateNested()
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

  @ValidateNested()
  @IsArray()
  @IsDefined()
  @Type(() => Role)
  roles: Role[];

  @IsString()
  @IsDefined()
  // @ValidIf("createTime", "updateTime")
  createTime?: string = undefined;

  @IsString()
  @IsDefined()
  // @ValidIf("updateTime", new Date().toISOString)
  updateTime?: string = undefined;
}

export class IncludesMessage {

  @ValidateNested()
  @IsArray()
  @IsDefined()
  @Type(() => User)
  users: User[];

  @ValidateNested()
  @IsArray()
  @IsDefined()
  @Type(() => ChannelDTO)
  channels: ChannelDTO[];

  @ValidateNested()
  @IsArray()
  @IsDefined()
  @Type(() => Member)
  members: Member[];

  @ValidateNested()
  @IsArray()
  @IsDefined()
  @Type(() => ChannelMetadata)
  channelMetadata: ChannelMetadata[];
}

export class DataMessage {

  @ValidateNested()
  @IsObject()
  @IsDefined()
  @Type(() => Message)
  message: Message;
}

export class SendLocationResponse {
  @IsBoolean()
  @IsDefined()
  ok?: boolean = undefined;

  @ValidateNested()
  @IsObject()
  @IsDefined()
  @Type(() => DataMessage)
  data: DataMessage;

  @ValidateNested()
  @IsObject()
  @IsDefined()
  @Type(() => IncludesMessage)
  includes: IncludesMessage;
}