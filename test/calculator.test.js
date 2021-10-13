const calculator = require("../src/calculator");

const a = 13;
const b = 5;

test("Add method should add numbers", () => {
  expect(calculator.add(a, b)).toBe(18);
});
