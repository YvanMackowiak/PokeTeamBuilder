import { PokemonActionTypes } from "./enums";

export interface PokemonUrl {
  type: typeof PokemonActionTypes.ID_POKEMON;
  payload: number;
}
export interface Tata {
  type: typeof PokemonActionTypes.TEST;
}
export type PokemonActions = PokemonUrl | Tata;

export type AllActions = PokemonActions;
