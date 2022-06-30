import { Component} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {SubscriptionComponent} from "../../helpers/subscription/subscription.component";
import {CartItem} from "../../interfaces/cart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends SubscriptionComponent {
  public cart: CartItem[] = [];

  constructor(private cartService: CartService) {
    super();
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    // this.cartService.getCartSubject().pipe(takeUntil(this.destroyed$)).subscribe(
    //   (cart) => this.cart = cart
    // )
  }

  removeItem(cartItem: CartItem) {
    if (cartItem.quantity == 1) {
      this.cartService.removeFromCart(cartItem);
    }
    else if (cartItem.quantity > 0) {
      cartItem.quantity -= 1;
    }
  }

  addItem(cartItem: CartItem) {
    cartItem.quantity += 1;
  }

}
