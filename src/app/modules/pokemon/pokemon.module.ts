import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonComponent} from "../../pages/pokemon/pokemon.component";
import {PokemonRoutingModule} from "./pokemon-routing.module";
import {SearchModule} from "../search/search.module";



@NgModule({
  declarations: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    SearchModule
  ]
})
export class PokemonModule { }
