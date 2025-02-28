import {
  IsNotEmpty,
  IsNumber,
  Max,
  Min,
} from '../../decorator/dto-decorator';

export class MockFriendDTO {
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(200)
  quantity: number = 0;

  @IsNumber()
  @IsNotEmpty({
    message: `
   0: Fake friend request
   1: Fake friend require
   2: Fake friend`,
  })
  @Min(0)
  @Max(2)
  type: number = 0;
}
