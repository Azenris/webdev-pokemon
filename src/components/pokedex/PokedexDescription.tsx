import { Pokemon } from "../../data/pokemon";

export type PokedexDescriptionProps = {
  pokemon: Pokemon;
};

export function PokedexDescription({ pokemon }: PokedexDescriptionProps) {

  if (pokemon.desc == undefined || pokemon.desc == "") {
    return null;
  }

  return (
    <tr>
      <td>
        <table className="pokedex-desc-table">
          <tbody>
            <tr>
              <td className="pokedex-desc-title">
                Description
              </td>
            </tr>
            <tr>
              <td>
                <div className="pokedex-desc">
                  {pokemon.desc}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}