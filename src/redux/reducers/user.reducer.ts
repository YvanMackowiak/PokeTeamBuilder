import { PokemonActionTypes } from "../actions/enums";
import { AllActions } from "../actions/models";
import { PokemonState } from "../states/pokemonState";

export const userReducer = (state: PokemonState, action: AllActions) => {
  switch (action.type) {
    case PokemonActionTypes.ID_POKEMON:
      return { ...state, pokemonId: action.payload };
    default:
      return state;
  }
};
