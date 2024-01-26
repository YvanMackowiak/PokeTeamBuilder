import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonState } from "../states/pokemonState";

const initialState: PokemonState = {
  pokemonId: 0,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonId: (state, action: PayloadAction<{ pokemonId: number }>) => {
      // {type:"pokemon/setPokemonId", payload:{pokemonId:1}
      state.pokemonId = action.payload.pokemonId;
    },
    resetPokemonState: () => initialState, // Action pour réinitialiser l'état
  },
});

export const { setPokemonId, resetPokemonState } = pokemonSlice.actions;
export default pokemonSlice.reducer;
