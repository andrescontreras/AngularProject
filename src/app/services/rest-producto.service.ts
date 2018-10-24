import { Producto } from './../class/producto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestProductoService {

  baseUrl = environment.baseUrl;
  url = this.baseUrl + '/cliente';
  constructor(private http: HttpClient) { }

  getAllData(): Observable<Producto[]>{

    return this.http.get<Producto[]>(this.url);
  }
}
