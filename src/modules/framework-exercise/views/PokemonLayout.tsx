import { useFetchPokeDetails } from "src/hooks/useFetchPokeDetails";
import { useParams } from "react-router-dom";
import { SinglePokemon } from "./SinglePokemon";

export const PokemonLayout = () => {
  const param = useParams();
  const { pokemon, isLoading, hasError } = useFetchPokeDetails(param.id);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : hasError ? (
        <p>Something went wrong</p>
      ) : (
        <SinglePokemon pokemonInfo={pokemon} />
      )}
    </>
  );
};
