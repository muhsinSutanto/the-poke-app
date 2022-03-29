import { TYPES } from "../../consts/actionTypes";

const initialState = {
   pokemonList: [],
   pokemonDetail: {
      moves: [],
      types: [],
      image: "",
   },

   myPokemons: null,
};

export default function (state = initialState, action) {
   switch (action.type) {
      case TYPES.GET_POKEMON_LIST:
         return {
            ...state,
            pokemonList: action.payload.results,
         };

      case TYPES.GET_POKEMON_DETAIL:
         return {
            ...state,
            pokemonDetail: {
               moves: action.payload.moves,
               types: action.payload.types,
               image: action.payload.sprites.front_default,
            },
         };

      case TYPES.GET_MY_POKEMON_LIST:
         return {
            ...state,
            myPokemons: action.payload,
         };

      default:
         return state;
   }
}
