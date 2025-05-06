import { IsArray } from '../../decorator';
import 'reflect-metadata';

describe('Unit test for decorators IsArray', () => {
  class TestClass {
    @IsArray()
    message: string[];
  }

  it('should define metadata type isArray correctly', () => {
    const metadataType = Reflect.getMetadata(
      'type',
      TestClass.prototype,
      'message',
    );
    expect(metadataType).toBe('array');
  });

  it('should not throw error when accessing metadata', () => {
    expect(() => {
      Reflect.getMetadata('type', TestClass.prototype, 'message');
    }).not.toThrow();
  });
});
