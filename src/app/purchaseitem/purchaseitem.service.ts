import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseItem } from './purchaseitem';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseItemService {
  private apiServerUrl = environment.apiBaseUrl;
;
  constructor(private http: HttpClient) { }

  public getPurchaseItems(): Observable<PurchaseItem[]> {
    return this.http.get<any>('${this.apiServerUrl}/Purchaseitems/all');
  }

  public addPurchaseItem(Purchaseitem: PurchaseItem): Observable<PurchaseItem> {
    return this.http.post<PurchaseItem>(`${this.apiServerUrl}/Purchaseitem/add`, Purchaseitem);
  }

  public updatePurchaseItem(Purchaseitem: PurchaseItem): Observable<PurchaseItem> {
    return this.http.put<PurchaseItem>(`${this.apiServerUrl}/Purchaseitem/update`, Purchaseitem);
  }

  public deletePurchaseItem(PurchaseitemId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/Purchaseitem/delete/${PurchaseitemId}`);
  }
}
