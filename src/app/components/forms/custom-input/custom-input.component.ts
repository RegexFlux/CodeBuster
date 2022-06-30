import {Component, Input} from '@angular/core';
import {TextInterface} from "../../../interfaces/input";
import {FormCustomInputComponent} from "../../../helpers/form-custom-input/form-custom-input.component";
import {FormConfig} from "../../../interfaces/form";

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent extends FormCustomInputComponent {
  @Input('inputConfig') override config!: TextInterface;
  @Input('formConfig') override formConfig!: FormConfig;

  constructor() {
    super();
  }


}
