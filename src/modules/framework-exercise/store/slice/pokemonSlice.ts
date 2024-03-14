import { createSlice } from "@reduxjs/toolkit";
import { PokemonType, FavoritePokemonsType } from "src/types/docTypes";
import { useSelector } from "react-redux";
import { StoreType } from "src/modules/framework-exercise/store/store";

type PokemonSliceState = {
  pokemonList: PokemonType[];
  favoritePokemons: FavoritePokemonsType;
};

const initialState: PokemonSliceState = {
  pokemonList: [],
  favoritePokemons: null,
};

const pokemonSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {
    setPokemonList: (state, { payload }) => {
      state.pokemonList = payload;
    },
    setfavoritePokemons: (state, { payload }) => {
      state.favoritePokemons = payload;
    },
  },
  extraReducers: () => {},
});

export const { setPokemonList, setfavoritePokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;

export const useSelectFavPokemon = () =>
  useSelector((state: StoreType) => state.pokemon.favoritePokemons);
