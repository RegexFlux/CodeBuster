import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../interfaces/pokemon";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @Input('pokemons') pokemonsList!: Pokemon[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
