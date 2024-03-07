import { useSelector } from "react-redux";
import { StoreType } from "../modules/framework-exercise/store/store";

// same comment as the useSelectFavPokemon hook
export const useSelectPokemonList = () =>
  useSelector((state: StoreType) => state.pokemon.pokemonList);
