import { Pokemon } from "../data/pokemon";
import { PokedexEvolutions } from "../components/PokedexEvolutions";
import { PokedexTrivia } from "../components/PokedexTrivia";
import { PokedexDescription } from "../components/PokedexDescription";
import { PokedexGameAvailability } from "../components/PokedexGameAvailability";
import { PokedexInformation } from "../components/PokedexInformation";
import { PokedexSpecies } from "../components/PokedexSpecies";
import { PokedexTypes } from "../components/PokedexTypes";
import { PokedexPicture } from "../components/PokedexPicture";
import { PokedexTitle } from "../components/PokedexTitle";

export type PokedexEntryProps = {
  pokemon: Pokemon;
};

export function PokedexEntry({ pokemon }: PokedexEntryProps) {

  if (pokemon.desc == undefined) {
    return null;
  }

  return (
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
  );
}