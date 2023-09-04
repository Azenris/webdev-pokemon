import { PokemonElement } from "./PokemonElement";
import { PokemonGameVersionNames, PokemonAvailableGameVersionNames } from "../context/PokemonContext";
import pokemonDB from "../data/pokemon.json";

export type PokemonSelectionProps = {
  pokemonID: number;
  active: boolean;
  forceInPokeball: boolean;
  clicked: () => void;
};

export function PokemonCard({ pokemonID, active, forceInPokeball, clicked }: PokemonSelectionProps) {

  const pokemon = pokemonDB.find(i => i.id === pokemonID);

  if (pokemon)
  {
    const activeClass = active ? "caught" : "";

    return (
      <div className={`poke-card-box ${activeClass}`} onClick={clicked}>
        <div>
          {pokemon.available.map((game) => {
            return (
              <img
                className="poke-card-ball"
                src={`/imgs/pokeball-${game}.png`}
                alt={PokemonGameVersionNames[game]}
                title={PokemonAvailableGameVersionNames[game]}
                width="24"
                height="24"
              />
            );
          })}
        </div>
        <div className={`poke-card-name ${activeClass}`}>{pokemon.name}</div>
        <div className={`poke-card-image-block ${activeClass} ${forceInPokeball ? "pokeball" : ""}`}>
          <img className={`poke-card-image ${activeClass}`} src={pokemon.imgGBC} alt={pokemon.name} width={pokemon.imgW} height={pokemon.imgH} />
        </div>
        <div className="poke-card-element">
          {pokemon.types.map((type, index) => {
            return (
              <span key={index}>
                {index != 0 && '/'}
                <PokemonElement type={type}/>
              </span>
            );
          })}
        </div>
        <div className={`poke-card-dexno ${activeClass}`}>#{pokemon.id}</div>
      </div>
    );
  }
  else
  {
    return (
      <>
        <h1>Error Unknown ID: {pokemonID}</h1>
      </>
    );
  }
}
