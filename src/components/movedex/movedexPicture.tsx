import { Move } from "../../data/moves";
import { Image } from "../Image";

export type MovedexPictureProps = {
  move: Move;
};

export function MovedexPicture({ move }: MovedexPictureProps) {

  if (move.img == undefined) {
    return null;
  }

  return (
    <tr>
      <td>
        <div className="move-image-header">
          <div className="move-image-block-big">
              <Image className="move-image-big" src={move.img} alt={move.name} width={move.imgW * 3} height={move.imgH * 3} />
          </div>
        </div>
      </td>
    </tr>
  );
}