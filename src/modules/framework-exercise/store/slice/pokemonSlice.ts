import { createSlice } from "@reduxjs/toolkit";
import { PokemonType as PokemonType } from "../../../../types/docTypes";

type PokemonSliceState = {
  pokemonList: PokemonType[];
  pokemonSelected: PokemonType | null;
  listQuantity: number;
};

const initialState: PokemonSliceState = {
  pokemonList: [],
  pokemonSelected: null,
  listQuantity: 12,
};

const pokemonSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {
    setPokemonList: (state, action) => {
      state.pokemonList = action.payload;
    },
    setPokemonSelected: (state, action) => {
      state.pokemonSelected = action.payload;
    },
    setListQuantity: (state, action) => {
      state.listQuantity = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { setPokemonList, setPokemonSelected, setListQuantity } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
