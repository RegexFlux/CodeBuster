import {Injectable} from '@angular/core';
import {Booster} from "../interfaces/booster";
import {CartItem} from "../interfaces/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private currentCart: CartItem[] = [];

  constructor() {
  }

  private getItemInCart(boosterName: string): CartItem | undefined {
    return this.currentCart.find((item) => item.booster.name == boosterName)
  }

  addBoosterToCard(booster: Booster, quantity: number) {
    const cartItem = this.getItemInCart(booster.name);
    if (!cartItem) {
      this.currentCart.push({
        booster, price: booster.price, quantity
      })
    } else {
      cartItem.quantity += quantity;
    }
    console.log('cart upd', this.currentCart);
  }
}
