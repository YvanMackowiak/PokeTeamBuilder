import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    poke: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
