import { Pokemon } from "../../data/pokemon";

export type PokedexTriviaProps = {
  pokemon: Pokemon;
};

export function PokedexTrivia({ pokemon }: PokedexTriviaProps) {

  if (pokemon.trivia == undefined || pokemon.trivia.length == 0) {
    return null;
  }

  return (
    <tr>
      <td>
        <table className="pokedex-trivia-table">
          <tbody>
            <tr>
              <td className="pokedex-trivia-title">
                Trivia
              </td>
            </tr>
            <tr>
              <td>
                <ul className="pokedex-trivia-list">
                  {pokemon.trivia.map((trivia, index) => {
                    return (
                      <li key={index}>
                        {trivia}
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}