import { IsNumber } from '../../decorator';
import 'reflect-metadata';

class TestClass {
  @IsNumber()
  age: number;
}

describe('Unit test for decorators IsNumber', () => {
  it('should define metadata type isNumber correctly', () => {
    const metadataType = Reflect.getMetadata(
      'type',
      TestClass.prototype,
      'age',
    );
    expect(metadataType).toBe('number');
  });

  it('should not throw error when accessing metadata', () => {
    expect(() => {
      Reflect.getMetadata('type', TestClass.prototype, 'age');
    }).not.toThrow();
  });

  it('should not define other metadata keys', () => {
    const metadataMessage = Reflect.getMetadata(
      'numberMessage',
      TestClass.prototype,
      'age',
    );
    const metadataValue = Reflect.getMetadata(
      'fieldValue',
      TestClass.prototype,
      'age',
    );
    expect(metadataMessage).toBeUndefined();
    expect(metadataValue).toBeUndefined();
  });
});
