import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from './client/client';
import { PurchaseItem } from './purchaseitem/purchaseitem';
import { PurchaseItemService } from './purchaseitem/purchaseitem.service';
import { ClientService } from './client/client.service';
import { CanteenService } from './app.service';
import { Product } from './product/product';
import { CartItem } from './cart/cartitem';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Purchase } from './purchase/purchase';
import { DataSource } from '@angular/cdk/collections';
import { ReplaySubject, Observable } from 'rxjs';
import { ProductService } from './product/product.service';
import { CartService } from './cart/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public purchaseitem: PurchaseItem;
  public purchaseitems: PurchaseItem[];
  public currentClient: Client;
  public clients: Client[];
  public product: Product;
  public products: Product[];
  public currentPurchase: Purchase;
  public rows: any[];
  public cartItem: CartItem;
  public cartItems: Product[];
  @Input() purchase!: Purchase;
  public dataSource = new CanteenDataSource(this.canteenService);
  public displayedColumns: string[] = ['name', 'price', 'actions'];

  constructor(private canteenService: CanteenService, private cartService: CartService) {}

  ngOnInit(): void {
   this.getPurchaseitems();
   this.getClients();
   this.getProducts();
   this.product = {"id": 1, "name": "zsemle", "price": 35};
  }

  addToCart(product: Product) {
    this.cartService.addProductToCart(product);
  }

  public getClients(): void {
    this.canteenService.getClients().subscribe(
      (response: Client[]) => {
        this.clients = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getProducts(): void {
    this.canteenService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getClient(id: number): Client {
    console.log(id);
    for (var client of this.clients) {
      if (client.id == id) {
        this.currentClient = client;
      }
    }
      return this.currentClient;
  }

  public getPurchaseitems(): void {
    this.canteenService.getPuracheItems().subscribe(
      (response: PurchaseItem[]) => {
        this.purchaseitems = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}

export class CanteenDataSource extends DataSource<any> {

  constructor(private canteenService: CanteenService) {
   super();
  }

  connect(): Observable<Product[]> {
    return this.canteenService.getProducts()
  }

  disconnect() {}
}
