import { Pokemon } from "../../data/pokemon";
import { PokemonElements } from "../PokemonElement";

export type PokedexTypesProps = {
  pokemon: Pokemon;
};

export function PokedexTypes({ pokemon }: PokedexTypesProps) {
  return (
    <tr>
      <td>
        <table className="pokedex-types-table">
          <tbody>
            <tr>
              <td className="pokedex-types-title">
                {pokemon.types.length > 1 ? "Types" : "Type"}
              </td>
            </tr>
            <tr>
              <td className="pokedex-types-name">
                <PokemonElements types={pokemon.types} />
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}