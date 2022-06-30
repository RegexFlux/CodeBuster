import {Component, Input} from '@angular/core';
import {FormCustomInputComponent} from "../../../helpers/form-custom-input/form-custom-input.component";
import {CardInterface} from "../../../interfaces/input";

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent extends FormCustomInputComponent {
  @Input('inputConfig') override config!: CardInterface;
}
