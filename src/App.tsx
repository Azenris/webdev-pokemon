import { Navigate, Route, Routes } from "react-router-dom";
import { PokemonContextProvider } from "./context/PokemonContext";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PokemonMenuPage } from "./pages/PokemonMenuPage";
import { PokemonPage } from "./pages/PokemonPage";
import { PokemonLocationsPage } from "./pages/PokemonLocationsPage";
import { PokemonCollectionPage } from "./pages/PokemonCollectionPage";
import { DisclaimerPage } from "./pages/DisclaimerPage";
import { CopyrightPage } from "./pages/CopyrightPage";

function App() {
  return (
    <PokemonContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pokemon/:id">
          <Route index element={<PokemonPage />} />
          <Route path="locations" element={<PokemonLocationsPage />} />
        </Route>
        <Route path="/pokemon" element={<PokemonMenuPage />} />
        <Route path="/collection" element={<PokemonCollectionPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/copyright" element={<CopyrightPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </PokemonContextProvider>
  )
}

export default App
