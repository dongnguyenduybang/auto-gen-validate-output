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

  // Custom validations
  @IsString()
  @ValidIf('workspaceId', '===', '0')
  override workspaceId?: string;

  @IsString()
  @ValidIf('createTime', '<', 'response.updateTime')
  override createTime?: string;
}

// Custom Channel Metadata
export class ChannelMetadata extends GeneralMetadata {
  @Exclude()
  dmId?: string;

  @Exclude()
  deleteTime?: string;

  // Custom validations
  @IsString()
  @ValidIf('channelId', '===', 'response.channelId')
  override channelId?: string;
}

// Custom Includes
export class IncludesResponse extends GeneralIncludes {
  @ValidateNested({ each: true })
  @Type(() => Channel)
  override channels: Channel[];

  @ValidateNested({ each: true })
  @Type(() => GeneralMessage)
  override messages: GeneralMessage[];
}

// Data Wrapper
export class CreateChannelDataWrapper {
  @ValidateNested()
  @Type(() => Channel)
  channel: Channel;

  @ValidateNested()
  @Type(() => ChannelMetadata)
  channelMetadata: ChannelMetadata;
}

// Main Response
export class CreateChannelResponse extends BaseResponse {
  @ValidateNested()
  @Type(() => CreateChannelDataWrapper)
  data: CreateChannelDataWrapper;

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

    if (this.includes) {
      this.includes = {
        users: this.includes.users || [],
        channels: this.includes.channels?.map(c => Object.assign(new Channel(), c)) || [],
        members: this.includes.members || [],
        channelMetadata: this.includes.channelMetadata || [],
        messages: this.includes.messages || []
      };
    }
  }
}