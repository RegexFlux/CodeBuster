import {Component, Input, OnInit} from '@angular/core';
import {PokemonType, PokemonTypeAsset} from "../../interfaces/pokemon";
import {assetPath, pokemonTypesAssets} from "../../constants/pokemonTypes";

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.scss']
})
export class PokemonTypeComponent implements OnInit {
  @Input('type') type!: PokemonType;
  public config?: PokemonTypeAsset;

  constructor() {
  }

  ngOnInit(): void {
    this.config = pokemonTypesAssets[this.type.pokemon_v2_type.name];
    this.config.assetName = assetPath + this.config.assetName;
  }

}
