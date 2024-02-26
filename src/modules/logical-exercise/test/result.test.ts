import { fewerChangeSheets } from "../result";

const tests = [
  { data: [4, 9, 7], response: 2 },
  { data: [10, 15, 8, 18, 6, 25], response: 2 },
  // It seems to be a mistake in this test, as the minimum times they should change Bills sheets
  //for this case is 1; by hitting the first dummy at dummies[0] = 3 and the last dummy at dummies[4] = 2.
  { data: [3, 8, 5, 10, 2], response: 3 },
  { data: [7, 14, 9, 20, 11, 30, 12, 8, 2], response: 1 },
];

describe("fewerChangeSheets()", () => {
  tests.forEach((test, index) => {
    const { data, response } = test;
    it(`should return ${response} for test ${index + 1} with data [${data.join(
      ", "
    )}]`, () => {
      const result = fewerChangeSheets(data);
      expect(result).toEqual(response);
    });
  });
});
