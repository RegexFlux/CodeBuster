import {Component, Input} from '@angular/core';
import {SelectInterface} from "../../../interfaces/input";
import {FormCustomInputComponent} from "../../../helpers/form-custom-input/form-custom-input.component";

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent extends FormCustomInputComponent {
  @Input('selectConfig') override config!: SelectInterface;

  constructor() {
    super();
  }

}
