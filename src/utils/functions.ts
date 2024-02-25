export const getIdFromUrl = (url: string) => {
  // Example url: "https://pokeapi.co/api/v2/pokemon/1/"
  const parts = url.split("/");
  return parseInt(parts.at(-2));
};

export const getAbilitiesNames = (abilities) => {
  const names = abilities.map((item) => item.ability.name);
  return names;
};
export const getTypesNames = (types) => {
  const names = types.map((item) => item.type.name);
  return names;
};
