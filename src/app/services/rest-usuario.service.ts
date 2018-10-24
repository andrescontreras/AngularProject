import { Usuario } from './../class/usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestUsuarioService {
  baseUrl = environment.baseUrl;
  url = this.baseUrl + '/usuario';
  constructor(private http: HttpClient) { }

  getAllData(): Observable<Usuario[]>{

    return this.http.get<Usuario[]>(this.url);
  }
}
