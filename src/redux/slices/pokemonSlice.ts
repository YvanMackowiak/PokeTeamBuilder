import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonState } from "../states/pokemonState";

// État initial
const initialState: PokemonState = {
  pokemonId: 0,
};

// Création du slice
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonId(state, action: PayloadAction<number>) {
      state.pokemonId = action.payload;
    },
    // Vous pouvez ajouter d'autres reducers ici
  },
});

// Exportation des actions et du reducer
export const { setPokemonId } = pokemonSlice.actions;
export default pokemonSlice.reducer;
