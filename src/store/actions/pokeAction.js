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

const fetchPokemonDetail = (id) => (dispatch) => {
   axios
      .get(`${ENV.BASE_URL}pokemon/${id}`)
      .then((res) => {
         dispatch({
            type: TYPES.GET_POKEMON_DETAIL,
            payload: res.data,
         });
      })
      .catch((err) => console.log(err));
};

const setToCage = (data) => (dispatch) => {
   let local = localStorage.getItem("test");
   let exisData = local === null ? [] : JSON.parse(local);
   let newData = exisData.concat(data);
   localStorage.setItem("test", JSON.stringify(newData));

   dispatch({
      type: TYPES.GET_POKEMON_LIST,
      payload: newData,
   });
};

const fetchMyPokemon = () => (dispatch) => {
   const data = localStorage.getItem("test");
   const finalData = data === null ? [] : JSON.parse(data);
   dispatch({
      type: TYPES.GET_MY_POKEMON_LIST,
      payload: finalData,
   });
};

const removePokemon = (param) => (dispatch) => {
   const data = localStorage.getItem("test");
   const pars = JSON.parse(data);
   const removeData = pars.filter((datum, key) => key !== param);

   localStorage.setItem("test", JSON.stringify(removeData));
   dispatch({
      type: TYPES.GET_MY_POKEMON_LIST,
      payload: removeData,
   });
};

export { fetchPokemonList, fetchPokemonDetail, setToCage, fetchMyPokemon, removePokemon };
