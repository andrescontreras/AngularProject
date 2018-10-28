import { Cliente } from './../../class/cliente';
import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/class/compra';
import { Producto } from 'src/app/class/producto';
import { Usuario } from 'src/app/class/usuario';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-new-compra',
  templateUrl: './new-compra.component.html',
  styleUrls: ['./new-compra.component.css']
})
export class NewCompraComponent implements OnInit {

  skup = "";
  nombrep = "";

  compra: Compra;
  productos: Producto[];
  cliente: Cliente;
  cont: number = 1;
  success = false;
  danger = false;
  msg = 'usuario creado';
  constructor() {
    this.productos = [];
    this.cliente = new Cliente();
   }

  ngOnInit() {
  }

  terminarCompra(){
      this.compra.comprados = this.productos;

  }

  addProduct(){
   let p = new Producto();
   p.nombre ="prod1-"+this.cont;
   p.precio = 125000 * this.cont;
   p.cantidad = 6 * this.cont;
   this.productos.push(p);
   this.cont ++;
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

  buscarProd(){
    if(this.skup != "")
    {
      // bucar producto por SKU

    }
    else if( this.nombrep != "")
    {
      // buscar producto por nombre
    }
    else{
      // mostrar error
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
