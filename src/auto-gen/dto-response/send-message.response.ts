import {  ValidateNested} from 'class-validator';
import { Type } from 'class-transformer';
import { IsArray,ValidIf, IsBoolean, IsString, IsNumber, IsObject } from '../decorator/dto-decorator';

export class Message {
  @IsString()
  workspaceId: string;

  @IsString()
  @ValidIf("channelId", "channelId")
  channelId: string;

  @IsString()
  messageId: string;

  @IsString()
  userId: string;

  @IsString()
  @ValidIf("content", "content")
  content: string;

  @IsNumber()
  messageType: number;

  @IsNumber()
  messageStatus: number;

  @IsNumber()
  attachmentType: number;

  @IsBoolean()
  isThread: boolean;

  @IsNumber()
  reportCount: number;

  @IsBoolean()
  isReported: boolean;

  @IsNumber()
  attachmentCount: number;

  @IsString()
  contentLocale: string;

  @IsBoolean()
  isPinned: boolean;

  @IsString()
  @ValidIf("createTime", "updateTime")
  createTime: string;

  @IsString()
  updateTime: string;

  @IsString()
  @ValidIf("ref", "ref")
  ref: string;
}

export class Profile {
  @IsString()
  avatar: string;

  @IsString()
  displayName: string;

  @IsString()
  originalAvatar: string;

  @IsNumber()
  avatarType: number;

  @IsNumber()
  userBadgeType: number;
}

export class PresenceData {
  @IsString()
  lastUpdateTime: string;

  @IsNumber()
  lastUpdateInSeconds: number;

  @IsNumber()
  presenceState: number;
}

export class Role {
  @IsString()
  role: string;

  @IsNumber()
  weight: number;
}

export class ChannelMetadata {
  @IsNumber()
  unreadCount: number;

  @IsString()
  lastMessageId: string;

  @IsBoolean()
  notificationStatus: boolean;

  @IsNumber()
  mediaPermissionSetting: number;

  @IsString()
  @ValidIf("workspaceId", "workspaceId")
  workspaceId: string;

  @IsString()
  @ValidIf("channelId", "channelId")
  channelId: string;
}

export class ChannelDTO {
  @IsString()
  @ValidIf("workspaceId", "workspaceId")
  workspaceId: string;

  @IsString()
  @ValidIf("channelId", "channelId")
  channelId: string;

  @IsString()
  userId: string;

  @IsString()
  name: string;

  @IsBoolean()
  isPrivate: boolean;

  @IsNumber()
  type: number;

  @IsString()
  invitationLink: string;

  @IsNumber()
  totalMembers: number;

  @IsString()
  @ValidIf("createTime", "updateTime")
  createTime: string;

  @IsString()
  updateTime: string;
}

export class User {
  @IsString()
  userId: string;

  @IsString()
  username: string;

  @IsString()
  @ValidIf("createTime", "updateTime")
  createTime: string;

  @IsString()
  updateTime: string;

  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => Profile)
  profile: Profile;

  @IsNumber()
  userType: number;

  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => PresenceData)
  presenceData: PresenceData;
}

export class Member {
  @IsString()
  @ValidIf("workspaceId", "workspaceId")
  workspaceId: string;

  @IsString()
  @ValidIf("channelId", "channelId")
  channelId: string;

  @IsString()
  userId: string;

  @IsString()
  nickname: string;

  @IsString()
  role: string;

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => Role)
  roles: Role[];

  @IsString()
  @ValidIf("createTime", "updateTime")
  createTime: string;

  @IsString()
  updateTime: string;
}

export class IncludesMessage {

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => User)
  users: User[];

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => ChannelDTO)
  channels: ChannelDTO[];

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => Member)
  members: Member[];

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => ChannelMetadata)
  channelMetadata: ChannelMetadata[];
}

export class DataMessage {

  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => Message)
  message: Message;
}

export class SendMessageResponse {
  @IsBoolean()
  ok: boolean;

  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => DataMessage)
  data: DataMessage;

  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => IncludesMessage)
  includes: IncludesMessage;
}