import { IsString, IsBoolean, IsArray, ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class ChannelDTO {
    @IsString()
    @IsNotEmpty()
    channelId: string;

    @IsString()
    name?: string;

    @IsString()
    @IsNotEmpty()
    ownerId: string;

    @IsArray()
    messageIds: string[];

    @IsArray()
    memberIds?: string[];
}

export class MockChannelDTOResponse {
    @IsBoolean()
    ok: boolean;

    @ValidateNested({ each: true })
    @Type(() => ChannelDTO)
    data: ChannelDTO[];
}