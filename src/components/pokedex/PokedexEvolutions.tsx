import { EvolveTo, Pokemon, PokemonEvolutionType, get_pokemon } from "../..//data/pokemon";
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
          <td> {pokemon.name}</td>
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
  requirement: EvolveTo;
};

function PokedexEvolutionRequirement({ requirement }: PokedexEvolutionRequirementProps) {

  const pokemon = get_pokemon(requirement.id);
  if (!pokemon)
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
                    title="Trade this pokemon with another player to evolve it."
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
                    title={`Level to ${requirement.lvl}`}
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
                  title={item.name}
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
  return (
    <>
      {pokemon.evolveFrom && pokemon.evolveFrom.map((evolveFrom) => {
        const evolutionPokemon = (evolveFrom ? get_pokemon(evolveFrom) : undefined);
        if (evolutionPokemon) {
          const requirement = evolutionPokemon.evolveTo?.find((evolve) => evolve.id == pokemon.id);
          if (!requirement) {
            return null;
          }
          return (
            <div key={evolveFrom} className="pokedex-evolution" >
              <PokedexEvolutionBackward pokemon={evolutionPokemon} />
              <PokedexEvolutionPokemon pokemon={evolutionPokemon} />
              <PokedexEvolutionRequirement requirement={requirement} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
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
              <PokedexEvolutionRequirement requirement={evolveTo} />
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