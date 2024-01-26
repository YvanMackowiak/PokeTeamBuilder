import { combineReducers } from "redux";
import pokemonReducer from "../slices/pokemonSlice";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export default rootReducer;
