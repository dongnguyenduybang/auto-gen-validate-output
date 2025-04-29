import { IsNotNull } from "../../decorator";
import "reflect-metadata";

class TestClass {
  @IsNotNull()
  userId: string;

  @IsNotNull({ message: "Value cannot be null" })
  name: string;

}

describe("Unit test for decorators IsNotNull", () => {
  beforeEach(() => {
    Reflect.deleteMetadata("isNotNull", TestClass.prototype);
    Reflect.deleteMetadata("isNotNullMessage", TestClass.prototype);
  });

  it("should define metadata isNotNull correctly without options", () => {
    const metadataIsNotNull = Reflect.getMetadata("isNotNull", TestClass.prototype, "userId");
    const metadataMessage = Reflect.getMetadata("isNotNullMessage", TestClass.prototype, "userId");
    expect(metadataIsNotNull).toBe(true);
    expect(metadataMessage).toBeUndefined();
  });

  it("should define metadata isNotNull and isNotNullMessage correctly with message", () => {
    const metadataIsNotNull = Reflect.getMetadata("isNotNull", TestClass.prototype, "name");
    const metadataMessage = Reflect.getMetadata("isNotNullMessage", TestClass.prototype, "name");
    expect(metadataIsNotNull).toBe(true);
    expect(metadataMessage).toBe("Value cannot be null");
  });

  it("should not throw error when accessing metadata", () => {
    expect(() => {
      Reflect.getMetadata("isNotNull", TestClass.prototype, "id");
      Reflect.getMetadata("isNotNullMessage", TestClass.prototype, "id");
    }).not.toThrow();
  });

  it("should define metadata correctly for instance", () => {
    const instance = new TestClass();
    const metadataIsNotNull = Reflect.getMetadata("isNotNull", instance, "name");
    const metadataMessage = Reflect.getMetadata("isNotNullMessage", instance, "name");
    expect(metadataIsNotNull).toBe(true);
    expect(metadataMessage).toBe("Value cannot be null");
  });

  it("should return undefined for non-existent property", () => {
    const metadataIsNotNull = Reflect.getMetadata("isNotNull", TestClass.prototype, "nonExistent");
    const metadataMessage = Reflect.getMetadata("isNotNullMessage", TestClass.prototype, "nonExistent");
    expect(metadataIsNotNull).toBeUndefined();
    expect(metadataMessage).toBeUndefined();
  });
});