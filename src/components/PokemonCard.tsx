import { PokemonElements } from "./PokemonElement";
import { PokemonGameVersionNames, PokemonAvailableGameVersionNames, get_pokemon } from "../data/pokemon";
import { Image } from "./Image";

export type PokemonSelectionProps = {
  pokemonID: number;
  active: boolean;
  forceInPokeball: boolean;
  clicked: () => void;
};

export function PokemonCard({ pokemonID, active, forceInPokeball, clicked }: PokemonSelectionProps) {

  const pokemon = get_pokemon(pokemonID);

  if (!pokemon)
  {
    return (
        <h1>Error Unknown pokemonID: {pokemonID}</h1>
    );
  }

  const activeClass = active ? "caught" : "";

  return (
    <div className={`poke-card-box ${activeClass}`} onClick={clicked}>
      <div>
        {pokemon.available.map((game) => {
          return (
            <Image
              key={game}
              className="poke-card-ball"
              src={`/imgs/pokeball-${game}.png`}
              alt={PokemonGameVersionNames[game]}
              title={PokemonAvailableGameVersionNames[game]}
              width={24}
              height={24}
              loading="lazy"
            />
          );
        })}
      </div>
      <div className={`poke-card-name ${activeClass}`}>{pokemon.name}</div>
      <div className={`poke-card-image-block ${activeClass} ${forceInPokeball ? "pokeball" : ""}`}>
        <Image className={`poke-card-image ${activeClass}`} src={pokemon.imgGBC} alt={pokemon.name} width={pokemon.imgW} height={pokemon.imgH} />
      </div>
      <PokemonElements types={pokemon.types} />
      <div className={`poke-card-id ${activeClass}`}>#{pokemon.id}</div>
    </div>
  );
}
