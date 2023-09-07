import { Pokemon } from "../data/pokemon";

export type PokedexEvolutionPokemonProps = {
  pokemon: Pokemon;
};

export function PokedexEvolutionPokemon({ pokemon }: PokedexEvolutionPokemonProps) {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <div className="pokedex-evolution-image">
              <img className="pokemon-image" src={pokemon.imgGBC} alt={pokemon.name} width={pokemon.imgW} height={pokemon.imgH} />
            </div>
          </td>
        </tr>
        <tr>
          <td> {pokemon.name}</td>
        </tr>
      </tbody>
    </table>
  );
}