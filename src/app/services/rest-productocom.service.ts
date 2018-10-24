import { ProductoCom } from './../class/ProductoCom';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestProductocomService {

  baseUrl = environment.baseUrl;
  url = this.baseUrl + '/productocom';
  constructor(private http: HttpClient) { }

  getAllData(): Observable<ProductoCom[]>{

    return this.http.get<ProductoCom[]>(this.url);
  }
}
