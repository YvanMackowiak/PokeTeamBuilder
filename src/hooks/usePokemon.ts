import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useCallback } from "react";
import { resetPokemonState, setPokemonId } from "../redux/slices/pokemonSlice";

export const usePokemon = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = useCallback(
    (id: number) => {
      dispatch(setPokemonId({ pokemonId: id }));
      history.push(`/Pokemon/${id}`);
    },
    [dispatch, history]
  );

  return { handleClick };
};

export const useResetState = () => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(resetPokemonState());
  }, [dispatch]);
  return { handleClick };
};
