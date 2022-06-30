import {Component, Input, OnInit} from '@angular/core';
import {PokemonStat} from "../../interfaces/pokemon";

@Component({
  selector: 'app-pokemon-stat',
  templateUrl: './pokemon-stat.component.html',
  styleUrls: ['./pokemon-stat.component.scss']
})
export class PokemonStatComponent implements OnInit {
  @Input('stat') stat!: PokemonStat

  constructor() {
  }

  ngOnInit(): void {
  }

  getProgressWidth() {
    console.log('get progress');
    if (this.stat.base_stat > 100) {
      return '100%';
    }
    return `${this.stat.base_stat}%`;
  }
}
