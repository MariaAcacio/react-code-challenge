import { useSelector } from "react-redux";
import { StoreType } from "src/modules/framework-exercise/store/store";

// this hook may be useful inside the slice, instead of a custom hook (personal preference)
export const useSelectFavPokemon = () =>
  useSelector((state: StoreType) => state.pokemon.favoritePokemons);
