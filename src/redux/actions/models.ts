import { PokemonActionTypes } from "./enums";

export interface PokemonUrl {
  type: typeof PokemonActionTypes.ID_POKEMON;
}

export type PokemonActions = PokemonUrl;

export type AllActions = PokemonActions;
