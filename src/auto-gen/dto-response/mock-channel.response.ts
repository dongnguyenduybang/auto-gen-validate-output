
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsDefined, IsNotEmpty, IsString, StartWith, ValidIf } from '../decorator/dto-decorator';


export class MockChannelResponse {
    @IsBoolean()
    ok: boolean;

    @IsArray()
    @Type(() => ChannelDTO)
    data: ChannelDTO[];
}


export class ChannelDTO {

    @IsString()
    channelId: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @StartWith('prefix')
    @ValidIf('typeChannel', '0')
    name?: string;

    @IsString()
    ownerId: string;

    @IsArray()
    messageIds: string[];

    @IsArray()
    memberIds?: string[];
}

