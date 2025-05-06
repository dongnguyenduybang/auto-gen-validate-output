import { StartWith } from '../../decorator';

describe('Unit test for decorators StartWith', () => {
  class TestClass {
    @StartWith('name', 'test')
    name: string;
  }
  it('should define metadata startWith correctly', () => {
    const metadataValidIf = Reflect.getMetadata(
      'startWith',
      TestClass.prototype,
      'name',
    );
    expect(metadataValidIf).toEqual({ fieldCheck: 'name', value: 'test' });
  });
  it('should not throw error when accessing metadata', () => {
    expect(() => {
      Reflect.getMetadata('startWith', TestClass.prototype, 'name');
    }).not.toThrow();
  });
});
