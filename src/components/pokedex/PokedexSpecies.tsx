import { Pokemon } from "../../data/pokemon";

export type PokedexSpeciesProps = {
  pokemon: Pokemon;
};

export function PokedexSpecies({ pokemon }: PokedexSpeciesProps) {
  return (
    <tr>
      <td>
        <table className="pokedex-species-table">
          <tbody>
            <tr>
              <td colSpan={2} className="pokedex-species-title">
                Species
              </td>
            </tr>
            <tr>
              <td className="pokedex-species-name">
                {pokemon.species_clean}
                <br/>
                ( {pokemon.species} )
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}