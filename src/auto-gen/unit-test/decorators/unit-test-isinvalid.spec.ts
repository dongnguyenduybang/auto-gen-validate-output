import { IsInvalid } from '../../decorator';

describe('Unit test for decorators IsInvalid', () => {
  class TestClass {
    @IsInvalid({ message: 'Could not resolve permissions type' })
    workspaceId: string = '';
  }

  it('should define metadata isInvalid correctly', () => {
    const metadataIsInvalid = Reflect.getMetadata(
      'isInvalid',
      TestClass.prototype,
      'workspaceId',
    );
    expect(metadataIsInvalid).toBe(true);
  });

  it('should define metadata isInvalidMessage correctly when message is provided', () => {
    const metadataMessage = Reflect.getMetadata(
      'isInvalidMessage',
      TestClass.prototype,
      'workspaceId',
    );
    expect(metadataMessage).toBe('Could not resolve permissions type');
  });
});
