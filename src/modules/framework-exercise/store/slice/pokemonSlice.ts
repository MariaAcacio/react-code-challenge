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
    setPokemonList: (state, action) => {
      state.pokemonList = action.payload;
    },
    setfavoritePokemons: (state, action) => {
      state.favoritePokemons = action.payload;
    },
    setListQuantity: (state, action) => {
      state.listQuantity = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { setPokemonList, setfavoritePokemons, setListQuantity } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
