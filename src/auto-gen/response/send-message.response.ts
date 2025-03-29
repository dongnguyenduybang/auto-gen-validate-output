// send-message.response.ts
import { ValidateNested } from 'class-validator';
import { Exclude, Type } from 'class-transformer';
import {
  IsArray,
  IsDefined,
  IsEnum,
  IsOptional,
  IsString,
  ValidIf,
} from '../decorator/dto-decorator';
import {
  BaseResponse,
  Channel as GeneralChannel,
  IncludesResponse as GeneralIncludesResponse,
  Message as GeneralMessage,
  User as GeneralUser,
  DataResponse,
  StatusData,
  Reaction,
  Message
} from './general-response';
import { DirectMessageStatusEnum } from '../enums/direct-message-status.enum';
import { EmbedTypeEnum } from '../enums/embed-type.enum';
import { ChannelTypeEnum } from '../enums/channel-type.enum';

// custom Message
export class Channel extends GeneralChannel {
  @Exclude()
  @IsOptional()
  override avatar?: string;

  @Exclude()
  @IsOptional()
  override originalAvatar?: string;

  @Exclude()
  @IsOptional()
  override rejectTime?: string;

  @Exclude()
  @IsOptional()
  override acceptTime?: string;

  @Exclude()
  @IsOptional()
  override dmStatus?: DirectMessageStatusEnum;

  @Exclude()
  @IsOptional()
  override pinnedMessage?: Message;

  @Exclude()
  @IsOptional()
  override type?: ChannelTypeEnum;
}

// custom User
export class User extends GeneralUser {
  @Exclude()
  override statusData?: StatusData;

}

// custom includes
export class IncludesResponse extends GeneralIncludesResponse {
  @ValidateNested({ each: true })
  @Type(() => User)
  override users: User[];

  @ValidateNested({ each: true })
  @Type(() => Channel)
  override channels: Channel[];
}

// data wrapper
export class SendMessageDataWrapper extends DataResponse {
  @ValidateNested()
  @Type(() => Message)
  message?: Message;
}

// Main Response
export class SendMessageResponse extends BaseResponse<SendMessageDataWrapper>{
  @ValidateNested()
  @Type(() => SendMessageDataWrapper)
  data: SendMessageDataWrapper;

  @ValidateNested()
  @Type(() => IncludesResponse)
  includes: IncludesResponse;

  constructor() {
    super();

    if (this.includes) {
      this.includes = {
        users: this.includes.users || [],
        channels: this.includes.channels || [],
        members: this.includes.members || [],
        channelMetadata: this.includes.channelMetadata || [],
        messages: []
      };
    }
  }
}