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
export function buildDictionary(
  array: Array<{ [key: string]: any }>,
  key: string
): { [key: string]: any } {
  const result: { [key: string]: any } = {};
  for (const item of array) {
    if (key in item) {
      result[item[key]] = item;
    }
  }
  return result;
}

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

// where do you use this function?
export const getIdFromUrl = (url: string) => {
  // Example url: "https://pokeapi.co/api/v2/pokemon/1/"
  const parts = url.split("/");
  return parseInt(parts.at(-2));
};

export const getNamesFromArray = (array, attribute) => {
  const names = array.map((item) => item[attribute].name);
  return names;
};

// good, but it's better to use a uuid library for this
export const generateId = () => {
  return Math.floor(10000 + Math.random() * 90000);
};

export const isPokemonAlreadyFavorite = ({ pokemonList, pokemonId, userName }) => {
  const favoriteFound = pokemonList.find(
    (item) => item.id === pokemonId && item.userName === userName
  );
  const isAlreadySaved = userName?.name !== "" && Boolean(favoriteFound);
  return isAlreadySaved;
};
