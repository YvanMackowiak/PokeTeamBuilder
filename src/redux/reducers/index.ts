import { combineReducers } from "redux";
import pokemonReducer from "../slices/pokemonSlice";

export default combineReducers({
  pokemon: pokemonReducer,
});
