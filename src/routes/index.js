import Home from "../pages/Home";
import PokemonDetail from "../pages/PokemonDetail";
import MyPokemon from "../pages/MyPokemon";

const ROUTES = [
   {
      path: "/",
      exact: true,
      element: <Home />,
   },
   {
      path: "/pokemon/:id",
      exact: true,
      element: <PokemonDetail />,
   },
   {
      path: "/my-pokemon",
      exact: true,
      element: <MyPokemon />,
   },
];

export default ROUTES;
