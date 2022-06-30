import {ValidatorFn} from "@angular/forms";
import {CardOperation} from "../enums/card";

export interface InputInterface {
  name: string;
  label?: string;
  handleChanges?: Function;
  value?: string | number;
  prefix?: InputOptional;
  suffix?: InputOptional;
  validators?: ValidatorFn[]
}

export interface TextInterface extends InputInterface {
  placeholder: string;
  textType: string;
}

export interface SelectInterface extends InputInterface {
  options: SelectOptionInterface[]
}

export interface SelectOptionInterface {
  value: any;
  optionPrimaryInfo: string;
  optionSecondaryInfo: string;
}

export interface InputOptional {
  isIcon: boolean;
  element: string;
}

export interface CheckboxInterface extends InputInterface{
  checked?: boolean;
}

export interface CardInterface extends TextInterface {
  cardOperation: CardOperation;
}
