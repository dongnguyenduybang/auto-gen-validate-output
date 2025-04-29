import { MaxLength } from "../../decorator";
import "reflect-metadata";

class TestClass {
  @MaxLength(3)
  name: string;

}

describe("Unit test for decorators MaxLength", () => {

  it("should define metadata minLength correctly", () => {
    const metadataMaxLength = Reflect.getMetadata("maxLength", TestClass.prototype, "name");
    expect(metadataMaxLength).toBe(3);
  });

  it("should not throw error when accessing metadata", () => {
    expect(() => {
      Reflect.getMetadata("maxLength", TestClass.prototype, "name");
    }).not.toThrow();
  });

});