import "./App.css";
import ROUTES from "./routes";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
   const routePages = ROUTES.map((detail, idx) => (
      <Route path={detail.path} element={detail.element} key={idx} />
   ));

   return (
      <BrowserRouter>
         <Routes>{routePages}</Routes>
      </BrowserRouter>
   );
}

export default App;
