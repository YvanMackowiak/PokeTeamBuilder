import { useAppDispatch, useAppSelector } from "./hooks";
import { pokemonId } from "./store/pokemon/pokemonSlice";

export const Counter = () => {
  const count = useAppSelector((state) => state.counter.id);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>Count: {count}</div>

      <button onClick={() => dispatch(pokemonId(5))}>Increment by 5</button>
    </div>
  );
};
