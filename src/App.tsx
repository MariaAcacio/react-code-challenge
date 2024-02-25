import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Instructions from "./modules/Instructions";
import Response from "./modules/logical-exercise/views/Response";
import { ListLayout } from "./modules/framework-exercise/views/ListLayout";
import { PokemonLayout } from "./modules/framework-exercise/views/PokemonLayout";
import { FavoritePokemonsLayout } from "./modules/framework-exercise/views/FavoritePokemonsLayout";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Instructions />} />
          <Route path="/logical-exercise" element={<Response />} />
          <Route path="/pokemon" element={<ListLayout />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route
            path="/pokemon/favorites"
            element={<FavoritePokemonsLayout />}
          />
          <Route path="/pokemon/:id" element={<PokemonLayout />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
