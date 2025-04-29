import { IsEnum } from "../../decorator";
import { MessageTypeEnum } from "../../enums";
import "reflect-metadata";

class TestClass {
  @IsEnum(MessageTypeEnum)
  message: MessageTypeEnum;
}

describe("Unit test for decorators IsEnum", () => {
  beforeEach(() => {
    Reflect.deleteMetadata("type", TestClass.prototype);
    Reflect.deleteMetadata("enumType", TestClass.prototype);
  });

  it("should define metadata type correctly", () => {
    const metadataType = Reflect.getMetadata("type", TestClass.prototype, "message");
    expect(metadataType).toBe("enum");
  });

  it("should define metadata enumType correctly", () => {
    const metadataEnumType = Reflect.getMetadata("enumType", TestClass.prototype, "message");
    expect(metadataEnumType).toBe(MessageTypeEnum);
  });

  it("should not throw error and return correct metadata", () => {
    let metadataType, metadataEnumType;
    expect(() => {
      metadataType = Reflect.getMetadata("type", TestClass.prototype, "message");
      metadataEnumType = Reflect.getMetadata("enumType", TestClass.prototype, "message");
    }).not.toThrow();
    expect(metadataType).toBe("enum");
    expect(metadataEnumType).toBe(MessageTypeEnum);
  });

  it("should not define other metadata keys", () => {
    const metadataMinLength = Reflect.getMetadata("minLength", TestClass.prototype, "message");
    const metadataStringMessage = Reflect.getMetadata("stringMessage", TestClass.prototype, "message");
    const metadataNotEmpty = Reflect.getMetadata("notEmpty", TestClass.prototype, "message");
    expect(metadataMinLength).toBeUndefined();
    expect(metadataStringMessage).toBeUndefined();
    expect(metadataNotEmpty).toBeUndefined();
  });

  it("should define metadata correctly for instance", () => {
    const instance = new TestClass();
    const metadataType = Reflect.getMetadata("type", instance, "message");
    const metadataEnumType = Reflect.getMetadata("enumType", instance, "message");
    expect(metadataType).toBe("enum");
    expect(metadataEnumType).toBe(MessageTypeEnum);
  });

  it("should return undefined for non-existent property", () => {
    const metadataType = Reflect.getMetadata("type", TestClass.prototype, "nonExistent");
    const metadataEnumType = Reflect.getMetadata("enumType", TestClass.prototype, "nonExistent");
    expect(metadataType).toBeUndefined();
    expect(metadataEnumType).toBeUndefined();
  });
});