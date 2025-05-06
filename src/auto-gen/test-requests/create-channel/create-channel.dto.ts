import { IsChecked, IsDefined, IsNotEmpty, } from '../../decorator/general-decorator';
import { IsString, MinLength, MaxLength } from '../../decorator/string-decorator';
import { IsEnum } from '../../decorator/enum-decorator';
import { TypeChannelEnum } from '../../enums/type-channel.enum';

export class CreateChannelDTO {
  @IsDefined({ message: `Could not resolve permission type` })
  @IsChecked({ message: `Invalid channel` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  workspaceId: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MinLength(1)
  @MaxLength(50)
  name: string = '';

  @IsEnum(TypeChannelEnum)
  channelType: number = 1;
}