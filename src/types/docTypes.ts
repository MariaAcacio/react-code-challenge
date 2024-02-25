export type PokemonType = {
  name: string;
  id: number;
  url: string;
};

export type PokemonDetailsType = {
  name: string;
  id: number;
  abilities: AbilityType[];
  types: PokemonTypeType[];
  sprites: SpritesType;
};

export type FavoritePokemonsType = {
  name: string;
  id: number;
  defaultSprite: string;
  shinySprite: string;
  abilities: string[];
  types: string[];
};

export type AbilityType = {
  name: string;
  url: string;
};

type pokemonSubType = {
  name: string;
  url: string;
};

type PokemonTypeType = {
  slot: number;
  type: pokemonSubType;
};
[];

type Dream_worldType = {
  front_default: string;
  front_female: null;
};
type OtherType = {
  dream_world: Dream_worldType;
  home: HomeType;
  "official-artwork": Official_artworkType;
  showdown: ShowdownType;
};

type HomeType = {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type Official_artworkType = {
  front_default: string;
  front_shiny: string;
};

type ShowdownType = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type VersionsType = {
  "generation-i": Generation_iType;
  "generation-ii": Generation_iiType;
  "generation-iii": Generation_iiiType;
  "generation-iv": Generation_ivType;
  "generation-v": Generation_vType;
  "generation-vi": Generation_viType;
  "generation-vii": Generation_viiType;
  "generation-viii": Generation_viiiType;
};
type Generation_iType = {
  "red-blue": Red_blueType;
  yellow: YellowType;
};

type Red_blueType = {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
};

type YellowType = {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
};

type Generation_iiType = {
  crystal: CrystalType;
  gold: GoldType;
  silver: SilverType;
};

type CrystalType = {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
};

type GoldType = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
};

type SilverType = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
};

type Generation_iiiType = {
  emerald: EmeraldType;
  firered_leafgreen: Firered_leafgreenType;
  ruby_sapphire: Ruby_sapphireType;
};

type EmeraldType = {
  front_default: string;
  front_shiny: string;
};

type Firered_leafgreenType = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
};

type Ruby_sapphireType = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
};

type Generation_ivType = {
  diamond_pearl: Diamond_pearlType;
  heartgold_soulsilver: Heartgold_soulsilverType;
  platinum: PlatinumType;
};

type Diamond_pearlType = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type Heartgold_soulsilverType = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type PlatinumType = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type Generation_vType = {
  "black-white": Black_whiteType;
};

type Black_whiteType = {
  animated: AnimatedType;
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type AnimatedType = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type Generation_viType = {
  omegaruby_alphasapphire: Omegaruby_alphasapphireType;
  x_y: X_yType;
};

type Omegaruby_alphasapphireType = {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type X_yType = {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type Generation_viiType = {
  icons: IconsType;
  ultra_sun_ultra_moon: Ultra_sun_ultra_moonType;
};

type IconsType = {
  front_default: string;
};

type Ultra_sun_ultra_moonType = {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type Generation_viiiType = {
  icons: IconsViiiType;
};
type IconsViiiType = {
  front_default: string;
  front_female: null;
};

type SpritesType = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other: OtherType;
  versions: VersionsType;
};
