import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from './client/client';
import { PurchaseItem } from './purchaseitem/purchaseitem';
import { PurchaseItemService } from './purchaseitem/purchaseitem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public purchaseitems: PurchaseItem[] = [];
  public clients: Client[] = [];

  constructor(private purchaseItemService: PurchaseItemService) { }

  ngOnInit(): void {
    this.getPurchaseItems();
  }

  public getPurchaseItems(): void {
    this.purchaseItemService.getPurchaseItems().subscribe(
      (response: PurchaseItem[]) => {
        this.purchaseitems = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }



}
