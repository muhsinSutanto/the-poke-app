import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchPokemonList } from "./store/actions/pokeAction";

function App() {
   const dispatch = useDispatch();
   const pokemonList = useSelector((state) => state);
   useEffect(() => {
      dispatch(fetchPokemonList());
   }, []);

   console.log("list", pokemonList);
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               Learn React
            </a>
         </header>
      </div>
   );
}

export default App;
