import { Cliente } from './../../class/cliente';
import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/class/compra';
import { Producto } from 'src/app/class/producto';
import { Usuario } from 'src/app/class/usuario';
import { isEmpty } from 'rxjs/operators';
import { RestProductoService } from 'src/app/services/rest-producto.service';

@Component({
  selector: 'app-new-compra',
  templateUrl: './new-compra.component.html',
  styleUrls: ['./new-compra.component.css']
})
export class NewCompraComponent implements OnInit {

  skup = "";
  nombrep = "";
  estado = "";

  compra: Compra;
  productos: Producto[];
  cliente: Cliente;
  cantidades: number[];
  cont: number = 1;
  success = false;
  danger = false;
  msg = 'usuario creado';
  constructor(private service: RestProductoService) {

   }

  ngOnInit() {
    this.productos = [];
    this.cliente = new Cliente();
    this.cantidades = [];
  }

  terminarCompra(){
      this.compra.productos = this.productos;

  }

  addProduct(p: Producto){
   this.productos.push(p);
   this.cont ++;
  }

  addCantidad(i){

    if(this.productos[i].cantidad ){

    }
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
    console.log("ENTRO BUSCAR");
    console.log("sku-",this.skup,"-nombre-",this.nombrep)
    let product: Producto;
    if(this.skup !== '')
    {
      // bucar producto por SKU


      this.service.getProductoBySKU(this.skup).subscribe( (p: Producto)=> {
        product = p;
        this.estado = product.nombre;
        this.addProduct(p);
        this.skup = "";
        this.nombrep ="";
      });


    } else if ( this.nombrep !== '')
    {
      // buscar producto por nombre
      this.service.getProductoByNombre(this.nombrep).subscribe( (p: Producto) => {
        console.log("99999:" ,p);
        product = p;
        this.estado = product.nombre;
        this.addProduct(p);
        this.skup = "";
        this.nombrep ="";
      });
      //this.estado =  product.nombre;
    } else{
      // mostrar error
      this.estado = "VACIO";
      console.log("VACIO");
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
