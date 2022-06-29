import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../interfaces/pokemon";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  public pokemonSprites: string[] = [];
  @Input('pokemon') pokemonData!: Pokemon;
  pokemonClasses: string = '';
  pokemonDetailsLink: string = '';

  constructor(private http: HttpClient) {
  }

  async ngOnInit(): Promise<void> {
    await this.getSprites();
    this.setPokemonDetailsLink();
    this.setCardClasses();
  }

  setPokemonDetailsLink() {
    this.pokemonDetailsLink = `pokemon/${this.pokemonData.name}`
  }

  setCardClasses() {
    const firstType = this.pokemonData.pokemon_v2_pokemontypes[0];
    if (firstType) {
      this.pokemonClasses = `border-type-${firstType.pokemon_v2_type.name} shadow-md shadow-type-${firstType.pokemon_v2_type.name} `;
    }
  }

  async getSprites() {
    const spritesUri = {
      back_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.pokemonData.id}.png`,
      back_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${this.pokemonData.id}.png`,
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonData.id}.png`,
      front_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${this.pokemonData.id}.png`,
    }
    for (const [key, val] of Object.entries(spritesUri)) {
      this.http.get(val).subscribe(
        (next) => {
          this.pokemonSprites.push(val);
        },
        (err) => {
          if (err.status == 200)
            this.pokemonSprites.push(val);
        }
      )
    }
  }
}
