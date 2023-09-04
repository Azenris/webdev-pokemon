import { PokemonCard } from "../components/PokemonCard";
import { usePokemonContext } from "../context/PokemonContext";
import pokemonDB from "../data/pokemon.json";

export function PokemonMenuPage() {
  const { collectionTotal } = usePokemonContext();
  return (
    <>
      <h1>POKéMON</h1>
      <h2>{collectionTotal}</h2>
      <div className="poke-cards-layout">
        {pokemonDB.map((pokemon) => {
          function viewPokemon() {
            
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
    </>
  );
}