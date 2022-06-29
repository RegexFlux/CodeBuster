import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PokemonComponent} from "../../pages/pokemon/pokemon.component";

const routes: Routes = [
  {
    path: '', component: PokemonComponent,
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
