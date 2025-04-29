import { MinLength } from "../../decorator";
import "reflect-metadata";

class TestClass {
  @MinLength(3)
  name: string;

}

describe("Unit test for decorators MinLength", () => {

  it("should define metadata minLength correctly", () => {
    const metadataMinLength = Reflect.getMetadata("minLength", TestClass.prototype, "name");
    expect(metadataMinLength).toBe(3);
  });

  it("should not throw error when accessing metadata", () => {
    expect(() => {
      Reflect.getMetadata("minLength", TestClass.prototype, "name");
    }).not.toThrow();
  });

});