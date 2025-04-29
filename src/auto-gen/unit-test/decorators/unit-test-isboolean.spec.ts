import { IsBoolean } from "../../decorator"; 
import "reflect-metadata";

class TestClass {
  @IsBoolean()
  isActive: boolean;

}

describe("Unit test for decorators IsBoolean", () => {

  it("should define metadata type isBoolean correctly", () => {
    const metadataType = Reflect.getMetadata("type", TestClass.prototype, "isActive");
    expect(metadataType).toBe("boolean");
  });


  it("should not throw error when accessing metadata", () => {
    expect(() => {
      Reflect.getMetadata("type", TestClass.prototype, "isActive");
    }).not.toThrow();
  });

});