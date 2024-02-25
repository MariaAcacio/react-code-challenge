import { useSelector } from "react-redux";
import { StoreType } from "src/modules/framework-exercise/store/store";

export const useSelectFavPokemon = () =>
  useSelector((state: StoreType) => state.pokemon.favoritePokemons);
