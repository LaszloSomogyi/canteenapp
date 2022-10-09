import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { Purchase } from '../purchase/purchase';
import { PurchaseItem } from '../purchaseitem/purchaseitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItem: Product;
  public cartItems: Product[] = [];
  public qty: number;

  constructor() { }

  public addProductToCart(product: Product) {
    this.cartItems.push(product);
  }

  public removeProductFromCart(product: Product) {
    const index = this.cartItems.indexOf(product);
    this.cartItems.splice(index, 1);
  }

  public getCartItem() {
    return this.cartItem;
  }

  public getCartItems() {
    return this.cartItems;
  }

  public clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }

  public incrementCartItem(qty: number) {
    qty += 1;
  }

  public decrementCartItem(qty: number) {
    if (qty > 1) {
      qty -=1;
    }
  }

}
