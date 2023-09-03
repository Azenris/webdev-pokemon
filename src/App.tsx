import { Navigate, Route, Routes } from "react-router-dom"
import { PokemonContextProvider } from "./context/PokemonContext"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Pokemon } from "./pages/Pokemon"
import { PokemonLocations } from "./components/PokemonLocations"

function App() {
  return (
    <PokemonContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon/:id">
          <Route index element={<Pokemon />} />
          <Route path="locations" element={<PokemonLocations />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </PokemonContextProvider>
  )
}

export default App
