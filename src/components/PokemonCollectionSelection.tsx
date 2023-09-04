import { usePokemonContext } from "../context/PokemonContext";
import pokemonDB from "../data/pokemon.json";

export type PokemonCollectionSelectionProps = {
  pokemonID: number;
};

export function PokemonCollectionSelection({ pokemonID }: PokemonCollectionSelectionProps) {

  const { isInCollection, setInCollection } = usePokemonContext();
  const pokemon = pokemonDB.find(i => i.id === pokemonID);

  function toggleSelected() {
    if (pokemon) {
      setInCollection(pokemon.id, !isInCollection(pokemon.id));
    }
  }

  if (pokemon)
  {
    return (
      <div className="collection-box" onClick={toggleSelected}>
        <div className="collection-name">{pokemon.name}</div>
        <div className="collection-image-block">
          <img className="collection-image" src={pokemon.imgGBC} alt={pokemon.name} width={pokemon.imgW} height={pokemon.imgH} />
        </div>
        <div className="collection-dexno">#{pokemon.id}</div>
      </div>
    );
  }
  else
  {
    return (
      <>
        <h1>Unknown ID: {pokemonID}</h1>
      </>
    );
  }
}
