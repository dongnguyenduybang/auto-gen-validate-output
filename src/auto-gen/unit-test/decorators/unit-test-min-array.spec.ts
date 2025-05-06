import { MinArray } from '../../decorator';
import 'reflect-metadata';

class TestClass {
  @MinArray(3)
  name: string[];
}

describe('Unit test for decorators MinArray', () => {
  it('should define metadata minArray correctly', () => {
    const metadataMinArray = Reflect.getMetadata(
      'minArray',
      TestClass.prototype,
      'name',
    );
    expect(metadataMinArray).toBe(3);
  });

  it('should not throw error when accessing metadata', () => {
    expect(() => {
      Reflect.getMetadata('minArray', TestClass.prototype, 'name');
    }).not.toThrow();
  });
});
