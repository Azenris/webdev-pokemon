import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PokemonCard } from "../components/PokemonCard";
import { usePokemonContext } from "../context/PokemonContext";
import pokemonDB from "../data/pokemon.json";

export function PokemonCollectionPage() {
  const { collectionCount, collectionTotal, isInCollection, setInCollection } = usePokemonContext();

  return (
    <>
      <Navbar />
      <div className="main-content">
        <h1>POKéMON Collection</h1>
        <h2>{collectionCount}/{collectionTotal}</h2>
        <div className="poke-page-content">
          <div className="poke-cards-layout">
          {pokemonDB.map((pokemon) => {
            const inCollection = pokemon ? isInCollection(pokemon.id) : false;

            function toggleSelected() {
              if (pokemon) {
                setInCollection(pokemon.id, !inCollection);
              }
            }

            return (
              <PokemonCard
                key={pokemon.id}
                pokemonID={pokemon.id}
                active={inCollection}
                forceInPokeball={false}
                clicked={toggleSelected}
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