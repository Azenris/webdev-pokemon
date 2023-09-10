import { Link } from "react-router-dom";
import { EvolveTo, Pokemon, PokemonEvolutionType, get_pokemon, get_pokemon_base, get_pokemon_evolution_index, get_pokemon_name_span } from "../..//data/pokemon";
import { get_item, get_item_id_name_span, get_item_name_span } from "../../data/items";

type PokedexEvolutionPokemonProps = {
  pokemon: Pokemon;
};

function PokedexEvolutionPokemon({ pokemon }: PokedexEvolutionPokemonProps) {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Link to={`/pokemon/${pokemon.id}`} className="pokedex-evolution-image">
              <img
                className="pokemon-image"
                src={pokemon.imgGBC}
                alt={pokemon.name}
                width={pokemon.imgW}
                height={pokemon.imgH}
              />
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            {get_pokemon_name_span(pokemon)}
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
                <Link to={`/item/${item.id}`}>
                  <img
                    src={item.img}
                    alt={item.name}
                    width={item.imgW}
                    height={item.imgH}
                    title={`Use the item ${item.name} on ${pokemon.name} to evolve it into ${evovledPokemon.name}.`}
                  />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                {get_item_name_span(item)}
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

export type PokedexEvolutionBreakdownProps = {
  pokemon: Pokemon;
};

function evolution_procedure(evolvedTo: EvolveTo) {
  return (
    <>
      {evolvedTo.type == PokemonEvolutionType.Level && (
        <>when leveling to <span className="pokedex-evolution-breakdown-emphasis">{evolvedTo.lvl}</span>.</>
      )}

      {evolvedTo.type == PokemonEvolutionType.Item && (
        <>
          when using item{' '}
          {evolvedTo.item ? get_item_id_name_span(evolvedTo.item) : ""}
          {' '}on it.
        </>
      )}

      {evolvedTo.type == PokemonEvolutionType.Trading && (
        <>when <span className="pokedex-evolution-breakdown-emphasis">trading</span> it with another player.</>
      )}
    </>
  );
}

function PokedexEvolutionBreakdown({ pokemon }: PokedexEvolutionBreakdownProps) {
  const subsequentStages = (pokemon.evolveTo ? pokemon.evolveTo.length : 0);
  const stage = get_pokemon_evolution_index(pokemon);
  const evolvedFromPokemon = (pokemon.evolveFrom ? get_pokemon(pokemon.evolveFrom) : undefined);
  const evolvedFromPokemonEvoleTo = (evolvedFromPokemon ? evolvedFromPokemon.evolveTo?.find((i) => i.id == pokemon.id) : undefined);

  return (
    <div className="pokedex-evolution-breakdown">
      <ul className="pokedex-evolution-breakdown-list">
        {pokemon.evolveTo?.map((evolvedTo, index) =>{
          const evolvedToPokemon = get_pokemon(evolvedTo.id);
          if (!evolvedToPokemon)
            return null;
          return (
            <li key={index}>
              {get_pokemon_name_span(pokemon)} evolves into {get_pokemon_name_span(evolvedToPokemon)}{' '}
              {evolution_procedure(evolvedTo)}
            </li>
          );
        })}

        {(evolvedFromPokemon && evolvedFromPokemonEvoleTo) && (
          <li>
            {get_pokemon_name_span(pokemon)} evolves from {get_pokemon_name_span(evolvedFromPokemon)}{' '}
            {evolution_procedure(evolvedFromPokemonEvoleTo)}
          </li>
        )}

        {(stage > 1) && (
          <li>{get_pokemon_name_span(pokemon)} has {stage - 1} prior stages.</li>
        )}

        {(stage != -1) && (
          <li>{get_pokemon_name_span(pokemon)} is stage {stage} of its evolution line.</li>
        )}

        {subsequentStages > 1 && (
          <li>{get_pokemon_name_span(pokemon)} can evolve into {subsequentStages} different POKéMON.</li>
        )}

        {(pokemon.evolveFrom && !pokemon.evolveTo) && (
          <li>{get_pokemon_name_span(pokemon)} is the final form.</li>
        )}
      </ul>
    </div>
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
            <tr>
              <td>
                <PokedexEvolutionBreakdown pokemon={pokemon} />
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
            <tr>
              <td>
                <PokedexEvolutionBreakdown pokemon={pokemon} />
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}