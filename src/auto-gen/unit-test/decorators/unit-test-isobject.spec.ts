import { IsObject } from '../../decorator';

describe('Unit test for decorators IsObject', () => {
  class TestClass {
    @IsObject()
    object: object = {};

    nonObject: string = '';
  }
  it('should define metadata for IsObject decorator', () => {
    const testInstance = new TestClass();
    const metadata = Reflect.getMetadata('type', testInstance, 'object');
    expect(metadata).toBe('object');
  });
  it('should undefine metadata for other properties', () => {
    const testInstance = new TestClass();
    const metadata = Reflect.getMetadata('type', testInstance, 'nonObject');
    expect(metadata).toBeUndefined();
  });
  it('should undefine metadata for IsObject decorator with value', () => {
    const testInstance = new TestClass();
    const metadata = Reflect.getMetadata('fieldValue', testInstance, 'object');
    expect(metadata).toBeUndefined();
  });
  it('should undefine metadata for other properties with value', () => {
    const testInstance = new TestClass();
    const metadata = Reflect.getMetadata(
      'fieldValue',
      testInstance,
      'nonObject',
    );
    expect(metadata).toBeUndefined();
  });
});
