import { Producto } from './../class/producto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestProductoService {

  baseUrl = environment.baseUrl;
  url = this.baseUrl + '/producto';
  constructor(private http: HttpClient) { }

  getAllData(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url, {
      withCredentials: true
    });
  }
  getProductoByID(id): Observable<Producto>{
    return this.http.get<Producto>(this.url+ "/"+String(id), {
      withCredentials: true
    });
  }

  getProductoBySKU(sku): Observable<Producto>{
    this.url = this.url + '/c';
    return this.http.get<Producto>(this.url+ "/"+String(sku), {
      withCredentials: true
    });
  }

  getProductoByNombre(nombre): Observable<Producto>{
    return this.http.get<Producto>(this.url+ "/n/"+String(nombre), {
      withCredentials: true
    });
  }

  crearProducto(producto :Producto){
    console.log(this.url+"/crear");
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Producto>(this.url+"/crear",producto, {
      headers: headers,
      withCredentials: true
    });
  }
  actualizarProducto(producto :Producto): Observable<Producto>{
    console.log(this.url+"/update")
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<Producto>(this.url+"/update",producto, {
      headers: headers,
      withCredentials: true
    });
  }
}
