import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/class/compra';
import { Producto } from 'src/app/class/producto';

@Component({
  selector: 'app-new-compra',
  templateUrl: './new-compra.component.html',
  styleUrls: ['./new-compra.component.css']
})
export class NewCompraComponent implements OnInit {

  compra: Compra;
  productos: Producto[];

  success = false;
  danger = false;
  msg = 'usuario creado';
  constructor() {
    this.productos = [];
   }

  ngOnInit() {
  }

  terminarCompra(){

  }

  addProduct(){
   var p = new Producto();
   this.productos.push(p);
  }

  addCantidad(i){
    this.productos[i].cantidad = this.productos[i].cantidad + 1;
  }


  removeCantidad(i){

    var cant = this.productos[i].cantidad - 1;
    if (cant > 0){
      this.productos[i].cantidad = cant;
    }
    else{
      this.productos.splice(i,1);
    }
  }


  // parte usuario
  buscarUser(){
    this.success = !this.success;
    this.danger = !this.success;
  }

  crearUser(){
    this.danger = !this.danger;
    this.success = !this.danger;
  }

}
