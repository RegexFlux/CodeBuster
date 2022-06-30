import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PokemonComponent} from "../../pages/pokemon/pokemon.component";
import {PokemonDetailsComponent} from "../../pages/pokemon-details/pokemon-details.component";

const routes: Routes = [
  {
    path: '', component: PokemonComponent,
  },
  {
    path: ':name', component: PokemonDetailsComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
