import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useCallback } from "react";
import { pokemonUrl, tata } from "../redux/actions/pokemonActions";

export const usePokemon = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  //   const handleClick = (id: number) => {
  //     dispatch({ type: PokemonActionTypes.ID_POKEMON, pokemon_id: id });
  //     history.push(`/Pokemon/${id}`);
  //   };
  const handleClick = useCallback(
    (id: number) => {
      dispatch(pokemonUrl(id));
      history.push(`/Pokemon/${id}`);
    },
    [dispatch, history]
  );

  return { handleClick };
};

export const useTest = () => {
  const dispatch = useDispatch();

  const ta = useCallback(() => {
    dispatch(tata());
  }, []);
};
