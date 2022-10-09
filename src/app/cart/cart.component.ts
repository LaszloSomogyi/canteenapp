import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from './cart.service';
import { Product } from '../product/product';
import { PurchaseItem } from '../purchaseitem/purchaseitem';
import { Purchase } from '../purchase/purchase';
import { CartItem } from './cartitem';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  form: FormGroup;
  cartitems = this.cartService.getCartItems();
  //@Input() cartItem = this.cartService.getCartItem();
  @Input() cartItem!: CartItem | undefined;
  @Input() product!: Product | undefined;
  @Input() purchase!: Purchase;
  @Input() purchaseitem!: PurchaseItem;
  @Output() insertedIntoCart = new EventEmitter();
  checkoutForm = this.fb.group( { } );

  constructor(private cartService: CartService, private fb: FormBuilder) { }

  ngOnInit(): void {
    const myFields = this.buildFormFieldsFormGroup();
  }

  onSubmit(): void {
    this.cartitems = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  private buildFormFieldsFormGroup(): FormGroup {
    const membersLength = this.cartitems.length;
    let response: FormGroup = this.fb.group({ dummy: ['', []] });

    for (let i = 0; i < membersLength; i++) {
      response.addControl(`field${i}`, new FormControl());
    }
    console.log('response: ', response);
    return response;
  }


}
