import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../interfaces/pokemon";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

import SwiperCore, {Autoplay} from 'swiper';
SwiperCore.use([Autoplay])

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input('hiddenName') hiddenName?: boolean;

  public pokemonSprites: string[] = [];
  @Input('pokemon') pokemonData!: Pokemon;
  pokemonClasses: string = '';
  pokemonDetailsLink: string = '';

  constructor(private http: HttpClient, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    await this.getSprites();
    this.setPokemonDetailsLink();
    this.setCardClasses();
  }

  setPokemonDetailsLink() {
    const prefix = 'pokemon/';
    this.pokemonDetailsLink = this.pokemonData.name;
    if (this.router.url != '/pokemon')
      this.pokemonDetailsLink = `${prefix}${this.pokemonData.name}`
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
    for (const val of Object.values(spritesUri)) {
      this.http.get(val).subscribe(
        () => {
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
