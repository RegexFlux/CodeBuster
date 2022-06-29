import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {Pokemon} from "../../interfaces/pokemon";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Output() searchResult = new EventEmitter<Pokemon[]>();

  public searchInput: string = '';

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.searchPokemons('a');
  }

  async searchPokemons(name: string): Promise<void> {
    const result = {
      "pokemon": [
        {
          "__typename": "pokemon_v2_pokemon",
          "name": "bulbasaur",
          "pokemon_v2_pokemonstats": [
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 45,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "hp"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 49,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "attack"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 49,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "defense"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 65,
              "effort": 1,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "special-attack"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 65,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "special-defense"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 45,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "speed"
              }
            }
          ],
          "pokemon_v2_pokemontypes": [
            {
              "__typename": "pokemon_v2_pokemontype",
              "pokemon_v2_type": {
                "__typename": "pokemon_v2_type",
                "name": "grass"
              }
            },
            {
              "__typename": "pokemon_v2_pokemontype",
              "pokemon_v2_type": {
                "__typename": "pokemon_v2_type",
                "name": "poison"
              }
            }
          ],
          "id": 1,
          "pokemon_v2_pokemonsprites": [
            {
              "__typename": "pokemon_v2_pokemonsprites",
              "sprites": "{\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null, \"other\": {\"dream_world\": {\"front_default\": null, \"front_female\": null}, \"home\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}, \"official-artwork\": {\"front_default\": null}}, \"versions\": {\"generation-i\": {\"red-blue\": {\"front_default\": null, \"front_gray\": null, \"back_default\": null, \"back_gray\": null, \"front_transparent\": null, \"back_transparent\": null}, \"yellow\": {\"front_default\": null, \"front_gray\": null, \"back_default\": null, \"back_gray\": null, \"front_transparent\": null, \"back_transparent\": null}}, \"generation-ii\": {\"crystal\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null, \"front_transparent\": null, \"front_shiny_transparent\": null, \"back_transparent\": null, \"back_shiny_transparent\": null}, \"gold\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null, \"front_transparent\": null}, \"silver\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null, \"front_transparent\": null}}, \"generation-iii\": {\"emerald\": {\"front_default\": null, \"front_shiny\": null}, \"firered-leafgreen\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null}, \"ruby-sapphire\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null}}, \"generation-iv\": {\"diamond-pearl\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}, \"heartgold-soulsilver\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}, \"platinum\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}}, \"generation-v\": {\"black-white\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null, \"animated\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}}}, \"generation-vi\": {\"omegaruby-alphasapphire\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}, \"x-y\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}}, \"generation-vii\": {\"ultra-sun-ultra-moon\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}, \"icons\": {\"front_default\": null, \"front_female\": null}}, \"generation-viii\": {\"icons\": {\"front_default\": null, \"front_female\": null}}}}"
            }
          ]
        },
        {
          "__typename": "pokemon_v2_pokemon",
          "name": "bulbasaur",
          "pokemon_v2_pokemonstats": [
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 45,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "hp"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 49,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "attack"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 49,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "defense"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 65,
              "effort": 1,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "special-attack"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 65,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "special-defense"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 45,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "speed"
              }
            }
          ],
          "pokemon_v2_pokemontypes": [
            {
              "__typename": "pokemon_v2_pokemontype",
              "pokemon_v2_type": {
                "__typename": "pokemon_v2_type",
                "name": "grass"
              }
            },
            {
              "__typename": "pokemon_v2_pokemontype",
              "pokemon_v2_type": {
                "__typename": "pokemon_v2_type",
                "name": "poison"
              }
            }
          ],
          "id": 1,
          "pokemon_v2_pokemonsprites": [
            {
              "__typename": "pokemon_v2_pokemonsprites",
              "sprites": "{\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null, \"other\": {\"dream_world\": {\"front_default\": null, \"front_female\": null}, \"home\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}, \"official-artwork\": {\"front_default\": null}}, \"versions\": {\"generation-i\": {\"red-blue\": {\"front_default\": null, \"front_gray\": null, \"back_default\": null, \"back_gray\": null, \"front_transparent\": null, \"back_transparent\": null}, \"yellow\": {\"front_default\": null, \"front_gray\": null, \"back_default\": null, \"back_gray\": null, \"front_transparent\": null, \"back_transparent\": null}}, \"generation-ii\": {\"crystal\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null, \"front_transparent\": null, \"front_shiny_transparent\": null, \"back_transparent\": null, \"back_shiny_transparent\": null}, \"gold\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null, \"front_transparent\": null}, \"silver\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null, \"front_transparent\": null}}, \"generation-iii\": {\"emerald\": {\"front_default\": null, \"front_shiny\": null}, \"firered-leafgreen\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null}, \"ruby-sapphire\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null}}, \"generation-iv\": {\"diamond-pearl\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}, \"heartgold-soulsilver\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}, \"platinum\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}}, \"generation-v\": {\"black-white\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null, \"animated\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}}}, \"generation-vi\": {\"omegaruby-alphasapphire\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}, \"x-y\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}}, \"generation-vii\": {\"ultra-sun-ultra-moon\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}, \"icons\": {\"front_default\": null, \"front_female\": null}}, \"generation-viii\": {\"icons\": {\"front_default\": null, \"front_female\": null}}}}"
            }
          ]
        },
        {
          "__typename": "pokemon_v2_pokemon",
          "name": "bulbasaur",
          "pokemon_v2_pokemonstats": [
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 45,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "hp"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 49,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "attack"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 49,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "defense"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 65,
              "effort": 1,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "special-attack"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 65,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "special-defense"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 45,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "speed"
              }
            }
          ],
          "pokemon_v2_pokemontypes": [
            {
              "__typename": "pokemon_v2_pokemontype",
              "pokemon_v2_type": {
                "__typename": "pokemon_v2_type",
                "name": "grass"
              }
            },
            {
              "__typename": "pokemon_v2_pokemontype",
              "pokemon_v2_type": {
                "__typename": "pokemon_v2_type",
                "name": "poison"
              }
            }
          ],
          "id": 1,
          "pokemon_v2_pokemonsprites": [
            {
              "__typename": "pokemon_v2_pokemonsprites",
              "sprites": "{\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null, \"other\": {\"dream_world\": {\"front_default\": null, \"front_female\": null}, \"home\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}, \"official-artwork\": {\"front_default\": null}}, \"versions\": {\"generation-i\": {\"red-blue\": {\"front_default\": null, \"front_gray\": null, \"back_default\": null, \"back_gray\": null, \"front_transparent\": null, \"back_transparent\": null}, \"yellow\": {\"front_default\": null, \"front_gray\": null, \"back_default\": null, \"back_gray\": null, \"front_transparent\": null, \"back_transparent\": null}}, \"generation-ii\": {\"crystal\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null, \"front_transparent\": null, \"front_shiny_transparent\": null, \"back_transparent\": null, \"back_shiny_transparent\": null}, \"gold\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null, \"front_transparent\": null}, \"silver\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null, \"front_transparent\": null}}, \"generation-iii\": {\"emerald\": {\"front_default\": null, \"front_shiny\": null}, \"firered-leafgreen\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null}, \"ruby-sapphire\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null}}, \"generation-iv\": {\"diamond-pearl\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}, \"heartgold-soulsilver\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}, \"platinum\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}}, \"generation-v\": {\"black-white\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null, \"animated\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}}}, \"generation-vi\": {\"omegaruby-alphasapphire\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}, \"x-y\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}}, \"generation-vii\": {\"ultra-sun-ultra-moon\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}, \"icons\": {\"front_default\": null, \"front_female\": null}}, \"generation-viii\": {\"icons\": {\"front_default\": null, \"front_female\": null}}}}"
            }
          ]
        },
        {
          "__typename": "pokemon_v2_pokemon",
          "name": "bulbasaur",
          "pokemon_v2_pokemonstats": [
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 45,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "hp"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 49,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "attack"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 49,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "defense"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 65,
              "effort": 1,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "special-attack"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 65,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "special-defense"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 45,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "speed"
              }
            }
          ],
          "pokemon_v2_pokemontypes": [
            {
              "__typename": "pokemon_v2_pokemontype",
              "pokemon_v2_type": {
                "__typename": "pokemon_v2_type",
                "name": "grass"
              }
            },
            {
              "__typename": "pokemon_v2_pokemontype",
              "pokemon_v2_type": {
                "__typename": "pokemon_v2_type",
                "name": "poison"
              }
            }
          ],
          "id": 1,
          "pokemon_v2_pokemonsprites": [
            {
              "__typename": "pokemon_v2_pokemonsprites",
              "sprites": "{\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null, \"other\": {\"dream_world\": {\"front_default\": null, \"front_female\": null}, \"home\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}, \"official-artwork\": {\"front_default\": null}}, \"versions\": {\"generation-i\": {\"red-blue\": {\"front_default\": null, \"front_gray\": null, \"back_default\": null, \"back_gray\": null, \"front_transparent\": null, \"back_transparent\": null}, \"yellow\": {\"front_default\": null, \"front_gray\": null, \"back_default\": null, \"back_gray\": null, \"front_transparent\": null, \"back_transparent\": null}}, \"generation-ii\": {\"crystal\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null, \"front_transparent\": null, \"front_shiny_transparent\": null, \"back_transparent\": null, \"back_shiny_transparent\": null}, \"gold\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null, \"front_transparent\": null}, \"silver\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null, \"front_transparent\": null}}, \"generation-iii\": {\"emerald\": {\"front_default\": null, \"front_shiny\": null}, \"firered-leafgreen\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null}, \"ruby-sapphire\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null}}, \"generation-iv\": {\"diamond-pearl\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}, \"heartgold-soulsilver\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}, \"platinum\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}}, \"generation-v\": {\"black-white\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null, \"animated\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}}}, \"generation-vi\": {\"omegaruby-alphasapphire\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}, \"x-y\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}}, \"generation-vii\": {\"ultra-sun-ultra-moon\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}, \"icons\": {\"front_default\": null, \"front_female\": null}}, \"generation-viii\": {\"icons\": {\"front_default\": null, \"front_female\": null}}}}"
            }
          ]
        },
        {
          "__typename": "pokemon_v2_pokemon",
          "name": "bulbasaur",
          "pokemon_v2_pokemonstats": [
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 45,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "hp"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 49,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "attack"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 49,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "defense"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 65,
              "effort": 1,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "special-attack"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 65,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "special-defense"
              }
            },
            {
              "__typename": "pokemon_v2_pokemonstat",
              "base_stat": 45,
              "effort": 0,
              "pokemon_v2_stat": {
                "__typename": "pokemon_v2_stat",
                "name": "speed"
              }
            }
          ],
          "pokemon_v2_pokemontypes": [
            {
              "__typename": "pokemon_v2_pokemontype",
              "pokemon_v2_type": {
                "__typename": "pokemon_v2_type",
                "name": "grass"
              }
            },
            {
              "__typename": "pokemon_v2_pokemontype",
              "pokemon_v2_type": {
                "__typename": "pokemon_v2_type",
                "name": "poison"
              }
            }
          ],
          "id": 1,
          "pokemon_v2_pokemonsprites": [
            {
              "__typename": "pokemon_v2_pokemonsprites",
              "sprites": "{\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null, \"other\": {\"dream_world\": {\"front_default\": null, \"front_female\": null}, \"home\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}, \"official-artwork\": {\"front_default\": null}}, \"versions\": {\"generation-i\": {\"red-blue\": {\"front_default\": null, \"front_gray\": null, \"back_default\": null, \"back_gray\": null, \"front_transparent\": null, \"back_transparent\": null}, \"yellow\": {\"front_default\": null, \"front_gray\": null, \"back_default\": null, \"back_gray\": null, \"front_transparent\": null, \"back_transparent\": null}}, \"generation-ii\": {\"crystal\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null, \"front_transparent\": null, \"front_shiny_transparent\": null, \"back_transparent\": null, \"back_shiny_transparent\": null}, \"gold\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null, \"front_transparent\": null}, \"silver\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null, \"front_transparent\": null}}, \"generation-iii\": {\"emerald\": {\"front_default\": null, \"front_shiny\": null}, \"firered-leafgreen\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null}, \"ruby-sapphire\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null}}, \"generation-iv\": {\"diamond-pearl\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}, \"heartgold-soulsilver\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}, \"platinum\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}}, \"generation-v\": {\"black-white\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null, \"animated\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}}}, \"generation-vi\": {\"omegaruby-alphasapphire\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}, \"x-y\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}}, \"generation-vii\": {\"ultra-sun-ultra-moon\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}, \"icons\": {\"front_default\": null, \"front_female\": null}}, \"generation-viii\": {\"icons\": {\"front_default\": null, \"front_female\": null}}}}"
            }
          ]
        },
      ]
    };
    // const result = await this.pokemonService.searchPokemons(name);
    await this.searchResult.emit(result.pokemon);
  }
}
