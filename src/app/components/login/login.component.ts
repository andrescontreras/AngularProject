import { Component, OnInit } from '@angular/core';
//import {RestCLientService } from '../../services/rest-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/class/usuario';

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
    private router: Router) { }

  ngOnInit() {
    this.usuario = new Usuario();
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

