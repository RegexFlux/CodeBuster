import {Component, OnInit} from '@angular/core';
import {SelectInterface, TextInterface} from "../../../interfaces/input";
import {boosterInfos, boostersSelect, quantityInput} from "../../../constants/boosters";
import {Booster} from "../../../interfaces/booster";
import {FormControl, FormGroup} from "@angular/forms";
import {FormConfig} from "../../../interfaces/form";

@Component({
  selector: 'app-order-selection',
  templateUrl: './order-selection.component.html',
  styleUrls: ['./order-selection.component.scss']
})
export class OrderSelectionComponent implements OnInit {

  public selectedBooster?: Booster;

  public generationSelect: SelectInterface = {
    ...boostersSelect,
    handleChanges: (value: any) => this.handleGenerationChanges(value)
  }

  public orderQuantityInput: TextInterface = {
    ...quantityInput,
    handleChanges: (value: any) => this.handleOrderQuantityChanges(value)
  }

  public formGroup!: FormGroup;

  public orderQuantity: FormControl = new FormControl(1);

  public orderQuantityFormConfig!: FormConfig;

  constructor() {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      orderQuantity: this.orderQuantity
    })
    this.orderQuantityFormConfig = {
      formGroup: this.formGroup,
      formControl: this.orderQuantity
    }
  }

  handleGenerationChanges(event: any) {
    for (const booster of boosterInfos) {
      if (booster.name == event.value) {
        this.selectedBooster = booster;
        return;
      }
    }
  }

  handleOrderQuantityChanges(value: any) {
    if (value) {
      console.log('1');
      value = value.replace(/[^0-9]/gi, '');
      if (this.selectedBooster && this.orderQuantityInput.suffix)
        this.orderQuantityInput.suffix.element = `${value * this.selectedBooster.price} $`;
    } else {
      value = 1;
    }
    this.orderQuantity.setValue(value, {
      emitEvent: false
    });
  }
}
