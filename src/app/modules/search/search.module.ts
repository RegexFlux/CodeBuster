import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GraphQLModule} from "../../graphql.module";
import {PokemonListComponent} from "../../components/pokemon-list/pokemon-list.component";
import {SearchComponent} from "../../pages/search/search.component";
import {SearchInputComponent} from "../../components/search-input/search-input.component";
import {IconModule} from "../icon/icon.module";
import {MaterialModule} from "../material/material.module";
import {PokemonCardComponent} from "../../components/pokemon-card/pokemon-card.component";
import {SwiperModule} from "swiper/angular";
import {RouterModule} from "@angular/router";
import {ScrollingModule} from "@angular/cdk/scrolling";

@NgModule({
  declarations: [
    SearchComponent,
    SearchInputComponent,
    PokemonListComponent,
    PokemonCardComponent
  ],
  exports: [
    SearchComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    GraphQLModule,
    IconModule,
    MaterialModule,
    SwiperModule,
    RouterModule,
    ScrollingModule
  ]
})
export class SearchModule {
}
