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
  constructor(private route: ActivatedRoute,
    private router: Router,
    private security: SecurityService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  login1()
  {
    if(this.usuario.usuario === 'a')
      {
        this.router.navigate(['/cajero']);
      }
      else
      {
        this.router.navigate(['/bodeguero']);
      }
  }
  doLogin() {
    console.log(this.usuario.usuario,"--",this.usuario.password);
    this.security.login(this.usuario.usuario, this.usuario.password).subscribe(data => {
        console.log("CORRECTO");
        this.redireccionar();

      }, error => {
        console.error("ERROR",error);
        this.message = JSON.stringify(error);
      });


    }

  redireccionar() {
    let tipo;
    console.log("ROUTER");
    //this.router.navigate(['/cajero']);
    this.security.tipousuario().subscribe(data => {
      console.log("CORRECTO", data);
      tipo = JSON.stringify(data);
      console.log("+++++++++ES: ",tipo);
      if(tipo === "{\"rol\":\"CAJERO\"}")
      {
        this.router.navigate(['/cajero']);
      }
      else
      {
        this.router.navigate(['/bodeguero']);
      }

    }, error => {
      console.error("ERROR",error);
      this.message = JSON.stringify(error);
    });
  }


}

