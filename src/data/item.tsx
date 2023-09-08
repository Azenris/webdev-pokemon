import { Link } from "react-router-dom";

export enum ItemID {
  Moon_Stone,
  Water_Stone,
  Fire_Stone,
  Leaf_Stone,
  Thuder_Stone,
};

export type Item = {
  id: ItemID;
  name: string;
  desc: string;
  img: string;
  imgW: number;
  imgH: number;
};

export const itemDB: Item[] = [
  {
    id: ItemID.Moon_Stone,
    name: "Moon Stone",
    desc: "",
    img: "/imgs/item/item_fire_stone.png",
    imgW: 24,
    imgH: 24
  },
  {
    id: ItemID.Water_Stone,
    name: "Water Stone",
    desc: "",
    img: "/imgs/item/item_water_stone.png",
    imgW: 24,
    imgH: 24
  },
  {
    id: ItemID.Fire_Stone,
    name: "Fire Stone",
    desc: "",
    img: "/imgs/item/item_fire_stone.png",
    imgW: 24,
    imgH: 24
  },
  {
    id: ItemID.Leaf_Stone,
    name: "Leaf Stone",
    desc: "",
    img: "/imgs/item/item_leaf_stone.png",
    imgW: 24,
    imgH: 24
  },
  {
    id: ItemID.Thuder_Stone,
    name: "Thunder Stone",
    desc: "While writen as Thunder Stone on this website its actual name on the game is Thunderstone.",
    img: "/imgs/item/item_thunder_stone.png",
    imgW: 24,
    imgH: 24
  }
];

export function get_item(itemID: ItemID) {
  return itemDB[itemID];
}

export function get_item_name_span(item: Item) {
  return (
    <Link to={`/item/${item.id}`} className="item-name-link">
        {item.name}
    </Link>
  );
}

export function get_item_id_name_span(itemID: ItemID) {
  const item = get_item(itemID);
  if (!item) {
    return null;
  }
  return get_item_name_span(item);
}