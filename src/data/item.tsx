export enum ItemID {
  Moon_Stone,
  Water_Stone,
  Fire_Stone,
  Leaf_Stone,
  Thuderstone,
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
    id: ItemID.Thuderstone,
    name: "Thunderstone",
    desc: "",
    img: "/imgs/item/item_thunderstone.png",
    imgW: 24,
    imgH: 24
  }
];

export function get_item(itemID: ItemID) {
  return itemDB[itemID];
}