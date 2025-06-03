import {
  IsDefined,
  IsNotEmpty,
  IsInvalid,
  IsString,
  IsArray,
  MinArray,
} from '../../../../decorator';

export class ForwardMessageChannelDTO {
  @IsDefined({ message: `Could not resolve permission type` })
  @IsInvalid({ message: `Invalid channel` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  workspaceId: string = '';

  @IsDefined({ message: `Could not resolve permission type` })
  @IsInvalid({ message: `Invalid channel` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  channelId: string = '';

  @IsArray({
    decorators: [
      { name: 'IsString'},
      { name: 'IsULID', message: `invalid` },
      { name: 'IsUnique' },
      { name: 'IsNotNull' },
      { name: 'MinArrayItem', params: 1 },
    ],
  })
  @IsDefined()
  @MinArray(1)
  originalMessageIds: string[] = [];

}
