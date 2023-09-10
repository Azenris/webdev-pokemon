import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { pokemonDB } from "../data/pokemon";
import { itemDB } from "../data/items";

type PokemonContextProviderData = {
  children: ReactNode
};

type PokemonCollection = {
  id: number;
  collected: boolean;
};

export type PokemonContext = {
  collection: PokemonCollection[];
  collectionCount: number;
  collectionTotal: number;
  isInCollection: (id:number) => boolean;
  setInCollection: (id:number, set:boolean) => void;

  itemsTotal: number;
};

const PokemonContext = createContext({} as PokemonContext);

export function usePokemonContext() {
  return useContext(PokemonContext);
}

export function PokemonContextProvider({ children }: PokemonContextProviderData) {

  const [collection, setCollection] = useLocalStorage<PokemonCollection[]>("Pokemon-Collection", []);

  const collectionCount = collection.reduce((quantity, pok) => quantity = quantity + (pok.collected?1:0), 0);
  const collectionTotal = pokemonDB.length;
  const itemsTotal = itemDB.length;

  function isInCollection(id:number) {
    id -= 1;
    if (id < 0 || id >= collection.length)
      return false;
    return collection[id].collected;
  }

  function setInCollection(id:number, set:boolean) {
    id -= 1;
    if (id < 0)
      return;
    if (id >= collection.length)
    {
      var added: PokemonCollection[] = [];
      const offset:number = collection.length;
      const req:number = (id - collection.length) + 1;
      for(var i = 1; i <= req; i++) {
        var value: PokemonCollection = {
          id: offset + i,
          collected: false
        };

        added.push(value);
      }

      added[added.length - 1].collected = set;

      setCollection([...collection, ...added]);
    }
    else
    {
      const index:number = id + 1;

      const newCollections = collection.map((pok) => {
        if (pok.id === index) {
          pok.collected = set;
        }
        return pok;
      });

      setCollection(newCollections);
    }
  }

  const context: PokemonContext = {
    collection,
    collectionCount,
    collectionTotal,
    isInCollection,
    setInCollection,
    itemsTotal,
  };

  return (
    <PokemonContext.Provider value={context}>
      {children}
    </PokemonContext.Provider>
  );
}