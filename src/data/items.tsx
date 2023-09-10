import { Link } from "react-router-dom";
import { MoveID } from "./moves";

export enum ItemID {
  Unused_0,
  Master_Ball,
  Ultra_Ball,
  Great_Ball,
  Pokeball,
  Town_Map,
  Bicycle,
  Unused_1,
  Safari_Ball,
  Pokedex,
  Moon_Stone,
  Antidote,
  Burn_Heal,
  Ice_Heal,
  Awakening,
  Paralyze_Heal,
  Full_Restore,
  Max_Potion,
  Hyper_Potion,
  Super_Potion,
  Potion,
  Boulder_Badge,
  Cascade_Badge,
  Thunder_Badge,
  Rainbow_Badge,
  Soul_Badge,
  Marsh_Badge,
  Volcano_Badge,
  Earth_Badge,
  Escape_Rope,
  Repel,
  Old_Amber,
  Fire_Stone,
  Thunder_Stone,
  Water_Stone,
  HP_Up,
  Protein,
  Iron,
  Carbos,
  Calcium,
  Rare_Candy,
  Dome_Fossil,
  Helix_Fossil,
  Secret_Key,
  Unused_2,
  Bike_Voucher,
  X_Accuracy,
  Leaf_Stone,
  Card_Key,
  Nugget,
  Unused_3,
  Pokedoll,
  Full_Heal,
  Revive,
  Max_Revive,
  Guard_Spec,
  Super_Repel,
  Max_Repel,
  Dire_Hit,
  Coin,
  Fresh_Water,
  Soda_Pop,
  Lemonade,
  SS_Ticket,
  Gold_Teeth,
  X_Attack,
  X_Defend,
  X_Speed,
  X_Special,
  Coin_Case,
  Oaks_Parcel,
  Item_Finder,
  Silph_Scope,
  Pokeflute,
  Lift_Key,
  Exp_All,
  Old_Rod,
  Good_Rod,
  Super_Rod,
  PP_Up,
  Ether,
  Max_Ether,
  Elixer,
  Max_Elixer,
  Unused_4,
  Unused_5,
  Unused_6,
  Unused_7,
  Unused_8,
  Unused_9,
  Unused_10,
  Unused_11,
  Unused_12,
  Unused_13,
  Unused_14,
  Unused_15,
  Unused_16,
  Unused_17,
  Unused_18,
  Unused_19,
  Unused_20,
  Unused_21,
  Unused_22,
  Unused_23,
  Unused_24,
  Unused_25,
  Unused_26,
  Unused_27,
  Unused_28,
  Unused_29,
  Unused_30,
  Unused_31,
  Unused_32,
  Unused_33,
  Unused_34,
  Unused_35,
  Unused_36,
  Unused_37,
  Unused_38,
  Unused_39,
  Unused_40,
  Unused_41,
  Unused_42,
  Unused_43,
  Unused_44,
  Unused_45,
  Unused_46,
  Unused_47,
  Unused_48,
  Unused_49,
  Unused_50,
  Unused_51,
  Unused_52,
  Unused_53,
  Unused_54,
  Unused_55,
  Unused_56,
  Unused_57,
  Unused_58,
  Unused_59,
  Unused_60,
  Unused_61,
  Unused_62,
  Unused_63,
  Unused_64,
  Unused_65,
  Unused_66,
  Unused_67,
  Unused_68,
  Unused_69,
  Unused_70,
  Unused_71,
  Unused_72,
  Unused_73,
  Unused_74,
  Unused_75,
  Unused_76,
  Unused_77,
  Unused_78,
  Unused_79,
  Unused_80,
  Unused_81,
  Unused_82,
  Unused_83,
  Unused_84,
  Unused_85,
  Unused_86,
  Unused_87,
  Unused_88,
  Unused_89,
  Unused_90,
  Unused_91,
  Unused_92,
  Unused_93,
  Unused_94,
  Unused_95,
  Unused_96,
  Unused_97,
  Unused_98,
  Unused_99,
  Unused_100,
  Unused_101,
  Unused_102,
  Unused_103,
  Unused_104,
  Unused_105,
  Unused_106,
  Unused_107,
  Unused_108,
  Unused_109,
  Unused_110,
  Unused_111,
  Unused_112,
  Unused_113,
  Unused_114,
  Unused_115,
  HM01,
  HM02,
  HM03,
  HM04,
  HM05,
  TM01,
  TM02,
  TM03,
  TM04,
  TM05,
  TM06,
  TM07,
  TM08,
  TM09,
  TM10,
  TM11,
  TM12,
  TM13,
  TM14,
  TM15,
  TM16,
  TM17,
  TM18,
  TM19,
  TM20,
  TM21,
  TM22,
  TM23,
  TM24,
  TM25,
  TM26,
  TM27,
  TM28,
  TM29,
  TM30,
  TM31,
  TM32,
  TM33,
  TM34,
  TM35,
  TM36,
  TM37,
  TM38,
  TM39,
  TM40,
  TM41,
  TM42,
  TM43,
  TM44,
  TM45,
  TM46,
  TM47,
  TM48,
  TM49,
  TM50,
  Unused_116,
  Unused_117,
  Unused_118,
  Unused_119,
  Unused_120,
};

export enum ItemTag {
  Normal,
  KeyItem,
  Pokeball,
  Evolution_Stone,
  CombatItem,
  X_Item,
  FishingRod,
  Vitamin,
  GymBadge,
  Fossil,
  HM,
  TM,
  Invalid,
};

export type Item = {
  id: ItemID;
  tags: ItemTag[];
  name: string;
  desc: string;
  img: string;
  imgW: number;
  imgH: number;
  trivia: string[];
  move?: MoveID;
};

export const itemDB: Item[] = [
  {
    id: ItemID.Unused_0,
    tags: [ItemTag.Invalid],
    name: "Unused_0",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Master_Ball,
    tags: [ItemTag.Normal, ItemTag.Pokeball],
    name: "Master Ball",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Ultra_Ball,
    tags: [ItemTag.Normal, ItemTag.Pokeball],
    name: "Ultra Ball",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Great_Ball,
    tags: [ItemTag.Normal, ItemTag.Pokeball],
    name: "Great Ball",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Pokeball,
    tags: [ItemTag.Normal, ItemTag.Pokeball],
    name: "Pokeball",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Town_Map,
    tags: [ItemTag.Normal, ItemTag.KeyItem],
    name: "Town Map",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Bicycle,
    tags: [ItemTag.Normal, ItemTag.KeyItem],
    name: "Bicycle",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_1,
    tags: [ItemTag.Invalid],
    name: "Unused_1",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Safari_Ball,
    tags: [ItemTag.Normal],
    name: "Safari Ball",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Pokedex,
    tags: [ItemTag.Normal],
    name: "Pokedex",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Moon_Stone,
    tags: [ItemTag.Normal, ItemTag.Evolution_Stone],
    name: "Moon Stone",
    desc: "",
    img: "/imgs/item/item_moon_stone.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Antidote,
    tags: [ItemTag.Normal],
    name: "Antidote",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Burn_Heal,
    tags: [ItemTag.Normal],
    name: "Burn Heal",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Ice_Heal,
    tags: [ItemTag.Normal],
    name: "Ice Heal",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Awakening,
    tags: [ItemTag.Normal],
    name: "Awakening",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Paralyze_Heal,
    tags: [ItemTag.Normal],
    name: "Paralyze Heal",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Full_Restore,
    tags: [ItemTag.Normal],
    name: "Full Restore",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Max_Potion,
    tags: [ItemTag.Normal],
    name: "Max Potion",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Hyper_Potion,
    tags: [ItemTag.Normal],
    name: "Hyper Potion",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Super_Potion,
    tags: [ItemTag.Normal],
    name: "Super Potion",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Potion,
    tags: [ItemTag.Normal],
    name: "Potion",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Boulder_Badge,
    tags: [ItemTag.GymBadge],
    name: "Boulder Badge",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Cascade_Badge,
    tags: [ItemTag.GymBadge],
    name: "Cascade Badge",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Thunder_Badge,
    tags: [ItemTag.GymBadge],
    name: "Thunder Badge",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Rainbow_Badge,
    tags: [ItemTag.GymBadge],
    name: "Rainbow Badge",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Soul_Badge,
    tags: [ItemTag.GymBadge],
    name: "Soul Badge",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Marsh_Badge,
    tags: [ItemTag.GymBadge],
    name: "Marsh Badge",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Volcano_Badge,
    tags: [ItemTag.GymBadge],
    name: "Volcano Badge",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Earth_Badge,
    tags: [ItemTag.GymBadge],
    name: "Earth Badge",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Escape_Rope,
    tags: [ItemTag.Normal],
    name: "Escape Rope",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Repel,
    tags: [ItemTag.Normal],
    name: "Repel",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Old_Amber,
    tags: [ItemTag.Normal, ItemTag.Fossil],
    name: "Old Amber",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ]
    },
  {
    id: ItemID.Fire_Stone,
    tags: [ItemTag.Normal, ItemTag.Evolution_Stone],
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
    id: ItemID.Thunder_Stone,
    tags: [ItemTag.Normal, ItemTag.Evolution_Stone],
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
  },
  {
    id: ItemID.Water_Stone,
    tags: [ItemTag.Normal, ItemTag.Evolution_Stone],
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
    id: ItemID.HP_Up,
    tags: [ItemTag.Normal, ItemTag.Vitamin],
    name: "HP Up",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Protein,
    tags: [ItemTag.Normal, ItemTag.Vitamin],
    name: "Protein",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Iron,
    tags: [ItemTag.Normal, ItemTag.Vitamin],
    name: "Iron",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Carbos,
    tags: [ItemTag.Normal, ItemTag.Vitamin],
    name: "Carbos",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Calcium,
    tags: [ItemTag.Normal, ItemTag.Vitamin],
    name: "Calcium",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Rare_Candy,
    tags: [ItemTag.Normal],
    name: "Rare Candy",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Dome_Fossil,
    tags: [ItemTag.Normal, ItemTag.Fossil],
    name: "Dome Fossil",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Helix_Fossil,
    tags: [ItemTag.Normal, ItemTag.Fossil],
    name: "Helix Fossil",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Secret_Key,
    tags: [ItemTag.Normal, ItemTag.KeyItem],
    name: "Secret Key",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_2,
    tags: [ItemTag.Invalid],
    name: "Unused_2",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Bike_Voucher,
    tags: [ItemTag.Normal, ItemTag.KeyItem],
    name: "Bike Voucher",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.X_Accuracy,
    tags: [ItemTag.Normal, ItemTag.CombatItem, ItemTag.X_Item],
    name: "X Accuracy",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ]
    },
  {
    id: ItemID.Leaf_Stone,
    tags: [ItemTag.Normal, ItemTag.Evolution_Stone],
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
    id: ItemID.Card_Key,
    tags: [ItemTag.Normal, ItemTag.KeyItem],
    name: "Card_Key",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Nugget,
    tags: [ItemTag.Normal],
    name: "Nugget",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_3,
    tags: [ItemTag.Invalid],
    name: "Unused_3",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Pokedoll,
    tags: [ItemTag.Normal],
    name: "Pokedoll",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Full_Heal,
    tags: [ItemTag.Normal],
    name: "Full Heal",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Revive,
    tags: [ItemTag.Normal],
    name: "Revive",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Max_Revive,
    tags: [ItemTag.Normal],
    name: "Max Revive",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Guard_Spec,
    tags: [ItemTag.Normal, ItemTag.CombatItem],
    name: "Guard Spec",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Super_Repel,
    tags: [ItemTag.Normal],
    name: "Super Repel",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Max_Repel,
    tags: [ItemTag.Normal],
    name: "Max Repel",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Dire_Hit,
    tags: [ItemTag.Normal, ItemTag.CombatItem],
    name: "Dire Hit",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Coin,
    tags: [ItemTag.Normal],
    name: "Coin",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Fresh_Water,
    tags: [ItemTag.Normal],
    name: "Fresh Water",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Soda_Pop,
    tags: [ItemTag.Normal],
    name: "Soda Pop",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Lemonade,
    tags: [ItemTag.Normal],
    name: "Lemonade",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.SS_Ticket,
    tags: [ItemTag.Normal, ItemTag.KeyItem],
    name: "SS Ticket",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Gold_Teeth,
    tags: [ItemTag.Normal],
    name: "Gold Teeth",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.X_Attack,
    tags: [ItemTag.Normal, ItemTag.CombatItem, ItemTag.X_Item],
    name: "X Attack",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.X_Defend,
    tags: [ItemTag.Normal, ItemTag.CombatItem, ItemTag.X_Item],
    name: "X Defend",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.X_Speed,
    tags: [ItemTag.Normal, ItemTag.CombatItem, ItemTag.X_Item],
    name: "X Speed",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.X_Special,
    tags: [ItemTag.Normal, ItemTag.CombatItem, ItemTag.X_Item],
    name: "X Special",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Coin_Case,
    tags: [ItemTag.Normal, ItemTag.KeyItem],
    name: "Coin Case",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Oaks_Parcel,
    tags: [ItemTag.Normal, ItemTag.KeyItem],
    name: "Oaks Parcel",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Item_Finder,
    tags: [ItemTag.Normal],
    name: "Item Finder",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Silph_Scope,
    tags: [ItemTag.Normal, ItemTag.KeyItem],
    name: "Silph Scope",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Pokeflute,
    tags: [ItemTag.Normal],
    name: "Pokeflute",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Lift_Key,
    tags: [ItemTag.Normal],
    name: "Lift Key",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Exp_All,
    tags: [ItemTag.Normal],
    name: "Exp All",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Old_Rod,
    tags: [ItemTag.Normal, ItemTag.FishingRod],
    name: "Old Rod",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Good_Rod,
    tags: [ItemTag.Normal, ItemTag.FishingRod],
    name: "Good Rod",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Super_Rod,
    tags: [ItemTag.Normal, ItemTag.FishingRod],
    name: "Super Rod",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.PP_Up,
    tags: [ItemTag.Normal, ItemTag.Vitamin],
    name: "PP Up",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Ether,
    tags: [ItemTag.Normal],
    name: "Ether",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Max_Ether,
    tags: [ItemTag.Normal],
    name: "Max Ether",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Elixer,
    tags: [ItemTag.Normal],
    name: "Elixer",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Max_Elixer,
    tags: [ItemTag.Normal],
    name: "Max Elixer",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_4,
    tags: [ItemTag.Invalid],
    name: "Unused_4",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_5,
    tags: [ItemTag.Invalid],
    name: "Unused_5",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_6,
    tags: [ItemTag.Invalid],
    name: "Unused_6",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_7,
    tags: [ItemTag.Invalid],
    name: "Unused_7",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_8,
    tags: [ItemTag.Invalid],
    name: "Unused_8",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_9,
    tags: [ItemTag.Invalid],
    name: "Unused_9",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_10,
    tags: [ItemTag.Invalid],
    name: "Unused_10",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_11,
    tags: [ItemTag.Invalid],
    name: "Unused_11",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_12,
    tags: [ItemTag.Invalid],
    name: "Unused_12",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_13,
    tags: [ItemTag.Invalid],
    name: "Unused_13",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_14,
    tags: [ItemTag.Invalid],
    name: "Unused_14",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_15,
    tags: [ItemTag.Invalid],
    name: "Unused_15",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_16,
    tags: [ItemTag.Invalid],
    name: "Unused_16",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_17,
    tags: [ItemTag.Invalid],
    name: "Unused_17",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_18,
    tags: [ItemTag.Invalid],
    name: "Unused_18",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_19,
    tags: [ItemTag.Invalid],
    name: "Unused_19",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_20,
    tags: [ItemTag.Invalid],
    name: "Unused_20",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_21,
    tags: [ItemTag.Invalid],
    name: "Unused_21",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_22,
    tags: [ItemTag.Invalid],
    name: "Unused_22",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_23,
    tags: [ItemTag.Invalid],
    name: "Unused_23",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_24,
    tags: [ItemTag.Invalid],
    name: "Unused_24",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_25,
    tags: [ItemTag.Invalid],
    name: "Unused_25",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_26,
    tags: [ItemTag.Invalid],
    name: "Unused_26",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_27,
    tags: [ItemTag.Invalid],
    name: "Unused_27",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_28,
    tags: [ItemTag.Invalid],
    name: "Unused_28",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_29,
    tags: [ItemTag.Invalid],
    name: "Unused_29",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_30,
    tags: [ItemTag.Invalid],
    name: "Unused_30",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_31,
    tags: [ItemTag.Invalid],
    name: "Unused_31",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_32,
    tags: [ItemTag.Invalid],
    name: "Unused_32",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_33,
    tags: [ItemTag.Invalid],
    name: "Unused_33",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_34,
    tags: [ItemTag.Invalid],
    name: "Unused_34",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_35,
    tags: [ItemTag.Invalid],
    name: "Unused_35",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_36,
    tags: [ItemTag.Invalid],
    name: "Unused_36",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_37,
    tags: [ItemTag.Invalid],
    name: "Unused_37",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_38,
    tags: [ItemTag.Invalid],
    name: "Unused_38",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_39,
    tags: [ItemTag.Invalid],
    name: "Unused_39",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_40,
    tags: [ItemTag.Invalid],
    name: "Unused_40",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_41,
    tags: [ItemTag.Invalid],
    name: "Unused_41",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_42,
    tags: [ItemTag.Invalid],
    name: "Unused_42",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_43,
    tags: [ItemTag.Invalid],
    name: "Unused_43",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_44,
    tags: [ItemTag.Invalid],
    name: "Unused_44",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_45,
    tags: [ItemTag.Invalid],
    name: "Unused_45",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_46,
    tags: [ItemTag.Invalid],
    name: "Unused_46",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_47,
    tags: [ItemTag.Invalid],
    name: "Unused_47",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_48,
    tags: [ItemTag.Invalid],
    name: "Unused_48",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_49,
    tags: [ItemTag.Invalid],
    name: "Unused_49",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_50,
    tags: [ItemTag.Invalid],
    name: "Unused_50",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_51,
    tags: [ItemTag.Invalid],
    name: "Unused_51",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_52,
    tags: [ItemTag.Invalid],
    name: "Unused_52",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_53,
    tags: [ItemTag.Invalid],
    name: "Unused_53",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_54,
    tags: [ItemTag.Invalid],
    name: "Unused_54",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_55,
    tags: [ItemTag.Invalid],
    name: "Unused_55",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_56,
    tags: [ItemTag.Invalid],
    name: "Unused_56",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_57,
    tags: [ItemTag.Invalid],
    name: "Unused_57",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_58,
    tags: [ItemTag.Invalid],
    name: "Unused_58",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_59,
    tags: [ItemTag.Invalid],
    name: "Unused_59",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_60,
    tags: [ItemTag.Invalid],
    name: "Unused_60",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_61,
    tags: [ItemTag.Invalid],
    name: "Unused_61",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_62,
    tags: [ItemTag.Invalid],
    name: "Unused_62",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_63,
    tags: [ItemTag.Invalid],
    name: "Unused_63",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_64,
    tags: [ItemTag.Invalid],
    name: "Unused_64",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_65,
    tags: [ItemTag.Invalid],
    name: "Unused_65",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_66,
    tags: [ItemTag.Invalid],
    name: "Unused_66",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_67,
    tags: [ItemTag.Invalid],
    name: "Unused_67",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_68,
    tags: [ItemTag.Invalid],
    name: "Unused_68",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_69,
    tags: [ItemTag.Invalid],
    name: "Unused_69",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_70,
    tags: [ItemTag.Invalid],
    name: "Unused_70",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_71,
    tags: [ItemTag.Invalid],
    name: "Unused_71",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_72,
    tags: [ItemTag.Invalid],
    name: "Unused_72",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_73,
    tags: [ItemTag.Invalid],
    name: "Unused_73",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_74,
    tags: [ItemTag.Invalid],
    name: "Unused_74",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_75,
    tags: [ItemTag.Invalid],
    name: "Unused_75",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_76,
    tags: [ItemTag.Invalid],
    name: "Unused_76",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_77,
    tags: [ItemTag.Invalid],
    name: "Unused_77",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_78,
    tags: [ItemTag.Invalid],
    name: "Unused_78",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_79,
    tags: [ItemTag.Invalid],
    name: "Unused_79",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_80,
    tags: [ItemTag.Invalid],
    name: "Unused_80",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_81,
    tags: [ItemTag.Invalid],
    name: "Unused_81",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_82,
    tags: [ItemTag.Invalid],
    name: "Unused_82",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_83,
    tags: [ItemTag.Invalid],
    name: "Unused_83",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_84,
    tags: [ItemTag.Invalid],
    name: "Unused_84",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_85,
    tags: [ItemTag.Invalid],
    name: "Unused_85",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_86,
    tags: [ItemTag.Invalid],
    name: "Unused_86",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_87,
    tags: [ItemTag.Invalid],
    name: "Unused_87",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_88,
    tags: [ItemTag.Invalid],
    name: "Unused_88",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_89,
    tags: [ItemTag.Invalid],
    name: "Unused_89",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_90,
    tags: [ItemTag.Invalid],
    name: "Unused_90",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_91,
    tags: [ItemTag.Invalid],
    name: "Unused_91",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_92,
    tags: [ItemTag.Invalid],
    name: "Unused_92",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_93,
    tags: [ItemTag.Invalid],
    name: "Unused_93",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_94,
    tags: [ItemTag.Invalid],
    name: "Unused_94",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_95,
    tags: [ItemTag.Invalid],
    name: "Unused_95",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_96,
    tags: [ItemTag.Invalid],
    name: "Unused_96",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_97,
    tags: [ItemTag.Invalid],
    name: "Unused_97",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_98,
    tags: [ItemTag.Invalid],
    name: "Unused_98",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_99,
    tags: [ItemTag.Invalid],
    name: "Unused_99",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_100,
    tags: [ItemTag.Invalid],
    name: "Unused_100",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_101,
    tags: [ItemTag.Invalid],
    name: "Unused_101",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_102,
    tags: [ItemTag.Invalid],
    name: "Unused_102",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_103,
    tags: [ItemTag.Invalid],
    name: "Unused_103",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_104,
    tags: [ItemTag.Invalid],
    name: "Unused_104",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_105,
    tags: [ItemTag.Invalid],
    name: "Unused_105",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_106,
    tags: [ItemTag.Invalid],
    name: "Unused_106",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_107,
    tags: [ItemTag.Invalid],
    name: "Unused_107",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_108,
    tags: [ItemTag.Invalid],
    name: "Unused_108",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_109,
    tags: [ItemTag.Invalid],
    name: "Unused_109",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_110,
    tags: [ItemTag.Invalid],
    name: "Unused_110",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_111,
    tags: [ItemTag.Invalid],
    name: "Unused_111",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_112,
    tags: [ItemTag.Invalid],
    name: "Unused_112",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_113,
    tags: [ItemTag.Invalid],
    name: "Unused_113",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_114,
    tags: [ItemTag.Invalid],
    name: "Unused_114",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_115,
    tags: [ItemTag.Invalid],
    name: "Unused_115",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.HM01,
    tags: [ItemTag.Normal, ItemTag.HM],
    name: "HM01 (Cut)",
    desc: "Used to teach the move Cut to a POKéMON.",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.HM02,
    tags: [ItemTag.Normal, ItemTag.HM],
    name: "HM02 (Fly)",
    desc: "Used to teach the move Fly to a POKéMON.",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.HM03,
    tags: [ItemTag.Normal, ItemTag.HM],
    name: "HM03 (Surf)",
    desc: "Used to teach the move Surf to a POKéMON.",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.HM04,
    tags: [ItemTag.Normal, ItemTag.HM],
    name: "HM04 (Strength)",
    desc: "Used to teach the move Strength to a POKéMON.",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.HM05,
    tags: [ItemTag.Normal, ItemTag.HM],
    name: "HM05 (Flash)",
    desc: "Used to teach the move Flash to a POKéMON.",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.TM01,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM01",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Mega_Punch,
  },
  {
    id: ItemID.TM02,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM02",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Razor_Wind,
  },
  {
    id: ItemID.TM03,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM03",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Swords_Dance,
  },
  {
    id: ItemID.TM04,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM04",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Whirlwind,
  },
  {
    id: ItemID.TM05,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM05",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Mega_Kick,
  },
  {
    id: ItemID.TM06,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM06",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Toxic,
  },
  {
    id: ItemID.TM07,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM07",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Horn_Drill,
  },
  {
    id: ItemID.TM08,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM08",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Body_Slam,
  },
  {
    id: ItemID.TM09,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM09",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Take_Down,
  },
  {
    id: ItemID.TM10,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM10",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Double_Edge,
  },
  {
    id: ItemID.TM11,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM11",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Bubblebeam,
  },
  {
    id: ItemID.TM12,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM12",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Water_Gun,
  },
  {
    id: ItemID.TM13,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM13",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Ice_Beam,
  },
  {
    id: ItemID.TM14,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM14",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Blizzard,
  },
  {
    id: ItemID.TM15,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM15",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Hyper_Beam,
  },
  {
    id: ItemID.TM16,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM16",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Pay_Day,
  },
  {
    id: ItemID.TM17,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM17",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Submission,
  },
  {
    id: ItemID.TM18,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM18",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Counter,
  },
  {
    id: ItemID.TM19,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM19",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Seismic_Toss,
  },
  {
    id: ItemID.TM20,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM20",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Rage,
  },
  {
    id: ItemID.TM21,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM21",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Mega_Drain,
  },
  {
    id: ItemID.TM22,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM22",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Solarbeam,
  },
  {
    id: ItemID.TM23,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM23",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Dragon_Rage,
  },
  {
    id: ItemID.TM24,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM24",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Thunderbolt,
  },
  {
    id: ItemID.TM25,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM25",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Thunder,
  },
  {
    id: ItemID.TM26,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM26",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Earthquake,
  },
  {
    id: ItemID.TM27,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM27",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Fissure,
  },
  {
    id: ItemID.TM28,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM28",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Dig,
  },
  {
    id: ItemID.TM29,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM29",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Psychic,
  },
  {
    id: ItemID.TM30,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM30",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Teleport,
  },
  {
    id: ItemID.TM31,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM31",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Mimic,
  },
  {
    id: ItemID.TM32,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM32",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Double_Team,
  },
  {
    id: ItemID.TM33,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM33",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Reflect,
  },
  {
    id: ItemID.TM34,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM34",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Bide,
  },
  {
    id: ItemID.TM35,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM35",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Metronome,
  },
  {
    id: ItemID.TM36,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM36",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Selfdestruct,
  },
  {
    id: ItemID.TM37,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM37",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Egg_Bomb,
  },
  {
    id: ItemID.TM38,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM38",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Fire_Blast,
  },
  {
    id: ItemID.TM39,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM39",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Swift,
  },
  {
    id: ItemID.TM40,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM40",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Skull_Bash,
  },
  {
    id: ItemID.TM41,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM41",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Softboiled,
  },
  {
    id: ItemID.TM42,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM42",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Dream_Eater,
  },
  {
    id: ItemID.TM43,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM43",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Sky_Attack,
  },
  {
    id: ItemID.TM44,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM44",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Rest,
  },
  {
    id: ItemID.TM45,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM45",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Thunder_Wave,
  },
  {
    id: ItemID.TM46,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM46",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Psywave,
  },
  {
    id: ItemID.TM47,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM47",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Explosion,
  },
  {
    id: ItemID.TM48,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM48",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Rock_Slide,
  },
  {
    id: ItemID.TM49,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM49",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Tri_Attack,
  },
  {
    id: ItemID.TM50,
    tags: [ItemTag.Normal, ItemTag.TM],
    name: "TM50",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
    move: MoveID.Substitute,
  },
  {
    id: ItemID.Unused_116,
    tags: [ItemTag.Invalid],
    name: "Unused_116",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_117,
    tags: [ItemTag.Invalid],
    name: "Unused_117",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_118,
    tags: [ItemTag.Invalid],
    name: "Unused_118",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_119,
    tags: [ItemTag.Invalid],
    name: "Unused_119",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ]
  },
  {
    id: ItemID.Unused_120,
    tags: [ItemTag.Invalid],
    name: "Unused_120",
    desc: "",
    img: "/imgs/item/item_default_pic.png",
    imgW: 24,
    imgH: 24,
    trivia: [
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