import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  isLoggedIn = false;
  redirectUrl: string;
  rol:string;

  constructor(private http: HttpClient) { }
  login(username: string, password: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post('http://localhost:8080/login', null, {
      headers: headers,
      params: params,
      withCredentials: true
    });
  }
  
  logout() {
    this.isLoggedIn = false;
    console.log("Se va a intentar deslogear");
    return this.http.post('http://localhost:8080/logout', '', {
      withCredentials: true
    });
  }
  tipousuario() {
    const params = new HttpParams()
    return this.http.post('http://localhost:8080/api/current-user', "", {
      withCredentials: true
    });
  }

  sesionIniciada(){
    const params = new HttpParams()
    return this.http.post('http://localhost:8080/api/sesion', "", {
      withCredentials: true
    });
  }
/*
  login(username: string, password: string) {
    this.isLoggedIn=true;
  }
  */
 /*
  logout(): void {
    this.isLoggedIn = false;
  }*/
  
}
