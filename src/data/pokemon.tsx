import { Link } from "react-router-dom";
import { ItemID } from "./item";

export enum PokemonID {
  None,
  Bulbasaur,
  Ivysaur,
  Venusaur,
  Charmander,
  Charmeleon,
  Charizard,
  Squirtle,
  Wartortle,
  Blastoise,
  Caterpie,
  Metapod,
  Butterfree,
  Weedle,
  Kakuna,
  Beedrill,
  Pidgey,
  Pidgeotto,
  Pidgeot,
  Rattata,
  Raticate,
  Spearow,
  Fearow,
  Ekans,
  Arbok,
  Pikachu,
  Raichu,
  Sandshrew,
  Sandslash,
  NidoranF,
  Nidorina,
  Nidoqueen,
  NidoranM,
  Nidorino,
  Nidoking,
  Clefairy,
  Clefable,
  Vulpix,
  Ninetales,
  Jigglypuff,
  Wigglytuff,
  Zubat,
  Golbat,
  Oddish,
  Gloom,
  Vileplume,
  Paras,
  Parasect,
  Venonat,
  Venomoth,
  Diglett,
  Dugtrio,
  Meowth,
  Persian,
  Psyduck,
  Golduck,
  Mankey,
  Primeape,
  Growlithe,
  Arcanine,
  Poliwag,
  Poliwhirl,
  Poliwrath,
  Abra,
  Kadabra,
  Alakazam,
  Machop,
  Machoke,
  Machamp,
  Bellsprout,
  Weepinbell,
  Victreebel,
  Tentacool,
  Tentacruel,
  Geodude,
  Graveler,
  Golem,
  Ponyta,
  Rapidash,
  Slowpoke,
  Slowbro,
  Magnemite,
  Magneton,
  Farfetchd,
  Doduo,
  Dodrio,
  Seel,
  Dewgong,
  Grimer,
  Muk,
  Shellder,
  Cloyster,
  Gastly,
  Haunter,
  Gengar,
  Onix,
  Drowzee,
  Hypno,
  Krabby,
  Kingler,
  Voltorb,
  Electrode,
  Exeggcute,
  Exeggutor,
  Cubone,
  Marowak,
  Hitmonlee,
  Hitmonchan,
  Lickitung,
  Koffing,
  Weezing,
  Rhyhorn,
  Rhydon,
  Chansey,
  Tangela,
  Kangaskhan,
  Horsea,
  Seadra,
  Goldeen,
  Seaking,
  Staryu,
  Starmie,
  Mr_Mime,
  Scyther,
  Jynx,
  Electabuzz,
  Magmar,
  Pinsir,
  Tauros,
  Magikarp,
  Gyarados,
  Lapras,
  Ditto,
  Eevee,
  Vaporeon,
  Jolteon,
  Flareon,
  Porygon,
  Omanyte,
  Omastar,
  Kabuto,
  Kabutops,
  Aerodactyl,
  Snorlax,
  Articuno,
  Zapdos,
  Moltres,
  Dratini,
  Dragonair,
  Dragonite,
  Mewtwo,
  Mew
};

export enum PokemonGameVersion {
  Red,
  Blue,
  Yellow,
};

export enum PokemonType {
  Bug,
  Dragon,
  Electric,
  Fighting,
  Fire,
  Flying,
  Ghost,
  Grass,
  Ground,
  Ice,
  Normal,
  Poison,
  Psychic,
  Rock,
  Water,
};

export enum PokemonEvolutionType {
  Level,
  Item,
  Trading,
};

export type EvolveTo = {
  id: PokemonID;
  type: PokemonEvolutionType;
  lvl?: number;
  item?: ItemID;
}

export type Pokemon = {
  id: PokemonID;
  name: string;
  species: string;
  species_clean: string;
  height: string;
  weight: number;
  desc: string;
  types: PokemonType[];
  evolveFrom?: PokemonID;
  evolveTo?: EvolveTo[];
  available: PokemonGameVersion[];
  imgGBC: string;
  imgW: number;
  imgH: number;
  trivia: string[];
};

export const PokemonGameVersionNames: string[] = [
  "Red Version",
  "Blue Version",
  "Yellow Version",
];

export const PokemonAvailableGameVersionNames: string[] = [
  "Available in Red Version",
  "Available in Blue Version",
  "Available in Yellow Version",
];

export const PokemonTypeNames: string[] = [
  "Bug",
  "Dragon",
  "Electric",
  "Fighting",
  "Fire",
  "Flying",
  "Ghost",
  "Grass",
  "Ground",
  "Ice",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Water",
];

export const pokemonDB: Pokemon[] = [
  {
    "id": PokemonID.Bulbasaur,
    "name": "Bulbasaur",
    "species": "SEED",
    "species_clean": "Seed",
    "height": "2′04″",
    "weight": 15,
    "desc": "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
    "types": [PokemonType.Grass, PokemonType.Poison],
    "evolveTo": [
        {
            "id": PokemonID.Ivysaur,
            "type": PokemonEvolutionType.Level,
            "lvl": 16
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_001_bulbasaur.png",
    "imgW": 34,
    "imgH": 36,
    "trivia": [
      "This is one of the three starter POKéMON.",
      "It has the first entry in the entire POKéDEX.",
      "It is the only dual type starter POKéMON. (Not including evolutions)"
    ]
  },
  {
    "id": PokemonID.Ivysaur,
    "name": "Ivysaur",
    "species": "SEED",
    "species_clean": "Seed",
    "height": "3′03″",
    "weight": 29.0,
    "desc": "When the blub on its back grows large, it appears to lose the ability to stand on its hind legs.",
    "types": [PokemonType.Grass, PokemonType.Poison],
    "evolveFrom": PokemonID.Bulbasaur,
    "evolveTo": [
        {
            "id": PokemonID.Venusaur,
            "type": PokemonEvolutionType.Level,
            "lvl": 32
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_002_ivysaur.png",
    "imgW": 40,
    "imgH": 40,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Venusaur,
    "name": "Venusaur",
    "species": "SEED",
    "species_clean": "Seed",
    "height": "6′07″",
    "weight": 221,
    "desc": "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    "types": [PokemonType.Grass, PokemonType.Poison],
    "evolveFrom": PokemonID.Ivysaur,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_003_venusaur.png",
    "imgW": 53,
    "imgH": 50,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Charmander,
    "name": "Charmander",
    "species": "LIZARD",
    "species_clean": "Lizard",
    "height": "2′00″",
    "weight": 19,
    "desc": "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
    "types": [PokemonType.Fire],
    "evolveTo": [
        {
            "id": PokemonID.Charmeleon,
            "type": PokemonEvolutionType.Level,
            "lvl": 16
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_004_charmander.png",
    "imgW": 35,
    "imgH": 39,
    "trivia": [
      "This is one of the three starter POKéMON."
    ]
  },
  {
    "id": PokemonID.Charmeleon,
    "name": "Charmeleon",
    "species": "FLAME",
    "species_clean": "Flame",
    "height": "3′07″",
    "weight": 42,
    "desc": "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
    "types": [PokemonType.Fire],
    "evolveFrom": PokemonID.Charmander,
    "evolveTo": [
        {
            "id": PokemonID.Charizard,
            "type": PokemonEvolutionType.Level,
            "lvl": 36
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_005_charmeleon.png",
    "imgW": 48,
    "imgH": 45,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Charizard,
    "name": "Charizard",
    "species": "FLAME",
    "species_clean": "Flame",
    "height": "5′07″",
    "weight": 200,
    "desc": "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
    "types": [PokemonType.Fire, PokemonType.Flying],
    "evolveFrom": PokemonID.Charmeleon,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_006_charizard.png",
    "imgW": 55,
    "imgH": 55,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Squirtle,
    "name": "Squirtle",
    "species": "TINYTURTLE",
    "species_clean": "Tiny Turtle",
    "height": "1′08″",
    "weight": 20,
    "desc": "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
    "types": [PokemonType.Water],
    "evolveTo": [
        {
            "id": PokemonID.Wartortle,
            "type": PokemonEvolutionType.Level,
            "lvl": 16
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_007_squirtle.png",
    "imgW": 35,
    "imgH": 32,
    "trivia": [
      "This is one of the three starter POKéMON."
    ]
  },
  {
    "id": PokemonID.Wartortle,
    "name": "Wartortle",
    "species": "TURTLE",
    "species_clean": "Turtle",
    "height": "3′03″",
    "weight": 50,
    "desc": "Often Hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance.",
    "types": [PokemonType.Water],
    "evolveFrom": PokemonID.Squirtle,
    "evolveTo": [
        {
            "id": PokemonID.Blastoise,
            "type": PokemonEvolutionType.Level,
            "lvl": 36
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_008_wartortle.png",
    "imgW": 39,
    "imgH": 44,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Blastoise,
    "name": "Blastoise",
    "species": "SHELLFISH",
    "species_clean": "Shellfish",
    "height": "5′03″",
    "weight": 189,
    "desc": "A brutal POKéMON with pressurized water jets on its shell. They are used for high speed tackles.",
    "types": [PokemonType.Water],
    "evolveFrom": PokemonID.Wartortle,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_009_blastoise.png",
    "imgW": 54,
    "imgH": 54,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Caterpie,
    "name": "Caterpie",
    "species": "WORM",
    "species_clean": "Worm",
    "height": "1′00″",
    "weight": 6,
    "desc": "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
    "types": [PokemonType.Bug],
    "evolveTo": [
        {
            "id": PokemonID.Metapod,
            "type": PokemonEvolutionType.Level,
            "lvl": 7
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_010_caterpie.png",
    "imgW": 26,
    "imgH": 26,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Metapod,
    "name": "Metapod",
    "species": "CACOON",
    "species_clean": "Cacoon",
    "height": "2′04″",
    "weight": 22,
    "desc": "This POKéMON is vulnerable to attack while its shell is soft, exposing its weak and tender body.",
    "types": [PokemonType.Bug],
    "evolveFrom": PokemonID.Caterpie,
    "evolveTo": [
        {
            "id": PokemonID.Butterfree,
            "type": PokemonEvolutionType.Level,
            "lvl": 10
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_011_metapod.png",
    "imgW": 28,
    "imgH": 32,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Butterfree,
    "name": "Butterfree",
    "species": "BUTTERFLY",
    "species_clean": "Butterfly",
    "height": "3′07″",
    "weight": 71,
    "desc": "In battle, it flaps its wings at high speed to release highly toxic dust into the air.",
    "types": [PokemonType.Bug, PokemonType.Flying],
    "evolveFrom": PokemonID.Metapod,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_012_butterfree.png",
    "imgW": 54,
    "imgH": 53,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Weedle,
    "name": "Weedle",
    "species": "HAIRY BUG",
    "species_clean": "Hairy Bug",
    "height": "1′00″",
    "weight": 7,
    "desc": "Often found in forests, rating leaves. It has a sharp venomous stinger on its head.",
    "types": [PokemonType.Bug, PokemonType.Poison],
    "evolveTo": [
        {
            "id": PokemonID.Kakuna,
            "type": PokemonEvolutionType.Level,
            "lvl": 7
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_013_weedle.png",
    "imgW": 24,
    "imgH": 35,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Kakuna,
    "name": "Kakuna",
    "species": "CACOON",
    "species_clean": "Cacoon",
    "height": "2′00″",
    "weight": 22,
    "desc": "Almost incapable of moving, this POKéMON can only harden its shell to protect itself from predators.",
    "types": [PokemonType.Bug, PokemonType.Poison],
    "evolveFrom": PokemonID.Weedle,
    "evolveTo": [
        {
            "id": 15,
            "type": PokemonEvolutionType.Level,
            "lvl": 10
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_014_kakuna.png",
    "imgW": 27,
    "imgH": 38,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Beedrill,
    "name": "Beedrill",
    "species": "POISON BEE",
    "species_clean": "Poison Bee",
    "height": "3′03″",
    "weight": 65,
    "desc": "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.",
    "types": [PokemonType.Bug, PokemonType.Poison],
    "evolveFrom": PokemonID.Kakuna,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_015_beedrill.png",
    "imgW": 52,
    "imgH": 55,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Pidgey,
    "name": "Pidgey",
    "species": "TINY BIRD",
    "species_clean": "Tiny Bird",
    "height": "1′00″",
    "weight": 4,
    "desc": "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
    "types": [PokemonType.Normal, PokemonType.Flying],
    "evolveTo": [
        {
            "id": PokemonID.Pidgeotto,
            "type": PokemonEvolutionType.Level,
            "lvl": 18
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_016_pidgey.png",
    "imgW": 33,
    "imgH": 30,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Pidgeotto,
    "name": "Pidgeotto",
    "species": "BIRD",
    "species_clean": "Bird",
    "height": "3′07″",
    "weight": 66,
    "desc": "Very protective of its sprawling territorial area, this POKéMON will fiercely peck at any intruder.",
    "types": [PokemonType.Normal, PokemonType.Flying],
    "evolveFrom": PokemonID.Pidgey,
    "evolveTo": [
        {
            "id": PokemonID.Pidgeot,
            "type": PokemonEvolutionType.Level,
            "lvl": 36
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_017_pidgeotto.png",
    "imgW": 47,
    "imgH": 45,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Pidgeot,
    "name": "Pidgeot",
    "species": "BIRD",
    "species_clean": "Bird",
    "height": "4′11″",
    "weight": 87,
    "desc": "When hunting, it skims the surface of water at high speed to pick off unwary prey such as MAGIKARP.",
    "types": [PokemonType.Normal, PokemonType.Flying],
    "evolveFrom": PokemonID.Pidgeotto,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_018_pidgeot.png",
    "imgW": 53,
    "imgH": 54,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Rattata,
    "name": "Rattata",
    "species": "RAT",
    "species_clean": "Rat",
    "height": "1′00″",
    "weight": 8,
    "desc": "Bites anything when it attacks. Small and very quick, it is a common sight in many places.",
    "types": [PokemonType.Normal],
    "evolveTo": [
        {
            "id": PokemonID.Raticate,
            "type": PokemonEvolutionType.Level,
            "lvl": 20
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_019_rattata.png",
    "imgW": 32,
    "imgH": 33,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Raticate,
    "name": "Raticate",
    "species": "RAT",
    "species_clean": "Rat",
    "height": "2′04″",
    "weight": 41,
    "desc": "It uses its whiskers to maintain its balance. It apparently slows down if they are cut off.",
    "types": [PokemonType.Normal],
    "evolveFrom": PokemonID.Rattata,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_020_raticate.png",
    "imgW": 48,
    "imgH": 47,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Spearow,
    "name": "Spearow",
    "species": "TINY BIRD",
    "species_clean": "Tiny Bird",
    "height": "1′00″",
    "weight": 4,
    "desc": "Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne.",
    "types": [PokemonType.Normal, PokemonType.Flying],
    "evolveTo": [
        {
            "id": PokemonID.Fearow,
            "type": PokemonEvolutionType.Level,
            "lvl": 20
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_021_spearow.png",
    "imgW": 32,
    "imgH": 32,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Fearow,
    "name": "Fearow",
    "species": "BEAK",
    "species_clean": "Beak",
    "height": "3′11″",
    "weight": 84,
    "desc": "With its huge and magnificent wings, it can keep aloft without ever having to land for rest.",
    "types": [PokemonType.Normal, PokemonType.Flying],
    "evolveFrom": PokemonID.Spearow,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_022_fearow.png",
    "imgW": 58,
    "imgH": 48,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Ekans,
    "name": "Ekans",
    "species": "SNAKE",
    "species_clean": "Snake",
    "height": "6′07″",
    "weight": 15,
    "desc": "Moves silently and stealthily. Eats the eggs of birds, such as PIDGEY and SPEAROW, whole.",
    "types": [PokemonType.Poison],
    "evolveTo": [
        {
            "id": PokemonID.Arbok,
            "type": PokemonEvolutionType.Level,
            "lvl": 22
        }
    ],
    "available": [PokemonGameVersion.Red],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_023_ekans.png",
    "imgW": 34,
    "imgH": 35,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Arbok,
    "name": "Arbok",
    "species": "COBRA",
    "species_clean": "Cobra",
    "height": "11′06″",
    "weight": 143,
    "desc": "It is rumored that the ferocious warning markings on its belly differ from area to area.",
    "types": [PokemonType.Poison],
    "evolveFrom": PokemonID.Ekans,
    "available": [PokemonGameVersion.Red],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_024_arbok.png",
    "imgW": 55,
    "imgH": 56,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Pikachu,
    "name": "Pikachu",
    "species": "MOUSE",
    "species_clean": "Mouse",
    "height": "1′04″",
    "weight": 13,
    "desc": "When several of these POKéMON gather, their electricity could build and cause lightning storms.",
    "types": [PokemonType.Electric],
    "evolveTo": [
        {
            "id": PokemonID.Raichu,
            "type": PokemonEvolutionType.Item,
            "item": ItemID.Thuder_Stone
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_025_pikachu.png",
    "imgW": 39,
    "imgH": 40,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Raichu,
    "name": "Raichu",
    "species": "MOUSE",
    "species_clean": "Mouse",
    "height": "2′07″",
    "weight": 66,
    "desc": "Its long tail serves as a ground to protect itself from its own high voltage power.",
    "types": [PokemonType.Electric],
    "evolveFrom": PokemonID.Pikachu,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_026_raichu.png",
    "imgW": 54,
    "imgH": 54,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Sandshrew,
    "name": "Sandshrew",
    "species": "MOUSE",
    "species_clean": "Mouse",
    "height": "2′00″",
    "weight": 26,
    "desc": "Burrows deep underground in arid locations far from water. It only emerges to hunt for food.",
    "types": [PokemonType.Ground],
    "evolveTo": [
        {
            "id": PokemonID.Sandslash,
            "type": PokemonEvolutionType.Level,
            "lvl": 22
        }
    ],
    "available": [PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_027_sandshrew.png",
    "imgW": 37,
    "imgH": 35,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Sandslash,
    "name": "Sandslash",
    "species": "MOUSE",
    "species_clean": "Mouse",
    "height": "3′03″",
    "weight": 65,
    "desc": "Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.",
    "types": [PokemonType.Ground],
    "evolveFrom": PokemonID.Sandshrew,
    "available": [PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_028_sandslash.png",
    "imgW": 47,
    "imgH": 48,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.NidoranF,
    "name": "Nidoran♀",
    "species": "POISON PIN",
    "species_clean": "Poison Pin",
    "height": "1′04″",
    "weight": 15,
    "desc": "Although small, its venomous barbs render this POKéMON dangerous. The female has smaller horns.",
    "types": [PokemonType.Poison],
    "evolveTo": [
        {
            "id": PokemonID.Nidorina,
            "type": PokemonEvolutionType.Level,
            "lvl": 16
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_029_nidoran.png",
    "imgW": 31,
    "imgH": 26,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Nidorina,
    "name": "Nidorina",
    "species": "POISON PIN",
    "species_clean": "Poison Pin",
    "height": "2′07″",
    "weight": 44,
    "desc": "The female's horn develops slowly. Prefers physical attacks such as clawing and biting.",
    "types": [PokemonType.Poison],
    "evolveFrom": PokemonID.NidoranF,
    "evolveTo": [
        {
            "id": PokemonID.Nidoqueen,
            "type": PokemonEvolutionType.Item,
            "item": ItemID.Moon_Stone
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_030_nidorina.png",
    "imgW": 46,
    "imgH": 39,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Nidoqueen,
    "name": "Nidoqueen",
    "species": "DRILL",
    "species_clean": "Drill",
    "height": "4′03″",
    "weight": 132,
    "desc": "Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.",
    "types": [PokemonType.Poison, PokemonType.Ground],
    "evolveFrom": PokemonID.Nidorina,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_031_nidoqueen.png",
    "imgW": 56,
    "imgH": 56,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.NidoranM,
    "name": "Nidoran♂",
    "species": "POISON PIN",
    "species_clean": "Poison Pin",
    "height": "1′08″",
    "weight": 20,
    "desc": "Stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom.",
    "types": [PokemonType.Poison],
    "evolveTo": [
        {
            "id": PokemonID.Nidorino,
            "type": PokemonEvolutionType.Level,
            "lvl": 16
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_032_nidoran.png",
    "imgW": 36,
    "imgH": 33,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Nidorino,
    "name": "Nidorino",
    "species": "POISON PIN",
    "species_clean": "Poison Pin",
    "height": "2′11″",
    "weight": 43,
    "desc": "An aggressive POKéMON that is quick to attack. The horn on its head secretes a powerful venom.",
    "types": [PokemonType.Poison],
    "evolveFrom": PokemonID.NidoranM,
    "evolveTo": [
        {
            "id": 34,
            "type": PokemonEvolutionType.Item,
            "item": ItemID.Moon_Stone
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_033_nidorino.png",
    "imgW": 44,
    "imgH": 43,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Nidoking,
    "name": "Nidoking",
    "species": "DRILL",
    "species_clean": "Drill",
    "height": "4′07″",
    "weight": 137,
    "desc": "It uses its powerful tail in battle to smash, constrict, then break the prey's bones.",
    "types": [PokemonType.Poison, PokemonType.Ground],
    "evolveFrom": PokemonID.Nidorino,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_034_nidoking.png",
    "imgW": 56,
    "imgH": 56,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Clefairy,
    "name": "Clefairy",
    "species": "FAIRY",
    "species_clean": "Fairy",
    "height": "2′00″",
    "weight": 17,
    "desc": "Its magical and cute appeal has many admirers. It is rare and found only in certain areas.",
    "types": [PokemonType.Normal],
    "evolveTo": [
        {
            "id": PokemonID.Clefable,
            "type": PokemonEvolutionType.Item,
            "item": ItemID.Moon_Stone
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_035_clefairy.png",
    "imgW": 37,
    "imgH": 35,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Clefable,
    "name": "Clefable",
    "species": "FAIRY",
    "species_clean": "Fairy",
    "height": "4′03″",
    "weight": 88,
    "desc": "A timid fairy POKéMON that is rarely seen. It will run and hide the moment it senses people.",
    "types": [PokemonType.Normal],
    "evolveFrom": PokemonID.Clefairy,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_036_clefable.png",
    "imgW": 48,
    "imgH": 46,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Vulpix,
    "name": "Vulpix",
    "species": "FOX",
    "species_clean": "Fox",
    "height": "2′00″",
    "weight": 22,
    "desc": "At the time of birth, it has just one tail. The tail splits from its tip as it grows older.",
    "types": [PokemonType.Fire],
    "evolveTo": [
        {
            "id": PokemonID.Ninetales,
            "type": PokemonEvolutionType.Item,
            "item": ItemID.Fire_Stone
        }
    ],
    "available": [PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_037_vulpix.png",
    "imgW": 44,
    "imgH": 47,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Ninetales,
    "name": "Ninetales",
    "species": "FOX",
    "species_clean": "Fox",
    "height": "3′07″",
    "weight": 44,
    "desc": "Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.",
    "types": [PokemonType.Fire],
    "evolveFrom": PokemonID.Vulpix,
    "available": [PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_038_ninetales.png",
    "imgW": 56,
    "imgH": 55,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Jigglypuff,
    "name": "Jigglypuff",
    "species": "BALLOON",
    "species_clean": "Balloon",
    "height": "1′08″",
    "weight": 12,
    "desc": "When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
    "types": [PokemonType.Normal],
    "evolveTo": [
        {
            "id": PokemonID.Wigglytuff,
            "type": PokemonEvolutionType.Level,
            "item": ItemID.Moon_Stone
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_039_jigglypuff.png",
    "imgW": 37,
    "imgH": 33,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Wigglytuff,
    "name": "Wigglytuff",
    "species": "BALLOON",
    "species_clean": "Balloon",
    "height": "3′03″",
    "weight": 26,
    "desc": "The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size",
    "types": [PokemonType.Normal],
    "evolveFrom": PokemonID.Jigglypuff,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_040_wigglytuff.png",
    "imgW": 47,
    "imgH": 48,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Zubat,
    "name": "Zubat",
    "species": "BAT",
    "species_clean": "Bat",
    "height": "2′070″",
    "weight": 17,
    "desc": "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.",
    "types": [PokemonType.Poison, PokemonType.Flying],
    "evolveTo": [
        {
            "id": PokemonID.Golbat,
            "type": PokemonEvolutionType.Level,
            "lvl": 22
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_041_zubat.png",
    "imgW": 39,
    "imgH": 37,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Golbat,
    "name": "Golbat",
    "species": "BAT",
    "species_clean": "Bat",
    "height": "5′03″",
    "weight": 121,
    "desc": "Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly.",
    "types": [PokemonType.Poison, PokemonType.Flying],
    "evolveFrom": PokemonID.Zubat,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_042_golbat.png",
    "imgW": 56,
    "imgH": 55,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Oddish,
    "name": "Oddish",
    "species": "WEED",
    "species_clean": "Weed",
    "height": "1′08″",
    "weight": 12,
    "desc": "During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.",
    "types": [PokemonType.Grass, PokemonType.Poison],
    "evolveTo": [
        {
            "id": PokemonID.Gloom,
            "type": PokemonEvolutionType.Level,
            "lvl": 32
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_043_oddish.png",
    "imgW": 29,
    "imgH": 33,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Gloom,
    "name": "Gloom",
    "species": "WEED",
    "species_clean": "Weed",
    "height": "2′07″",
    "weight": 19,
    "desc": "The fluid that oozes from its mouth isn't drool. It is a nectar that is used to attract prey.",
    "types": [PokemonType.Grass, PokemonType.Poison],
    "evolveFrom": PokemonID.Oddish,
    "evolveTo": [
        {
            "id": PokemonID.Vileplume,
            "type": PokemonEvolutionType.Item,
            "item": ItemID.Leaf_Stone
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_044_gloom.png",
    "imgW": 41,
    "imgH": 43,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Vileplume,
    "name": "Vileplume",
    "species": "FLOWER",
    "species_clean": "Flower",
    "height": "3′11″",
    "weight": 41,
    "desc": "The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.",
    "types": [PokemonType.Grass, PokemonType.Poison],
    "evolveFrom": PokemonID.Gloom,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_045_vileplume.png",
    "imgW": 48,
    "imgH": 48,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Paras,
    "name": "Paras",
    "species": "MUSHROOM",
    "species_clean": "Mushroom",
    "height": "1′00″",
    "weight": 12,
    "desc": "Burrows to suck tree roots. The mushrooms on its back grow by drawing nutrients from the bug host.",
    "types": [PokemonType.Bug, PokemonType.Grass],
    "evolveTo": [
        {
            "id": PokemonID.Parasect,
            "type": PokemonEvolutionType.Level,
            "lvl": 24
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_046_paras.png",
    "imgW": 36,
    "imgH": 26,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Parasect,
    "name": "Parasect",
    "species": "MUSHROOM",
    "species_clean": "Mushroom",
    "height": "3′03″",
    "weight": 65,
    "desc": "A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.",
    "types": [PokemonType.Bug, PokemonType.Grass],
    "evolveFrom": PokemonID.Paras,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_047_parasect.png",
    "imgW": 56,
    "imgH": 56,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Venonat,
    "name": "Venonat",
    "species": "INSECT",
    "species_clean": "Insect",
    "height": "3′03″",
    "weight": 66,
    "desc": "Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.",
    "types": [PokemonType.Bug, PokemonType.Poison],
    "evolveTo": [
        {
            "id": PokemonID.Venomoth,
            "type": PokemonEvolutionType.Level,
            "lvl": 31
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_048_venonat.png",
    "imgW": 39,
    "imgH": 40,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Venomoth,
    "name": "Venomoth",
    "species": "POISONMOTH",
    "species_clean": "Poison Moth",
    "height": "4′11″",
    "weight": 28,
    "desc": "The dust-like scales covering its wings are color coded to indicate the kinds of poison it has.",
    "types": [PokemonType.Bug, PokemonType.Poison],
    "evolveFrom": PokemonID.Venonat,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_049_venomoth.png",
    "imgW": 50,
    "imgH": 55,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Diglett,
    "name": "Diglett",
    "species": "MOLE",
    "species_clean": "Mole",
    "height": "0′08″",
    "weight": 2,
    "desc": "Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground.",
    "types": [PokemonType.Ground],
    "evolveTo": [
        {
            "id": PokemonID.Dugtrio,
            "type": PokemonEvolutionType.Level,
            "lvl": 26
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_050_diglett.png",
    "imgW": 38,
    "imgH": 30,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Dugtrio,
    "name": "Dugtrio",
    "species": "MOLE",
    "species_clean": "Mole",
    "height": "2′04″",
    "weight": 73,
    "desc": "A team of DIGLETT triplets. It triggers huge earthquakes by burrowing 60 miles underground.",
    "types": [PokemonType.Ground],
    "evolveFrom": PokemonID.Diglett,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_051_dugtrio.png",
    "imgW": 48,
    "imgH": 41,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Meowth,
    "name": "Meowth",
    "species": "SCRATCHCAT",
    "species_clean": "Scratch Cat",
    "height": "1′04″",
    "weight": 9,
    "desc": "Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change.",
    "types": [PokemonType.Normal],
    "evolveTo": [
        {
            "id": PokemonID.Persian,
            "type": PokemonEvolutionType.Level,
            "lvl": 28
        }
    ],
    "available": [PokemonGameVersion.Blue],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_052_meowth.png",
    "imgW": 38,
    "imgH": 35,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Persian,
    "name": "Persian",
    "species": "CLASSY CAT",
    "species_clean": "Classy Cat",
    "height": "3′03″",
    "weight": 71,
    "desc": "Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness.",
    "types": [PokemonType.Normal],
    "evolveFrom": PokemonID.Meowth,
    "available": [PokemonGameVersion.Blue],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_053_persian.png",
    "imgW": 53,
    "imgH": 55,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Psyduck,
    "name": "Psyduck",
    "species": "DUCK",
    "species_clean": "Duck",
    "height": "2′07″",
    "weight": 43,
    "desc": "While lulling its enemies with its vacant look, this wily POKéMON will use psychokinetic powers.",
    "types": [PokemonType.Water],
    "evolveTo": [
        {
            "id": PokemonID.Golduck,
            "type": PokemonEvolutionType.Level,
            "lvl": 33
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_054_psyduck.png",
    "imgW": 38,
    "imgH": 40,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Golduck,
    "name": "Golduck",
    "species": "DUCK",
    "species_clean": "Duck",
    "height": "5′07″",
    "weight": 169,
    "desc": "Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.",
    "types": [PokemonType.Water],
    "evolveFrom": PokemonID.Psyduck,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_055_golduck.png",
    "imgW": 52,
    "imgH": 56,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Mankey,
    "name": "Mankey",
    "species": "PIG MONKEY",
    "species_clean": "Pig Monkey",
    "height": "1′08″",
    "weight": 62.0,
    "desc": "Extermely quick to anger. It could be docile one moment then thrashing away the next instant.",
    "types": [PokemonType.Fighting],
    "evolveTo": [
        {
            "id": PokemonID.Primeape,
            "type": PokemonEvolutionType.Level,
            "lvl": 28
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_056_mankey.png",
    "imgW": 40,
    "imgH": 37,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Primeape,
    "name": "Primeape",
    "species": "PIG MONKEY",
    "species_clean": "Pig Monkey",
    "height": "3′03″",
    "weight": 71.0,
    "desc": "Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught.",
    "types": [PokemonType.Fighting],
    "evolveFrom": PokemonID.Mankey,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_057_primeape.png",
    "imgW": 49,
    "imgH": 56,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Growlithe,
    "name": "Growlithe",
    "species": "PUPPY",
    "species_clean": "Puppy",
    "height": "2′04″",
    "weight": 42.0,
    "desc": "Very protective of its territory. It will bark and bite to repel instruders from its space.",
    "types": [PokemonType.Fire],
    "evolveTo": [
        {
            "id": PokemonID.Arcanine,
            "type": PokemonEvolutionType.Item,
            "item": ItemID.Fire_Stone
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_058_growlithe.png",
    "imgW": 34,
    "imgH": 39,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Arcanine,
    "name": "Arcanine",
    "species": "LEGENDARY",
    "species_clean": "Legendary",
    "height": "6′03″",
    "weight": 342,
    "desc": "A POKéMON that has been admired since the past for its beauty. It runs agilely as if on wings.",
    "types": [PokemonType.Fire],
    "evolveFrom": PokemonID.Growlithe,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_059_arcanine.png",
    "imgW": 53,
    "imgH": 54,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Poliwag,
    "name": "Poliwag",
    "species": "TADPOLE",
    "species_clean": "Tadpole",
    "height": "2′00″",
    "weight": 27,
    "desc": "Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand.",
    "types": [PokemonType.Water],
    "evolveTo": [
        {
            "id": PokemonID.Poliwhirl,
            "type": PokemonEvolutionType.Level,
            "lvl": 25
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_060_poliwag.png",
    "imgW": 36,
    "imgH": 32,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Poliwhirl,
    "name": "Poliwhirl",
    "species": "TADPOLE",
    "species_clean": "Tadpole",
    "height": "3′03″",
    "weight": 44,
    "desc": "Capab;e of living in or out of water. When out of water, it sweats to keep its body slimy.",
    "types": [PokemonType.Water],
    "evolveFrom": PokemonID.Poliwag,
    "evolveTo": [
        {
            "id": PokemonID.Poliwrath,
            "type": PokemonEvolutionType.Item,
            "item": ItemID.Water_Stone
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_061_poliwhirl.png",
    "imgW": 45,
    "imgH": 46,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Poliwrath,
    "name": "Poliwrath",
    "species": "TADPOLE",
    "species_clean": "Tadpole",
    "height": "4′03″",
    "weight": 119,
    "desc": "An adept swimmer at both the front crawl and breast stroke. Easily overtakes the best human swimmers.",
    "types": [PokemonType.Water, PokemonType.Fighting],
    "evolveFrom": PokemonID.Poliwhirl,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_062_poliwrath.png",
    "imgW": 52,
    "imgH": 53,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Abra,
    "name": "Abra",
    "species": "PSI",
    "species_clean": "Psi",
    "height": "2′11″",
    "weight": 43,
    "desc": "Using its ability to read minds, ot will identify impending danger and TELEPORT to safety.",
    "types": [PokemonType.Psychic],
    "evolveTo": [
        {
            "id": PokemonID.Kadabra,
            "type": PokemonEvolutionType.Level,
            "lvl": 16
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_063_abra.png",
    "imgW": 34,
    "imgH": 37,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Kadabra,
    "name": "Kadabra",
    "species": "PSI",
    "species_clean": "Psi",
    "height": "4′03″",
    "weight": 125,
    "desc": "It emits special alpha waves from its body that induce headaches just by being close by.",
    "types": [PokemonType.Psychic],
    "evolveFrom": PokemonID.Abra,
    "evolveTo": [
        {
            "id": PokemonID.Alakazam,
            "type": PokemonEvolutionType.Trading
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_064_kadabra.png",
    "imgW": 46,
    "imgH": 48,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Alakazam,
    "name": "Alakazam",
    "species": "PSI",
    "species_clean": "Psi",
    "height": "4′11″",
    "weight": 106,
    "desc": "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5,000.",
    "types": [PokemonType.Psychic],
    "evolveFrom": PokemonID.Kadabra,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_065_alakazam.png",
    "imgW": 54,
    "imgH": 56,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Machop,
    "name": "Machop",
    "species": "SUPERPOWER",
    "species_clean": "Superpower",
    "height": "2′07″",
    "weight": 43,
    "desc": "Loves to build its muscles. It trains in all styles of martial arts to become even stronger.",
    "types": [PokemonType.Fighting],
    "evolveTo": [
        {
            "id": PokemonID.Machoke,
            "type": PokemonEvolutionType.Level,
            "lvl": 28
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_066_machop.png",
    "imgW": 39,
    "imgH": 39,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Machoke,
    "name": "Machoke",
    "species": "SUPERPOWER",
    "species_clean": "Superpower",
    "height": "4′11″",
    "weight": 155,
    "desc": "Its muscular body is so powerful, it mist wear a power save belt to be able to regulate its motions.",
    "types": [PokemonType.Fighting],
    "evolveFrom": PokemonID.Machop,
    "evolveTo": [
        {
            "id": PokemonID.Machamp,
            "type": PokemonEvolutionType.Trading
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_067_machoke.png",
    "imgW": 51,
    "imgH": 51,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Machamp,
    "name": "Machamp",
    "species": "SUPERPOWER",
    "species_clean": "Superpower",
    "height": "5′03″",
    "weight": 287,
    "desc": "Using its heavy muscles, it throws powerful punches that can send the victim clear over the horizon.",
    "types": [PokemonType.Fighting],
    "evolveFrom": PokemonID.Machoke,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_068_machamp.png",
    "imgW": 56,
    "imgH": 55,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Bellsprout,
    "name": "Bellsprout",
    "species": "FLOWER",
    "species_clean": "Flower",
    "height": "2′04″",
    "weight": 9,
    "desc": "A carnivorous POKéMON that traps and eats bugs. It uses its root feet to soak up needed moisture.",
    "types": [PokemonType.Grass, PokemonType.Poison],
    "evolveTo": [
        {
            "id": PokemonID.Weepinbell,
            "type": PokemonEvolutionType.Level,
            "lvl": 21
        }
    ],
    "available": [PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_069_bellsprout.png",
    "imgW": 32,
    "imgH": 38,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Weepinbell,
    "name": "Weepinbell",
    "species": "FLYCATCHER",
    "species_clean": "Fly Catcher",
    "height": "3′03″",
    "weight": 14,
    "desc": "It spits out POISONPOWDER to immobilize the enemy and then finishes it with a spray of ACID.",
    "types": [PokemonType.Grass, PokemonType.Poison],
    "evolveFrom": PokemonID.Bellsprout,
    "evolveTo": [
        {
            "id": PokemonID.Victreebel,
            "type": PokemonEvolutionType.Item,
            "item": ItemID.Leaf_Stone
        }
    ],
    "available": [PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_070_weepinbell.png",
    "imgW": 46,
    "imgH": 42,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Victreebel,
    "name": "Victreebel",
    "species": "FLYCATCHER",
    "species_clean": "Fly Catcher",
    "height": "5′07″",
    "weight": 34,
    "desc": "Said to live in huge colonies deep in jungles, although no one has ever returned from there.",
    "types": [PokemonType.Grass, PokemonType.Poison],
    "evolveFrom": PokemonID.Weepinbell,
    "available": [PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_071_victreebel.png",
    "imgW": 50,
    "imgH": 54,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Tentacool,
    "name": "Tentacool",
    "species": "JELLYFISH",
    "species_clean": "Jellyfish",
    "height": "2′11″",
    "weight": 100,
    "desc": "Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid.",
    "types": [PokemonType.Water, PokemonType.Poison],
    "evolveTo": [
        {
            "id": PokemonID.Tentacruel,
            "type": PokemonEvolutionType.Level,
            "lvl": 30
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_072_tentacool.png",
    "imgW": 38,
    "imgH": 32,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Tentacruel,
    "name": "Tentacruel",
    "species": "JELLYFISH",
    "species_clean": "Jellyfish",
    "height": "5′03″",
    "weight": 121,
    "desc": "The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey.",
    "types": [PokemonType.Water, PokemonType.Poison],
    "evolveFrom": PokemonID.Tentacool,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_073_tentacruel.png",
    "imgW": 47,
    "imgH": 47,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Geodude,
    "name": "Geodude",
    "species": "ROCK",
    "species_clean": "Rock",
    "height": "1′04″",
    "weight": 44,
    "desc": "Found in fields and mountains. Mistaking them for boulders, people often stop or trip o them.",
    "types": [PokemonType.Rock, PokemonType.Ground],
    "evolveTo": [
        {
            "id": PokemonID.Graveler,
            "type": PokemonEvolutionType.Level,
            "lvl": 25
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_074_geodude.png",
    "imgW": 39,
    "imgH": 33,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Graveler,
    "name": "Graveler",
    "species": "ROCK",
    "species_clean": "Rock",
    "height": "3′03″",
    "weight": 232,
    "desc": "Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction.",
    "types": [PokemonType.Rock, PokemonType.Ground],
    "evolveFrom": PokemonID.Geodude,
    "evolveTo": [
        {
            "id": PokemonID.Golem,
            "type": PokemonEvolutionType.Trading
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_075_graveler.png",
    "imgW": 48,
    "imgH": 48,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Golem,
    "name": "Golem",
    "species": "MEGATON",
    "species_clean": "Megaton",
    "height": "4′07″",
    "weight": 662,
    "desc": "Its boulder-like body is extremely hard. It can easily withstand dynamite blases without damage.",
    "types": [PokemonType.Rock, PokemonType.Ground],
    "evolveFrom": PokemonID.Graveler,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_076_golem.png",
    "imgW": 47,
    "imgH": 44,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Ponyta,
    "name": "Ponyta",
    "species": "FIRE HORSE",
    "species_clean": "Fire Horse",
    "height": "3′03″",
    "weight": 66,
    "desc": "Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time.",
    "types": [PokemonType.Fire],
    "evolveTo": [
        {
            "id": PokemonID.Rapidash,
            "type": PokemonEvolutionType.Level,
            "lvl": 40
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_077_ponyta.png",
    "imgW": 44,
    "imgH": 45,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Rapidash,
    "name": "Rapidash",
    "species": "FIRE HORSE",
    "species_clean": "Fire Horse",
    "height": "5′07″",
    "weight": 209,
    "desc": "Very competitive, this POKéMON will chase anything that moves fast in the hopes of racing it.",
    "types": [PokemonType.Fire],
    "evolveFrom": PokemonID.Ponyta,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_078_rapidash.png",
    "imgW": 55,
    "imgH": 55,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Slowpoke,
    "name": "Slowpoke",
    "species": "DOPEY",
    "species_clean": "Dopey",
    "height": "3′11″",
    "weight": 79,
    "desc": "Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack.",
    "types": [PokemonType.Water, PokemonType.Psychic],
    "evolveTo": [
        {
            "id": PokemonID.Slowbro,
            "type": PokemonEvolutionType.Level,
            "lvl": 37
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_079_slowpoke.png",
    "imgW": 40,
    "imgH": 37,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Slowbro,
    "name": "Slowbro",
    "species": "HERMITCRAB",
    "species_clean": "Hermit Crab",
    "height": "5′03″",
    "weight": 173,
    "desc": "The SHELLDER that is latched onto SLOWPOKE's tail is said to feed on the host's left over scraps.",
    "types": [PokemonType.Water, PokemonType.Psychic],
    "evolveFrom": PokemonID.Slowpoke,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_080_slowbro.png",
    "imgW": 56,
    "imgH": 56,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Magnemite,
    "name": "Magnemite",
    "species": "MAGNET",
    "species_clean": "Magnet",
    "height": "1′00″",
    "weight": 13,
    "desc": "Uses anti-gravity to stay suspended. Appears without warning and uses THUNDER WAVE and similar moves.",
    "types": [PokemonType.Electric],
    "evolveTo": [
        {
            "id": PokemonID.Magneton,
            "type": PokemonEvolutionType.Level,
            "lvl": 30
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_081_magnemite.png",
    "imgW": 26,
    "imgH": 23,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Magneton,
    "name": "Magneton",
    "species": "MAGNET",
    "species_clean": "Magnet",
    "height": "3′03″",
    "weight": 132,
    "desc": "Formed by several MAGNEMITEs linked together. They frequently appear when sinspots flare up.",
    "types": [PokemonType.Electric],
    "evolveFrom": PokemonID.Magnemite,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_082_magneton.png",
    "imgW": 48,
    "imgH": 48,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Farfetchd,
    "name": "Farfetch'd",
    "species": "WILD DUCK",
    "species_clean": "Wild Duck",
    "height": "2′07″",
    "weight": 33,
    "desc": "The sprig of green onions it holds is its weapon. It is used much like a metal sword.",
    "types": [PokemonType.Normal, PokemonType.Flying],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_083_farfetchd.png",
    "imgW": 47,
    "imgH": 47,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Doduo,
    "name": "Doduo",
    "species": "TWIN BIRD",
    "species_clean": "Twin Bird",
    "height": "4′07″",
    "weight": 86,
    "desc": "A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints.",
    "types": [PokemonType.Normal, PokemonType.Flying],
    "evolveTo": [
        {
            "id": PokemonID.Dodrio,
            "type": PokemonEvolutionType.Level,
            "lvl": 31
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_084_doduo.png",
    "imgW": 36,
    "imgH": 39,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Dodrio,
    "name": "Dodrio",
    "species": "TRIPLEBIRD",
    "species_clean": "Triple Bird",
    "height": "5′11″",
    "weight": 188,
    "desc": "Uses its three brains to execute complex plans. While two heads sleep, one head stays awake.",
    "types": [PokemonType.Normal, PokemonType.Flying],
    "evolveFrom": PokemonID.Doduo,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_085_dodrio.png",
    "imgW": 50,
    "imgH": 55,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Seel,
    "name": "Seel",
    "species": "SEA LION",
    "species_clean": "Sea Lion",
    "height": "3′07″",
    "weight": 198,
    "desc": "The protruding horn on its head is very hard. It is used for bashing through thick ice.",
    "types": [PokemonType.Water],
    "evolveTo": [
        {
            "id": PokemonID.Dewgong,
            "type": PokemonEvolutionType.Level,
            "lvl": 34
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_086_seel.png",
    "imgW": 47,
    "imgH": 47,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Dewgong,
    "name": "Dewgong",
    "species": "SEA LION",
    "species_clean": "Sea Lion",
    "height": "5′07″",
    "weight": 265,
    "desc": "Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.",
    "types": [PokemonType.Water, PokemonType.Ice],
    "evolveFrom": PokemonID.Seel,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_087_dewgong.png",
    "imgW": 47,
    "imgH": 48,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Grimer,
    "name": "Grimer",
    "species": "SLUDGE",
    "species_clean": "Sludge",
    "height": "2′11″",
    "weight": 66,
    "desc": "Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.",
    "types": [PokemonType.Poison],
    "evolveTo": [
        {
            "id": PokemonID.Muk,
            "type": PokemonEvolutionType.Level,
            "lvl": 38
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_088_grimer.png",
    "imgW": 40,
    "imgH": 40,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Muk,
    "name": "Muk",
    "species": "SLUDGE",
    "species_clean": "Sludge",
    "height": "3′11″",
    "weight": 66,
    "desc": "Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.",
    "types": [PokemonType.Poison],
    "evolveFrom": PokemonID.Grimer,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_089_muk.png",
    "imgW": 55,
    "imgH": 56,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Shellder,
    "name": "Shellder",
    "species": "BIVALVE",
    "species_clean": "Bivalve",
    "height": "1′00″",
    "weight": 9,
    "desc": "Its hard shell repels any kind of attack. It is vulnerable only when its shell is open.",
    "types": [PokemonType.Water],
    "evolveTo": [
        {
            "id": PokemonID.Cloyster,
            "type": PokemonEvolutionType.Item,
            "item": ItemID.Water_Stone
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_090_shellder.png",
    "imgW": 36,
    "imgH": 38,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Cloyster,
    "name": "Cloyster",
    "species": "BIVALVE",
    "species_clean": "Bivalve",
    "height": "4′11″",
    "weight": 292,
    "desc": "When attacked, it launches its horns in quick volleys. Its innards have never been seen.",
    "types": [PokemonType.Water, PokemonType.Ice],
    "evolveFrom": PokemonID.Shellder,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_091_cloyster.png",
    "imgW": 53,
    "imgH": 52,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Gastly,
    "name": "Gastly",
    "species": "GAS",
    "species_clean": "Gas",
    "height": "4′03″",
    "weight": 0.2,
    "desc": "Almost invisible, this gaseous POKéMON cloaks the target and puts it to sleep without notice.",
    "types": [PokemonType.Ghost, PokemonType.Poison],
    "evolveTo": [
        {
            "id": PokemonID.Haunter,
            "type": PokemonEvolutionType.Level,
            "lvl": 25
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_092_gastly.png",
    "imgW": 54,
    "imgH": 53,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Haunter,
    "name": "Haunter",
    "species": "GAS",
    "species_clean": "Gas",
    "height": "5′03″",
    "weight": 0.2,
    "desc": "Because of its ability to slip through block walls, it is said to be from another dimension.",
    "types": [PokemonType.Ghost, PokemonType.Poison],
    "evolveFrom": PokemonID.Gastly,
    "evolveTo": [
        {
            "id": PokemonID.Gengar,
            "type": PokemonEvolutionType.Trading
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_093_haunter.png",
    "imgW": 48,
    "imgH": 48,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Gengar,
    "name": "Gengar",
    "species": "SHADOW",
    "species_clean": "Shadow",
    "height": "4′11″",
    "weight": 89,
    "desc": "Under a full moon, this POKéMON likes to mimic the shadows of people and laugh at their fright.",
    "types": [PokemonType.Ghost, PokemonType.Poison],
    "evolveFrom": PokemonID.Haunter,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_094_gengar.png",
    "imgW": 47,
    "imgH": 47,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Onix,
    "name": "Onix",
    "species": "ROCK SNAKE",
    "species_clean": "Rock Snake",
    "height": "28′10″",
    "weight": 463,
    "desc": "As it grows, the stone portions of its body harden to become similar to a diamond, but colored black.",
    "types": [PokemonType.Rock, PokemonType.Ground],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_095_onix.png",
    "imgW": 50,
    "imgH": 55,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Drowzee,
    "name": "Drowzee",
    "species": "HYPNOSIS",
    "species_clean": "Hypnosis",
    "height": "3′03″",
    "weight": 71,
    "desc": "Puts enemies to sleep then eats their dreams. Occasionally gets sick from eating bad dreams.",
    "types": [PokemonType.Psychic],
    "evolveTo": [
        {
            "id": PokemonID.Hypno,
            "type": PokemonEvolutionType.Level,
            "lvl": 26
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_096_drowzee.png",
    "imgW": 48,
    "imgH": 48,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Hypno,
    "name": "Hypno",
    "species": "HYPNOSIS",
    "species_clean": "Hypnosis",
    "height": "5′03″",
    "weight": 167,
    "desc": "When it locks eyes with an enemy, it will use a mix of PSI moves such as HYPNOSIS and CONFUSION.",
    "types": [PokemonType.Psychic],
    "evolveFrom": PokemonID.Drowzee,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_097_hypno.png",
    "imgW": 54,
    "imgH": 55,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Krabby,
    "name": "Krabby",
    "species": "RIVER CRAB",
    "species_clean": "River Crab",
    "height": "1′04″",
    "weight": 14.0,
    "desc": "Its pincers are not only powerful weapons, they are used for balance when walking sideways.",
    "types": [PokemonType.Water],
    "evolveTo": [
        {
            "id": PokemonID.Kingler,
            "type": PokemonEvolutionType.Level,
            "lvl": 28
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_098_krabby.png",
    "imgW": 40,
    "imgH": 39,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Kingler,
    "name": "Kingler",
    "species": "PINCER",
    "species_clean": "Pincer",
    "height": "4′03″",
    "weight": 132,
    "desc": "The large pincer has 10000 hp of crushing power. However, its huge size makes it unwieldy to use.",
    "types": [PokemonType.Water],
    "evolveFrom": PokemonID.Krabby,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_099_kingler.png",
    "imgW": 56,
    "imgH": 50,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Voltorb,
    "name": "Voltorb",
    "species": "BALL",
    "species_clean": "Ball",
    "height": "1′08″",
    "weight": 23,
    "desc": "Usually found in power plants. Easily mistaken for POKé BALL, they have zapped many people.",
    "types": [PokemonType.Electric],
    "evolveTo": [
        {
            "id": PokemonID.Electrode,
            "type": PokemonEvolutionType.Level,
            "lvl": 30
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_100_voltorb.png",
    "imgW": 25,
    "imgH": 25,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Electrode,
    "name": "Electrode",
    "species": "BALL",
    "species_clean": "Ball",
    "height": "3′11″",
    "weight": 147,
    "desc": "It stores electric energy under very high pressure. It often explodes with little or no provocation.",
    "types": [PokemonType.Electric],
    "evolveFrom": PokemonID.Voltorb,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_101_electrode.png",
    "imgW": 36,
    "imgH": 35,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Exeggcute,
    "name": "Exeggcute",
    "species": "EGG",
    "species_clean": "Egg",
    "height": "1′04″",
    "weight": 6,
    "desc": "Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.",
    "types": [PokemonType.Grass, PokemonType.Psychic],
    "evolveTo": [
        {
            "id": PokemonID.Exeggutor,
            "type": PokemonEvolutionType.Item,
            "item": ItemID.Leaf_Stone
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_102_exeggcute.png",
    "imgW": 53,
    "imgH": 52,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Exeggutor,
    "name": "Exeggutor",
    "species": "COCONUT",
    "species_clean": "Coconut",
    "height": "6′07″",
    "weight": 265,
    "desc": "Legend has it that on rare occasions, one of its heads will drop off and continue on as an EXEGGCUTE.",
    "types": [PokemonType.Grass, PokemonType.Psychic],
    "evolveFrom": PokemonID.Exeggcute,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_103_exeggutor.png",
    "imgW": 56,
    "imgH": 53,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Cubone,
    "name": "Cubone",
    "species": "LONELY",
    "species_clean": "Lonely",
    "height": "1′04″",
    "weight": 14,
    "desc": "Because it never removes its skull helmet, no one has ever seen this POKéMON's real face.",
    "types": [PokemonType.Ground],
    "evolveTo": [
        {
            "id": PokemonID.Marowak,
            "type": PokemonEvolutionType.Level,
            "lvl": 28
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_104_cubone.png",
    "imgW": 35,
    "imgH": 38,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Marowak,
    "name": "Marowak",
    "species": "BONEKEEPER",
    "species_clean": "Bone Keeper",
    "height": "3′03″",
    "weight": 99,
    "desc": "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.",
    "types": [PokemonType.Ground],
    "evolveFrom": PokemonID.Cubone,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_105_marowak.png",
    "imgW": 48,
    "imgH": 48,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Hitmonlee,
    "name": "Hitmonlee",
    "species": "KICKING",
    "species_clean": "Kicking",
    "height": "4′11″",
    "weight": 110,
    "desc": "When in a hurry, its legs lenghten progressively. It runs smoothly With extra long, loping strides.",
    "types": [PokemonType.Fighting],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_106_hitmonlee.png",
    "imgW": 56,
    "imgH": 56,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Hitmonchan,
    "name": "Hitmonchan",
    "species": "PUNCHING",
    "species_clean": "Punching",
    "height": "4′07″",
    "weight": 111,
    "desc": "While apparently doing nothing, it fires punches in lightning fast volleys that are impossible to see.",
    "types": [PokemonType.Fighting],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_107_hitmonchan.png",
    "imgW": 47,
    "imgH": 48,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Lickitung,
    "name": "Lickitung",
    "species": "LICKING",
    "species_clean": "Licking",
    "height": "3′11″",
    "weight": 144,
    "desc": "Its tongue can be extended like a chameleon's. It leaves a tingling sensation when it licks enemies.",
    "types": [PokemonType.Normal],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_108_lickitung.png",
    "imgW": 55,
    "imgH": 45,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Koffing,
    "name": "Koffing",
    "species": "POISON GAS",
    "species_clean": "Poison Gas",
    "height": "2′00″",
    "weight": 2,
    "desc": "Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.",
    "types": [PokemonType.Poison],
    "evolveTo": [
        {
            "id": PokemonID.Weezing,
            "type": PokemonEvolutionType.Level,
            "lvl": 35
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_109_koffing.png",
    "imgW": 47,
    "imgH": 47,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Weezing,
    "name": "Weezing",
    "species": "POISON GAS",
    "species_clean": "Poison Gas",
    "height": "3′11″",
    "weight": 21,
    "desc": "Where two kinds of poison gases meet, 2 KOFFINGSs can fuse into a WEEZING over many years.",
    "types": [PokemonType.Poison],
    "evolveFrom": PokemonID.Koffing,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_110_weezing.png",
    "imgW": 54,
    "imgH": 54,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Rhyhorn,
    "name": "Rhyhorn",
    "species": "SPIKES",
    "species_clean": "Spikes",
    "height": "3′03″",
    "weight": 254,
    "desc": "Its massive bones are 1000 times harder than human bones. It can easily knock a trailer flying.",
    "types": [PokemonType.Rock, PokemonType.Ground],
    "evolveTo": [
        {
            "id": PokemonID.Rhydon,
            "type": PokemonEvolutionType.Level,
            "lvl": 42
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_111_rhyhorn.png",
    "imgW": 56,
    "imgH": 55,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Rhydon,
    "name": "Rhydon",
    "species": "DRILL",
    "species_clean": "Drill",
    "height": "6′03″",
    "weight": 265,
    "desc": "Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees.",
    "types": [PokemonType.Rock, PokemonType.Ground],
    "evolveFrom": PokemonID.Rhyhorn,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_112_rhydon.png",
    "imgW": 55,
    "imgH": 53,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Chansey,
    "name": "Chansey",
    "species": "EGG",
    "species_clean": "Egg",
    "height": "3′07″",
    "weight": 76,
    "desc": "A rare and elusive POKéMON that is said to bring happiness to those who manage to get it.",
    "types": [PokemonType.Normal],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_113_chansey.png",
    "imgW": 47,
    "imgH": 48,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Tangela,
    "name": "Tangela",
    "species": "VINE",
    "species_clean": "Vine",
    "height": "3′03″",
    "weight": 77,
    "desc": "The whole body is swathed with wide vines that are similar to seaweed. Its vines shake as it walks.",
    "types": [PokemonType.Grass],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_114_tangela.png",
    "imgW": 45,
    "imgH": 44,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Kangaskhan,
    "name": "Kangaskhan",
    "species": "PARENT",
    "species_clean": "Parent",
    "height": "7′03″",
    "weight": 176,
    "desc": "The infant rarely ventures out of its mother's protective pouch until it is 3 years old.",
    "types": [PokemonType.Normal],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_115_kangaskhan.png",
    "imgW": 54,
    "imgH": 55,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Horsea,
    "name": "Horsea",
    "species": "DRAGON",
    "species_clean": "Dragon",
    "height": "1′04″",
    "weight": 18,
    "desc": "Known to shoot down flying bugs with precision blasts of ink from the surface of the water.",
    "types": [PokemonType.Water],
    "evolveTo": [
        {
            "id": PokemonID.Seadra,
            "type": PokemonEvolutionType.Level,
            "lvl": 32
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_116_horsea.png",
    "imgW": 31,
    "imgH": 32,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Seadra,
    "name": "Seadra",
    "species": "DRAGON",
    "species_clean": "Dragon",
    "height": "3′11″",
    "weight": 55,
    "desc": "Capable of swimming backwards by rapidly flapping its wing-like pectoral fins and stout tail.",
    "types": [PokemonType.Water],
    "evolveFrom": PokemonID.Horsea,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_117_seadra.png",
    "imgW": 45,
    "imgH": 48,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Goldeen,
    "name": "Goldeen",
    "species": "GOLDFISH",
    "species_clean": "Goldfish",
    "height": "2′00″",
    "weight": 33,
    "desc": "Its tail fin billows like an elegant ballroom dress, giving it the nickname of the Water Queen.",
    "types": [PokemonType.Water],
    "evolveTo": [
        {
            "id": PokemonID.Seaking,
            "type": PokemonEvolutionType.Level,
            "lvl": 33
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_118_goldeen.png",
    "imgW": 36,
    "imgH": 47,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Seaking,
    "name": "Seaking",
    "species": "GOLDFISH",
    "species_clean": "Goldfish",
    "height": "4′03″",
    "weight": 86,
    "desc": "In the autumn spawning season, they can be seen swimming powerfully up rivers and creeks.",
    "types": [PokemonType.Water],
    "evolveFrom": PokemonID.Goldeen,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_119_seaking.png",
    "imgW": 56,
    "imgH": 54,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Staryu,
    "name": "Staryu",
    "species": "STARSHAPE",
    "species_clean": "Star Shape",
    "height": "2′07″",
    "weight": 76,
    "desc": "An enigmatic POKéMON that can effortlessly regenerate any appendage it loses in battle.",
    "types": [PokemonType.Water],
    "evolveTo": [
        {
            "id": PokemonID.Starmie,
            "type": PokemonEvolutionType.Item,
            "item": ItemID.Water_Stone
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_120_staryu.png",
    "imgW": 39,
    "imgH": 42,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Starmie,
    "name": "Starmie",
    "species": "MYSTERIOUS",
    "species_clean": "Mysterious",
    "height": "3′07″",
    "weight": 176,
    "desc": "Its central core glows with the seven colors of the rainbow. Some people value the core as a gem.",
    "types": [PokemonType.Water, PokemonType.Psychic],
    "evolveFrom": PokemonID.Staryu,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_121_starmie.png",
    "imgW": 47,
    "imgH": 47,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Mr_Mime,
    "name": "Mr. Mime",
    "species": "BARRIER",
    "species_clean": "Barrier",
    "height": "4′03″",
    "weight": 120,
    "desc": "If interrupted while its miming, it will slap around the offender with its broad hands.",
    "types": [PokemonType.Psychic],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_122_mr_mime.png",
    "imgW": 48,
    "imgH": 42,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Scyther,
    "name": "Scyther",
    "species": "MANTIS",
    "species_clean": "Mantis",
    "height": "4′11″",
    "weight": 123,
    "desc": "With ninja-like agility and speed, it can create the illusion that there is more than one.",
    "types": [PokemonType.Bug, PokemonType.Flying],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_123_scyther.png",
    "imgW": 56,
    "imgH": 56,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Jynx,
    "name": "Jynx",
    "species": "HUMANSHAPE",
    "species_clean": "Human Shape",
    "height": "4′07″",
    "weight": 90,
    "desc": "It seductively wiggles its hips as it walks. It can cause people to dance in unison with it.",
    "types": [PokemonType.Ice, PokemonType.Psychic],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_124_jynx.png",
    "imgW": 47,
    "imgH": 48,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Electabuzz,
    "name": "Electabuzz",
    "species": "ELECTRIC",
    "species_clean": "Electric",
    "height": "3′07″",
    "weight": 66,
    "desc": "Normally found near power plants, they can wander away and cause major blackouts in cities.",
    "types": [PokemonType.Electric],
    "available": [PokemonGameVersion.Red],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_125_electabuzz.png",
    "imgW": 48,
    "imgH": 45,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Magmar,
    "name": "Magmar",
    "species": "SPITFIRE",
    "species_clean": "Spit Fire",
    "height": "4′03″",
    "weight": 98,
    "desc": "Its body always burns with an orange glow that enables it to hide perfectly among flames.",
    "types": [PokemonType.Fire],
    "available": [PokemonGameVersion.Blue],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_126_magmar.png",
    "imgW": 46,
    "imgH": 43,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Pinsir,
    "name": "Pinsir",
    "species": "STAGBEETLE",
    "species_clean": "Stag Beetle",
    "height": "4′11″",
    "weight": 121,
    "desc": "If it tails to crush the vitim in its pincers,it will swing it around and toss it hard. ",
    "types": [PokemonType.Bug],
    "available": [PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_127_pinsir.png",
    "imgW": 53,
    "imgH": 54,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Tauros,
    "name": "Tauros",
    "species": "WILD BULL",
    "species_clean": "Wild Bull",
    "height": "4′07″",
    "weight": 195,
    "desc": "When it targets an enemy, it charges furiously while whipping its body with its long tails.",
    "types": [PokemonType.Normal],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_128_tauros.png",
    "imgW": 55,
    "imgH": 56,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Magikarp,
    "name": "Magikarp",
    "species": "FISH",
    "species_clean": "Fish",
    "height": "2′11″",
    "weight": 22,
    "desc": "In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.",
    "types": [PokemonType.Water],
    "evolveTo": [
        {
            "id": PokemonID.Gyarados,
            "type": PokemonEvolutionType.Level,
            "lvl": 20
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_129_magikarp.png",
    "imgW": 48,
    "imgH": 48,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Gyarados,
    "name": "Gyarados",
    "species": "ATROCIOUS",
    "species_clean": "Atrocious",
    "height": "21′04″",
    "weight": 518.0,
    "desc": "Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.",
    "types": [PokemonType.Water, PokemonType.Flying],
    "evolveFrom": PokemonID.Magikarp,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_130_gyarados.png",
    "imgW": 56,
    "imgH": 56,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Lapras,
    "name": "Lapras",
    "species": "TRANSPORT",
    "species_clean": "Transport",
    "height": "8′02″",
    "weight": 485,
    "desc": "A POKéMON that has been overhunted almost to extinction. It can ferry people across the water.",
    "types": [PokemonType.Water, PokemonType.Ice],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_131_lapras.png",
    "imgW": 56,
    "imgH": 56,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Ditto,
    "name": "Ditto",
    "species": "TRANSFORM",
    "species_clean": "Transform",
    "height": "1′00″",
    "weight": 9,
    "desc": "Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy.",
    "types": [PokemonType.Normal],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_132_ditto.png",
    "imgW": 34,
    "imgH": 30,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Eevee,
    "name": "Eevee",
    "species": "EVOLUTION",
    "species_clean": "Evolution",
    "height": "1′00″",
    "weight": 14,
    "desc": "Its genetic code is irregular. It may mutate if it is exposed to radiation from element STONEs.",
    "types": [PokemonType.Normal],
    "evolveTo": [
        {
            "id": PokemonID.Vaporeon,
            "type": PokemonEvolutionType.Item,
            "item": ItemID.Water_Stone
        },
        {
            "id": PokemonID.Jolteon,
            "type": PokemonEvolutionType.Item,
            "item": ItemID.Thuder_Stone
        },
        {
            "id": PokemonID.Flareon,
            "type": PokemonEvolutionType.Item,
            "item": ItemID.Fire_Stone
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_133_eevee.png",
    "imgW": 38,
    "imgH": 38,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Vaporeon,
    "name": "Vaporeon",
    "species": "BUBBLE JET",
    "species_clean": "Bubble Jet",
    "height": "3′03″",
    "weight": 64,
    "desc": "Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaid's.",
    "types": [PokemonType.Water],
    "evolveFrom": PokemonID.Eevee,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_134_vaporeon.png",
    "imgW": 46,
    "imgH": 44,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Jolteon,
    "name": "Jolteon",
    "species": "LIGHTNING",
    "species_clean": "Lightning",
    "height": "2′07″",
    "weight": 54,
    "desc": "It accumulates negative ions in the atmosphere to blast out 10000-volt lightning bolts.",
    "types": [PokemonType.Electric],
    "evolveFrom": PokemonID.Eevee,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_135_jolteon.png",
    "imgW": 48,
    "imgH": 43,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Flareon,
    "name": "Flareon",
    "species": "FLAME",
    "species_clean": "Flame",
    "height": "2′11″",
    "weight": 55,
    "desc": "When storing thermal energy in its body, its temperature could soar to over 1600 degrees.",
    "types": [PokemonType.Fire],
    "evolveFrom": PokemonID.Eevee,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_136_flareon.png",
    "imgW": 47,
    "imgH": 47,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Porygon,
    "name": "Porygon",
    "species": "VIRTUAL",
    "species_clean": "Virtual",
    "height": "2′07″",
    "weight": 80,
    "desc": "A POKéMON that consists entirely of programming code. Capable of moving freely in cyberspace.",
    "types": [PokemonType.Normal],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_137_porygon.png",
    "imgW": 47,
    "imgH": 45,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Omanyte,
    "name": "Omanyte",
    "species": "SPIRAL",
    "species_clean": "Spiral",
    "height": "1′04″",
    "weight": 17,
    "desc": "Although long extinct, in rare cases, it can be genetically ressurrected from fossils.",
    "types": [PokemonType.Rock, PokemonType.Water],
    "evolveTo": [
        {
            "id": PokemonID.Omastar,
            "type": PokemonEvolutionType.Level,
            "lvl": 40
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_138_omanyte.png",
    "imgW": 31,
    "imgH": 32,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Omastar,
    "name": "Omastar",
    "species": "SPIRAL",
    "species_clean": "Spiral",
    "height": "3′03″",
    "weight": 77,
    "desc": "A prehistoric POKéMON that died out when its heavy shell made it impossible to catch prey.",
    "types": [PokemonType.Rock, PokemonType.Water],
    "evolveFrom": PokemonID.Omanyte,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_139_omastar.png",
    "imgW": 47,
    "imgH": 48,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Kabuto,
    "name": "Kabuto",
    "species": "SHELLFISH",
    "species_clean": "Shellfish",
    "height": "1′08″",
    "weight": 25,
    "desc": "A POKéMON that was ressurrected from a fossil found in what was once the ocean floor eons ago.",
    "types": [PokemonType.Rock, PokemonType.Water],
    "evolveTo": [
        {
            "id": PokemonID.Kabutops,
            "type": PokemonEvolutionType.Level,
            "lvl": 40
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_140_kabuto.png",
    "imgW": 40,
    "imgH": 36,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Kabutops,
    "name": "Kabutops",
    "species": "SHELLFISH",
    "species_clean": "Shellfish",
    "height": "4′03″",
    "weight": 89,
    "desc": "Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body of fluids.",
    "types": [PokemonType.Rock, PokemonType.Water],
    "evolveFrom": PokemonID.Kabuto,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_141_kabutops.png",
    "imgW": 47,
    "imgH": 46,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Aerodactyl,
    "name": "Aerodactyl",
    "species": "FOSSIL",
    "species_clean": "Fossil",
    "height": "5′11″",
    "weight": 130,
    "desc": "A ferocious, prehistoric POKéMON that goes for the enemy's throat with its serrated saw-like fangs.",
    "types": [PokemonType.Rock, PokemonType.Flying],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_142_aerodactyl.png",
    "imgW": 56,
    "imgH": 50,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Snorlax,
    "name": "Snorlax",
    "species": "SLEEPING",
    "species_clean": "Sleeping",
    "height": "6′11″",
    "weight": 1014,
    "desc": "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.",
    "types": [PokemonType.Normal],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_143_snorlax.png",
    "imgW": 54,
    "imgH": 55,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Articuno,
    "name": "Articuno",
    "species": "FREEZE",
    "species_clean": "Freeze",
    "height": "5′07″",
    "weight": 122,
    "desc": "A legendary bird POKéMON that is said to appear to doomed people who are lost in icy mountains.",
    "types": [PokemonType.Ice, PokemonType.Flying],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_144_articuno.png",
    "imgW": 56,
    "imgH": 56,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Zapdos,
    "name": "Zapdos",
    "species": "ELECTRIC",
    "species_clean": "Electric",
    "height": "5′03″",
    "weight": 116,
    "desc": "A legendary bird POKéMON that is said to appear from clouds while dropping enormous lightning bolts.",
    "types": [PokemonType.Electric, PokemonType.Flying],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_145_zapdos.png",
    "imgW": 53,
    "imgH": 55,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Moltres,
    "name": "Moltres",
    "species": "FLAME",
    "species_clean": "Flame",
    "height": "6′07″",
    "weight": 132,
    "desc": "Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames.",
    "types": [PokemonType.Fire, PokemonType.Flying],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_146_moltres.png",
    "imgW": 55,
    "imgH": 56,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Dratini,
    "name": "Dratini",
    "species": "DRAGON",
    "species_clean": "Dragon",
    "height": "5′11″",
    "weight": 7,
    "desc": "Long considered a mythical POKéMON until recently when a small colony was found living underwater.",
    "types": [PokemonType.Dragon],
    "evolveTo": [
        {
            "id": PokemonID.Dragonair,
            "type": PokemonEvolutionType.Level,
            "lvl": 30
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_147_dratini.png",
    "imgW": 32,
    "imgH": 39,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Dragonair,
    "name": "Dragonair",
    "species": "DRAGON",
    "species_clean": "Dragon",
    "height": "13′01″",
    "weight": 36,
    "desc": "A mystical POKéMON that exudes a gentle aura. Has the ability to change climate conditions.",
    "types": [PokemonType.Dragon],
    "evolveFrom": PokemonID.Dratini,
    "evolveTo": [
        {
            "id": PokemonID.Dragonite,
            "type": PokemonEvolutionType.Level,
            "lvl": 55
        }
    ],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_148_dragonair.png",
    "imgW": 46,
    "imgH": 44,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Dragonite,
    "name": "Dragonite",
    "species": "DRAGON",
    "species_clean": "Dragon",
    "height": "7′03″",
    "weight": 463,
    "desc": "An extremely rarely seen marine POKéMON. Its intelligence is said to match that of humans.",
    "types": [PokemonType.Dragon, PokemonType.Flying],
    "evolveFrom": PokemonID.Dragonair,
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_149_dragonite.png",
    "imgW": 52,
    "imgH": 53,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Mewtwo,
    "name": "Mewtwo",
    "species": "GENETIC",
    "species_clean": "Genetic",
    "height": "6′07″",
    "weight": 269,
    "desc": "It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.",
    "types": [PokemonType.Psychic],
    "available": [PokemonGameVersion.Red, PokemonGameVersion.Blue, PokemonGameVersion.Yellow],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_150_mewtwo.png",
    "imgW": 56,
    "imgH": 56,
    "trivia": [
    ]
  },
  {
    "id": PokemonID.Mew,
    "name": "Mew",
    "species": "NEW SPECIE",
    "species_clean": "New Species",
    "height": "1′04″",
    "weight": 9,
    "desc": "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
    "types": [PokemonType.Psychic],
    "available": [],
    "imgGBC": "/imgs/pokemon/gbc/pokemon_151_mew.png",
    "imgW": 36,
    "imgH": 40,
    "trivia": [
    ]
  }
];

export function get_pokemon(pokemonID: number) {
  --pokemonID;
  if (pokemonID < 0 || pokemonID >= pokemonDB.length)
    return undefined;
  return pokemonDB[pokemonID];
}

export function get_pokemon_base(pokemon: Pokemon) {
  if (!pokemon.evolveFrom)
    return pokemon;
  const basePokemon = get_pokemon(pokemon.evolveFrom);
  if (!basePokemon)
    return pokemon;
  return get_pokemon_base(basePokemon);
}

export function get_pokemon_evolution_index(pokemon: Pokemon) {
  if (!pokemon.evolveFrom)
    return pokemon.evolveTo ? 1 : -1;

  var currentID = 1;
  var basePokemon = get_pokemon(pokemon.evolveFrom);

  while (basePokemon)
  {
    ++currentID;
    if (!basePokemon.evolveFrom)
      return currentID;
    basePokemon = get_pokemon(basePokemon.evolveFrom);
  }

  return currentID;
}

export function get_pokemon_name_span(pokemon: Pokemon) {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="pokemon-name-link">
        {pokemon.name}
    </Link>
  );
}