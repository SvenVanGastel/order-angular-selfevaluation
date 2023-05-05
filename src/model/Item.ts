import {Price} from "./Price";
import {EnumValue} from "@angular/compiler-cli/src/ngtsc/partial_evaluator";

export interface Item {
  name: string;
  description: string;
  price: Price;
  amountOfStock: number;
  stockUrgency: EnumValue;
}
