import { ValidateNested } from 'class-validator';
import { Exclude, Type } from 'class-transformer';
import {
  IsString,
  ValidIf,
} from '../decorator/dto-decorator';
import {
  BaseResponse,
  Channel as GeneralChannel,
  ChannelMetadata as GeneralMetadata,
  IncludesResponse as GeneralIncludes,
  Message as GeneralMessage,
} from './general-response';

// Custom Channel
export class Channel extends GeneralChannel {
  @Exclude()
  avatar?: string;

  @Exclude()
  originalAvatar?: string;

  @Exclude()
  pinnedMessage?: any;

  @Exclude()
  dmStatus?: any;

  @Exclude()
  rejectTime?: string;

  @Exclude()
  acceptTime?: string;

  // Validation rules
  @IsString()
  @ValidIf('channelId', '===', 'payload.channelId')
  override channelId?: string;

  @IsString()
  @ValidIf('createTime', '<', 'response.updateTime')
  override createTime?: string;
}

// Custom Channel Metadata
export class ChannelMetadata extends GeneralMetadata {
  @Exclude()
  dmId?: string;

  @Exclude()
  dmStatus?: any;

  @Exclude()
  deleteTime?: string;

  // Validation rules
  @IsString()
  @ValidIf('channelId', '===', 'response.channelId')
  override channelId?: string;
}

// Custom Message 
export class Message extends GeneralMessage {
  @Exclude()
  reactions?: any;

  @Exclude()
  originalMessage?: any;

  @Exclude()
  reports?: any[];
}

// Custom Includes
export class IncludesResponse extends GeneralIncludes {
  @ValidateNested({ each: true })
  @Type(() => Channel)
  override channels: Channel[];

  @ValidateNested({ each: true })
  @Type(() => Message)
  override messages: Message[];
}

// Data Wrapper 
export class GetChannelDataWrapper {
  @ValidateNested()
  @Type(() => Channel)
  channel: Channel;

  @ValidateNested()
  @Type(() => ChannelMetadata)
  channelMetadata: ChannelMetadata;
}

// Main Response Class
export class GetChannelResponse extends BaseResponse{
  @ValidateNested()
  @Type(() => GetChannelDataWrapper)
  data: GetChannelDataWrapper;

  @ValidateNested()
  @Type(() => IncludesResponse)
  includes: IncludesResponse;

  constructor() {
    super();
    
    if (this.data?.channel) {
      this.data.channel = Object.assign(new Channel(), this.data.channel);
    }
    
    if (this.data?.channelMetadata) {
      this.data.channelMetadata = Object.assign(new ChannelMetadata(), this.data.channelMetadata);
    }

    // Cleanup includes
    if (this.includes) {
      this.includes = {
        users: this.includes.users || [],
        channels: this.includes.channels || [],
        members: this.includes.members || [],
        channelMetadata: this.includes.channelMetadata || [],
        messages: this.includes.messages?.map(m => Object.assign(new Message(), m)) || []
      };
    }
  }
}