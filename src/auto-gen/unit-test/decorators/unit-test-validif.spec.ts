import { ValidIf } from '../../decorator';

describe('Unit test for decorators ValidIf', () => {
  class TestClass {
    @ValidIf('fieldCheck', '==', 'value')
    message: string;
  }
  it('should define metadata validIf correctly', () => {
    const metadataValidIf = Reflect.getMetadata(
      'validIf',
      TestClass.prototype,
      'message',
    );
    expect(metadataValidIf).toEqual({
      condition: 'fieldCheck',
      operator: '==',
      condition2: 'value',
    });
  });
  it('should not throw error when accessing metadata', () => {
    expect(() => {
      Reflect.getMetadata('validIf', TestClass.prototype, 'message');
    }).not.toThrow();
  });
});
