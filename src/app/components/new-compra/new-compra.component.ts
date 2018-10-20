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
  constructor() {
    this.productos = [];
   }

  ngOnInit() {
  }

  terminarCompra(){

  }

  addProduct(){
   var p = new Producto(1, 10, 12165464, 'papas', 30000, 'Kg');
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

}
