import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiServerUrl = environment.apiBaseUrl;
;
  constructor(private http: HttpClient) { }

  public getClients(): Observable<Client[]> {
    return this.http.get<any>('${this.apiServerUrl}/Clients/all');
  }
}
