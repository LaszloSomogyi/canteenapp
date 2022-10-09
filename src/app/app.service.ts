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
  private apiServerUrl = environment.apiBaseUrl;
  private clients_url = "/assets/data/clients.json";
  private products_url = "/assets/data/products.json";
  private purchases_url = "/assets/data/purchases.json";
  private purchaseitems_url = "/assets/data/purchase_items.json";
  public items: PurchaseItem[] = [];
  public purchases: Purchase[] = [];
  public product: Product;
  public purchaseItem: PurchaseItem;
  public productQty: number;

  constructor(private http: HttpClient) { }

  public getClients(): Observable<Client[]> {
    //return this.http.get<Client[]>(`${this.apiServerUrl}/client/all`);
    return this.http.get<Client[]>(this.clients_url);
  }

  public getProducts(): Observable<Product[]> {
    //return this.http.get<Product[]>(`${this.apiServerUrl}/product/all`);
    return this.http.get<Product[]>(this.products_url);
  }

  public getClient(client: Client): Observable<Client> {
    return this.http.get<Client>(this.clients_url);
  }

  public getPuracheItems(): Observable<PurchaseItem[]> {
    //return this.http.get<Product[]>(`${this.apiServerUrl}/product/all`);
    return this.http.get<PurchaseItem[]>(this.purchaseitems_url);
  }

}
