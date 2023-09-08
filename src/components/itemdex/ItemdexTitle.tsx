import { Item } from "../../data/item";

export type ItemdexTitleProps = {
  item: Item;
};

export function ItemdexTitle({ item }: ItemdexTitleProps) {
  return (
    <tr>
      <td>
        <div className="itemdex-name">{item.name}</div>
        <div className="itemdex-subscript">Item</div>
      </td>
    </tr>
  );
}