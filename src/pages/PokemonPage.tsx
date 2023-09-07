import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { get_pokemon, pokemonDB } from "../data/pokemon";
import { PokedexEntry } from "../components/PokedexEntry";

export function PokemonPage() {

  const navigate = useNavigate();
  const params = useParams();
  const pokemonID = Number(params.id);

  if (isNaN(pokemonID)) {
    navigate("/");
    return null;
  }

  const pokemon = get_pokemon(pokemonID);

  if (!pokemon) {
    navigate("/");
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="main-content">
        <PokedexEntry pokemon={pokemon} />
      </div>
      <Footer />
    </>
  );
}