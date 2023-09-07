import { Pokemon } from "../../data/pokemon";

export type PokedexInformationProps = {
  pokemon: Pokemon;
};

export function PokedexInformation({ pokemon }: PokedexInformationProps) {
  return (
    <tr>
      <td>
        <table className="pokedex-info-table">
          <tbody>
            <tr>
              <td colSpan={2} className="pokedex-info-title">Info</td>
            </tr>
            <tr>
              <td className="pokedex-info-name">Dex No.</td>
              <td className="pokedex-info-value">#{pokemon.id}</td>
            </tr>
            <tr>
              <td className="pokedex-info-name">Height</td>
              <td className="pokedex-info-value">{pokemon.height}</td>
            </tr>
            <tr>
              <td className="pokedex-info-name">Weight</td>
              <td className="pokedex-info-value">{pokemon.weight.toFixed(1)} lb</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}