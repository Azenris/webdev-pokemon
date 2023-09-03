import { PokemonCollectionSelection } from "../components/PokemonCollectionSelection";
import pokemonDB from "../data/pokemon.json";

export function PokemonCollection() {
  return (
    <>
      <h1>POKéMON Collection</h1>
      <div className="collection">
        {pokemonDB.map((pokemon) => {
          return (
            <PokemonCollectionSelection pokemonID={pokemon.id}/>
          );
        })}
      </div>
    </>
  );
}