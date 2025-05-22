import { IsNotNull } from '../../decorator';
import 'reflect-metadata';

class TestClass {
  @IsNotNull()
  userId: string;

  @IsNotNull({ message: 'Value cannot be null' })
  name: string;
}

describe('Unit test for decorators notNull', () => {
  beforeEach(() => {
    Reflect.deleteMetadata('notNull', TestClass.prototype);
    Reflect.deleteMetadata('notNullMessage', TestClass.prototype);
  });

  it('should define metadata notNull correctly without options', () => {
    const metadataIsNotNull = Reflect.getMetadata(
      'notNull',
      TestClass.prototype,
      'userId',
    );
    const metadataMessage = Reflect.getMetadata(
      'notNullMessage',
      TestClass.prototype,
      'userId',
    );
    expect(metadataIsNotNull).toBe(true);
    expect(metadataMessage).toBeUndefined();
  });

  it('should define metadata notNull and notNullMessage correctly with message', () => {
    const metadataIsNotNull = Reflect.getMetadata(
      'notNull',
      TestClass.prototype,
      'name',
    );
    const metadataMessage = Reflect.getMetadata(
      'notNullMessage',
      TestClass.prototype,
      'name',
    );
    expect(metadataIsNotNull).toBe(true);
    expect(metadataMessage).toBe('Value cannot be null');
  });

  it('should not throw error when accessing metadata', () => {
    expect(() => {
      Reflect.getMetadata('notNull', TestClass.prototype, 'id');
      Reflect.getMetadata('notNullMessage', TestClass.prototype, 'id');
    }).not.toThrow();
  });

  it('should define metadata correctly for instance', () => {
    const instance = new TestClass();
    const metadataIsNotNull = Reflect.getMetadata(
      'notNull',
      instance,
      'name',
    );
    const metadataMessage = Reflect.getMetadata(
      'notNullMessage',
      instance,
      'name',
    );
    expect(metadataIsNotNull).toBe(true);
    expect(metadataMessage).toBe('Value cannot be null');
  });

  it('should return undefined for non-existent property', () => {
    const metadataIsNotNull = Reflect.getMetadata(
      'notNull',
      TestClass.prototype,
      'nonExistent',
    );
    const metadataMessage = Reflect.getMetadata(
      'notNullMessage',
      TestClass.prototype,
      'nonExistent',
    );
    expect(metadataIsNotNull).toBeUndefined();
    expect(metadataMessage).toBeUndefined();
  });
});
