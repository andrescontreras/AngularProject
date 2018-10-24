import { Cliente } from './../class/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestClienteService {

  baseUrl = environment.baseUrl;
  url = this.baseUrl + '/cliente';
  constructor(private http: HttpClient) {
  }

  getAllData(): Observable<Cliente[]>{

    return this.http.get<Cliente[]>(this.url);
  }

  getClientebyId(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(this.url);
  }
}
