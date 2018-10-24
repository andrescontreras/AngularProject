import { ProductoCom } from '../../class/ProductoCom';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/class/producto';


@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.css']
})
export class NewProductoComponent implements OnInit {

  // objetos del componente
  producto: Producto;


  // elementos del componente
  constructor() { }

  ngOnInit() {
    this.producto = new Producto();
  }


}
