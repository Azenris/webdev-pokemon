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
  trivia: string[];
};

export const itemDB: Item[] = [
  {
    id: ItemID.Moon_Stone,
    name: "Moon Stone",
    desc: "This item can evolve some POKéMON.",
    img: "/imgs/item/item_moon_stone.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      "One of the five evolution stones."
    ]
  },
  {
    id: ItemID.Water_Stone,
    name: "Water Stone",
    desc: "This item can evolve some POKéMON.",
    img: "/imgs/item/item_water_stone.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      "One of the five evolution stones."
    ]
  },
  {
    id: ItemID.Fire_Stone,
    name: "Fire Stone",
    desc: "This item can evolve some POKéMON.",
    img: "/imgs/item/item_fire_stone.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      "One of the five evolution stones."
    ]
  },
  {
    id: ItemID.Leaf_Stone,
    name: "Leaf Stone",
    desc: "This item can evolve some POKéMON.",
    img: "/imgs/item/item_leaf_stone.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      "One of the five evolution stones."
    ]
  },
  {
    id: ItemID.Thuder_Stone,
    name: "Thunder Stone",
    desc: "This item can evolve some POKéMON.",
    img: "/imgs/item/item_thunder_stone.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      "One of the five evolution stones.",
      "While writen as Thunder Stone on this website its actual name in the game is Thunderstone.",
      "Written as Thunderstone, it is the odd one out among the other evolution items."
    ]
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