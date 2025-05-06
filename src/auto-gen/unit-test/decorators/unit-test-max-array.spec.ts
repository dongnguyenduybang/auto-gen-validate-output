import { MaxArray } from '../../decorator';
import 'reflect-metadata';

class TestClass {
  @MaxArray(3)
  name: string[];
}

describe('Unit test for decorators MaxArray', () => {
  it('should define metadata maxArray correctly', () => {
    const metadataMaxArray = Reflect.getMetadata(
      'maxArray',
      TestClass.prototype,
      'name',
    );
    expect(metadataMaxArray).toBe(3);
  });

  it('should not throw error when accessing metadata', () => {
    expect(() => {
      Reflect.getMetadata('maxArray', TestClass.prototype, 'name');
    }).not.toThrow();
  });
});
