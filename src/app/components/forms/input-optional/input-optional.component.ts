import {Component, Input, OnInit} from '@angular/core';
import {InputOptional} from "../../../interfaces/input";


@Component({
  selector: 'app-input-optional',
  templateUrl: './input-optional.component.html',
  styleUrls: ['./input-optional.component.scss']
})
export class InputOptionalComponent implements OnInit {
  @Input('config') config!: InputOptional

  constructor() {
  }

  ngOnInit(): void {
  }

}
