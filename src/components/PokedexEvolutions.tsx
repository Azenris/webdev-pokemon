import { Pokemon } from "../data/pokemon";

export type PokedexEvolutionsProps = {
  pokemon: Pokemon;
};

export function PokedexEvolutions({ pokemon }: PokedexEvolutionsProps) {

  if (pokemon.evolveFrom == undefined && (pokemon.evolveTo == undefined || pokemon.evolveTo.length == 0)) {
    return (
      <></>
    );
  }

  return (
    <tr className="pokedex-evolution">
      <td>
        <table className="pokedex-evolution-table">
          <tbody>
            <tr>
              <td className="pokedex-evolution-title">
                Evolution
              </td>
            </tr>
            <tr>
              <td>
                
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}