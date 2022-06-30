import {Component, Input} from '@angular/core';
import {FormCustomInputComponent} from "../../../helpers/form-custom-input/form-custom-input.component";
import {CheckboxInterface} from "../../../interfaces/input";

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent extends FormCustomInputComponent {
  @Input('inputConfig') override config!: CheckboxInterface;
}
