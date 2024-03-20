/**
 * This function takes an array of objects and a key, and returns a new object.
 * The keys of the new object are the values associated with the given key in the original objects.
 * The values of the new object are the original objects.
 *
 * @param {Array<{ [key: string]: any }>} array - The array of objects to be transformed.
 * @param {string} key - The key to be used for the new object.
 * @returns {{ [key: string]: any }} - The new object.
 *
 * @example
 * const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
 * const key = 'id';
 * const result = buildDictionary(array, key);
 * console.log(result);
 * // Output: { '1': { id: 1, name: 'John' }, '2': { id: 2, name: 'Jane' } }
 */

export const buildDictionary = (
  array: any[],
  key: string
): Record<string, any> => {
  const dictionary = array.reduce((acc, item) => {
    return {
      ...acc,
      [item[key]]: item,
    };
  }, {});
  return dictionary;
};

/**
 * This function takes a string and returns a number that matches the regular expression /\/(\d{1,3})\//.
 * The regular expression is looking for a number of one to three digits that is surrounded by slashes.
 * If a match is found, the function returns the number part of the match.
 * If no match is found, the function returns null.
 *
 * @param {string} str - The string to be searched.
 * @returns {number | null} - The number found or null if no match is found.
 *
 * @example
 * const str = "Hello /123/ world";
 * const result = extractNumber(str);
 * console.log(result); // Output: 123
 */
export function extractNumber(str: string): number | null {
  const match = str.match(/\/(\d{1,3})\//);
  return match ? parseInt(match[1]) : null;
}

export const getNamesFromArray = (array, attribute) => {
  const names = array.map((item) => item[attribute].name);
  return names;
};

// good, but it's better to use a uuid library for this
export const generateId = () => {
  return Math.floor(10000 + Math.random() * 90000);
};

export const getUsersWithThisPokemon = (dictionary, id) => {
  if (!dictionary) return { [id]: true };
  if (dictionary[id]) {
    const newObject = { ...dictionary };
    delete newObject[id];
    return newObject;
  }

  return { ...dictionary, [id]: true };
};

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
