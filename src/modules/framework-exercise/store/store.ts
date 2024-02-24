import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./slice/pokemonSlice";

export const Store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export type StoreType = ReturnType<typeof Store.getState>;
export type storeDispatchType = typeof Store.dispatch;
