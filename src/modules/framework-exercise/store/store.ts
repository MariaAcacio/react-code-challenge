import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import pokemonReducer from "./slice/pokemonSlice";
import userReducer from "./slice/userSlice";
import { pokemonApi } from "src/apis/pokemon.api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    user: userReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});
setupListeners(store.dispatch);

// Infer the `StoreType` and `AppDispatch` types from the store itself
export type StoreType = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type storeDispatchType = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  StoreType,
  unknown,
  Action<string>
>;
