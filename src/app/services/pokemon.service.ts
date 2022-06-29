import {Injectable} from '@angular/core';
import {Apollo, gql, QueryRef} from "apollo-angular";
import {PokemonSearchResult} from "../interfaces/pokemon";
import {pokemonAllQuery, pokemonSearchQuery} from "../constants/pokemonQueries";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonSearchQuery: QueryRef<{ pokemons: PokemonSearchResult }, { name: string }>
  private pokemonAllQuery: QueryRef<{ pokemons: PokemonSearchResult }>

  private pokemonList: PokemonSearchResult | null = null;

  constructor(private apollo: Apollo) {
    this.pokemonSearchQuery = this.apollo.watchQuery({
      query: gql`${pokemonSearchQuery}`
    });
    this.pokemonAllQuery = this.apollo.watchQuery({
      query: gql`${pokemonAllQuery}`
    });
  }

  async loadPokemons(): Promise<PokemonSearchResult> {
    if (!this.pokemonList) {
      const result = await this.pokemonAllQuery.refetch();
      this.pokemonList = result.data.pokemons;
      return result.data.pokemons;
    }
    return this.pokemonList;
  }

  async searchPokemons(name: string): Promise<PokemonSearchResult> {
    name = `%${name}%`;
    const result = await this.pokemonSearchQuery.refetch({name});
    console.log('result', result);
    return result.data.pokemons;
  }
}
