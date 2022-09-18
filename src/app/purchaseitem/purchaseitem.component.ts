import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PurchaseItem } from './purchaseitem';
import { PurchaseItemService } from './purchaseitem.service';

@Component({
  selector: 'app-purchaseitem',
  templateUrl: './purchaseitem.component.html',
  styleUrls: ['./purchaseitem.component.css']
})
export class PurchaseitemComponent implements OnInit {
  public purchaseItems: PurchaseItem[] = [];

  constructor(private PurchaseItemService: PurchaseItemService) { }

  ngOnInit(): void {
    this.getPurchaseItems();
  }


  public getPurchaseItems(): void {
    this.PurchaseItemService.getPurchaseItems().subscribe(
      (response: PurchaseItem[]) => {
        this.purchaseItems = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
