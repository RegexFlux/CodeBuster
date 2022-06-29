import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";

const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'pokemon', loadChildren: () => import('./modules/pokemon/pokemon.module').then(m => m.PokemonModule)
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
