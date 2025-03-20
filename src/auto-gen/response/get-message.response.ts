/* eslint-disable prettier/prettier */
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsObject,
} from '../decorator/dto-decorator';
import { BaseResponse, IncludesResponse } from './general-response';

export class GetMessageResponse extends BaseResponse {

  @ValidateNested({ each: true })
  @IsObject()
  @IsDefined()
  @Type(() => IncludesResponse)
  includes: IncludesResponse;

  constructor() {
    super();

    if (this.includes) {
      const { users, members, channels, channelMetadata } = this.includes;

      this.includes = {
        users,
        members,
        channels,
        channelMetadata,
        messages: [],
      } as IncludesResponse;
    }
  }
}
