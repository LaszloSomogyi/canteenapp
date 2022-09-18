import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from './client/client';
import { Product } from './product/product';
import { Purchase } from './purchase/purchase';
import { PurchaseItem } from './purchaseitem/purchaseitem';
import { ClientService } from './client/client.service';
import { ProductService } from './product/product.service';
import { PurchaseService } from './purchase/purchase.service';
import { PurchaseItemService } from './purchaseitem/purchaseitem.service';

@Injectable({
  providedIn: 'root'
})
export class CanteenService {
  private apiServerUrl = ''
;
  constructor(private http: HttpClient) { }


}
