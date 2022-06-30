export const pokemonSearchQuery = `query searchPokemons($name: String!)  {
  pokemons: pokemon_v2_pokemon(where: {name: {_ilike: $name}}) {
    name
    pokemon_v2_pokemonstats {
      base_stat
      effort
      pokemon_v2_stat {
        name
      }
    }
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
    id
    pokemon_v2_pokemonsprites(where: {}) {
      sprites
    }
  }
}`;

export const pokemonAllQuery = `query allPokemons {
  pokemons: pokemon_v2_pokemon {
    name
    pokemon_v2_pokemonstats {
      base_stat
      effort
      pokemon_v2_stat {
        name
      }
    }
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
    id
    pokemon_v2_pokemonsprites(where: {}) {
      sprites
    }
  }
}`;
