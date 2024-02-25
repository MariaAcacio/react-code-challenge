import { List } from "./List";
import { useGetPokemonsQuery } from "src/apis/pokemon.api";

export const ListLayout = () => {
  const { data, isLoading, isError } = useGetPokemonsQuery("");

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Something went wrong!</div>
      ) : (
        <List pokemonList={data} />
      )}
    </>
  );
};
