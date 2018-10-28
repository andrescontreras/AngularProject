import { Injectable } from '@angular/core';
import { Compra } from '../class/compra';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestCompraService {

  baseUrl = environment.baseUrl;
  url = this.baseUrl + '/compra';
  constructor(private http: HttpClient) {

  }

  getAllData(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.url, {
      withCredentials: true
    });
  }


}
