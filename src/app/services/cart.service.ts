import {Injectable} from '@angular/core';
import {Booster} from "../interfaces/booster";
import {CartItem} from "../interfaces/cart";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private currentCart: CartItem[] = [];

  private cartSubject = new Subject<CartItem[]>();

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

  getCart(): CartItem[] {
    return this.currentCart;
  }

  getCartSubject(): Subject<CartItem[]> {
    return this.cartSubject;
  }

  removeFromCart(toDelete: CartItem) {
    this.currentCart.splice(this.currentCart.findIndex((item) => item.booster == toDelete.booster), 1)
  }
}
