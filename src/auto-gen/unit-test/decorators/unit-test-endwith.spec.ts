import { EndWith } from '../../decorator';

describe('Unit test for decorators EndWith', () => {
  class TestClass {
    @EndWith('name', 'test')
    name: string;
  }
  it('should define metadata endWith correctly', () => {
    const metadataValidIf = Reflect.getMetadata(
      'endWith',
      TestClass.prototype,
      'name',
    );
    expect(metadataValidIf).toEqual({ fieldCheck: 'name', value: 'test' });
  });
  it('should not throw error when accessing metadata', () => {
    expect(() => {
      Reflect.getMetadata('endWith', TestClass.prototype, 'name');
    }).not.toThrow();
  });
});
