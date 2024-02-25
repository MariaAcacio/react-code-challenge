import { useEffect, useState } from "react";
import { PokemonDetailsType } from "src/types/docTypes";

export const useFetchPokeDetails = (id: string) => {
  const [pokemon, setPokemon] = useState<PokemonDetailsType>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        // const formattedData = formatPokemonData(data);
        // setPokemon(formattedData);
        setPokemon(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setHasError(true);
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  console.log({ pokemon });

  return { pokemon, isLoading, hasError };
};
