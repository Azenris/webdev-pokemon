import { PokemonType, PokemonTypeNames } from "../context/PokemonContext";

export type ElementTypeProps = {
  type: PokemonType;
};

export function PokemonElement({ type }: ElementTypeProps) {
  return (
    <span className={`element-name element-${PokemonTypeNames[type]}`}>
      {PokemonTypeNames[type]}
    </span>
  );
}

export type PokemonElementProps = {
  types: PokemonType[];
};

export function PokemonElements({ types }: PokemonElementProps) {
  return (
    <div className="poke-card-element">
      {types.map((type, index) => {
        return (
          <span key={index}>
            {index != 0 && '/'}
            <PokemonElement type={type}/>
          </span>
        );
      })}
    </div>
  );
}

export function PokemonElementsSoft({ types }: PokemonElementProps) {
  return (
    <>
      {types.map((type, index) => {
        return (
          <span key={index}>
            {index != 0 && ' / '}
            <span className={`element-name-soft element-${PokemonTypeNames[type]}-soft`}>
              {PokemonTypeNames[type]}
            </span>
          </span>
        );
      })}
    </>
  );
}