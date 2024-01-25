import { PokemonActionTypes } from "../actions/enums";
import { PokemonState } from "../states/pokemonState";

export const userReducer = (state: PokemonState = {}, action: any) => {
  switch (action.type) {
    case PokemonActionTypes.ID_POKEMON:
      return { ...state, action };
    default:
      return state;
  }
};
