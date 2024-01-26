import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useCallback } from "react";
import { setPokemonId } from "../redux/slices/pokemonSlice"; // Import mis à jour

export const usePokemon = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = useCallback(
    (id: number) => {
      dispatch(setPokemonId(id)); // Utilisation de setPokemonId au lieu de pokemonUrl
      history.push(`/Pokemon/${id}`);
    },
    [dispatch, history]
  );

  return { handleClick };
};
