import { IsDefined, IsInvalid, IsNotEmpty, IsString } from '../../decorator';
import {
  getDecorators,
  generateErrorVariantsForField,
} from '../../utils/dto-helper';

describe('Unit test for function generateErrorVariantsForField()', () => {
  class WorkspaceId {
    @IsDefined({ message: `Could not resolve permission type` })
    @IsInvalid({ message: `Invalid channel` })
    @IsNotEmpty({ message: `Could not resolve permission type` })
    @IsString({ message: `Could not resolve permission type` })
    workspaceId: string;
  }
  const payload = {
    workspaceId: '0',
  };
  it("should return all variants from decorators for field 'workspaceId'", () => {
    const instance = new WorkspaceId();
    const decorators = getDecorators(instance, 'workspaceId');
    const fieldValue = payload.workspaceId;
    const variants = generateErrorVariantsForField(fieldValue, decorators);
    expect(variants.sort()).toEqual(
      [123, undefined, '', 'invalid', '0'].sort(),
    );
  });
});
