// store.ts
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

export const store = configureStore({
  reducer: {
    ...rootReducer,
  },
  devTools: true, //TODO: false pour la prod
});
