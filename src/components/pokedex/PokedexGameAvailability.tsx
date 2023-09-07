import { Pokemon, PokemonAvailableGameVersionNames, PokemonGameVersionNames } from "../../data/pokemon";

export type PokedexGameAvailabilityProps = {
  pokemon: Pokemon;
};

export function PokedexGameAvailability({ pokemon }: PokedexGameAvailabilityProps) {

  if (pokemon.available == undefined || pokemon.available.length == 0) {
    return null;
  }

  return (
    <tr>
      <td>
        <table>
          <tbody>
            <tr>
              <td>
                Available in versions:
              </td>
            </tr>
            {pokemon.available.map((game) => {
              return (
                <tr key={game}>
                  <td>
                    <div className="pokedex-game-availability">
                      <img
                        className="poke-card-ball"
                        src={`/imgs/pokeball-${game}.png`}
                        alt={PokemonGameVersionNames[game]}
                        title={PokemonAvailableGameVersionNames[game]}
                        width="24"
                        height="24"
                      />
                      {PokemonGameVersionNames[game]}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </td>
    </tr>
  );
}