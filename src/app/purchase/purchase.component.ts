import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Purchase } from './purchase';
import { PurchaseService } from './purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  public purchases: Purchase[] = [];

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.getPurchases();
  }

  public getPurchases(): void {
    this.purchaseService.getPurchases().subscribe(
      (response: Purchase[]) => {
        this.purchases = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


}
