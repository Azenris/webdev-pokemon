import { Pokemon } from "../../data/pokemon";

export type PokedexPictureProps = {
  pokemon: Pokemon;
};

export function PokedexPicture({ pokemon }: PokedexPictureProps) {

  if (pokemon.imgGBC == undefined) {
    return null;
  }

  return (
    <tr>
      <td>
        <div className="pokemon-image-header">
          <div className="pokemon-image-block-big">
              <img className="pokemon-image-big" src={pokemon.imgGBC} alt={pokemon.name} width={pokemon.imgW * 3} height={pokemon.imgH * 3} />
          </div>
        </div>
      </td>
    </tr>
  );
}