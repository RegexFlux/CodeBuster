import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonComponent} from "../../pages/pokemon/pokemon.component";
import {PokemonRoutingModule} from "./pokemon-routing.module";
import {SearchModule} from "../search/search.module";
import {MaterialModule} from "../material/material.module";
import {IconModule} from "../icon/icon.module";
import {NavigationButtonComponent} from "../../components/buttons/navigation-button/navigation-button.component";
import {TranslationModule} from "../translation/translation.module";
import {PokemonDetailsComponent} from "../../pages/pokemon-details/pokemon-details.component";
import {OrderModule} from "../order/order.module";
import {PokemonStatComponent} from "../../components/pokemon-stat/pokemon-stat.component";



@NgModule({
  declarations: [
    PokemonComponent,
    PokemonDetailsComponent,
    PokemonStatComponent,
    NavigationButtonComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    SearchModule,
    IconModule,
    MaterialModule,
    TranslationModule,
    OrderModule,
  ]
})
export class PokemonModule { }
