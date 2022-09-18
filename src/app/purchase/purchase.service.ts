import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchase } from './purchase';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private apiServerUrl = environment.apiBaseUrl;
;
  constructor(private http: HttpClient) { }

  public getPurchases(): Observable<Purchase[]> {
    return this.http.get<any>('${this.apiServerUrl}/Purchases/all');
  }
}
