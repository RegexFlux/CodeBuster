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

  private pokemonList: Pokemon[] | null = null;

  constructor(private apollo: Apollo) {
    this.pokemonSearchQuery = this.apollo.watchQuery({
      query: gql`${pokemonSearchQuery}`
    });
    this.pokemonAllQuery = this.apollo.watchQuery({
      query: gql`${pokemonAllQuery}`
    });
    this.loadPokemons();
  }

  async loadPokemons(): Promise<Pokemon[] | null> {
    if (!this.pokemonList) {
      const result = await this.pokemonAllQuery.refetch();
      this.pokemonList = result.data.pokemons;
      return this.pokemonList;
    }
    return this.pokemonList;
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

  async searchPokemons(name: string): Promise<Pokemon[] | null> {
    const pokemonList = await this.loadPokemons();
    if (pokemonList) {
      return pokemonList.filter((pokemon: Pokemon) => pokemon.name.includes(name));
    }
    return null;
  }

  async findPokemon(name: string): Promise<Pokemon | undefined> {
    if (!this.pokemonList) {
      await this.loadPokemons();
    }
    if (this.pokemonList)
      return this.pokemonList.find((pokemon: Pokemon) => pokemon.name.toLowerCase() == name.toLowerCase())
    return undefined;
  }
}
