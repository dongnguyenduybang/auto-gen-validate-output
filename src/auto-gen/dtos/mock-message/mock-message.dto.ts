import {
    IsNotEmpty,
    IsNotNull,
    MinLength,
    IsNumber,
    IsString,
    Max,
    Min,
    IsEnum,
    IsIn,
  } from '../../decorator/dto-decorator';

export class MockMessageDTO {
    @IsString()
    @IsNotEmpty()
    workspaceId?: string = ''

    @IsString()
    @IsNotEmpty()
    channelId?: string = ''

    @IsNumber()
    @IsNotEmpty()
    @IsNotNull()
    @Min(1)
    @Max(100)
    quantity?: number = 0;

}