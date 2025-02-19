import { IsIn, IsNotEmpty, IsNotNull, IsNumber, Max, Min } from "../../decorator/dto-decorator";

export class MockFriendDTO {
    @IsNumber()
    @IsNotEmpty()
    @IsNotNull()
    @Min(1)
    @Max(200)
    quantity?: number = 0;

    @IsNumber()
    @IsNotEmpty()
    @IsNotNull()
    @IsIn([0,1,2])
    type?: number = 0
}