import { Injectable } from '@angular/core';
import { Compra } from '../class/compra';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  getCompraByID(id){
    return this.http.get<Compra>(this.url+ "/"+String(id), {
      withCredentials: true
    });
  }

  crearCompra(compra :Compra): Observable<Compra>{

    console.log(compra);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Compra>(this.url, compra, {
      headers: headers,
      withCredentials: true
    });
  }

}
