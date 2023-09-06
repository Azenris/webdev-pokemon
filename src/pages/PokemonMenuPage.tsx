import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PokemonCard } from "../components/PokemonCard";
import { usePokemonContext } from "../context/PokemonContext";
import { pokemonDB } from "../data/pokemon";
import { useNavigate } from "react-router-dom";

export function PokemonMenuPage() {
  const { collectionTotal } = usePokemonContext();
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="main-content">
        <h1>POKéMON</h1>
        <h2>{collectionTotal}</h2>
        <div className="poke-page-content">
          <div className="poke-cards-layout">
            {pokemonDB.map((pokemon) => {
              function viewPokemon() {
                navigate(`/pokemon/${pokemon.id}`);
              }
              return (
                <PokemonCard
                  key={pokemon.id}
                  pokemonID={pokemon.id}
                  active={false}
                  forceInPokeball={true}
                  clicked={viewPokemon}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}