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
import { ItemPage } from "./pages/ItemPage";
import { ItemMenuPage } from "./pages/ItemMenuPage";
import { ItemTag, itemDB } from "./data/items";

function App() {
  const items = itemDB.filter((item) => item.tags.includes(ItemTag.Normal)).map((item) => item.id);
  const HMTMs = itemDB.filter((item) => item.tags.filter((tag) => tag == ItemTag.HM || tag == ItemTag.TM).length).map((item) => item.id);

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
        <Route path="/item/:id">
          <Route index element={<ItemPage />} />
        </Route>
        <Route path="/item" element={<ItemMenuPage title="Items" items={items} />} />
        <Route path="/tm" element={<ItemMenuPage title ="Hidden/Technical Machines" items={HMTMs} />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/copyright" element={<CopyrightPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </PokemonContextProvider>
  );
}

export default App;