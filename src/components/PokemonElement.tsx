import { PokemonType, PokemonTypeNames } from "../context/PokemonContext";

export type PokemonElementProps = {
  type: PokemonType;
};

export function PokemonElement({ type }: PokemonElementProps) {
  return (
    <span className={`element-name element-${PokemonTypeNames[type]}`}>
      {PokemonTypeNames[type]}
    </span>
  );
}