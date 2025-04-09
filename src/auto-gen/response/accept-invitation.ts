// accept-invitation.response.ts
import { ValidateNested} from 'class-validator';
import { Exclude, Type } from 'class-transformer';
import { DirectMessageStatusEnum } from '../enums/direct-message-status.enum';
import { IsDefined, IsOptional } from '../decorator/general-decorator';
import { IsArray } from '../decorator/array-decorator';
import { IsBoolean } from '../decorator/boolean-decorator';
import { IsObject } from '../decorator/object-decorator';
import { BaseResponse,
  Channel as GeneralChannel,
  Message as GeneralMessage,
  ChannelMetadata as GeneralChannelMetaData,
  User as GeneralUser,
  Member as GeneralMember,
  Reaction
 } from './general-response';
import { StartWith, ValidIf } from '../decorator/condition-decorator';
import { IsString } from '../decorator/string-decorator';
import { EmbedTypeEnum } from '../enums/embed-type.enum';

export class Message extends GeneralMessage {
  
  @ValidIf('workspaceId', '===', '1')
  @IsString()
  @IsDefined()
  workspaceId?: string;

  @ValidIf('content', '===', 'payload.content')
  @IsString()
  @IsDefined()
  content?: string;

  @ValidIf('channelId', '===', 'payload.channelId')
  @IsString()
  @IsDefined()
  channelId?: string;

  @Exclude()
  originalMessage?: string ;

  @Exclude()
  reactions?: Reaction;

  @Exclude()
  mentions?: string[];

  @Exclude()
  embed?: EmbedTypeEnum

  @Exclude()
  attachmentCount?: number;

  @Exclude()
  mediaAttachments?: string[];

}

export class ChannelMetadata extends GeneralChannelMetaData{
  
}

export class Channel extends GeneralChannel{
  
  @StartWith('invitationLink', 'https://zii.chat/i/')
  @IsString()
  @IsDefined()
  invitationLink?: string;

  @Exclude()
  originalAvatar?: string ;

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

export class User extends GeneralUser {

}

export class Member extends GeneralMember {
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
  @Type(() => Member)
  members?: Member[];

  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => Message)
  message?: Message[];

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
