import { ID_POKEMON } from "../components/Card";

const initialState = {};

export default function useReducer(state = initialState, action: any) {
  switch (action.type) {
    case ID_POKEMON:
      return { ...state, action };
    default:
      return state;
  }
}
