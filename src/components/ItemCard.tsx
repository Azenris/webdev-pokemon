import { ElementNames } from "../data/elements";
import { get_item } from "../data/items";
import { get_move } from "../data/moves";

export type ItemCardProps = {
  itemID: number;
  clicked: () => void;
};

export function ItemCard({ itemID, clicked }: ItemCardProps) {

  const item = get_item(itemID);

  if (!item)
  {
    return (
        <h1>Error Unknown itemID: {itemID}</h1>
    );
  }

  const move = item.move ? get_move(item.move) : undefined;

  return (
    <div className="item-card-box" onClick={clicked}>
      <div className="item-card-name">
        {item.name}
        {move && (
          
          <div className={`item-card-name-move element-${ElementNames[move.type]}-soft`}>
            {' '}{move.name}
          </div>
        )}
      </div>
      <div className="item-card-image-block">
        <img className="item-card-image" src={item.img} alt={item.name} width={item.imgW * 2} height={item.imgH * 2} />
      </div>
      <div className="item-card-id">#{item.id}</div>
    </div>
  );
}
