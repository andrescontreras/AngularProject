import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/class/usuario';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  result: any ;
  message: any;
  tipo:string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private security: SecurityService) { }

  ngOnInit() {
    this.usuario = new Usuario();
    console.log("Esto es loggedIn ",this.security.isLoggedIn);
    //Llamar funcion para saber si esta logeado
    this.sesion();
  }

  login1()
  {
    if(this.usuario.usuario === 'a')
      {
        this.security.login("","");
        this.router.navigate(['/cajero']);
      }
      else
      {
        this.security.login("","");
        this.router.navigate(['/bodeguero']);
      }
  }

  doLogin() {
    console.log(this.usuario.usuario,"--",this.usuario.password);
    this.security.login(this.usuario.usuario, this.usuario.password).subscribe(data => {
        console.log("CORRECTO");
        this.security.isLoggedIn=true;
        this.redireccionar();
      }, error => {
        console.error("ERROR",error);
        this.message = JSON.stringify(error);
        this.security.isLoggedIn=false;
      });
    }


  redireccionar() {
    console.log("ROUTER en redireccionar");
    //this.router.navigate(['/cajero']);
    this.security.tipousuario().subscribe(data => {
      console.log("CORRECTO", data);
      this.tipo = JSON.stringify(data);
      console.log("+++++++++ES: ",this.tipo);
      this.security.rol=this.tipo;
      this.redireccionarUsuario();

    }, error => {
      console.error("ERROR en redireccionar",error);
      this.message = JSON.stringify(error);
    });
  }
  redireccionarUsuario(){
    if(this.tipo === "{\"rol\":\"CAJERO\"}")
      {
        this.router.navigate(['/cajero']);
      }
      else
      {
        this.router.navigate(['/bodeguero']);
      }
  }
  sesion(){
    this.security.tipousuario().subscribe(data => {
      console.log("CORRECTO, hay una sesion iniciada");
      this.security.isLoggedIn=true;
      this.tipo = JSON.stringify(data);
      this.security.rol=this.tipo;
      this.redireccionarUsuario();
    }, error => {
      console.error("ERROR, no hay sesion iniciada",error);
      this.message = JSON.stringify(error);
      this.security.isLoggedIn=false;
    });
  }

}

