import { Pokemon } from "../../data/pokemon";
import { PokemonElementsSoft } from "../PokemonElement";

export type PokedexTitleProps = {
  pokemon: Pokemon;
};

export function PokedexTitle({ pokemon }: PokedexTitleProps) {
  return (
    <tr>
      <td>
        <div className="pokedex-name">{pokemon.name}</div>
        <div className="pokedex-subscript">POKéMON</div>
        <div className="pokedex-types">
          <PokemonElementsSoft types={pokemon.types} />
        </div>
      </td>
    </tr>
  );
}