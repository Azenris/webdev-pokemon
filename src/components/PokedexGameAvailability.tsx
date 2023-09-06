import { Pokemon, PokemonAvailableGameVersionNames, PokemonGameVersionNames } from "../data/pokemon";

export type PokedexGameAvailabilityProps = {
  pokemon: Pokemon;
};

export function PokedexGameAvailability({ pokemon }: PokedexGameAvailabilityProps) {

  if (pokemon.available == undefined || pokemon.available.length == 0) {
    return (
      <></>
    );
  }

  return (
    <tr>
      <td>
        <table>
          <tbody>
            <td>
              <tr>Available in versions:</tr>
              {pokemon.available.map((game) => {
                return (
                  <tr>
                    <img
                      className="poke-card-ball"
                      src={`/imgs/pokeball-${game}.png`}
                      alt={PokemonGameVersionNames[game]}
                      title={PokemonAvailableGameVersionNames[game]}
                      width="24"
                      height="24"
                    />
                    {PokemonGameVersionNames[game]}
                  </tr>
                );
              })}
          </td>
          </tbody>
        </table>
      </td>
    </tr>
  );
}