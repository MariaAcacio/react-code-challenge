import { createSlice } from "@reduxjs/toolkit";
import { PokemonType, FavoritePokemonsType } from "src/types/docTypes";

type PokemonSliceState = {
  pokemonList: PokemonType[];
  favoritePokemons: FavoritePokemonsType[];
};

const initialState: PokemonSliceState = {
  pokemonList: [],
  favoritePokemons: [],
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
