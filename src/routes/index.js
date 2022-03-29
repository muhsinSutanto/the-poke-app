import Home from "../pages/Home";
import PokemonDetail from "../pages/PokemonDetail";

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
];

export default ROUTES;
