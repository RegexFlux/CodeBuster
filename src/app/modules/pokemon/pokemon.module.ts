import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonComponent} from "../../pages/pokemon/pokemon.component";
import {PokemonRoutingModule} from "./pokemon-routing.module";
import {SearchModule} from "../search/search.module";
import {MaterialModule} from "../material/material.module";
import {MatIconModule} from "@angular/material/icon";
import {IconModule} from "../icon/icon.module";
import {NavigationButtonComponent} from "../../components/buttons/navigation-button/navigation-button.component";
import {TranslateModule} from "@ngx-translate/core";
import {TranslationModule} from "../translation/translation.module";



@NgModule({
  declarations: [
    PokemonComponent,
    NavigationButtonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    SearchModule,
    IconModule,
    MaterialModule,
    TranslationModule
  ]
})
export class PokemonModule { }
