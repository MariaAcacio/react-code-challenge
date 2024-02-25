import { useParams } from "react-router-dom";
import { SinglePokemon } from "./SinglePokemon";
import { useGetPokemonByIdQuery } from "src/apis/pokemon.api";

export const PokemonLayout = () => {
  const param = useParams();
  const { data, isLoading, isError } = useGetPokemonByIdQuery(param.id);
  console.log({ data });

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Something went wrong</p>
      ) : (
        <SinglePokemon pokemonInfo={data} />
      )}
    </>
  );
};
