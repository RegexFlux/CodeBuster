import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {Pokemon} from "../../interfaces/pokemon";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  private listQuantity = 30;

  @Output() searchResult = new EventEmitter<Pokemon[]>();

  public searchInput: string = '';

  constructor(private pokemonService: PokemonService) {
  }

  async fetchPokemonFromService() {
    let pokemonList = this.pokemonService.pokemonList;
    if (pokemonList == null) {
      pokemonList = await this.pokemonService.loadPokemons()
    }
    return pokemonList;
  }

  async ngOnInit(): Promise<void> {
    const pokemonList = await this.fetchPokemonFromService();
    if (pokemonList){
      await this.searchResult.emit(pokemonList.slice(0, this.listQuantity));
    }
  }

  async searchPokemons(name: string): Promise<void> {
    const pokemonList = await this.fetchPokemonFromService();
    await this.searchResult.emit(pokemonList.filter((pokemon: Pokemon) => pokemon.name.includes(name)).slice(0, this.listQuantity));
  }
}
