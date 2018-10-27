import { ProductoCom } from '../../class/ProductoCom';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/class/producto';
import { RestProductoService } from '../../services/rest-producto.service'


@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.css']
})
export class NewProductoComponent implements OnInit {

  // objetos del componente
  producto: Producto;


  // elementos del componente
  constructor(private service: RestProductoService) { }

  ngOnInit() {
    this.producto = new Producto();
  }
  crearProducto(){
    console.log("ENTRO crearProducto"); 
    console.log("Producto antes de mandarlo ",this.producto);
    this.service.crearProducto(this.producto).subscribe(p => this.producto = p,
      error=>{console.error("ERROR",error);});
  }

}
