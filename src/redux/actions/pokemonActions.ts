import { PokemonActionTypes } from "./enums";
import { PokemonUrl, Tata } from "./models";

export const pokemonUrl = (payload: number): PokemonUrl => ({
  type: PokemonActionTypes.ID_POKEMON,
  payload,
});

export const tata = (): Tata => ({
  type: PokemonActionTypes.TEST,
});
