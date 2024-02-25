import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import pokemonReducer from "./slice/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

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
