import { useEffect, useState } from "react";
import { getIdFromUrl } from "../../src/utils/functions";
import { setPokemonList } from "../modules/framework-exercise/store/slice/pokemonSlice";
import { useDispatch } from "react-redux";
import { useSelectPokemonList } from "../hooks/useSelectorPokeList";
import { PokemonType } from "../../src/types/docTypes";

export function useFetchPokeList() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();
  const pokemonList = useSelectPokemonList();

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
          setIsLoading(false);
        });
    }
  }, []);
  return { pokemonList, isLoading, hasError };
}
