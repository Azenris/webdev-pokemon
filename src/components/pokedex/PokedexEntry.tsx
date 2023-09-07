import { Pokemon } from "../../data/pokemon";
import { PokedexEvolutions } from "./PokedexEvolutions";
import { PokedexTrivia } from "./PokedexTrivia";
import { PokedexDescription } from "./PokedexDescription";
import { PokedexGameAvailability } from "./PokedexGameAvailability";
import { PokedexInformation } from "./PokedexInformation";
import { PokedexSpecies } from "./PokedexSpecies";
import { PokedexTypes } from "./PokedexTypes";
import { PokedexPicture } from "./PokedexPicture";
import { PokedexTitle } from "./PokedexTitle";

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