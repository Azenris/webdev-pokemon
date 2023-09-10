import { ElementTypeID, ElementNames } from "../data/elements";

export type ElementTypeProps = {
  type: ElementTypeID;
};

export function PokemonElement({ type }: ElementTypeProps) {
  return (
    <span className={`element-name element-${ElementNames[type]}`}>
      {ElementNames[type]}
    </span>
  );
}

export type PokemonElementProps = {
  types: ElementTypeID[];
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
            <span className={`element-name-soft element-${ElementNames[type]}-soft`}>
              {ElementNames[type]}
            </span>
          </span>
        );
      })}
    </>
  );
}