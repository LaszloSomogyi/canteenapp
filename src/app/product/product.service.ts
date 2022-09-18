import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiServerUrl = environment.apiBaseUrl;
;
  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<any>('${this.apiServerUrl}/Products/all');
  }
}
