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
  User as GeneralUser,
  Member as GeneralMember
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

  // Custom validations
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
  @Type(() => GeneralUser)
  override users: GeneralUser[];

  @ValidateNested({ each: true })
  @Type(() => GeneralMessage)
  override messages: GeneralMessage[];

  @ValidateNested({ each: true })
  @Type(() => GeneralMember)
  override members: GeneralMember[];
}

// Data Wrapper 
export class AcceptInvitationDataWrapper {
  @ValidateNested()
  @Type(() => Channel)
  channel: Channel;

  @ValidateNested()
  @Type(() => ChannelMetadata)
  channelMetadata: ChannelMetadata;
}

// Main Response
export class AcceptInvitationResponse extends BaseResponse {
  @ValidateNested()
  @Type(() => AcceptInvitationDataWrapper)
  data: AcceptInvitationDataWrapper;

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
        channels: [], 
        members: this.includes.members || [],
        channelMetadata: this.includes.channelMetadata || [],
        messages: this.includes.messages || []
      };
    }
  }
}