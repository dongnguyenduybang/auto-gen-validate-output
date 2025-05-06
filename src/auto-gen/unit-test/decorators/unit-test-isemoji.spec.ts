import { IsEmoji } from '../../decorator';

describe('Unit test for decorator IsEmoji', () => {
  class TestClass {
    @IsEmoji()
    emoji: string = '';

    nonEmoji: string = '';
  }
  it('should define metadata for IsEmoji decorator', () => {
    const testInstance = new TestClass();
    const metadata = Reflect.getMetadata('isEmoji', testInstance, 'emoji');
    expect(metadata).toBe(true);
  });
  it('should not define metadata for other properties', () => {
    const testInstance = new TestClass();
    const metadata = Reflect.getMetadata('isEmoji', testInstance, 'nonEmoji');
    expect(metadata).toBeUndefined();
  });
  it('should undefine metadata for IsEmoji decorator with value', () => {
    const testInstance = new TestClass();
    const metadata = Reflect.getMetadata('fieldValue', testInstance, 'emoji');
    expect(metadata).toBeUndefined();
  });
  it('should undefine metadata for other properties with value', () => {
    const testInstance = new TestClass();
    const metadata = Reflect.getMetadata(
      'fieldValue',
      testInstance,
      'nonEmoji',
    );
    expect(metadata).toBeUndefined();
  });
});
