import { IsDate } from "../../decorator"; 
import "reflect-metadata";

class TestClass {
  @IsDate()
  createdAt: Date;

}

describe("Unit test for decorators IsDate", () => {

  it("should define metadata type Date correctly", () => {
    const metadataType = Reflect.getMetadata("type", TestClass.prototype, "createdAt");
    expect(metadataType).toBe("date");
  });


  it("should not throw error when accessing metadata", () => {
    expect(() => {
      Reflect.getMetadata("type", TestClass.prototype, "createdAt");
    }).not.toThrow();
  });

});