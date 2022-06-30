import {Component, OnInit} from '@angular/core';
import {TextInterface} from "../../../interfaces/input";
import {quantityInput} from "../../../constants/boosters";
import {
  orderAddressInput, orderCardCVC, orderCardExpiration, orderCardNumber, orderCguCheckBox, orderContactCheckBox,
  orderEmailAddressInput,
  orderFirstNameInput,
  orderLastNameInput, orderPhoneInput
} from "../../../constants/order";
import {FormControl, FormGroup} from "@angular/forms";
import {FormConfig} from "../../../interfaces/form";

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {
  public formGroup!: FormGroup;

  public controls = {
    orderFirstName: orderFirstNameInput,
    orderLastName: orderLastNameInput,
    orderAddress: orderAddressInput,
    orderEmailAddress: orderEmailAddressInput,
    orderPhone: orderPhoneInput,
    contact: orderContactCheckBox,
    cgu: orderCguCheckBox,
    cardNumber: orderCardNumber,
    cardExpiration: orderCardExpiration,
    cardCVC: orderCardCVC
  }
  private formControls: {[v: string]: FormControl} = {};

  constructor() {
  }

  ngOnInit(): void {
    this.buildForm();
    this.formGroup = new FormGroup(this.formControls);
  }

  buildForm(): void {
    for (const [key, control] of Object.entries(this.controls)) {
      this.formControls[key] = new FormControl(control.value, control.validators);
    }
  }

  getFormConfig(controlName: string): FormConfig {
    return {
      formControl: this.formControls[controlName],
      formGroup: this.formGroup
    }
  }

  confirmForm() {
    if (this.formGroup.valid) {

    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
