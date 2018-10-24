import { Component, OnInit } from '@angular/core';
//import {RestCLientService } from '../../services/rest-client.service';
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

  doLogin() {
    console.log(this.usuario.usuario,"--",this.usuario.contrasena);
    this.security.login(this.usuario.usuario, this.usuario.contrasena).subscribe(data => {
        this.message = 'Login Ok';
      }, error => {
        console.error(error);
        this.message = JSON.stringify(error);
      });
  }

  gotoHeroes(n) {
    console.log("ROUTER");
    this.router.navigate(['/cajero']);
    if(n === 1)
    {
      this.router.navigate(['/cajero']);
    }
    else if(n == 2)
    {
      this.router.navigate(['/bodeguero']);
    }
  }


}

