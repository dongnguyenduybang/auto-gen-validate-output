import { ValidateNested } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { IsDefined, IsArray, ValidIf, IsBoolean, IsString, IsNumber, IsObject } from '../decorator/dto-decorator';

export class Reaction {

  @IsBoolean()
  @IsDefined()
  isReacted?: boolean = undefined;

  @IsNumber()
  @IsDefined()
  total?: number = undefined;
}
export class Message {
  @IsString()
  @IsDefined()
  @ValidIf("workspaceId")
  workspaceId?: string = undefined;

  @IsString()
  @IsDefined()
  @ValidIf("channelId")
  channelId?: string = undefined;

  @IsString()
  @IsDefined()
  @ValidIf("messageId")
  messageId?: string = undefined;

  @IsString()
  @IsDefined()
  userId?: string = undefined;

  @IsString()
  @IsDefined()
  @ValidIf("content", "content")
  content?: string = undefined;

  @IsNumber()
  @IsDefined()
  messageType?: string = undefined;

  @IsNumber()
  @IsDefined()
  messageStatus?: string = undefined;

  @IsNumber()
  @IsDefined()
  attachmentType?: string = undefined;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => Reaction)
  reactions: Reaction

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
  @ValidIf("updateTime", new Date().toISOString)
  updateTime?: string = undefined;
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
  @ValidIf("updateTime", new Date().toISOString())
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

  @IsNumber()
  @IsDefined()
  userType?: string = undefined;

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
  @ValidIf("updateTime", new Date().toISOString)
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

export class RevokeMessageReactionResponse {
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