import { ReactNode, createContext, useContext } from "react";

export const PokemonTypes: string[] = [
  "Bug",
  "Dragon",
  "Electric",
  "Fighting",
  "Fire",
  "Flying",
  "Ghost",
  "Grass",
  "Ground",
  "Ice",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Water",
];

export enum PokemonEvolutionType {
  Level,
  Item,
  Trading,
};

export enum PokemonGameVersion {
  Red,
  Blue,
  Yellow,
};

type PokemonContextProviderData = {
  children: ReactNode
};

export type PokemonContext = {
  version: number;
};

const PokemonContext = createContext({} as PokemonContext);

export function usePokemonContext() {
  return useContext(PokemonContext);
}

export function PokemonContextProvider({ children }: PokemonContextProviderData) {

  const version:number = 1;

  const context: PokemonContext = {
    version
  };

  return (
    <PokemonContext.Provider value={context}>
      {children}
    </PokemonContext.Provider>
  );
}