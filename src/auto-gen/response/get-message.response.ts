import { ValidateNested } from 'class-validator';
import { Exclude, Type } from 'class-transformer';
import {
  IsString,
  ValidIf,
} from '../decorator/dto-decorator';
import {
  BaseResponse,
  Message as GeneralMessage,
  Channel as GeneralChannel,
  ChannelMetadata as GeneralMetadata,
  IncludesResponse as GeneralIncludes,
  User as GeneralUser,
  Member as GeneralMember
} from './general-response';

// Custom Message
export class Message extends GeneralMessage {
  @Exclude()
  reports?: any[];

  @Exclude()
  decoratedAvatar?: string;

  @Exclude()
  videoAvatar?: string;

  @Exclude()
  statusData?: any;

  @IsString()
  @ValidIf('workspaceId', '===', '0')
  override workspaceId?: string;
}

// Custom Channel
export class Channel extends GeneralChannel {
  @Exclude()
  dmStatus?: any;

  @Exclude()
  rejectTime?: string;

  @Exclude()
  acceptTime?: string;
}

// Custom Metadata
export class ChannelMetadata extends GeneralMetadata {
  @Exclude()
  deleteTime?: string;

  @Exclude()
  dmId?: string;
}

// Custom Includes
export class IncludesResponse extends GeneralIncludes {
  @ValidateNested({ each: true })
  @Type(() => Message)
  override messages: Message[];

  @ValidateNested({ each: true })
  @Type(() => Channel)
  override channels: Channel[];

  @ValidateNested({ each: true })
  @Type(() => GeneralUser)
  override users: GeneralUser[];

  @ValidateNested({ each: true })
  @Type(() => GeneralMember)
  override members: GeneralMember[];
}

// Data Wrapper
export class GetMessageDataWrapper {
  @ValidateNested()
  @Type(() => Message)
  message: Message;
}

// Main Response
export class GetMessageResponse extends BaseResponse{
  @ValidateNested()
  @Type(() => GetMessageDataWrapper)
  data: GetMessageDataWrapper;

  @ValidateNested()
  @Type(() => IncludesResponse)
  includes: IncludesResponse;

  constructor() {
    super();
    
    if (this.data?.message) {
      this.data.message = Object.assign(new Message(), this.data.message);
    }

    if (this.includes) {
      this.includes = {
        users: this.includes.users?.map(u => Object.assign(new GeneralUser(), u)) || [],
        channels: this.includes.channels?.map(c => Object.assign(new Channel(), c)) || [],
        members: this.includes.members || [],
        channelMetadata: this.includes.channelMetadata?.map(m => Object.assign(new ChannelMetadata(), m)) || [],
        messages: []
      };
    }
  }
}