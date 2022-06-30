export interface Pokemon {
  id: number;
  name: string;
  pokemon_v2_pokemonstats: PokemonStat[];
  pokemon_v2_pokemontypes: PokemonType[];
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  pokemon_v2_stat: { name: string }
}

export interface PokemonType {
  pokemon_v2_type: { name: string }
}

export interface PokemonTypeAsset {
  assetName: string;
  color: string;
}
