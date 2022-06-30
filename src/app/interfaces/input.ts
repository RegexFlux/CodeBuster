export interface InputInterface {
  label?: string;
  handleChanges?: Function;
  value?: any;
  prefix?: InputOptional;
  suffix?: InputOptional;
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
