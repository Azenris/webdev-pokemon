import { PokemonCollectionSelection } from "../components/PokemonCollectionSelection";
import { usePokemonContext } from "../context/PokemonContext";
import pokemonDB from "../data/pokemon.json";

export function PokemonCollection() {
  const { collectionCount, collectionTotal } = usePokemonContext();
  return (
    <>
      <h1>POKéMON Collection</h1>
      <h2>{collectionCount}/{collectionTotal}</h2>
      <div className="collection">
        {pokemonDB.map((pokemon) => {
          return (
            <PokemonCollectionSelection key={pokemon.id} pokemonID={pokemon.id}/>
          );
        })}
      </div>
    </>
  );
}