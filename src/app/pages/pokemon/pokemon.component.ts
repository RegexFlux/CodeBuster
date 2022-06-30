import { Component, OnInit } from '@angular/core';
import {NavigationButton} from "../../interfaces/button";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  navigationConfig: NavigationButton = {
    routerLink: '',
    text: 'navigation.home'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
