import { sum } from "../components/sum";

test("Sum function should return the addition of two numbers passed on argument", () => {
  const result = sum(2, 3);
  //Assertion
  expect(result).toBe(5);
});
