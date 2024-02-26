import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Instructions from "./modules/Instructions";
import Response from "./modules/logical-exercise/views/Response";
import { ListLayout } from "./modules/framework-exercise/views/ListLayout";
import { PokemonLayout } from "./modules/framework-exercise/views/PokemonLayout";
import { FavoritePokemonsLayout } from "./modules/framework-exercise/views/FavoritePokemonsLayout";
import { ROUTES } from "./utils/routes";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path={ROUTES.HOME} element={<Instructions />} />
          <Route path={ROUTES.LOGICAL_EXERCISE} element={<Response />} />
          <Route path={ROUTES.POKEMON} element={<ListLayout />} />
          <Route path={ROUTES.INSTRUCTIONS} element={<Instructions />} />
          <Route path={ROUTES.FAVORITES} element={<FavoritePokemonsLayout />} />
          <Route path={ROUTES.SINGLE_POKEMON} element={<PokemonLayout />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
