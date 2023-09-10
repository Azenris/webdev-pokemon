import { Link } from "react-router-dom";
import { ElementTypeID, ElementNames } from "./elements";

export enum MoveID {
  Absorb,
  Acid,
  Acid_Armor,
  Agility,
  Amnesia,
  Aurora_Beam,
  Barrage,
  Barrier,
  Bind,
  Bite,
  Body_Slan,
  Bone_Club,
  Bonemerang,
  Bubble,
  Clamp,
  Comet_Punch,
  Confuse_Ray,
  Confusion,
  Constrict,
  Conversion,
  Crabhammer,
  Defense_Curl,
  Disable,
  Dizzy_Punch,
  Double_Kick,
  Doubleslap,
  Drill_Peck,
  Ember,
  Fire_Punch,
  Fire_Spin,
  Flamethrower,
  Focus_Energy,
  Fury_Attack,
  Fury_Swipes,
  Glare,
  Growl,
  Guillotine,
  Gust,
  Harden,
  Haze,
  Headbutt,
  Hi_Jump_Kick,
  Horn_Attack,
  Hydro_Pump,
  Hyper_Fang,
  Hypnosis,
  Ice_Punch,
  Jump_Kick,
  Karate_Chop,
  Kinesis,
  Leech_Life,
  Leech_Seed,
  Leer,
  Lick,
  Light_Screen,
  Lovely_Kiss,
  Low_Kick,
  Meditate,
  Minimize,
  Mirror_Move,
  Mist,
  Night_Shade,
  Peck,
  Petal_Dance,
  Pin_Missle,
  Poison_Gas,
  Poison_Sting,
  Poisonpowder,
  Pound,
  Psybeam,
  Quick_Attack,
  Razor_Leaf,
  Recover,
  Roar,
  Rock_Throw,
  Rolling_Kick,
  Sand_Attack,
  Scratch,
  Screech,
  Sharpen,
  Sing,
  Slam,
  Slash,
  Sleep_Powder,
  Sludge,
  Smog,
  Smokescreen,
  Sonicboom,
  Spike_Cannon,
  Splash,
  Spore,
  Stomp,
  String_Shot,
  Struggle,
  Stun_Spore,
  Super_Fang,
  Supersonic,
  Tackle,
  Tail_Whip,
  Thrash,
  Thunderpunch,
  Thundershock,
  Transform,
  Twineedle,
  Vicegrip,
  Vine_Whip,
  Waterfall,
  Wing_Attack,
  Withdraw,
  Wrap,

  // HMs
  Cut,
  Fly,
  Surf,
  Strength,
  Flash,

  // TMs
  Mega_Punch,
  Razor_Wind,
  Swords_Dance,
  Whirlwind,
  Mega_Kick,
  Toxic,
  Horn_Drill,
  Body_Slam,
  Take_Down,
  Double_Edge,
  Bubblebeam,
  Water_Gun,
  Ice_Beam,
  Blizzard,
  Hyper_Beam,
  Pay_Day,
  Submission,
  Counter,
  Seismic_Toss,
  Rage,
  Mega_Drain,
  Solarbeam,
  Dragon_Rage,
  Thunderbolt,
  Thunder,
  Earthquake,
  Fissure,
  Dig,
  Psychic,
  Teleport,
  Mimic,
  Double_Team,
  Reflect,
  Bide,
  Metronome,
  Selfdestruct,
  Egg_Bomb,
  Fire_Blast,
  Swift,
  Skull_Bash,
  Softboiled,
  Dream_Eater,
  Sky_Attack,
  Rest,
  Thunder_Wave,
  Psywave,
  Explosion,
  Rock_Slide,
  Tri_Attack,
  Substitute,
};

export type Move = {
  id: MoveID;
  name: string;
  type: ElementTypeID;
  desc: string;
  img: string;
  imgW: number;
  imgH: number;
  trivia: string[];
};

export const moveDB: Move[] = [
  {
    id: MoveID.Absorb,
    name: "Absorb",
    type: ElementTypeID.Grass,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Acid,
    name: "Acid",
    type: ElementTypeID.Poison,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Acid_Armor,
    name: "Acid Armor",
    type: ElementTypeID.Poison,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Agility,
    name: "Agility",
    type: ElementTypeID.Psychic,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Amnesia,
    name: "Amnesia",
    type: ElementTypeID.Psychic,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Aurora_Beam,
    name: "Aurora Beam",
    type: ElementTypeID.Ice,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Barrage,
    name: "Barrage",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Barrier,
    name: "Barrier",
    type: ElementTypeID.Psychic,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Bind,
    name: "Bind",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Bite,
    name: "Bite",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Body_Slan,
    name: "Body Slan",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Bone_Club,
    name: "Bone Club",
    type: ElementTypeID.Ground,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Bonemerang,
    name: "Bonemerang",
    type: ElementTypeID.Ground,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Bubble,
    name: "Bubble",
    type: ElementTypeID.Water,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Clamp,
    name: "Clamp",
    type: ElementTypeID.Water,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Comet_Punch,
    name: "Comet Punch",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Confuse_Ray,
    name: "Confuse Ray",
    type: ElementTypeID.Ghost,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Confusion,
    name: "Confusion",
    type: ElementTypeID.Psychic,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Constrict,
    name: "Constrict",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Conversion,
    name: "Conversion",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Crabhammer,
    name: "Crabhammer",
    type: ElementTypeID.Water,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Defense_Curl,
    name: "Defense Curl",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Disable,
    name: "Disable",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Dizzy_Punch,
    name: "Dizzy Punch",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Double_Kick,
    name: "Double Kick",
    type: ElementTypeID.Fighting,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Doubleslap,
    name: "Doubleslap",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Drill_Peck,
    name: "Drill Peck",
    type: ElementTypeID.Flying,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Ember,
    name: "Ember",
    type: ElementTypeID.Fire,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Fire_Punch,
    name: "Fire Punch",
    type: ElementTypeID.Fire,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Fire_Spin,
    name: "Fire Spin",
    type: ElementTypeID.Fire,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Flamethrower,
    name: "Flamethrower",
    type: ElementTypeID.Fire,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Focus_Energy,
    name: "Focus Energy",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Fury_Attack,
    name: "Fury Attack",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Fury_Swipes,
    name: "Fury Swipes",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Glare,
    name: "Glare",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Growl,
    name: "Growl",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Guillotine,
    name: "Guillotine",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Gust,
    name: "Gust",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Harden,
    name: "Harden",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Haze,
    name: "Haze",
    type: ElementTypeID.Ice,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Headbutt,
    name: "Headbutt",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Hi_Jump_Kick,
    name: "Hi Jump Kick",
    type: ElementTypeID.Fighting,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Horn_Attack,
    name: "Horn Attack",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Hydro_Pump,
    name: "Hydro Pump",
    type: ElementTypeID.Water,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Hyper_Fang,
    name: "Hyper Fang",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Hypnosis,
    name: "Hypnosis",
    type: ElementTypeID.Psychic,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Ice_Punch,
    name: "Ice Punch",
    type: ElementTypeID.Ice,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Jump_Kick,
    name: "Jump Kick",
    type: ElementTypeID.Fighting,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Karate_Chop,
    name: "Karate Chop",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Kinesis,
    name: "Kinesis",
    type: ElementTypeID.Psychic,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Leech_Life,
    name: "Leech Life",
    type: ElementTypeID.Bug,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Leech_Seed,
    name: "Leech Seed",
    type: ElementTypeID.Grass,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Leer,
    name: "Leer",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Lick,
    name: "Lick",
    type: ElementTypeID.Ghost,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Light_Screen,
    name: "Light Screen",
    type: ElementTypeID.Psychic,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Lovely_Kiss,
    name: "Lovely Kiss",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Low_Kick,
    name: "Low Kick",
    type: ElementTypeID.Fighting,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Meditate,
    name: "Meditate",
    type: ElementTypeID.Psychic,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Minimize,
    name: "Minimize",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Mirror_Move,
    name: "Mirror Move",
    type: ElementTypeID.Flying,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Mist,
    name: "Mist",
    type: ElementTypeID.Ice,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Night_Shade,
    name: "Night Shade",
    type: ElementTypeID.Ghost,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Peck,
    name: "Peck",
    type: ElementTypeID.Flying,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Petal_Dance,
    name: "Petal Dance",
    type: ElementTypeID.Grass,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Pin_Missle,
    name: "Pin Missle",
    type: ElementTypeID.Bug,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Poison_Gas,
    name: "Poison Gas",
    type: ElementTypeID.Poison,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Poison_Sting,
    name: "Poison Sting",
    type: ElementTypeID.Poison,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Poisonpowder,
    name: "Poisonpowder",
    type: ElementTypeID.Poison,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Pound,
    name: "Pound",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Psybeam,
    name: "Psybeam",
    type: ElementTypeID.Psychic,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Quick_Attack,
    name: "Quick Attack",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Razor_Leaf,
    name: "Razor Leaf",
    type: ElementTypeID.Grass,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Recover,
    name: "Recover",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Roar,
    name: "Roar",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Rock_Throw,
    name: "Rock Throw",
    type: ElementTypeID.Rock,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Rolling_Kick,
    name: "Rolling Kick",
    type: ElementTypeID.Fighting,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Sand_Attack,
    name: "Sand-Attack",
    type: ElementTypeID.Ground,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Scratch,
    name: "Scratch",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Screech,
    name: "Screech",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Sharpen,
    name: "Sharpen",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Sing,
    name: "Sing",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Slam,
    name: "Slam",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Slash,
    name: "Slash",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Sleep_Powder,
    name: "Sleep Powder",
    type: ElementTypeID.Grass,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Sludge,
    name: "Sludge",
    type: ElementTypeID.Poison,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Smog,
    name: "Smog",
    type: ElementTypeID.Poison,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Smokescreen,
    name: "Smokescreen",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Sonicboom,
    name: "Sonicboom",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Spike_Cannon,
    name: "Spike Cannon",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Splash,
    name: "Splash",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Spore,
    name: "Spore",
    type: ElementTypeID.Poison,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Stomp,
    name: "Stomp",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.String_Shot,
    name: "String Shot",
    type: ElementTypeID.Bug,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Struggle,
    name: "Struggle",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Stun_Spore,
    name: "Stun Spore",
    type: ElementTypeID.Poison,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Super_Fang,
    name: "Super Fang",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Supersonic,
    name: "Supersonic",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Tackle,
    name: "Tackle",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Tail_Whip,
    name: "Tail Whip",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Thrash,
    name: "Thrash",
    type: ElementTypeID.Electric,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Thunderpunch,
    name: "Thunderpunch",
    type: ElementTypeID.Electric,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Thundershock,
    name: "Thundershock",
    type: ElementTypeID.Electric,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Transform,
    name: "Transform",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
      ],
  },
  {
    id: MoveID.Twineedle,
    name: "Twineedle",
    type: ElementTypeID.Bug,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Vicegrip,
    name: "Vicegrip",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Vine_Whip,
    name: "Vine Whip",
    type: ElementTypeID.Grass,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Waterfall,
    name: "Waterfall",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Wing_Attack,
    name: "Wing Attack",
    type: ElementTypeID.Flying,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Withdraw,
    name: "Withdraw",
    type: ElementTypeID.Water,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Wrap,
    name: "Wrap",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Cut,
    name: "Cut",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Fly,
    name: "Fly",
    type: ElementTypeID.Flying,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Surf,
    name: "Surf",
    type: ElementTypeID.Water,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Strength,
    name: "Strength",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Flash,
    name: "Flash",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },

  {
    id: MoveID.Mega_Punch,
    name: "Mega Punch",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Razor_Wind,
    name: "Razor Wind",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Swords_Dance,
    name: "Swords Dance",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Whirlwind,
    name: "Whirlwind",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Mega_Kick,
    name: "Mega Kick",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Toxic,
    name: "Toxic",
    type: ElementTypeID.Poison,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Horn_Drill,
    name: "Horn Drill",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Body_Slam,
    name: "Body Slam",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Take_Down,
    name: "Take Down",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Double_Edge,
    name: "Double-Edge",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Bubblebeam,
    name: "Bubblebeam",
    type: ElementTypeID.Water,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Water_Gun,
    name: "Water Gun",
    type: ElementTypeID.Water,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Ice_Beam,
    name: "Ice Beam",
    type: ElementTypeID.Ice,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Blizzard,
    name: "Blizzard",
    type: ElementTypeID.Ice,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Hyper_Beam,
    name: "Hyper Beam",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Pay_Day,
    name: "Pay Day",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Submission,
    name: "Submission",
    type: ElementTypeID.Fighting,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Counter,
    name: "Counter",
    type: ElementTypeID.Fighting,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Seismic_Toss,
    name: "Seismic Toss",
    type: ElementTypeID.Fighting,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Rage,
    name: "Rage",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Mega_Drain,
    name: "Mega Drain",
    type: ElementTypeID.Grass,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Solarbeam,
    name: "Solarbeam",
    type: ElementTypeID.Grass,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Dragon_Rage,
    name: "Dragon Rage",
    type: ElementTypeID.Dragon,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Thunderbolt,
    name: "Thunderbolt",
    type: ElementTypeID.Electric,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Thunder,
    name: "Thunder",
    type: ElementTypeID.Electric,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Earthquake,
    name: "Earthquake",
    type: ElementTypeID.Ground,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Fissure,
    name: "Fissure",
    type: ElementTypeID.Ground,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Dig,
    name: "Dig",
    type: ElementTypeID.Ground,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Psychic,
    name: "Psychic",
    type: ElementTypeID.Psychic,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Teleport,
    name: "Teleport",
    type: ElementTypeID.Psychic,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Mimic,
    name: "Mimic",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Double_Team,
    name: "Double Team",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Reflect,
    name: "Reflect",
    type: ElementTypeID.Psychic,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Bide,
    name: "Bide",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Metronome,
    name: "Metronome",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Selfdestruct,
    name: "Selfdestruct",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Egg_Bomb,
    name: "Egg Bomb",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Fire_Blast,
    name: "Fire Blast",
    type: ElementTypeID.Fire,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Swift,
    name: "Swift",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Skull_Bash,
    name: "Skull Bash",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Softboiled,
    name: "Softboiled",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Dream_Eater,
    name: "Dream Eater",
    type: ElementTypeID.Psychic,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Sky_Attack,
    name: "Sky Attack",
    type: ElementTypeID.Flying,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Rest,
    name: "Rest",
    type: ElementTypeID.Psychic,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Thunder_Wave,
    name: "Thunder Wave",
    type: ElementTypeID.Electric,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Psywave,
    name: "Psywave",
    type: ElementTypeID.Psychic,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Explosion,
    name: "Explosion",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Rock_Slide,
    name: "Rock Slide",
    type: ElementTypeID.Rock,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Tri_Attack,
    name: "Tri Attack",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
  {
    id: MoveID.Substitute,
    name: "Substitute",
    type: ElementTypeID.Normal,
    desc: "",
    img: "/imgs/move/move_default.png",
    imgW: 24,
    imgH: 24,
    trivia: [
    ],
  },
];

export function get_move(moveID: MoveID) {
  return moveDB[moveID];
}

export function get_move_name_span(move: Move) {
  return (
    <Link to={`/move/${move.id}`} className={`move-name-link element-${ElementNames[move.type]}-soft`}>
        {move.name}
    </Link>
  );
}

export function get_item_id_name_span(moveID: MoveID) {
  const move = get_move(moveID);
  if (!move) {
    return null;
  }
  return get_move_name_span(move);
}