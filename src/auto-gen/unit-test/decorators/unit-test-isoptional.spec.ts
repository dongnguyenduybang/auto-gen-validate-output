import { IsOptional } from "../../decorator";
import "reflect-metadata";

class TestClass {
  @IsOptional()
  name: string;

}

describe("Unit test for decorators IsOptional", () => {

  beforeEach(() => {
    Reflect.deleteMetadata("optional", TestClass.prototype);
  });

  it("should define metadata optional correctly", () => {
    const metadataOptional = Reflect.getMetadata("optional", TestClass.prototype, "name");
    expect(metadataOptional).toBe(true);
  });

  it("should not throw error when accessing metadata", () => {
    expect(() => {
      Reflect.getMetadata("optional", TestClass.prototype, "name");
    }).not.toThrow();
  });

  it("should define metadata optional correctly for instance", () => {
    const instance = new TestClass();
    const metadataOptional = Reflect.getMetadata("optional", instance, "name");
    expect(metadataOptional).toBe(true);
  });

  it("should return undefined for non-existent property", () => {
    const metadataOptional = Reflect.getMetadata("optional", TestClass.prototype, "nonExistent");
    expect(metadataOptional).toBeUndefined();
  });
});