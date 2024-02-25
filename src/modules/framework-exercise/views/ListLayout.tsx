import { useFetchPokeList } from "src/hooks/useFetchPokeList";
import { List } from "./List";

export const ListLayout = () => {
  const { pokemonList, isLoading, hasError } = useFetchPokeList();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>Something went wrong!</div>
      ) : (
        <List pokemonList={pokemonList} />
      )}
    </>
  );
};
