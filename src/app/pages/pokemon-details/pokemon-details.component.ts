import {Component, OnInit} from '@angular/core';
import {NavigationButton} from "../../interfaces/button";
import {Pokemon} from "../../interfaces/pokemon";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  public pokemon?: Pokemon;

  navigationConfig: NavigationButton = {
    routerLink: 'pokemon',
    text: 'navigation.search'
  }

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
  }

  async ngOnInit(): Promise<void> {
    const pokemonName = this.route.snapshot.params['name'];
    const pokemon = await this.pokemonService.findPokemon(pokemonName);
    if (!pokemon) {

    }
    console.log('poke', pokemon);
    // @ts-ignore
    this.pokemon = pokemon;
  }

}
