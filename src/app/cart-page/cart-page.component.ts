import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent {
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.setCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityIntString: string) {
    const quantity = parseInt(quantityIntString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }
}
