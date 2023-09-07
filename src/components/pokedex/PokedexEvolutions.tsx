import { EvolveTo, Pokemon, PokemonEvolutionType, get_pokemon, get_pokemon_base } from "../..//data/pokemon";
import { get_item } from "../../data/item";

type PokedexEvolutionPokemonProps = {
  pokemon: Pokemon;
};

function PokedexEvolutionPokemon({ pokemon }: PokedexEvolutionPokemonProps) {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <div className="pokedex-evolution-image">
              <img
                className="pokemon-image"
                src={pokemon.imgGBC}
                alt={pokemon.name}
                width={pokemon.imgW}
                height={pokemon.imgH}
              />
            </div>
          </td>
        </tr>
        <tr>
          <td className="pokedex-evolution-pokemon-name">
            {pokemon.name}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function PokedexEvolutionArrow() {
  return (
    <img
      className="pokedex-evolution-requirement-arrow"
      src="/imgs/evolution_arrow.png"
      alt="→"
      width={24}
      height={24}
      title="Evolution"
    />
  );
}

type PokedexEvolutionRequirementProps = {
  pokemon: Pokemon;
  requirement: EvolveTo;
};

function PokedexEvolutionRequirement({ pokemon, requirement }: PokedexEvolutionRequirementProps) {

  const evovledPokemon = get_pokemon(requirement.id);
  if (!evovledPokemon)
    return null;
  const item = requirement.item ? get_item(requirement.item) : undefined;

  return (
    <div className="pokedex-evolution-requirement">
      <PokedexEvolutionArrow />
      {requirement.type == PokemonEvolutionType.Trading && (
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    src="/imgs/evolution_trade.png"
                    alt="Trade"
                    width={26}
                    height={26}
                    title={`Trade ${pokemon.name} with another player to evolve it into ${evovledPokemon.name}.`}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Trade
                </td>
              </tr>
            </tbody>
          </table>
      )}
      {requirement.lvl && (
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    src="/imgs/evolution_levelup.png"
                    alt="LevelUp"
                    width={26}
                    height={26}
                    title={`Level ${pokemon.name} to level ${requirement.lvl} to evolve into ${evovledPokemon.name}.`}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {requirement.lvl}
                </td>
              </tr>
            </tbody>
          </table>
      )}
      {item && (
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  src={item.img}
                  alt={item.name}
                  width={item.imgW}
                  height={item.imgH}
                  title={`Use the item ${item.name} on ${pokemon.name} to evolve it into ${evovledPokemon.name}.`}
                />
              </td>
            </tr>
            <tr>
              <td>
                {item.name}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    <PokedexEvolutionArrow />
    </div>
  );
}

type PokedexEvolutionBackwardProps = {
  pokemon: Pokemon;
};

function PokedexEvolutionBackward({ pokemon }: PokedexEvolutionBackwardProps) {
  if (!pokemon.evolveFrom) {
    return null;
  }

  const evolutionPokemon = get_pokemon(pokemon.evolveFrom);

  if (!evolutionPokemon) {
    return null;
  }

  const requirement = evolutionPokemon.evolveTo?.find((evolve) => evolve.id == pokemon.id);
  if (!requirement) {
    return null;
  }

  return (
    <div className="pokedex-evolution" >
      <PokedexEvolutionBackward pokemon={evolutionPokemon} />
      <PokedexEvolutionPokemon pokemon={evolutionPokemon} />
      <PokedexEvolutionRequirement pokemon={pokemon} requirement={requirement} />
    </div>
  );
}

type PokedexEvolutionForwardProps = {
  pokemon: Pokemon;
};

function PokedexEvolutionForward({ pokemon }: PokedexEvolutionForwardProps) {
  return (
    <>
      {pokemon.evolveTo && pokemon.evolveTo.map((evolveTo) => {
        const evolutionPokemon = (evolveTo ? get_pokemon(evolveTo.id) : undefined);
        if (evolutionPokemon) {
          return (
            <div key={evolveTo.id} className="pokedex-evolution" >
              <PokedexEvolutionRequirement pokemon={pokemon} requirement={evolveTo} />
              <PokedexEvolutionPokemon key={evolveTo.id} pokemon={evolutionPokemon} />
              <PokedexEvolutionForward pokemon={evolutionPokemon} />
            </div>
          );
        } else{
          return null;
        }
      })}
    </>
  );
}

export type PokedexEvolutionsProps = {
  pokemon: Pokemon;
};

export function PokedexEvolutions({ pokemon }: PokedexEvolutionsProps) {

  if (pokemon.evolveFrom == undefined && (pokemon.evolveTo == undefined || pokemon.evolveTo.length == 0)) {
    return null;
  }

  const basePokemon = get_pokemon_base(pokemon);

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
                <div className="pokedex-evolution">
                  <PokedexEvolutionPokemon pokemon={basePokemon} />
                  <div className="pokedex-evolution-descendants">
                    <PokedexEvolutionForward pokemon={basePokemon} />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}


export type PokedexEvolutionLineProps = {
  pokemon: Pokemon;
};

export function PokedexEvolutionLine({ pokemon }: PokedexEvolutionLineProps) {

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
                <div className="pokedex-evolution">
                  <PokedexEvolutionBackward pokemon={pokemon} />
                  <PokedexEvolutionPokemon pokemon={pokemon} />
                  <PokedexEvolutionForward pokemon={pokemon} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}