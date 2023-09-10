import { Item } from "../../data/items";

export type ItemdexPictureProps = {
  item: Item;
};

export function ItemdexPicture({ item }: ItemdexPictureProps) {

  if (item.img == undefined) {
    return null;
  }

  return (
    <tr>
      <td>
        <div className="item-image-header">
          <div className="item-image-block-big">
              <img className="item-image-big" src={item.img} alt={item.name} width={item.imgW * 3} height={item.imgH * 3} />
          </div>
        </div>
      </td>
    </tr>
  );
}