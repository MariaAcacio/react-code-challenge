export const getIdFromUrl = (url: string) => {
  // Example url: "https://pokeapi.co/api/v2/pokemon/1/"
  const parts = url.split("/");
  return parseInt(parts.at(-2));
};
