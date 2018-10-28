import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/class/usuario';
import { RestUsuarioService } from '../../services/rest-usuario.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario : Usuario ;
  bodeguero : boolean = true;
  cajero : boolean = false ;
  constructor(private service : RestUsuarioService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }
  registrarUsuario(){
    if(this.bodeguero){
      this.usuario.tipo="BODEGUERO";
    }else{
      this.usuario.tipo="CAJERO";
    }
    console.log("Estado de bodeguero ", this.bodeguero);
    console.log("Estado de cajero ", this.cajero);
    //this.service.crearUsuario(this.usuario).subscribe(p => this.usuario = p,
      //error=>{console.error("ERROR",error);});
  }
  cambioCajero(){
    this.cajero=true;
      this.bodeguero=false;
    
  }
  cambioBodeguero(){
      this.bodeguero=true;
      this.cajero=false;
    
  }
}
