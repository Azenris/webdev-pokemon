import { usePokemonContext } from "../context/PokemonContext";
import pokemonDB from "../data/pokemon.json";

export type PokemonCollectionSelectionProps = {
  pokemonID: number;
};

export function PokemonCollectionSelection({ pokemonID }: PokemonCollectionSelectionProps) {

  const { isInCollection, setInCollection } = usePokemonContext();
  const pokemon = pokemonDB.find(i => i.id === pokemonID);
  const inCollection = pokemon ? isInCollection(pokemon.id) : false;
  const active = inCollection ? "caught" : false;

  function toggleSelected() {
    if (pokemon) {
      setInCollection(pokemon.id, !inCollection);
    }
  }

  if (pokemon)
  {
    return (
      <div className={`collection-box ${active}`} onClick={toggleSelected}>
        <div className={`collection-name ${active}`}>{pokemon.name}</div>
        <div className={`collection-image-block ${active}`}>
          <img className={`collection-image ${active}`} src={pokemon.imgGBC} alt={pokemon.name} width={pokemon.imgW} height={pokemon.imgH} />
        </div>
        <div className={`collection-dexno ${active}`}>#{pokemon.id}</div>
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
