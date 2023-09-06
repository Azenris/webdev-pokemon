import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { pokemonDB } from "../data/pokemon";
import { PokedexEvolutions } from "../components/PokedexEvolutions";
import { PokedexTrivia } from "../components/PokedexTrivia";
import { PokedexDescription } from "../components/PokedexDescription";
import { PokedexGameAvailability } from "../components/PokedexGameAvailability";
import { PokedexInformation } from "../components/PokedexInformation";
import { PokedexSpecies } from "../components/PokedexSpecies";
import { PokedexTypes } from "../components/PokedexTypes";
import { PokedexPicture } from "../components/PokedexPicture";
import { PokedexTitle } from "../components/PokedexTitle";

export function PokemonPage() {

  const navigate = useNavigate();
  const params = useParams();
  const pokemonID = Number(params.id);

  if (isNaN(pokemonID)) {
    navigate("/");
    return (
      <></>
    );
  }

  const pokemon = pokemonDB.find(i => i.id === pokemonID);

  if (!pokemon) {
    navigate("/");
    return (
      <></>
    );
  }

  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="pokedex-page">
          <table className="pokedex-table">
            <tbody>
              <PokedexTitle pokemon={pokemon} />
              <PokedexPicture pokemon={pokemon} />
              <PokedexTypes pokemon={pokemon} />
              <PokedexSpecies pokemon={pokemon} />
              <PokedexInformation pokemon={pokemon} />
              <PokedexGameAvailability pokemon={pokemon} />
              <PokedexDescription pokemon={pokemon} />
              <PokedexTrivia pokemon={pokemon} />
              <PokedexEvolutions pokemon={pokemon} />
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}