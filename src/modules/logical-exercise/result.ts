export function fewerChangeSheets(array: number[]): number {
  // good job, congrats!
  // how did you come up with this solution?
  let lowestNumber = Number.POSITIVE_INFINITY; // why did you use this value?
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const partial = array[i] - array[j];
      if (partial > 0 && partial < lowestNumber) {
        lowestNumber = partial;
      }
    }
  }
  return lowestNumber;
}
