import { ValidateNested, IsDefined, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { BaseResponse, IncludesResponse, Channel, ChannelMetadata } from './general-response';

export class AcceptInvitationDataWrapper {
  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => Channel)
  channel: Channel;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => ChannelMetadata)
  channelMetadata: ChannelMetadata;
}

export class AcceptInvitationResponse extends BaseResponse {
  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => AcceptInvitationDataWrapper)
  data: AcceptInvitationDataWrapper;

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => IncludesResponse)
  includes: IncludesResponse;

  constructor() {
    super();

    // Fix logic trong constructor
    if (this.includes) {
      this.includes = {
        ...this.includes,
        channels: [] // Thêm channels array trống nếu cần
      };
    }

    if (this.data) {
      // Giữ nguyên cả channel và channelMetadata
      this.data = {
        channel: this.data.channel,
        channelMetadata: this.data.channelMetadata
      } as AcceptInvitationDataWrapper;
    }
  }
}