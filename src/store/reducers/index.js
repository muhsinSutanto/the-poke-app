import { combineReducers } from "redux";

import pokemonReducer from "./pokemonReducer";

const rootReducers = combineReducers({
   pokeList: pokemonReducer,
});

export default rootReducers;
