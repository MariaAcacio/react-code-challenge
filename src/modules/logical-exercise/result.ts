export function fewerChangeSheets(array: number[]): number {
  // add here your code
  let lowestNumber = Number.POSITIVE_INFINITY;
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
