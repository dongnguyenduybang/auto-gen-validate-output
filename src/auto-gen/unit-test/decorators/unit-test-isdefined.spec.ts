import { IsDefined } from "../../decorator";
import "reflect-metadata";

class TestClass {
  @IsDefined({ message: "address must be defined" })
  address: string;

  @IsDefined()
  noOptions: string;
}

describe("Unit test for decorators IsDefined", () => {

  it("should define metadata isDefined correctly", () => {
    const metadataIsDefined = Reflect.getMetadata("isDefined", TestClass.prototype, "address");
    expect(metadataIsDefined).toBe(true);
  });

  it("should define metadata isDefined correctly when message is provided", () => {
    const metadataMessage = Reflect.getMetadata(
      "isDefinedMessage",
      TestClass.prototype,
      "address"
    );
    expect(metadataMessage).toBe("address must be defined");
  });

  it("should not define isDefined metadata when no message is provided", () => {
    const metadataMessage = Reflect.getMetadata(
      "isDefinedMessage",
      TestClass.prototype,
      "noOptions"
    );
    expect(metadataMessage).toBeUndefined();
  });

  it("should not throw error when accessing metadata", () => {
    expect(() => {
      Reflect.getMetadata("isDefined", TestClass.prototype, "address");
    }).not.toThrow();
  });

  it("should not define other metadata keys", () => {
    const metadataType = Reflect.getMetadata("type", TestClass.prototype, "address");
    const metadataValue = Reflect.getMetadata("fieldValue", TestClass.prototype, "address");
    expect(metadataType).toBeUndefined();
    expect(metadataValue).toBeUndefined();
  });
});