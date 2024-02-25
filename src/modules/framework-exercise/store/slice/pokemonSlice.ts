import { createSlice } from "@reduxjs/toolkit";
import { PokemonType, FavoritePokemonsType } from "src/types/docTypes";

type PokemonSliceState = {
  pokemonList: PokemonType[];
  favoritePokemons: FavoritePokemonsType[];
  listQuantity: number;
};

const initialState: PokemonSliceState = {
  pokemonList: [],
  favoritePokemons: [],
  listQuantity: 12,
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
    setListQuantity: (state, { payload }) => {
      state.listQuantity = payload;
    },
  },
  extraReducers: () => {},
});

export const { setPokemonList, setfavoritePokemons, setListQuantity } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
