import { Pokemon, get_pokemon } from "../data/pokemon";
import { PokedexEvolutionPokemon } from "./PokedexEvolutionPokemon";

export type PokedexEvolutionsProps = {
  pokemon: Pokemon;
};

export function PokedexEvolutions({ pokemon }: PokedexEvolutionsProps) {

  if (pokemon.evolveFrom == undefined && (pokemon.evolveTo == undefined || pokemon.evolveTo.length == 0)) {
    return null;
  }

  return (
    <tr>
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
                <table className="pokedex-evolution">
                  <tbody>
                    <tr>
                      <td>
                        {pokemon.evolveFrom && pokemon.evolveFrom.map((evolveFrom) => {
                          const evolutionPokemon = (evolveFrom ? get_pokemon(evolveFrom) : undefined);
                          if (evolutionPokemon)
                            return (
                              <PokedexEvolutionPokemon key={evolveFrom} pokemon={evolutionPokemon} />
                            );
                          else
                            return null;
                        })}
                      </td>
                      <td>
                        <PokedexEvolutionPokemon pokemon={pokemon} />
                      </td>
                      <td>
                        {pokemon.evolveTo && pokemon.evolveTo.map((evolveTo) => {
                          const evolutionPokemon = (evolveTo ? get_pokemon(evolveTo.id) : undefined);
                          if (evolutionPokemon)
                            return (
                              <PokedexEvolutionPokemon key={evolveTo.id} pokemon={evolutionPokemon} />
                            );
                          else
                          return null;
                        })}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}