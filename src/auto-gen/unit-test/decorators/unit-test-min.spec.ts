import { Max } from '../../decorator';
import 'reflect-metadata';

class TestClass {
  @Max(3)
  name: number;
}

describe('Unit test for decorators Max', () => {
  it('should define metadata Min correctly', () => {
    const metadataMin = Reflect.getMetadata('max', TestClass.prototype, 'name');
    expect(metadataMin).toBe(3);
  });

  it('should not throw error when accessing metadata', () => {
    expect(() => {
      Reflect.getMetadata('max', TestClass.prototype, 'name');
    }).not.toThrow();
  });
});
