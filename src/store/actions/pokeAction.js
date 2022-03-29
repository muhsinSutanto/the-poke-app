import axios from "axios";
import { TYPES } from "../../consts/actionTypes";
import { ENV } from "../../consts/env";

const fetchPokemonList = () => (dispatch) => {
   axios
      .get(`${ENV.BASE_URL}pokemon`)
      .then((res) => {
         console.log(res.data);
         dispatch({
            type: TYPES.GET_POKEMON_LIST,
            payload: res.data,
         });
      })
      .catch((err) => console.log("err", err));
};

export { fetchPokemonList };
