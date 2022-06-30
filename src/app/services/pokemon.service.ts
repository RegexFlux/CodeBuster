import {Injectable} from '@angular/core';
import {Apollo, gql, QueryRef} from "apollo-angular";
import {Pokemon} from "../interfaces/pokemon";
import {pokemonAllQuery, pokemonSearchQuery} from "../constants/pokemonQueries";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonSearchQuery: QueryRef<{ pokemons: Pokemon[] }, { name: string }>
  private pokemonAllQuery: QueryRef<{ pokemons: Pokemon[] }>

  private _pokemonList: Pokemon[] | null = null;

  constructor(private apollo: Apollo) {
    this.pokemonSearchQuery = this.apollo.watchQuery({
      query: gql`${pokemonSearchQuery}`
    });
    this.pokemonAllQuery = this.apollo.watchQuery({
      query: gql`${pokemonAllQuery}`
    });
    this.loadPokemons();
  }

  get pokemonList(): Pokemon[] | null {
    return this._pokemonList;
  }

  async loadPokemons(): Promise<Pokemon[]> {
    if (!this._pokemonList) {
      const result = await this.pokemonAllQuery.refetch();
      this._pokemonList = result.data.pokemons;
      return this._pokemonList;
    }
    return this._pokemonList;
  }

  /**
   * Disable to be fair with api provider
   * @param name
   */
  // async searchPokemons(name: string): Promise<Pokemon[]> {
  //   name = `%${name}%`;
  //   const result = await this.pokemonSearchQuery.refetch({name});
  //   console.log('result', result);
  //   return result.data.pokemons;
  // }
}
