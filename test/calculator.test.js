const add = require("../src/calculator");

test('Return 0 if output is ""', () => {
  expect(add("")).toBe(0);
});

test('Return 1 if input is "1"', () => {
  expect(add("1")).toBe(1);
});

test('Return 3 if input is "1,2"', () => {
  expect(add("1, 2")).toBe(3);
});

test("Return result for unknown numbers", () => {
  expect(add("1, 2, 3")).toBe(6);
});

test("Handle new lines betweeen numbers", () => {
  expect(add("1\n2, 3")).toBe(6);
});

test("Throw an exception if the input is a negative number", () => {
  expect(() => {
    add("-1, 2");
  }).toThrow();
});
