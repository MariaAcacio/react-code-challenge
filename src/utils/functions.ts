export const getIdFromUrl = (url: string) => {
  // Example url: "https://pokeapi.co/api/v2/pokemon/1/"
  const parts = url.split("/");
  return parseInt(parts.at(-2));
};

export const getNamesFromArray = (array, attribute) => {
  const names = array.map((item) => item[attribute].name);
  return names;
};

export const generateId = () => {
  return Math.floor(10000 + Math.random() * 90000);
};

export const isPokemonAlreadyFavorite = ({
  pokemonList,
  pokemonId,
  userName,
}) => {
  const favoriteFound = pokemonList.find(
    (item) => item.id === pokemonId && item.userName === userName
  );
  const isAlreadySaved = userName?.name !== "" && Boolean(favoriteFound);
  return isAlreadySaved;
};
