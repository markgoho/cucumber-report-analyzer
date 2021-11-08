import { addNumbers } from "../src";

describe("Add Numbers", () => {
  it("should add two numbers", () => {
    expect(addNumbers(1, 2)).toBe(3);
  });

  it("should add two other numbers", () => {
    expect(addNumbers(2, 2)).toBe(4);
  });
});
