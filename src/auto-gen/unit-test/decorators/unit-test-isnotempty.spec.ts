import { IsNotEmpty } from "../../decorator";
import "reflect-metadata";

class TestClass {
  @IsNotEmpty({ message: "address cannot be empty" })
  address: string;

  @IsNotEmpty()
  noOptions: string;
}

describe("Unit test for decorators IsNotEmpty", () => {

  it("should define metadata isNotEmpty correctly", () => {
    const metadataNotEmpty = Reflect.getMetadata("isNotEmpty", TestClass.prototype, "address");
    expect(metadataNotEmpty).toBe(true);
  });

  it("should define metadata isNotEmptyMessage correctly when message is provided", () => {
    const metadataMessage = Reflect.getMetadata(
      "isNotEmptyMessage",
      TestClass.prototype,
      "address"
    );
    expect(metadataMessage).toBe("address cannot be empty");
  });

  it("should not define isNotEmptyMessage metadata when no message is provided", () => {
    const metadataMessage = Reflect.getMetadata(
      "isNotEmptyMessage",
      TestClass.prototype,
      "noOptions"
    );
    expect(metadataMessage).toBeUndefined();
  });

  it("should not throw error when accessing metadata", () => {
    expect(() => {
      Reflect.getMetadata("isNotEmpty", TestClass.prototype, "address");
    }).not.toThrow();
  });

  it("should not define other metadata keys", () => {
    const metadataType = Reflect.getMetadata("type", TestClass.prototype, "address");
    const metadataValue = Reflect.getMetadata("fieldValue", TestClass.prototype, "address");
    expect(metadataType).toBeUndefined();
    expect(metadataValue).toBeUndefined();
  });
});