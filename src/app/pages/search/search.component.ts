import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../interfaces/pokemon";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public pokemonList: Pokemon[] = [];

  constructor() { }

  async ngOnInit(): Promise<void> {
    console.log();
  }

  handleSearch(pokemons: Pokemon[]) {
    this.pokemonList = pokemons;
  }

}
