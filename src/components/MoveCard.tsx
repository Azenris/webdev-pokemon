import { itemDB } from "../data/items";
import { get_move } from "../data/moves";

export type MoveCardProps = {
  moveID: number;
  clicked: () => void;
};

export function MoveCard({ moveID, clicked }: MoveCardProps) {

  const move = get_move(moveID);

  if (!move)
  {
    return (
        <h1>Error Unknown moveID: {moveID}</h1>
    );
  }

  const item = itemDB.find((item) => item.move === move.id);

  return (
    <div className="move-card-box" onClick={clicked}>
      <div className="move-card-name">
      {move.name}
        {item && (
          <div className="move-card-name-item">
            {' '}{item.name}
          </div>
        )}
      </div>
      <div className="move-card-image-block">
        <img
          className="move-card-image"
          src={move.img}
          alt={move.name}
          width={move.imgW * 2}
          height={move.imgH * 2}
          loading="lazy"
        />
      </div>
      <div className="move-card-id">#{move.id}</div>
    </div>
  );
}
