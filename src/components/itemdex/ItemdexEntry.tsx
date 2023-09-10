import { Item, ItemTag } from "../../data/items";
import { ItemdexDescription } from "./ItemdexDescription";
import { ItemdexPicture } from "./ItemdexPicture";
import { ItemdexTeachMove } from "./ItemdexTeachMove";
import { ItemdexTitle } from "./ItemdexTitle";
import { ItemdexTrivia } from "./ItemdexTrivia";

export type ItemdexEntryProps = {
  item: Item;
};

export function ItemdexEntry({ item }: ItemdexEntryProps) {

  if (item.desc == undefined) {
    return null;
  }

  return (
    <div className="itemdex-page">
      <table className="itemdex-table">
        <tbody>
          <ItemdexTitle item={item} />
          <ItemdexPicture item={item} />
          {item.tags.filter((tag) => tag == ItemTag.HM || tag == ItemTag.TM).length > 0 && <ItemdexTeachMove item={item} />}
          <ItemdexDescription item={item} />
          <ItemdexTrivia item={item} />
        </tbody>
      </table>
    </div>
  );
}