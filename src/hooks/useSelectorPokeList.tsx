import { useSelector } from "react-redux";
import { StoreType } from "../modules/framework-exercise/store/store";

export const useSelectPokemonList = () =>
  useSelector((state: StoreType) => state.pokemon.pokemonList);
