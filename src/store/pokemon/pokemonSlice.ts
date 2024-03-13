import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  id?: number;
}

const initialState: CounterState = {
  id: undefined,
};

export const counterSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    pokemonId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { pokemonId } = counterSlice.actions;

export default counterSlice.reducer;
