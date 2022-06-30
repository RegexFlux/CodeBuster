import {Booster} from "./booster";

export interface CartItem {
  booster: Booster;
  quantity: number;
  price: number;
}
