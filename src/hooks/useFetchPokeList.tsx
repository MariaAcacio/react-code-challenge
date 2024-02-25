import { useEffect, useState } from "react";
import { getIdFromUrl } from "src/utils/functions";
import { setPokemonList } from "src/modules/framework-exercise/store/slice/pokemonSlice";
import { useDispatch } from "react-redux";
import { useSelectPokemonList } from "src/hooks/useSelectPokeList";
import { PokemonType } from "src/types/docTypes";

export function useFetchPokeList() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const pokemonList = useSelectPokemonList();
  const dispatch = useDispatch();

  useEffect(() => {
    if (pokemonList.length === 0) {
      setIsLoading(true);
      setHasError(false);
      fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
        .then((response) => response.json())
        .then((data) => {
          const newData = data.results.map((item: PokemonType) => ({
            ...item,
            id: getIdFromUrl(item.url),
          }));
          dispatch(setPokemonList(newData));
        })
        .catch((error) => {
          setHasError(true);
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);
  return { pokemonList, isLoading, hasError };
}
