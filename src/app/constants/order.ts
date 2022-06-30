import {CardInterface, CheckboxInterface, TextInterface} from "../interfaces/input";
import {Validators} from "@angular/forms";
import {CardOperation} from "../enums/card";

export const orderFirstNameInput: TextInterface = {
  name: 'orderFirstName',
  placeholder: "David",
  label: 'order.firstname',
  prefix: {
    isIcon: true,
    element: 'face'
  },
  textType: "text",
  validators: [Validators.required]
}

export const orderLastNameInput: TextInterface = {
  name: 'orderLastName',
  placeholder: "Henry",
  label: 'order.lastname',
  prefix: {
    isIcon: true,
    element: 'face'
  },
  textType: "text",
  validators: [Validators.required]
}

export const orderAddressInput: TextInterface = {
  name: 'orderAddress',
  placeholder: "47 North Street London E58 0EB",
  label: 'order.address',
  prefix: {
    isIcon: true,
    element: 'home'
  },
  textType: "text",
  validators: [Validators.required]
}

export const orderEmailAddressInput: TextInterface = {
  name: 'orderEmailAddress',
  label: 'order.email',
  placeholder: "contact@gmail.com",
  prefix: {
    isIcon: true,
    element: 'mail'
  },
  textType: "text",
  validators: [Validators.required, Validators.email]
}

export const orderPhoneInput: TextInterface = {
  name: 'orderPhone',
  label: 'order.phone',
  placeholder: "+33 6 89 56 45 45",
  prefix: {
    isIcon: true,
    element: 'smartphone'
  },
  textType: "text",
  validators: [Validators.required]
}

export const orderCguCheckBox: CheckboxInterface = {
  name: "orderCgu",
  label: 'order.consentCgu',
  validators: [Validators.requiredTrue]
}

export const orderContactCheckBox: CheckboxInterface = {
  name: "orderContact",
  label: 'order.consentContact',
  validators: [Validators.requiredTrue]
}

export const orderCardNumber: CardInterface = {
  name: "orderCardNumber",
  label: 'order.cardNumber',
  placeholder: "XXXX XXXX XXXX XXXX",
  textType: "text",
  validators: [Validators.required],
  cardOperation: CardOperation.Number
}

export const orderCardCVC: CardInterface = {
  name: "orderCardCVC",
  label: 'order.cardCVC',
  placeholder: "XXX",
  textType: "text",
  validators: [Validators.required, Validators.maxLength(3), Validators.minLength(3)],
  cardOperation: CardOperation.CVC
}

export const orderCardExpiration: CardInterface = {
  name: "orderCardExpiration",
  label: 'order.cardExpiration',
  placeholder: "XX/XX/XXXX",
  textType: "date",
  validators: [Validators.required],
  cardOperation: CardOperation.Date
}
