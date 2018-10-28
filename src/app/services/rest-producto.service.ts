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
  crearProducto(producto :Producto){
    console.log(this.url);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log(producto.nombre);
    return this.http.post<Producto>(this.url,producto, {
      headers: headers,
      withCredentials: true
    });
  }
  actualizarProducto(producto :Producto): Observable<Producto>{
    console.log(this.url);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<Producto>(this.url,producto, {
      headers: headers,
      withCredentials: true
    }); 
  }
  deleteProducto(id){
    console.log(this.url);
    return this.http.delete<Producto>(this.url+"/"+String(id),{withCredentials: true}); 
  }
}
