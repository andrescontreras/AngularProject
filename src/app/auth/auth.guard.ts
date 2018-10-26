import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../services/security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private securityService: SecurityService, private router: Router) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
      if(this.securityService.isLoggedIn){
        console.log("En canActivate , isLoggedIn es : ",this.securityService.isLoggedIn);
        if(this.securityService.rol==="{\"rol\":\"CAJERO\"}"){
          this.router.navigate(['/cajero']);
          return false
        }else if(this.securityService.rol==="{\"rol\":\"BODEGUERO\"}"){
          this.router.navigate(['/bodeguero']);
          return false
        }
        //Colocar condicional de si this.securityService.tipo es igual a cajero
        //redirecciono a la principal de cajero y retorno false

        //El mismo if pero con tipo igual a bodeguero
        return false
      }
    return true;

  }

  checkLogin(url: string): boolean {
    console.log("En checkLogin(), esto es isLoggedIn ---->",this.securityService.isLoggedIn);
    if (!this.securityService.isLoggedIn) {
      // Store the attempted URL for redirecting
      this.securityService.redirectUrl = url;
      // Navigate to the login page with extras
      this.router.navigate(['/login']);
      return false; 
    }
      return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    //console.log('checking child route access');
    //return true;
    let url: string = state.url;
    console.log("Esto es lo que llega de url ",url);
    console.log("Imprimo en canActivateChild ",this.checkLogin(url));
    return this.checkLogin(url);
  }
}
