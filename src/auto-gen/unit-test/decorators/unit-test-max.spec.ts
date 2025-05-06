import { Min } from '../../decorator';
import 'reflect-metadata';

class TestClass {
  @Min(3)
  name: number;
}

describe('Unit test for decorators Min', () => {
  it('should define metadata Min correctly', () => {
    const metadataMax = Reflect.getMetadata('min', TestClass.prototype, 'name');
    expect(metadataMax).toBe(3);
  });

  it('should not throw error when accessing metadata', () => {
    expect(() => {
      Reflect.getMetadata('min', TestClass.prototype, 'name');
    }).not.toThrow();
  });
});
