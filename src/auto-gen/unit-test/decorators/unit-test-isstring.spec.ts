import { IsString } from "../../decorator";
import "reflect-metadata";
class TestClass {
  @IsString({ message: "value must be string", value: "test isstring" })
  address: string;

  @IsString()
  noOptions: string;

  @IsString({ message: "custom message" })
  withMessage: string;

  @IsString({ value: 123 })
  withNonStringValue: string;
}

describe("Unit test for decorators IsString", () => {

  it("should define metadata type isString correctly", () => {
    const metadataType = Reflect.getMetadata("type", TestClass.prototype, "address");
    expect(metadataType).toBe("string");
  });

  it("should define metadata isStringMessage correctly when message is provided", () => {
    const metadataMessage = Reflect.getMetadata(
      "isStringMessage",
      TestClass.prototype,
      "address"
    );
    expect(metadataMessage).toBe("value must be string");
  });

  it("should define metadata fieldValue correctly when value is provided", () => {
    const metadataValue = Reflect.getMetadata(
      "fieldValue",
      TestClass.prototype,
      "address"
    );
    expect(metadataValue).toBe("test isstring");
  });

  it("should not define isStringMessage metadata when no message is provided", () => {
    const metadataMessage = Reflect.getMetadata(
      "isStringMessage",
      TestClass.prototype,
      "noOptions"
    );
    expect(metadataMessage).toBeUndefined();
  });

  it("should not define fieldValue metadata when no value is provided", () => {
    const metadataValue = Reflect.getMetadata(
      "fieldValue",
      TestClass.prototype,
      "withMessage"
    );
    expect(metadataValue).toBeUndefined();
  });

  it("should handle non-string value correctly in fieldValue metadata", () => {
    const metadataValue = Reflect.getMetadata(
      "fieldValue",
      TestClass.prototype,
      "withNonStringValue"
    );
    expect(metadataValue).toBe(123);
  });

  it("should not throw error when options is not provided", () => {
    expect(() => {
      Reflect.getMetadata("type", TestClass.prototype, "noOptions");
    }).not.toThrow();
  });
});