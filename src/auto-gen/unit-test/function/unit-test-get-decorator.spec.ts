import { getDecorators } from '../../utils/dto-helper';
import {
  IsDefined,
  IsInvalid,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from '../../decorator';
import 'reflect-metadata';

class CreateChannel {
  @IsDefined({ message: `Could not resolve permission type` })
  @IsInvalid({ message: `Invalid channel` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  workspaceId: string;

  @IsDefined()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;
}

describe('Unit test for function getDecorators()', () => {
  it("should return correct metadata for a property 'workspaceId' ", () => {
    const decorators = getDecorators(CreateChannel.prototype, 'workspaceId');
    expect(decorators).toMatchObject({
      type: 'string',
      isStringMessage: 'Could not resolve permission type',
      isNotEmpty: true,
      isNotEmptyMessage: 'Could not resolve permission type',
      isInvalid: true,
      isInvalidMessage: 'Invalid channel',
      isDefined: true,
      isDefinedMessage: 'Could not resolve permission type',
    });
  });

  it("should return correct metadata for a property 'name' ", () => {
    const decorators = getDecorators(CreateChannel.prototype, 'name');
    expect(decorators).toMatchObject({
      type: 'string',
      maxLength: 50,
      minLength: 3,
      isDefined: true,
    });
  });
});
