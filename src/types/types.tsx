export interface Props {
  car: {
    brand: string;
    model: string;
    year: number;
    color: string;
    price: number;
    image: string;
  };
}
export interface data {
  data: FormData;
}
export interface StateForm {
  inputFilled: boolean;
  dateInputFilled: boolean;
  selectFilled: boolean;
  checkbox1Filled: boolean;
  checkbox2Filled: boolean;
  onRadioFilled: boolean;
  offRadioFilled: boolean;
  imageFilled: boolean;
}
export interface StateNewCard {
  textInputValue: string;
  dateInputValue: string;
  colorSelectionValue: string;
  checkbox1Checked: boolean;
  checkbox2Checked: boolean;
  switcherValue: string;
  imageSrc: string;
}
