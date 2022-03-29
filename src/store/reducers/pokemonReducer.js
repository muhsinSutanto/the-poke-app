import { TYPES } from "../../consts/actionTypes";

const initialState = {
   pokemonList: [],
};

export default function (state = initialState, action) {
   switch (action.type) {
      case TYPES.GET_POKEMON_LIST:
         return {
            ...state,
            pokemonList: action.payload.results,
         };

      default:
         return state;
   }
}
